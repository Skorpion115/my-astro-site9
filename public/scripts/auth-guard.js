// Zentrale Zugriffskontrolle für Account-Bereich
const STORAGE_KEY = "account-login";

// Falls nicht eingeloggt → zurück zur Login-Seite
if (sessionStorage.getItem(STORAGE_KEY) !== "ok") {
  window.location.href = "/kundenlogin/account/";
}