
export function initParallax() {
  const elements = Array.from(document.querySelectorAll('[data-parallax]'));
  if (!elements.length) return;

  let ticking = false;

  function update() {
    const viewportH = window.innerHeight;
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const translate = centerOffset * speed * -0.15;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}
