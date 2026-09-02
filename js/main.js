

import { initLoader } from './modules/loader.js';
import { initCursor } from './modules/cursor.js';
import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initReveal, splitHeroChars, revealHero } from './modules/reveal.js';
import { initParallax } from './modules/parallax.js';
import { initMagnetic } from './modules/magnetic.js';
import { initTilt } from './modules/tilt.js';
import { initLightbox } from './modules/lightbox.js';
import { initContactForm } from './modules/contactForm.js';
import { initSkillAccordion } from './modules/accordion.js';

function init() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  splitHeroChars();
  initNavigation();
  initSmoothScroll(prefersReducedMotion);
  initReveal(prefersReducedMotion);
  initContactForm();
  initSkillAccordion();
  initLightbox();
  initLoader(prefersReducedMotion, revealHero);

  if (!prefersReducedMotion) {
    initCursor();
    initParallax();
    initMagnetic();
    initTilt();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
