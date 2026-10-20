import fs from "node:fs";
import path from "node:path";

/**
 * Currículo público servido a partir de `public/`.
 * O primeiro arquivo existente nesta lista vira o destino de "Baixar currículo".
 */
export const CV_PUBLIC_FILE = "Michael_Machado_Curriculo_Publico.pdf";

const CV_FILES = [
  CV_PUBLIC_FILE,
  "michael-machado-cv.pdf",
  "curriculo-michael-machado.pdf",
  "curriculo.pdf",
] as const;

export function getCvPath(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  const match = CV_FILES.find((file) => fs.existsSync(path.join(publicDir, file)));
  return match ? `/${match}` : null;
}
