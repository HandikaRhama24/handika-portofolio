
export function initNavigation() {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('#hero');
  const menuToggle = document.querySelector('#nav-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  /* 1. Header solid setelah lewat Hero */
  if (header && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => header.classList.toggle('is-solid', !entry.isIntersecting),
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
    );
    heroObserver.observe(hero);
  }

  /* 2. Active link mengikuti scroll */
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      });
    }, { threshold: 0.5, rootMargin: '-72px 0px -20% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* 3. Mobile menu */
  if (menuToggle && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }
}
