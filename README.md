# OutbreakDayZ

The website for **OutbreakDayZ**, a US-based DayZ community server. Grim, fast, fully static.

## Stack

- **[Astro 5](https://astro.build)** — static output, view transitions, image pipeline
- **Tailwind CSS** — utility classes layered over CSS custom properties
- **MDX** — content collections for rules, events, news
- **Sharp + Satori** — build-time PNG generation (favicon, OG images, grain texture)
- **TypeScript strict**

## Dev

```bash
npm install
npm run dev          # local dev server at http://localhost:4321
npm run build        # generate OG images + build static site to dist/
npm run preview      # preview the production build
npm run check        # astro type check
```

Node 20 LTS recommended (see `.nvmrc`).

## Project layout

```
public/
  fonts/             self-hosted woff2 (Big Shoulders Stencil + Inter, latin subset)
  legacy/            scraped legacy assets (kept until cutover, then removable)
  og/                generated OG images (1200x630) — built by scripts/og.mjs
  grain.png          generated film-grain texture
  favicon.svg        SVG favicon
  llms.txt           index for LLM crawlers
scripts/
  og.mjs             OG image generator (satori + sharp)
  grain.mjs          grain.png generator
  icons.mjs          favicon PNG generator
  fonts/             TTF fonts used by satori at build time only
src/
  components/        Astro components (Hero, Nav, ServerCard, etc.)
  content/           content collections (servers, rules, mods, events, news, staff)
  content.config.ts  collection schemas (zod)
  layouts/
    Base.astro       site shell (head, fonts, OG, JSON-LD, grain, vignette)
    Article.astro    /news article wrapper
  pages/             route files (.astro)
  styles/global.css  tokens, base, animations
```

## Content collections

| Collection | Loader              | Edit                              |
|-----------|---------------------|-----------------------------------|
| servers   | JSON file           | `src/content/servers/servers.json`|
| rules     | MDX glob            | `src/content/rules/*.mdx`         |
| mods      | JSON file           | `src/content/mods/mods.json`      |
| events    | MDX glob            | `src/content/events/*.mdx`        |
| news      | MDX glob            | `src/content/news/*.mdx`          |
| staff     | JSON file           | `src/content/staff/staff.json`    |

To add a server: edit `servers.json` and rebuild.
To add an event or post: drop a new `.mdx` file in the matching folder. Frontmatter is enforced by `src/content.config.ts`.

## Performance budget

- Lighthouse target: **100 / 100 / 100 / 100** on mobile and desktop.
- Home page transferred (excluding hero/canvas): under 250 KB.
- Zero render-blocking JS. Only `CopyConnect` and `AmbientParticles` hydrate, lazily.
- Self-hosted woff2 fonts, latin subset, two preloaded weights.
- All raster images via `astro:assets` `<Image>` (AVIF + WebP, sized, lazy by default).
- HTML compression on, critical CSS inlined.

## Deploy

Static output in `dist/`. Deploy via Coolify on Hetzner.

```bash
npm run build
# upload dist/ to your static host
```

`build` includes OG image regeneration (`node scripts/og.mjs`).

## Conventions

- **Conventional commits** (`feat:`, `chore:`, `fix:`, `perf:`, `docs:`).
- **Strict TypeScript** — no `any`, no implicit globals.
- **Prettier** with `prettier-plugin-astro`.
- **No emoji** in code or copy unless explicitly requested.

## Not affiliated

OutbreakDayZ is a community project. Not affiliated with Bohemia Interactive.
