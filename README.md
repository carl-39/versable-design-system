# Versable Design System

Open `index.html` locally to browse the guide. It requires no build step.

## Package

- `tokens.json` is the platform-neutral source of truth.
- `tokens.css` exposes implementation-facing CSS custom properties.
- `index.html` and `styles.css` form the reference guide and component specimens.
- `assets/` holds only supplied Versable source assets, including supplied font files.

## Adoption

Use primitive tokens only to create semantic aliases. Application components should consume semantic variables such as `--color-text-primary`, `--color-action-primary-default`, and `--space-4`, so visual changes stay centralized. Use `data-theme="dark"` only as an inverse/foundation layer until the dark theme is fully designed and tested.

## Fonts and licensing

Montserrat and Benton Modern Display Compact Italic came from the supplied brand archives. Confirm the organisation's font licences before deploying or redistributing them. The guide declares practical fallback stacks; teams without clearance can use those fallbacks until licensing is confirmed.

## Brand decision

The 2026 Versable Institute identity is authoritative. The older CRM screenshots inform information density and workflows, not palette, card colour, or control styling.
