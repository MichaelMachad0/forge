import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const statusTone: Record<Project["status"], "default" | "accent"> = {
  "Em produção": "accent",
  "Em desenvolvimento": "default",
  "Em breve": "default",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tags, status, href } = project;

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border-subtle bg-surface/60 p-8 transition-all duration-300 hover:border-border-strong hover:bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {name}
          </h3>
          <Badge tone={statusTone[status]}>{status}</Badge>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      <div className="relative mt-8">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            Saiba mais
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            Saiba mais
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
    </article>
  );
}
