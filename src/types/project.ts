export type ProjectStatus = "Em produção" | "Em desenvolvimento" | "Em breve";

export interface Project {
  /** Unique, URL-safe identifier used for keys and future detail pages. */
  slug: string;
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  href?: string;
  featured?: boolean;
}
