// Tipos de datos primitivos 

// String (Cadena de texto) 
let name= 'Daniel Caicedo'
let alias= "Dani"
let email = `daniel@gmail.com`
// Number (Numeros)
let edad = 18 //Entero
let altura= 1.72 //Decimal

//Boolean (Booleanos)
let estudiante = true
let profesor = false

//Undefined (esta declarada pero no tiene ningun valor)
let varUndefined
console.log(varUndefined)

//Null
let varNull = null 

//Symbol (Identificadores unicos)
let varSymbol= Symbol('varSymbol')

//Bigint
let varBigInt= BigInt(2012333333333333333333333333333333333333333333333333333333333333333333)
let varBigInt2= 2012333333333333333333333333333333333333333333333333333333333333333333n

//Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof edad)
console.log(typeof estudiante)
console.log(typeof varUndefined)
console.log(typeof varNull)
console.log(typeof varSymbol)
console.log(typeof varBigInt)