miko, 1 oct 2026.

# KESALAHPAHAMAN TENTANG CONST.

"const itu nilainya tidak bisa berubah" ternyata salah.
const itu mengunci variabenya, **bukan isinya**. variabel const itu **tidak bisa diarahkan ke nilai lain**, tapi kalau isinya array atau object tetap bisa diubah isinya.
_analogi_
const itu seperti laci yang dipaku sangat kuat dan tidak bisa dipindahkan, aku tidak bisa memindahkan laci itu ke meja lain, tapi aku bisa mengutak ngatik isi dari laci itu.

```javascript
const tas = { warna: "hitam" };
tas.warna = "merah"; // boleh: mengubah isi
// tas = { warna: "biru" };  // error: mengganti isi label
```

---

# KESALAHPAHAMAN SCOPE

scope itu tentang dimana variabel itu bisa diakses. jadi scope itu kaya sebuah kurungan yang membatasi pergerakan dari property hanya ada pada 1 variabel jdi tidak bocor kemana mana.
let dan const terikat pada block {} dan var terikat pada function. jadi isi dari variabel let dan const itu tidak bisa bocor dari scope atau kurungan yang sudah dibuat. sedangkan var bisa bocor ke luar karna tidak dikurung.
alasan developer jarang menggunakan var karna scope yang membingungkan itu.

---

# KESALAHPAHAMAN ARRAY DAN OBJECT

- array itu diakses melewati urutan (index): arr[0].
  array berfungsi menyimpan data. yang diakses menggunakan angka index yang dimulai dari 0.
- object diakses lewat nama key: variabel.property/ user.name .
  object juga sama untuk menyimpan data tapi menggunakan data yang memakai nama/atribut. misal timbang mbedek mbedek ongko index mending langsung ae gae kata kunci seng jelas misale user.nama, user.age dll.
  ibarat nek katalog mobil, mending langsung gae mobil.warna timbang nebak nebak nomor index mek gae pengen roh warnane.

  kesimpulane array dipake gae daftar data item seng sama/ sejenis dan butuh berurutan. object dipake ketika mendeskripsikan object nyata dengan berbagai atribut didalamnya, misale ya kaya user.nama, user.age, user.hobby . mobil.merk, mobil.warna, mobil.harga .

penggabungan array of object.
_analogi_
koyo daftar kontak hp. ddi isine enek nama nama ne kontak (array), nah setiap kontak kwi punya detail nomor hp, email, alamat (object).

contoh code:

```javascript
// Array besar yang berisi 3 Object produk
const keranjangBelanja = [
  { produk: "Sepatu Lari", harga: 500000, jumlah: 1 },
  { produk: "Kaos Polos", harga: 750000, jumlah: 2 },
  { produk: "Kaos Kaki", harga: 25000, jumlah: 3 },
];

// 1. Mengakses data produk pertama (indeks 0)
console.log(keranjangBelanja[0].produk);
// Output: Sepatu Lari

// 2. Mengakses harga dari produk kedua (indeks 1)
console.log(keranjangBelanja[1].harga);
// Output: 750000
```

# KESALAHPAHAMAN SALINAN DAN REFRENSI

```javascript
const nums = [1, 2, 3];
const copy = nums;
copy.push(4);
console.log(nums);

const user = { name: "Miko" };
user.name = "Budi";
console.log(user.name);
```

kenapa copy.push menambahkan angka ke nums?
karna copy memakai refrensi array yang sama dengan nums.
