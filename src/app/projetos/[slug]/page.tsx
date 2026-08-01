import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.name} — Case`;
  const url = absoluteUrl(`/projetos/${project.slug}`);

  return {
    title,
    description: project.caseStudy.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.caseStudy.summary,
      url,
      type: "article",
      images: ["/brand/cases-og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.caseStudy.summary,
      images: ["/brand/cases-og.png"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const sections = [
    { number: "01", title: "O desafio", content: project.caseStudy.challenge },
    { number: "02", title: "A abordagem", items: project.caseStudy.approach },
    { number: "03", title: "Arquitetura", items: project.caseStudy.architecture },
    { number: "04", title: "Evidências públicas", items: project.caseStudy.evidence },
  ];

  return (
    <article className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <Container>
        <Link
          href="/#projetos"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden /> Voltar aos projetos
        </Link>

        <header className="mt-12 grid gap-10 border-b border-border-subtle pb-16 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <p className="eyebrow">{project.kicker}</p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              {project.name}
            </h1>
            <p className="mt-8 max-w-3xl text-balance text-xl leading-9 text-muted sm:text-2xl">
              {project.caseStudy.summary}
            </p>
          </div>

          <div className="border-l border-border-subtle pl-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">Estado público</p>
            <p className="mt-3 text-sm text-foreground">{project.status}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </div>
        </header>

        <div className="divide-y divide-border-subtle">
          {sections.map((section) => (
            <section key={section.number} className="grid gap-8 py-14 lg:grid-cols-[18rem_1fr] lg:py-20">
              <div>
                <span className="font-mono text-xs text-accent">{section.number}</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{section.title}</h2>
              </div>
              {section.items ? (
                <ul className="grid gap-4">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-border-subtle bg-surface/50 p-6 text-base leading-7 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="max-w-3xl text-lg leading-8 text-muted">{section.content}</p>
              )}
            </section>
          ))}
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-border-subtle bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <p className="eyebrow">Resultado documentado</p>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Clareza pública sem ultrapassar a fronteira do que pode ser provado.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.caseStudy.outcome}</p>
            <p className="mt-8 max-w-3xl border-l-2 border-accent pl-5 text-sm leading-7 text-muted">
              {project.caseStudy.boundary}
            </p>
          </div>
          {project.href && (
            <Button href={project.href} target="_blank" rel="noreferrer" className="w-full">
              Ver repositório <ArrowUpRight size={17} aria-hidden />
            </Button>
          )}
        </section>
      </Container>
    </article>
  );
}
