# Versable Design System

Private design-system workspace for Versable's React web products. It turns the supplied 2025–26 visual identity into a reusable, accessible contract for learning and administrative interfaces.

## Packages

- `@carl-39/versable-tokens` - canonical DTCG-compatible source and generated CSS/JSON outputs.
- `@carl-39/versable-react` - accessible React components and component styles.
- `@carl-39/versable-docs` - executable documentation and live examples.

## Start

```sh
npm install
npm run build
npm run test
npm run dev -w @carl-39/versable-docs
```

Import `@carl-39/versable-tokens/css` and `@carl-39/versable-react/styles.css`, then consume components from `@carl-39/versable-react`.

## Release and accessibility

Changesets control semantic versions: patch for compatible fixes, minor for compatible capability, major for breaking API or token changes. Components target WCAG 2.2 AA, but this repository does not claim whole-product conformance. See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution, exception, and deprecation rules.

## Asset and font licensing

The supplied Montserrat, Benton Modern Display Compact Italic, logos, and icons remain private source assets. Confirm organisational licence rights before deploying them outside approved Versable products or changing repository visibility.
