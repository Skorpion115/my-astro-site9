// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
      },

// Project root directory
root: ".",

outDir: "dist", // Ensure this is correctly set

publicDir: "public",
});
