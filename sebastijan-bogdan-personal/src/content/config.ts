import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    ownership: z.enum(['individual', 'lead', 'collaboration']),
    timeline: z.string(),
    stack: z.array(z.string()),
    scope: z.array(z.string()),
    impact: z.array(z.string()),
    constraints: z.array(z.string()).optional(),
    featured: z.boolean().optional()
  })
});

export const collections = { blog, projects };
