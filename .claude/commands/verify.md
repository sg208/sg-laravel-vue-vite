---
description: "Run the unit test gate (pnpm test) and report pass/fail counts. Optional argument is a Vitest file filter."
---
<!-- enggflo:generated from .opencode/commands/verify.md — edit the source, not this file -->

Run from the repo root:

```sh
source ~/.nvm/nvm.sh && nvm use 24
pnpm test $ARGUMENTS
```

- IF `$ARGUMENTS` contains anything other than a test file path or glob (`tests/js/*.test.js`) → stop, report `status: blocked (argument)`.
- IF `$ARGUMENTS` is empty → full suite (`vitest run`, `vitest.config.js`).
- NEVER run `pnpm build`, `pnpm build:static`, `pnpm run deploy` or `wrangler` here: side effects, out of scope.

Report:

```
status: pass | fail | blocked (argument)
tests: <passed>/<total>
failing: <path:line> — <test name> | none
```
