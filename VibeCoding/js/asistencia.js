/**
 * @file Maneja la lógica de la vista de asistencia (asistencia.html).
 * Permite seleccionar un grupo de alumnos por fecha, grado y sección,
 * registrar su asistencia y guardarla.
 */

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    // Configuración inicial al cargar la página.
    initializeAsistenciaView();

    const filtrarBtn = document.getElementById('filtrar-btn');
    const guardarBtn = document.getElementById('guardar-asistencia-btn');

    // Manejar el clic en el botón de filtrar.
    filtrarBtn.addEventListener('click', handleFiltroSubmit);

    // Manejar el clic en el botón de guardar.
    guardarBtn.addEventListener('click', handleGuardarAsistencia);
});

// --- INITIALIZATION ---

/**
 * Configura los elementos iniciales de la vista de asistencia.
 */
function initializeAsistenciaView() {
    // Establecer la fecha de hoy como valor por defecto.
    const fechaInput = document.getElementById('fecha');
    fechaInput.value = formatearFecha(new Date());

    // Poblar el selector de grado y sección.
    populateGradoSeccionSelector();
}

/**
 * Pobla el selector de grado y sección basado en los alumnos registrados.
 */
function populateGradoSeccionSelector() {
    const alumnos = getAlumnos();
    const selector = document.getElementById('grado-seccion');

    // Usar un Set para obtener combinaciones únicas de grado y sección.
    const combinaciones = new Set(
        alumnos.map(a => `${a.grado}|${a.seccion}`)
    );

    combinaciones.forEach(combo => {
        const [grado, seccion] = combo.split('|');
        const option = document.createElement('option');
        option.value = combo;
        option.textContent = `${grado} - ${seccion}`;
        selector.appendChild(option);
    });
}

// --- HANDLERS ---

/**
 * Maneja el evento de clic en el botón "Filtrar Alumnos".
 */
function handleFiltroSubmit() {
    const fecha = document.getElementById('fecha').value;
    const combo = document.getElementById('grado-seccion').value;

    if (!fecha || !combo) {
        alert('Por favor, seleccione una fecha, grado y sección.');
        return;
    }

    const [grado, seccion] = combo.split('|');
    renderAsistenciaTable(fecha, grado, seccion);
}

/**
 * Maneja el evento de clic para guardar la asistencia.
 */
function handleGuardarAsistencia() {
    const fecha = document.getElementById('fecha').value;
    const tableBody = document.getElementById('asistencia-table-body');
    const rows = tableBody.querySelectorAll('tr[data-alumno-id]');

    const nuevasAsistencias = [];
    rows.forEach(row => {
        const alumnoId = row.dataset.alumnoId;
        const estadoSeleccionado = row.querySelector(`input[name="asistencia-${alumnoId}"]:checked`).value;

        nuevasAsistencias.push({
            alumnoId,
            fecha,
            estado: estadoSeleccionado,
        });
    });

    // Guardar los registros usando la función de data.js.
    saveAsistencias(nuevasAsistencias, fecha);

    alert('Asistencia guardada con éxito.');
}


// --- RENDER FUNCTIONS ---

/**
 * Renderiza la tabla de asistencia para un grupo específico de alumnos.
 * @param {string} fecha - La fecha para la cual se registrará la asistencia.
 * @param {string} grado - El grado a filtrar.
 * @param {string} seccion - La sección a filtrar.
 */
function renderAsistenciaTable(fecha, grado, seccion) {
    const alumnos = getAlumnos().filter(a => a.grado === grado && a.seccion === seccion);
    const asistenciasHoy = getAsistencias().filter(as => as.fecha === fecha);
    const tableBody = document.getElementById('asistencia-table-body');
    const guardarBtn = document.getElementById('guardar-asistencia-btn');

    tableBody.innerHTML = ''; // Limpiar tabla.

    if (alumnos.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-10 text-gray-500">
                    No hay alumnos registrados en ${grado} - ${seccion}.
                </td>
            </tr>
        `;
        guardarBtn.classList.add('hidden');
        return;
    }
    
    guardarBtn.classList.remove('hidden');

    alumnos.forEach(alumno => {
        // Buscar si ya existe un registro de asistencia para este alumno en esta fecha.
        const asistenciaExistente = asistenciasHoy.find(a => a.alumnoId === alumno.id);
        const estadoActual = asistenciaExistente ? asistenciaExistente.estado : 'presente'; // 'presente' por defecto.

        const row = document.createElement('tr');
        row.dataset.alumnoId = alumno.id; // Guardar el ID en el data attribute.

        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${alumno.apellidos}, ${alumno.nombres}</td>
            <td class="px-6 py-4 text-center">
                <input type="radio" name="asistencia-${alumno.id}" value="presente" class="form-radio h-5 w-5 text-green-600" 
                    ${estadoActual === 'presente' ? 'checked' : ''}>
            </td>
            <td class="px-6 py-4 text-center">
                <input type="radio" name="asistencia-${alumno.id}" value="ausente" class="form-radio h-5 w-5 text-red-600"
                    ${estadoActual === 'ausente' ? 'checked' : ''}>
            </td>
            <td class="px-6 py-4 text-center">
                <input type="radio" name="asistencia-${alumno.id}" value="tarde" class="form-radio h-5 w-5 text-yellow-500"
                    ${estadoActual === 'tarde' ? 'checked' : ''}>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
