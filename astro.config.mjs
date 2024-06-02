import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US"
  },
  integrations: [tailwind(), auth(), react()],
  adapter: node({
    mode: "standalone"
  }),
});