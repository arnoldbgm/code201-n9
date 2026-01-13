/**
 * TODO: RETO 01 😊
 * 
 * Mediante la manipulacion del DOM, capturar los elementos del formulario
 * y ademas capturar el boton de enviar
 * 
 * Generar un evento que al hacer click en el boton de Guardar producto
 * 
 *   1. Capturar los valores de los campos
 *   2. Crear un objeto literal con los valores capturados
 *       {
 *        nombre: 'Toyota Corola',
 *       precio: 15000,
 *       cantidad: 5
 *      }
 * 
 *   3. Imprime por consola el objeto literal creado
 * 
 *  IMPORTANTE:
 *  No te olvides de prevenir el comportamiento por defecto del formulario (Siempre se refrescan)
 * 
 *  TIP:
 *  Para mayor legibilidad, puedes crear funciones y asociarlas al evento
 *  
 *  ¡Mucha suerte!
 */


/* 1. Captura de los elementos del DOM */
let inptProductName = document.querySelector("#product-name");
let inptProductPrice = document.querySelector("#product-price");
let inptProductQuantiy = document.querySelector("#product-quantity");
let btnGuardar = document.querySelector("#guardar")

/* Obtener informacion del LocalStorage */
/*
   JSON.parse(localStorage.getItem("KEY"))
*/
let almacen = JSON.parse(localStorage.getItem("mini-bd")) || []

/* 2. Eventos */
btnGuardar.addEventListener("click", function (event) {
   event.preventDefault(); // Prevenimos el refresco del formulario

   let inptName = inptProductName.value;
   let inptPrice = Number(inptProductPrice.value);
   let inptQuantity = Number(inptProductQuantiy.value);

   let producto = {
      nombre: inptName,
      precio: inptPrice,
      cantidad: inptQuantity
   }

   almacen.push(producto)

   // Guardando la informacion en el localStorage
   localStorage.setItem("mini-bd", JSON.stringify(almacen))
   
   inptProductName.value = ""
   inptProductPrice.value = ""
   inptProductQuantiy.value = ""
})