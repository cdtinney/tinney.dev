# Project Guidelines

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm lint` — ESLint check
- `pnpm lint:fix` — ESLint auto-fix
- `pnpm lint:css` — Stylelint check (CSS files only)
- `pnpm lint:css:fix` — Stylelint auto-fix
- `pnpm format` — Prettier format all files
- `pnpm format:check` — Prettier check
- `pnpm typecheck` — TypeScript type check (`astro check`)
- `pnpm test` — Run unit tests (Vitest)
- `pnpm test:e2e` — Run e2e tests (Playwright)

## Workflow

- **Do not push directly to `main`.** All changes must go through a pull request.
- Create a feature branch off `main`, make your changes, and open a PR.
- PRs must use the template in `.github/pull_request_template.md` (Description + Testing sections).
- PRs must pass CI (lint, format, typecheck, test, build) before merging.

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages are validated by commitlint on the `commit-msg` hook.

Format: `type(scope): description`

Common types: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `style`

Examples:

- `feat: add underwater theme`
- `fix: clear stale CSS variables on theme switch`
- `refactor: extract math helpers from animation.ts`
- `docs: update CONTRIBUTING.md`
- `test: add e2e tests for theme switching`

## Architecture

This is an Astro static site with a declarative theme system, hosted on Cloudflare Pages. The primary branch is `main`.

### Microsites

The repo hosts multiple standalone sites, each with its own domain:

- **tinney.dev** — main site (themes, blog, projects)
- **useyourdamnhands.com** — routed to `/hands/`
- **whatarewedoinghere.org** — routed to `/whatarewedoinghere/`

Domain routing is handled by Cloudflare Pages Functions middleware (`functions/_middleware.ts`), which rewrites requests based on the `Host` header.

**Microsite file structure:**

- `src/microsites/<name>/` — layouts, components, data, styles (not routed by Astro)
- `src/pages/<name>/` — page routes, robots.txt, sitemap, 404
- `public/<name>/` — static assets (images, favicon)

**Key conventions:**

- Microsite layouts are standalone HTML documents — they do NOT extend `DefaultLayout` or import `global.css`
- Each microsite has fully independent styling (no shared design tokens or utility classes)
- Static assets use `/&lt;name&gt;/` prefixed paths (e.g. `/hands/images/human-hands.jpg`)
- Each microsite has its own `robots.txt.ts`, `sitemap.xml.ts`, and `404.astro`
- The main site's sitemap excludes microsite paths via the `filter` option in `astro.config.mjs`
- Middleware does NOT run in local dev — access microsites at `localhost:4321/<name>/`

### Theme System

Themes are defined in `src/themes/` as TypeScript files. Each theme exports an object satisfying the `Theme` interface (`src/themes/types.ts`). The layout renders theme HTML, CSS, and base CSS at build time. Theme switching happens client-side by setting `data-theme` on `<html>` and swapping CSS custom properties.

**Theme file structure** — properties must appear in this order:

1. `name` — display name
2. `swatches` — two primary colors for the dropdown
3. `colors` — CSS custom property overrides
4. `pageContent` — page-level content (e.g. `notFoundPage`)
5. `html` — easter egg DOM elements
6. `baseCss` — structural CSS for hidden elements
7. `css` — scoped theme CSS using `THEME_SELECTOR`
8. Internal state (e.g. `_goalPopup`)
9. `cleanup()` — teardown on theme switch
10. `init()` — client-side logic on first activation

**Theme file conventions:**

- Define `THEME_ID`, `THEME_SELECTOR`, `IMAGE_PATH`, and `PALETTE` as module-level constants
- `THEME_ID` is a string literal (e.g. `'sharks'`)
- `THEME_SELECTOR` is derived: `` `[data-theme="${THEME_ID}"]` ``
- `IMAGE_PATH` points to `'/images/themes/<name>'`
- `PALETTE` contains all color hex values with semantic names (e.g. `teal`, `orangeLight`, `rinkRed`)
- All configuration objects use descriptive SCREAMING_SNAKE_CASE names with context (e.g. `BOUNCING_PUCK_CONFIG`, `SPAWNED_JELLYFISH_CONFIG`, `FALLING_SNOW_CONFIG`)
- Animation parameters, creature configs, and spawn configs go at module scope, not inside `init()`
- `init()` should be short — wire up event handlers and call utility functions
- Use the `Theme` type with `satisfies Theme` (not `as Theme`)

**CSS in themes:**

- All selectors in `css` must be scoped with `${THEME_SELECTOR}`
- Use `PALETTE` values via template interpolation, not hardcoded hex in CSS strings
- Button, header, card-link, and banner styles use CSS custom properties (set in `colors`), not hardcoded CSS rules
- Only cursor, card animations, easter egg visibility, and truly unique structural CSS belong in the `css` string

### Components

- Components expose `data-*` attributes as stable hooks for theme CSS (e.g. `data-card`, `data-header`, `data-banner`, `data-btn`)
- This avoids Astro's scoped class name hashing
- Scoped `<style>` blocks use CSS variables for all themeable properties

### Utilities (`src/utils/`)

- `animation.ts` — shared animation functions (`createBouncer`, `createGlider`, `createDrifter`, `createGifPopup`, `createFallingItems`, `spawnAnimatedSprite`)
- `cookies.ts` — `getCookie`, `setCookie`
- `math.ts` — math helpers (`randomInRange`, `randomPhase`, etc.)
- `ScoreCounter.ts` — persistent high score tracker
- `formatDate.ts` — date formatting
- `rehypeLazyImages.ts` — rehype plugin for lazy image loading
- `multiTap.ts` — `onMultiTap(element, callback, { taps, window })` for multi-click interactions

### Images

Theme images go in `public/images/themes/<theme-name>/`. Reference them via `IMAGE_PATH` constant in the theme file.

- Use **WebP** for all raster images (except cursor PNGs, which need broad format support). Convert with `cwebp -q 80 input.png -o output.webp`.
- Add `loading="lazy"` to all `<img>` tags in theme `html` — these elements are hidden by default and should not block initial page load.
- Set `width` and `height` attributes that match the image's actual aspect ratio to prevent layout shift.

## Code Style

### Naming

- **Constants**: `SCREAMING_SNAKE_CASE` with enough context to be self-documenting (e.g. `SPAWNED_SHARK_CONFIG` not `SPAWN_SHARK`, `FALLING_SNOW_CONFIG` not `SNOW`)
- **Theme identifiers**: `THEME_ID`, `THEME_SELECTOR`, `IMAGE_PATH`, `PALETTE` — consistent across all themes
- **Config objects**: name them `<THING>_CONFIG` (e.g. `BOUNCING_PUCK_CONFIG`, `MANTA_RAY_CONFIG`)
- **Image arrays**: `<THING>_IMAGES` (e.g. `JELLYFISH_IMAGES`, `SHARK_IMAGES`)
- **Animation variables**: use descriptive names (`posX`, `posY`, `velocityY`, `phase`, `direction`, `baseX`, `baseY`) — never single letters (`x`, `y`, `t`, `w`)
- **Functions**: descriptive verbs (`spawnJellyfish`, `randomInRange`, `randomPhase`)

### TypeScript

- All theme and utility files are TypeScript (`.ts`)
- Theme files use `satisfies Theme` for compile-time validation
- Export interfaces for function option objects
- Use `as const` for literal types (e.g. `dir: 1 as const`)
- Use tuple types for ranges (e.g. `[number, number]`)
- No `any` except in the Theme index signature

### No Magic Numbers

- Extract all hardcoded values into named constants or config objects
- Animation speeds, sizes, opacities, z-indices, durations — all should be named
- Use `randomInRange([min, max])` for randomized values with defined bounds

### CSS

**Design tokens** — defined in `global.css` `:root`. Use tokens instead of hardcoded values:

- **Spacing**: `--space-xs` (0.25rem), `--space-sm` (0.5rem), `--space-md` (1rem), `--space-lg` (2rem), `--space-xl` (4rem)
- **Font sizes**: `--text-xs` (0.7rem), `--text-sm` (0.75rem), `--text-base` (0.85rem), `--text-md` (1rem), `--text-lg` (1.25rem), `--text-xl` (1.5rem)
- **Border radius**: `--radius-sm` (3px), `--radius-md` (4px), `--radius-lg` (6px), `--radius-full` (100px)
- **Transitions**: `--transition-fast` (0.15s), `--transition-normal` (0.3s), `--transition-slow` (0.5s)
- **Shadows**: `--shadow-button`, `--shadow-dropdown`

Stylelint enforces token usage for `border-radius` and `box-shadow` in `.css` files. Hardcoded values will fail CI.

**Utility classes** — defined in `src/styles/utility.css`, available globally. Use these before writing new CSS:

- Layout: `flex-center`, `flex-col`, `flex-row`
- Buttons: `btn-reset`, `btn-accent`, `icon-btn`
- Links: `link-quiet` (no underline, fast color transition)
- Nav: `nav-pill` (bordered pill-shaped link)
- Dropdowns: `dropdown-menu` (hidden by default; consumer toggles display)
- Text: `text-muted`, `text-secondary`

**When writing CSS:**

- Check `utility.css` first — if a class exists, use it instead of writing new CSS
- Use design tokens for all spacing, font sizes, radii, transitions, and shadows
- Themeable properties use CSS custom properties defined in `global.css` `:root`
- Themes override variables in their `colors` object
- Don't use `!important` for color overrides — use CSS variable specificity
- `!important` is acceptable only for `display: block/none` toggling of easter egg elements
- Avoid naming utility classes that could collide with Astro scoped class names (e.g. don't name a utility `btn-primary` if a component already uses that name internally)

## Testing

- Tests live in `src/utils/__tests__/`
- Use Vitest with happy-dom environment
- Test utility functions and classes, not theme CSS

## CI

The CI pipeline runs: `lint` → `lint:css` → `format:check` → `typecheck` → `test` → `build` → `lighthouse` → `deploy`

All checks must pass before merging. Deployment to Cloudflare Pages happens on pushes to `main` via `wrangler pages deploy`.
