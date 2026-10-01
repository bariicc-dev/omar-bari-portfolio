// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_URL, HAS_DOMAIN } from './src/data/site.ts';

// Windows: run from a path whose case differs from the disk, such as
// "c:\..." (VS Code terminals often use a lower-case drive letter), and the
// build silently drops every page's stylesheet link. Pin the root, and the
// working directory, to the path exactly as it is on disk.
const root = fs.realpathSync.native(fileURLToPath(new URL('.', import.meta.url)));
if (process.cwd() !== root && process.cwd().toLowerCase() === root.toLowerCase()) process.chdir(root);

// While SITE_URL is still the placeholder (see src/data/site.ts),
// the sitemap integration is disabled so no bogus URLs are emitted.
export default defineConfig({
  root,
  site: HAS_DOMAIN ? SITE_URL : undefined,
  integrations: HAS_DOMAIN ? [sitemap()] : [],
  compressHTML: true,
});
