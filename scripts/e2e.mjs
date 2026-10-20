import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { request } from "node:http";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import process from "node:process";

const port = 3207;
const origin = `http://127.0.0.1:${port}`;
const nextCli = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    PORT: String(port),
    RESEND_API_KEY: "",
    CONTACT_TO_EMAIL: "",
    CONTACT_FROM_EMAIL: "",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => { output += chunk.toString(); });
server.stderr.on("data", (chunk) => { output += chunk.toString(); });

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await delay(250);
  }
  throw new Error(`Servidor E2E não iniciou.\n${output}`);
}

async function get(pathname) {
  return fetch(`${origin}${pathname}`, { redirect: "manual" });
}

async function getWithHost(pathname, host) {
  return new Promise((resolve, reject) => {
    const req = request(
      `${origin}${pathname}`,
      { headers: { host } },
      (response) => {
        response.resume();
        response.on("end", () => resolve(response));
      },
    );
    req.on("error", reject);
    req.end();
  });
}

try {
  await waitForServer();

  const home = await get("/");
  const homeHtml = await home.text();
  assert.equal(home.status, 200);
  assert.match(homeHtml, /Michael Machado/);
  assert.match(homeHtml, /Fundador da GIA, engenheiro full stack/);
  assert.match(homeHtml, /Como posso ajudar/);
  assert.match(homeHtml, /admin@usegia\.com\.br/);
  assert.match(homeHtml, /https:\/\/wa\.me\/5571981544757/);
  assert.match(homeHtml, /1º cliente em produção · 68 alunos/);
  assert.match(homeHtml, /https:\/\/www\.usegia\.com\.br\//);
  assert.doesNotMatch(homeHtml, /https:\/\/(?!www\.)usegia\.com\.br/);
  assert.doesNotMatch(homeHtml, /clientes pagantes/);
  assert.doesNotMatch(homeHtml, /Software engineering portfolio/);
  assert.doesNotMatch(homeHtml, /Building software that scales/);
  assert.doesNotMatch(homeHtml, /Founder & Full Stack/);
  assert.doesNotMatch(homeHtml, /Founder \/ Engineer/);
  assert.doesNotMatch(homeHtml, /Em desenvolvimento/);
  assert.doesNotMatch(homeHtml, /nenhuma métrica inventada/);
  assert.match(homeHtml, /Baixar currículo/);
  assert.match(homeHtml, /download="Michael_Machado_Curriculo_Publico\.pdf"/);
  assert.match(homeHtml, /href="\/Michael_Machado_Curriculo_Publico\.pdf"/);
  assert.match(homeHtml, /application\/ld\+json/);
  assert.match(homeHtml, /name="message"/);
  assert.match(homeHtml, /Enviar mensagem/);
  assert.equal(home.headers.get("x-content-type-options"), "nosniff");
  assert.equal(home.headers.get("x-powered-by"), null);

  const privacy = await get("/privacidade");
  assert.equal(privacy.status, 200);
  const privacyHtml = await privacy.text();
  assert.match(privacyHtml, /Privacidade por padrão/);
  assert.match(privacyHtml, /processado pelo Resend/);

  const invalidContact = await fetch(`${origin}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify({ name: "A" }),
  });
  assert.equal(invalidContact.status, 400);

  const crossOriginContact = await fetch(`${origin}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://example.com" },
    body: JSON.stringify({}),
  });
  assert.equal(crossOriginContact.status, 403);

  const spamContact = await fetch(`${origin}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify({
      name: "Bot de teste",
      email: "bot@example.com",
      company: "",
      message: "Mensagem válida que deve cair silenciosamente no honeypot.",
      consent: true,
      website: "https://spam.example.com",
      startedAt: Date.now(),
    }),
  });
  assert.equal(spamContact.status, 200);

  const unconfiguredContact = await fetch(`${origin}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify({
      name: "Contato de teste",
      email: "contato@example.com",
      company: "",
      message: "Mensagem válida sem envio externo durante o teste automatizado.",
      consent: true,
      website: "",
      startedAt: Date.now() - 2_000,
    }),
  });
  assert.equal(unconfiguredContact.status, 503);

  const terms = await get("/termos");
  assert.equal(terms.status, 200);
  assert.match(await terms.text(), /superfície pública de portfólio/);

  const missing = await get("/rota-inexistente");
  assert.equal(missing.status, 404);
  const missingHtml = await missing.text();
  assert.match(missingHtml, /Esta página não existe/);
  assert.match(missingHtml, /name="robots" content="noindex"/);
  assert.doesNotMatch(missingHtml, /name="robots" content="index, follow"/);

  const canonicalRedirect = await getWithHost(
    "/privacidade?from=www",
    "www.michaelmachado.dev.br",
  );
  assert.equal(canonicalRedirect.statusCode, 308);
  assert.equal(
    canonicalRedirect.headers.location,
    "https://michaelmachado.dev.br/privacidade?from=www",
  );

  const curriculum = await get("/Michael_Machado_Curriculo_Publico.pdf");
  assert.equal(curriculum.status, 200);
  assert.match(curriculum.headers.get("content-type") ?? "", /pdf/);
  const curriculumBytes = new Uint8Array(await curriculum.arrayBuffer());
  assert.equal(String.fromCharCode(...curriculumBytes.slice(0, 5)), "%PDF-");

  const robots = await get("/robots.txt");
  assert.match(await robots.text(), /https:\/\/michaelmachado\.dev\.br\/sitemap\.xml/);

  const sitemap = await get("/sitemap.xml");
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br<\/loc>/);
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br\/privacidade/);
  assert.match(sitemapXml, /https:\/\/michaelmachado\.dev\.br\/projetos\/gia/);

  const cases = [
    ["gia", "GIA Escolar, sistema de gestão escolar"],
    ["forge", "A superfície profissional"],
    ["saas-architecture", "Uma referência pública"],
    ["ai-automation-examples", "Um laboratório público"],
  ];

  for (const [slug, excerpt] of cases) {
    const projectCase = await get(`/projetos/${slug}`);
    const projectCaseHtml = await projectCase.text();
    assert.equal(projectCase.status, 200);
    assert.match(projectCaseHtml, new RegExp(excerpt));
    assert.match(projectCaseHtml, /\/brand\/cases-og\.png/);
    if (slug === "gia") {
      assert.match(projectCaseHtml, /https:\/\/www\.usegia\.com\.br\//);
      assert.match(projectCaseHtml, /Visitar site do GIA/);
      assert.match(projectCaseHtml, /Problema, solução e situação/);
      assert.match(projectCaseHtml, /68 alunos atendidos/);
      assert.match(projectCaseHtml, /9 funcionários/);
      assert.match(projectCaseHtml, /67\.953\.300\/0001-66/);
      assert.match(projectCaseHtml, /escola particular em Camaçari-BA/);
      assert.doesNotMatch(projectCaseHtml, /https:\/\/(?!www\.)usegia\.com\.br/);
      assert.doesNotMatch(projectCaseHtml, /clientes pagantes/);
      assert.doesNotMatch(projectCaseHtml, /Em desenvolvimento/);
    }
  }

  const unknownCase = await get("/projetos/case-inexistente");
  assert.equal(unknownCase.status, 404);

  console.log("E2E: domínio canônico, 404, SEO e headers verificados.");
} finally {
  server.kill("SIGTERM");
}
