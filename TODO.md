# TODO — copy + asset confirmations

The original site at `https://outbreakdayz.com/` was unreachable from the build
sandbox (the host was not in the network allowlist, returning HTTP 403 with
`x-deny-reason: host_not_allowed`). `web.archive.org` was also blocked.

All page copy, server connect strings, mod IDs, staff names, event details,
and Discord links below are **placeholder values** following the site's
established themes. Replace before launch.

## Critical — replace before going live

- [ ] **Server connect strings** — `src/content/servers/servers.json` currently uses
      `play.outbreakdayz.com` with placeholder ports `2302`, `2402`, `2502`. Confirm
      real IP/domain + port for each live server.
- [ ] **BattleMetrics IDs** — set `battlemetricsId` on each server in
      `src/content/servers/servers.json` (currently `"TBD"`). The `ServerCard`
      hides the BattleMetrics link until the real ID is set.
- [ ] **Server status** — currently hard-coded. If you want live status, wire up
      a build-time fetch (BattleMetrics API or `cftools`) inside `getCollection`.
- [ ] **Discord invite URL** — `src/components/Footer.astro`, `src/pages/community.astro`,
      and `src/pages/index.astro` use `https://discord.gg/` (no slug). Set the real invite.
- [ ] **Mod Workshop IDs** — IDs in `src/content/mods/mods.json` are based on common
      community mods but may not match your actual loadout. Verify each.
- [ ] **Staff names + roles** — `src/content/staff/staff.json` is illustrative.
- [ ] **Donation tiers / Tebex link** — `src/pages/shop.astro` "Choose..." buttons
      currently `href="#"`. Wire to real Tebex package URLs and load Tebex JS
      (with `client:idle`) only on this page.

## Important

- [ ] **Map data** — `src/components/MapView.astro` uses a stylized SVG, not the
      real Chernarus terrain. If you want a real map, drop a desaturated raster
      into `src/assets/` and replace the `<svg>` element.
- [ ] **Hero image / video** — currently the hero uses gradient + scanlines + canvas
      particles only (no raster). To add a hero image, place it in `src/assets/`,
      use Astro's `<Image>` with `loading="eager"` and `fetchpriority="high"`.
- [ ] **Content creators list** — `src/pages/community.astro` has a single TBD entry.
- [ ] **Rule text** — `src/content/rules/*.mdx` are reasonable defaults but should
      be reviewed against your actual server policies.
- [ ] **News + events** — sample posts in `src/content/news/` and
      `src/content/events/`. Replace with real ones (or keep as launch posts).
- [ ] **Favicon** — `public/favicon.svg` is a generic hex/blood mark. Replace with
      a real logo, then re-run `node scripts/icons.mjs` to regenerate the PNGs.

## Nice-to-have

- [ ] **OG image polish** — `scripts/og.mjs` produces decent satori-rendered cards.
      If you want per-event/per-news cards, extend `pages` array.
- [ ] **Real legacy asset migration** — once you can scrape the live site (or the
      sandbox is unblocked), download images to `public/legacy/`, then move
      anything still used into `src/assets/` so it goes through `astro:assets`.
- [ ] **Lighthouse run** — sandbox doesn't have Chrome installed. Run
      `npx @lhci/cli@latest autorun` locally on the deployed site for both
      mobile and desktop and paste the numbers below.

## Lighthouse — TODO when run

```
Performance:    __ / 100  (mobile)   __ / 100  (desktop)
Accessibility:  __ / 100  (mobile)   __ / 100  (desktop)
Best Practices: __ / 100  (mobile)   __ / 100  (desktop)
SEO:            __ / 100  (mobile)   __ / 100  (desktop)
```
