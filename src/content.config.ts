import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const servers = defineCollection({
  loader: file('src/content/servers/servers.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    map: z.string(),
    ip: z.string(),
    port: z.number(),
    slots: z.number(),
    mods: z.array(z.string()).default([]),
    battlemetricsId: z.string().optional(),
    status: z.enum(['online', 'maintenance', 'offline']).default('online'),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const rules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/rules' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number().default(100),
    summary: z.string().optional(),
  }),
});

const mods = defineCollection({
  loader: file('src/content/mods/mods.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    workshopId: z.string(),
    required: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    hero: z.string().optional(),
    author: z.string().optional(),
  }),
});

const staff = defineCollection({
  loader: file('src/content/staff/staff.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const collections = { servers, rules, mods, events, news, staff };
