export interface ThemeColors {
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
  '--header-border'?: string;
  '--card-link-border'?: string;
  '--card-link-padding-top'?: string;
  '--card-link-margin-top'?: string;
  '--banner-border'?: string;
  '--banner-bg'?: string;
  '--banner-radius'?: string;
}

export interface NotFoundPage {
  heading: string;
  message: string;
}

export interface PageContent {
  notFoundPage: NotFoundPage;
}

export interface Theme {
  name: string;
  swatches: [string, string];
  colors: ThemeColors;
  pageContent?: PageContent;
  html?: string;
  baseCss?: string;
  css?: string;
  init?: () => void;
  cleanup?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
