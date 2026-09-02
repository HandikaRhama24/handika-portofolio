# Portfolio — Handika Rhama Dwi Ariefky

Website portfolio personal premium, dibangun dari nol tanpa template,
dengan konsep **Luxury Minimalism + Modern Editorial**. Dirancang khusus
untuk dibaca oleh HRD lintas industri: profesional, elegan, cepat, dan
mudah dikembangkan sendiri.

Semua kode adalah **HTML, CSS, dan JavaScript murni** (tanpa framework,
tanpa build step, tanpa `npm install`). Cukup buka `index.html` di
browser, atau upload seluruh folder ke layanan hosting statis mana pun.

---

## Konsep Desain

**Signature system: "Calibration Mark"** — tanda silang tipis berwarna
gold (seperti tanda fokus kamera / registrasi cetak presisi) muncul
berulang di pojok foto dan elemen kunci. Motif ini secara sengaja
merepresentasikan latar belakang Anda: Sistem Informasi, audit tata
kelola TI (COBIT), dan sifat teliti/sistematis yang disebutkan di CV —
bukan sekadar dekorasi.

- **Warna**: hitam (`#0B0B0D`) dan putih hangat (`#F7F5F0`) bergantian
  sebagai latar section (gaya editorial majalah, bukan gelap terus-menerus),
  dengan aksen gold/bronze (`#C6A15C` / `#7C5E37`).
- **Tipografi**: *Bodoni Moda* (display, karakter kuat, dipakai terbatas
  untuk nama & judul), *Space Grotesk* (label, angka, navigasi — nuansa
  presisi/teknis), *Manrope* (isi, nyaman dibaca).
- **Layout**: setiap section punya struktur asimetris sendiri (split
  potret, blob organik, potongan diagonal, marquee, dsb) — tidak ada
  grid/card yang berulang.

---

## Struktur Folder

```
handika-portfolio/
├── index.html              # Seluruh 10 section dalam satu halaman
├── favicon.svg              # Monogram "HR"
├── robots.txt / sitemap.xml # SEO dasar
├── cv.pdf                   # ⚠️ belum ada — lihat bagian "Tombol Unduh CV"
│
├── css/
│   ├── variables.css        # Semua token: warna, font, spacing, motion
│   ├── reset.css             # CSS reset modern
│   ├── typography.css        # Heading, body text, label, field-list
│   ├── layout.css            # Grid/struktur unik tiap section
│   ├── components.css        # Nav, tombol, photo-frame, cursor, form, dll
│   └── animations.css        # Keyframes + reveal states (scroll/text/image)
│
├── js/
│   ├── main.js               # Entry point — inisialisasi semua modul
│   └── modules/
│       ├── loader.js         # Preloader dengan progress counter
│       ├── cursor.js         # Cursor kustom (dot + ring)
│       ├── navigation.js     # Header solid/glass, active link, menu mobile
│       ├── smoothScroll.js   # Easing halus untuk klik anchor nav
│       ├── reveal.js         # Scroll reveal + text-split judul hero
│       ├── parallax.js       # Parallax halus saat scroll
│       ├── magnetic.js       # Efek tombol "magnetic" mengikuti kursor
│       ├── contactForm.js    # Form kontak via mailto (tanpa backend)
│       └── accordion.js      # Buka/tutup deskripsi di section Keahlian
│
└── images/
    ├── PANDUAN-FOTO.md       # Status foto + spek lengkap tiap slot
    ├── hero-photo.jpg        # ✅ sudah terisi
    ├── about-photo.jpg       # ✅ sudah terisi
    └── contact-photo.jpg     # ✅ sudah terisi
```

Setiap file CSS/JS punya satu tanggung jawab jelas — ingin mengubah warna?
Buka `variables.css`. Ingin mengubah animasi reveal? Buka `animations.css`.
Tidak perlu menelusuri file raksasa untuk menemukan satu baris kode.

---

## Cara Melihat di Komputer Sendiri

