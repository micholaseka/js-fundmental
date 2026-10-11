# TARGET FUNDAMENTAL — CODING DENGAN AI

**Pemilik:** Miko  
**Dibuat:** 12 Oktober 2026  
**Bahasa utama:** JavaScript  
**Arah:** Junior JavaScript Full-Stack Developer yang mampu bekerja dengan AI secara bertanggung jawab  
**Dokumen pendamping:** `MyLearningToCode_v3_0.md`

> **Tujuan utama:** bukan hanya bisa menulis prompt yang bagus, tetapi mampu memahami masalah, membaca dan menulis kode, menguji hasilnya, menemukan bug, menilai saran AI, serta bertanggung jawab atas kode yang masuk ke project.

Dokumen ini adalah **papan target dan pemeriksaan kemampuan**. Roadmap V3.0 tetap menjadi peta belajar utama. Status di sini boleh berubah hanya jika ada bukti latihan, kode yang berjalan, tes, atau project—bukan karena baru membaca materi.

---

## 1. Definisi akhir: apa artinya bisa coding dengan AI secara fundamental?

Aku dianggap mempunyai fondasi yang kuat bila aku bisa melakukan hal berikut:

- [ ] Mengubah kebutuhan atau ide menjadi spesifikasi yang jelas: masalah, input, output, aturan, dan kasus tepi.
- [ ] Memecah masalah besar menjadi langkah-langkah kecil yang bisa dikerjakan dan diuji.
- [ ] Membaca kode yang sudah ada dan menjelaskan tujuan tiap bagian penting dengan bahasaku sendiri.
- [ ] Menulis kode dasar dari file kosong tanpa menyalin solusi AI.
- [ ] Memprediksi hasil program beserta alasan, lalu membuktikannya dengan menjalankan kode.
- [ ] Membedakan syntax error, runtime error, dan logic error.
- [ ] Melakukan debugging dengan hipotesis dan bukti, bukan menebak atau meminta AI menulis ulang semuanya.
- [ ] Memakai dokumentasi resmi untuk memeriksa cara kerja API dan fitur bahasa.
- [ ] Meminta bantuan AI secara spesifik, memberi konteks yang cukup, dan mengevaluasi jawabannya.
- [ ] Memeriksa perubahan kode AI (*diff*), menjalankan tes, mencari risiko, dan menolak saran yang tidak tepat.
- [ ] Menggunakan Git untuk menyimpan perubahan yang bermakna dan kembali ke versi sebelumnya bila perlu.
- [ ] Menjelaskan, menguji, serta memelihara kode yang dibantu AI beberapa hari setelah kode itu dibuat.

**Standar penting:** tidak harus hafal semua sintaks. Aku harus tahu cara bernalar, menguji, membaca dokumentasi, dan membuktikan bahwa kode bekerja sesuai kebutuhan.

---

## 2. Sistem status dan bukti kemampuan

Gunakan level berikut untuk **setiap topik**, bukan satu nilai untuk seluruh kemampuan coding.

| Level | Status | Bukti yang diperlukan |
|---|---|---|
| 0 | Familiar | Pernah melihat atau mendengar istilahnya. |
| 1 | Explain | Bisa menjelaskan ide dasar, tetapi masih perlu bantuan untuk menerapkannya. |
| 2 | Reproduce | Bisa menulis contoh dari file kosong dengan sedikit atau tanpa bantuan. |
| 3 | Debug | Bisa menemukan dan memperbaiki bug pada contoh yang relevan. |
| 4 | Apply | Bisa menggunakannya untuk menyelesaikan kebutuhan nyata di project. |
| 5 | Transfer | Bisa menerapkannya pada variasi kasus baru dan menjelaskan pilihan solusinya. |

### Aturan memberi status

- `NOT STARTED`: belum dipelajari atau belum pernah diuji.
- `IN PROGRESS`: sudah belajar, tetapi bukti masih belum konsisten.
- `PRACTICED`: sudah menulis dan menjalankan latihan, tetapi belum lulus seluruh Mastery Gate.
- `MASTERED`: lulus Mastery Gate pada Bagian 12.

Jangan memberi status `MASTERED` hanya karena jawaban satu soal benar. Jawaban dan alasan harus benar, lalu kemampuan perlu dibuktikan melalui kode yang ditulis, dijalankan, diperbaiki, dan digunakan kembali.

---

## 3. Yang sudah kupelajari sampai 12 Oktober 2026

Status di bagian ini dibedakan antara **pernah dibuktikan**, **sudah dipelajari**, dan **masih harus diuji ulang**. Status merupakan perkiraan kerja berdasarkan Roadmap V3.0 dan sesi latihan; ini bukan klaim bahwa seluruh topik sudah dikuasai.

### 3.1 JavaScript yang sudah pernah dipraktikkan

