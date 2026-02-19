const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".account-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Body Scroll sperren, wenn Menü offen
  if(nav.classList.contains("active")){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Optional: Menü schließen, wenn irgendwo draußen geklickt wird
document.addEventListener("click", (e) => {
  if(nav.classList.contains("active") && !nav.contains(e.target) && !toggle.contains(e.target)){
    nav.classList.remove("active");
    document.body.style.overflow = "";
  }
});