import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  className?: string;
}

/**
 * Subtle ambient background: a soft radial grid plus two blurred glows.
 * Purely decorative — kept out of the accessibility tree.
 */
export function GlowBackground({ className }: GlowBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[110px]" />
    </div>
  );
}