- [x] Membuat array dan mengambil elemen menggunakan index, misalnya `arr[0]`.
- [x] Menggunakan `push()` untuk menambah elemen ke akhir array.
- [x] Menggunakan `shift()` untuk menghapus elemen pertama array.
- [x] Membuat object dengan property seperti `name`, `age`, atau `hobbies`.
- [x] Mengakses array di dalam object, misalnya `user.hobbies[1]`.
- [x] Menambah property object, misalnya `user.city = "..."`.
- [x] Menghapus property dengan `delete`.
- [x] Menggunakan `console.log()` untuk melihat nilai.
- [x] Pernah menulis sintaks `try { } catch (error) { }`.

**Status umum:** fondasi dasar array/object pernah direproduksi. Tetap perlu recall, variasi soal, debugging, dan penggunaan di project.

### 3.2 Konsep yang sudah dilatih dalam sesi 12 Oktober

- [x] `if` adalah conditional statement, bukan function.
- [x] Block `{ ... }` membatasi scope untuk `let` dan `const`.
- [x] `let` di dalam block dapat membuat binding baru yang berbeda dari variabel di luar (*shadowing*).
- [x] Assignment seperti `x = 20` mengubah binding `x` yang bisa dijangkau dari tempat itu jika tidak ada deklarasi baru di scope lebih dekat.
- [x] `let x = 30` mendeklarasikan binding baru; ini berbeda dari `x = 30`.
- [x] `const` mencegah variabel di-*reassign*, tetapi property object dan isi array tetap bisa diubah.
- [x] `user.age = 17` dan `user.skills.push("Linux")` boleh dilakukan jika `user` dideklarasikan dengan `const`.
- [x] Mengganti variabel `const` ke object/array baru menyebabkan error.
- [x] `const b = a` pada array membuat `a` dan `b` mengacu ke array yang sama; mutasi melalui salah satunya terlihat melalui yang lain.
- [x] Error yang tidak ditangani menghentikan alur normal program pada titik error; baris sesudahnya tidak dijalankan.
- [x] `catch` dapat menangani error yang dilempar di dalam blok `try`, lalu program dapat melanjutkan setelah `catch` selesai.

**Status saat ini:** sudah mendapat latihan berulang, tetapi masih `IN PROGRESS`. Ada beberapa prediksi awal yang keliru pada assignment ke scope luar dan alur eksekusi setelah error. Itu berarti konsep perlu dibuktikan lagi dengan latihan baru.

### 3.3 Git dan proses belajar

- [x] Pernah memakai `git add`, `git commit`, `git push`, dan `git log`.
- [x] Pernah menyimpan pekerjaan JavaScript di repository GitHub.
- [x] Sudah memakai latihan prediksi: tulis tebakan dan alasan sebelum menjalankan kode.
- [x] Sudah mulai memakai konsep error log dan catatan belajar.
- [x] Sudah menetapkan prinsip belajar: mencoba dahulu, membaca error, lalu meminta bantuan AI.

**Status umum Git:** dasar pernah dipraktikkan; workflow yang rapi, branch, diff, restore, merge, dan pull request masih perlu latihan bertahap.

### 3.4 Hal yang belum boleh dianggap dikuasai

- [ ] Bisa menjelaskan setiap konsep tanpa petunjuk.
- [ ] Bisa menulis ulang semua contoh dari file kosong.
- [ ] Bisa mendiagnosis dua atau lebih bug tanpa solusi AI.
- [ ] Bisa menerapkan scope dan reference/copy di project yang lebih besar.
- [ ] Bisa membedakan error yang menghentikan program dari output yang tidak pernah sempat dicetak.
- [ ] Bisa menjelaskan semua file project lama yang dibuat dengan bantuan AI.
- [ ] Bisa menggunakan DOM, async/await, API, database, React, dan TypeScript. Topik-topik ini belum diuji dalam sesi latihan dasar terbaru.

---

## 4. Prioritas belajarku sekarang

Urutan dipilih berdasarkan fondasi yang masih lemah, bukan berdasarkan teknologi yang sedang populer.

### Prioritas 1 — JavaScript inti

**Target:** mampu menalar program kecil, menulisnya dari awal, dan memahami hasilnya.

- [ ] Deklarasi variabel: `let`, `const`, dan kenapa `var` biasanya dihindari.
- [ ] Scope: global, function, block, lexical scope, dan shadowing.
- [ ] Assignment, reassign, mutation, dan perbedaan antara deklarasi dengan mengubah nilai.
- [ ] Tipe data: string, number, boolean, `null`, `undefined`, object, array.
- [ ] Operator aritmetika, perbandingan, logika, assignment, dan urutan operasi.
- [ ] Truthy/falsy, konversi tipe, `===` dibanding `==`.
- [ ] Kondisional: `if/else`, ternary, dan `switch` saat sesuai.
- [ ] Perulangan: `for`, `while`, dan kapan memakai method array.
- [ ] Function: deklarasi, expression, arrow function, parameter, argument, `return`, default parameter.
- [ ] Perbedaan `return` dan `console.log()`.
- [ ] Array dan object: cara membuat, membaca, mengubah, menghapus, dan memilih struktur data.
- [ ] Reference vs copy; assignment pada object/array.
- [ ] Spread/rest: array/object; memahami shallow copy dan keterbatasannya.
- [ ] Destructuring object dan array.
- [ ] Array methods: `forEach`, `map`, `filter`, `find`, `some`, `every`, `reduce`, `sort`.
- [ ] Callback dan closure dasar.
- [ ] Module: `require`/`module.exports` pada CommonJS dan pengenalan `import`/`export`.
- [ ] Error handling: `throw`, `try/catch/finally`, dan memahami error yang tidak ditangani.

