# Rangkuman Belajar JavaScript

**Materi: Fungsi, Array, Perulangan, Akumulasi, Scope, dan Kondisi**

## 1. Fungsi: `return` vs `console.log()`

Fungsi adalah kumpulan instruksi yang bisa kita panggil untuk melakukan pekerjaan tertentu.

Contoh:

```js
function hitung(a, b) {
  const hasil = a + b;
  return hasil;
}

const nilai = hitung(5, 3);

console.log(nilai);
```

Output:

```text
8
```

### Perbedaan `return` dan `console.log()`

**`console.log()`**

- Digunakan untuk menampilkan informasi di console.
- Tidak otomatis mengembalikan nilai kepada pemanggil fungsi.

**`return`**

- Mengembalikan nilai dari fungsi.
- Nilai yang dikembalikan bisa disimpan dalam variabel atau digunakan dalam perhitungan lain.
- Ketika `return` dijalankan, fungsi langsung selesai.

Contoh:

```js
function contoh() {
  const hasil = 10;
  console.log(hasil);
}

const nilai = contoh();

console.log(nilai);
```

Output:

```text
10
undefined
```

Mengapa ada `undefined`?

Karena fungsi `contoh()` tidak memiliki `return`. Fungsi tersebut menampilkan `10`, tetapi tidak mengembalikan nilai kepada variabel `nilai`.

### Kesimpulan

Gunakan `console.log()` jika ingin menampilkan informasi.

Gunakan `return` jika ingin mengembalikan hasil agar bisa digunakan kembali oleh bagian program lain.

---

## 2. Parameter dan Argumen Fungsi

Parameter adalah nama variabel yang ditulis saat membuat fungsi.

Argumen adalah nilai yang diberikan saat memanggil fungsi.

Contoh:

```js
function jumlahkan(a, b) {
  return a + b;
}

console.log(jumlahkan(10, 20));
```

Pada contoh tersebut:

- `a` dan `b` adalah parameter.
- `10` dan `20` adalah argumen.
- Hasilnya adalah `30`.

### Bagaimana jika argumennya kurang?

```js
function jumlahkan(a, b, c) {
  return a + b + c;
}

console.log(jumlahkan(10, 20));
```

Output:

```text
NaN
```

Mengapa?

Parameter `c` tidak menerima nilai sehingga bernilai `undefined`. Ketika angka dijumlahkan dengan `undefined`, hasilnya menjadi `NaN` (*Not-a-Number*).

Kita bisa memberikan nilai default:

```js
function jumlahkan(a, b, c = 0) {
  return a + b + c;
}

console.log(jumlahkan(10, 20));
```

Output:

```text
30
```

Karena `c` memiliki nilai default `0`.

**Catatan:** Parameter default digunakan ketika argumen tidak diberikan atau nilainya `undefined`. Jika nilainya `null`, nilai default tidak otomatis digunakan.

---

## 3. Objek: Menyimpan Data yang Saling Berkaitan

Objek digunakan untuk menyimpan beberapa informasi dalam satu kelompok.

Contoh:

```js
const keyboard = {
  nama: "Keyboard",
  harga: 150000,
  jumlah: 2,
};
```

Objek tersebut mempunyai tiga properti:

- `nama`
- `harga`
- `jumlah`

Kita dapat mengambil nilainya menggunakan notasi titik:

```js
console.log(keyboard.nama);
console.log(keyboard.harga);
console.log(keyboard.jumlah);
```

Output:

```text
Keyboard
150000
2
```

### Menghitung subtotal

Rumus subtotal:

**Subtotal = Harga × Jumlah**

```js
function hitungSubtotal(barang) {
  const hasil = barang.harga * barang.jumlah;
  return hasil;
}

console.log(hitungSubtotal(keyboard));
```

Output:

```text
300000
```

Fungsi tersebut bisa digunakan untuk objek lain yang memiliki properti `harga` dan `jumlah`.

Contoh:

```js
const mouse = {
  nama: "Mouse",
  harga: 80000,
  jumlah: 1,
};

console.log(hitungSubtotal(mouse));
```

Output:

```text
80000
```

**Kesimpulan:** Fungsi membuat kode lebih mudah digunakan kembali karena kita tidak perlu menulis ulang rumus untuk setiap barang.

---

## 4. Array: Menyimpan Banyak Data

