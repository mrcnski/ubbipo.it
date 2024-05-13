import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ubbipo.it',
  // Using view transitions enables prefetching for all links on the page.
  // prefetch: true,
  i18n: {
    defaultLocale: "it",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()]
});
