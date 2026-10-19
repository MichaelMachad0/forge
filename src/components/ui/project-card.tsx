import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-border-subtle bg-surface/55 p-7 transition-colors hover:border-border-strong hover:bg-surface sm:p-9">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              {project.kicker}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
              <Link href={`/projetos/${project.slug}`} className="hover:text-accent">
                {project.name}
              </Link>
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
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-5">
        <span className="text-xs font-medium text-foreground">
          {project.metricsSummary ?? project.status}
        </span>
        <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.website ? (
            <a
              href={project.website.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.website.label} (abre em nova aba)`}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              {project.website.href.replace(/^https:\/\//, "").replace(/\/$/, "")}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : null}
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent"
          >
            Ver projeto <ArrowUpRight size={16} aria-hidden />
          </Link>
        </span>
      </div>
    </article>
  );
}
