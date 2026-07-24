# Publication Security Checklist

| Field | Value |
| --- | --- |
| **Title** | Publication Security Checklist |
| **Purpose** | Gate public commits and pushes for portfolio repositories |
| **Scope** | `forge`, `gia-showcase`, profile README, and future public demo repos |
| **Status** | Active |
| **Last review** | 2026-07-24 |

## Purpose

Prevent accidental disclosure of proprietary code, secrets, customer data, or attack-surface details before anything is published.

## Pre-commit checklist

- [ ] No `.env`, `.env.local`, or credential files staged
- [ ] No API keys, tokens, passwords, or private certificates
- [ ] No private product source copied into public docs
- [ ] No real database schema, table dumps, or migration files from private products
- [ ] No internal admin URLs, hostnames, ports, or infrastructure topology
- [ ] No customer names, personal emails (except intentional public contact), or PII
- [ ] No screenshots with real tenants, tokens, or production data
- [ ] No stack traces or logs from private systems
- [ ] Status claims are truthful (MVP / in development / planned)
- [ ] License and SECURITY docs still accurate
- [ ] Links verified
- [ ] Mermaid diagrams remain abstract

## Pre-push checklist

- [ ] `git status` reviewed; only intended files included
- [ ] Diff reviewed for secrets (`rg` / GitHub secret scanning mindset)
- [ ] Private repositories were **not** modified unless explicitly authorized
- [ ] Remote exists for the repository being pushed
- [ ] Owner approved commit messages and push in the checkpoint report

## Approval gate

| Result | Meaning |
| --- | --- |
| **PASS** | Safe to commit and push |
| **PASS WITH RESERVATIONS** | Safe with noted follow-ups |
| **BLOCKED** | Waiting on owner decision |
| **FAIL** | Do not publish |

## Decisions

- Public showcases describe capabilities, not implementations.
- When unsure whether content is sensitive, omit it.

## Limits

- This checklist does not replace private-repo security reviews.
- It does not authorize changing repository visibility.
