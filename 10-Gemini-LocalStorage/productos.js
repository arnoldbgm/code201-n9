const data = JSON.parse(localStorage.getItem("mini-bd"));


console.log("Hola me encuentro en la vista de productos");

console.log(data);

/*
   Como renderizar en una pantalla
   1. Capturar el elemento donde se va a renderizar
   2. Recorrer la data o la informacion que deseamos renderizar
*/

let gridContent = document.querySelector("#product-grid")

data.forEach((elmt, index) => {
   /* Vamos a renderizar dentro de la grilla */
   gridContent.innerHTML += `
         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transform hover:scale-105 transition-transform duration-200">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">${elmt.nombre}</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-1"><span class="font-medium">Precio:</span> ${elmt.precio}</p>
                <p class="text-gray-600 dark:text-gray-400"><span class="font-medium">Cantidad:</span> ${elmt.cantidad}</p>
         </div>
   `
})