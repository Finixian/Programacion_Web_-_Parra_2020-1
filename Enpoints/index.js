const express = require('express');
const expresslayout = require('express-ejs-layouts');
const parser = require('body-parser');
const port = process.env.PORT||3000;


const app = express();


app.set('view engine', 'ejs' ); /* asignar el motor de busquedas */
app.use(expresslayout);

app.use(parser.urlencoded({extended:true}));/* ({extended:true}) para evitar usar un codigo depreciado */


app.use(express.static(__dirname+'/public'));




app.get('/',(req,res)=>{
    res.render('pages/home');
})

app.get('/about',(req,res)=>{
    res.render('pages/about')
})



/* !!!ESTO SIEMPRE VA ABAJO!!! Asignar el Puerto a usar y el mensaje que se realizo y levanto el servidor correctamente */
app.listen(port,()=>{
    console.log("Servidor activo correctamente");
})