Karena browser modern membatasi `type="module"` dibuka langsung dari
`file://`, jalankan local server sederhana (pilih salah satu):

```bash
# Jika ada Python
python3 -m http.server 8000

# Jika ada Node.js
npx serve .
```
Lalu buka `http://localhost:8000` di browser.

**Cara tercepat tanpa install apa pun:** upload folder ini ke
[Netlify Drop](https://app.netlify.com/drop) atau [Vercel](https://vercel.com) —
tinggal drag & drop, situs langsung online dalam hitungan detik, gratis.

---

## Foto Anda

Tiga foto yang Anda kirim sudah otomatis dioptimasi (dikompresi, metadata
EXIF/GPS dihapus untuk privasi) dan dipasang di:

- **Hero** ← foto Anda di lift dengan jas hitam (versi editorial)
- **Tentang Saya** ← foto Anda berbatik di lobi
- **Kontak** ← foto Anda di lift (versi candid), sebagai pasangan "bookend" dari Hero

Section lainnya (Ringkasan, Pengalaman, Organisasi, Pendidikan, Keahlian,
Tools, Karya) memakai placeholder yang rapi sampai Anda menambahkan foto
yang sesuai konten masing-masing. Detail lengkap nama file, rasio, dan
ukuran ada di **`images/PANDUAN-FOTO.md`**.

---

## Tombol "Unduh CV"

Tombol di Hero mengarah ke `cv.pdf` yang **belum ada** di dalam folder
ini (CV Anda hanya saya terima dalam bentuk gambar, bukan PDF siap-unduh).
Untuk mengaktifkannya:

1. Ekspor CV Anda ke PDF.
2. Beri nama persis `cv.pdf`.
3. Letakkan di folder utama (sejajar dengan `index.html`).

Jika tidak ingin memakai tombol ini, hapus saja elemen `<a class="btn btn--ghost" ...>Unduh CV</a>` di `index.html` bagian Hero.

---

## Form Kontak

Form di section Kontak **berfungsi penuh tanpa server**: saat tombol
"Kirim Pesan" ditekan, JavaScript membuka aplikasi email pengunjung
dengan alamat, subjek, dan isi pesan yang sudah terisi otomatis ke
`handikarhama2@gmail.com`. Tidak perlu setup tambahan apa pun.

Jika suatu saat Anda ingin pesan terkirim langsung ke server tanpa
membuka aplikasi email (misalnya lewat dashboard), Anda bisa mengganti
isi `js/modules/contactForm.js` untuk mengirim ke layanan gratis seperti
[Formspree](https://formspree.io) atau [Web3Forms](https://web3forms.com) —
keduanya tinggal daftar dan tempel satu endpoint URL.

---

## Karya / Proyek

Karena Anda fresh graduate, section ini diisi 3 **contoh placeholder**
(ditandai label "Contoh") yang relevan dengan latar belakang Anda —
sistem informasi, content strategy, dan database. Ganti judul, deskripsi,
tag, dan foto di `index.html` bagian `<!-- 08 — KARYA & PROYEK -->` begitu
Anda punya proyek nyata untuk ditampilkan.

---

## Aksesibilitas & Performa

- Menghormati `prefers-reduced-motion` — semua animasi otomatis
  disederhanakan/dimatikan untuk pengguna yang mengaktifkan pengaturan ini.
- Kontras warna teks vs. latar sudah disesuaikan standar WCAG AA;
  gold hanya dipakai sebagai teks di atas latar gelap, tidak pernah di
  atas latar terang (di latar terang, aksen memakai warna bronze yang
  lebih gelap agar tetap terbaca).
- Navigasi penuh via keyboard, fokus terlihat jelas (outline gold),
  skip-link ke konten utama, `aria-label`/`aria-expanded` pada semua
  elemen interaktif.
- Tidak ada dependensi JavaScript eksternal (tanpa GSAP/jQuery/dll) —
  semua animasi ditulis manual dengan Intersection Observer,
  requestAnimationFrame, dan CSS transition/keyframe murni, sehingga
  halaman ringan dan cepat dimuat.
- Gambar memakai `loading="lazy"` (kecuali foto Hero) dan dimensi
  ter-reserve lewat `aspect-ratio` di CSS agar tidak ada layout shift.

---

## Catatan Teknis Lain

- **Kenapa HTML/CSS/JS murni, bukan Next.js?** Untuk portfolio satu
  halaman seperti ini, stack statis lebih tepat: tanpa build step, bisa
  langsung di-hosting di mana saja (termasuk shared hosting biasa), dan
  lebih mudah dipahami/diedit tanpa perlu belajar framework.
- **Kenapa tidak ada foto/ilustrasi AI di background?** Semua elemen
  dekoratif (bentuk mengambang, tanda silang, grain, glow) dibuat murni
  dengan CSS/SVG — bukan gambar dari internet — supaya tidak ada risiko
  hak cipta, loading tetap instan, dan warnanya selalu presisi mengikuti
  palet brand.
- **Alamat lengkap tidak ditampilkan publik.** Hanya kota (Bandar
  Lampung) yang ditampilkan di halaman publik, sebagai praktik umum
  keamanan privasi untuk website yang bisa diakses siapa saja. Alamat
  lengkap tetap ada di CV pribadi Anda seperti biasa.

## Riwayat Perbaikan

**Update terbaru** — ditemukan bug pada versi pertama: section Hero
(nama besar, tagline, tombol, foto) tersangkut permanen dalam kondisi
tersembunyi karena logika animasi scroll-reveal tidak pernah memberi
sinyal "tampil" ke section tersebut (Hero seharusnya tampil otomatis
begitu loading selesai, bukan menunggu di-scroll). Sudah diperbaiki,
diuji ulang, dan sekarang **dua lapis pengaman ditambahkan**: (1) Hero
kini tampil langsung begitu preloader selesai, tidak lagi bergantung
pada scroll-detection sama sekali, dan (2) skrip cadangan otomatis
menampilkan seluruh konten apa adanya jika untuk alasan apa pun
JavaScript utama gagal berjalan (misalnya dibuka langsung dari file://
tanpa local server) — halaman tidak akan pernah lagi terlihat kosong
secara permanen.

---

## Soal "Generate Gambar AI"

Di lingkungan pembuatan situs ini, saya **tidak memiliki alat generate
gambar fotorealistik** (semacam Midjourney/DALL·E) — alat yang saya
punya hanya bisa mencari gambar yang sudah ada di internet, bukan
membuat gambar baru. Karena situs ini adalah portfolio pribadi Anda,
memakai foto orang lain dari pencarian web sebagai "pengganti foto Anda"
juga tidak tepat — akan terlihat seperti bukan Anda.

Yang saya lakukan sebagai gantinya:
- Membuat **ilustrasi garis/node orisinal** (SVG buatan sendiri, bukan
  gambar) sebagai aksen dekoratif di Hero — merepresentasikan tema
  Sistem Informasi/struktur data, bukan sekadar hiasan.
- Menjaga seluruh area foto tetap sebagai bingkai premium yang otomatis
  aktif begitu Anda menambahkan file (lihat `images/PANDUAN-FOTO.md`).

**Jika Anda tetap ingin gambar bergaya AI** (misalnya ilustrasi abstrak
untuk latar section, bukan foto wajah Anda), cara paling praktis:
generate lewat tool AI image terpisah (ChatGPT/Midjourney/dll, seperti
dua gambar yang pernah Anda kirim sebelumnya), lalu simpan dengan nama
file yang sesuai ke folder `images/` — bingkai yang sudah saya siapkan
akan otomatis menampilkannya tanpa perlu ubah kode apa pun.

---

Dibuat dengan HTML5, CSS3 modern (custom properties, grid, clamp), dan
JavaScript ES6+ murni. Tidak ada template yang dipakai — seluruh desain,
layout, dan interaksi dirancang khusus untuk profil Anda.


