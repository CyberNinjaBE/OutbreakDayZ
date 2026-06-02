# OutbreakDayZ

The website for **OutbreakDayZ**, a US-based DayZ community server. Grim, fast, fully static.

---

## For the site admin [Decad3nce]

Hi Decad3nce. This section explains how you can change anything on the site
yourself. You don't need anyone else for content edits.

**You can edit every page of the site directly on GitHub** (or by editing
the files locally in Notepad++ and committing them back). When you save a
change, the site rebuilds and the new version goes live within a few
minutes.

---

## Which page comes from which file?

| Page on the site             | File you edit                                       |
|------------------------------|-----------------------------------------------------|
| Home page (`/`)              | `src/pages/index.astro`                             |
| Servers (`/servers`)         | `src/content/servers/servers.json`                  |
| How to Connect               | `src/pages/how-to-connect.astro`                    |
| Rules (`/rules`)             | `src/content/rules/*.mdx`                           |
| Mods (`/mods`)               | `src/content/mods/mods.json`                        |
| Map (`/map`)                 | `src/pages/map.astro` + `src/components/MapView.astro` |
| Events                       | `src/content/events/*.mdx`                          |
| News / patch notes           | `src/content/news/*.mdx`                            |
| Community / staff            | `src/pages/community.astro` + `src/content/staff/staff.json` |
| Shop / donation tiers        | `src/pages/shop.astro`                              |
| Footer (bottom of every page)| `src/components/Footer.astro`                       |
| Top navigation               | `src/components/Nav.astro`                          |
| 404 page                     | `src/pages/404.astro`                               |

---

## How to change text on GitHub

1. Open the file from the table above on github.com.
2. Click the pencil icon (top right of the file): "Edit this file".
3. Change the text. Only edit what is between quotes or what looks like
   normal words and sentences. Do **not** change anything that looks like
   code (anything inside `{...}`, between `<...>` tags, or starting with
   `import`).
4. Scroll down and click **Commit changes**. A short note about what you
   changed is enough.
5. Wait a few minutes. The site rebuilds and your change goes live.

## How to change text in Notepad++

1. Clone the repository to your computer or download the ZIP from GitHub
   (the green **Code** button on the repo page, then **Download ZIP**).
2. Open the file you want to change in Notepad++.
3. Edit the text. Same rule as above: only touch words, not code.
4. Save the file.
5. Commit and push the change back to GitHub, or upload the changed file
   via the GitHub web interface.

---

## Templates and examples

These are ready-to-paste snippets. Change the values, paste them into the
right file, commit.

### Adding a new server

