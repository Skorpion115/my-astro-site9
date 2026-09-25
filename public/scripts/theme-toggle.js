function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  // Verhindert doppelte Event-Listener
  if (themeToggle.dataset.themeInitialized === "true") return;
  themeToggle.dataset.themeInitialized = "true";

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");

    if (isDark) {
      element.classList.remove("light");
    } else {
      element.classList.add("light");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  themeToggle.addEventListener("click", handleToggleClick);
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
document.addEventListener("astro:page-load", initThemeToggle);
