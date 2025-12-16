/*
   1. Captura Elementos del DOM - Crear variables 
*/

let selectTipo = document.querySelector("#tipo");
let inptDescripcion = document.querySelector("#descripcion");
let inptMonto = document.querySelector("#monto");
let btnGuardar = document.querySelector("#guardar");
let totalMovimientos = document.querySelector("#totalMovimientos");
let totalIngresos = document.querySelector("#totalIngresos");

const billetera = []; // Porque es un array? Porque vamos a guardar varios objetos dentro
// Por que vacio? Porque al inicio no tenemos ningun gasto o ingreso registrado

/*
   2. Creacion de eventos
*/
btnGuardar.addEventListener("click", function (event) {
   event.preventDefault(); // Evitar que se recargue la pagina

   let tipo = selectTipo.value;
   let descripcion = inptDescripcion.value;
   let monto = Number(inptMonto.value);

   // Validaciones
   /*
      Son usadas para verificar el tipo de la informacion
      que va a ser almacenada
   */

   if (descripcion.length <= 3) {
      alert("La despcripcion debe tener mas de 3 caracteres");
      return;
   }

   if (monto <= 0 || isNaN(monto)) {
      alert("El monto debe ser positivo y un numero valido");
      return;
   }

   let operacion = {
      tipo,
      descripcion,
      monto,
   }

   billetera.push(operacion);
   console.log(billetera);

   /*
      Reto 02:
      Limpiar los campos del formulario
   */
   limpirValores();
   contarMovimientos();
   calcularIngresos();
})

function limpirValores() {
   inptDescripcion.value = "";
   inptMonto.value = "";
}

function contarMovimientos() {
   totalMovimientos.textContent = billetera.length;
}

function calcularIngresos() {
   /*Calcular el total de ingresos */
   let ingresos = billetera.filter((elemnt) => elemnt.tipo === "Ingreso")
   let ingresosCalc = ingresos.reduce((acc, elmt) => acc + elmt.monto, 0);
   totalIngresos.textContent = ingresosCalc;
}