# OutbreakDayZ

De website voor **OutbreakDayZ**, een US-based DayZ community server. Grim, fast, fully static.

---

## Voor de beheerder — [Decadence]

Beheerder **Decadence** kan alle pagina-inhoud van deze website zelf aanpassen
door rechtstreeks de bestanden in deze GitHub-repository te bewerken. Zodra een
wijziging gepusht is naar de `main` branch wordt de site automatisch opnieuw
gebouwd en gedeployed.

### Welke pagina hoort bij welk bestand?

| Pagina op de site            | Bewerk dit bestand                                  |
|------------------------------|-----------------------------------------------------|
| Homepagina (`/`)             | `src/pages/index.astro`                             |
| Servers (`/servers`)         | `src/content/servers/servers.json`                  |
| Hoe te verbinden             | `src/pages/how-to-connect.astro`                    |
| Regels (`/rules`)            | `src/content/rules/*.mdx`                           |
| Mods (`/mods`)               | `src/content/mods/mods.json`                        |
| Kaart (`/map`)               | `src/pages/map.astro` + `src/components/MapView.astro` |
| Events                       | `src/content/events/*.mdx`                          |
| Nieuws / patch notes         | `src/content/news/*.mdx`                            |
| Community / staff            | `src/pages/community.astro` + `src/content/staff/staff.json` |
| Shop / donatie tiers         | `src/pages/shop.astro`                              |
| Footer (navigatie onderaan)  | `src/components/Footer.astro`                       |
| Navigatie bovenaan           | `src/components/Nav.astro`                          |
| 404 pagina                   | `src/pages/404.astro`                               |

### Hoe wijzig ik tekst?

1. Open het bestand uit de tabel hierboven via de GitHub-website.
2. Klik rechtsboven op het potlood-icoon (Edit this file).
3. Pas de tekst aan tussen de aanhalingstekens of in de Markdown.
4. Onderaan op "Commit changes" klikken — een korte beschrijving van wat je
   veranderd hebt is voldoende.
5. Binnen enkele minuten staat de aanpassing live op de website.

### Een nieuwe server / mod / event / nieuwsbericht toevoegen?

- **Server**: voeg een nieuw blok toe in `src/content/servers/servers.json`.
- **Mod**: voeg een nieuw blok toe in `src/content/mods/mods.json`.
- **Event**: kopieer een bestaand `.mdx` bestand in `src/content/events/`,
  hernoem het, en pas de inhoud aan.
- **Nieuwsbericht**: zelfde aanpak in `src/content/news/`.

Het verplichte veldformaat (frontmatter) staat gedocumenteerd in
`src/content.config.ts`.

---

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
