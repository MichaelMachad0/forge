import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/social-icons";

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
  whatsapp: {
    display: "+55 71 98154-4757",
    href: "https://wa.me/5571981544757",
  },
  links: {
    github: "https://github.com/MichaelMachad0",
    linkedin: "https://www.linkedin.com/in/michael-machado-qa/",
    whatsapp: "https://wa.me/5571981544757",
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
  { label: "WhatsApp", href: siteConfig.links.whatsapp, icon: WhatsappIcon },
];
