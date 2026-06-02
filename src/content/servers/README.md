# Servers — voor de beheerder [Decadence]

Dit bestand documenteert hoe je de **servers-lijst** op de website beheert.

## Welk bestand bewerk je?

`servers.json` in deze map. Elke server is één blok tussen accolades `{ ... }`.

## Velden per server

| Veld              | Verplicht | Uitleg                                                              |
|-------------------|-----------|---------------------------------------------------------------------|
| `id`              | ja        | Unieke ID (kleine letters, koppeltekens). Verandert niet vaak.      |
| `name`            | ja        | Naam zoals getoond op de site.                                      |
| `map`             | ja        | Naam van de map (bv. "Chernarus", "Livonia", "Namalsk").            |
| `ip`              | ja        | Server IP of domein.                                                |
| `port`            | ja        | Poort (getal, geen aanhalingstekens).                               |
| `slots`           | ja        | Aantal player slots.                                                |
| `mods`            | ja        | Array met namen van mods.                                           |
| `battlemetricsId` | nee       | BattleMetrics ID; zet `"TBD"` zolang onbekend.                      |
| `status`          | ja        | Eén van: `"online"`, `"maintenance"`, `"offline"`.                  |
| `description`     | nee       | Korte beschrijving die op de serverkaart staat.                     |
| `tags`            | nee       | Array van korte labels (bv. `["PVE", "Co-op"]`).                    |

## Een server toevoegen

Kopieer een bestaand blok in `servers.json`, plak het eronder (vergeet de
komma `,` tussen de blokken niet), en pas de waardes aan.

## Een server verwijderen

Verwijder het volledige blok `{ ... }` inclusief de komma erna (of ervoor als
het de laatste in de lijst is).
