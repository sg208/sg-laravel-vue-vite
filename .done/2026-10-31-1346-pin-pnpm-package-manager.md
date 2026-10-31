# Switch JS side to pnpm and declare packageManager

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: easy
- **Status**: ready
- **Source**: /enggflo-maintenance (manifest read, pin)

## Goal
- pnpm-lock.yaml replaces package-lock.json; packageManager pinned

## Context
- `package-lock.json` (npm) · `README.md` uses npm · `.node-version:1` pins Node 16.15.0 · dev2 needs global json-server/concurrently (`package.json:5`)

## Proposed approach
1. pnpm import; delete package-lock.json; add packageManager + engines; add json-server/concurrently as devDeps; update README · files: `package.json`, `README.md`, `.node-version`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `test -f pnpm-lock.yaml && test ! -f package-lock.json` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `d307d52` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
