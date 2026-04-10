import defaultTheme from './default.js';
import sharks from './sharks.js';
import canada from './canada.js';

export const themes = {
  default: defaultTheme,
  sharks,
  canada,
};

const COOKIE_NAME = 'theme';

export function getStoredThemeId() {
  try {
    const match = document.cookie.match(/(?:^|; )theme=([^;]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
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
  root.setAttribute('data-theme', themeId);

  // Initialize theme's client-side logic on first activation
  if (theme.init && !initialized.has(themeId)) {
    initialized.add(themeId);
    theme.init();
  }

  // Apply CSS custom properties
  for (const [property, value] of Object.entries(theme.colors)) {
    root.style.setProperty(property, value);
  }

  // Persist in cookie (365 days, same-site)
  try {
    document.cookie = `${COOKIE_NAME}=${themeId}; max-age=31536000; path=/; SameSite=Lax`;
  } catch {
    // cookie unavailable
  }
}

export function initTheme() {
  const stored = getStoredThemeId();
  if (stored && themes[stored]) {
    applyTheme(stored);
  }
}
