import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://outbreakdayz.com',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
