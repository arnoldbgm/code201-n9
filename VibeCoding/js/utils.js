/**
 * @file Contiene funciones de utilidad reutilizables en todo el sistema.
 */

/**
 * Genera un identificador único basado en la fecha actual y un número aleatorio.
 * @returns {string} Un ID único.
 */
function generarId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Formatea un objeto Date o un string de fecha al formato YYYY-MM-DD.
 * @param {Date | string} date - La fecha a formatear.
 * @returns {string} La fecha formateada.
 */
function formatearFecha(date) {
    const d = new Date(date);
    const anio = d.getFullYear();
    const mes = (`0${d.getMonth() + 1}`).slice(-2);
    const dia = (`0${d.getDate()}`).slice(-2);
    return `${anio}-${mes}-${dia}`;
}

/**
 * Limpia los valores de los campos de un formulario.
 * @param {HTMLFormElement} form - El formulario a limpiar.
 */
function limpiarFormulario(form) {
    form.reset();
}
