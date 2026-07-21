# FORGE

**Software Engineering**

Building software that scales.

Portfólio profissional (MVP) construído para transmitir excelência em engenharia
de software, arquitetura, produto e IA. Design premium, dark-mode-first,
inspirado em produtos como Vercel, Stripe, Linear, Raycast, Arc Browser e
Supabase.

Domínio: [forge.michaelmachado.dev](https://forge.michaelmachado.dev)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) — micro animações
- [Lucide Icons](https://lucide.dev/)
- Metadata API nativa do Next.js para SEO (title, OG, Twitter Card,
  `sitemap.xml`, `robots.txt` e favicon/OG image gerados dinamicamente)

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste a URL pública do site (usada em
metadata, Open Graph, sitemap e robots.txt):

```bash
NEXT_PUBLIC_SITE_URL=https://forge.michaelmachado.dev
```

## Estrutura do projeto

```
src/
  app/                 # Rotas, layout raiz, metadata e SEO (sitemap, robots, OG image, ícones)
  components/
    layout/            # Navbar e Footer
    sections/          # Hero, Sobre, Projetos, Contato
    ui/                # Design system: Button, Badge, Container, ProjectCard, FadeIn...
  data/                # Conteúdo estruturado: projetos e áreas de foco
  lib/                 # Configuração do site (site-config.ts) e utilitários
  types/               # Tipos compartilhados (ex: Project)
```

### Adicionando um novo projeto

Edite `src/data/projects.ts` e adicione um novo objeto ao array `projects`.
O card é renderizado automaticamente na seção **Projetos**, sem necessidade de
alterar nenhum componente:

```ts
{
  slug: "novo-projeto",
  name: "Novo Projeto",
  description: "Descrição curta e objetiva.",
  tags: ["Next.js", "TypeScript"],
  status: "Em desenvolvimento",
  href: "https://...", // opcional
}
```

### Internacionalização

Todo o conteúdo textual está centralizado em `src/lib/site-config.ts` e nos
componentes de seção, o que facilita a futura extração para arquivos de
tradução (ex: `next-intl` ou `next.config` i18n) sem reestruturar a UI.

## Design System

As cores, espaçamentos e tipografia seguem tokens definidos em
`src/app/globals.css` via `@theme` do Tailwind v4:

| Token         | Valor     |
| ------------- | --------- |
| `background`  | `#09090B` |
| `surface`     | `#111113` |
| `primary`     | `#2563EB` |
| `accent`      | `#60A5FA` |
| `foreground`  | `#FAFAFA` |
| `muted`       | `#A1A1AA` |

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com):

```bash
npm run build
```

Basta importar o repositório na Vercel e definir `NEXT_PUBLIC_SITE_URL` como
variável de ambiente de produção.
