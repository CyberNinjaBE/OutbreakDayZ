/* Generate OG images at build time using satori + sharp */
import satori from 'satori';
import sharp from 'sharp';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const W = 1200;
const H = 630;

const stencil = await readFile('scripts/fonts/big-shoulders-stencil-display.ttf');
const inter = await readFile('scripts/fonts/inter.ttf');

const pages = [
  { slug: 'default', eyebrow: 'A DayZ Community Server', title: 'OutbreakDayZ' },
  { slug: 'servers', eyebrow: '// Live infrastructure', title: 'Servers' },
  { slug: 'how-to-connect', eyebrow: '// Onboarding', title: 'How to Connect' },
  { slug: 'rules', eyebrow: '// Code of conduct', title: 'Server Rules' },
  { slug: 'mods', eyebrow: '// Loadout', title: 'Mods' },
  { slug: 'map', eyebrow: '// Tactical overview', title: 'Operational Map' },
  { slug: 'events', eyebrow: '// Operations log', title: 'Events' },
  { slug: 'community', eyebrow: '// The squad', title: 'Community' },
  { slug: 'shop', eyebrow: '// Funding the lights', title: 'Support the Server' },
  { slug: 'news', eyebrow: '// Communications', title: 'News' },
];

await mkdir('public/og', { recursive: true });

const tree = (page) => ({
  type: 'div',
  props: {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      background: '#070707',
      backgroundImage:
        'radial-gradient(circle at 30% 30%, rgba(178,34,34,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(74,90,58,0.12), transparent 60%)',
      color: '#e8e2d4',
      fontFamily: '"Inter"',
      position: 'relative',
    },
    children: [
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: 16 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  width: 56,
                  height: 56,
                  border: '2px solid #b22222',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#b22222',
                  fontFamily: '"Big Shoulders Stencil Display"',
                  fontSize: 32,
                  fontWeight: 800,
                },
                children: 'O',
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontFamily: '"Big Shoulders Stencil Display"',
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                },
                children: [
                  { type: 'span', props: { children: 'Outbreak' } },
                  {
                    type: 'span',
                    props: { style: { color: '#b22222' }, children: 'DayZ' },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', gap: 16 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  fontFamily: '"Big Shoulders Stencil Display"',
                  color: '#a8521e',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontSize: 22,
                  fontWeight: 700,
                },
                children: page.eyebrow,
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  fontFamily: '"Big Shoulders Stencil Display"',
                  fontSize: 110,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  color: '#e8e2d4',
                },
                children: page.title,
              },
            },
          ],
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: '#9a9388',
            fontFamily: '"Big Shoulders Stencil Display"',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: 18,
          },
          children: [
            { type: 'div', props: { children: 'outbreakdayz.com' } },
            { type: 'div', props: { children: '// Hardcore DayZ Community' } },
          ],
        },
      },
    ],
  },
});

let satoriOk = true;
let fonts;
try {
  fonts = [
    { name: 'Big Shoulders Stencil Display', data: stencil, weight: 800, style: 'normal' },
    { name: 'Inter', data: inter, weight: 400, style: 'normal' },
  ];
  await satori({ type: 'div', props: { children: 'test', style: { color: '#fff' } } }, {
    width: 100,
    height: 100,
    fonts,
  });
} catch (e) {
  satoriOk = false;
  console.warn('[og] satori cannot use woff2 directly — falling back to SVG renderer:', e.message);
}

async function renderPage(page) {
  const out = `public/og/${page.slug}.png`;
  if (satoriOk) {
    try {
      const svg = await satori(tree(page), { width: W, height: H, fonts });
      const png = await sharp(Buffer.from(svg)).png({ quality: 80, compressionLevel: 9 }).toBuffer();
      await writeFile(out, png);
      console.log(`og: ${page.slug}.png ${(png.length / 1024).toFixed(1)}KB (satori)`);
      return;
    } catch (e) {
      console.warn(`[og] satori failed for ${page.slug}:`, e.message);
    }
  }

  // Fallback: pure SVG fed to sharp
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <defs>
      <radialGradient id="g1" cx="30%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#b22222" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#b22222" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g2" cx="80%" cy="80%" r="60%">
        <stop offset="0%" stop-color="#4a5a3a" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#4a5a3a" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#070707"/>
    <rect width="100%" height="100%" fill="url(#g1)"/>
    <rect width="100%" height="100%" fill="url(#g2)"/>
    <g transform="translate(72,80)" font-family="Impact, Arial Black, sans-serif">
      <rect x="0" y="0" width="56" height="56" fill="none" stroke="#b22222" stroke-width="2"/>
      <text x="28" y="40" text-anchor="middle" font-size="32" font-weight="900" fill="#b22222">O</text>
      <text x="76" y="38" font-size="28" font-weight="900" fill="#e8e2d4" letter-spacing="2">OUTBREAK<tspan fill="#b22222">DAYZ</tspan></text>
    </g>
    <g transform="translate(72,360)" font-family="Impact, Arial Black, sans-serif">
      <text x="0" y="0" font-size="22" font-weight="700" fill="#a8521e" letter-spacing="4">${escapeXml(page.eyebrow.toUpperCase())}</text>
      <text x="0" y="120" font-size="110" font-weight="900" fill="#e8e2d4" letter-spacing="3">${escapeXml(page.title.toUpperCase())}</text>
    </g>
    <g transform="translate(72,560)" font-family="Impact, Arial Black, sans-serif" font-size="18" letter-spacing="3" fill="#9a9388">
      <text x="0" y="0">OUTBREAKDAYZ.COM</text>
      <text x="${W - 144}" y="0" text-anchor="end">// HARDCORE DAYZ COMMUNITY</text>
    </g>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(out, png);
  console.log(`og: ${page.slug}.png ${(png.length / 1024).toFixed(1)}KB (svg fallback)`);
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

for (const p of pages) {
  await renderPage(p);
}
console.log('og: done');
