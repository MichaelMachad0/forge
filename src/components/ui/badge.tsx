import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent";
}

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" &&
          "border-border-subtle bg-surface text-muted",
        tone === "accent" && "border-primary/30 bg-primary/10 text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
