import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
  integrations: [tailwind()],
});
