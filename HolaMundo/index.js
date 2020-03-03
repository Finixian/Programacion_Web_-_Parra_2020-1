const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hola Mundo en Js UMU <3')
})
app.get('/api',(req,res)=>{
    res.send('PADOUR PADORU!!! UMU <3')
})
app.listen(3000,()=>{
    console.log("Servidor activo en puerto 3000");
})