/*
   Programacion Funcional
Es un paradigma de programacion donde va a primar el uso
de funciones
*/

// Map
const notas = [15, 16, 18, 12, 6, 9];

const notasAumentas = notas.map(elemento => elemento + 1)

const precios = [15, 20, 25, 35, 50]

const preciosMultiplicados = precios.map(elemento => elemento * 2 / 3)

precios
preciosMultiplicados
/*
  Sirve:
  * Crear un nuevo array a partir de otro
  * Recorrer un array y aplicar una funcion a cada elemento
  * No se modifica el arreglo original
*/

/**
   🍏 RETO 01
   A partir del siguiente arreglo
   const celcius = [0, 10, 20, 30, 40 ,50 ,60 ,70]
   Convertir los grados celcius a farenheit

   F = (C * 9/5) + 32
 */

const celcius = [0, 10, 20, 30, 40, 50, 60, 70]
console.log(celcius)
const farenheit = celcius.map(elmt => (elmt * 9 / 5) + 32)
console.log(farenheit)

/**
   🍏 RETO 02
   Usando map aplicar un descuetno del 20% a todas las prendas
   que sean mayores o iguales a 150 dolares

   const ropaPrecio = [50, 150, 200, 350, 450, 20]
  
 */

const ropaPrecio = [50, 150, 200, 350, 450, 20];

const ropaDescuento = ropaPrecio.map(elmt => {
   if (elmt >= 150) {
      let dscto = elmt * 0.2;
      let precioFinal = elmt - dscto;
      return precioFinal;
   } else {
      return elmt;
   }
})

console.log(ropaPrecio)
console.log(ropaDescuento)


/*
   Filter => Sirve
Pueda filtrar de un array los elementos que cumplan
una determinada condicion y crear un nuevo array a partir de ello
*/

const edades = [16, 17, 18, 19, 20, 21, 15, 13, 12, 11]

const edadesFiltradas = edades.filter(elmt => elmt >= 18)

console.log(edadesFiltradas)


const clientes = [
   { nombre: "Juan", edad: 18 },
   { nombre: "Ana", edad: 16 },
   { nombre: "Carlos", edad: 21 },
   { nombre: "Maria", edad: 15 },
   { nombre: "Pedro", edad: 25 }
]

//                                                condicion
const clientesFiltrados = clientes.filter(elmt => elmt.edad >= 18)

console.log(clientesFiltrados)

/*
   🍏 RETO 03
   A partir del siguiente arreglo de jugadores de futbol de la liga española
   filtrar los jugadores que sean del Real Madrid y sean de nacionalidad española

   const jugadores = [     
      { nombre: "Sergio Ramos", equipo: "Real Madrid", nacionalidad: "Española" },
      { nombre: "Lionel Messi", equipo: "Barcelona", nacionalidad: "Argentina" },
      { nombre: "Karim Benzema", equipo: "Real Madrid", nacionalidad: "Francesa" },
      { nombre: "Andres Iniesta", equipo: "Barcelona", nacionalidad: "Española" },
      { nombre: "Isco", equipo: "Real Madrid", nacionalidad: "Española" },
   ]

*/
const jugadores = [
   { nombre: "Sergio Ramos", equipo: "Real Madrid", nacionalidad: "Española" },
   { nombre: "Lionel Messi", equipo: "Barcelona", nacionalidad: "Argentina" },
   { nombre: "Karim Benzema", equipo: "Real Madrid", nacionalidad: "Francesa" },
   { nombre: "Andres Iniesta", equipo: "Barcelona", nacionalidad: "Española" },
   { nombre: "Isco", equipo: "Real Madrid", nacionalidad: "Española" },
]

const jugFilt = jugadores.filter(elmt => elmt.equipo == "Real Madrid" && elmt.nacionalidad == "Española")

// La propiedad para conocer la cantidad de elementos de un arreglo  .length

console.log(jugFilt.length)

/*
   🍏 RETO 04
   A partir del siguiente arreglo de productos
   filtrar los productos que tengan un stock mayor a 50 y que sean "Electronica"

   const productos = [
      { nombre: "Televisor", categoria: "Electronica", stock: 30 },
      { nombre: "Laptop", categoria: "Electronica", stock: 80 },
      { nombre: "Camiseta", categoria: "Ropa", stock: 100 },
      { nombre: "Celular", categoria: "Electronica", stock: 150 },
      { nombre: "Pantalones", categoria: "Ropa", stock: 60 },
   ]

   Retornar la cantidad de productos que cumplen con la condicion
*/

/*
   Reduce
Sirve para realizar una operacion acumulativa sobre los elementos de un array

Ejm
 [1,2,3,4,5] => suma => 15
*/

const numeros = [1, 2, 3, 4, 5];

// 1 + 2 + 3 + 4 + 5 = 15
const sumaNumeros = numeros.reduce((acc, elmt) => acc + elmt, 0)

console.log(sumaNumeros)

/**
   🍏 RETO 05
   A partir del siguiente arreglo del carrito de compras
   calcular el total a pagar de todos los productos en el carrito

   const carrito = [
      { nombre: "Televisor", precio: 500 },
      { nombre: "Laptop", precio: 800 },
      { nombre: "Celular", precio: 300 },
      { nombre: "Audifonos", precio: 150 },
   ]
 */

const carrito = [
   { nombre: "Televisor", precio: 500 },
   { nombre: "Laptop", precio: 800 },
   { nombre: "Celular", precio: 300 },
   { nombre: "Audifonos", precio: 150 },
]

const totalCarrito = carrito.reduce((acc, elmt) => acc + elmt.precio, 0)

console.log(totalCarrito)

/*
   🍏 RETO 06

   A partir del siguiente arreglo de ventas diarias
   calcular el promedio de ventas del dia

   const ventasDiarias = [150, 200, 300, 250, 400, 500, 600]

   Promedio = Suma de ventas / cantidad de ventas
*/

/*
   🍏 RETO 07
   Estamos en un colegio y tenemos las siguientes calificaciones de los estudiantes
   const calificaciones = [
      { nombre: "Juan", calificacion: 85 },
      { nombre: "Ana", calificacion: 92 },
      { nombre: "Carlos", calificacion: 78 },
      { nombre: "Maria", calificacion: 95 },
      { nombre: "Pedro", calificacion: 88 },
   ]  

   TAREA: 
   * Calcular el promedio de calificaciones de los estudiantes
   * Obtener un arreglo con los nombres de los estudiantes que tienen calificaciones mayores
    o iguales a 90
   * Obtener un promedio de las calificacciones de estudiantes que tienen calificaciones 
    mayores a 90 

   🍏 RETO 08
   A partir del siguiente arreglo de transacciones bancarias
   const transacciones = [
      { tipo: "deposito", monto: 500 },
      { tipo: "retiro", monto: -200 },
      { tipo: "deposito", monto: 300 },
      { tipo: "retiro", monto: -100 },
      { tipo: "deposito", monto: 400 },
   ]

   TAREA:
   * Calcular el balance final de la cuenta bancaria
   * Obtener un arreglo con todas las transacciones de tipo "deposito"
   * Contar la cantidad de transacciones de tipo "retiro"
   * Mostrar el monto de la transaccion mas alta
   * Mostrar el monto de la transaccion mas baja
   * Calcular el promedio de las transacciones de tipo "deposito"
   * Calcular el promedio de las transacciones de tipo "retiro"
*/