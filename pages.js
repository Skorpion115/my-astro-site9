const SITE_URL = "https://www.musicstudio-ziebart.de";
const today = new Date().toISOString().split("T")[0];

export const pages = [
  {
    loc: `${SITE_URL}/`, // oder `${SITE_URL}/` – beides geht
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/instrumentenkauf/`,
    changefreq: "weekly",
    lastmod: today, // ← hier wird's verwendet
  },
  {
    loc: `${SITE_URL}/blog/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/anmeldung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/thankyou/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/recall/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/danke-seite/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/honorar/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/unterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/faq/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/download/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/Datenschutz/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/impressum/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klavierunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klavier-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/keyboardunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/keyboard-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/gitarrenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/gitarre-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-bassunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarrenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/e-gitarre-videoanleitung2/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/banjounterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/banjo-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/akkordeonunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/akkordeon-videoanleitung/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/saxophonunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/querfloetenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/klarinettenunterricht/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/akkordeon-triste-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/catch-the-wind-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/city-of-neworleans-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/des-interesse-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/e-hering-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/flint-hill-special-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/h-schisch-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/hammond-flip-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/in-the-still-of-the-night-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/alle-kurse/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/kleiner-schelm-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/like-ice-in-the-sunshine-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/lullaby-in-blue-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/silence-is-golden-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/take-good-care-of-my-baby-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/ten-words-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/black-mountain-rag-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/cripple-creek-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/dear-old-dixie-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/intermezzo-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/dvorak-klavierkonzert-nr-1-klaviernoten-download/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/tschaikowsky-klavierkonzert-nr-1-klaviernoten-download/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/fuer-elise-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/nancy-rowland-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/nocturne-opus9-no2-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/rose-room-notes-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/smile-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/what-a-wonderful-world-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/bossa-dorado-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/train45-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/notentraining/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/shop/mondschein-sonate-noten/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/a-horse-with-no-name-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/vincent-don-mclean-noten-tabs/`,
    changefreq: "weekly",
    lastmod: today,
  },
];
