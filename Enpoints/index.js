const express = require('express');
const expresslayout = require('express-ejs-layouts');
const parser = require('body-parser');
const port = process.env.PORT||3000;


const app = express();


app.set('view engine', 'ejs' ); /* asignar el motor de busquedas */
app.use(expresslayout);

app.use(parser.urlencoded({extended:true}));/* ({extended:true}) para evitar usar un codigo depreciado */


app.use(express.static(__dirname+'/public'));



var edad="17";
app.get('/',(req,res)=>{
    res.render('pages/home',{extra: "envio de variable a la hora de mandar a llamar la pagina en home",edad: edad});
})

app.get('/about',(req,res)=>{

    var users = [
    {
        name:"Parra" , email:"correo@electronico.com", avatar: '/images/imagenabout1.png' //imagen chica de 300x300
    },
    {
        name:"Jose" , email:"correo@electronico.com", avatar: '/images/imagenabout2.png' //imagen chica de 300x300
    },
    {
        name:"Jesus" , email:"correo@electronico.com", avatar: '/images/imagenabout3.png' //imagen chica de 300x300
    },
    {
        name:"Galaviz" , email:"correo@electronico.com", avatar: '/images/imagenabout4.png' //imagen chica de 300x300
    }

    ]


    res.render('pages/about',{extra: "envio de variable a la hora de mandar a llamar la pagina en about",edad, users})
})

app.get('/contact',(req,res)=>{
    
    res.render('pages/contact',{extra: "envio de variable a la hora de mandar a llamar la pagina en contact",edad})
})

/*
app.post('/contact',(req,res)=>{
    
    console.log(req.body.fname);
    console.log(req.body.email);
    res.render('pages/home',{extra: "envio de variable a la hora de mandar a llamar la pagina en respuesta a contact",edad})
    
    
})*/
app.post('/contact', (req, res) =>{
    var nom = req.body.fname;
    var ape = req.body.lname;
    var email = req.body.email;
    var mesg = req.body.message;
    var phone = req.body.phone;
    
    console.log('Nombre :' + req.body.fname);
    console.log('Apellido :' + req.body.lname);
    console.log('Email :' + req.body.email);
    console.log('Tel :' + req.body.phone);
    console.log('Mensaje :' + req.body.message);

     res.render('pages/contactResp',{nom, ape, email});
});



























/* !!!ESTO SIEMPRE VA ABAJO!!! Asignar el Puerto a usar y el mensaje que se realizo y levanto el servidor correctamente */
app.listen(port,()=>{
    console.log("Servidor activo correctamente");
})