# Contributing

## Propose before building

Open an issue using the component proposal template. State the repeated user need, products affected, existing alternatives, accessibility risk, expected API, token need, and a representative journey. Triage classifies work as core, pattern, extension, experiment, or local product work.

## Component contract

Every component change includes purpose and anti-patterns; anatomy and public API; valid variants and states; semantic/keyboard behavior; labels, validation and content rules; responsive and localization notes; token dependencies; examples; tests; and migration/release notes.

## Review and releases

`@carl-39` is the initial steward. Pull requests must pass token validation, type checks, tests, and builds. Add a Changeset for any package-visible change. Use a patch for compatible fixes, minor for compatible additions, and major for breaking changes.

## Exceptions and deprecations

Record exceptions with the product, unmet need, rationale, risk, owner, end date, and review date. A deprecation identifies the replacement, migration, version introduced, support window, removal condition, and owner. Never remove a public API silently.
