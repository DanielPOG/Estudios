// 1.Crea una variable para cada operacion aritmetica
let suma = 1+1
let resta = 2-3
let multiplicacion =2*2 
let division = 2/2
let modulo = 2%10
let potencia = 2**2
incremento = 1 
decremento = 2
incremento++ //Incremento 
decremento-- //Decremento

// 2.Crea una variable para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas 
suma +=2
resta -=2
multiplicacion *=2
division /=2
modulo %=2
potencia **=2
// 3.Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion 
let a =2
let a_valor= "2"
let b =1
console.log(a>1)
console.log(a == 2)
console.log(a_valor === "2")
console.log(b<a)
console.log(a!=b)
// 4.Imprime 5 comparaciones falsas con diferentes operadores de comparacion 
console.log(a<1)
console.log(a == 3)
console.log(a_valor === 2)
console.log(b>a)
console.log(a!=2)
// 5.Utiliza el operador logico and
console.log(a > b && b < a)
// 6.Utiliza el operador logico or
console.log(a > b || b > a)
// 7.Combina ambos operadores logicos
console.log(a > b && b < a || b > a)
// 8.Añade alguna negacion 
console.log(!(a > b && b < a || b > a))
// 9.Utiliza el operador ternario 
a > b ? console.log("Si es mayor"): console.log("No es mayor")
// 10.Combina operadores aritmeticos de comparacion y logicos
const var1= 2
const var2= 1
let resultado =var1 + var2 
console.log(resultado == 3)
resultado ? console.log("Se terminaron los ejercicios"): console.log("Aun faltan")