const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3005
app.use(bodyParser.json());
//lLayanan HTTP POST

app.post('/movies',(req,res)=> { 
   let name= req.body.name;
   let email = req.body.email;
   let password = req.body.password;
   console.log(`name:${name} email:${email} password:${password}`);
   res.send('data fill OK')
})





app.listen(PORT,()=>console.log(`serving on PORT = ${PORT}`))


/*
CATATAN LAYANANAn dari client ke server adalah POST 
nah jadi oleh server dikenali sebgai body jadi semacam form yg diencoded dari halaman webpage
dimana si client mengisi field2nya dan setelahnya tekan btton enter dan ter-send ke server
nah server kenali sebgai satu kesatuan namaya BODY /istilah bagi server
client------------------- server
           BODY

nah pada node js body ini tidak akan langsung dikenali oleh siserver harus ada 
library yg meparsing encode form tadi ke server bisa di baca dan tahu 
maka utk itu di install :npm i   
setelahnaya digunakkan 
const bodyParser= required('body-parser);

app,use(bodyParser.json());



jadi mis client isi form nama,email,password,alamat 
maka server di endpoint akan menuliskan programnya atau layanannya sbb
mmnberi layanan pada client utk ditamgkap body yg masuk ke end point yg disediakan 

app.post("/movies",(req,res)=> {
   let name = req.body.name;
   let password = req.body.password;
   let email = req.bdoy.email;
   let alamat = req.body.alamat;
    console.log(name,password,email,alamat)
   res.send('sukses add data');
})

utk melakukan percobaan pengisian ke endpoint tidak bisa di browser HTML 
harus dengan tools ,utk itu digunakan postman tools
cara pilih di type header Content-type application/json
dibagian body pilih json
tinggal ketik smuakey dan value pake tanda ""
{ "name":"indara",
   email:indra@gmail,com
   password :nokia123


}

*/

/*
call back function adalah sbuah fucntion yg masuk sbgai parameter di function 
yg nemirma dia sbgai paramterter,dan 
stlah dia jadi paramerer maka dia panggil dirinya sendiri dgn parameter()

high order function adalah functun yg menerima function lain sebgai parameter
setelahnya didalam function HigOrder ini function mparamter tadi di invoke 
sbb:parameter()
nah jadilah dia memangil dirinya sndir



*/