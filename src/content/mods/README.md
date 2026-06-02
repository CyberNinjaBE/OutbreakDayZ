# Mods - for the site admin [Decad3nce]

This folder controls the list of mods shown on the website.

## Which file do I edit?

`mods.json` in this folder. Each mod is one block wrapped in
curly braces `{ ... }`.

## Fields for each mod

| Field         | Required | What it does                                                       |
|---------------|----------|--------------------------------------------------------------------|
| `id`          | yes      | Unique ID (lowercase, dashes).                                     |
| `name`        | yes      | Mod name shown on the site.                                        |
| `workshopId`  | yes      | Steam Workshop ID (find it in the URL of the Workshop page).       |
| `required`    | yes      | `true` if required, `false` if optional.                           |
| `description` | no       | Short description.                                                 |

Mods with `"required": true` show up automatically on the /how-to-connect
page as required mods.

## Adding or removing a mod

Copy or delete a `{ ... }` block. Watch the commas between blocks - JSON is
picky about that.

## Tip

After saving, the website rebuilds automatically. Give it a few minutes.
