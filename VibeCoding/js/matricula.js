/**
 * @file Maneja la lógica de la vista de matrícula (matricula.html).
 * Se encarga de capturar los datos del formulario, guardarlos y renderizar
 * la lista de alumnos matriculados.
 */

// --- EVENT LISTENERS ---

// Espera a que el DOM esté completamente cargado para ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
    const matriculaForm = document.getElementById('matricula-form');

    // Manejar el envío del formulario de matrícula.
    matriculaForm.addEventListener('submit', handleMatriculaSubmit);

    // Renderizar la tabla de alumnos al cargar la página.
    renderAlumnosTable();
});


// --- HANDLERS (Manejadores de eventos) ---

/**
 * Maneja el evento de envío del formulario de matrícula.
 * @param {Event} event - El objeto del evento.
 */
function handleMatriculaSubmit(event) {
    event.preventDefault(); // Evita que la página se recargue.

    const form = event.target;
    const formData = new FormData(form);

    // Convierte los datos del formulario a un objeto.
    const nuevoAlumno = {
        nombres: formData.get('nombres'),
        apellidos: formData.get('apellidos'),
        grado: formData.get('grado'),
        seccion: formData.get('seccion'),
        apoderado: formData.get('apoderado'),
        telefono: formData.get('telefono'),
    };

    // Validación simple (los campos required del HTML ya ayudan).
    if (!nuevoAlumno.nombres || !nuevoAlumno.apellidos || !nuevoAlumno.grado || !nuevoAlumno.seccion) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Guarda el nuevo alumno usando la función de data.js.
    saveAlumno(nuevoAlumno);

    // Limpia el formulario.
    limpiarFormulario(form);

    // Vuelve a renderizar la tabla para mostrar el nuevo alumno.
    renderAlumnosTable();
}


// --- RENDER FUNCTIONS (Funciones de renderizado) ---

/**
 * Renderiza la tabla de alumnos matriculados.
 */
function renderAlumnosTable() {
    const alumnos = getAlumnos();
    const tableBody = document.getElementById('alumnos-table-body');
    const noAlumnosRow = document.getElementById('no-alumnos-row');

    // Limpia el contenido actual de la tabla.
    tableBody.innerHTML = '';

    if (alumnos.length === 0) {
        // Muestra el mensaje si no hay alumnos.
        if(noAlumnosRow) tableBody.appendChild(noAlumnosRow);
    } else {
        // Oculta el mensaje si hay alumnos.
        if (noAlumnosRow) noAlumnosRow.style.display = 'none';

        // Crea una fila para cada alumno.
        alumnos.forEach(alumno => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50';

            row.innerHTML = `
                <td class="px-6 py-4">
                    <div class="font-medium text-gray-900">${alumno.nombres} ${alumno.apellidos}</div>
                </td>
                <td class="px-6 py-4 text-gray-600">${alumno.grado} - ${alumno.seccion}</td>
                <td class="px-6 py-4 text-gray-600">${alumno.apoderado}</td>
                <td class="px-6 py-4 text-gray-600">${alumno.telefono}</td>
                <td class="px-6 py-4 text-right">
                    <a href="alumno.html?id=${alumno.id}" class="text-indigo-600 hover:text-indigo-800 font-medium">
                        Ver Perfil
                    </a>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}
