import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://useyourdamnhands.com/sitemap.xml\n`,
  );
};
