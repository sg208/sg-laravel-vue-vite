# conventions.md <!-- enggflo -->

## Naming

- Components → PascalCase `.vue` in `resources/js/components/` (`WizkidItem.vue`, `LegalPage.vue`); auto-imported, no manual import.
- Pages → lowercase `.vue` in `resources/js/pages/`; file name = route path (`privacy.vue` → `/privacy`); catch-all `[...all].vue`.
- Composables → `useX.js` in `resources/js/composables/`, default export.
- Constants → UPPER_SNAKE (`REPO_URL` `Footer.vue:22`, `PAGE_TITLES` `pageTitles.js:4`).
- Tests → `tests/js/<subject>.test.js` (Vitest) · `tests/Unit|Feature/*Test.php` (PHPUnit).

## Style

- `.editorconfig` → 4-space indent · LF · final newline; YAML 2-space.
- Vue SFCs → `<template>` first, then `<script setup>`.
- Styling → Tailwind utility classes inline; no scoped CSS.
- No ESLint/Prettier config in repo → style unenforced.

## Error handling

- Fetch failure → catch sets user-facing `errorMsg` string + `isFetching=false` (`useWizkid.js:20-23`); page renders it in `role="alert"` (`index.vue:9-11`).

## Accessibility

- New route → add title to `PAGE_TITLES` (`pageTitles.js:4-13`).
- New external URL → list third party in `privacy.vue`.

## Git

- Commit subjects → Conventional Commits: `feat:` · `fix:` · `chore(scope):` · `docs:` · `test:` (`git log`).
- Branches → `develop` = work branch; feature branches `<type>/<slug>` merged into `develop` (`chore/cf-workers-hosting`, `feat/legal-footer-hosting`); release merges `develop` → `main`.
- NEVER commit to `main` directly.
