/*
   0. Importaciones a librerias externas ó modulos (archivos)
   1. Captura Elementos del DOM - Crear variables 
*/

let selectTipo = document.querySelector("#tipo");
let inptDescripcion = document.querySelector("#descripcion");
let inptMonto = document.querySelector("#monto");
let btnGuardar = document.querySelector("#guardar");
let totalMovimientos = document.querySelector("#totalMovimientos");
let totalIngresos = document.querySelector("#totalIngresos");
let tbMovimientos = document.querySelector("#tablaMovimientos");
let btnActualizar = document.querySelector("#actualizar")

const billetera = []; // Porque es un array? Porque vamos a guardar varios objetos dentro
// Por que vacio? Porque al inicio no tenemos ningun gasto o ingreso registrado
let editarIndice = null;
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
   renderizarTabla();
})

btnActualizar.addEventListener("click", function(){
   let tipo = selectTipo.value; 
   let descripcion = inptDescripcion.value;
   let monto = Number(inptMonto.value);

   let operacion = {
      tipo,
      descripcion,
      monto,
   }

   billetera[editarIndice] = operacion;
   console.log(billetera);
   limpirValores();
   contarMovimientos();
   calcularIngresos();
   renderizarTabla();
  
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
   return ingresosCalc;
}

function renderizarTabla() {
   /*
   Crear o insertar un elemento desde JS
   innerHTML => Permite insertar un elemento HTML dentro de otro
*/
   tbMovimientos.innerHTML = ""; // Limpiar el contenido del tbody

   // Recorrer o manipular el array que contiene toda nuestra informacion
   billetera.forEach((elmt, index) => {
      // Aqui vamos a renderizar cada una de las filas
      tbMovimientos.innerHTML += `
         <tr class="border-b border-slate-700/50 hover:bg-slate-700/30">
            <td class="py-3 px-4">
               <span class="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded">${elmt.tipo}</span>
            </td>
            <td class="py-3 px-4 text-slate-200">${elmt.descripcion}</td>
            <td class="py-3 px-4 text-emerald-400 font-medium">${elmt.monto}</td>
            <td class="py-3 px-4 space-x-2">
               <button class="text-indigo-400 hover:text-indigo-300" onclick="editarMovimiento(${index})">Editar</button>
               <button class="text-red-400 hover:text-red-300" onclick="eliminarMovimiento(${index})">Eliminar</button>
            </td>
         </tr>
      `
   })
}

function eliminarMovimiento(index) {
   Swal.fire({
      title: "¿Estas seguro de elimnar este movimiento?",
      text: "Tu no podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!"
   }).then((result) => {
      if (result.isConfirmed) {
         Swal.fire({
            title: "Elimnado!",
            text: "Tu registro ha sido eliminado",
            icon: "success"
         });
         billetera.splice(index, 1); // Eliminamos el elemento del array
         console.log(billetera);
         contarMovimientos();
         calcularIngresos();
         renderizarTabla();
      }
   });
}

function editarMovimiento(index) {
   const mov = billetera[index];

   selectTipo.value = mov.tipo;
   inptDescripcion.value = mov.descripcion;
   inptMonto.value = mov.monto;

   editarIndice = index;
   console.log(`El indice global es ${editarIndice}`);
}