### Prioritas 2 — Problem solving dan debugging

**Target:** tidak bergantung pada AI untuk memikirkan semua langkah.

- [ ] Menulis ulang masalah dengan kata-kataku sendiri.
- [ ] Memisahkan input, output, aturan, batasan, dan kasus tepi.
- [ ] Membuat contoh input/output sebelum menulis kode.
- [ ] Memecah tugas menjadi langkah kecil atau pseudocode.
- [ ] Melacak nilai variabel langkah demi langkah (*trace*).
- [ ] Membuat prediksi hasil dan menuliskan alasan.
- [ ] Membedakan syntax error, runtime error, dan logic error.
- [ ] Membaca nama error, pesan, file, dan nomor baris.
- [ ] Membuat hipotesis sebelum mengubah kode.
- [ ] Menguji satu kemungkinan dalam satu waktu.
- [ ] Memakai `console.log`, debugger, breakpoint, dan call stack.
- [ ] Membuat test case normal, kosong, batas, salah tipe, dan input tak terduga.
- [ ] Mempelajari assertion serta unit test dasar.
- [ ] Mengerti gambaran sederhana kompleksitas: kapan solusi memeriksa setiap item, kapan ada loop bersarang, dan bagaimana jumlah data memengaruhi waktu.

### Prioritas 3 — Tools dan kebiasaan developer

