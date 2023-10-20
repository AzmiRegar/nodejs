// console.log("hello world")

// let nama = "Sukirman"
// let usia = 40
// let status_menikah = false



// let nama_siswa1 = "Suneo"
// let nis_siswa1 = "101"
// let jurusan_siswa1 = "RPL"

// let nama_siswa2 = "Jeko"
// let nis_siswa2 = "102"
// let jurusan_siswa2 = "TKJ"

// let siswa1 = {
//     nis : "101",
//     nama : "Suneo",
//     jurusan : "RPL"
// }
// let siswa2 = {
//     nis: "102",
//     nama : "Jeko",
//     jurusan : "TKJ"
// }

// console.log("Nama siswa 1 adalah " + siswa1.nama)
// siswa1.nama = "Nobita"
// console.log("Nama Siswa 1 adalah " + siswa1.nama)




// let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]
// let tingkatan_kelas = [10,11,12]
// let siswa = [
//     // objek pertama
//     {
//         nama: "Yaya", jurusan: "RPL"
//     },
//     // objek kedua
//     {
//         nama: "Ying", jurusan: "RPL"
//     },
//     // objek ketiga
//     {
//         nama: "Gopal", jurusan: "RPL"
//     }
// ]
// console.log("Jumlah elemen array jurusan = "+ jurusan.length);
// console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
// console.log("Jumlah elemen array siswa = " + siswa.length);



// let kota = ["Malang", "Surabaya", "Tulungagung"]
// console.log("Isi array kota");
// console.log(kota);
// console.log("Jumlah data = " + kota.length);

// console.log("------------------------------------")

// kota.push("Banyuwangi")

// console.log("Isi array kota saat ini");
// console.log(kota);
// console.log("Jumlah data saat ini = " + kota.length);



// let barang = [
//     { nama: "Rinsoo", harga: 5000},
//     { nama: "Moonlight", harga: 4000}
// ]

// console.log("Isi array barang");
// console.log(barang);
// console.log("Jumlah data = " + barang.length);

// console.log("----------------------------------");

// barang.push(
//     { nama: "Mloto", harga: 1000}
// )

// console.log("Isi array barang saat ini");
// console.log(barang);
// console.log("Jumlah data saat ini = " + barang.length);



// let nama = ['Ana','Sulaiman','Putri','Gatot','Adit','Gico']
// console.log(nama);
// console.log("Jumlah data saat ini = " + nama.length);

// //2 adalah start indeks yang dihapus, 1 jumlah data yang dihapus
// nama.splice(2,1)
// console.log("----------------------------");
// console.log("Data setelah dikurangi");
// console.log(nama);
// console.log("Jumlah data saat ini = " + nama.length);


// let siswa = [
//     {nama_depan: "Jack", nama_belakang: "Ma"},
//     {nama_depan: "Johnny", nama_belakang: "English"},
//     {nama_depan: "John", nama_belakang: "Cena"}
// ]
// siswa.map(
//     (sis, index) => {
//         console.log(sis.nama_depan + " " + sis.nama_belakang);
//     }
// )


// let a = 2, b = 5, c = "10"
// console.log("a + b = " + (a + b))
// console.log("a + c = " + (a + c))
// console.log("a - b = " + (a - b))
// console.log("a * b = " + (a * b))
// console.log("b / a = " + (b / a))
// console.log("b % a = " + (b % a))
// console.log("b ** a = " + (b ** a))



// let a = 5, b = 10, c = "5"
// console.log("a == c -> " + (a==c))
// console.log("a === c -> " + (a===c))
// console.log("a != c -> " + (a!=c))
// console.log("a !== c -> " + (a!==c))
// console.log("a > b -> " + (a>b))
// console.log("a >= b -> " + (a>=b))
// console.log("a < b -> " + (a<b))
// console.log("a <= b -> " + (a<=b))



// let tahun = 20
// if (tahun % 4 == 0){
//     console.log(tahun + " adalah tahun kabisat");
// } else {
//     console.log(tahun + " bukan tahun kabisat");
// }



// let nilai = 80
// if(nilai > 80){
//     console.log("Excellent");
// } else if(nilai <=80 && nilai > 70){
//     console.log("Good");
// } else if(nilai <=70 && nilai >60){
//     console.log("Not Bad");
// } else {
//     console.log("So Bad");
// } 



// for(let index = 1; index <= 10; index++){
//     console.log("Perulangan ke-" + index)
// }



// let siswa = {
//     nama: "Kusuma Seta",
//     gender: "Wanita",
//     jurusan: "RPL",
//     usia : "300",
//     alamat: "Ngantru"
// }

// for (key in siswa){
//     console.log(key);
// }



// let presiden = ["Soekarno","Soeharto","Habibie","Gus Dur","Megawati","SBY","Jokowi"]
// for (pres of presiden){
//     console.log(pres)
// }



// let laptop = ["Lenovo","HP","Acer","Asus"]
// let i = 0
// while(laptop[i]){
//     console.log(laptop[i])
//     i++
// }



// let gadget = ["Xiomi","Samsung","Realme","Redmi"]
// let i = 0
// do {
//     console.log(gadget[i])
//     i++
// }while (gadget[i])



// luasLingkaran = (r) => {
//     return 3.14 * (r**2)
// }
// console.log("Luas lingkaran r = 10 adalah " + luasLingkaran(10));



// class PersegiPanjang{
//     constructor(p,l){
//         this.panjang = p
//         this.lebar = l
//     }
//     luas = () => {
//         return this.panjang * this.lebar
//     }
//     keliling = () => {
//         return 2 * (this.panjang + this.lebar)
//     }
// }
// let tanah = new PersegiPanjang(10,50)
// console.log("luas tanah = " + tanah.luas());
// console.log("keliling tanah = " + tanah.keliling());



// class segitigasiku{
//     constructor(a,t,m){
//         this.alas = a
//         this.tinggi = t
//         this.miring = m
//     }
//     luas = () => {
//         return this.alas * this.tinggi /2 
//     }
//     keliling = () => {
//         return this.alas + this.tinggi + this.miring
//     }
// }

// class PrismaSegitiga extends segitigasiku{
//     constructor(a,t,tp,m){
//         super(a,t,m)
//         this.tinggiPrisma = tp
//     }
//     luasSelimut = () => {
//         return (this.alas * this.tinggiPrisma) +
//         (this.tinggi * this.tinggiPrisma) +
//         (this.miring * this.tinggiPrisma) 
//     }
//     lp = () => {
//         return (2 * (this.alas * this.tinggi /2)) + this.luasSelimut
//     }
//     volume = () => {
//         return (this.alas * this.tinggi /2) * this.tinggiPrisma
//     }
// }

// let ataprumah = new PrismaSegitiga(10,5,20,8)
// console.log("luas atap rumah = " + ataprumah.luas() + " m²");
// console.log("volume atap rumah = " + ataprumah.volume() + " m³");



// let barang = [
//     { nama: "Beras", harga: 10000, jumlah: 5},
//     { nama: "Telur", harga: 20000, jumlah: 2},
//     { nama: "Gula", harga: 14000, jumlah: 5},
//     { nama: "Minyak", harga: 9000, jumlah: 10}
// ]
// console.log(JSON.stringify(barang));