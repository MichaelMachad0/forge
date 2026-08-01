import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/social-icons";
import { siteUrl } from "@/lib/site-url";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export const siteConfig = {
  name: "FORGE",
  title: "Software Engineering",
  slogan: "Building software that scales.",
  tagline:
    "Produtos SaaS, automações com IA e sistemas preparados para evoluir — da arquitetura à experiência.",
  description:
    "Portfólio de Michael Machado, fundador e engenheiro Full Stack especializado em SaaS, arquitetura de software, IA e automação.",
  url: siteUrl,
  locale: "pt-BR",
  person: {
    name: "Michael Machado",
    role: "Founder & Full Stack Software Engineer",
  },
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
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Princípios", href: "/#principios" },
  { label: "Estudos", href: "/#estudos" },
  { label: "Contato", href: "/#contato" },
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
