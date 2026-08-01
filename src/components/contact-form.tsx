"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactLimits } from "@/lib/contact";

const fieldStyles =
  "mt-2 min-h-12 w-full rounded-xl border border-border-subtle bg-background/70 px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

type FormStatus = { type: "idle" | "success" | "error"; message: string };

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setPending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          website: formData.get("website"),
          consent: formData.get("consent") === "on",
          startedAt,
        }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        setStatus({
          type: "error",
          message: result.error ?? "Não foi possível enviar agora. Tente novamente.",
        });
        return;
      }

      form.reset();
      setMessageLength(0);
      setStartedAt(Date.now());
      setStatus({ type: "success", message: "Mensagem enviada. Responderei assim que possível." });
    } catch {
      setStatus({ type: "error", message: "Falha de conexão. Verifique sua internet e tente novamente." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-describedby="contact-form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-foreground">
          Nome <span aria-hidden className="text-accent">*</span>
          <input className={fieldStyles} name="name" autoComplete="name" required minLength={2} maxLength={contactLimits.name} />
        </label>
        <label className="text-sm font-medium text-foreground">
          E-mail <span aria-hidden className="text-accent">*</span>
          <input className={fieldStyles} name="email" type="email" autoComplete="email" required maxLength={contactLimits.email} />
        </label>
      </div>

      <label className="text-sm font-medium text-foreground">
        Empresa <span className="font-normal text-muted">(opcional)</span>
        <input className={fieldStyles} name="company" autoComplete="organization" maxLength={contactLimits.company} />
      </label>

      <label className="text-sm font-medium text-foreground">
        Contexto do projeto <span aria-hidden className="text-accent">*</span>
        <textarea
          className={`${fieldStyles} min-h-40 resize-y py-3`}
          name="message"
          required
          minLength={20}
          maxLength={contactLimits.message}
          aria-describedby="message-count"
          onChange={(event) => setMessageLength(event.currentTarget.value.length)}
        />
      </label>
      <p id="message-count" className="-mt-3 text-right font-mono text-[0.65rem] text-muted">
        {messageLength}/{contactLimits.message}
      </p>

      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]" />
        <span>
          Autorizo o uso destes dados apenas para responder ao contato, conforme a{" "}
          <Link href="/privacidade" className="text-foreground underline decoration-border-strong underline-offset-4 hover:text-accent">
            Política de Privacidade
          </Link>.
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={pending} className="sm:min-w-44">
          {pending ? "Enviando…" : "Enviar mensagem"} <Send size={17} aria-hidden />
        </Button>
        <p id="contact-form-note" className="text-xs leading-5 text-muted">
          Campos marcados com * são obrigatórios.
        </p>
      </div>

      {status.message && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`rounded-xl border p-4 text-sm ${
            status.type === "error"
              ? "border-red-400/40 bg-red-400/10 text-red-200"
              : "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
