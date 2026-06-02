# Servers — for the site admin [Decadence]

This folder controls the list of servers shown on the website.

## Which file do I edit?

`servers.json` in this folder. Each server is one block wrapped in
curly braces `{ ... }`.

## Fields for each server

| Field             | Required | What it does                                                       |
|-------------------|----------|--------------------------------------------------------------------|
| `id`              | yes      | Unique ID (lowercase, dashes). Don't change this after creation.   |
| `name`            | yes      | Name shown on the server card.                                     |
| `map`             | yes      | Map name (e.g. "Chernarus", "Livonia", "Namalsk").                 |
| `ip`              | yes      | Server IP address or domain.                                       |
| `port`            | yes      | Port number (just a number, no quotes).                            |
| `slots`           | yes      | Number of player slots.                                            |
| `mods`            | yes      | List of mod names, in quotes, separated by commas.                 |
| `battlemetricsId` | no       | BattleMetrics ID. Use `"TBD"` if you don't have it yet.            |
| `status`          | yes      | One of: `"online"`, `"maintenance"`, `"offline"`.                  |
| `description`     | no       | Short description shown on the server card.                        |
| `tags`            | no       | List of short labels (e.g. `["PVE", "Co-op"]`).                    |

## Adding a server

Copy an existing block in `servers.json`, paste it below, and change the
values. Don't forget the comma `,` between blocks.

## Removing a server

Delete the whole `{ ... }` block. Also remove the comma after it (or before,
if it was the last one in the list).

## Tip

After saving, the website rebuilds automatically. Give it a few minutes.
If something goes wrong (the site doesn't update), check that you didn't
accidentally delete a comma or a curly brace. JSON is picky about that.
