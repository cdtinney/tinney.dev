# Forking This Site

This site is designed to be forked and personalized. Most personal content is centralized in a few files.

## Steps

### 1. Update `src/data/site.ts`

This is the single source of truth for your identity. All layouts and components read from it.

```ts
export const site = {
  title: 'your name',
  bio: 'Your bio. HTML is supported (e.g. <a href="...">links</a>).',
  description: 'A personal website',
  contact: {
    email: 'you@example.com',
    displayedEmail: 'you [at] example.com',
    resumeUrl: 'https://...',
  },
  social: {
    github: 'your-username',
    linkedin: 'your-username',
  },
};
```

### 2. Update `astro.config.mjs`

Set your domain (or GitHub Pages URL):

```js
site: 'https://your-domain.com',
```

### 3. Update `public/CNAME`

Replace with your custom domain, or delete this file if using `username.github.io`.

### 4. Replace your content

- **Projects** — edit `src/data/projects.json` with your own projects
- **Blog posts** — replace or remove posts in `src/content/blog/`
- **OG image** — replace `public/og-image.png` with your own (1200x630 recommended)
- **Favicon** — replace `public/favicon.png`

### 5. Update metadata files

- `package.json` — change the `"name"` field
- `LICENSE` — update the copyright holder
- `README.md` — update the title and CI badge URL

### 6. Deploy

The site deploys to GitHub Pages via GitHub Actions on push to `main`. Enable GitHub Pages in your repo settings (Settings > Pages > Source: GitHub Actions).

## What you don't need to change

- **Layouts and components** — they read the site title and description from `src/data/site.ts` automatically
- **`robots.txt`** — generated dynamically from `astro.config.mjs`'s `site` field
- **Sitemap** — generated automatically by `@astrojs/sitemap`

## Themes

The site comes with four themes (Default, Sharks, Canada, Underwater). You can keep them, remove them, or add your own. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the theme API.
