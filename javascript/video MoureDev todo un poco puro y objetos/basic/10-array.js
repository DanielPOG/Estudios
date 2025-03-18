//array 

//Declaracion 
let myArray= []
let myArray2= new Array()
console.log(myArray)
console.log(myArray2)

//Inicializacion
myArray= [1]
myArray2= new Array(1)

console.log(myArray)
console.log(myArray2)

myArray= [1,2,3,4,5]
myArray2= new Array(1,2,3,4,5)

console.log(myArray)
console.log(myArray2)

myArray= ["Daniel","pepe",23,true]
myArray2= new Array("Daniel","pepe",23,true)

console.log(myArray)
console.log(myArray2)

myArray2= new Array(3)
myArray2[0]="casilla1"
myArray2[1]="casilla2"
myArray2[2]="casilla3"
console.log(myArray2)

myArray= []

myArray[0]="casilla1"
// myArray[1]="casilla2"
myArray[2]="casilla3"
console.log(myArray)

//Metodos comunes

myArray= []

//push y pop
myArray.push("daniel") //Agrega respetad el indice en orden
myArray.push("caicedo")
myArray.push("pog")
console.log(myArray)

myArray.pop()//Elimina el ultimo elemento
console.log(myArray.pop())//Elimina el ultimo elemento y lo devuelve
console.log(myArray)

//shift  y unshift
myArray.shift() //Eliminar el primer elemento del array = al pop y lo devuelve
console.log(myArray)

myArray.unshift("daniel","caicedo")//Agregar 1 o mas elementos al principio del array
console.log(myArray)
// length 
console.log(myArray.length)
//clear 
// myArray = []
// myArray.length= 0 //no recomendada
console.log(myArray)
//slice
myArray= [1,2,3,4,5]
let myNewArray = myArray.slice(1,3) //Nos devuelve solo una parte del array respecto al indice (inicio, fin)
console.log(myArray)
console.log(myNewArray)

//splice
myArray.splice(1,3) //elimina elementos respecto a una posicion (inicio/cuantos elementos quieres eliminar)
console.log(myArray)


myArray= [1,2,3,4,5] 
myArray.splice(1,3,"Nuevo elemento")  //Elimina posicion inicial y final (todo el intervalo) y se añade al final un objeto
console.log(myArray)