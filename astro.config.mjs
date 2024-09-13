import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://looper-s.github.io/dijital-destek-web/",
  base: "/dijital-destek-web>",
});
