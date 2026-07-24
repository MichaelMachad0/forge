# Security

| Field | Value |
| --- | --- |
| **Title** | Security Policy |
| **Purpose** | Define how to report security concerns related to the FORGE portfolio |
| **Scope** | This public repository and the public site at `forge.michaelmachado.dev` |
| **Status** | Active |
| **Last review** | 2026-07-24 |

## Supported surfaces

| Surface | Support |
| --- | --- |
| `forge` repository (main) | Best effort |
| Live site `forge.michaelmachado.dev` | Best effort |
| Private commercial products (GIA and related) | **Out of scope for this document** — do not discuss private internals here |

## Reporting a vulnerability

Please report security issues privately:

- Email: `contato@forge.michaelmachado.dev`
- Subject prefix: `[SECURITY][FORGE]`

Include:

- description of the issue
- steps to reproduce
- potential impact
- whether a proof of concept exists (do not include exploit payloads against third-party systems)

Do **not** open a public issue for sensitive vulnerabilities.

## Expectations

- Acknowledgement target: within a reasonable time under best effort
- No bug bounty program is currently offered
- Please allow time for assessment before public disclosure

## Decisions

- Secrets must never be committed. Use `.env.example` for non-secret placeholders only.
- Security reports about private products should not include proprietary architecture details in public channels.

## Limits

This portfolio site is not a multi-tenant SaaS production system. Findings should be assessed in that context.
