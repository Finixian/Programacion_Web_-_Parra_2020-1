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

var rfc = letters+year[2]+year[3]+mes+dia;

    



return rfc;




}
