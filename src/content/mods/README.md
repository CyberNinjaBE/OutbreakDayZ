# Mods — voor de beheerder [Decadence]

Dit bestand documenteert hoe je de **mods-lijst** op de website beheert.

## Welk bestand bewerk je?

`mods.json` in deze map. Elke mod is één blok tussen accolades `{ ... }`.

## Velden per mod

| Veld          | Verplicht | Uitleg                                                              |
|---------------|-----------|---------------------------------------------------------------------|
| `id`          | ja        | Unieke ID (kleine letters, koppeltekens).                           |
| `name`        | ja        | Naam zoals getoond op de site.                                      |
| `workshopId`  | ja        | Het Steam Workshop ID (te vinden in de URL van de Workshop-pagina). |
| `required`    | ja        | `true` als verplicht, `false` als optioneel.                        |
| `description` | nee       | Korte beschrijving.                                                 |

Mods met `"required": true` verschijnen automatisch ook op /how-to-connect
als verplichte mod.

## Een mod toevoegen / verwijderen

Kopieer of verwijder een blok `{ ... }`. Let op de komma's tussen de blokken.
