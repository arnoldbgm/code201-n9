// 1. Declaramos una variable global para guardar los datos.
// La inicializamos como null o un array vacío porque al principio no tenemos datos.
let datosDeUsuarios = null;

// 2. Obtenemos el botón y el contenedor donde mostraremos los datos
const botonCargar = document.getElementById('cargarDatos');
const contenedorUsuarios = document.getElementById('contenedorUsuarios');

// 3. Añadimos un "escuchador de eventos" al botón para que cuando se haga click,
// ejecute nuestra función para cargar los datos.
botonCargar.addEventListener('click', () => {
    console.log('Botón "Cargar Usuarios" clickeado.');
    cargarYMostrarUsuarios();
});

// 4. Creamos la función que hará la petición con fetch y mostrará los datos
async function cargarYMostrarUsuarios() {
    // La URL de donde vamos a pedir los datos. Esta es una API de prueba.
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        console.log('Haciendo petición a:', url);
        // fetch(url) hace la petición al servidor.
        // await espera a que el cartero traiga la respuesta antes de seguir.
        const respuesta = await fetch(url);

        // Si la respuesta no es OK (por ejemplo, error 404), lanzamos un error.
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // respuesta.json() convierte la respuesta en un formato que JavaScript entiende (JSON).
        // await espera a que se convierta antes de seguir.
        const datos = await respuesta.json();

        // 5. ¡Aquí guardamos los datos en nuestra variable global!
        datosDeUsuarios = datos;
        console.log('Datos de usuarios cargados y guardados en datosDeUsuarios:', datosDeUsuarios);

        // 6. Ahora vamos a "renderizar" (mostrar) los datos en la página.
        renderizarUsuarios();

    } catch (error) {
        // Si algo sale mal (problema de red, error del servidor, etc.), lo mostramos en la consola.
        console.error('Hubo un error al obtener los datos:', error);
        contenedorUsuarios.innerHTML = `<p style="color: red;">Error al cargar los usuarios: ${error.message}</p>`;
    }
}

// Función para mostrar los usuarios en el HTML
function renderizarUsuarios() {
    // Limpiamos el contenedor antes de añadir nuevos elementos
    contenedorUsuarios.innerHTML = '';

    if (datosDeUsuarios && datosDeUsuarios.length > 0) {
        console.log('Renderizando usuarios...');
        datosDeUsuarios.forEach(usuario => {
            const divUsuario = document.createElement('div');
            divUsuario.style.border = '1px solid #ccc';
            divUsuario.style.margin = '10px';
            divUsuario.style.padding = '10px';
            divUsuario.innerHTML = `
                <h2>${usuario.name}</h2>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
            `;
            contenedorUsuarios.appendChild(divUsuario);
        });
    } else {
        contenedorUsuarios.innerHTML = '<p>No hay usuarios para mostrar o aún no se han cargado.</p>';
    }
}

// Puedes llamar a renderizarUsuarios al inicio si quieres que muestre un mensaje inicial,
// o simplemente después de cargar los datos.
renderizarUsuarios(); // Mostrará "No hay usuarios..." al cargar la página por primera vez.
