// console.log("Sebelum pembanding")
// if(1+1 === 2){
//     console.log('Perhitungannya masih betul');
// }
// console.log('setelah pembanding');

// let angka = Math.random();
// console.log(angka);


//----------------------------------------------------  if statement
// if(angka >= 0.5){
//     console.log("Angka lebih besar dari 0,5");
// }
// if(angka <= 0.5){
//     console.log("Angka lebih kecil dari 0,5");
// }


// ---------------------------------------------------- else if statement
// let age = 15;

// if(age === 18){
//     console.log("Boleh.... Boleh... Boleh masuk");
// }else if(age === 15){
//     console.log ("Perlu dibimbing orang tua ya");
// }else if (age === 8){
//     console.log("Udah pergi ke dokter gigi?")
// }

// const iniHari = 'Sabtu';

// if(iniHari === 'Senin'){
//     console.log("Selamat bekerja kawan!");
// }else if(iniHari === 'Sabtu'){
//     console.log("Semoga jangan cepat berlalu");
// }

// const nilai = '30';

// if(nilai < 50){
//     console.log('E');
// }else if (nilai < 60){
//     console.log('D');
// }else if (nilai < 70){
//     console.log('C');
// }else if (nilai < 80){
//     console.log('B');
// }else if (nilai < 100){
//     console.log('A');
// }

// ---------------------------------------------------- else statement

// const iniHari = prompt('Isikan Hari!').toLowerCase();

// if(iniHari === 'senin'){
//     console.log('Selamat Bekerja Kawan !');
// }else if (iniHari === 'sabtu'){
//     console.log('Semoga jangan cepat berlalu!');
// } else{
//     console.log('Yah biasa aja');
// }

// ---------------------------------------------------- Cek kondisi berlapis 
// const password = prompt("Buat password");

// // Password harus sepanjang 6 karakter
// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//     console.log("Password Valid");
//     }else{
//         console.log("Password tidak boleh ada spasi");
//     }
// }else{
//     console.log("Password minimal 6 karakter");
// }

// ---------------------------------------------------- Logical Operators AND
// && = And 2 kondisinya harus true
// || = OR 2 kondisinya salah baru bernilai salah
// / = NOT

// let age = 19;
// let gender = 'male';

// if(gender === 'male' && age === 19){
//     console.log("Legal!"); 
// }

// const password = prompt("Buat password");
// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('Password Valid');
// }else{
//     console.log('Password tidak memenuhi syarat');
// }

// ---------------------------------------------------- Logical Operators OR

// let age = 15;

// if(age === 18 || age === 20){
//     console.log("Selaamt berjuang anak muda !");
// }

// const role = prompt('masukan role akun');

// if(role === 'admin' || role === 'spv'){
//     console.log('boleh mengaksesnya');
// }else{
//     console.log('akses ditolak');
// }

// ---------------------------------------------------- Logical Operators NOT

// const role = prompt('masukan role akun');

// if(role !== 'admin'){
//     console.log('akses ditolak');
// }else{
//     console.log('boleh mengaksesnya');
// }

// ---------------------------------------------------- SWITCH 

// const day = 4;
// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;
// }

// const balonku = prompt('input warna balon');
// switch(balonku){
//     case 'merah':
//         console.log('warna merah');
//         break;
//     case 'hijau':
//         console.log('doorrr');
//         break;
//     default:
//         console.log('bukan balon saya');
// }

// ---------------------------------------------------- ARRAY

// // membuat array kosong
// let peserta = [];

// // kumpulan string
// let warna = ['hijau','kuning','kelab','bu'];

// // kumpulan angka
// let angka = [1,3,4,6,9];

// // kumpulan tipe campuran
// let status = [true,1,'cat',null];


// console.log(peserta);
// console.log(warna);
// console.log(angka);
// console.log(status);

// ---------------------------------------------------- MENGUBAH NILAI ARRAY

// Kumpulan String
// let warna = ['hijau','kuning','kelab','bu'];

// warna[2] = "kelabu";
// warna[3] = "ungu";
// console.log(warna);

// ---------------------------------------------------- Method yang dimiliki array

// push - untuk menambahkan item pada akhir Array
// pop - menghapus item dari paling akhir Array
// shift - menghapus item dari paling awal Array
// unshift - menambahkan item pada awal Array
// let barbel = [];
// barbel.push(5);
// barbel.push(6);
// barbel.push(7);
// barbel.pop();
// barbel.shift();
// barbel.unshift(3);
// console.log(barbel);

// ---------------------------------------------------- Beberapa method array yang sering digunakan
// concat - menggabungkan Array
// includes - mencari suatu nilai di dalam Array
// indexOf - sama kaya string indexOf
// join - membuat suatu string dari sebuah Array
// reverse - membalikan urutan nilai dari Array
// slice - menyalin sebagian nilai dari Array
// splice - menghapus atau mengubah Element
// sort - mengurutkan nilai pada array

