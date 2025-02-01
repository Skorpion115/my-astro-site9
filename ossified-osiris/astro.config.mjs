// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// Beispiel für das Hinzufügen von Content Security Policy (CSP)
const cspPolicy = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'", // Nur falls nötig
      "https://trusted-cdn.com", // Hier kannst du vertrauenswürdige externe Quellen hinzufügen
    ],
    styleSrc: ["'self'", "'unsafe-inline'"], // Falls du inline Styles verwendest
    connectSrc: ["'self'"],
    imgSrc: ["'self'", "data:", "https://trusted-image-cdn.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    childSrc: ["'none'"],
    manifestSrc: ["'self'"],
    upgradeInsecureRequests: [], // Um unsichere Anfragen zu sichern
  },
  // Optional: Wenn du Nonce-Werte verwendest, musst du den Nonce in die CSP einfügen:
  nonce: 'your-dynamic-nonce-value-here', // Dies könnte durch deinen serverseitigen Code dynamisch gesetzt werden
};

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