Array digunakan untuk menyimpan kumpulan nilai dalam satu variabel.

Contoh:

```js
const angka = [10, 20, 30];
```

Setiap elemen mempunyai indeks yang dimulai dari `0`.

| Indeks | Nilai |
| -----: | ----: |
|      0 |    10 |
|      1 |    20 |
|      2 |    30 |

Mengakses elemen:

```js
console.log(angka[0]); // 10
console.log(angka[1]); // 20
console.log(angka[2]); // 30
```

Jika kita mengakses indeks yang tidak memiliki elemen:

```js
console.log(angka[3]);
```

Output:

```text
undefined
```

### Properti `length`

`length` digunakan untuk mengetahui jumlah elemen dalam array.

```js
console.log(angka.length);
```

Output:

```text
3
```

Indeks terakhir adalah `angka.length - 1`, bukan `angka.length`.

---

## 5. Perulangan `for`

Perulangan digunakan untuk menjalankan instruksi berulang kali.

Contoh:

```js
const angka = [5, 10, 15, 20];

for (let i = 0; i < angka.length; i++) {
  console.log(angka[i] * 2);
}
```

Output:

```text
10
20
30
40
```

### Memahami bagian-bagian `for`

```js
for (let i = 0; i < angka.length; i++) {
  // Instruksi yang diulang
}
```

Ada tiga bagian penting:

1. `let i = 0` — membuat penghitung yang dimulai dari indeks `0`.
2. `i < angka.length` — menentukan apakah perulangan boleh dilanjutkan.
3. `i++` — menaikkan nilai `i` sebanyak `1` setiap putaran.

### Mengapa menggunakan `<`, bukan `<=`?

Jika array mempunyai tiga elemen, indeksnya adalah `0`, `1`, dan `2`.

Dengan kondisi:

```js
i < angka.length
```

Perulangan berhenti ketika `i` mencapai `3`.

Namun, jika menggunakan:

```js
i <= angka.length
```

Perulangan akan mencoba mengakses indeks `3`, padahal elemen tersebut tidak ada.

Akibatnya, akses `angka[3]` menghasilkan `undefined`.

**Kesimpulan:** Untuk menelusuri seluruh elemen array dari indeks `0`, pola umum yang digunakan adalah `i < array.length`.

---

## 6. Akumulasi: Mengumpulkan Nilai Secara Bertahap

Akumulasi adalah proses mengumpulkan nilai sedikit demi sedikit, misalnya untuk menghitung total belanja.

Contoh:

```js
const angka = [10, 20, 30];

let total = 0;

for (let i = 0; i < angka.length; i++) {
  total = total + angka[i];
}

console.log(total);
```

Output:

```text
60
```

### Bagaimana prosesnya?

Pada awalnya:

```js
let total = 0;
```

Nilai `total` dimulai dari `0`.

Kemudian perulangan berjalan:

| Putaran | Angka yang diambil | Perhitungan | Nilai total |
| ------- | -----------------: | ----------- | ----------: |
| Awal    |                  — | —           |           0 |
| 1       |                 10 | 0 + 10      |          10 |
| 2       |                 20 | 10 + 20     |          30 |
| 3       |                 30 | 30 + 30     |          60 |

### Mengapa harus menggunakan nilai `total` sebelumnya?

Perhatikan perbedaan berikut.

**Cara pertama:**

```js
total = total + angka[i];
```

Nilai sebelumnya ditambah dengan angka yang baru. Hasilnya disimpan kembali ke `total`.

**Cara kedua:**

```js
total = angka[i];
```

Nilai sebelumnya diganti dengan angka yang baru.

Jika menggunakan cara kedua, nilai akhir `total` adalah `30`, karena angka terakhir dalam array adalah `30`.

### Analogi sederhana

Bayangkan `total` adalah celengan.

- Awalnya berisi Rp0.
- Kamu memasukkan Rp10.
- Kemudian memasukkan Rp20.
- Lalu memasukkan Rp30.

Uang di dalam celengan menjadi Rp60.

Jika setiap kali kamu memasukkan uang baru justru mengosongkan celengan sebelumnya, kamu hanya akan memiliki uang dari setoran terakhir, yaitu Rp30.

**Kesimpulan:** Untuk menghitung total, kita harus mempertahankan nilai sebelumnya dan menambahkan nilai baru.

---

