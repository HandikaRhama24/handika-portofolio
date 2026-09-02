
export function splitHeroChars() {
  const lines = document.querySelectorAll('.hero__title .line[data-split-chars]');
  lines.forEach((line) => {
    const text = line.textContent;
    line.textContent = '';
    line.setAttribute('aria-label', text);

    const words = text.split(' ');
    let charIndex = 0;

    words.forEach((word, wordIdx) => {
      // Setiap KATA dibungkus dalam satu wrapper (bukan huruf lepas satu-satu)
      // agar saat baris harus wrap karena sempit, browser hanya boleh
      // memotong DI ANTARA kata — tidak pernah di tengah kata seperti
      // "Handika R" / "hama". CSS .word-group memakai white-space:nowrap
      // supaya huruf-huruf di dalamnya selalu dianggap satu unit utuh.
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word-group';

      [...word].forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.setAttribute('aria-hidden', 'true');
        charSpan.style.setProperty('--i', charIndex);
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
        charIndex += 1;
      });

      line.appendChild(wordSpan);

      // Spasi asli (teks biasa, bukan span) di ANTARA kata — sengaja
      // bukan non-breaking space, supaya baris tetap boleh wrap di sini
      // (antar-kata) jika benar-benar diperlukan di layar sangat sempit.
      if (wordIdx < words.length - 1) {
        line.appendChild(document.createTextNode(' '));
      }
    });
  });
}

export function initReveal(prefersReducedMotion) {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-inview'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((el) => observer.observe(el));
}

/**
 * revealHero()
 * PENTING: Hero adalah satu-satunya section yang PASTI terlihat saat halaman
 * pertama kali dibuka (di atas lipatan layar) — jadi ia tidak boleh bergantung
 * pada IntersectionObserver (yang bisa gagal terpicu tergantung tinggi
 * viewport, timing, dsb). Fungsi ini dipanggil LANGSUNG oleh loader.js begitu
 * preloader selesai, memberi class .is-inview secara eksplisit ke section
 * hero dan seluruh elemen [data-reveal] di dalamnya — menjamin nama, tagline,
 * tombol, dan foto SELALU muncul begitu loading selesai, tanpa syarat
 * tambahan apa pun.
 */
export function revealHero() {
  const hero = document.querySelector('#hero');
  if (!hero) return;
  hero.classList.add('is-inview');
  hero.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-inview'));
}
