import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "it",
        locales: ["en", "it"],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