// // -------concat
// const array1 = ['a','b','c'];
// const array2 = ['d','e','f'];

// const array3 =  array2.concat(array1);
// console.log(array3);

// // -------indexOf

// const beast = ['ant','bison','camel','duck','bison'];

// console.log(beast.indexOf('bison'));

// console.log(beast.indexOf('bison','2'));

// console.log(beast.indexOf('giraffe'));

// // -------includes
// const data1 = [1,2,3];

// console.log(data1.includes(2));

// const pets = ['cat','dog','bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('at'));


// // -------sort
// const months = ['March','Jan','Feb','Dec'];
// months.sort();
// console.log(months);

// const dataBaru = [1,30,4,21,10000];
// dataBaru.sort();
// console.log(dataBaru);


// // -------splice
// const bulan = ['Jan','March','April','June'];
// bulan.splice(1,0,'Feb');
// console.log(bulan);
// bulan.splice(4,1,'May');
// console.log(bulan);

// // -------slice
// const animals = ['ant','bison','camel','duck','elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2,4));
// console.log(animals.slice(1,5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2,-1));
// console.log(animals.slice());


// // -------reverse
// const dataReverse = ['one','two','three','four'];
// console.log('dataReverse',dataReverse);

// const Reversed = dataReverse.reverse();
// console.log('reversed',Reversed);

// console.log('dataReverse',dataReverse);


// // -------Join
// const elements = ['Fire','Air','Water'];
// console.log(elements.join());
// console.log(elements.join(''));
// console.log(elements.join('-'));

// ---------------------------------------------------- Beberapa method array yang sering digunakan
// const PI = 3.14;
// // PI = 123;
// // console.log(PI);

// const KumpulWarna = ['Merah','Kuning','Hijau','Ungu'];
// KumpulWarna.push('Biru');
// console.log(KumpulWarna);

// ---------------------------------------------------- Nested Array
// const board = [
//     [null,null,'0'],['O','X',null],['X',null,'0']
// ];
// console.log(board);


// ---------------------------------------------------- Apa itu Object
// const fitnessData = {
//     totalSteps : 13411234,
//     totalMiles : 119.2,
//     avgCaloriesburn : 6654,
// }
// console.log(fitnessData);

// ---------------------------------------------------- Cara Membuat Struktur Data Object
// const barang = {
//     judul : 'Sepatu',
//     harga : 2000000,
//     isReady: true,
//     size : ['38','39','40','41','42'],
//     location: {
//         indonesia: 48,
//         singapore: 50
//     }
// }
// console.log(barang);

// ---------------------------------------------------- Cara Memanggil Data Dari Object
// const orang = {
//     nama: 'Aim',
//     tanggal: 16,
//     alamat: 'Cirebon',
//     isReady: true,
// }

// const barang = {
//     judul : 'Sepatu',
//     harga : 2000000,
//     isReady: true,
//     size : ['38','39','40','41','42'],
//     location: {
//         indonesia: 48,
//         singapore: 50
//     }
// }
// console.log(orang['nama']);
// console.log(orang['tanggal']);
// console.log(orang['alamat']);
// console.log(orang.nama);
// console.log(orang.tanggal);
// console.log(orang.alamat);
// console.log(orang['is'+'Ready']);
// console.log(barang.location.indonesia);
// console.log(barang.size[0]);
// console.log(barang.size);

// ---------------------------------------------------- Cara Membuat Object Berjalan
// const orang = {
//     nama: 'Aim',
//     tanggal: 16,
//     alamat: 'Cirebon',
//     isReady: true,
// }
// console.log(orang['nama'] = 'Febby');
// console.log(orang);
// console.log(orang.tanggal = 2);
// console.log(orang);

// let alamat = 'alamat';
// console.log(orang[alamat] = 'Medan');
// console.log(orang);
// console.log(orang.gender = 'Perempuan');
// console.log(orang);

// ---------------------------------------------------- Cara Memanggil Object Di Dalam Array

// const shoppingCart = [
//     {
//         product: 'vue.js',
//         price: 1.22,
//         quantity:3,
//     },
//     {
//         product: 'react.js',
//         price: 2.32,
//         quantity:1,
//     },
//     {
//         product: 'angular.js',
//         price: 3.32,
//         quantity:2,
//     },
// ]
// console.log(shoppingCart)  ;

// const student = {
//     firstName : 'David',
//     lastName : 'Beckham',
//     strengths: ['Foot','Balls'],
//     exam:{
//         midterm: 96,
//         final: 69
//     }
// }
// console.log(student);
// console.log(shoppingCart[0].product);
// console.log(shoppingCart[0].price);
// console.log(shoppingCart[0].quantity);
// console.log(shoppingCart[0]['product']);