- [ ] Terminal: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cat`, `grep`, pipe, dan menjalankan program.
- [ ] Node.js: menjalankan file dengan `node nama-file.js`.
- [ ] npm: memahami `package.json`, scripts, dependencies, instalasi package, dan `node_modules`.
- [ ] Git: `status`, `diff`, `add`, `commit`, `log`, `branch`, `switch`, `restore`, `revert`, `merge`, `pull`, dan `push`.
- [ ] Membedakan working tree, staging area, commit, local branch, dan remote.
- [ ] Membuat commit kecil yang menjelaskan satu perubahan bermakna.
- [ ] Membaca dokumentasi resmi dan memeriksa versi/lingkungan yang digunakan.
- [ ] Menulis README yang menjelaskan tujuan, prasyarat, cara menjalankan, dan fitur.
- [ ] Memahami path file, relative path, environment variable, dan log aplikasi.

### Prioritas 4 — Fondasi web

- [ ] HTML semantik, heading, link, gambar, list, table, dan form.
- [ ] CSS selector, cascade, specificity dasar, box model, flexbox, grid, dan responsive layout.
- [ ] Browser DevTools: Elements, Console, Network, dan Sources.
- [ ] DOM tree, `querySelector`, mengubah text/class/attribute.
- [ ] Membuat dan menghapus elemen DOM.
- [ ] Event listener, event object, bubbling, form submit, dan validasi input.
- [ ] State aplikasi sederhana, rendering, empty/loading/error state.
- [ ] `localStorage` dan `JSON.stringify()`/`JSON.parse()`.

### Prioritas 5 — Async, HTTP, dan API

- [ ] Memahami urutan synchronous dan asynchronous secara konseptual.
- [ ] Callback dan Promise: `pending`, `fulfilled`, `rejected`.
- [ ] `.then()`, `.catch()`, `.finally()`, `async/await`, dan `try/catch`.
- [ ] HTTP request/response, URL, headers, body, dan status code.
- [ ] JSON sebagai format data, bukan hal yang sama dengan object JavaScript.
- [ ] `fetch()`, penanganan status HTTP, kesalahan jaringan, loading, dan error state.
- [ ] REST dan CRUD: GET, POST, PUT/PATCH, DELETE.
- [ ] Memvalidasi input; tidak mempercayai input pengguna secara otomatis.

### Prioritas 6 — Backend, database, frontend modern

**Dipelajari setelah fondasi JavaScript dan web sudah cukup stabil.**

- [ ] Node.js runtime, process, argv, filesystem, environment variable.
- [ ] Server HTTP, routing, request handler, response, dan middleware.
- [ ] Express: route, params, query, body, error handling terpusat.
- [ ] SQL: tabel, tipe kolom, primary key, foreign key, SELECT, WHERE, ORDER BY, INSERT, UPDATE, DELETE, JOIN.
- [ ] Relasi database, constraint, query parameter, dan pengelolaan koneksi.
- [ ] Authentication vs authorization, hash password, session/token, protected route.
- [ ] React: component, JSX, props, state, event, forms, effect, fetch, routing.
- [ ] TypeScript dasar: tipe, interface/type, tipe function, API response, dan error compiler.
- [ ] Testing, deployment, membaca log, konfigurasi environment, dan perbaikan bug production.

### Prioritas 7 — Keamanan dan tanggung jawab teknis

- [ ] Jangan menaruh API key, password, token, atau secret di repository publik atau frontend.
- [ ] Gunakan environment variable dan konfigurasi server yang sesuai.
- [ ] Jangan mempercayai validasi frontend sebagai satu-satunya perlindungan backend.
- [ ] Pahami validasi input, authorization, dan akses data milik pengguna.
- [ ] Review dependency dan sumber package sebelum memasangnya.
- [ ] Memahami risiko SQL injection, XSS, kebocoran data, dan penyalahgunaan endpoint pada level dasar.
- [ ] Jangan menjalankan perintah destruktif dari AI sebelum memahami efeknya.
- [ ] Jangan mengirim data pribadi, credential, atau source code rahasia ke AI tanpa izin dan kebijakan yang sesuai.

---

## 5. Fundamental menggunakan AI untuk coding

Tujuan bukan membuat prompt panjang. Tujuannya memberi AI konteks yang benar, meminta bantuan yang tepat, lalu mengecek hasilnya dengan kemampuan sendiri.

### 5.1 Alur kerja yang wajib dibiasakan

1. **Pahami masalah.** Tuliskan perilaku yang diinginkan dan perilaku yang terjadi sekarang.
2. **Buat spesifikasi.** Tentukan input, output, aturan, batasan, dan kasus tepi.
3. **Pecah tugas.** Jangan meminta satu prompt menyelesaikan seluruh aplikasi sekaligus.
4. **Buat contoh dan tes.** Tulis bagaimana keberhasilan harus terlihat.
5. **Coba sendiri dahulu.** Bahkan jika belum bisa menyelesaikan, tulis hipotesis atau pendekatan awal.
6. **Gunakan AI secara spesifik.** Berikan kode relevan, error persis, hasil yang diharapkan, dan yang sudah dicoba.
7. **Minta bantuan bertahap.** Mulai dari penjelasan atau petunjuk, bukan langsung solusi penuh.
8. **Review kode/diff.** Periksa perubahan baris demi baris dan alasan setiap bagian.
9. **Jalankan tes.** Bandingkan hasil nyata dengan spesifikasi; jangan menganggap jawaban AI benar karena terlihat meyakinkan.
10. **Audit risiko.** Periksa keamanan, dependensi, secret, data, dan kemungkinan input yang tidak valid.
11. **Jelaskan ulang tanpa AI.** Jika tidak bisa menjelaskan, pelajari bagian itu lagi.
12. **Commit.** Simpan perubahan yang telah diuji dengan pesan yang menjelaskan perubahan.

### 5.2 Template saat meminta bantuan debugging

```text
Project:
Tujuan yang seharusnya terjadi:
Hasil yang benar-benar terjadi:
Pesan error lengkap:
Bagian kode relevan:
Yang sudah kucoba:
Hipotesis penyebabku:

Bantu aku mendiagnosis penyebabnya secara bertahap.
Mulai dengan petunjuk atau pertanyaan diagnosis.
Jangan langsung menulis ulang seluruh file.
Jelaskan cara membuktikan penyebab dan cara menguji perbaikannya.
```

### 5.3 Template saat meminta review kode AI

```text
Tujuan fitur:
Spesifikasi/acceptance criteria:
Kode atau diff yang perlu ditinjau:
Tes yang sudah berjalan:

