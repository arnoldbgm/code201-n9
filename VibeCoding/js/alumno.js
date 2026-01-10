/**
 * @file Maneja la lógica de la vista de perfil del alumno (alumno.html).
 * Se encarga de obtener el ID del alumno de la URL, buscar sus datos
 * y renderizar su perfil y su historial de asistencia.
 */

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    renderPerfilAlumno();
});


// --- RENDER FUNCTIONS ---

/**
 * Orquesta el renderizado completo del perfil del alumno.
 */
function renderPerfilAlumno() {
    const alumnoId = getAlumnoIdFromURL();
    const perfilContenido = document.getElementById('perfil-contenido');
    const loadingDiv = document.getElementById('loading');

    if (!alumnoId) {
        loadingDiv.innerHTML = '<p class="text-red-500">No se proporcionó un ID de alumno.</p>';
        return;
    }

    const alumno = getAlumnoById(alumnoId);

    if (!alumno) {
        loadingDiv.innerHTML = `<p class="text-red-500">No se encontró ningún alumno con el ID: ${alumnoId}</p>`;
        return;
    }

    const asistencias = getAsistenciasByAlumnoId(alumnoId);

    // Limpiar el contenedor principal y el mensaje de carga.
    perfilContenido.innerHTML = '';

    // Crear y añadir el HTML del perfil y la tabla de asistencia.
    perfilContenido.appendChild(createPerfilCard(alumno));
    perfilContenido.appendChild(createAsistenciaTable(asistencias, alumno));
}

/**
 * Crea el elemento de la tarjeta de perfil del alumno.
 * @param {Alumno} alumno - El objeto del alumno.
 * @returns {HTMLElement} El elemento de la sección del perfil.
 */
function createPerfilCard(alumno) {
    const section = document.createElement('section');
    section.className = 'bg-white rounded-xl border border-gray-200 shadow-sm p-6';
    section.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                <span class="material-symbols-outlined" style="font-size: 48px;">person</span>
            </div>
            <div class="flex flex-col">
                <h2 class="text-2xl font-bold tracking-tight">${alumno.nombres} ${alumno.apellidos}</h2>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    <p class="text-gray-600 text-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-xs">school</span>
                        ${alumno.grado} - ${alumno.seccion}
                    </p>
                    <p class="text-gray-600 text-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-xs">badge</span>
                        ID: ${alumno.id}
                    </p>
                </div>
                <div class="mt-4 border-t pt-4">
                    <p class="text-sm">
                        <span class="font-semibold">Apoderado:</span> ${alumno.apoderado}
                    </p>
                    <p class="text-sm">
                        <span class="font-semibold">Teléfono:</span> ${alumno.telefono}
                    </p>
                </div>
            </div>
        </div>
    `;
    return section;
}

/**
 * Crea la tabla con el historial de asistencia del alumno.
 * @param {Asistencia[]} asistencias - El array de asistencias del alumno.
 * @returns {HTMLElement} El elemento de la sección de la tabla.
 */
function createAsistenciaTable(asistencias, alumno) {
    const section = document.createElement('section');
    section.className = 'bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden';
    
    let tableRows = '';

    if (asistencias.length === 0) {
        tableRows = `
            <tr>
                <td colspan="2" class="text-center py-10 text-gray-500">
                    No hay registros de asistencia para ${alumno.nombres} ${alumno.apellidos}.
                </td>
            </tr>
        `;
    } else {
        // Ordenar asistencias por fecha, de más reciente a más antigua.
        asistencias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

        asistencias.forEach(asistencia => {
            const { texto, clase } = getEstiloEstado(asistencia.estado);
            tableRows += `
                <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 text-gray-600">${formatearFecha(asistencia.fecha)}</td>
                    <td class="px-6 py-4">
                        <span class="px-3 py-1 text-xs font-semibold rounded-full ${clase}">
                            ${texto}
                        </span>
                    </td>
                </tr>
            `;
        });
    }

    section.innerHTML = `
        <div class="p-6 border-b">
            <h3 class="text-lg font-bold">Historial de Asistencia</h3>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Fecha</th>
                        <th class="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Estado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
    return section;
}


// --- HELPERS ---

/**
 * Obtiene el ID del alumno de los parámetros de la URL.
 * @returns {string | null} El ID del alumno o null si no se encuentra.
 */
function getAlumnoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Devuelve el texto y la clase CSS para un estado de asistencia.
 * @param {'presente' | 'ausente' | 'tarde'} estado - El estado de la asistencia.
 * @returns {{texto: string, clase: string}}
 */
function getEstiloEstado(estado) {
    switch (estado) {
        case 'presente':
            return { texto: 'Presente', clase: 'bg-green-100 text-green-800' };
        case 'ausente':
            return { texto: 'Ausente', clase: 'bg-red-100 text-red-800' };
        case 'tarde':
            return { texto: 'Tarde', clase: 'bg-yellow-100 text-yellow-800' };
        default:
            return { texto: 'Desconocido', clase: 'bg-gray-100 text-gray-800' };
    }
}