## 7. `let` dan `const`

Keduanya digunakan untuk mendeklarasikan variabel, tetapi memiliki perbedaan.

### `let`

Nilainya boleh diberi nilai baru.

```js
let uang = 0;

uang = uang + 10000;

console.log(uang);
```

Output:

```text
10000
```

### `const`

Variabel tidak boleh diberi nilai baru setelah dideklarasikan.

```js
const uang = 0;

uang = 10000;
```

Kode tersebut menghasilkan `TypeError` karena kita mencoba mengubah nilai yang diikat oleh `const`.

### Kapan menggunakan masing-masing?

Gunakan `let` jika variabel perlu diperbarui, misalnya:

```js
let totalBelanja = 0;
```

Total belanja berubah setiap kali subtotal barang ditambahkan.

Gunakan `const` jika variabel tidak perlu diberi nilai baru, misalnya:

```js
const barang = barangBelanja[i];
const subtotal = barang.harga * barang.jumlah;
```

Dalam contoh tersebut, `barang` dan `subtotal` dibuat untuk menyimpan hasil yang digunakan pada putaran saat itu.

**Catatan penting:** `const` tidak membuat isi objek atau array menjadi sepenuhnya tidak bisa diubah. Yang tidak boleh dilakukan adalah memberikan nilai baru kepada variabelnya.

---

## 8. Scope: Jangkauan Variabel

Scope menentukan bagian kode tempat suatu variabel bisa diakses.

Variabel yang dideklarasikan menggunakan `let` atau `const` di dalam suatu blok `{ }` hanya dapat diakses di dalam blok tersebut, kecuali ada aturan lain yang berlaku.

Contoh:

```js
if (true) {
  const subtotal = 300000;
  console.log(subtotal);
}
```

Output:

```text
300000
```

Namun, jika kita menulis:

```js
if (true) {
  const subtotal = 300000;
}

console.log(subtotal);
```

JavaScript menghasilkan `ReferenceError` karena `subtotal` tidak bisa diakses dari luar blok `if`.

### Analogi ruangan

Bayangkan blok `{ }` sebagai sebuah ruangan.

Variabel yang dibuat di dalam ruangan hanya bisa digunakan di ruangan tersebut.

Jika kita mencoba mengakses variabel itu dari luar, JavaScript tidak bisa menemukannya dalam scope tersebut.

### Bagaimana jika variabel dibuat di luar blok?

```js
let subtotal = 0;

if (true) {
  subtotal = 300000;
}

console.log(subtotal);
```

Output:

```text
300000
```

Karena `subtotal` dibuat di luar blok `if`, variabel tersebut dapat diakses di luar blok dan nilainya bisa diperbarui karena menggunakan `let`.

### Catatan tambahan

Jika kondisi `if` tidak terpenuhi, isi blok tidak dijalankan.

Contoh:

```js
let subtotal = 0;

if (false) {
  subtotal = 300000;
}

console.log(subtotal);
```

Output:

```text
0
```

Nilai `subtotal` tetap `0` karena perintah untuk mengubahnya tidak dijalankan.

---

## 9. Kondisi `if`

`if` digunakan untuk menjalankan kode berdasarkan suatu kondisi.

Contoh:

```js
const jumlah = 2;

if (jumlah > 0) {
  console.log("Barang tersedia");
}
```

Karena `2 > 0` bernilai `true`, output-nya:

```text
Barang tersedia
```

Jika kondisinya salah, isi blok dilewati.

Contoh:

```js
const jumlah = 0;

if (jumlah > 0) {
  console.log("Barang tersedia");
}
```

Tidak ada output karena kondisi `0 > 0` bernilai `false`.

`if` dapat digunakan dalam aplikasi kasir untuk memeriksa apakah jumlah barang lebih dari nol sebelum melakukan perhitungan tertentu.

---

## 10. Menggabungkan Materi untuk Aplikasi Kasir

Sekarang kita gabungkan konsep array, objek, perulangan, perkalian, dan akumulasi.

```js
const barangBelanja = [
  { nama: "Keyboard", harga: 150000, jumlah: 2 },
  { nama: "Mouse", harga: 80000, jumlah: 1 },
  { nama: "Headset", harga: 200000, jumlah: 1 },
];

let totalBelanja = 0;

for (let i = 0; i < barangBelanja.length; i++) {
  const barang = barangBelanja[i];
  const subtotal = barang.harga * barang.jumlah;

  console.log(barang.nama + ": Rp" + subtotal);

  totalBelanja = totalBelanja + subtotal;
}

console.log("Total belanja: Rp" + totalBelanja);
```

