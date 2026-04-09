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
