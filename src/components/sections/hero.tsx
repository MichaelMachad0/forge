import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const capabilities = ["SaaS", "Arquitetura", "IA aplicada", "Automação"];
const portraitUrl =
  "https://res.cloudinary.com/dvo4otwrg/image/upload/v1785636189/file_00000000c510820ea13b1959d0697aa6_o79lzo.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44">
      <Container>
        <div className="grid min-h-[calc(100svh-9rem)] grid-cols-1 gap-16 pb-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:pb-28 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-20">
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

          <aside className="border-l border-border-subtle pl-5 sm:pl-7 lg:pb-1">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-border-subtle bg-surface">
                <Image
                  src={portraitUrl}
                  alt="Retrato de Michael Machado"
                  width={1022}
                  height={1536}
                  sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 20rem, (min-width: 640px) 28rem, calc(100vw - 4.25rem)"
                  preload
                  className="h-full w-full object-cover object-[50%_22%]"
                />
                <span
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                  aria-hidden
                />
              </div>
              <figcaption className="mt-3">
                <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  <span>Michael Machado</span>
                  <span>Founder / Engineer</span>
                </div>
                <div className="mt-7 space-y-4 text-sm leading-6 text-muted">
                  <p>
                    Sou Michael Machado, fundador e desenvolvedor Full Stack, apaixonado por transformar
                    ideias em produtos digitais escaláveis.
                  </p>
                  <p>
                    Especializado em desenvolvimento de aplicações SaaS, arquitetura de software,
                    inteligência artificial e automação, meu foco é criar soluções que unem tecnologia,
                    simplicidade e impacto real nos negócios.
                  </p>
                  <p>
                    Acredito que bons produtos nascem da combinação entre engenharia de qualidade,
                    experiência do usuário e aprendizado contínuo. É essa visão que guia cada projeto que
                    desenvolvo.
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="mt-12">
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
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
