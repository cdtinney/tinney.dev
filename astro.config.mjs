import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://tinney.dev',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
