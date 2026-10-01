//?jawaban untuk soal 2a-2e
const nums = [1, 2, 3, 4, 5];
const z = nums; //membuat variabel baru yang mengambil data dari nums.

z.push(6); // b berperan seperti jembatan penghubung ke nums, karna b mengambil nilai dari nums secara realtime.
console.log(nums);
z.shift(0);
console.log(nums);

let user = {
  name: "miko",
  age: 18,
  hobbies: ["open vscode", "badminton", "lari kalcer"],
};

console.log(user.hobbies[1]);

user.city = "trenggalek";

console.log(user);

delete user.age; //untuk menghapus property didalam object bisa menggunakan delete objek.property;

console.log(user);

//?jawaban untuk soal 3
//saat copy di push nums ikut berganti karna copy mengambil data dari nums/ copy itu terhubung dengan nums

//?prediksi output sebelum menjalankan.
/*outputnya
1
2
1,2,3
error karna mengubah nilai dari property const x:1 menjadi x:2, dan stelah kujalankan ternyata error nya lebih awal di q
*/
if (true) {
  var p = 1;
  let q = 2;
}
console.log(p);
console.log(q);

const a = [1, 2];
const b = [...a];
b.push(3);
console.log(a);

const c = { x: 1 };
c = { x: 2 };
console.log(c);