// ---------------------------------------------------- Pengenalan Perulangan
// for(let i=1; i<=10; i+=1){
//     console.log('saya ada di dalam loop');
//     console.log(i);
// }


// ---------------------------------------------------- Contoh Lain Perulangan For
// for(let i=1; i>=0; i--){
//     console.log(i);
// }

// for(let i=10; i<= 100000; i*=10){
//     console.log(i);
// }

// ---------------------------------------------------- Awas Perulangan Tanpa Henti
// for(let i=20; i>=0; i++){
//     console.log(i);
// }

// ---------------------------------------------------- Perulangan Dengan Array
// const animals = ['cat','deer','hog','koala'];

// for(let i=0; i<animals.length; i++){
//     console.log(i,animals[i])
// }


// ---------------------------------------------------- Nested Loop
// let str = 'LOL';
// for(let i=0; i<=4; i++){
//     console.log('Outer:',i);
//     for(let j=0; j<str.length; j++){
//         console.log('        Inner:',str[j]);
//     }
// }
// const pilihan = 'abcd';
// for(let i = 1; i<=10; i++){
//     console.log(`${i}.Soal Nomor ${i}: `);
//     for(let j = 0; j<pilihan.length; j++){
//         console.log(`    ${pilihan[j]}.Pilihan Jawaban`);
//     }
// }


// ---------------------------------------------------- Mendapatkan Data Dari Nested Array Dengan Nested Loop
// const studentRow = [
//     ['Olivia','Liam','Emma','Noah'],
//     ['Amelia','Oliver','Ava','Elijah'],
//     ['Sophia','Mateo','Isabella','Lucas'],
// ];

// for(let i=0; i<studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`Seat Row #${i+1}`);
//     for(let j=0; j<row.length; j++){
//         console.log(`      ${row[j]}`);
//     }
// }


// ---------------------------------------------------- Sintaks Perulangan While
// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }
// for(let num = 0; num<10; num++){
//     console.log(num);
// }

// const PASSWORD = 'Pass123';
// let guess = prompt('enter the password');
// while(guess !== PASSWORD ){
//     guess = prompt('enter the password');
// }
// alert('congrats! the password is correct');

// ---------------------------------------------------- Kata kunci break untuk memberhentikan perulangan
// let input = prompt('Hei , Say something!');
// while(true){
//     input= prompt(input);
//     if(input.toLowerCase() === "stop") break;
// }
// alert ('ok');

// for(let i=0; i<10000; i++){
//     console.log(i);
//     if(i === 100)break;
// }

// ---------------------------------------------------- Membuat Game Tebak Tebakkan Angka Dengan While

// let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// while (!maximum){
//     maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// }
// const targetNum = Math.floor(Math.random() * maximum)+1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
// let attempts = 1;

// while(parseInt(guess) !== targetNum){
//     attempts++;
//     if(guess > targetNum){
//         guess = prompt('Terlalu tinggi! tebak lagi:');
//     }else{
//         guess = prompt('Terlalu rendah! tebak lagi:');
//     }
// }
// alert(`Selamat Tebakkan Anda Benar !! Dengan percobaan ${attempt} kali`);

// ---------------------------------------------------- Cara Elegan Melakukan Perulangan Pada Array For OF
// for (variable of iterable){
//     statement
// }
// const fruits = ['Banana','Orange','Apple','Mango'];
// for(let i=0; i<fruits.length; i++){
//     console.log(`Buang ${fruits[i]}`);
// }

// for(let fruit of fruits){
//     console.log(`Buah ${fruit}`);
// }

// const studentRow = [
//     ['Olivia','Liam','Emma','Noah'],
//     ['Amelia','Oliver','Ava','Elijah'],
//     ['Sophia','Mateo','Isabella','Lucas'],
// ];
// for (let row of studentRow){
//     for(let student of row){
//         console.log(student)
//     }
// }


// ---------------------------------------------------- Melakukan Perulangan Pada Object Dengan Elegan For In

// const studentScore = {
//     Olivia: 20,
//     Liam: 13,
//     EmmaL: 40,
//     Noah: 18,
//     Amelia: 32,
//     Oliver: 10,
//     Ava: 11,
//     ELijah: 21,
//     Sophia: 14,
//     Mateo: 22,
// }
// for(let student in studentScore){
//     console.log(`${student}memiliki skor ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for(let score of scores){
//     total += score;
// }
// console.log(total/scores.length);


// ---------------------------------------------------- Pengenalan Function Di Javascript
// Function 
// potongan kode memungkinkan digunakan kembali
// bisa dibuat lebih awal dan digunakan 
// akan sering digunakan

function lemparDadu(){
    console.log(Math.floor(Math.random() * 6 + 1));
}
console.log(lemparDadu());