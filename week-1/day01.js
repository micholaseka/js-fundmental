//?jawaban untuk soal 2a-2e
const nums = [1, 2, 3, 4, 5];
const z = nums; //membuat variabel baru yang mengambil data dari nums.

z.push(6); // z menggunakan array yang sama dengan nums. jadi 1 array dipakai 2 variabel.
console.log(nums);
z.shift(); // sebelumnya z.shift(0) tapi yang benar () tanpa nomor index karna memang tidak dibutuhkan.
console.log(nums);

let user = {
  name: "miko",
  age: 18,
  hobbies: ["open vscode", "badminton", "lari kalcer"],
};

console.log(user.hobbies[1]); //output badminton

user.city = "trenggalek"; // menambahkan object city ke user.

console.log(user); // output name,age,hobbies,city.

delete user.age; //untuk menghapus property didalam object bisa menggunakan delete objek.property;

console.log(user);

//?jawaban untuk soal 3
//saat copy di push nums ikut berganti karna copy mengambil data dari nums/ copy itu terhubung dengan nums
