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

const role = prompt('masukan role akun');

if(role !== 'admin'){
    console.log('akses ditolak');
}else{
    console.log('boleh mengaksesnya');
}
