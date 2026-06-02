# Events — voor de beheerder [Decadence]

Dit bestand documenteert hoe je **events** op de website beheert.

## Hoe werkt het?

Elk event is één `.mdx` bestand in deze map. De bestandsnaam (zonder `.mdx`)
bepaalt de URL: `convoy-run.mdx` → `/events/convoy-run`.

## Een nieuw event toevoegen

1. Kopieer een bestaand `.mdx` bestand, hernoem het naar bv. `mijn-event.mdx`.
2. Open het bestand op GitHub en klik op het potlood om te bewerken.
3. Pas de **frontmatter** (het stukje tussen de twee `---` regels) aan:
   - `title`    — naam van het event
   - `date`     — datum in `YYYY-MM-DD` formaat
   - `location` — locatie (vrij tekstveld)
   - `summary`  — korte beschrijving voor het overzicht
   - `image`    — optioneel pad naar een afbeelding
4. Schrijf de volledige tekst van het event onder de frontmatter, in Markdown.
5. Commit. Binnen enkele minuten staat het event live.

Events met een datum in de toekomst verschijnen in "Upcoming"; events met een
datum in het verleden in "Past".

## Een event verwijderen

Verwijder het `.mdx` bestand uit deze map.
