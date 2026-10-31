# Upgrade Tailwind CSS 3 → 4

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: medium
- **Status**: ready
- **Source**: /enggflo-maintenance (npm view, upgrade, major)

## Goal
- Styles build with Tailwind 4 via @tailwindcss/vite

## Context
- `package.json:14` tailwindcss ^3.1.8 → 4.3.3 (major) · `tailwind.config.js` · `postcss.config.js` · `resources/css/app.css:1-3`

## Proposed approach
1. Use @tailwindcss/vite; replace @tailwind directives with @import "tailwindcss" + @source; drop postcss/autoprefixer · files: `package.json`, `vite.config.js`, `resources/css/app.css`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm build` | exit 0 |

## Open questions

## Outcome
- Done 2026-10-31 in `e67258c` on develop; verified with `pnpm build`, `pnpm test`, `pnpm audit --audit-level high`.
