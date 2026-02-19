 document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".account-nav");

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    }
  });