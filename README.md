# tinney.dev

> A personal website.

> [![Build and Deploy](https://github.com/cdtinney/tinney.dev/actions/workflows/main.yml/badge.svg)](https://github.com/cdtinney/tinney.dev/actions/workflows/main.yml)

## Introduction

This website is built with:

- [Astro](https://astro.build) - Static site generation
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting and deployment

## Content

### Blog

Blog posts are Astro content collections in `src/content/blog/`. Each post is a directory containing `index.md` and any co-located images.

Frontmatter:

```
---
title: "Post Title"
date: "YYYY-MM-DD"
path: "/blog/slug"
excerpt: "Short description for the listing page."
draft: true    # optional, excluded from production
archived: true # optional, excluded from listing
---
```

### Projects

Projects are defined in `src/data/projects.json`. Sorted by `lastCommitDate` (newest first).

### Microsites

This repo also hosts standalone microsites, each with its own domain, layout, and styles:

- **[useyourdamnhands.com](https://useyourdamnhands.com)** — A public service announcement about unnecessary tools
- **[whatarewedoinghere.org](https://whatarewedoinghere.org)** — Coming soon

Domain routing is handled by Cloudflare Pages Functions middleware (`functions/_middleware.ts`). There are two ways to create a microsite:

#### Option A: Single index.html (simple)

For lightweight microsites that don't need Astro's build pipeline:

1. Create `src/pages/<name>/index.html` — Astro treats raw `.html` files in `src/pages/` as page routes without any processing. The file is served at `/<name>/` in both dev and production.
2. To attach a custom domain, add an entry to `MICROSITES` in `functions/_middleware.ts`:
   ```ts
   { prefix: '/<name>', domain: 'example.com' }
   ```

`src/pages/useless-box/index.html` is a minimal example that renders a red box.

#### Option B: Full Astro microsite (complex)

For microsites that need components, data, TypeScript, or multiple routes:

- `src/microsites/<name>/` — layouts, components, data, styles (not routed by Astro)
- `src/pages/<name>/` — page routes (`index.astro`, `404.astro`, `robots.txt.ts`, `sitemap.xml.ts`)
- `public/<name>/` — static assets (images, favicon)

After adding routes under `src/pages/<name>/`, exclude the prefix from the main sitemap in `astro.config.mjs` and register the domain in the middleware as above.

### Themes

The site supports multiple visual themes, toggled via a dropdown in the bottom-left corner:

- **Default** - Clean blue/coral palette
- **Sharks** - San Jose Sharks teal/orange palette with hockey easter eggs
- **Canada** - Canadian flag red/white palette with falling snow and maple leaves
- **Underwater** - Deep ocean gradient with animated waves, manta rays, and coral

Themes are defined in `src/themes/` as TypeScript files satisfying the `Theme` interface. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full theme API and conventions.

## Developing

### Requirements

- [Node.js](https://nodejs.org/) 22+ - install via `brew install node` (assuming you have Homebrew installed)
- [pnpm](https://pnpm.io/) — install via `corepack enable pnpm`

### Quick Start

```
$ pnpm install
$ pnpm dev
```

### Commands

| Command             | Description                |
| ------------------- | -------------------------- |
| `pnpm dev`          | Start dev server           |
| `pnpm build`        | Production build           |
| `pnpm lint`         | ESLint check               |
| `pnpm lint:fix`     | ESLint auto-fix            |
| `pnpm format`       | Prettier format all files  |
| `pnpm format:check` | Prettier check             |
| `pnpm typecheck`    | TypeScript type check      |
| `pnpm test`         | Run unit tests (Vitest)    |
| `pnpm test:e2e`     | Run e2e tests (Playwright) |

### Linting & Formatting

ESLint and Prettier run automatically:

- **On save** — VS Code formats via Prettier
- **On commit** — Husky pre-commit hook runs `lint-staged`
- **In CI** — GitHub Actions checks lint and formatting before build

## Deploying

Deployed to Cloudflare Pages via GitHub Actions (`.github/workflows/main.yml`).

**Production** — on push to `main`:

1. CI runs lint, format check, typecheck, tests, build, and Lighthouse
2. Build output is deployed via `wrangler pages deploy --branch=main`

**Preview** — on pull requests:

1. CI runs the same checks, then deploys with `--branch=${{ github.head_ref }}`
2. A preview URL (e.g. `feat-my-thing.tinney-dev.pages.dev`) is posted as a PR comment
3. The comment is updated on subsequent pushes to the same PR

Custom domains (`tinney.dev`, `useyourdamnhands.com`, `whatarewedoinghere.org`) are configured in the Cloudflare Pages dashboard. Domain-based routing is handled by the middleware in `functions/_middleware.ts`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for workflow, commit conventions, architecture, and code style guidelines.

## License

MIT
