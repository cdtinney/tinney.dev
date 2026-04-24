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

Set your domain — this is used for sitemap and canonical URLs:

```js
site: 'https://your-domain.com',
```

If you remove the microsites (see step 4), also remove them from the sitemap `filter`.

### 3. Replace your content

- **Projects** — edit `src/data/projects.json` with your own projects
- **Blog posts** — replace or remove posts in `src/content/blog/`
- **OG image** — replace `public/og-image.png` with your own (1200x630 recommended)
- **Favicon** — replace `public/favicon.png`

### 4. Remove or replace microsites

This repo hosts standalone microsites (`useyourdamnhands.com`, `whatarewedoinghere.org`) alongside the main site. If you don't need them:

- Delete `src/microsites/`, `src/pages/hands/`, `src/pages/whatarewedoinghere/`, `public/hands/`
- Remove the microsite entries from `MICROSITES` in `functions/_middleware.ts` (or delete the file entirely if you have no multi-domain routing)
- Remove the microsite `filter` from `astro.config.mjs`
- Remove microsite links from the homepage and projects page

To add your own microsite, see the "Microsites" section in `CLAUDE.md` for the file structure and conventions.

### 5. Update metadata files

- `package.json` — change the `"name"` field
- `LICENSE` — update the copyright holder
- `README.md` — update the title and CI badge URL

### 6. Deploy to Cloudflare Pages

The site deploys to Cloudflare Pages via GitHub Actions (`.github/workflows/main.yml`) using `wrangler pages deploy`.

**One-time setup:**

1. Create a Cloudflare Pages project in the Cloudflare dashboard (Workers & Pages → Create → Pages → Direct Upload). Name it something like `your-site` — you'll reference this name in the workflow.
2. Update the `--project-name=tinney-dev` flags in `.github/workflows/main.yml` (two places: `deploy` and `preview` jobs) to match your project name.
3. Create a Cloudflare API token (My Profile → API Tokens → Create Token → "Edit Cloudflare Workers" template, or a custom token with `Account.Cloudflare Pages: Edit` permission).
4. In your GitHub repo, add two Actions secrets:
   - `CLOUDFLARE_API_TOKEN` — the token from step 3
   - `CLOUDFLARE_ACCOUNT_ID` — found in the Cloudflare dashboard sidebar
5. Add your custom domain(s) in the Cloudflare Pages project settings (Custom domains tab). Cloudflare handles DNS and SSL automatically when the domain is on Cloudflare, or provides CNAME instructions for external DNS.

**How it works:**

- **Production** — pushes to `main` deploy via `wrangler pages deploy --branch=main`
- **Preview** — pull requests deploy via `wrangler pages deploy --branch=<head_ref>`, and a preview URL (e.g. `feat-my-thing.your-site.pages.dev`) is posted as a PR comment

### 7. (Optional) Multi-domain routing

If you want to host multiple sites under one Cloudflare Pages project (like this repo does with microsites), the middleware in `functions/_middleware.ts` rewrites requests based on the `Host` header. Edit the `MICROSITES` array to map custom domains to URL path prefixes. Each microsite domain must also be added as a custom domain in the Cloudflare Pages dashboard.

## What you don't need to change

- **Layouts and components** — they read the site title and description from `src/data/site.ts` automatically
- **`robots.txt`** — generated dynamically from `astro.config.mjs`'s `site` field
- **Sitemap** — generated automatically by `@astrojs/sitemap`

## Themes

The site comes with four themes (Default, Sharks, Canada, Underwater). You can keep them, remove them, or add your own. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the theme API.
