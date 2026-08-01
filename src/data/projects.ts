import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gia",
    name: "GIA",
    kicker: "Produto / IA aplicada",
    description:
      "Ecossistema de gestão inteligente e automatizada para organizar operações, conectar módulos e incorporar IA com responsabilidade.",
    tags: ["SaaS", "IA", "Automação", "Arquitetura modular"],
    status: "Em desenvolvimento",
    href: "https://github.com/MichaelMachad0/gia-showcase",
    featured: true,
  },
  {
    slug: "forge",
    name: "FORGE",
    kicker: "Identidade / Engenharia pública",
    description:
      "A superfície pública onde produto, arquitetura e decisões de engenharia são apresentados com clareza e sem expor código proprietário.",
    tags: ["Next.js", "TypeScript", "Acessibilidade"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/forge",
  },
  {
    slug: "saas-architecture",
    name: "SaaS Architecture",
    kicker: "Referência / Arquitetura",
    description:
      "Padrões públicos para discutir modularidade, multi-tenancy e evolução de sistemas SaaS sem revelar topologias privadas.",
    tags: ["Arquitetura", "SaaS", "Open source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/saas-architecture",
  },
  {
    slug: "ai-automation-examples",
    name: "AI Automation Examples",
    kicker: "Laboratório / Código público",
    description:
      "Exemplos independentes em TypeScript para explorar saídas estruturadas, automações e integrações com IA.",
    tags: ["IA", "TypeScript", "Automação"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/ai-automation-examples",
  },
];
