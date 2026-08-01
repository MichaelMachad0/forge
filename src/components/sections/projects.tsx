import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projetos" className="section-rule py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Projetos selecionados</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">
              Produtos e referências públicas. O conteúdo descreve capacidades sem expor código comercial,
              clientes ou infraestrutura sensível.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Trabalho público, contexto suficiente e nenhuma métrica inventada.
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.slug}
                  className={cn("min-w-0", project.featured && "md:col-span-2")}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
