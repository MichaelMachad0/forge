import type { Project } from "@/types/project";

/**
 * Central project registry. Add new entries here to have them
 * automatically rendered in the Projects section — no UI changes needed.
 */
export const projects: Project[] = [
  {
    slug: "gia",
    name: "GIA — Gestão Inteligente e Automatizada",
    description:
      "Assistente de IA para automação inteligente de processos e produtos SaaS, com arquitetura escalável, integrações via API e foco em performance em produção.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Docker"],
    status: "Em desenvolvimento",
    href: "https://github.com/MichaelMachad0/gia-showcase",
    featured: true,
  },
  {
    slug: "forge",
    name: "FORGE",
    description:
      "Portfólio e superfície pública de engenharia — o próprio site que você está navegando, construído com foco em performance, SEO e design premium.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/forge",
  },
  {
    slug: "silog",
    name: "SILOG — Sistema Inteligente Logístico",
    description:
      "Vertical de logística: gestão de cargas, motoristas, veículos, viagens e fretes em um sistema inteligente e integrado.",
    tags: ["SaaS", "Logística", "Next.js", "PostgreSQL"],
    status: "Em desenvolvimento",
  },
  {
    slug: "fingestor",
    name: "FinGestor",
    description:
      "Gestão financeira empresarial: contas a pagar e a receber, fluxo de caixa e indicadores para decisões mais rápidas.",
    tags: ["SaaS", "Finanças", "Dashboards"],
    status: "Em desenvolvimento",
  },
  {
    slug: "cabe-no-bolso",
    name: "Cabe no Bolso",
    description:
      "Finanças pessoais: orçamento, controle de despesas, metas e planejamento financeiro do dia a dia.",
    tags: ["Finanças pessoais", "Mobile", "SaaS"],
    status: "Em desenvolvimento",
  },
  {
    slug: "designacoes",
    name: "Designações",
    description:
      "Organização de designações: participantes, calendário, histórico e atividades em um fluxo simples e colaborativo.",
    tags: ["Gestão", "Agenda", "SaaS"],
    status: "Em desenvolvimento",
  },
  {
    slug: "sistema-escolar",
    name: "Sistema Escolar",
    description:
      "Plataforma de gestão escolar para alunos, turmas, notas e rotinas acadêmicas.",
    tags: ["Educação", "SaaS", "Gestão"],
    status: "Em desenvolvimento",
  },
  {
    slug: "enxovais-lene",
    name: "Enxovais Lene",
    description:
      "Sistema de gestão comercial para o negócio de enxovais — catálogo, pedidos e controle de vendas.",
    tags: ["E-commerce", "Gestão comercial"],
    status: "Em desenvolvimento",
  },
  {
    slug: "ma-variedades",
    name: "M&A Variedades",
    description:
      "Solução de gestão para loja de variedades — produtos, estoque e controle de vendas.",
    tags: ["Varejo", "Gestão comercial"],
    status: "Em desenvolvimento",
  },
  {
    slug: "apes",
    name: "APES — Assistente de Projetos, Estudos e Software",
    description:
      "Assistente para organização de projetos, estudos e desenvolvimento de software, potencializado por IA.",
    tags: ["IA", "Produtividade", "Automação"],
    status: "Em breve",
  },
  {
    slug: "fintech-hub",
    name: "Fintech Hub",
    description:
      "Hub de soluções fintech, integrando serviços financeiros, pagamentos e automações.",
    tags: ["Fintech", "SaaS", "Integrações"],
    status: "Em breve",
  },
  {
    slug: "viver-agenda-digital",
    name: "Viver Agenda Digital",
    description:
      "Agenda digital para organização de compromissos, rotinas e planejamento pessoal.",
    tags: ["Produtividade", "Agenda", "Mobile"],
    status: "Em breve",
  },
  {
    slug: "rockport-reborn",
    name: "Rockport Reborn",
    description:
      "Projeto de revitalização digital — presença online e experiência renovada.",
    tags: ["Web", "Produto"],
    status: "Em breve",
  },
  {
    slug: "prompt",
    name: "Prompt",
    description:
      "Ferramenta focada em engenharia de prompts e fluxos de trabalho com IA generativa.",
    tags: ["IA", "LLM", "Automação"],
    status: "Em breve",
  },
  {
    slug: "testemunho-publico",
    name: "Testemunho público",
    description:
      "Projeto de conteúdo e presença pública para compartilhamento de experiências e testemunhos.",
    tags: ["Conteúdo", "Web"],
    status: "Em breve",
  },
  {
    slug: "saas-architecture",
    name: "SaaS Architecture",
    description:
      "Padrões de referência para arquitetura de SaaS multi-tenant modular e escalável.",
    tags: ["Arquitetura", "SaaS", "Open Source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/saas-architecture",
  },
  {
    slug: "ai-automation-examples",
    name: "AI Automation Examples",
    description:
      "Exemplos independentes em TypeScript de IA generativa, automação, agentes e integrações.",
    tags: ["IA", "Automação", "TypeScript", "Open Source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/ai-automation-examples",
  },
  {
    slug: "primeiros-passos-cypress",
    name: "Primeiros Passos com Cypress",
    description:
      "Fundamentos de automação de testes com Cypress e exercícios práticos de QA.",
    tags: ["QA", "Cypress", "Testes", "Open Source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/primeiros-passos-cypress",
  },
  {
    slug: "aprendendo-npm",
    name: "Aprendendo npm",
    description:
      "Notas de estudo e exercícios sobre os fundamentos do npm e do ecossistema Node.js.",
    tags: ["Estudos", "JavaScript", "Open Source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/aprendendo-npm",
  },
];
