import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bocil.bokepngentot.cv',
  output: 'server',
  adapter: cloudflare(),
});