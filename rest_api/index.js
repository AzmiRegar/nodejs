const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors

const app = express() //implementasi express


//implementasi body-parser
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))


//implementasi cors
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// endpoint "/test" dengan method GET
app.get("/test/:bil1", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    let no1 = req.params.bil1
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan: no1,
        message: "Ini end-point pertama ku", // menampilkan data 
        method: req.method, // menampilkan method 
        code: res.statusCode // menampilkan response code 
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body


    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }


    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


//praktikum rest api
app.get("/balok/:panjang/:lebar/: tinggi", (req,res) => {
    let panjang = Number(req.params.panjang)
    let lebar = Number(req.params.lebar)
    let tinggi = Number(req.params.tinggi)

    let volume = panjang *lebar * tinggi
    let lp = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: lp
    }

    res.json(response)
})

app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi* sisi
    let lp = 10 * sisi * sisi

    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: lp
    }

    res.json(response)
})

app.post("/bola", (req,res) => {
    let jari = Number(req.body.jari)

    let volume = 4 * (3.14 * jari ** 3) /3
    let lp = 4 * (3.14 * jari ** 2)

    let response = {
        jari_jari: jari,
        volume: volume,
        luas_permukaan: lp
    }

    res.json(response)
})

app.post("/tabung", (req,res) => {
    let rusuk = Number(req.body.rusuk)
    let  tinggi = Number(req.body.tinggi)

    let volume = 3.14 * rusuk * rusuk * tinggi
    let lp = 2 * 3.14 * rusuk * tinggi + 2 * 3.14 * rusuk * rusuk

    let response = {
        rusuk: rusuk,
        tinggi_tabung: tinggi,
        volume: volume,
        luas_permukaan: lp
    }

    res.json(response)
})

app.post("/BMI", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    

    let bmi = berat / (tinggi**2)
    let status = get_status(bmi)

    function get_status(bmi){
        if(bmi < 18.5){ 
            return 'Kekurangan berat badan'
        } else if (bmi >= 18.5 && bmi <25){
            return 'Normal (ideal)'
        } else if (bmi >= 25 && bmi <30){
            return 'Kelebihan berat badan'
        } else {
            return 'Kegemukan (Obesitas)'
        }        
    }

    
    let response = {
        berat_badan: berat,
        tinggi_badan: tinggi,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

// menjalankan server pada port 1
app.listen(1, () => {
    console.log("Server run on port 1");
})

