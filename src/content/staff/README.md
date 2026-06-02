# Staff — voor de beheerder [Decadence]

Dit bestand documenteert hoe je de **staff-lijst** op de community-pagina beheert.

## Welk bestand bewerk je?

`staff.json` in deze map. Elk staff-lid is één blok tussen accolades `{ ... }`.

## Velden per staff-lid

| Veld     | Verplicht | Uitleg                                                |
|----------|-----------|-------------------------------------------------------|
| `id`     | ja        | Unieke ID (kleine letters).                           |
| `name`   | ja        | Naam zoals getoond op de site.                        |
| `role`   | ja        | Functie (bv. "Server Admin", "Community Manager").    |
| `avatar` | nee       | Pad naar avatar-afbeelding (mag weggelaten worden).   |
| `bio`    | nee       | Korte beschrijving.                                   |

## Een staff-lid toevoegen / verwijderen

Kopieer of verwijder een blok `{ ... }` in `staff.json`. Let op de komma's
tussen de blokken.
