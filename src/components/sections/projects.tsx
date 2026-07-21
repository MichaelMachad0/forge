import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Projetos"
            title="Produtos e sistemas em construção"
            description="Uma seleção dos projetos em que venho aplicando arquitetura, IA e boas práticas de engenharia para resolver problemas reais."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={0.08 * index}
              className={cn("h-full", project.featured && "sm:col-span-2")}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}

          <FadeIn delay={0.08 * projects.length} className="h-full">
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border-subtle p-8 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-muted">
                <Plus size={18} />
              </span>
              <p className="text-sm text-muted">
                Novos projetos serão adicionados aqui em breve.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
