# Legacy site discovery — BLOCKED

The build sandbox could not reach `https://outbreakdayz.com/`. Both direct
fetches and `web.archive.org` returned `403 host_not_allowed` from the local
proxy.

When the sandbox is unblocked (or this is run from a machine with normal
egress), re-run discovery:

```bash
curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15" \
  https://outbreakdayz.com/ -o /tmp/outbreak-home.html

# Or, if JS-rendered:
npx playwright install chromium
node -e "
import('playwright').then(async ({ chromium }) => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('https://outbreakdayz.com/', { waitUntil: 'networkidle' });
  console.log(await p.content());
  await b.close();
});
"
```

Then extract:
- `<img>`, `<source>`, `og:image`, background URLs, favicons → download to `public/legacy/`
- Headlines, server description, rules, mod list, Discord/connect info → fold into the matching content collection in `src/content/`

Until then, all copy in this repo is placeholder. See `TODO.md` for the punch list.
