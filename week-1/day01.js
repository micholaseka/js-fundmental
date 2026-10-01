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
