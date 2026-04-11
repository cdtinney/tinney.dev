/**
 * CSS custom properties that every theme must define.
 * Required properties set the core palette; optional properties
 * override component-specific tokens (buttons, headers, banners, etc.).
 */
export interface ThemeColors {
  // Core palette
  '--color-text': string;
  '--color-text-secondary': string;
  '--color-text-muted': string;
  '--color-text-muted-hover': string;
  '--color-bg': string;
  '--color-bg-surface': string;
  '--color-primary': string;
  '--color-primary-hover': string;
  '--color-secondary': string;
  '--color-secondary-hover': string;
  '--color-secondary-border': string;
  '--color-accent': string;
  '--color-border': string;
  '--color-code-bg': string;
  '--color-code-text': string;
  '--shadow-button': string;

  // Button overrides (defaults defined in global.css)
  '--btn-border-width'?: string;
  '--btn-primary-bg'?: string;
  '--btn-primary-text'?: string;
  '--btn-primary-border'?: string;
  '--btn-primary-bg-hover'?: string;
  '--btn-primary-text-hover'?: string;
  '--btn-primary-border-hover'?: string;
  '--btn-secondary-bg'?: string;
  '--btn-secondary-text'?: string;
  '--btn-secondary-border'?: string;
  '--btn-secondary-bg-hover'?: string;
  '--btn-secondary-text-hover'?: string;
  '--btn-secondary-border-hover'?: string;

  // Component overrides
  '--header-border'?: string;
  '--card-link-border'?: string;
  '--card-link-padding-top'?: string;
  '--banner-border'?: string;
  '--banner-bg'?: string;
  '--banner-radius'?: string;
}

/** Content displayed on the 404 page for a given theme. */
export interface NotFoundPageContent {
  heading: string;
  message: string;
}

/** Page-level content that themes can customize. */
export interface ThemePageContent {
  notFoundPage: NotFoundPageContent;
}

/**
 * A complete theme definition. Themes export an object satisfying this
 * interface and register it in src/themes/index.ts.
 *
 * Properties should appear in this order:
 * name → swatches → colors → pageContent → html → baseCss → css → state → cleanup → init
 */
export interface Theme {
  /** Display name shown in the theme dropdown. */
  name: string;

  /** Two primary colors [primary, secondary] shown as swatches in the dropdown. */
  swatches: [string, string];

  /** CSS custom property values applied to :root when this theme is active. */
  colors: ThemeColors;

  /** Optional page-level content (e.g. custom 404 messages). */
  pageContent?: ThemePageContent;

  /** Easter egg HTML elements rendered at build time (hidden by default). */
  html?: string;

  /** Structural CSS for hidden elements (global, not scoped by data-theme). */
  baseCss?: string;

  /** Theme-specific CSS scoped by [data-theme="id"], rendered at build time. */
  css?: string;

  /** Called once on first theme activation. Sets up animations, event handlers, etc. */
  init?: () => void;

  /** Called on every theme switch before the new theme activates. Cleans up timers, popups, etc. */
  cleanup?: () => void;

  /** Themes may store arbitrary internal state (e.g. _goalPopup, _wavePopup). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
