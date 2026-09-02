# Panduan Foto

Sistem foto di website ini dirancang "plug-and-play": setiap section punya
bingkai (`photo-frame`) yang sudah menunggu foto dengan nama file tertentu.
Jika file belum ada, bingkai otomatis menampilkan placeholder elegan
bertanda "Tambahkan Foto" — jadi website tidak akan pernah terlihat rusak
atau kosong.

## Status saat ini

| File                        | Section              | Status                              |
|------------------------------|-----------------------|--------------------------------------|
| `hero-photo.jpg`             | Hero                  | ✅ Sudah terisi (foto Anda)          |
| `about-photo.jpg`             | Tentang Saya           | ✅ Sudah terisi (foto Anda)          |
| `contact-photo.jpg`           | Kontak                | ✅ Sudah terisi (foto Anda)          |
| `summary-photo.jpg`           | Ringkasan Profesional  | ⬜ Placeholder — opsional (background halus) |
| `experience-photo.jpg`        | Pengalaman Kerja       | ⬜ Placeholder                       |
| `organization-photo.jpg`      | Pengalaman Organisasi  | ⬜ Placeholder                       |
| `education-photo.jpg`         | Pendidikan             | ⬜ Placeholder                       |
| `skills-photo.jpg`            | Keahlian               | ⬜ Placeholder                       |
| `tools-photo.jpg`             | Tools & Technology     | ⬜ Placeholder                       |
| `portfolio-1-team.jpg` + 3 foto bukti  | Karya & Proyek — Proyek 1 | ✅ Sudah terisi (galeri, lihat bagian khusus di bawah) |
| `portfolio-photo-2/3/4/5.jpg` | Karya & Proyek — Proyek 2–5 | ⬜ Placeholder                 |

**Kenapa tidak semua diisi otomatis?** Tiga foto yang Anda kirim adalah
potret personal (bukan foto aktivitas kerja/organisasi/proyek yang
spesifik), jadi saya memakainya di tiga section yang memang membutuhkan
foto Anda sebagai pribadi: Hero, Tentang Saya, dan Kontak — tiga momen
paling personal di halaman ini. Section lain (Pengalaman, Organisasi,
Proyek, dll.) idealnya diisi foto yang benar-benar merepresentasikan
konten tersebut, jadi saya biarkan sebagai placeholder yang rapi sampai
Anda punya foto yang sesuai.

> Catatan tentang foto mirror-selfie yang ikut terkirim: foto tersebut
> belum saya pasang di section manapun karena ponsel yang menutupi wajah
> membuatnya kurang cocok untuk kesan profesional yang ingin dibangun.
> Simpan saja filenya — Anda bisa memakainya di section manapun kapan
> saja dengan cara di bawah, atau menggantinya dengan foto lain.

## Galeri multi-foto di Proyek 1 (Karya & Proyek)

Proyek pertama ("Strategi Konten & Proposal Klien") berbeda dari 4 proyek
lain: karena Anda punya beberapa bukti kerja nyata (foto tim + 3 client),
section ini pakai **galeri**, bukan satu `photo-frame` biasa. Filenya:

| Nama File                            | Isi                                  | Rasio asli    |
|----------------------------------------|----------------------------------------|-----------------|
| `portfolio-1-team.jpg`                 | Foto utama — tim kreatif               | 16:9            |
| `portfolio-1-proof-dunnno.jpg`         | Kartu kanan/depan — bukti proyek DUNNNO | ±4.2:1 (lebar)  |
| `portfolio-1-proof-kopiholy.jpg`       | Kartu tengah — bukti proyek Kopi Holy   | ±2.5:1          |
| `portfolio-1-proof-urbankickz.jpg`     | Kartu kiri/belakang — bukti proyek Urban Kickz | ±2.5:1  |

Kartu bukti proyek disusun bertumpuk (menyerupai tumpukan kartu/foto),
memancar dari **kanan** — kartu pertama (DUNNNO) di posisi paling kanan
dan paling depan, lalu kartu berikutnya bergeser ke kiri di belakangnya.
Klik/ketuk salah satu foto untuk membukanya dalam ukuran penuh
(lightbox), lengkap dengan keterangan nama proyek.

**Untuk mengganti salah satu foto:** timpa file dengan nama yang sama di
folder `images/`. Karena kartu memakai `aspect-ratio` yang mengikuti
ukuran asli file (ditulis di atribut `style` pada `index.html`, dekat
teks `project-gallery__shot`), jika Anda mengganti dengan foto berbeda
rasio, sesuaikan juga angka `aspect-ratio` di situ agar tidak terpotong
aneh.

**Untuk menambah proyek keempat (mis. brand lain):** salin satu blok
`<button class="project-gallery__card" ...>` di `index.html`, beri
`--i:3` (urutan berikutnya dari kanan), ganti path foto, label, dan
`aspect-ratio`-nya.

**Ingin Proyek 2–5 punya galeri serupa?** Saat ini keduanya masih pakai
`photo-frame` tunggal biasa (lihat tabel di bawah). Kirim saja foto-foto
tambahan dan saya bisa bantu ubah salah satunya jadi galeri yang sama.

## Cara menambahkan foto baru (proyek 2–5 & section lain)

1. Siapkan foto dengan rasio dan ukuran minimum sesuai tabel di bawah.
2. Beri nama file **persis sama** dengan nama pada kolom "Nama File".
3. Masukkan ke folder `images/` (menimpa file lama jika sudah ada).
4. Refresh browser — foto langsung tampil menggantikan placeholder,
   tanpa perlu mengubah kode apa pun.

| Nama File                  | Rasio  | Ukuran Minimum | Orientasi     |
|-----------------------------|--------|------------------|----------------|
| `hero-photo.jpg`            | 4:5    | 1000×1250 px     | Vertikal       |
| `about-photo.jpg`           | 4:5    | 800×1000 px      | Vertikal       |
| `summary-photo.jpg`         | 16:9   | 1600×900 px      | Horizontal     |
| `experience-photo.jpg`      | 3:4    | 900×1200 px      | Vertikal       |
| `organization-photo.jpg`    | 1:1    | 900×900 px       | Persegi        |
| `education-photo.jpg`       | 4:5    | 800×1000 px      | Vertikal       |
| `skills-photo.jpg`          | 1:1    | 600×600 px       | Persegi (bulat)|
| `tools-photo.jpg`           | 1:1    | 500×500 px       | Persegi        |
| `portfolio-photo-2.jpg`     | 4:3    | 1000×750 px      | Horizontal     |
| `portfolio-photo-3.jpg`     | 4:3    | 1000×750 px      | Horizontal     |
| `portfolio-photo-4.jpg`     | 4:3    | 1000×750 px      | Horizontal     |
| `portfolio-photo-5.jpg`     | 4:3    | 1000×750 px      | Horizontal     |
| `contact-photo.jpg`         | 4:5    | 1000×1250 px     | Vertikal       |

## Tips kualitas foto

- Format JPG, kompresi sedang–tinggi (kualitas 80–85%) agar loading tetap cepat.
- Pastikan wajah berada di sepertiga atas foto — CSS memotong foto dari
  bagian atas (`object-position: center top`) agar wajah tidak terpotong.
- Semua foto otomatis mendapat sentuhan warna yang konsisten (kontras dan
  saturasi halus) lewat CSS, jadi tidak perlu edit warna manual — cukup
  pastikan foto sumber cukup terang dan tajam.
