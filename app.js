/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Script app.js Telah Terhubung"); 


// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI = "Kopi Yours";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let NAMA_KASIR = "Ka Shofia";
let SHIFT_KERJA = "Pagi";
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Kedai:" + NAMA_KEDAI);
console.log("Kasir:" + NAMA_KASIR);
console.log("Shift Kerja:" + SHIFT_KERJA);


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
NAMA_KASIR = "Ka Weni"; // ini bisa diubah
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Kasir: "+ NAMA_KASIR);



// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang di Kedai Kopi Yours");
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let NAMA_PELANGGAN = prompt("Haloo! Masukkan nama kamu untuk mulai pemesanan : ");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if (NAMA_PELANGGAN) {
    alert("Halo, " + NAMA_PELANGGAN + " Mau Pesan Apa Hari ini?"); 
    console.log("Pelanggan yang aktif : "+ NAMA_PELANGGAN);
} else {
    alert("Kamu tidak memasukkan nama. Kamu akan dipanggil Your Loves");
    NAMA_PELANGGAN = "Your Loves";
    console.log(" Your Loves : "+ NAMA_PELANGGAN);
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let poinkopi = 80; 
let poinmakanan = 85;
let poinmerchandise = 90; 
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let TOTAL_POIN = poinkopi + poinmakanan + poinmerchandise;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== POIN TRANSAKSI " + NAMA_PELANGGAN + "===");
console.log("poin kopi : " + poinkopi);
console.log("poin makanan : " + poinmakanan);
console.log("poin merchandise : " + poinmerchandise);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let tierMember = ""; 
let benefit = ""; 
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
if (TOTAL_POIN >= 100) {
    tierMember = "Platinum",
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (TOTAL_POINTRANSAKSI >= 70){
    tierMember = "Gold",
    benefit = "Diskon 10% di setiap transaksi";
} else if (TOTAL_POINTRANSAKSI >= 40){
    tierMember = "Silver",
    benefit = "Diskon 5% untuk menu minuman";
} else {
    tierMember = "Bronze",
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}
// 3. Cetak hasil tierMember dan benefit ke Console.
console.log("tierMember Anda Adalah :" + tierMember + "benefit :" + benefit);
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert(
    "Total Poin : " + NAMA_PELANGGAN +":\n" + 
    "Total Poin : " + TOTAL_POIN + ":\n" +
    "tierMember    : " + tierMember + " benefit :  " + benefit
);



// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function HITUNG_TOTALPOIN(poinkopi, poinmakanan, poinmerchandise) {
    let JUMLAH = poinkopi + poinmakanan + poinmerchandise; 
    return JUMLAH; 
}


// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function TENTUKAN_tierMember(tierMember){
    if (tierMember >= 90) return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
    if (tierMember >= 85) return "Gold - Diskon 10% di setiap transaksi";
    if (tierMember >= 80) return "Silver - Diskon 5% untuk menu minuman";
    return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
}


// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
let TOTALPOIN_PELANGGAN_B = HITUNG_TOTALPOIN(35, 25, 20);
let tierMember_PELANGGAN_B = TENTUKAN_tierMember(TOTALPOIN_PELANGGAN_B);
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
let TOTALPOIN_PELANGGAN_C = HITUNG_TOTALPOIN(15, 10, 5);
let tierMember_PELANGGAN_C = TENTUKAN_tierMember(TOTALPOIN_PELANGGAN_C);
// 3. Cetak data Pelanggan B dan C ke tab Console.
console.log("=== DATA PELANGGAN B");
console.log("Total Poin adalah " + TOTALPOIN_PELANGGAN_B);
console.log("tierMember adalah " + tierMember_PELANGGAN_B);

console.log("=== DATA PELANGGAN C");
console.log("Total Poin adalah " + TOTALPOIN_PELANGGAN_C);
console.log("tierMember adalah " + tierMember_PELANGGAN_C);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let MENU_REKOMENDASI = [
    "Matcha Latte",
    "Ube Matcha",
    "Milo Dino",
    "Butterscotch Sea Salt Latte",
    "Creamy Aren Latte"
];


// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
for (let i = 0; i < MENU_REKOMENDASI.length; i++) {
    console.log ((i + 1) + ". " + MENU_REKOMENDASI[i]);
}


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("Menu Rekomendasi : " + MENU_REKOMENDASI.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
