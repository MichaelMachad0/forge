export type ProjectStatus =
  | "Em produção"
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
   * Números públicos. Deixe vazio até cada valor ser verificável.
   * TODO(metrics): não inventar clientes, receita, prazos ou percentuais.
   */
  metrics?: ProjectMetric[];
  featured?: boolean;
  caseStudy: {
    summary: string;
    challenge: string;
    approach: string[];
    architecture: string[];
    evidence: string[];
    outcome: string;
    boundary: string;
  };
}
