# Upgrade vue-router 4 → 5

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (npm outdated, upgrade, major)

## Goal
- Router on latest major

## Context
- `package.json:23` vue-router ^4.1.5 → 5.4.0 · `resources/js/router.js`

## Proposed approach
1. Bump; check createRouter/createWebHistory API unchanged · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm build && pnpm test` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
