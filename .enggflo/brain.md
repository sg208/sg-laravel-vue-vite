# Brain

- PURPOSE: decisions · context · open threads not derivable from code
- UPDATE: resolved Open thread → remove; superseded Decision → append `SUPERSEDED: <date>`

## Decisions

- 2026-10-31 — `main` created from `master` and set as default; `develop` created from `main`. WHY: standard two-branch flow. REJECTED: deleting `master` — kept for safety. SOURCE: public repo sweep

- 2026-10-31 — JS side moved to pnpm and latest majors; Laravel/composer left as is. WHY: composer not available in sweep env; Laravel 9→12 is a separate upgrade. REJECTED: npm audit fix --force — skips framework migration. SOURCE: `.done/`

## Context

- Laravel backend is unused by the SPA; data comes from JSON Server mock (`jsonserver/`).

## Open threads

- Laravel 9 upgrade → `.backlog/2026-10-31-1346-upgrade-laravel-composer.md`
- Moderate dev-only advisories under @vue/test-utils → `.backlog/2026-10-31-1349-fix-test-utils-moderate-advisories.md`
- No CI workflow; tests run locally only.

- `master` and `versiontwo` remote branches still exist; deletion needs owner decision.
