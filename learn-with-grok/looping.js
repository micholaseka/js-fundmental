//*PERULANGAN FOR DAN WHILE

//todo:PERULANGAN MENGGUNAKAN FOR |

//membuat sebuah logika agar target sampai angka 10
//! variabel dan logika untuk menjalankan 1-10 langsung ditaruh di header().
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    return `Angka ${i} adalah genap.`;
  } else {
    return `angka ${i} adalah ganjil.`;
  }
}

//todo: PERULANGAN MENGGUNAKAN WHILE

let x = 10;

while (x > 0) {
  return `Hitung mundur: ${x}`;
  x--;
}

return "roket meluncurr";
