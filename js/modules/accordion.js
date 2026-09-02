
export function initSkillAccordion() {
  const items = document.querySelectorAll('.skill-item');

  items.forEach((item) => {
    const trigger = item.querySelector('.skill-item__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });
}
