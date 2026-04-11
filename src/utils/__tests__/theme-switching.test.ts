import { describe, it, expect, beforeEach } from 'vitest';
import { applyTheme, themes } from '../../themes/index';

describe('theme switching', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('style');
    delete document.documentElement.dataset.theme;
    document.body.innerHTML = '';
    for (const c of document.cookie.split(';')) {
      const name = c.split('=')[0].trim();
      if (name) document.cookie = `${name}=; max-age=0; path=/`;
    }
  });

  it('sets data-theme attribute on the root element', () => {
    applyTheme('sharks');
    expect(document.documentElement.dataset.theme).toBe('sharks');
  });

  it('applies CSS custom properties from the theme', () => {
    applyTheme('sharks');
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--color-bg')).toBe(themes.sharks.colors['--color-bg']);
  });

  it('clears previous theme button variables when switching to default', () => {
    applyTheme('sharks');
    const root = document.documentElement;

    // Sharks sets --btn-primary-bg
    expect(root.style.getPropertyValue('--btn-primary-bg')).toBe(
      themes.sharks.colors['--btn-primary-bg']!,
    );

    // Switch to default, which does not define --btn-primary-bg
    applyTheme('default');

    // The sharks value should be cleared, not persisted
    expect(root.style.getPropertyValue('--btn-primary-bg')).toBe('');
  });

  it('clears previous theme variables when switching between non-default themes', () => {
    applyTheme('sharks');
    const root = document.documentElement;
    const sharksHeaderBorder = themes.sharks.colors['--header-border'];

    expect(root.style.getPropertyValue('--header-border')).toBe(sharksHeaderBorder!);

    applyTheme('canada');
    const canadaHeaderBorder = themes.canada.colors['--header-border'];

    // Should have Canada's value, not Sharks'
    expect(root.style.getPropertyValue('--header-border')).toBe(canadaHeaderBorder!);
  });

  it('persists theme selection in a cookie', () => {
    applyTheme('underwater');
    expect(document.cookie).toContain('theme=underwater');
  });
});
