export type { Theme } from './types';
import { getCookie, setCookie } from '../utils/cookies';
import type { Theme } from './types';
import defaultTheme from './default';
import sharks from './sharks';
import canada from './canada';
import underwater from './underwater';

export const themes: Record<string, Theme> = {
  default: defaultTheme,
  sharks,
  canada,
  underwater,
};

const COOKIE_NAME = 'theme';

export function getStoredThemeId(): string | null {
  return getCookie(COOKIE_NAME);
}

const initialized = new Set<string>();

// Computed once — the union of all CSS property keys across all themes
const allCssPropertyKeys = new Set(Object.values(themes).flatMap((t) => Object.keys(t.colors)));

export function applyTheme(themeId: string): void {
  const theme = themes[themeId];
  if (!theme) return;

  for (const t of Object.values(themes)) {
    if (t.cleanup) t.cleanup();
  }

  const root = document.documentElement;
  root.dataset.theme = themeId;

  if (theme.init && !initialized.has(themeId)) {
    initialized.add(themeId);
    theme.init();
  }

  // Prevents optional properties (e.g. --btn-primary-bg) from persisting across theme switches
  for (const property of allCssPropertyKeys) {
    root.style.removeProperty(property);
  }

  for (const [property, value] of Object.entries(theme.colors)) {
    root.style.setProperty(property, value);
  }

  setCookie(COOKIE_NAME, themeId);
}
