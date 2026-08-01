import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const capabilities = ["SaaS", "Arquitetura", "IA aplicada", "Automação"];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44">
      <Container>
        <div className="grid min-h-[calc(100svh-9rem)] grid-cols-1 gap-16 pb-20 lg:grid-cols-[1fr_19rem] lg:gap-24 lg:pb-28">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-12 flex items-center gap-4">
                <span className="eyebrow">Software engineering portfolio</span>
                <span className="h-px w-16 bg-border-strong" aria-hidden />
              </div>

              <h1 className="display-type max-w-5xl text-balance">
                Produtos sólidos.
                <span className="block text-muted">Sistemas que evoluem.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {siteConfig.tagline}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#projetos" size="lg" icon={<ArrowDownRight size={18} />}>
                  Explorar trabalho
                </Button>
                <Button
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  variant="secondary"
                  icon={<ArrowUpRight size={18} />}
                >
                  Conversar sobre um projeto
                </Button>
              </div>
            </div>

            <div className="mt-20 flex items-end justify-between border-t border-border-subtle pt-6">
              <div>
                <p className="text-sm font-semibold text-foreground">{siteConfig.person.name}</p>
                <p className="mt-1 text-sm text-muted">{siteConfig.person.role}</p>
              </div>
              <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted sm:block">
                Disponível para colaborações
              </p>
            </div>
          </div>

          <aside className="flex flex-col justify-end border-l border-border-subtle pl-7 lg:pb-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Áreas de atuação
            </p>
            <ol className="mt-6">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="flex items-center justify-between border-t border-border-subtle py-4 text-sm"
                >
                  <span>{capability}</span>
                  <span className="font-mono text-[0.66rem] text-muted">0{index + 1}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-6 text-muted">{siteConfig.slogan}</p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
