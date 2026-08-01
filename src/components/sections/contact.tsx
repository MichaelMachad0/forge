import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const channels = [
  { label: "WhatsApp", value: "Conversa direta", href: siteConfig.whatsapp.href, icon: WhatsappIcon },
  { label: "LinkedIn", value: "Perfil profissional", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Código e referências", href: siteConfig.links.github, icon: GithubIcon },
] as const;

export function Contact() {
  return (
    <section id="contato" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface/65 p-7 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px]"
          />
          <div className="relative grid gap-14 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                Um bom projeto começa por uma conversa clara.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Para produtos SaaS, modernização de sistemas, automações com IA ou colaboração técnica,
                compartilhe o contexto e o resultado que você precisa alcançar.
              </p>
              <Button
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="mt-9"
                icon={<ArrowUpRight size={18} />}
              >
                Iniciar conversa
              </Button>
            </div>

            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
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
          </div>
        </div>
      </Container>
    </section>
  );
}
