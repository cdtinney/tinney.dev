/**
 * Formats a Date as "Month DD, YYYY" (e.g. "April 10, 2026").
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}
