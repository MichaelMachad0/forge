import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusAreas } from "@/data/focus-areas";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Sobre"
            title="Engenharia com propósito, do código à decisão de produto"
            description="Atuo na construção de produtos SaaS e soluções de IA de ponta a ponta — da arquitetura ao deploy — priorizando qualidade, escalabilidade e uma experiência de uso consistente."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Trabalho na interseção entre engenharia e produto, combinando arquitetura
            sólida, automação inteligente e atenção obsessiva a detalhes de frontend e
            backend. Meu foco é entregar software que funciona bem hoje e continua
            fácil de evoluir amanhã.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <FadeIn key={area.label} delay={0.05 * index}>
              <div className="group h-full rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface">
                <area.icon
                  size={22}
                  className="text-accent transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {area.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
