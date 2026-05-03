import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://sebastijan-bogdan.com",
  adapter: vercel(),
  integrations: [sitemap()],
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: "sebastijan-bogdan.com" },
      { hostname: "www.sebastijan-bogdan.com" },
      { hostname: "**.vercel.app" },
      { hostname: "localhost" },
      { hostname: "127.0.0.1" }
    ]
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"]
  }
});