Review kode ini sebagai reviewer.
Cari bug, kasus tepi, asumsi yang tidak valid, risiko keamanan,
kompleksitas yang tidak perlu, dan bagian yang sulit dipelihara.
Jangan mengubah kode terlebih dahulu.
Sebutkan temuan, alasan, dan cara memverifikasinya.
Bedakan masalah yang pasti dari dugaan.
```

### 5.4 Tiga gerbang sebelum menerima kode AI

- [ ] **Pemahaman:** aku bisa menjelaskan apa yang dilakukan setiap bagian penting.
- [ ] **Bukti:** tes yang relevan sudah dijalankan dan hasilnya sesuai spesifikasi.
- [ ] **Keamanan:** tidak ada secret yang bocor, akses yang keliru, atau input berbahaya yang diabaikan.

Jika satu saja belum terpenuhi, kode **belum siap diterima**.

### 5.5 Tanda aku mulai bergantung pada AI

- Aku tidak bisa menjelaskan kode setelah menutup chat AI.
- Aku meminta AI menulis ulang seluruh file setiap kali ada error.
- Aku menempel solusi tanpa menjalankan tes.
- Aku menerima nama API, package, atau syntax tanpa memeriksa dokumentasi.
- Aku tidak bisa mengubah solusi AI untuk memenuhi variasi kebutuhan kecil.
- Aku tidak memahami perubahan yang masuk lewat Git diff.

Jika salah satu muncul, kembali ke mode tutor: minta petunjuk, buat contoh minimal, tulis sendiri, lalu tes.

---

## 6. Peta target belajar menyeluruh

Rangka ini mengikuti arah Roadmap V3.0; jadwal boleh bergeser berdasarkan hasil tes. **Checkpoint lebih penting daripada tanggal.**

| Tahap | Fokus | Target hasil | Syarat pindah tahap |
|---|---|---|---|
| Minggu 0 | Menutup konsep dasar yang keliru | `weak-concept.md`, `error-log.md`, tes prediksi baru | Prediksi dan alasan benar; contoh sudah dijalankan |
| Minggu 1 | Array, object, array methods, spread, Git | `student-data-cli` | Memilih method yang sesuai dan menjelaskan reference/copy |
| Minggu 2 | Function, callback, closure, module | Refactor ke beberapa function/module | Bisa membuat function dari nol dan tidak mengubah perilaku saat refactor |
| Minggu 3 | HTML dan CSS dasar | Halaman statis responsif | Menjelaskan HTML/CSS yang dibuat dan memperbaiki layout sederhana |
| Minggu 4 | DOM | `todo-dom-v1` | Dapat menjelaskan alur event sampai DOM berubah |
| Minggu 5 | Events, forms, localStorage | `expense-tracker-v1` | Validasi berjalan dan data bertahan setelah reload |
| Minggu 6 | Promise dan async/await | Latihan async | Dapat menjelaskan alur hasil dan error asynchronous |
| Minggu 7 | HTTP, fetch, JSON, REST | Dashboard API publik | Memahami request/response, status code, dan error jaringan |
| Minggu 8 | Debugging dan testing | Proyek sengaja dirusak lalu diperbaiki | Menemukan dan menjelaskan mayoritas bug latihan tanpa solusi langsung |
| Minggu 9 | Project vanilla dan audit repo lama | `task-manager-web` | Menambah fitur tanpa tutorial langkah demi langkah; menjelaskan file project lama |
| Minggu 10–11 | Node.js, runtime, package, HTTP | CLI dan mini HTTP server | Menjelaskan apa yang dijalankan Node dan alur request/response |
| Minggu 12–13 | Express, REST API, validasi, logging | `books-api-v1` | CRUD dan error response konsisten, diuji dari spesifikasi |
| Minggu 14–15 | SQL dan koneksi database | API yang menyimpan data | Menulis query CRUD/JOIN dan menjelaskan relasi tabel |
| Minggu 16–17 | Auth, keamanan, backend project | `inventory-api` | Memahami auth/authz, secret, validasi, dan endpoint terproteksi |
| Minggu 18–21 | React dan integrasi full-stack | `inventory-manager` | UI mengambil data API dan menangani loading/error/empty state |
| Minggu 22–23 | TypeScript, testing, production, deployment | Project terstruktur dan terdeploy | Memahami error TypeScript, tes dasar, env, dan log |
| Minggu 24–27 | Workflow AI sebagai partner coding | Fitur dan project yang dibantu AI dengan audit | Mampu review diff, menguji, menolak saran salah, dan menjelaskan kode |
| Minggu 28–32 | Capstone, portofolio, persiapan kerja | 2–3 project yang bisa dijalankan/didemokan | Menambah fitur, memperbaiki bug, menjelaskan arsitektur, dan mempresentasikan project |

Estimasi Roadmap V3.0 adalah sekitar 32 minggu dengan 4–6 jam fokus per hari. Ini estimasi, bukan tenggat wajib. Jika checkpoint belum lulus, ulangi bagian yang lemah daripada sekadar melanjutkan kalender.

---

## 7. Project bertahap sebagai bukti fundamental

Project harus berkembang dari kebutuhan sederhana. Hindari melompat ke stack kompleks tanpa menguasai prasyarat.

### Project 1 — `student-data-cli`

**Konsep:** array, object, function, kondisi, array methods, input/output sederhana.

- [ ] Menyimpan daftar data dalam array object.
- [ ] Menambah, mencari, menampilkan, dan menyaring data.
- [ ] Menggunakan function terpisah untuk setiap tugas.
- [ ] Menangani data kosong atau pencarian yang tidak ditemukan.
- [ ] Menulis contoh tes untuk fungsi utama.
- [ ] Menjelaskan aliran data tanpa AI.

### Project 2 — `todo-dom-v1` / `expense-tracker-v1`

**Konsep:** HTML, CSS, DOM, event, form, validasi, localStorage.

- [ ] User dapat menambah, melihat, mengubah status, dan menghapus item.
- [ ] Input kosong atau invalid ditangani.
- [ ] Tampilan empty state terlihat saat data belum ada.
- [ ] Data tetap ada setelah reload bila memakai localStorage.
- [ ] Kode state, validasi, dan rendering tidak tercampur tanpa alasan.

### Project 3 — `books-api-v1` / `inventory-api`

**Konsep:** Node.js, Express, HTTP, REST, SQL, validasi, error handling.

- [ ] Endpoint CRUD sesuai spesifikasi.
- [ ] Status code dan bentuk error response masuk akal dan konsisten.
- [ ] Data disimpan di database, bukan hanya di memori.
- [ ] Query menggunakan parameter yang aman.
- [ ] Rahasia disimpan di environment variable, bukan source code.
- [ ] README menjelaskan cara menjalankan dan menguji API.

### Project 4 — `inventory-manager` atau capstone

**Konsep:** React, backend, database, auth dasar, tes, deployment, dan workflow AI.

- [ ] Memiliki satu masalah pengguna yang nyata dan ruang lingkup terukur.
- [ ] Fitur inti selesai sebelum menambah fitur tambahan.
- [ ] Loading, empty state, error, dan input invalid ditangani.
- [ ] Punya tes untuk aturan atau fungsi penting.
- [ ] Kode AI direview dan diuji; perubahan dapat dilacak melalui Git.
- [ ] Bisa didemokan dan dijelaskan tanpa bergantung pada AI.

---

## 8. Workflow harian yang akan kupakai

Target normal dari Roadmap V3.0 adalah 4–6 jam fokus, tapi kualitas bukti lebih penting daripada durasi.

### Sesi belajar

1. **Recall — 20–30 menit:** tutup catatan dan tulis apa yang masih diingat.
2. **Learn — 45–75 menit:** pelajari satu konsep, utamakan dokumentasi resmi.
3. **Code — 90–150 menit:** tulis contoh sendiri dari file kosong, kemudian jalankan.
4. **Break/Debug — 45–75 menit:** ubah kode dengan sengaja, temukan bug, tes hipotesis.
5. **Review — 20–30 menit:** perbarui error log, catatan, Git, dan daftar kelemahan.

### Siklus satu konsep

`RETRIEVE → LEARN → BUILD → BREAK → DEBUG → EXPLAIN → APPLY → SPACE`

### Aturan tes prediksi

1. Baca kode dan tulis output yang diprediksi.
2. Tulis alasan, termasuk scope/nilai variabel/alur eksekusi bila relevan.
3. Simpan prediksi terlebih dahulu—jangan mengubahnya sesudah melihat hasil.
4. Jalankan kode dan bandingkan hasil nyata.
5. Tulis perbedaan di error log.
6. Ulangi dengan kasus baru beberapa hari kemudian.

### Bukti minimal per sesi

Usahakan menghasilkan setidaknya dua bukti:

- [ ] Kode baru yang berhasil dijalankan.
- [ ] Satu commit yang bermakna.
- [ ] Entri error log yang spesifik.
- [ ] Hasil mini challenge yang bisa diperiksa.
- [ ] Penjelasan singkat tanpa AI.

---

## 9. Format catatan dan error log

### Catatan konsep

```text
TOPIK:
TANGGAL:
STATUS: NOT STARTED / IN PROGRESS / PRACTICED / MASTERED

