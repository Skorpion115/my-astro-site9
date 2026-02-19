document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".account-nav");
  const links = document.querySelectorAll(".account-nav a");

  if (!toggle || !nav) return;

  // Menü öffnen / schließen
  toggle.addEventListener("click", function (e) {
    e.stopPropagation(); // verhindert sofortiges Schließen
    nav.classList.toggle("active");
  });

  // 🔹 Schließen beim Klick auf Link
  links.forEach(link => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });

  // 🔹 Schließen beim Klick außerhalb
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  // 🔹 ESC Taste schließt Menü
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      nav.classList.remove("active");
    }
  });

});