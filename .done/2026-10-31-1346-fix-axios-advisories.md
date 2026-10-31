# Fix axios high advisories (0.27 → 1.x)

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (npm audit, security, high)

## Goal
- No high/critical axios advisories in the JS lockfile

## Context
- `package.json:9` — axios ^0.27; npm audit: GHSA-jr5f-v2jv-69x6, GHSA-3g43-6gmg-66jw (high), fix needs major

## Proposed approach
1. Bump axios to ^1 (only used in `resources/js/bootstrap.js`, which app.js does not import) · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm audit --audit-level high` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
