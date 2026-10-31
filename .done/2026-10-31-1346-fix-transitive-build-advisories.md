# Clear transitive build-tool advisories (esbuild, braces, brace-expansion, browserslist, @antfu/utils)

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: medium
- **Status**: ready
- **Source**: /enggflo-maintenance (npm audit, security)

## Goal
- pnpm audit shows no high/critical

## Context
- npm audit: 24 vulnerabilities (7 moderate, 16 high, 1 critical), mostly via vite 3 / unplugin chain

## Proposed approach
1. Upgrade vite + plugins (see upgrade items); add pnpm overrides only for leftovers · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm audit --audit-level high` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
