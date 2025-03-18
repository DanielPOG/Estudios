// 1.Concatena dos cadenas de texto
let primerText ="Buenas mi gente"
let segundoText ="Hola"
console.log(segundoText + " " + primerText)
// 2.Muestra la logitudad de una cadena de texto
console.log(primerText.length)
// 3.Muestra el primer y ultimo caracter de un string   
console.log(primerText[0])
console.log(primerText[14])
// 4.Convierte en mayuscula y minuscula un string 
console.log(primerText.toUpperCase())
// 5.Crea una cadena de texto en varias lineas
let VariasLineas= `Este es
un texto 
de varias 
lineas` 
// 6.Interpola el valor de una variable en un string
console.log(`${segundoText} ${primerText}`)
// 7.Reemplaza todos los espacios en blanco de un string por guiones
console.log(primerText.replace(/ /g, "-"))
// 8.Comprueba si una cadena de texto contiene una palabra en concreta 
console.log(primerText.includes("gente"))
// 9.Comprueba si dos strings son iguales 
console.log(segundoText == primerText)
let var1= "hola"
let var2= "hola"
console.log(var1 === var2)
// 10.Comprueba si dos strings tienen la misma longitud
let longitud1 =var1.length
let longitud2= var2.length

longitud1 == longitud2 ? console.log("Son iguales de tamaño"): console.log("No son iguales en tamañp")