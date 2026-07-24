# Brand

| Field | Value |
| --- | --- |
| **Title** | Brand |
| **Purpose** | Define the official FORGE visual identity for public surfaces |
| **Scope** | Portfolio site, GitHub assets, and documentation |
| **Status** | Active |
| **Last review** | 2026-07-24 |

## Purpose

Keep FORGE recognizable, premium, and consistent across GitHub, the live site, and social previews.

## Assets

| Asset | Path | Size / format |
| --- | --- | --- |
| Monogram | [`/brand/monogram.svg`](../public/brand/monogram.svg) | SVG |
| Favicon | [`/brand/favicon.svg`](../public/brand/favicon.svg) | SVG |
| Open Graph | [`/brand/og.png`](./og.png) | 1200×630 PNG |
| GitHub cover template | [`/brand/github-cover.png`](./github-cover.png) | 1280×640 PNG |

Canonical runtime copies live under `public/brand/`. Documentation copies under `docs/brand/` mirror the raster assets for review in the repo.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#09090B` | Page / canvas |
| `surface` | `#111113` | Elevated panels |
| `primary` | `#2563EB` | Actions / emphasis |
| `accent` | `#60A5FA` | Secondary highlights |
| `foreground` | `#FAFAFA` | Primary text |
| `muted` | `#A1A1AA` | Supporting text |

## Typography

- Site runtime currently uses Geist (sans) and Geist Mono.
- Brand wordmark in social assets should remain high-contrast, restrained, and uncluttered.
- Avoid playful or template-like decoration.

## Usage rules

1. **Brand first** — FORGE is the primary signal; slogans never overpower the wordmark.
2. **Monogram** — use the official SVG; do not recreate ad-hoc “F” marks with different radii or colors.
3. **Favicon** — prefer `favicon.svg` for modern browsers; keep the dark tile + light F.
4. **Open Graph** — use `og.png` for link previews; do not overlay screenshots with real product data.
5. **GitHub cover** — use `github-cover.png` as the social/banner template for public repos in the FORGE narrative.
6. **No purple drift** — stay on the blue palette defined above.
7. **No fake metrics** — never decorate brand assets with invented stats.

## Related runtime generators

The App Router still includes dynamic `icon.tsx` / `opengraph-image.tsx` generators. Static brand files in `public/brand/` are the **source of truth** for the official kit and for GitHub/social reuse. Wiring the site metadata exclusively to static files can be done in a later cycle without touching WIP UI sections.

## Limits

- This brand kit is for FORGE public surfaces.
- Commercial product UIs (GIA and verticals) may diverge and remain private.
