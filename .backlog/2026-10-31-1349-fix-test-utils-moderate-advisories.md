# Clear moderate advisories under @vue/test-utils (minimatch, glob)

- **Date**: 2026-10-31 13:50
- **Type**: chore
- **Effort**: easy
- **Status**: open
- **Source**: pnpm audit after the 2026-10-31 sweep

## Goal
- `pnpm audit` reports no advisories

## Context
- `pnpm audit`: moderate minimatch <11.0.1 and glob >=9 <=14.0.1 via `@vue/test-utils > js-beautify` (dev/test only)
- `package.json` `pnpm.overrides` already pins patched rollup, nanoid, picomatch

## Proposed approach
1. Wait for js-beautify release, or add overrides `minimatch@<11.0.1` / `glob@>=9 <14.0.2` after checking js-beautify still runs · files: `package.json`, `pnpm-lock.yaml`
- Cheaper option: accept (dev-only, moderate)

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `pnpm audit` | "No known vulnerabilities found" |
| D-2 | `pnpm test` | exit 0 |

## Open questions
- Accept dev-only moderate risk or force overrides across a major of glob/minimatch?
