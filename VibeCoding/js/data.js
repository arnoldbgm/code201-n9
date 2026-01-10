/**
 * @file Maneja toda la lógica de datos, actuando como una capa de abstracción
 * para localStorage. Simula una base de datos para el frontend.
 */

// --- ESTRUCTURAS DE DATOS ---

/**
 * @typedef {object} Alumno
 * @property {string} id - ID único del alumno.
 * @property {string} nombres - Nombres del alumno.
 * @property {string} apellidos - Apellidos del alumno.
 * @property {string} grado - Grado del alumno.
 * @property {string} seccion - Sección del alumno.
 * @property {string} apoderado - Nombre del apoderado.
 * @property {string} telefono - Teléfono del apoderado.
 */

/**
 * @typedef {object} Asistencia
 * @property {string} alumnoId - ID del alumno al que pertenece el registro.
 * @property {string} fecha - Fecha del registro en formato YYYY-MM-DD.
 * @property {'presente' | 'ausente' | 'tarde'} estado - Estado de la asistencia.
 */


const ALUMNOS_KEY = 'alumnos';
const ASISTENCIAS_KEY = 'asistencias';

// --- FUNCIONES PARA ALUMNOS ---

/**
 * Obtiene todos los alumnos de localStorage.
 * @returns {Alumno[]} Un array de todos los alumnos.
 */
function getAlumnos() {
    const alumnos = localStorage.getItem(ALUMNOS_KEY);
    return alumnos ? JSON.parse(alumnos) : [];
}

/**
 * Guarda un nuevo alumno en localStorage.
 * Asigna un ID único si el alumno no tiene uno.
 * @param {Omit<Alumno, 'id'>} alumnoData - Los datos del alumno a guardar.
 */
function saveAlumno(alumnoData) {
    const alumnos = getAlumnos();
    const nuevoAlumno = {
        id: generarId(),
        ...alumnoData
    };
    alumnos.push(nuevoAlumno);
    localStorage.setItem(ALUMNOS_KEY, JSON.stringify(alumnos));
}

/**
 * Busca y devuelve un alumno por su ID.
 * @param {string} id - El ID del alumno a buscar.
 * @returns {Alumno | undefined} El alumno encontrado o undefined.
 */
function getAlumnoById(id) {
    const alumnos = getAlumnos();
    return alumnos.find(alumno => alumno.id === id);
}

// --- FUNCIONES PARA ASISTENCIAS ---

/**
 * Obtiene todos los registros de asistencia de localStorage.
 * @returns {Asistencia[]} Un array con todos los registros de asistencia.
 */
function getAsistencias() {
    const asistencias = localStorage.getItem(ASISTENCIAS_KEY);
    return asistencias ? JSON.parse(asistencias) : [];
}

/**
 * Guarda o actualiza una lista de registros de asistencia para una fecha específica.
 * Elimina los registros antiguos para esa fecha y los reemplaza con los nuevos.
 * @param {Asistencia[]} nuevasAsistencias - La lista de asistencias a guardar.
 * @param {string} fecha - La fecha de los registros a actualizar.
 */
function saveAsistencias(nuevasAsistencias, fecha) {
    let asistencias = getAsistencias();
    
    // Filtrar los registros que NO son de la fecha que se está actualizando
    const asistenciasDeOtrasFechas = asistencias.filter(asistencia => asistencia.fecha !== fecha);
    
    // Combinar los registros antiguos (de otras fechas) con los nuevos
    const asistenciasActualizadas = [...asistenciasDeOtrasFechas, ...nuevasAsistencias];
    
    localStorage.setItem(ASISTENCIAS_KEY, JSON.stringify(asistenciasActualizadas));
}

/**
 * Obtiene el historial de asistencias para un alumno específico.
 * @param {string} alumnoId - El ID del alumno.
 * @returns {Asistencia[]} Un array con el historial de asistencias del alumno.
 */
function getAsistenciasByAlumnoId(alumnoId) {
    const asistencias = getAsistencias();
    return asistencias.filter(asistencia => asistencia.alumnoId === alumnoId);
}
