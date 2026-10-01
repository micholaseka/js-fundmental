//?prediksi output sebelum menjalankan.
if (true) {
  var p = 1;
  let q = 2;
}
console.log(p); //output 1
console.log(q); //error di variabel q referenceError karna let terikat block.

const a = [1, 2];
const b = [...a]; //tidak mengambil refrensi dari a. tapi membuat array baru.
b.push(3);
console.log(a);
//output console.log a adalah 1,2 karna ...a membuat array baru, bukan refrensi ke a.

const c = { x: 1 };
c = { x: 2 };
console.log(c); // error karna mengganti variabel c ke object baru
