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
    loc: `${SITE_URL}/checkout/akkordeon-triste/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/catch-the-wind/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/city-of-neworleans/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/des-interesse/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/e-hering/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/flint-hill-special/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/h-schisch/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/hammond-flip/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/in-the-still-of-the-night/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/kurse/musikbibliothek/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/kleiner-schelm/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/like-ice-in-the-sunshine/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/lullaby-in-blue/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-lion-sleeps-tonight/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/silence-is-golden/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/yesterday/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/take-good-care-of-my-baby/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ten-words/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/black-mountain-rag/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/cripple-creek/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/Checkout/dear-old-dixie/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/intermezzo/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/dvorak-largo-from-the-new-world/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/tchaikovsky-piano-concerto-no-1-in-b-flat-minor/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/beethoven-fur-elise/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/nancy-rowland/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/chopin-nocturne-op-9-no-2/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/imagine/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/mad-world/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-long-and-winding-road/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/hey-jude/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/let-it-be/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/circle-of-life/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/can-you-feel-the-love-tonight/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ballade-pour-adeline/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/forrest-gump/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/memory/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/once-upon-a-time-in-the-west/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/my-heart-will-go-on/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/over-the-rainbow/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/summertime/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/rose-room/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/if-i-never-sing-another-song/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/smile/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/what-a-wonderful-world/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/bossa-dorado/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/train-45/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/notentraining/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/beethoven-moonlight-sonata/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/arabesque-nr-1/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/a-horse-with-no-name/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/vincent/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-a-team/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/behind-blue-eyes/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/classical-gas/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ferry-across-the-mersey/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/more-than-words/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/father-and-son/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/mrs-robinson/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/hotel-california/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/love-will-keep-us-alive/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/flor-de-luna/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/europa/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/stairway-to-heaven/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/all-along-the-watchtower/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/sleepwalk/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-wind-cries-mary/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/in-the-year-2525/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/now-and-forever/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ueber-den-wolken/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/where-do-you-go-to-my-lovely/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/sixteen-tons/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/maybe/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ruby/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/gentle-on-my-mind/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-night-they-drove-old-dixie-down/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/no-no-never/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/mr-bojangles/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/i-take-a-lot-of-pride/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/a-whiter-shade-of-pale/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/heart-of-gold/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/old-man/`,
    changefreq: "weekly",
    lastmod: today,
  },
   {
    loc: `${SITE_URL}/checkout/harvest-moon/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/hey-there-delilah/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/here-comes-the-sun/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-sound-of-silence/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/the-boxer/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/shame/`,
    changefreq: "weekly",
    lastmod: today,
  },
   {
    loc: `${SITE_URL}/checkout/aint-no-sunshine/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/i-love-you/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/while-my-guitar-gently-weeps/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/ill-be-back/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/if-i-fell/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/in-my-life/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/i-follow-rivers/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/do-you-want-to-know-a-secret/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/all-you-need-is-love/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/come-together/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/with-a-little-help-from-my-friends/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/get-back/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/reflections-of-my-life/`,
    changefreq: "weekly",
    lastmod: today,
  },
  {
    loc: `${SITE_URL}/checkout/going-up-the-country/`,
    changefreq: "weekly",
    lastmod: today,
  },
];
