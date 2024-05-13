import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",

  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
  integrations: [tailwind(), auth()],
  adapter: node({
    mode: "standalone",
  }),
});
