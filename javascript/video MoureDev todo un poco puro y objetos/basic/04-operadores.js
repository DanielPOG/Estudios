//Operadores

//Operadores aritmeticos
let a = 5
let b = 10
console.log(a+b) //Suma
console.log(a-b) //Resta
console.log(a*b) //Multiplicacion
console.log(a/b) //Division

console.log(a%b) //Modulo
console.log(a**b) //Exponente / potencia

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion
let myVar= 2
console.log(myVar)
myVar +=2
console.log(myVar)
myVar -=2
myVar *=2
myVar /=2
myVar %=2
myVar **=2
//Operadores de comparacion 
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b) //igualdad por valor
console.log(a===b) //Igualdad por identidad (Tipo y valor)
console.log(a!=b) 
console.log(a!==b) 
console.log(0 ==false) 
console.log(1 ==false) 
console.log(2 ==false) 
console.log(0 =='') 
console.log(0 =='Hola') 
console.log(undefined ==null) 
console.log(undefined ===null) 

//Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

//Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// cadenas de texto vacias

//Operadores Logicos
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 < 20 && 30 < 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 || 15 < 20 || 30 < 40)
console.log(5 < 10 && 15 < 20 || 30 < 40)

// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))


//Operadores ternarios 
const isRaining= true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo ")