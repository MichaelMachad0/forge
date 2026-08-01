import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
            {project.kicker}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
            {project.name}
          </h3>
        </div>
        <span className="font-mono text-xs text-muted">0{index + 1}</span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-border-subtle pt-5">
        <span className="text-xs text-muted">{project.status}</span>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
          Ver superfície pública <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>
    </>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group block h-full rounded-[1.75rem] border border-border-subtle bg-surface/55 p-7 transition-colors hover:border-border-strong hover:bg-surface sm:p-9"
    >
      {content}
    </a>
  ) : (
    <article className="h-full rounded-[1.75rem] border border-border-subtle bg-surface/55 p-7 sm:p-9">
      {content}
    </article>
  );
}
