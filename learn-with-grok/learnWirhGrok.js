// ==================== ARRAY ====================

const listBuah = [
  { nama: "anggur", harga: 10000, stok: 20, restock: false },
  { nama: "matoa", harga: 12000, stok: 40, restock: false },
  { nama: "blimbing", harga: 11000, stok: 4, restock: true },
  { nama: "melon", harga: 15000, stok: 20, restock: true },
  { nama: "semangka", harga: 14000, stok: 20, restock: false },
];

const listToko = [
  {
    nama: "Warung Maksri",
    alamat: "Tekol",
    jamBuka: "08:00-21:00",
    sudahDibungkus: true,
  },
  {
    nama: "Toko Polang",
    alamat: "Kalitelu",
    jamBuka: "24 jam",
    sudahDibungkus: true,
  },
  { nama: "Mburipom", alamat: "Bolo", jamBuka: "24 jam", sudahDibungkus: true },
];

const listSupplier = [
  {
    nama: "Bamabang Buah",
    lokasi: "Blitar",
    jamBuka: "24 jam",
    hargaPerKg: 10000,
    siapAntar: true,
  },
  {
    nama: "Toko I Walk Teampeak",
    lokasi: "Karangrejo",
    jamBuka: "08:00-21:00",
    hargaPerKg: 10000,
    siapAntar: true,
  },
];

// ==================== OBJECT ====================

const buahProses = {
  nama: "blimbing",
  harga: 11000,
  hargaPerKg: 10000,
  sudahDibungkus: true,
};

const tokoHariIni = {
  nama: "Warung Maksri",
  alamat: "Tekol",
  jamBuka: "08:00-21:00",
  sudahDibungkus: true,
};

// ==================== PENJELASAN ====================

console.log("Ini adalah struktur data usaha buah kami.");

console.log(
  "Array listBuah berisi daftar semua buah yang dijual beserta harga dan stok.",
);
console.log("Array listToko berisi daftar toko yang akan kami antar buah.");
console.log("Array listSupplier berisi data supplier buah yang kami beli.");
console.log(
  "Object buahProses digunakan untuk menyimpan detail buah yang sedang diproses.",
);
console.log(
  "Object tokoHariIni menyimpan detail toko yang akan kami antar hari ini.",
);

console.log(
  "Struktur ini sangat membantu karyawan baru memahami seluruh proses usaha kami dalam satu tempat.",
);
console.log(
  "Kita bisa mengelola stok dan restock dengan mudah hanya dengan mengubah nilai di object.",
);
console.log(
  "Tidak perlu lagi menjelaskan ulang setiap kali ada karyawan baru atau ada masalah.",
);
