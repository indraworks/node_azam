const express = require('express');
const app = express();
const PORT = 3003
//layanan endpoitn manual GET

//contoh dgn params lebih dimamis jadi server buat dynamic routes
//tidak seperti sebelumnya yg harus manual contoh:
//localhost:3003/movies/:genre/year/:year
/*
diatas genre movies bisa dicari dgn memasukan dari browser dan kita sudah sediakan route 
dinamicnya di router backend kita.
contoh:
localhost:3003/movies/:genre/year/:year
sehimgga kita bisa tangkap jika user memasukan genre movie dan tahun pepmbuatan movienya
degan req.params

*/
app.get('/movie/:genre/year/:year',(req,res)=> {
   const genre = req.params.genre;
   const year = req.params.year;
   const feedback = `<h1>your choice choose film ${genre} with year: ${year}</h1>`;
 console.log(feedback)
    res.send('<h1>your Route choice </h1>')


})

//contoh dengan query String yaitu dgn menangkap query yg diberikan oleh user di browser
//setlah tanda "?"
//mis tangkap asc dan mencari page
app.get('/movies',(req,res)=> {
    //user ?sort=asc&?page=3
    //di serrver req.query,nama_keymya
     console.log(req.query.sort);
     console.log(req.query.page);
     res.send('<h1> Send The Filter Movie!</h1>')
})

app.listen(PORT,()=>console.log(`serving on PORT = ${PORT}`))





/*
old script withoud param and query
 app.get("/movie/action/1992",(req,res)=> {
     res.send(`<h1> Route Movie Manual</h1>`)
 })
 app.get("/movie/action/1992",(req,res)=> {
    res.send(`<h1> Route Movie Manual</h1>`)
})   
 app.get("/movie/comedy/1987",(req,res)=> {
    res.send(`<h1> Route Movie Manual</h1>`)
 })
 app.get("/movie/drama/2000",(req,res)=> {
    res.send(`<h1> Route Movie Manual</h1>`)
 })
 app.get("/movie/horor/2011",(req,res)=> {
    res.send(`<h1> Route Movie Manual</h1>`)
 })

*/