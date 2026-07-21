import type { Project } from "@/types/project";

/**
 * Central project registry. Add new entries here to have them
 * automatically rendered in the Projects section — no UI changes needed.
 */
export const projects: Project[] = [
  {
    slug: "gia",
    name: "GIA",
    description:
      "Assistente de IA para automação inteligente de processos e produtos SaaS, com arquitetura escalável, integrações via API e foco em performance em produção.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Docker"],
    status: "Em desenvolvimento",
    featured: true,
  },
];
