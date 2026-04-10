/**
 * Get a cookie value by name.
 * @param {string} name
 * @returns {string | null}
 */
export function getCookie(name) {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

/**
 * Set a cookie with a given name, value, and max-age.
 * @param {string} name
 * @param {string} value
 * @param {number} [maxAge=31536000] - Max age in seconds (default: 1 year)
 */
export function setCookie(name, value, maxAge = 31_536_000) {
  try {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
  } catch {
    // cookie unavailable
  }
}
