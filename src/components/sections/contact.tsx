import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowBackground } from "@/components/ui/glow-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp.display,
    href: siteConfig.whatsapp.href,
    icon: WhatsappIcon,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Conecte-se comigo",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Veja meu código",
    href: siteConfig.links.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <GlowBackground className="opacity-70" />

      <Container className="flex flex-col items-center gap-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos construir algo excelente"
            description="Aberto a novos projetos, colaborações e conversas sobre produto, arquitetura e IA."
            align="center"
          />
        </FadeIn>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <FadeIn key={channel.label} delay={0.08 * index}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <channel.icon size={20} className="text-accent" />
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                  <p className="mt-1 text-sm text-muted">{channel.value}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <Button
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            size="lg"
            icon={<ArrowUpRight size={18} />}
          >
            Chamar no WhatsApp
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
