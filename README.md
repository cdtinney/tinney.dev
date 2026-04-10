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

The site supports multiple visual themes, toggled via a dropdown in the bottom-left corner. Themes are defined in `src/themes/` as JS files exporting CSS custom property values.

- **Default** - Clean blue/coral palette
- **Sharks** - San Jose Sharks teal/orange palette with hockey easter eggs (bouncing puck, rink-style header, hockey stick cursor, trading card project cards, goal counter)
- **Canada** - Canadian flag red/white palette with maple leaf background, falling snow/snowflakes, maple leaf cursor, and postcard-style project cards
- **Underwater** - Deep ocean gradient with animated waves, seabed with coral and seaweed, rising bubbles, manta rays, diving mask cursor, and porthole-style project cards

Theme selection is persisted in a cookie. All theme CSS is rendered at build time into static `<style>` tags scoped by `[data-theme="id"]` selectors, so switching is instant with no layout flash. A blocking inline script in `<head>` reads the cookie and sets the `data-theme` attribute + CSS custom properties before first paint.

Each theme JS file is fully declarative. Components expose `data-*` attributes (e.g. `data-card`, `data-header`, `data-banner`) as stable hooks for theme CSS, avoiding Astro's scoped class name hashing.

A theme file can export:

| Export      | Type       | Required | Description                                                           |
| ----------- | ---------- | -------- | --------------------------------------------------------------------- |
| `name`      | `string`   | Yes      | Display name in theme dropdown                                        |
| `swatches`  | `string[]` | Yes      | Primary colors shown in dropdown                                      |
| `colors`    | `object`   | Yes      | CSS custom property overrides                                         |
| `css`       | `string`   | No       | Scoped CSS rendered at build time (use `[data-theme="id"]` selectors) |
| `baseCss`   | `string`   | No       | Structural CSS for hidden elements (global, unscoped)                 |
| `html`      | `string`   | No       | Easter egg DOM elements rendered at build time                        |
| `init()`    | `function` | No       | Client-side logic, called once on first theme activation              |
| `cleanup()` | `function` | No       | Teardown, called on every theme switch before the new theme activates |

Example theme file (`src/themes/example.js`):

```js
const ID = 'example';
const T = `[data-theme="${ID}"]`;
const IMG = '/images/themes/example';

const PALETTE = {
  orange: '#ff6600',
  orangeLight: '#ff8533',
  dark: '#1a1a2e',
  surface: '#252545',
};

export default {
  name: 'Example',
  swatches: [PALETTE.orange, PALETTE.dark],

  colors: {
    '--color-text': '#e0e0e0',
    '--color-bg': PALETTE.dark,
    '--color-bg-surface': PALETTE.surface,
    '--color-primary': PALETTE.orange,
    '--color-primary-hover': PALETTE.orangeLight,
    // ... remaining color tokens
  },

  html: `
    <div class="example-bg" data-example-bg aria-hidden="true"></div>
  `,

  baseCss: `
    .example-bg { display: none; pointer-events: none; position: fixed; inset: 0; z-index: -1; }
  `,

  css: `
    ${T} [data-example-bg] { display: block !important; background: radial-gradient(circle, ${PALETTE.surface} 0%, ${PALETTE.dark} 100%); }
    ${T} [data-card] { border: 1px solid rgba(255,102,0,0.3) !important; background: ${PALETTE.surface} !important; }
    ${T} [data-banner-default] { display: none !important; }
    ${T} [data-banner-example] { display: block !important; }
  `,

  init() {
    console.log('Example theme activated!');
  },

  cleanup() {
    console.log('Example theme deactivated');
  },
};
```

To add a new theme:

1. Create `src/themes/<name>.js` following the structure above (use `ID`, `T`, `IMG`, `PALETTE` constants)
2. Place theme images in `public/images/themes/<name>/`
3. Import and register it in `src/themes/index.js`
4. Add the theme's color map to the inline flash-prevention script in `src/layouts/DefaultLayout.astro`

## Developing

Development is done on the `main` branch.

- All commits to `main` are automatically deployed.
- **Development must be done on branches off `main`.**
- Pull requests should set `main` as the base.

### Requirements

- Node.js 22+

### Installing

```
$ npm install
```

### Running

```
$ npm run dev
```

### Linting & Formatting

ESLint and Prettier are configured with Astro plugins. Code is automatically linted and formatted:

- **On save** — VS Code formats via Prettier (`.vscode/settings.json`)
- **On commit** — Husky pre-commit hook runs `lint-staged` (ESLint `--fix` + Prettier `--write`)
- **In CI** — GitHub Actions runs `npm run lint` and `npm run format:check` before build

```
$ npm run lint          # check for lint errors
$ npm run lint:fix      # auto-fix lint errors
$ npm run format        # format all files
$ npm run format:check  # check formatting without writing
```

### Building

```
$ npm run build
```

Build output is in the `dist/` folder.

## Deploying

The website is built and deployed to GitHub Pages via GitHub Actions.

The workflow is defined in `.github/workflows/main.yml`.

1. Code is pushed to `main`
2. GitHub Actions runs lint, format check, and `npm run build`
3. Build output is deployed to GitHub Pages via `actions/deploy-pages`

## License

MIT
