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

// app.get("/vst/:type/:diket1/:diket2", (req,res) => 
// {
//     let soal = req.params.type
//     let var1 = Number(req.params.diket1)
//     let var2 = Number(req.params.diket2)
//     let hasil = 0
//     let response

//     if (soal === "v") 
//     {
//         hasil = var1/var2
//         response = {
//             Soal: "Mencari kecepatan(Velocity) per detik",
//             Jarak: var1 + ' meter',
//             Waktu: var2 + ' detik',
//             Hasil: hasil + ' m/detik',
//         }
//     }
//     else if(soal === "s")
//     {
//         hasil = var1*var2
//         response = {
//             Soal: "Mencari Jarak(Space)",
//             Kecepatan: var1 + ' m/detik',
//             Waktu: var2 + ' detik',
//             Hasil: hasil + ' meter',
//         }
//     }
//     else if(soal === "t")
//     {
//         hasil = var1/var2
//         response = {
//             Soal: "Mencari Waktu(Time)",
//             Jarak: var1 +' Meter',
//             Kecepatan: var2 + ' m/detik',
//             Hasil: hasil.toFixed(2) + ' detik',
//         }
//     }
//     else
//     {
//         response = "Tipe tidak ada!\n<br>Coba salah satu dari berikut Tipe:[v,s,t]"
//     }

//     res.json(response)
// })


// app.post("/berat", (req,res) => 
// {
//     let tipe_berat = req.body.tipe_berat
//     let berat = Number(req.body.berat)
//     let response
//     let kg,hg,dag,g,dg,cg,mg

//     if (tipe_berat === "mg") 
//     {
//         mg = berat
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi MG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "cg")
//     {
//         mg = berat / 10
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi CG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "dg")
//     {
//         mg = berat / 100
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi DG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "g")
//     {
//         mg = berat / 1000
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi G",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "dag")
//     {
//         mg = berat / 10000
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi DAG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "hg")
//     {
//         mg = berat / 100000
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi HG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }
//     else if(tipe_berat === "kg")
//     {
//         mg = berat / 1000000
//         cg = mg * 10
//         dg = cg * 10
//         g = dg * 10
//         dag = g * 10
//         hg = dag * 10
//         kg = hg * 10
//         response = {
//             Soal: "Konversi KG",
//             mg: mg,
//             cg: cg,
//             dg: dg,
//             g: g,
//             dag: dag,
//             hg: hg,
//             kg: kg
//         }
//     }

//     res.json(response)
// })

app.get("/konversipanjang/:tipe/:panjang", (req,res) => 
{
    let tipe = req.params.tipe
    let panjang = Number(req.params.panjang)
    let response
    let km,hm,dam,m,dm,cm,mm

    if (tipe === "mm") 
    {
        mm = panjang
        cm = panjang /  10
        dm = panjang / 100
        m = panjang / 1000
        dam = panjang / 10000
        hm = panjang / 100000
        km = panjang / 1000000
        response = {
            Konversi: "MiliMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "cm")
    {
        mm = panjang * 10
        cm = panjang
        dm = panjang / 10
        m = panjang / 100
        dam = panjang / 1000
        hm = panjang / 10000
        km = panjang / 100000
        response = {
            Konversi: "CentiMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "dm")
    {
        mm = panjang * 100
        cm = panjang * 10
        dm = panjang
        m = panjang / 10
        dam = panjang / 100
        hm = panjang / 1000
        km = panjang / 10000
        response = {
            Konversi: "DesiMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "m")
    {
        mm = panjang * 1000
        cm = panjang * 100
        dm = panjang * 10
        m = panjang 
        dam = panjang / 10
        hm = panjang / 100
        km = panjang / 1000
        response = {
            Konversi: "Meter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "dam")
    {
        mm = panjang * 10000
        cm = panjang * 1000
        dm = panjang * 100
        m = panjang * 10
        dam = panjang
        hm = panjang / 10
        km = panjang / 100
        response = {
            Konversi: "DekaMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "hm")
    {
        mm = panjang / 100000
        cm = panjang / 10000
        dm = panjang / 1000
        m = panjang / 100
        dam = panjang / 10
        hm = panjang
        km = panjang * 10
        response = {
            Konversi: "HektaMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "km")
    {
        mm = panjang / 1000000
        cm = panjang / 100000
        dm = panjang / 10000
        m = panjang / 1000
        dam = panjang / 100
        hm = panjang / 10
        km = panjang
        response = {
            Konversi: "KiloMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }

    res.json(response)
})

app.post("/fma", (req,res) => 
{
    let soal = req.body.soal
    let nilai1 = Number(req.body.nilai1)
    let nilai2 = Number(req.body.nilai2)
    let hasil = 0
    let response

    if (soal === "f") 
    {
        hasil = nilai1*nilai2
        response = {
            Soal: "Mencari gaya(Newton)",
            massa: nilai1 + ' kg',
            percepatan: nilai2 + ' m/s2',
            Rumus_F: "massa(m) * percepatan(a)",
            Hasil: hasil + ' kg.ms/2',
        }
    }
    else if(soal === "m")
    {
        hasil = nilai1/nilai2
        response = {
            Soal: "Mencari massa(kg)",
            gaya: nilai1 + ' kg.ms/2',
            percepatan: nilai2 + ' m/s2',
            Rumus_m: "gaya(F) / percepatan(a)",
            Hasil: hasil + ' kg',
        }
    }
    else if(soal === "a")
    {
        hasil = nilai1/nilai2
        response = {
            Soal: "Mencari Percepatan(m/s2)",
            gaya: nilai1 +' kg.ms/2',
            massa: nilai2 + ' kg',
            Rumus_a: "gaya(F) * massa(m)",
            Hasil: hasil.toFixed(2) + ' m/s2',
        }
    }
    else
    {
        response = "Tipe tidak ada!\n<br>Coba salah satu dari berikut Tipe:[f,m,a]"
    }

    res.json(response)
})

app.listen(2007, () => {
    console.log("Server run on port 2007");
})
