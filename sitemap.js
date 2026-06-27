import { create } from "xmlbuilder2";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import { pages } from "./pages.js"; // deine statischen Seiten
import { videos } from "./videos.js"; // deine Video-Metadaten

const SITE_URL = "https://www.musicstudio-ziebart.de";

// 📄 Deine statischen Seiten definieren gilt hier für Markdown Seiten
const today = new Date().toISOString().split("T")[0];

// Markdown Blogposts sammeln
const postFiles = glob.sync("./src/pages/posts/*.md");
const posts = postFiles.map((file) => {
  const slug = path.basename(file, ".md");
  return `/posts/${slug}/`;
});

// URLs kombinieren: posts als Objekte einfügen
const urls = [
  ...pages,
  ...posts.map((post) => ({
    loc: `${SITE_URL}${post}`,
    changefreq: "weekly",
    lastmod: today,
  })),
];

// Videos zu URLs zuordnen (z. B. "/gitarre-videoanleitung/" oder "/keyboard-videoanleitung/")
const videosByUrl = {};
videos.forEach((video) => {
  function normalizePath(url) {
    return url.replace(SITE_URL, "").replace(/\/$/, "") + "/";
  }
  const urlPath = normalizePath(video.loc);
  if (!videosByUrl[urlPath]) videosByUrl[urlPath] = [];
  videosByUrl[urlPath].push(video);
});

// Sitemap-Dokument aufbauen
const doc = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  "xmlns:video": "http://www.google.com/schemas/sitemap-video/1.1",
});

// Hilfsfunktion für die Datumsausgabe
function formatDate(date) {
  return new Date(date).toISOString();
}

// Hilfsfunktion für das Entfernen des Site-URLs von einem Pfad
function toUrlPath(loc) {
  return loc.replace(SITE_URL, "");
}

// URLs durchgehen und in XML umwandeln
urls.forEach((entry) => {
  const urlEle = doc.ele("url");

  // Wenn 'entry' ein einfacher String (z. B. von posts) ist
  const loc = typeof entry === "string" ? `${SITE_URL}${entry}` : entry.loc;
  const changefreq = entry.changefreq || "weekly";
  const lastmod = entry.lastmod || today;

  urlEle.ele("loc").txt(loc);
  urlEle.ele("changefreq").txt(changefreq);
  urlEle.ele("lastmod").txt(lastmod);

  // 🔥 PRIORITY automatisch setzen
  let priority = "0.5"; // Standard

  const lowerLoc = loc.toLowerCase();

  if (loc === `${SITE_URL}/`) {
    priority = "1.0"; // Startseite
  } else if (lowerLoc.includes("kunden-login")) {
    priority = "1.0";
  } else if (lowerLoc.includes("shop")) {
    priority = "1.0";
  } else if (lowerLoc.includes("unterricht")) {
    priority = "0.9";
  } else if (lowerLoc.includes("videoanleitung")) {
    priority = "0.8";
  } else if (lowerLoc.includes("/posts/")) {
    priority = "0.7";
  } else if (
    lowerLoc.includes("nuernberg") ||
    lowerLoc.includes("n%c3%bcrnberg")
  ) {
    priority = "0.9";
  }

  urlEle.ele("priority").txt(priority);

  // URL-Pfad extrahieren
  const urlPath = entry.loc ? toUrlPath(entry.loc) : toUrlPath(entry);

  // Videos für diese URL hinzufügen
  const relatedVideos = videosByUrl[urlPath] || [];
  relatedVideos.forEach((video) => {
    const videoEle = urlEle.ele("video:video");
    videoEle.ele("video:thumbnail_loc").txt(video.thumbnail_loc);
    videoEle.ele("video:title").txt(video.title);
    videoEle.ele("video:description").txt(video.description);
    videoEle.ele("video:player_loc").txt(video.content_loc);
    videoEle
      .ele("video:publication_date")
      .txt(formatDate(video.publication_date));
    if (video.duration) {
      videoEle.ele("video:duration").txt(video.duration.toString());
    }
  });
});

// XML schreiben
const xml = doc.end({ prettyPrint: true });
fs.writeFileSync("./dist/sitemap.xml", xml, "utf8");

console.log("✅ Sitemap erfolgreich erstellt: dist/sitemap.xml");
