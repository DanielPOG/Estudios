// 1.Imprime por consola tu numbre si una variable tomo su valor
const nombre= 1
if (nombre == 1){
    console.log("Daniel")
}else {
    console.log("Nombre incorrecto")
}
// 2.Imprime por consola un mensaje si el usuario y contraseña coinciden con unas establecidas 
const user="daniel"
const password= 123456
let usuario ="Daniel"
let contraseña=12345
if (user === usuario && password === contraseña){
    console.log("Dentro del sistema")
}else{
    console.log("Datos incorrectos")
}
// 3.Verifica si un numero es positivo, negativo o 0 o imprime un mensaje
let numero= 1
if (numero>0){
    console.log("Es un numero positivo")
}else if(numero==0){
    console.log("Es cero")
}else if (numero<0){
    console.log("Es un numero negativo")
}else{
    console.log("Es un mensaje")
}
// 4.Verifica si una persona puede votar  o no e indica cuantos años le faltan
let age= 18
const edadLegal=18
if (age >= 18 ){
    console.log("Puedes votar")
}else{

    console.log(`No puedes votar te faltan ${edadLegal-age} años`)
}
// 5.Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable deperndiendo la edad
let categoria
let etapa= age >= 18 ? categoria="adulto": categoria="menor"
console.log(etapa)
// 6.Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
let mes="primavera" //primavera,verano,otoño,invierno
if (mes == "primavera"){
    console.log("Estamos en primavera")
}else if(mes == "verano"){
    console.log("Estamos en verano")
}else if(mes == "otoño"){
    console.log("Estamos en otoño")
}else if(mes == "invierno"){
    console.log("Estamos en invierno")
}else{
    console.log("No es una estacion del año")
}
// 7.Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior switch
let diasMes= "enero" //enero,febrero, marzo, abril , mayo, junio etc...
switch (diasMes){
    case "enero":
        console.log("Enero tiene 31 dias")
        break
    case "febrero":
        console.log("Febrero tiene 29 dias") //Dependiendo del año si es bisiesto o no 29/28 dias
    default:
        console.log("Mes no existente")
}
// 8.Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma 
let idioma="ingles"
switch (idioma){
    case "ingles":
        console.log("hello")
        break
    case "español":
        console.log("hola")
    default :
        console.log("idioma no encontrado")
}
// 9.Usa un switch para hacer el ejercicio 6
let estacion="primavera"
switch (estacion){
    case "primavera":
        console.log("Estamos en primavera")
        break
    case "verano":
        console.log("Estamos en verano")
        break
    default :
        console.log("Estacion de años no reconocida")
}
// 10.Usa un switch para hacer el ejercicio 7
// ay