// ====== Passwort und Session Key ======
const PASSWORD = "tenwords2026";
const STORAGE_KEY = "tenwords-login";

// ====== Funktionen ======

// Content anzeigen (nur relevant für index.astro)
function showContent() {
  const loginBox = document.getElementById("login-box");
  const content = document.getElementById("content");
  loginBox?.classList.add("hidden");
  content?.classList.remove("hidden");
}

// Passwort prüfen
function checkPassword() {
  const inputEl = document.getElementById("password");
  const errorEl = document.getElementById("error");
  if (!inputEl) return;

  const input = inputEl.value.trim();
  if (input === PASSWORD) {
    sessionStorage.setItem(STORAGE_KEY, "ok");
    showContent();
    if (errorEl) errorEl.style.display = "none";
  } else {
    if (errorEl) errorEl.style.display = "block";
  }
}

// Logout-Funktion
function logout() {
  sessionStorage.removeItem(STORAGE_KEY);
  // Zurück zum Login
  window.location.href = "/kunden-login/";
}

// ====== Auto-Login prüfen (index.astro) ======
if (sessionStorage.getItem(STORAGE_KEY) === "ok") {
  showContent();
}

// ====== Events ======

// Enter-Taste im Passwortfeld
document.getElementById("password")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

// Login-Button
document.getElementById("login-btn")?.addEventListener("click", checkPassword);

// Logout-Buttons (funktioniert überall auf der Seite)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("auth-logout")) {
    logout();
  }
});
