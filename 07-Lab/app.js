alert("Bienvenido a mi billetera digital");

let nombre = prompt("¿Cual es tu nombre?");

alert(`Bienvenido ${nombre} a tu billetera digital`);

let opcion = prompt(`¿Cual es la operacion que vas a realizar?
   1- Ingresar dinero
   2- Retirar dinero
   `)

const billetera = [];

if (opcion == "1") {
   // Todo el codigo a ejecutar si la opcion es 1 => Ingreso
   let descripcionIngreso = prompt("¿Cual es la descripcion del ingreso?");
   let montoIngreso = Number(prompt("¿Cual es el monto a ingresar?"));

   // Objeto literal
   const ingreso = {
      descripcion: descripcionIngreso,
      monto: montoIngreso,
      tipo: "ingreso"
   }
   // Push propiedad para insertar un nuevo elemento al array
   // Se inserta al final del array
   billetera.push(ingreso);
   alert("Ingreso realizado correctamente");
   console.log(billetera)
}

if (opcion == "2") {
   // Todo el codigo a ejecutar si la opcion es 2 => Retiro
   let descripcionRetiro = prompt("¿Cual es la descripcion del retiro?");
   let montoRetiro = Number(prompt("¿Cual es el monto a retirar?"));

   // Objeto literal Retiro
   const retiro = {
      descripcion: descripcionRetiro,
      monto: montoRetiro,
      tipo: "retiro"
   }

   billetera.push(retiro);
   alert("Retiro realizado correctamente");
   console.log(billetera)
}