Paste this block inside `src/content/servers/servers.json` (between the
existing blocks, don't forget the comma):

```json
{
  "id": "namalsk-extreme",
  "name": "OutbreakDayZ | Namalsk | Extreme",
  "map": "Namalsk",
  "ip": "play.outbreakdayz.com",
  "port": 2602,
  "slots": 30,
  "mods": [
    "Community Framework",
    "Namalsk Island",
    "Namalsk Survival"
  ],
  "battlemetricsId": "TBD",
  "status": "online",
  "description": "Even colder. Even meaner.",
  "tags": ["Hardcore", "Cold"]
}
```

Allowed values for `status`: `"online"`, `"maintenance"`, `"offline"`.

### Adding a new mod

Paste this block inside `src/content/mods/mods.json`:

```json
{
  "id": "expansion-vehicles",
  "name": "DayZ-Expansion-Vehicles",
  "workshopId": "2572331007",
  "required": false,
  "description": "Adds extra vehicles. Optional, used on Chernarus only."
}
```

Set `"required": true` if every player must have it, `false` if it's optional.

### Adding a new staff member

Paste this block inside `src/content/staff/staff.json`:

```json
{
  "id": "decad3nce",
  "name": "Decad3nce",
  "role": "Site Admin",
  "bio": "Runs the site. Reach out via Discord."
}
```

### Adding a new event

Create a new file in `src/content/events/`. Name it something like
`summer-raid-week.mdx` (lowercase, dashes instead of spaces). Paste this
inside:

```mdx
---
title: Summer Raid Week
date: 2026-07-15
location: Chernarus, server-wide
summary: One week. Open season on bases. Big rewards.
---

Raid weekend goes for a full seven days. Standard rules apply, but every
successful raid earns a payout in the trader currency. Defenders that hold
their base for the full week earn a bigger one.

**Sign up:** drop a message in `#events` on Discord by July 13.

- Day 1 to 4: standard raid hours.
- Day 5 to 7: raid permitted 24/7.
- Cooldown on repeat raids of the same base: 12 hours.
```

The date decides where the event shows up: future date is "Upcoming", past
date is "Past".

### Adding a new news post

Create a new file in `src/content/news/`. Name it something like
`july-update.mdx`. Paste this inside:

```mdx
---
title: July Update
date: 2026-07-01
excerpt: New traders, new vehicles, new map area opened up.
author: Decad3nce
---

Quick update on what changed this month.

## New traders

Two new traders opened up at Berezino and Svetlojarsk. Both sell vehicles
and base building kits.

## New map area

The forest north of Tisy is now patrolled. Watch your step.

## Patch notes

- Loot tables rebalanced.
- Helicopter spawns increased on weekends.
- Trader prices adjusted across the board.
```

### Adding a new rule

Open the file in `src/content/rules/` that matches the category, for
example `01-general.mdx`. Find the `<RuleList items={[ ... ]} />` block.
Add a new line inside, between two existing rules:

```jsx
<RuleList items={[
  'No racism, sexism, slurs, or hate speech of any kind. Bans are immediate and permanent.',
  'Voice chat must be in English in shared zones.',
  'Your new rule goes here. Keep it one sentence.',
  'No exploiting bugs, glitches, or duplication.',
]} />
```

Each rule must be in single quotes, separated by a comma. Don't remove a
comma by accident. JSON is picky.

### Adding a new menu item to the top navigation

Open `src/components/Nav.astro`. Find the `links` list and add a new line:

```ts
const links = [
  { href: '/', label: 'Home' },
  { href: '/servers', label: 'Servers' },
  { href: '/donate', label: 'Donate' },
];
```

`href` is the URL the link goes to. `label` is the text the visitor sees.

---

## Hosting and DNS

You have three options to get the site online. Pick the one that fits.

### Option 1: Let Thomas host it for you (easiest)

1. Contact Thomas at **thomas@cyberninja.be**. Tell him you want him to host
   `outbreakdayz.com` (or whatever domain you use).
2. He sets up the site on his server and gives you a server address (either
   an IP like `185.x.x.x` or a hostname like `web.cyberninja.be`).
3. Log in to your domain registrar (the company where you bought the
   domain, for example GoDaddy, Namecheap, Cloudflare).
4. Open the DNS settings for your domain. Add these records:

   ```
   Type   Name   Value                      TTL
   A      @      <IP Thomas gave you>       3600
   A      www    <IP Thomas gave you>       3600
   ```

   If Thomas gave you a hostname instead of an IP, use:

   ```
   Type    Name   Value                          TTL
   CNAME   @      <hostname Thomas gave you>     3600
   CNAME   www    <hostname Thomas gave you>     3600
   ```

5. Save. DNS changes can take a few minutes up to a few hours to spread.

After this, every change you commit on GitHub goes live automatically.

### Option 2: Self-host with automatic updates from GitHub (recommended for self-hosting)

This is the way if you have your own webserver and want every GitHub commit
to push to the live site automatically.

1. On your webserver, install Node.js (version 20 or newer).
2. Clone this repository into a folder on the server:

   ```bash
   git clone https://github.com/CyberNinjaBE/outbreakdayz.git
   cd outbreakdayz
   npm install
   npm run build
   ```

3. Configure your webserver (nginx, Apache, Caddy) to serve the
   `dist/` folder.
4. Set up auto-deploy. Either:
   - A GitHub webhook that hits a script on your server which runs
     `git pull && npm install && npm run build`, **or**
   - A cron job that pulls every few minutes:

     ```bash
     */5 * * * * cd /path/to/outbreakdayz && git pull && npm install && npm run build
     ```

5. Point your domain DNS at your webserver:

   ```
   Type   Name   Value                  TTL
   A      @      <your server IP>       3600
   A      www    <your server IP>       3600
   ```

**Important:** do **not** edit files directly on the server. The next
`git pull` will overwrite your changes. Always edit on GitHub or push from
your local copy.

### Option 3: Manual upload (not recommended)

Use this only if you can't do option 1 or 2.

1. Click the green **Code** button on the repo page, then **Download ZIP**.
   Extract it.
2. Open a terminal in the extracted folder and run:

   ```bash
   npm install
   npm run build
   ```

3. The built site is now in the `dist/` folder.
4. Upload everything inside `dist/` to your webserver using FTP or your
   hosting panel.
5. Every time you change something on GitHub, you have to repeat steps 1
   to 4. There's no automation here. This is why option 2 is better.

---

## What you should NOT change

- Anything in `src/components/` (apart from `Nav.astro` and `Footer.astro`).
- Anything in `src/layouts/`.
- The `scripts/` folder, `astro.config.mjs`, `package.json`,
  `package-lock.json`, or `tsconfig.json`.

If a change you need touches one of those, contact Thomas.

---

## Stack (technical notes)

- **[Astro 5](https://astro.build)**: static output, view transitions,
  image pipeline.
- **Tailwind CSS**: utility classes layered over CSS custom properties.
- **MDX**: content collections for rules, events, news.
- **Sharp + Satori**: build-time PNG generation (favicon, OG images,
  grain texture).
- **TypeScript strict**.

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
  og/                generated OG images (1200x630), built by scripts/og.mjs
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

## Conventions

- **Conventional commits** (`feat:`, `chore:`, `fix:`, `perf:`, `docs:`).
- **Strict TypeScript**: no `any`, no implicit globals.
- **Prettier** with `prettier-plugin-astro`.

## Not affiliated

OutbreakDayZ is a community project. Not affiliated with Bohemia Interactive.
