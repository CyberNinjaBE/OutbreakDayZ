/* Generate a tiny tileable grain PNG (~6KB) */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const SIZE = 96;
const data = Buffer.alloc(SIZE * SIZE);
let seed = 1337;
function rand() {
  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;
  return ((seed >>> 0) % 1000) / 1000;
}

for (let i = 0; i < SIZE * SIZE; i++) {
  data[i] = Math.floor(rand() * 255);
}

const out = 'public/grain.png';
await mkdir(dirname(out), { recursive: true });
const buf = await sharp(data, { raw: { width: SIZE, height: SIZE, channels: 1 } })
  .png({ compressionLevel: 9, palette: true, colors: 32 })
  .toBuffer();
await writeFile(out, buf);
console.log(`grain.png ${(buf.length / 1024).toFixed(1)}KB`);