Output:

```text
Keyboard: Rp300000
Mouse: Rp80000
Headset: Rp200000
Total belanja: Rp580000
```

### Memahami alur program

1. Array menyimpan beberapa barang.
2. Perulangan mengambil barang satu per satu.
3. Variabel `barang` menyimpan objek barang yang sedang diproses.
4. Variabel `subtotal` menghitung harga dikali jumlah.
5. `console.log()` menampilkan nama dan subtotal barang.
6. `totalBelanja` mengumpulkan seluruh subtotal.
7. Setelah perulangan selesai, total belanja ditampilkan.

### Mengapa `console.log()` berada di dalam perulangan?

Karena kita ingin menampilkan setiap barang satu per satu.

### Mengapa `console.log()` total berada di luar perulangan?

Karena kita ingin menampilkan total akhir setelah semua barang selesai diproses.

### Mengapa `totalBelanja` dideklarasikan di luar perulangan?

Agar nilai total tetap tersedia dan bisa diakumulasikan selama perulangan berjalan.

Jika variabel tersebut dideklarasikan menggunakan `let` di dalam blok perulangan, variabel itu tidak dapat diakses dari luar blok untuk menampilkan hasil akhirnya.

---

## 11. Kesalahan yang Perlu Diwaspadai

| Kesalahan                                                                            | Akibat                                          |
| ------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Menggunakan `console.log()` tanpa `return` saat hasil fungsi perlu digunakan kembali | Pemanggil fungsi menerima `undefined`           |
| Mengakses indeks array yang tidak ada                                                | Menghasilkan `undefined`                        |
| Menggunakan `<=` pada kondisi perulangan array secara tidak tepat                    | Bisa mencoba mengakses indeks di luar array     |
| Menggunakan `total = angka[i]` saat ingin menjumlahkan seluruh angka                 | Nilai sebelumnya tertimpa                       |
| Mengakses variabel dari luar scope-nya                                               | Menghasilkan `ReferenceError`                   |
| Mengubah nilai variabel `const`                                                      | Menghasilkan `TypeError`                        |
| Menggunakan parameter yang tidak diberi nilai tanpa penanganan                       | Bisa menghasilkan `NaN` dalam perhitungan angka |

---

## 12. Checklist Sebelum Menerapkan Materi ke `cashier.js`

Sebelum menulis kode, pastikan kamu dapat menjawab pertanyaan berikut.

- [ ] Apa perbedaan `return` dan `console.log()`?
- [ ] Apa perbedaan parameter dan argumen?
- [ ] Bagaimana cara mengambil properti dari objek?
- [ ] Bagaimana cara mengambil elemen array menggunakan indeks?
- [ ] Mengapa perulangan menggunakan `i < array.length`?
- [ ] Bagaimana cara menghitung subtotal?
- [ ] Mengapa variabel total perlu mempertahankan nilai sebelumnya?
- [ ] Kapan sebaiknya menggunakan `let` dan kapan menggunakan `const`?
- [ ] Apa yang dimaksud dengan scope?
- [ ] Mengapa variabel di dalam blok tidak selalu dapat diakses dari luar?
- [ ] Bagaimana cara menggunakan `if` untuk memeriksa kondisi?

### Target praktik

Buat program kasir sederhana yang mampu:

1. Menyimpan beberapa barang dalam array.
2. Mengambil barang satu per satu menggunakan perulangan.
3. Menghitung subtotal setiap barang.
4. Menampilkan nama barang dan subtotalnya.
5. Menghitung total belanja menggunakan akumulasi.
6. Menampilkan total belanja setelah seluruh barang selesai diproses.

**Aturan belajar:** Cobalah menulis kode sendiri sebelum melihat contoh. Jika terjadi error, baca pesannya, cari baris yang bermasalah, dan coba pahami penyebabnya. Error adalah informasi untuk membantu proses belajar, bukan sekadar sesuatu yang harus dihilangkan.

Setelah selesai, jalankan program, periksa hasilnya, lalu commit dan push ke GitHub agar kode tersebut bisa ditinjau.