1. Apa itu?
2. Kenapa dibutuhkan?
3. Kapan dipakai?
4. Bagaimana cara kerjanya?
5. Sintaks penting:
6. Contoh buatanku:
7. Kasus tepi:
8. Kesalahan yang pernah kubuat:
9. Tiga pertanyaan recall:
10. Mini challenge:
11. Bukti Mastery Gate:
```

### Error log

```text
DATE:
PROJECT / FILE:
ERROR ATAU KESALAHAN:

APA YANG KUKIRA:
PENYEBAB SEBENARNYA:
BUKTI / CARA MENEMUKANNYA:
PERBAIKAN:
PELAJARAN:
CARA MENCEGAHNYA:
```

### Template review mingguan

```text
1. Apa yang benar-benar kupahami tanpa catatan?
2. Apa yang baru terasa familiar?
3. Bug apa yang paling sulit? Bagaimana cara menemukannya?
4. Kode atau fitur apa yang selesai?
5. Apakah aku tetap paham setelah AI ditutup?
6. Adakah saran AI yang salah atau tidak aman?
7. Apa kelemahan paling penting minggu ini?
8. Satu target utama minggu depan:
```

---

## 10. Git sebagai bagian dari cara berpikir

Git bukan sekadar perintah untuk mengirim kode. Git adalah rekam jejak keputusan dan perubahan.

- [ ] Bisa menjelaskan working tree, staging area, commit, branch, dan remote.
- [ ] Bisa memeriksa `git status` sebelum dan sesudah perubahan.
- [ ] Bisa membaca `git diff` sebelum staging/commit.
- [ ] Bisa melakukan `git add` dan `git commit` untuk perubahan yang benar-benar siap.
- [ ] Bisa membaca `git log` untuk mencari perubahan sebelumnya.
- [ ] Bisa membuat dan berpindah branch.
- [ ] Bisa membatalkan perubahan dengan aman dan membedakan `restore` dengan `revert`.
- [ ] Bisa melakukan merge sederhana dan memahami konflik dasar.
- [ ] Bisa push/pull dari remote serta membuka pull request sederhana.
- [ ] Bisa menjelaskan alasan isi commit dan tidak memakai pesan kabur seperti `update`.

Prefix pesan commit yang dipakai:

- `feat:` fitur baru.
- `fix:` memperbaiki bug.
- `docs:` dokumentasi/catatan.
- `refactor:` merapikan kode tanpa mengubah perilaku yang diharapkan.
- `test:` menambah atau mengubah tes.

**Aturan:** jangan commit file kosong untuk terlihat selesai; jangan menggabungkan perubahan tidak terkait dalam satu commit.

---

## 11. Mastery Gate untuk tiap bab

Sebuah topik boleh ditandai `MASTERED` hanya jika semua syarat penting berikut lulus:

- [ ] Aku dapat menjelaskan konsep dengan kata-kataku sendiri: apa, kenapa, kapan, dan bedanya dengan konsep yang mirip.
- [ ] Aku bisa menulis contoh utama dari file kosong tanpa menyalin solusi.
- [ ] Aku mampu menyelesaikan sedikitnya 3 variasi soal tanpa solusi langsung.
- [ ] Aku mampu menemukan dan memperbaiki sedikitnya 2 bug yang relevan.
- [ ] Aku bisa menggunakan konsep di satu bagian project.
- [ ] Recall tanpa catatan minimal 80% benar, termasuk alasan.
- [ ] Aku bisa menemukan dokumentasi yang tepat saat lupa detail.
- [ ] Beberapa hari kemudian, aku tetap bisa menjelaskan atau mereproduksi contoh tersebut.
- [ ] Jika memakai AI, aku dapat menerangkan mana perubahan AI yang diterima/ditolak dan alasannya.

Jika gagal di satu bagian, tulis **bagian yang gagal dan tes ulangnya**. Tidak perlu mengulang semua materi dari nol apabila yang lemah hanya satu subtopik.

---

## 12. Definition of Done untuk kode berbantuan AI

Sebelum fitur atau project dianggap selesai:

- [ ] Kebutuhan dan kriteria keberhasilan ditulis dengan jelas.
- [ ] Kode memenuhi kriteria keberhasilan, bukan hanya terlihat rapi.
- [ ] Kasus normal dan kasus gagal sudah dipikirkan.
- [ ] Kode sudah dijalankan; tes relevan sudah lulus.
- [ ] `git diff` sudah dibaca dan perubahan tak terduga sudah diperiksa.
- [ ] Tidak ada secret atau data sensitif yang tidak seharusnya masuk repository/prompt.
- [ ] Error yang masuk akal ditangani.
- [ ] Nama variabel, function, dan struktur file bisa dipahami.
- [ ] README atau catatan diperbarui bila cara menjalankan/pakai berubah.
- [ ] Aku bisa menjelaskan perubahan setelah AI ditutup.
- [ ] Aku bisa memperbaiki bug kecil atau menambah satu variasi tanpa meminta AI membuat ulang semuanya.
- [ ] Perubahan tersimpan dalam commit yang bermakna.

---

## 13. Scorecard kemajuan

Perbarui bagian ini setiap akhir minggu, bukan setiap kali merasa berhasil.

| Area | Level sekarang | Bukti terakhir | Target selanjutnya | Status |
|---|---:|---|---|---|
| Array dan object dasar | 2 (baseline V3.0) | Latihan `day01.js` menurut roadmap | 3: debugging variasi | IN PROGRESS |
| `let`/`const`/`var` dan scope | 1 (baseline V3.0), diperkuat latihan | Prediksi scope dan shadowing pada 12 Okt | Ulang prediksi baru, tulis dari file kosong | IN PROGRESS |
| Reference, mutation, copy | 1 (baseline V3.0), diperkuat latihan | `const`, `push`, `b = a`, reassign | Uji spread/shallow copy dan nested object | IN PROGRESS |
| Error dan try/catch | 1 (baseline V3.0), diperkuat latihan | Error yang ditangkap dan alur setelah `catch` | Bedakan syntax/runtime/logic + async error | IN PROGRESS |
| Array methods | Belum dibuktikan | Belum ada checkpoint terbaru | `map`, `filter`, `find`, `some`, `every`, `reduce` | NOT STARTED / RETEST |
| Function/callback/closure | Belum dibuktikan | Belum ada checkpoint terbaru | Tulis function dari nol dan gunakan callback | NOT STARTED |
| HTML/CSS/DOM | Belum diuji di sesi terbaru | Belum ada checkpoint terbaru | Halaman responsif, lalu `todo-dom-v1` | NOT STARTED |
| Async/fetch/HTTP | Belum diuji di sesi terbaru | Belum ada checkpoint terbaru | Fetch API dengan loading/error state | NOT STARTED |
| Node/Express/SQL | Belum diuji di sesi terbaru | Roadmap menempatkannya di tahap berikut | API CRUD dengan database | NOT STARTED |
| React/TypeScript | Belum diuji di sesi terbaru | Roadmap menempatkannya di tahap berikut | Full-stack UI dan tipe dasar | NOT STARTED |
| Git dasar | 2 (baseline V3.0) | Repo dan commit menurut roadmap | 3: diff, branch, restore/revert | IN PROGRESS |
| Workflow coding dengan AI | Belum ada Mastery Gate | Latihan prediksi, belum audit project penuh | Spesifikasi → tes → AI → review diff → uji | IN PROGRESS |

> Catatan: status "belum diuji" bukan berarti pasti tidak tahu sama sekali. Artinya kemampuan itu belum didukung bukti yang cukup dalam penilaian ini.

---

## 14. Target 7 hari terdekat

Fokus awal bukan memperbanyak teknologi. Fokusnya menstabilkan JavaScript dasar yang baru dilatih.

### Target A — Scope dan variabel

- [ ] Buat 10 soal prediksi baru yang melibatkan `let`, `const`, `var`, nested block, assignment, dan shadowing.
- [ ] Untuk setiap soal, tulis output **dan alasan** sebelum menjalankan kode.
- [ ] Setelah menjalankan, catat hanya kesalahan yang benar-benar terjadi.
- [ ] Tulis dari file kosong satu contoh untuk block scope, function scope, dan shadowing.

### Target B — Mutation, reference, dan copy

- [ ] Bandingkan `const b = a` dengan `const b = [...a]`.
- [ ] Uji mutasi array melalui `push()`.
- [ ] Uji assignment/reassign variabel `const`.
- [ ] Uji shallow copy pada array yang berisi object.
- [ ] Jelaskan perbedaan mutation, reassign, reference, dan copy tanpa melihat catatan.

### Target C — Error dan debugging

- [ ] Buat satu contoh syntax error, runtime error, dan logic error.
- [ ] Perbaiki masing-masing tanpa meminta AI menulis ulang seluruh file.
- [ ] Buat satu contoh error yang ditangani `try/catch`.
- [ ] Prediksi baris mana yang tetap berjalan setelah error dan buktikan dengan output.

### Target D — Bukti kerja

- [ ] Perbarui `weak-concept.md` dengan tiga konsep yang paling lemah.
- [ ] Perbaiki `error-log.md` dengan format yang jelas dan tanpa duplikasi.
- [ ] Simpan soal prediksi dan hasil aktual di file terpisah.
- [ ] Commit hasil yang sudah diuji dengan pesan yang tepat.

**Lulus target 7 hari:** bukan berarti semua JavaScript sudah dikuasai. Artinya scope, reference/mutation, dan error flow sudah lebih konsisten sehingga masuk akal melanjutkan ke array methods dan function.

---

## 15. Aturan yang tidak boleh dilanggar

1. **Jangan menghitung membaca tutorial sebagai mastery.** Mastery perlu bukti.
2. **Jangan menyalin kode yang tidak bisa dijelaskan.** Pelajari atau pecah menjadi bagian kecil terlebih dahulu.
3. **Jangan berasumsi jawaban AI selalu benar.** Periksa dokumentasi, tes, dan konteks versi.
4. **Jangan menyembunyikan kesalahan dari catatan.** Error log adalah peta kelemahan, bukan nilai rapor.
5. **Jangan mengejar framework sebelum fondasi.** Pelajari alat berikutnya saat prasyarat dan project membutuhkannya.
6. **Jangan menyamakan cepat selesai dengan paham.** Selesaikan dengan benar, bisa diperbaiki, dan bisa dijelaskan.
7. **Jangan berusaha menghafal semua hal.** Latih kemampuan mencari informasi yang tepat dan menilainya.
8. **AI adalah alat bantu, bukan pemilik keputusan teknis.** Aku tetap bertanggung jawab pada kode yang dibuat dan dikirim.

---

## 16. Pernyataan target pribadi

> Aku ingin menjadi developer yang mampu menggunakan AI untuk mempercepat pekerjaan, bukan untuk menggantikan pemahamanku. Aku akan membuktikan kemampuan melalui kode yang berjalan, tes yang relevan, debugging, Git yang tertata, dan kemampuan menjelaskan setiap keputusan penting. Aku tidak akan menandai materi selesai hanya karena pernah melihat solusinya.

**Prinsip akhir:** *Prompt yang bagus membantu AI memahami tugasku. Fundamental yang kuat membantuku menilai apakah jawaban AI benar.*
