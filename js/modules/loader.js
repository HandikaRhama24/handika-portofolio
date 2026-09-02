
export function initLoader(prefersReducedMotion, onComplete) {
  const loader = document.querySelector('.preloader');

  if (!loader) {
    document.body.classList.add('is-loaded');
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const alreadyVisited = sessionStorage.getItem('handika-portfolio-visited');

  if (prefersReducedMotion || alreadyVisited) {
    loader.remove();
    document.body.classList.add('is-loaded');
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const counterEl = loader.querySelector('.preloader__count-num');
  const barFillEl = loader.querySelector('.preloader__bar-fill');
  const duration = 1700;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    const pct = Math.round(eased * 100);

    if (counterEl) counterEl.textContent = String(pct).padStart(2, '0');
    if (barFillEl) barFillEl.style.transform = `scaleX(${eased})`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      finish();
    }
  }

  function finish() {
    try {
      sessionStorage.setItem('handika-portfolio-visited', '1');
    } catch (e) {
      /* sessionStorage tidak tersedia (mode privat, dll) — abaikan dengan aman */
    }
    loader.classList.add('is-done');
    window.setTimeout(() => {
      loader.remove();
      document.body.classList.add('is-loaded');
      if (typeof onComplete === 'function') onComplete();
    }, 850);
  }

  requestAnimationFrame(tick);
}
