//1. Escribe 1 comentario
// Este es un comentario

//2. Escribe un comentario en varias lineas
/**
 * Este es 
 * un comentario
 * en varias lineas
 */
//3. Declara las variables con valores asociasdos con todos los datos de tipo primitivo
let varString= 'Hola soy string'
let varNumber= 10
let varBoolean= true 
let varUndefined
let varNull= null
let varSymbol= Symbol('id')
let varBigInt= BigInt(1231231212312312321231)
//4. Imprime en consola el valor de todas las variables
console.log(varString)
console.log(varNumber)
console.log(varBoolean)
console.log(varUndefined)
console.log(varNull)
console.log(varSymbol)
console.log(varBigInt)
//5. Imprime en consola el tipo de todas las variables
console.log(typeof varString)
console.log(typeof varNumber)
console.log(typeof varBoolean)
console.log(typeof varUndefined)
console.log(typeof varNull)
console.log(typeof varSymbol)
console.log(typeof varBigInt)
//6. A continuacion, modifica los valores de las variables por otros del mismo tipo 
varString = 'hola soy otro string'
varNumber= 20
varBoolean=false
varUndefined
varNull= null
varSymbol= Symbol('identificador')
varBigInt= 2413423423434234234242332n
//7. A continuacion, modifica los valores de las variables por otros distinto  tipo 
varString = 12
varNumber= 'asdasd'
varBoolean=null
varUndefined=true
varNull
varSymbol= 2413423423434234234242332n 
varBigInt= Symbol('identificador')
//8. Declara constantes con valores asociados a todos los datos de tipo primitivo
const stringVar ='hola soy constante'
const numberVar=20
const booleanVar=true
// const undefinedVar
const nullVar= null
const symbolVar = Symbol('alo')
const bigIntVar =BigInt(123123123113123)
//9. A continuacion, Modifica los valores de las constantes 
stringVar ='alo'
numberVar=50
booleanVar=false
undefinedVar
nullVar= null
symbolVar = Symbol('hola')
bigIntVar =BigInt(234234)
//10. Comenta las lineas que produzcan algun tipo de error al ejecutares
// const undefinedVar
/*
stringVar ='alo'
numberVar=50
booleanVar=false
undefinedVar
nullVar= null
symbolVar = Symbol('hola')
bigIntVar =BigInt(234234)
*/