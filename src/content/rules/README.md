# Rules - for the site admin [Decad3nce]

This folder controls the server rules shown on the /rules page.

## How it works

Each rule category (General, PVP, Bases, ...) is **one `.mdx` file** in this
folder. The files are numbered (`01-`, `02-`, `03-`) to keep the folder
tidy, but the **actual order** on the site is controlled by the `order`
field inside the file (lower number = higher up).

## Adding a new category

1. Copy an existing `.mdx` file and rename the copy, e.g. `04-events.mdx`.
2. Open the file on GitHub and click the pencil icon to edit.
3. Change the fields at the top (between the two `---` lines):
   - `title`    - title of the category
   - `category` - small label above the title
   - `order`    - sort number (e.g. 40 to appear after "Bases" which is 30)
   - `summary`  - short description shown under the title
4. Change the rules in the `<RuleList items={[ ... ]} />` block. Each rule
   is one sentence in quotes, separated by commas. Add a new rule by
   adding a new line. Remove a rule by deleting its line.
5. Click **Commit changes**. The rules go live in a few minutes.

## Removing a category

Delete the `.mdx` file from this folder.
