// @ts-check
//import { defineConfig, sessionDrivers } from "astro/config";
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.musicstudio-ziebart.de",
  output: "static",
  adapter: netlify(), // hier den Adapter eintragen
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  // session: {
  //   driver: sessionDrivers.redis({
  //     url: process.env.REDIS_URL
  //   }),
  //   cookie: { secure: true },
  //   ttl: 3600
  // }
});
