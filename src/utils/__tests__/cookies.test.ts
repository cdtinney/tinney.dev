import { describe, it, expect, beforeEach } from 'vitest';
import { getCookie, setCookie } from '../cookies';

describe('cookies', () => {
  beforeEach(() => {
    for (const c of document.cookie.split(';')) {
      const name = c.split('=')[0].trim();
      if (name) document.cookie = `${name}=; max-age=0; path=/`;
    }
  });

  describe('setCookie', () => {
    it('sets a cookie', () => {
      setCookie('test', 'value');
      expect(document.cookie).toContain('test=value');
    });
  });

  describe('getCookie', () => {
    it('returns null when cookie does not exist', () => {
      expect(getCookie('nonexistent')).toBeNull();
    });

    it('reads a cookie that was set', () => {
      setCookie('theme', 'sharks');
      expect(getCookie('theme')).toBe('sharks');
    });

    it('reads the correct cookie among multiple', () => {
      setCookie('a', '1');
      setCookie('b', '2');
      setCookie('c', '3');
      expect(getCookie('b')).toBe('2');
    });
  });
});
