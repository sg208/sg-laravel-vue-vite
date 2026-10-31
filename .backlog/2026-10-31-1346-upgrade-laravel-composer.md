# Upgrade Laravel 9 and PHP deps (composer side)

- **Date**: 2026-10-31 13:46
- **Type**: chore
- **Effort**: hard
- **Status**: ready
- **Source**: /enggflo-maintenance (manifest read, upgrade, major; composer outdated not run)

## Goal
- Laravel on a supported major

## Context
- `composer.json:9-12` laravel/framework ^9.19 (EOL) · composer not installed in sweep env

## Proposed approach
1. Follow Laravel 10→11→12 upgrade guides; out of JS sweep scope · files: `composer.json`, `app/`, `config/`

## Done when
| id | check | expect |
|---|---|---|
| D-1 | `vendor/bin/phpunit` | exit 0 |

## Open questions
