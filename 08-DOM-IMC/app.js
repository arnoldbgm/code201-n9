/*
   Como trabajar con JS 💡
   ***************************************
   - Siempre capturamos los elementos del DOM
   - Funciones para manejar eventos
   - Funciones para actualizar el DOM
   - Funciones para manjeo de datos

   TIPS
   ****************************************
   1. Usa let y const
   2. Usa nombres descriptivos para variables y
   funciones
   3. Usa funciones pequeñas y específicas
   4. Comenten su codigo

   *****************************************
   querySelector( Capturamos el elemento como si fuera CSS)
*/

/*
   ¿Cual es criterio para capturar elementos del DOM?
   Siempre capturaremos los elementos que interactuan
   o vamos a usarlos
*/

let pesoInpt = document.getElementById("peso");
let estaturaInpt = document.getElementById("estatura");
let limpiarBtn = document.getElementById("limpiar");
let calcularIMCBtn= document.getElementById("calcularIMC");
let resultadoTxt = document.querySelector('#resultado');

// addEventListener => Controlar los eventos
/*
   Eventos comunes:
   - click
   - change
   - submit
   - keyup
   - keydown
*/

/*
   🚨 IMPORTANTE:
   Cuando trabajamos con formularios, y tenemos botones ( y no especificamos
   el tipo de boton), por defecto el boton es de tipo "submit"
   ¿Como solucionamos o evitamos de que estos se refresquesquen automaticamente?

   1. Especificar el tipo de boton en el HTML (type="button")
   2. Usar el metodo preventDefault() en el evento
*/

// Usamos la opcion 1. Especificar el tipo de boton en el HTML (type="button")
limpiarBtn.addEventListener("click", function(){
   // Aqui viene toda nuestra logica para limpiar los inputs
   /*
      En los inputs podemos acceder al valor "value"
   */
   pesoInpt.value = "";
   estaturaInpt.value = "";
})

//  2. Usar el metodo preventDefault() en el evento
calcularIMCBtn.addEventListener("click", function(event){
   /*
      ¿Que es el event?
      El event es un objeto que contiene informacion
   */
   event.preventDefault(); // Evitamos el comportamiento por defecto
   let pesoValue = pesoInpt.value;
   let estaturaValue = estaturaInpt.value
   // IMC = peso (kg) / estatura²
   let IMCresultado = pesoValue / (estaturaValue * estaturaValue)
   /*
      💡 Manipulacion de texto
      - textContent => Sirve para agregar texto plano (Texto oculto)
      - innerHTML => Sirve para agregar HTML
      - innerText => Similar a textContent pero con algunas diferencias
       ¿Cuales son las diferencias innerText vs textContent?
      El textContent no respeta los estilos CSS
      El innerText respeta los estilos CSS
   */
   resultadoTxt.textContent = IMCresultado;
})