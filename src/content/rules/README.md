# Regels — voor de beheerder [Decadence]

Dit bestand documenteert hoe je de **server-regels** op de website beheert.

## Hoe werkt het?

Elke regelcategorie (General, PVP, Bases, ...) is één `.mdx` bestand in deze
map. De bestanden zijn genummerd (`01-`, `02-`, `03-`) om de volgorde
overzichtelijk te houden, maar de **echte volgorde** op de site wordt bepaald
door het `order` veld in de frontmatter (lager = hoger in de lijst).

## Een nieuwe categorie toevoegen

1. Kopieer een bestaand `.mdx` bestand, hernoem het bv. `04-events.mdx`.
2. Open het bestand op GitHub en klik op het potlood.
3. Pas aan:
   - `title`    — titel van de categorie
   - `category` — korte label boven de titel
   - `order`    — getal dat de volgorde bepaalt (bv. 40 om na "Bases" te staan)
   - `summary`  — korte beschrijving onder de titel
4. Pas de regels in de `RuleList` aan: één zin per regel, tussen
   aanhalingstekens, gescheiden door komma's.
5. Commit. Binnen enkele minuten staan de regels live.

## Een categorie verwijderen

Verwijder het `.mdx` bestand uit deze map.
