# FORGE

**Software Engineering**

Building software that scales.

---

## Michael Machado

**Founder & Full Stack Software Engineer**

SaaS · AI · Automation · Software Architecture

---

## What is FORGE?

FORGE is the public professional portfolio of Michael Machado. It presents how products are conceived, architected, engineered, and evolved — with clarity, discipline, and restraint.

This repository and site showcase:

- products and product ecosystems
- case studies and problem framing
- software architecture thinking
- engineering practices and quality standards
- technical writing and process documentation
- how software is built to scale

> Status: **MVP / in active development** — not a production SaaS platform. The live site is a portfolio surface.

**Site:** [forge.michaelmachado.dev](https://forge.michaelmachado.dev)

---

## Featured products

Public positioning only. Production source code remains private.

| Product | Focus |
| --- | --- |
| **GIA** — Gestão Inteligente e Automatizada | Modular multi-tenant SaaS platform oriented by AI and automation |
| **SILOG** | Logistics vertical — loads, drivers, vehicles, trips, and freight operations |
| **FinGestor Pro** | Business financial management — payables, receivables, cash flow, indicators |
| **Cabe no Bolso** | Personal financial management — budget, expenses, goals, planning |
| **Designações** | Organization of assignments, participants, calendar, history, and activities |

Institutional technical narrative for the GIA ecosystem lives in the planned public repository `gia-showcase` (local preparation in progress; remote to be created manually).

---

## Stack

### This repository (confirmed)

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (`strict`)
- [Node.js](https://nodejs.org/) (runtime)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (intended hosting)

Also present in this codebase: Framer Motion (motion), Lucide (icons), ESLint with Next.js configs.

### Product engineering (portfolio context)

Across product work presented here, the engineering narrative also includes **PostgreSQL** as the relational data store for SaaS systems. That dependency is **not** part of the FORGE site runtime.

---

## Quality

Practices confirmed or intentionally targeted in this repository:

| Area | State |
| --- | --- |
| TypeScript strict | Enabled |
| Lint | ESLint + `eslint-config-next` (core-web-vitals + TypeScript) |
| Automated tests | Not configured yet |
| Accessibility | UI built with semantic structure; continuous improvement |
| SEO | Next.js Metadata API, `sitemap.xml`, `robots.txt`, OG image |
| Performance | App Router + modern React; measure before claiming numbers |
| Security | No secrets in repo; see [SECURITY.md](./SECURITY.md) |

No CI badge is published until a real workflow exists.

---

## Links

| Channel | URL |
| --- | --- |
| Site | https://forge.michaelmachado.dev |
| GitHub | https://github.com/MichaelMachad0 |
| LinkedIn | https://www.linkedin.com/in/michael-machado-qa/ |
| Email | contato@forge.michaelmachado.dev |

---

## Documentation

- [Architecture](./docs/architecture.md)
- [Design principles](./docs/design-principles.md)
- [Roadmap](./docs/roadmap.md)
- [Portfolio audit](./docs/github-portfolio-audit.md)
- [Pinned repositories](./docs/pinned-repositories.md)
- [Publication security checklist](./docs/publication-security-checklist.md)

Community & governance:

- [Contributing](./CONTRIBUTING.md)
- [Security](./SECURITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

### Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://forge.michaelmachado.dev
```

---

## License

**All Rights Reserved** — see [LICENSE.md](./LICENSE.md).

This portfolio codebase is **not** offered as open source. You may view the public repository for professional evaluation. You may not copy, modify, redistribute, or reuse the design, content, or code without prior written permission.

---

## Versão curta (PT)

FORGE é o portfólio público de Michael Machado — Founder & Full Stack Software Engineer. Apresenta produtos SaaS, arquitetura, engenharia e processos de construção, sem expor código proprietário dos produtos comerciais. Status atual: MVP em evolução.
