document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.song-list a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      let offset = 20;
      if (window.innerWidth <= 360) offset = 10;

      const startY = window.scrollY;
      const endY = targetEl.getBoundingClientRect().top + startY - offset;
      const distance = endY - startY;

      const duration = 2000; // Dauer in ms = 2 Sekunden
      let startTime = null;

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const percent = Math.min(elapsed / duration, 1);

        // Easing (sanft beschleunigt / abgebremst)
        const ease = percent < 0.5
          ? 2 * percent * percent
          : -1 + (4 - 2 * percent) * percent;

        window.scrollTo(0, startY + distance * ease);

        if (percent < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    });
  });
});