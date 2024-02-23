import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ubbipo.it',
  i18n: {
    defaultLocale: "it",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()]
});