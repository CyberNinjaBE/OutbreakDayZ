import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');

await sharp(svg).resize(32, 32).png().toFile('public/favicon.png');
await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('icons generated');
