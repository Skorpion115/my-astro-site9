// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
      },

output: "static",
adapter: netlify(),

// Project root directory
root: ".",

outDir: "dist", // Ensure this is correctly set

publicDir: "public",
});
