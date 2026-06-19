import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://g-digital-web-sage.vercel.app',
  integrations: [tailwind()],
});
