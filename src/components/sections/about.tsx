import { Container } from "@/components/ui/container";

const disciplines = [
  ["01", "Produto SaaS", "Escopo claro, base técnica sustentável e decisões guiadas pelo uso real."],
  ["02", "Arquitetura", "Fronteiras explícitas, baixo acoplamento e evolução sem complexidade ornamental."],
  ["03", "IA e automação", "IA aplicada onde reduz trabalho, melhora contexto ou amplia capacidade operacional."],
  ["04", "Qualidade", "Acessibilidade, segurança, observabilidade e testes tratados como parte do produto."],
] as const;

export function About() {
  return (
    <section id="sobre" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Sobre / Michael Machado</p>
            <p className="mt-6 text-sm leading-6 text-muted">
              Fundador e engenheiro Full Stack trabalhando na interseção entre software, operação e produto.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Engenharia é transformar decisões complexas em produtos claros, confiáveis e possíveis de manter.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
              FORGE reúne produtos, referências públicas e estudos que mostram como penso sistemas SaaS:
              começando pelo problema, protegendo o que é privado e construindo uma base que possa evoluir.
            </p>

            <div className="mt-16 grid gap-x-10 sm:grid-cols-2">
              {disciplines.map(([number, title, description]) => (
                <article key={number} className="border-t border-border-subtle py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">{number}</span>
                    <h3 className="text-base font-semibold">{title}</h3>
                  </div>
                  <p className="mt-3 pl-9 text-sm leading-6 text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
