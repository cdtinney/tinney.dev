import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('/sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`);
};
