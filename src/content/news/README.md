# News — for the site admin [Decadence]

This folder controls the news posts and patch notes shown on the website.

## How it works

Each post is **one `.mdx` file** in this folder. The file name (without
`.mdx`) becomes the URL: `server-wipe-may.mdx` becomes `/news/server-wipe-may`.

## Adding a new post

1. Copy an existing `.mdx` file in this folder and rename the copy to
   something like `my-post.mdx`. Use lowercase, dashes instead of spaces,
   no special characters.
2. Open the file on GitHub and click the pencil icon to edit.
3. Change the fields at the top (between the two `---` lines):
   - `title`   — title of the post
   - `date`    — publication date in `YYYY-MM-DD` format
   - `excerpt` — short text shown on the /news overview page
   - `author`  — author name
   - `hero`    — optional path to an image shown at the top
4. Write the full post below the second `---`, in Markdown.
   (`## Heading`, `**bold**`, `- bullet list`, `[link text](url)`, etc.)
5. Click **Commit changes**. The post goes live in a few minutes.

Posts are sorted automatically: newest at the top.

## Removing a post

Delete the `.mdx` file from this folder.
