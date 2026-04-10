import { getCookie, setCookie } from '../utils/cookies.js';
import defaultTheme from './default.js';
import sharks from './sharks.js';
import canada from './canada.js';
import underwater from './underwater.js';

export const themes = {
  default: defaultTheme,
  sharks,
  canada,
  underwater,
};

const COOKIE_NAME = 'theme';

export function getStoredThemeId() {
  return getCookie(COOKIE_NAME);
}

const initialized = new Set();

export function applyTheme(themeId) {
  const theme = themes[themeId];
  if (!theme) return;

  // Clean up all themes before switching
  for (const t of Object.values(themes)) {
    if (t.cleanup) t.cleanup();
  }

  const root = document.documentElement;
  root.dataset.theme = themeId;

  // Initialize theme's client-side logic on first activation
  if (theme.init && !initialized.has(themeId)) {
    initialized.add(themeId);
    theme.init();
  }

  // Apply CSS custom properties
  for (const [property, value] of Object.entries(theme.colors)) {
    root.style.setProperty(property, value);
  }

  setCookie(COOKIE_NAME, themeId);
}
