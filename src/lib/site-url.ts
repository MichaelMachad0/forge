const DEFAULT_SITE_URL = "https://michaelmachado.dev.br";

export function normalizeSiteUrl(value: string): string {
  const url = new URL(value);
  return url.toString().replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteUrl}/`).toString().replace(/\/$/, path === "/" ? "" : "/");
}
