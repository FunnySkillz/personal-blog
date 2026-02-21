import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    ownership: z.enum(["individual", "lead", "collaboration"]),
    timeline: z.string(),
    stack: z.array(z.string()),
    scope: z.array(z.string()),
    impact: z.array(z.string()),
    constraints: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
