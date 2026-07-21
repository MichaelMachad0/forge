import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Boxes,
  Cpu,
  Gauge,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export interface FocusArea {
  label: string;
  description: string;
  icon: LucideIcon;
}

export const focusAreas: FocusArea[] = [
  {
    label: "Arquitetura",
    description: "Sistemas desenhados para escalar com clareza e baixo acoplamento.",
    icon: Blocks,
  },
  {
    label: "SaaS",
    description: "Produtos multi-tenant, do MVP à operação em produção.",
    icon: Boxes,
  },
  {
    label: "IA",
    description: "Integrações inteligentes que agregam valor real ao produto.",
    icon: Cpu,
  },
  {
    label: "Automação",
    description: "Processos manuais transformados em fluxos confiáveis.",
    icon: Workflow,
  },
  {
    label: "Backend",
    description: "APIs robustas, seguras e preparadas para crescer.",
    icon: Layers,
  },
  {
    label: "Frontend",
    description: "Interfaces rápidas, acessíveis e cuidadosamente construídas.",
    icon: MonitorSmartphone,
  },
  {
    label: "Qualidade",
    description: "Código limpo, testável e sustentável no longo prazo.",
    icon: ShieldCheck,
  },
  {
    label: "Escalabilidade",
    description: "Decisões técnicas pensadas para o próximo milhão de usuários.",
    icon: Gauge,
  },
];
