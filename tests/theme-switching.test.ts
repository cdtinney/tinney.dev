import { describe, it, expect, beforeEach } from 'vitest';
import { applyTheme, themes } from '../src/themes/index';

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

  it('applies theme: sets data-theme, CSS properties, and cookie', () => {
    applyTheme('sharks');
    const root = document.documentElement;

    expect(root.dataset.theme).toBe('sharks');
    expect(root.style.getPropertyValue('--color-bg')).toBe(themes.sharks.colors['--color-bg']);
    expect(document.cookie).toContain('theme=sharks');
  });

  it.each([
    {
      label: 'to default',
      from: 'sharks',
      to: 'default',
      property: '--btn-primary-bg',
      expected: '',
    },
    {
      label: 'between non-default themes',
      from: 'sharks',
      to: 'canada',
      property: '--header-border',
      expected: themes.canada.colors['--header-border']!,
    },
  ])('clears stale CSS variables when switching $label', ({ from, to, property, expected }) => {
    applyTheme(from);
    applyTheme(to);
    expect(document.documentElement.style.getPropertyValue(property)).toBe(expected);
  });
});
