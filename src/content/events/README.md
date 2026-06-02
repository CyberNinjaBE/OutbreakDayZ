# Events - for the site admin [Decad3nce]

This folder controls the events shown on the website.

## How it works

Each event is **one `.mdx` file** in this folder. The file name (without
`.mdx`) becomes the URL: `convoy-run.mdx` becomes `/events/convoy-run`.

## Adding a new event

1. Copy an existing `.mdx` file in this folder and rename the copy to
   something like `my-event.mdx`. Use lowercase, dashes instead of spaces,
   no special characters.
2. Open the file on GitHub and click the pencil icon to edit.
3. Change the fields at the top (between the two `---` lines):
   - `title`    - name of the event
   - `date`     - date in `YYYY-MM-DD` format
   - `location` - where it happens (free text)
   - `summary`  - short description for the overview page
   - `image`    - optional path to an image
4. Write the full event description below the second `---`, in Markdown.
   (`**bold**`, `- bullet list`, etc.)
5. Click **Commit changes**. The event goes live in a few minutes.

Events with a date in the future show up under "Upcoming".
Events with a date in the past show up under "Past".

## Removing an event

Delete the `.mdx` file from this folder.
