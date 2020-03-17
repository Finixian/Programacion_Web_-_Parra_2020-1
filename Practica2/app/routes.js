var express =  require('express');
var router = express.Router();

module.exports = router;
//declaracion de variables de sistema ^^arrbia^^
function RFC(nom1,nom2, ape1,ape2,day,month,yes) {
    var nombre = nom1.split('');
    var nombre2 = nom2.split('');
    var apellido1 = ape1.split('');
    var apellido2 = ape2.split('');
    var dia = day.split('');
    var mes = month;
    var year = yes.split(''); //.split para hacerlo arreglo .join('') para hacerlo uno de nuevo
    
    var letters;
    
    for (let index = 0; index < nombre.length; index++) {
        switch ( nombre[index]) {
            case "Á":
                nombre[index]="A";
                break;
            case "É":
                nombre[index]="E";
                break;   
    
            case "Í":
                nombre[index]="I";
                break;
            case "Ó":
                nombre[index]="O";
                break;
        
            case "Ú":
                nombre[index]="U";
                break;
            default:
                break;
    }}
     
    for (let index = 0; index < nombre2.length; index++) {
        switch ( nombre2[index]) {
            case "Á":
                nombre2[index]="A";
                break;
            case "É":
                nombre2[index]="E";
                break;   
    
            case "Í":
                nombre2[index]="I";
                break;
            case "Ó":
                nombre2[index]="O";
                break;
        
            case "Ú":
                nombre2[index]="U";
                break;
            default:
                break;
    }}
    
    for (let index = 0; index < apellido1.length; index++) {
        switch ( apellido1[index]) {
            case "Á":
                apellido1[index]="A";
                break;
            case "É":
                apellido1[index]="E";
                break;   
    
            case "Í":
                apellido1[index]="I";
                break;
            case "Ó":
                apellido1[index]="O";
                break;
        
            case "Ú":
                apellido1[index]="U";
                break;
            default:
                break;
    }}
    
    for (let index = 0; index < apellido2.length; index++) {
        switch ( apellido2[index]) {
            case "Á":
                apellido2[index]="A";
                break;
            case "É":
                apellido2[index]="E";
                break;   
    
            case "Í":
                apellido2[index]="I";
                break;
            case "Ó":
                apellido2[index]="O";
                break;
        
            case "Ú":
                apellido2[index]="U";
                break;
            default:
                break;
    }}
    
    
    
        if ((apellido1[1] == 'A')|| (apellido1[1] == 'E') || (apellido1[1] == 'i') || (apellido1[1] == 'O') || (apellido1[1] == 'U')) {
            letters= apellido1[0]+apellido1[1]+apellido2[0]+nombre[0];
        } else if ((apellido1[2] == 'A')|| (apellido1[2] == 'E') || (apellido1[2] == 'i') || (apellido1[2] == 'O') || (apellido1[2] == 'U')) {
            letters= apellido1[0]+apellido1[2]+apellido2[0]+nombre[0];
        } else{
            letters= apellido1[0]+apellido1[3]+apellido2[0]+nombre[0];
        }
    
    var inpuras = ["BUEI","BUEY", "CACA", "CACO", "CAGA", "CAGO", "CAKA", "COGE" , "COJA", "COJE", "COJI", "COJO", "CULO", "FETO", "GUEY", "JOTO", "KACA", "KACO", "KAGA", "KAGO"]
    
    for (let index = 0; index < inpuras.length; index++) {
        if(inpuras[index]== letters){
            letters=letters.split('');
            letters[3]="X";
            letters=letters.join('');
            index=inpuras.length;
        } 
    }
    
    switch ( mes) {
        case "ENERO":
            mes="01";
            break;
            case "FEBRERO":
                mes="02";
                break;
    
            case "MARZO":
            mes="03";
            break;
            case "ABRIL":
            mes="04";
            break;
            case "MAYO":
            mes="05";
            break;
            case "JUNIO":
            mes="06";
            break;
            case "JULIO":
            mes="07";
            break;
            case "AGOSTO":
            mes="08";
            break;
            case "SEPTIEMBRE":
            mes="09";
            break;
            case "OCTUBRE":
            mes="10";
            break;
            case "NOVIEMBRE":
            mes="11";
            break;
            case "DICIEMBRE":
            mes="12";
            break;
    
        default:
            break;
    }
    if(dia >10){
        dia="0"+dia.toString();
    }
    if(mes >10){
        dia="0"+dia.toString();
    }
    var rfc = letters+year[2]+year[3]+mes+dia;
    
        
    
    
    
    return rfc;
    
    
    
    
    }



var edad="17";
router.get('/',(req,res)=>{
    res.render('pages/home',{extra: "envio de variable a la hora de mandar a llamar la pagina en home",edad: edad});
})






router.get('/practica2',(req,res)=>{
    res.render('pages/practica2');
})

router.post('/practica2', (req, res) =>{
    var nom1 = req.body.fname1;
    var nom2 = req.body.fname2;
    var ape1 = req.body.lname1;
    var ape2 = req.body.lname2;
    var day = req.body.birth_day;
    var month = req.body.birth_month;
    var year = req.body.birth_year;
    
    console.log('Nombre1 :' + req.body.fname1);
    console.log('Nombre2 :' + req.body.fname2);
    console.log('Apellido :' + req.body.lname1);
    console.log('Apellido 2 :' + req.body.lname2);
    console.log('Dia :' + req.body.birth_day);
    console.log('Mes :' + req.body.birth_month);
    console.log('Año :' + req.body.birth_year);

    var rfc = RFC(nom1.toUpperCase(), nom2.toUpperCase(),ape1.toUpperCase(),ape2.toUpperCase(),day,month.toUpperCase(),year);

     res.render('pages/practica2Resp',{rfc});
});














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














