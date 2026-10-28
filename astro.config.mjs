// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrescalle9.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
