/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    SITE_URL: string;
    PUBLIC_SUPABASE_URL: string;
    PUBLIC_SUPABASE_PUBLISHABLE_KEY: string;
    // Weitere Umgebungsvariablen hier hinzufügen
  }
  
  interface ImportMeta {
    env: ImportMetaEnv;
  }
