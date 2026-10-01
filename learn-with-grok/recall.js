//!soal 1
//?Apa beda Array dan Object? Kapan pakai yang mana?
//* array digunakan untuk menampilkan data secara berderet kalau aku sih menganalogikannya seperti etalase sepatu di toko. jadi ada jenis sepatu dan harga. kalau object itu penjelasan mendetail dari 1 data misalnya di rak sepatu ada 20 jenis sepatu, nah object itu mengambil 1 sepatu dan memberikan detail seperti material sepatu, tanggal produksi, diproduksi dimana, warna, dan spek lainnya
//?Apa beda const, let, dan var soal scope?
//*const itu nilai tetap yang tidak pernah bisa berubah ketika program berjalan. dan jika nilai dari const ini dipaksa diubah dari nilai awal, maka akan error. let itu ibarat kotak kardus kosong yang nilainya bisa diubah ubah dan berbeda dengan const yang ibaratnya kotak baja yang isinya tidak bisa berubah ketika program berjalan. var itu kayak let tpi dari sepengetahunku sekarang jarang atau tidak ada developer memakai let

//!soal 2
/*
a. Buat array berisi 5 angka.
b. Tambah 1 angka di akhir dan hapus 1 angka dari awal.
c. Buat object `user` dengan properti name, age, dan hobbies (array).
d. Tampilkan hobi kedua milik user.
e. Tambah properti baru `city` ke user, lalu hapus properti `age`.
*/

const arr = [2, 3, 4, 5.6];

let user = {
  name: "miko",
  hobbies: ["lari kalcer", "belajar computer", "coding"],
  city: "trenggalek",
};

console.log(arr[0]);
console.log(user);

//!Soal 3 (bug). Jelaskan sebelum menjalankannya: apa output kode ini, dan kenapa?
const nums = [1, 2, 3];
const copy = nums;
copy.push(4);
console.log(nums);

const user = { name: "Miko" };
user.name = "Budi";
console.log(user.name);

//* copy.push akan menambahkan angka 4 ke dalam array nums.
//*user.name error karna menggunakan variabel const dan datanya diganti menjadi budi, A1 bakal error..
