
export function initLightbox() {
  const lightbox = document.querySelector('#lightbox');
  const triggers = document.querySelectorAll('[data-lightbox-src]');
  if (!lightbox || !triggers.length) return;

  const imgEl = lightbox.querySelector('#lightbox-img');
  const captionEl = lightbox.querySelector('#lightbox-caption');
  const closeEls = lightbox.querySelectorAll('[data-lightbox-close]');
  let lastFocused = null;

  const openLightbox = (src, label, trigger) => {
    lastFocused = trigger;
    imgEl.src = src;
    imgEl.alt = label || '';
    captionEl.textContent = label || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox__close').focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxLabel, trigger);
    });
  });

  closeEls.forEach((el) => el.addEventListener('click', closeLightbox));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}
