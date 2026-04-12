# Vercel Migration Plan

Migrate hosting from GitHub Pages to Vercel for automatic PR preview deploys and simpler CI.

## Why

- **PR preview deploys** — every PR gets a unique URL automatically, no extra config
- **Simpler CI** — Vercel handles building and deploying; GitHub Actions only runs checks
- **Faster deploys** — Vercel's edge network, no artifact upload/download round-trip
- **First-class Astro support** — zero-config detection and optimized builds

## Current state

- Site is deployed to GitHub Pages via `.github/workflows/main.yml`
- CI workflow has 6 jobs: `setup` → `lint` / `format` / `typecheck` / `test` (parallel) → `build` → `deploy`
- The `build` job uploads artifacts for both production (GitHub Pages) and PR previews (unused)
- Custom domain `tinney.dev` is configured via `public/CNAME` and DNS pointing to GitHub Pages
- `astro.config.mjs` sets `site: 'https://tinney.dev'`

## Steps

### 1. Connect repo to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import `cdtinney/tinney.dev`
2. Vercel auto-detects Astro — accept the defaults:
   - Framework Preset: Astro
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
3. Set Node.js version to 22 in Vercel project settings (Settings → General → Node.js Version)
4. Deploy — this creates the initial production deploy on a `*.vercel.app` URL

### 2. Configure custom domain

1. In Vercel project settings → Domains, add `tinney.dev`
2. Update DNS records to point to Vercel instead of GitHub Pages:
   - Remove the existing GitHub Pages A/CNAME records
   - Add Vercel's CNAME record: `cname.vercel-dns.com`
   - Or use Vercel's A record: `76.76.21.21`
3. Vercel handles SSL automatically
4. Delete `public/CNAME` (only needed for GitHub Pages)

### 3. Simplify GitHub Actions workflow

Replace the current 6-job workflow with a checks-only workflow. Vercel handles build + deploy separately.

New `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run format:check
      - run: pnpm run typecheck
      - run: pnpm run test
```

Changes:

- Remove `setup`, `lint`, `format`, `typecheck`, `test`, `build`, `deploy` jobs → single `check` job
- Remove `pages: write` and `id-token: write` permissions (no longer deploying from CI)
- Remove `actions/upload-pages-artifact`, `actions/upload-artifact`, `actions/deploy-pages`
- Remove `actions/cache` (pnpm/action-setup@v4 handles caching via setup-node)
- Rename `main.yml` → `ci.yml` (optional, cleaner name since it's no longer doing deploys)

### 4. Decide on Lighthouse

Currently Lighthouse runs in the `build` job after `pnpm run build`. Options:

- **Option A: Drop it from CI.** Vercel has built-in Web Vitals monitoring in the dashboard (Analytics → Web Vitals). This replaces synthetic Lighthouse with real-user metrics.
- **Option B: Keep it in CI.** Add `pnpm run build` and `pnpm run lighthouse` to the `check` job. This keeps the synthetic check but adds ~30s to CI.
- **Option C: Run Lighthouse against Vercel preview URLs.** Use a separate workflow triggered by Vercel's deployment webhook. Most accurate but more complex.

Recommendation: **Option A** for simplicity. Enable Vercel Analytics (free tier includes Web Vitals) and remove `.lighthouserc.json`.

### 5. Clean up

- Delete `public/CNAME`
- Delete `.lighthouserc.json` (if going with Option A)
- Remove `@lhci/cli` from devDependencies and `lighthouse` script from `package.json` (if going with Option A)
- Disable GitHub Pages in repo settings (Settings → Pages → Source: None)
- Update `README.md` deploy section to reference Vercel
- Update `CONTRIBUTING.md` CI section

### 6. Verify

- [ ] Production deploy at `tinney.dev` works
- [ ] SSL certificate is active
- [ ] PR preview deploys appear as GitHub PR comments with preview URLs
- [ ] CI workflow runs checks on PRs
- [ ] Vercel redeploys on push to `main`

## Rollback plan

If something goes wrong with the migration:

1. Re-point DNS back to GitHub Pages
2. Restore `public/CNAME`
3. Restore the original `.github/workflows/main.yml`
4. Push to `main` to trigger a GitHub Pages deploy
