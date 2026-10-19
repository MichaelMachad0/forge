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
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 pb-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-x-16 lg:gap-y-12 lg:pb-28 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-x-20">
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
            <div className="mb-8 flex items-center gap-4 lg:mb-12">
              <span className="eyebrow">Portfólio de engenharia de software</span>
              <span className="h-px w-16 bg-border-strong" aria-hidden />
            </div>

            <h1 className="display-type max-w-5xl">
              Michael
              <span className="block">Machado</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-2xl">
              {siteConfig.person.role}.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {siteConfig.tagline} A{" "}
              <a
                href={siteConfig.gia.url}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border-strong underline-offset-4 hover:text-accent"
              >
                GIA
              </a>
              , SaaS modular que fundei, está em produção com clientes pagantes.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Conversar sobre um projeto
              </Button>
              <Button href="#servicos" size="lg" variant="secondary" icon={<ArrowDownRight size={18} />}>
                Como posso ajudar
              </Button>
            </div>

            <p className="mt-auto hidden pt-16 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted lg:block">
              Freelance · Consultoria · Posições full stack
            </p>
          </div>

          <figure className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <div className="relative h-[8.75rem] w-28 overflow-hidden border border-border-subtle bg-surface lg:aspect-[4/5] lg:h-auto lg:w-full">
              <Image
                src={portraitUrl}
                alt="Retrato de Michael Machado"
                fill
                sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 20rem, 7rem"
                preload
                className="object-cover object-[50%_22%]"
              />
              <span
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
            <figcaption className="mt-3 hidden lg:block">
              <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                <span>{siteConfig.person.name}</span>
                <span>Fundador / Engenheiro</span>
              </div>
            </figcaption>
          </figure>

          <div className="order-3 border-l border-border-subtle pl-5 sm:pl-7 lg:order-none lg:col-start-2 lg:row-start-2 lg:border-l-0 lg:pl-0">
            <div className="space-y-4 text-sm leading-6 text-muted">
              <p>
                Sou Michael Machado, fundador da GIA e engenheiro full stack. O produto está no ar, com
                clientes pagantes, e o código de produção permanece privado.
              </p>
              <p>
                Trabalho com SaaS, arquitetura de software, inteligência artificial e automação — do
                problema de negócio à implementação.
              </p>
            </div>

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
          </div>
        </div>
      </Container>
    </section>
  );
}
