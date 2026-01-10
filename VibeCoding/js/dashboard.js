/**
 * @file Maneja la lógica de la vista del dashboard (index.html).
 * Se encarga de calcular y mostrar las métricas generales del sistema.
 */

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    updateDashboardMetrics();
});


// --- CORE FUNCTIONS ---

/**
 * Orquesta el cálculo y la visualización de todas las métricas del dashboard.
 */
function updateDashboardMetrics() {
    // Obtener los datos necesarios desde el "backend" (data.js)
    const alumnos = getAlumnos();
    const asistencias = getAsistencias();
    const fechaHoy = formatearFecha(new Date());

    // --- 1. Calcular el total de alumnos ---
    const totalAlumnos = alumnos.length;

    // --- 2. Calcular métricas de asistencia del día ---
    const asistenciasHoy = asistencias.filter(asistencia => asistencia.fecha === fechaHoy);
    
    let porcentajeAsistencia = 0;
    let totalAusentes = 0;

    if (asistenciasHoy.length > 0) {
        const presentes = asistenciasHoy.filter(a => a.estado === 'presente').length;
        totalAusentes = asistenciasHoy.filter(a => a.estado === 'ausente').length;
        
        // Evitar división por cero
        porcentajeAsistencia = Math.round((presentes / asistenciasHoy.length) * 100);
    }
    
    // --- 3. Renderizar las métricas en las tarjetas ---
    renderMetrics(totalAlumnos, porcentajeAsistencia, totalAusentes);
}


// --- RENDER FUNCTIONS ---

/**
 * Muestra las métricas calculadas en las tarjetas correspondientes del DOM.
 * @param {number} totalAlumnos - El número total de alumnos matriculados.
 * @param {number} porcentajeAsistencia - El porcentaje de asistencia del día.
 * @param {number} totalAusentes - El número total de alumnos ausentes hoy.
 */
function renderMetrics(totalAlumnos, porcentajeAsistencia, totalAusentes) {
    const totalAlumnosEl = document.querySelector('#card-total-alumnos .text-3xl');
    const asistenciaHoyEl = document.querySelector('#card-asistencia-hoy .text-3xl');
    const ausentesHoyEl = document.querySelector('#card-ausentes-hoy .text-3xl');

    if (totalAlumnosEl) {
        totalAlumnosEl.textContent = totalAlumnos;
    }

    if (asistenciaHoyEl) {
        asistenciaHoyEl.textContent = `${porcentajeAsistencia}%`;
    }

    if (ausentesHoyEl) {
        ausentesHoyEl.textContent = totalAusentes;
    }
}
