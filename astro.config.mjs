import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeLazyImages } from './src/utils/rehypeLazyImages';

export default defineConfig({
  site: 'https://tinney.dev',
  trailingSlash: 'never',
  integrations: [sitemap()],
  redirects: {
    '/hands': 'http://useyourdamnhands.com/',
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeLazyImages],
  },
});
