
export function initTilt() {
  const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsFinePointer) return;

  const els = document.querySelectorAll('[data-tilt]');

  els.forEach((el) => {
    const strength = parseFloat(el.dataset.tiltStrength) || 8;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * strength;
      const ry = (px - 0.5) * strength;
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      el.style.setProperty('--tilt-scale', '1.03');
    });

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--tilt-scale', '1');
    });
  });
}
