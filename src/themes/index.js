import defaultTheme from './default.js';
import sharks from './sharks.js';
import canada from './canada.js';

export const themes = {
  default: defaultTheme,
  sharks,
  canada,
};

const STORAGE_KEY = 'theme';

export function getStoredThemeId() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function applyTheme(themeId) {
  const theme = themes[themeId];
  if (!theme) return;

  const root = document.documentElement;
  root.setAttribute('data-theme', themeId);
  for (const [property, value] of Object.entries(theme.colors)) {
    root.style.setProperty(property, value);
  }

  try {
    localStorage.setItem(STORAGE_KEY, themeId);
  } catch {
    // localStorage unavailable
  }
}

export function initTheme() {
  const stored = getStoredThemeId();
  if (stored && themes[stored]) {
    applyTheme(stored);
  }
}
