import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebastijanbogdan.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en']
  }
});
