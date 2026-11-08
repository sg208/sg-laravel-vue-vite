---
name: wizkid-design-tokens
description: Use when editing Vue templates, Tailwind classes, colours, dark mode, fonts, focus outlines, motion, role tags or layout in resources/js or resources/css. Trigger words - colour, color, token, Tailwind, dark mode, focus, font, role tag, bg-surface, text-muted, min-h-11.
---

# wizkid-design-tokens

## Rules

- Colours → token classes only: `bg-ground` `bg-surface` `bg-raised` `text-ink` `text-muted` `bg-accent` `text-negative` `ring-control`. NEVER raw palette (`bg-teal-700`, `#1b6e66` inline). `conventions.md` § Style
- Token source: `resources/css/app.css:14-32` (`:root`), `:37-55` (dark, `prefers-color-scheme`), `:62-72` (`@theme inline` → Tailwind names).
- New token → add light AND dark value + `--color-<name>` mapping. WHY: mapping is the only path to Tailwind classes.
- Role tags → `--role-{boss,developer,designer,intern}-{bg,ink}` via `resources/js/roles.js` `getRoleTone`. NEVER hardcode a role colour in a component.
- Focus → `:focus-visible` 3px `--focus` outline (`resources/css/app.css:96-98`). NEVER `outline: none` without replacement.
- Touch targets → `min-h-11` (44px) on controls (`resources/js/components/Nav.vue:7`).
- Motion → hover uses `transition-colors` only; zeroed under `prefers-reduced-motion` (`resources/css/app.css:107`).
- Scoped CSS → NONE. Styling = Tailwind utilities inline in templates.
- Fonts → `@fontsource/instrument-sans` · `@fontsource/instrument-serif` imported in `resources/js/app.js:7-10`. NEVER font CDN.
- Layout → 1100px centred column; 16px gutter phone, 24px ≥640px; list row grid `56px | name+role | contact | actions` ≥768px; `min-w-0` + `overflow-wrap:anywhere` (no sideways scroll at 320px). `design.md` § Visual design

## Verify

1. `pnpm test` → `tests/js/layout.test.js` covers skip link + focus move
2. Light and dark both checked: toggle OS appearance, confirm `--text` vs `--ground` contrast
