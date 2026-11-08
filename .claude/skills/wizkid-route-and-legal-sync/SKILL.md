---
name: wizkid-route-and-legal-sync
description: Use when adding, renaming or removing a page or route under resources/js/pages, adding an external URL or third-party host, or changing focus, landmarks, live regions or colours that the accessibility page describes. Trigger words - new page, route, title, pageTitles, privacy, third party, external URL, accessibility page, legal page.
---

# wizkid-route-and-legal-sync

## Rules

- New route → file `resources/js/pages/<path>.vue` (file name = URL path) AND title in `PAGE_TITLES` `resources/js/pageTitles.js:4-13`. Missing title → "Page not found" title. `conventions.md` § Accessibility
- Catch-all → `resources/js/pages/[...all].vue` (do not rename).
- Static HTML per route → automatic from the `~pages` list (`vite.static-routes.js`). `tests/js/staticRoutes.test.js` fails if a route has no HTML.
- New external URL or host (image, font, API, script) → add to `resources/js/pages/privacy.vue` third-party list. Current hosts: Cloudflare, `picsum.photos`, `fastly.picsum.photos` (`design.md` § Data flow).
- Accessibility behaviour change (focus, landmarks, live regions, colours) → update `resources/js/pages/accessibility.vue` in the same change. Claims MUST match code.
- Accessibility or privacy copy edited → run agent `legal-a11y-auditor` (`.opencode/agents/legal-a11y-auditor.md`) and resolve every `contradicted` claim.
- Placeholder pages (`add`, `update`, `delete`, `login`) → `ListHeader` + `components/PlaceholderNotice.vue`. `design.md:17`
- Legal pages → wrap `components/LegalPage.vue` (h1 + "Last updated"). `design.md:18`

## Verify

1. `pnpm test` → `tests/js/staticRoutes.test.js`, `tests/js/legalPages.test.js`
2. Title present: `grep -n "<path>" resources/js/pageTitles.js` returns a line
