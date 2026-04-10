# THIS IS NOT ACTIVELY MAINTAINED.

# tinney.dev
> A personal website.

## Introduction

This website is built with:

* [Astro](https://astro.build) - Static site generation
* [GitHub Actions](https://github.com/features/actions) - CI/CD and deployment to GitHub Pages

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

* **Default** - Clean blue/coral palette
* **Sharks** - San Jose Sharks teal/orange palette with hockey easter eggs (bouncing puck, rink-style header, hockey stick cursor, trading card project cards, goal counter)
* **Canada** - Canadian flag red/white palette with maple leaf background, falling snow/snowflakes, maple leaf cursor, and postcard-style project cards

Theme selection is persisted in `localStorage`. A blocking inline script in `<head>` applies the saved theme before first paint to prevent flash.

To add a new theme:
1. Create `src/themes/<name>.js` exporting `name`, `swatches`, and `colors`
2. Import and register it in `src/themes/index.js`
3. Add the theme's colors to the inline flash-prevention script in `src/layouts/DefaultLayout.astro`
4. Optionally add theme-specific easter eggs/styles using `:global([data-theme="<name>"])` selectors

### About

Personal information is in `src/data/about.md`.

## Developing

Development is done on the `develop` branch.
  * All commits to `develop` are automatically deployed.
  * **Development must be done on branches off `develop`.**
  * Pull requests should set `develop` as the base.

### Requirements

* Node.js 22+

### Installing

```
$ npm install
```

### Running

```
$ npm run dev
```

### Building

```
$ npm run build
```

Build output is in the `dist/` folder.

## Deploying

The website is built and deployed to GitHub Pages via GitHub Actions.

The workflow is defined in `.github/workflows/main.yml`.

1) Code is pushed to `develop`
2) GitHub Actions builds the site with `npm run build`
3) Build output is deployed to GitHub Pages via `actions/deploy-pages`

## License

MIT
