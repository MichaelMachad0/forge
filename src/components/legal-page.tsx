import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <article className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-24">
          <p className="eyebrow">{eyebrow}</p>
          <div>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{title}</h1>
            <div className="mt-12 max-w-3xl space-y-8 text-base leading-7 text-muted [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_a]:text-accent [&_a]:underline-offset-4 [&_a:hover]:underline">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
