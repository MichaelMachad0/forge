import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export const siteConfig = {
  name: "FORGE",
  title: "Software Engineering",
  slogan: "Building software that scales.",
  tagline:
    "Construindo produtos SaaS, automações inteligentes e soluções escaláveis com foco em engenharia, arquitetura, inteligência artificial e experiência.",
  description:
    "Construindo produtos SaaS, automações inteligentes e soluções escaláveis com foco em engenharia de software, arquitetura e inteligência artificial.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://forge.michaelmachado.dev",
  locale: "pt-BR",
  email: "contato@forge.michaelmachado.dev",
  links: {
    github: "https://github.com/michaelmachado",
    linkedin: "https://linkedin.com/in/michaelmachado",
  },
} as const;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
] as const;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];
