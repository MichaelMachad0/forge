import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCvPath } from "@/lib/cv";
import { cn } from "@/lib/utils";

type CvDownloadButtonProps = {
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

export function CvDownloadButton({
  className,
  size = "lg",
  variant = "secondary",
}: CvDownloadButtonProps) {
  const href = getCvPath();
  if (!href) return null;

  const filename = href.slice(1);

  return (
    <Button
      href={href}
      download={filename}
      size={size}
      variant={variant}
      className={cn("min-h-11", className)}
      icon={<Download size={size === "lg" ? 18 : 16} aria-hidden />}
    >
      Baixar currículo
      <span className="sr-only"> em PDF</span>
    </Button>
  );
}
