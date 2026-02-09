// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://www.musicstudio-ziebart.de",

    trailingSlash: "always",

    output: "static",

    devToolbar: {
    enabled: false,
  },
});
