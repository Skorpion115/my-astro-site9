// Ein einfaches Beispiel-Skript
console.log('Willkommen auf meiner Astro-Seite!');

// Funktion, die beim Laden der Seite eine Nachricht zeigt
window.onload = () => {
  alert('Die Seite wurde erfolgreich geladen!');
};

// Beispiel für das Hinzufügen von Interaktivität zu einem Button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', () => {
      alert('Button wurde geklickt!');
    });
  }
});
