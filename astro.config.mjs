import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  site: "https://www.astroblogship.netlify.app/",
})
