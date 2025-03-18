//Strings

// Concatenacion de cadenas   
let myName = "Daniel"
let greeting= "Hola " + myName + "!"
console.log(greeting)
console.log(typeof(greeting))

//Longitud
console.log(greeting.length)
//Acceso a caracteres 
console.log(greeting[0])
console.log(greeting[11])
//Metodos comunes
console.log(greeting.toUpperCase()) //Transforma toda la cadena de texto a mayuscula
console.log(greeting.toLowerCase())//Transforma toda la cadena de texto a minuscula
console.log(greeting.indexOf("Daniel"))//Para encontrar el indice de la palabra a buscar
console.log(greeting.includes("Daniel")) //Verifica si la cadena de texto existe en la variable
console.log(greeting.slice(0,10))//Para restornar solo una parte de la cadena de texto (inicio,fin exculye el indice final 9)
console.log(greeting.replace("Daniel","Palabra remplazada"))//Sirve para remplazar partes de la cadena de textp
// Templates literals (plantillas literales)
let message= `hola este 
                es mi curso de 
                javascript`
console.log(message)
let email = "damiel@gmail.com"
console.log(`Hola   ${myName} tu email es ${email}`)