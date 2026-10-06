_salah_:
aku kira const mengunci isi object,

_penyebab_:
karna let terikat function

_yang benar_:
let dan const itu terikat object, sedangkan var itu terikat function. jadi ketika disebuah function ditempatkan let/ const, maka akan error.

---

_salah_:
tebak console.log(q) hasilnya 2.

_penyebab_:
karna let q = 2 terikan block {}

_yang benar_:
variabel yang bisa terikat block itu var, sedangkan let dan const tidak.

---

_salah_:
pakai nama user 2 kali di 1 file.

_penyebab_:
karna lupa.

_yang benar_:
nama dari variabel tidak boleh sama, misal menulis user0 maka selanjutnya tidak bisa membuat variabel bernama user0 lagi. harus beda misalnya user1.

---

_salah_:
menebak console.log(a) hasilnya 1,2,3

_penyebab_:
karna aku mengira const b mengambil refrence dari const a

_yang benar_:
const b = [...a]; tidak mengambil refrence dari a, tetapi membuat array baru. jadi output dari console.log a adalah 1,2
