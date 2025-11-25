alert("Bienvenido a mi billetera digital");

let nombre = prompt("¿Cual es tu nombre?");

alert(`Bienvenido ${nombre} a tu billetera digital`);

const billetera = [];

let opcion = prompt(`¿Cual es la operacion que vas a realizar?
   1- Ingresar dinero
   2- Retirar dinero
   0- Salir
   `)

while (opcion !== "0") {
   if (opcion == "1") {
      operacionBilletera("ingreso");
   }

   if (opcion == "2") {
      operacionBilletera("retiro");
   }

   opcion = prompt(`¿Cual es la operacion que vas a realizar?
   1- Ingresar dinero
   2- Retirar dinero
   0- Salir
   `)

}

alert("Gracias por usar la billetera digital");


function operacionBilletera(tipoOperacion) {
   let descripcion = prompt("¿Cual es la descripcion de la operacion?").trim();
   if (descripcion.length == 0) {
      alert("Descripcion invalida");
      return; // Detener la ejecucion de la funcion
   }
   let monto = Number(prompt("¿Cual es el monto de la operacion?"));
   if (monto <= 0) {
      alert("Monto invalido");
      return;
   }
   // Vamos a crear un objeto literal
   const operacion = {
      descripcion: descripcion,
      monto: monto,
      tipo: tipoOperacion
   }
   billetera.push(operacion);
   alert("Retiro realizado correctamente");
   console.log(billetera)
}