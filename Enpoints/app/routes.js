var express =  require('express');
var router = express.Router();

module.exports = router;
//declaracion de variables de sistema ^^arrbia^^




var edad="17";
router.get('/',(req,res)=>{
    res.render('pages/home',{extra: "envio de variable a la hora de mandar a llamar la pagina en home",edad: edad});
})

router.get('/about',(req,res)=>{

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

router.get('/contact',(req,res)=>{
    
    res.render('pages/contact',{extra: "envio de variable a la hora de mandar a llamar la pagina en contact",edad})
})

/*
router.post('/contact',(req,res)=>{
    
    console.log(req.body.fname);
    console.log(req.body.email);
    res.render('pages/home',{extra: "envio de variable a la hora de mandar a llamar la pagina en respuesta a contact",edad})
    
    
})*/
router.post('/contact', (req, res) =>{
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














