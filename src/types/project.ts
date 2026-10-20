export type ProjectStatus =
  | "Em produção"
  | "Em produção · 1º cliente"
  | "Em produção · clientes pagantes"
  | "Em desenvolvimento"
  | "Em breve";

export interface ProjectMetric {
  /** Rótulo curto, por exemplo "Clientes pagantes". */
  label: string;
  /** Valor já verificado. Não usar estimativa. */
  value: string;
}

export interface Project {
  /** Unique, URL-safe identifier used for keys and future detail pages. */
  slug: string;
  name: string;
  kicker: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  href?: string;
  website?: {
    href: string;
    label: string;
  };
  /**
   * Números já verificados. Não incluir receita, preços, outros clientes ou estimativas.
   */
  metrics?: ProjectMetric[];
  /** Linha curta para o cartão. Só fatos que também estão em metrics. */
  metricsSummary?: string;
  company?: {
    form: string;
    cnpj: string;
    opened: string;
    city: string;
  };
  featured?: boolean;
  caseStudy: {
    summary: string;
    challenge: string;
    approach: string[];
    architecture: string[];
    evidence: string[];
    outcome: string;
    boundary: string;
    story?: {
      problem: string;
      solution: string;
      status: string;
    };
  };
}
