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

/*
   Constantes
A valores inmutables => fijos que nunca van a cambiar
*/

const fechaNacimiento = "16/03/1996";
const pi = 3.1415964;
const nroDni = 12345678;

/*
   Estructuras de control
Yo puedo controlar el flujo de mi aplicativo

Ejemplo
Somos una entidad financiera y solo otorgamos prestamos a
aquelso emprendedores con un capital minimo de 500 soles
*/

let capital = 1050;

// if (condicion) {}
if (capital >= 500 ){
   // El codigo a ejecutarse si es que se cumple la condicion
   console.log("Bienvenido a la financiera")
   console.log("Un gusto en atenderlo")
} else {
   console.log("No podemos atenderlo por su poco capital")
}

/*
   Reto 01
Crear la varible edadDisco y asignar el valor de 16
Si la edadDisco es mayor a 18, que se muestre en consola
"Puedes ingresar"
Y en caso que no se cumpla la condicion
"Retirese"
*/

/*
   If corto => Ternario
*/

let edadDisco = 24;

edadDisco >= 18 ? console.log("Puedes ingresar") : console.log("Retirese")

/*
   Funciones
*/

let invitado = "Orlando";

console.log(`Buenos dias ${invitado}`);

invitado = "Angel";

console.log(`Buenos dias ${invitado}`);

invitado = "Cesar";

console.log(`Buenos dias ${invitado}`);

function saludar(){
   console.log("Buenos dias soy una funcion");
}

function saludarInvitado (nombreInvitado){
   console.log(`Buenos dias ${nombreInvitado}`);
}

saludarInvitado("Juan");
saludarInvitado("Romel");
saludarInvitado("Christian");

function areaTrapecio(baseMayor, baseMenor, altura){
   let area = (baseMayor + baseMenor) / 2 * altura
   // console.log(`El area del trapecio es ${area}`)
   /* Return => Retornar un valor */
   return area;
}

let resultadoFuncion = areaTrapecio(9.5, 3.5, 4)

console.log(resultadoFuncion)


/*
🍏 RETO 01:
Crear una funcion para convertir grados celcius a fahrenheit
esta debe de retonar el valor de los grados fahrenheit
 F  = (C * 1.8) +32

🍏 RETO 02:
Crear una funcion para calcular el IGV de un producto esta 
debe de retonar el valor del IGV  de un producto
 IGV =  Valor * 0.18

🍏 RETO 03:
Crear una funcion para calcular el area de un hexagono este
debe de retonar el area
 Area = Perimeto  * apotema / 2
*/

// 🍏 RETO 02
// Valor = 100
// Igv = 100 * 0.18 = 18

function valorIGV (valor){
   return valor * 0.18;
   /*
      let vIGV = valor * 0.18;
      return vIGV;
   */
}

let valorDemo= valorIGV(100)
console.log(valorDemo)

function areaHexagono (perimetro, apotema){
   return perimetro * apotema / 2;
}

let areaHex = areaHexagono(100, 6)
console.log(areaHex);

/*
   Funcion que me indique si una persona es mayor de edad

   Juan es mayor de edad
   Juan es menor de edad
*/

function mayoriaDeEdad(nombre, edad){
   if(edad >= 18){
      console.log(`${nombre} es mayor de edad`);
   } else {
      console.log(`${nombre} es menor de edad`);
   }
}

mayoriaDeEdad("Jose", 16);

/*
   RETO 04:

Somos la tienda Ripley y nos encontramos dando descuentos
de un 20% sobre las compras a los clientes que realizen
compras mayores o iguales a 200 soles.
Si un comprador realiza un compra mayor a 200 soles 
se aplicara el descuento del 20%
Compra = 200
Descuento = 200 * 20% = 40
Va pagar = 160
Se debe de mostrar en consola "Estimado cliente ud pagara 160"
Y cuando la compra no supere los 200 soles
Compra = 130
Se mostrara en consola  "Estimado cliente  ud pagara 130"
*/

function ventasRipley(montoCompra){
   if(montoCompra >= 200){
      let descuentoCompra = montoCompra * 0.20;
      let totalPagar = montoCompra - descuentoCompra;
      console.log(`Estimado cliente, ud pagara ${totalPagar}`)
   } else {
      console.log(`Estimado cliente, ud pagara ${montoCompra}`)
   }
}

ventasRipley(200);
ventasRipley(130);