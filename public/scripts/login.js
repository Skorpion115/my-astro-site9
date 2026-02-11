const PASSWORD = "tenwords2026";
const STORAGE_KEY = "account-login"; // Wichtig: gleiche Variable wie im auth-guard.js

// Funktion: Content anzeigen, Login ausblenden
function showContent() {
  const loginBox = document.getElementById("login-box");
  const content = document.getElementById("content");

  if (loginBox) loginBox.classList.add("hidden");
  if (content) content.classList.remove("hidden");
}

// Funktion: Passwort prüfen
function checkPassword() {
  const inputEl = document.getElementById("password");
  const error = document.getElementById("error");

  if (!inputEl) return;

  // ✅ Hier wird der SessionStorage gesetzt, wenn das Passwort stimmt
  if (inputEl.value.trim() === PASSWORD) {
    sessionStorage.setItem(STORAGE_KEY, "ok"); // ← DAS ist der entscheidende Teil!
    showContent(); // Content anzeigen
    if (error) error.style.display = "none";
  } else {
    if (error) error.style.display = "block";
  }
}

// Auto-Login prüfen: Wenn schon in der Session gespeichert → Content zeigen
if (sessionStorage.getItem(STORAGE_KEY) === "ok") {
  showContent();
}

// Enter-Taste im Input-Feld
document.getElementById("password")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

// Login-Button
document.getElementById("login-btn")?.addEventListener("click", checkPassword);