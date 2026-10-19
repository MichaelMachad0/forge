import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const services = [
  {
    number: "01",
    title: "Projetos freelance",
    description:
      "Desenvolvimento ponta a ponta para um produto novo ou para evoluir um sistema que já está em uso. Escopo, interface, API e operação com o mesmo responsável.",
  },
  {
    number: "02",
    title: "Consultoria em SaaS e IA",
    description:
      "Arquitetura modular, contexto multiempresa e automações com inteligência artificial aplicada onde ela reduz trabalho — com critério sobre o que permanece com as pessoas.",
  },
  {
    number: "03",
    title: "Posições full stack",
    description:
      "Atuação em time de produto como engenheiro full stack, da experiência na interface à API e à base que sustenta a operação.",
  },
] as const;

export function Services() {
  return (
    <section id="servicos" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Serviços</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">
              Três formas de trabalhar comigo, de um projeto pontual a uma vaga em time.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Como posso ajudar
            </h2>

            <ol className="mt-14 grid border-y border-border-subtle sm:grid-cols-3">
              {services.map((service, index) => (
                <li
                  key={service.number}
                  className={`px-0 py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0 ${
                    index > 0 ? "border-t border-border-subtle sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-accent">{service.number}</span>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                </li>
              ))}
            </ol>

            <a
              href="#contato"
              className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent"
            >
              Falar sobre um projeto <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
