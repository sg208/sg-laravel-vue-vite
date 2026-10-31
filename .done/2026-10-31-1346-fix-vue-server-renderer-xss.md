# Fix @vue/server-renderer XSS advisory via vue 3.5

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (npm audit, security, high)

## Goal
- vue resolves to >=3.5.42

## Context
- `package.json:22` — vue ^3.2.36; npm audit: GHSA-g2v6-rqmx-r4w6 (high) in @vue/server-renderer <=3.5.41

## Proposed approach
1. Bump vue to ^3.5.44 · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm why @vue/server-renderer` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
