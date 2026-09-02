
export function initSmoothScroll(prefersReducedMotion) {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash.length <= 1) return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

      if (prefersReducedMotion) {
        window.scrollTo(0, targetY);
        return;
      }
      easeScrollTo(targetY, 1000);
    });
  });
}

function easeScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
