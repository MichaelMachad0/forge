import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { getCvPath } from "@/lib/cv";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp.display,
    href: siteConfig.whatsapp.href,
    icon: WhatsappIcon,
    external: true,
  },
  {
    label: "E-mail",
    value: siteConfig.email.display,
    href: siteConfig.email.href,
    icon: MailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Perfil profissional",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "Código e referências",
    href: siteConfig.links.github,
    icon: GithubIcon,
    external: true,
  },
] as const;

export function Contact() {
  const cvHref = getCvPath();

  return (
    <section id="contato" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface/65 p-7 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px]"
          />
          <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                Um bom projeto começa por uma conversa clara.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Para um projeto freelance, consultoria em SaaS e IA ou uma posição full stack, escreva
                para{" "}
                <a
                  href={siteConfig.email.href}
                  className="text-foreground underline decoration-border-strong underline-offset-4 hover:text-accent"
                >
                  {siteConfig.email.display}
                </a>{" "}
                ou envie o contexto pelo formulário.
              </p>
              <div className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex min-h-20 items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-accent">
                        <channel.icon size={17} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{channel.label}</span>
                        <span className="mt-1 block text-xs text-muted">{channel.value}</span>
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="text-muted group-hover:text-accent" aria-hidden />
                  </a>
                ))}
              </div>
              {/* TODO(cv): o link "Baixar currículo" só aparece quando getCvPath() encontra um PDF real em public/. Não criar arquivo placeholder. */}
              {cvHref ? (
                <a
                  href={cvHref}
                  download
                  className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent"
                >
                  Baixar currículo <ArrowUpRight size={16} aria-hidden />
                </a>
              ) : null}
            </div>

            <div className="rounded-[1.5rem] border border-border-subtle bg-background/45 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
