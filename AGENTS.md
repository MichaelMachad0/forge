<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

FORGE is a single static Next.js (App Router) portfolio site — there is no backend, database, or external service. The only runtime process is the Next.js server. Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`).

- Run the dev server with `npm run dev` (Next.js 16 + Turbopack) on `http://localhost:3000`. Start it in a persistent tmux session so it keeps running across shell calls.
- There are no automated tests (`package.json` has no `test` script). "Testing" means `npm run lint`, `npm run build`, and manual browser verification. Do not assume a test runner exists.
- No environment variables are required to run. `NEXT_PUBLIC_SITE_URL` is optional and falls back to a default in `src/lib/site-config.ts`.
- The site is content-driven: sections live in `src/components/sections/` and data in `src/data/`. Navigation is anchor-based smooth-scroll (`#hero`, `#projetos`, `#contato`).
