const express = require('express');
const app = express();
const PORT = 3003
//layanan endpoitn manual GET

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
app.listen(PORT,()=>console.log(`serving on PORT = ${PORT}`))