const keyboard = {
  nama: "Keyboard",
  harga: 150000,
  jumlah: 1,
};

function hitungSubtotal(barang) {
  const hasil = barang.harga * barang.jumlah;
  return hasil;
}
