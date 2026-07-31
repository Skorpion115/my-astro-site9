import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  
  site: "https://www.musicstudio-ziebart.de",
  output: "static",
  adapter: netlify(), // hier den Adapter eintragen
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
});
