import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'https://merichard123.github.io/',
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  server: {
    port: 3000,
    host: false
  },
  integrations: [react(), vue(), mdx()]
});