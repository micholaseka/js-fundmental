//*CEK PREDIKAT
//Latihan logika if else serta penggunaan function
//membuat aturan nilai tidak boleh lebih dari 100 atau kurang dari 0.
function hitungPredikat(siswa, nilaiUjian) {
  if (nilaiUjian > 100 || nilaiUjian < 0) {
    return "masukkan angka valid 0-100";
    //jika nilai lebih atau sama dengan 85 = predikat A.
  } else if (nilaiUjian >= 85) {
    return `${siswa} mendapatkan predikat A.`;
    //jika nilai lebih atau sama dengan 70 = predikat B.
  } else if (nilaiUjian >= 70) {
    return `${siswa} mendapatkan predikat B.`;
    //jika nilai lebih atau sama dengan 55 = predikat C.
  } else if (nilaiUjian >= 55) {
    return `${siswa} mendapatkan predikat C.`;
    //jika semua kemungkingan false (dibawah 55) maka peringkat D (TIDAK LULUS).
  } else {
    return `${siswa} mendapat predikat D (TIDAK LULUS)`;
  }
}

const siswaA = hitungPredikat("miko", 86);
const siswaB = hitungPredikat("paijo", 56);

console.log(siswaA);
console.log(siswaB);
