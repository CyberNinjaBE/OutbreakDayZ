# Staff - for the site admin [Decad3nce]

This folder controls the staff list shown on the /community page.

## Which file do I edit?

`staff.json` in this folder. Each staff member is one block wrapped in
curly braces `{ ... }`.

## Fields for each staff member

| Field    | Required | What it does                                          |
|----------|----------|-------------------------------------------------------|
| `id`     | yes      | Unique ID (lowercase).                                |
| `name`   | yes      | Name shown on the site.                               |
| `role`   | yes      | Role (e.g. "Server Admin", "Community Manager").      |
| `avatar` | no       | Path to an avatar image (can be left out).            |
| `bio`    | no       | Short description.                                    |

## Adding or removing a staff member

Copy or delete a `{ ... }` block in `staff.json`. Watch the commas between
blocks - JSON is picky about that.

## Tip

After saving, the website rebuilds automatically. Give it a few minutes.
