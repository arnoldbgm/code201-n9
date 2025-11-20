/*
   DATOS PRIMITIVOS
Los tipos de datos dentro de Js
* String => Texto
* Number => Numericos
* Boolean => Verdadero o Falso -  true  false
*/

let nombre = "Diego";
console.log(nombre);

let edad = 16;
console.log(edad);

let esMayor = true;
console.log(esMayor);

/*
Mostrar este mensaje en consola
   Jose tiene 29 años
   alt + 96 =  `
*/
console.log(`${nombre} tiene ${edad} años`)

/*
   Mutabilidad
Mutar el valor de una variable
*/

let num1 = 10;

console.log(`La variable num1 vale ${num1}`);

num1 = 50;

console.log(`La variable num1 ahora vale ${num1}`);

/*
   Operaciones entre variables
Suma =>           +
Resta =>          -
Multiplicacion => *
Division =>       /
Residuo  =>       %
*/

let a = 15;
let b = 5;

let suma = a + b;
let resta = a - b;
let multi = a * b;
let divi = a / b;
let resto = a % b;

console.log(resto);
