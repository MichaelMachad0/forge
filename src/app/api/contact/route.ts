import { createHash } from "node:crypto";
import { escapeHtml, validateContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

const windowMs = 15 * 60 * 1000;
const maxRequests = 3;
const submissions = new Map<string, number[]>();

function json(body: object, status: number) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isRateLimited(ip: string, now: number) {
  if (submissions.size > 1_000) {
    for (const [key, timestamps] of submissions) {
      if (timestamps.every((timestamp) => now - timestamp >= windowMs)) submissions.delete(key);
    }
  }
  const recent = (submissions.get(ip) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= maxRequests) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    const requestHost =
      request.headers.get("x-forwarded-host") ??
      request.headers.get("host") ??
      new URL(request.url).host;
    try {
      if (new URL(requestOrigin).host !== requestHost) {
        return json({ error: "Origem não permitida." }, 403);
      }
    } catch {
      return json({ error: "Origem não permitida." }, 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return json({ error: "Mensagem muito grande." }, 413);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Dados do formulário inválidos." }, 400);
  }

  const validation = validateContactPayload(body);
  if (!validation.success) return json({ error: validation.error }, 400);

  const { data } = validation;
  if (data.website) return json({ success: true }, 200);

  const now = Date.now();
  if (!data.startedAt || now - data.startedAt < 1_500) {
    return json({ error: "Aguarde um instante antes de enviar." }, 400);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip, now)) {
    return json({ error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return json({ error: "O envio por formulário está temporariamente indisponível." }, 503);
  }

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: escapeHtml(data.company || "Não informada"),
    message: escapeHtml(data.message).replace(/\n/g, "<br />"),
  };
  const idempotencyKey = createHash("sha256")
    .update(`${data.email}:${data.message}`)
    .digest("hex")
    .slice(0, 32);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `forge-contact-${idempotencyKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Novo contato FORGE — ${data.name}`,
        html: `<h1>Novo contato pelo FORGE</h1><p><strong>Nome:</strong> ${safe.name}</p><p><strong>E-mail:</strong> ${safe.email}</p><p><strong>Empresa:</strong> ${safe.company}</p><p><strong>Mensagem:</strong><br />${safe.message}</p>`,
      }),
    });

    if (!response.ok) {
      return json({ error: "Não foi possível enviar agora. Tente novamente mais tarde." }, 502);
    }

    return json({ success: true }, 200);
  } catch {
    return json({ error: "Não foi possível enviar agora. Tente novamente mais tarde." }, 502);
  }
}
