import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const studies = [
  {
    topic: "Arquitetura SaaS",
    title: "Fronteiras modulares antes da complexidade multi-tenant",
    description: "Uma referência pública sobre separação de responsabilidades e evolução incremental.",
    href: "https://github.com/MichaelMachad0/saas-architecture",
  },
  {
    topic: "IA aplicada",
    title: "Saídas estruturadas como contrato para automações confiáveis",
    description: "Exemplos em TypeScript para tornar respostas de modelos mais previsíveis e verificáveis.",
    href: "https://github.com/MichaelMachad0/ai-automation-examples",
  },
  {
    topic: "Produto e engenharia",
    title: "Como FORGE trata documentação como parte da entrega",
    description: "Arquitetura, marca e segurança de publicação mantidas junto da implementação.",
    href: siteConfig.links.github + "/forge/tree/main/docs",
  },
] as const;

export function Studies() {
  return (
    <section id="estudos" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Estudos e referências</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">
              Conteúdo público para registrar raciocínio técnico, padrões e experimentos reproduzíveis.
            </p>
          </div>

          <div>
            {studies.map((study, index) => (
              <a
                key={study.title}
                href={study.href}
                target="_blank"
                rel="noreferrer"
                className="group grid min-h-44 gap-6 border-t border-border-subtle py-8 transition-colors hover:border-border-strong sm:grid-cols-[4rem_1fr_auto]"
              >
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-accent">
                    {study.topic}
                  </p>
                  <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{study.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
