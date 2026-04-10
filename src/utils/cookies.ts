export function getCookie(name: string): string | null {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function setCookie(name: string, value: string, maxAge = 31_536_000): void {
  try {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
  } catch {
    // cookie unavailable
  }
}
