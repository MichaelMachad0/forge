import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const principles = [
  {
    number: "01",
    title: "Clareza antes da escala",
    description: "O sistema precisa ter fronteiras compreensíveis antes de ganhar novas camadas, integrações ou volume.",
  },
  {
    number: "02",
    title: "Evidência antes da afirmação",
    description: "Status, resultados e decisões são comunicados como realmente são — inclusive quando ainda estão em validação.",
  },
  {
    number: "03",
    title: "Segurança por restrição",
    description: "A superfície pública mostra o necessário para gerar confiança, preservando dados, clientes e propriedade intelectual.",
  },
  {
    number: "04",
    title: "Experiência é arquitetura",
    description: "Performance, acessibilidade e feedback não são acabamento; fazem parte da estrutura do produto.",
  },
] as const;

export function Principles() {
  return (
    <section id="principios" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Princípios de engenharia</p>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Decisões que mantêm o produto compreensível.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Um processo enxuto para reduzir risco sem transformar engenharia em cerimônia.
            </p>
          </div>

          <ol className="grid border-y border-border-subtle md:grid-cols-2">
            {principles.map((principle, index) => (
              <li
                key={principle.number}
                className={cn(
                  "min-h-64 p-7 sm:p-9",
                  index % 2 === 0 && "md:border-r md:border-border-subtle",
                  index < 2 && "border-b border-border-subtle",
                )}
              >
                <span className="font-mono text-xs text-accent">{principle.number}</span>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em]">{principle.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted">{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
