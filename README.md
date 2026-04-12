# tinney.dev

> A personal website.

> [![Build and Deploy](https://github.com/cdtinney/tinney.dev/actions/workflows/main.yml/badge.svg)](https://github.com/cdtinney/tinney.dev/actions/workflows/main.yml)

## Introduction

This website is built with:

- [Astro](https://astro.build) - Static site generation
- [GitHub Actions](https://github.com/features/actions) - CI/CD and deployment to GitHub Pages

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

### Themes

The site supports multiple visual themes, toggled via a dropdown in the bottom-left corner:

- **Default** - Clean blue/coral palette
- **Sharks** - San Jose Sharks teal/orange palette with hockey easter eggs
- **Canada** - Canadian flag red/white palette with falling snow and maple leaves
- **Underwater** - Deep ocean gradient with animated waves, manta rays, and coral

Themes are defined in `src/themes/` as TypeScript files satisfying the `Theme` interface. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full theme API and conventions.

## Developing

### Requirements

- [Node.js](https://nodejs.org/) 22+
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

Deployed to GitHub Pages via GitHub Actions (`.github/workflows/main.yml`).

1. Code is pushed to `main`
2. CI runs lint, format check, typecheck, tests, build, and Lighthouse
3. Build output is deployed via `actions/deploy-pages`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for workflow, commit conventions, architecture, and code style guidelines.

## License

MIT
