# Upgrade unplugin-vue-components 0.22 → 32 and vite-plugin-pages 0.26 → 0.33

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (npm view, upgrade, major (0.x))

## Goal
- Auto component import and file routes work on Vite 8

## Context
- `package.json:16` unplugin-vue-components ^0.22.8 · `package.json:19` vite-plugin-pages ^0.26 · `vite.config.js:30-36`

## Proposed approach
1. Bump both; keep config · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm build` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
