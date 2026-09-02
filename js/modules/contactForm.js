
export function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();

    const subject = encodeURIComponent(`Peluang Kolaborasi dari ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\nDari: ${name}\nEmail: ${email}`);

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=handikarhama2@gmail.com&su=${subject}&body=${body}`;
window.open(gmailComposeUrl, '_blank', 'noopener');
  });
}
