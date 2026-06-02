# Nieuws — voor de beheerder [Decadence]

Dit bestand documenteert hoe je **nieuwsberichten** en **patch notes** beheert.

## Hoe werkt het?

Elk bericht is één `.mdx` bestand in deze map. De bestandsnaam (zonder `.mdx`)
bepaalt de URL: `server-wipe-may.mdx` → `/news/server-wipe-may`.

## Een nieuw bericht toevoegen

1. Kopieer een bestaand `.mdx` bestand, hernoem het naar bv. `mijn-bericht.mdx`.
2. Open het bestand op GitHub en klik op het potlood om te bewerken.
3. Pas de **frontmatter** (het stukje tussen de twee `---` regels) aan:
   - `title`   — titel van het bericht
   - `date`    — publicatiedatum in `YYYY-MM-DD` formaat
   - `excerpt` — korte tekst voor het overzicht
   - `author`  — naam van de auteur
   - `hero`    — optioneel pad naar een afbeelding bovenaan
4. Schrijf de inhoud onder de frontmatter, in Markdown.
5. Commit. Binnen enkele minuten staat het bericht live.

De berichten staan automatisch gesorteerd: nieuwste bovenaan.

## Een bericht verwijderen

Verwijder het `.mdx` bestand uit deze map.
