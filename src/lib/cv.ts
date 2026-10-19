import fs from "node:fs";
import path from "node:path";

/**
 * TODO(cv): não há currículo versionado neste repositório.
 * Para exibir o link "Baixar currículo", coloque o arquivo real em `public/`,
 * com um destes nomes (nesta ordem):
 * - michael-machado-cv.pdf
 * - curriculo-michael-machado.pdf
 * - curriculo.pdf
 * Não gerar um PDF placeholder.
 */
const CV_FILES = ["michael-machado-cv.pdf", "curriculo-michael-machado.pdf", "curriculo.pdf"] as const;

export function getCvPath(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  const match = CV_FILES.find((file) => fs.existsSync(path.join(publicDir, file)));
  return match ? `/${match}` : null;
}
