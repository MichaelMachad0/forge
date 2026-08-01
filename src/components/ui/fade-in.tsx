import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className }: FadeInProps) {
  return <div className={cn(className)}>{children}</div>;
}
