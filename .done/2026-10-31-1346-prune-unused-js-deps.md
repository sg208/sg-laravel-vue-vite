# Prune unused JS deps (unplugin-auto-import, vite-auto-import-resolvers)

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (grep, prune)

## Goal
- Only deps referenced by code remain

## Context
- `vite.config.js` — no import of unplugin-auto-import or vite-auto-import-resolvers (grep: 0 hits in resources/ and vite.config.js) · lodash/axios only in unused `resources/js/bootstrap.js`

## Proposed approach
1. Remove the two unplugin deps; keep lodash/axios (Laravel scaffold) · files: `package.json`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `grep -c auto-import package.json` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
