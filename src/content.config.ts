import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    path: z.string(),
    excerpt: z.string().optional(),
    archived: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
