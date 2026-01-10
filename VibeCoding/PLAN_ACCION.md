PASO 00 (Nuevo – MUY IMPORTANTE)
Normalización de la UI y estructura base

Objetivo: partir de una base limpia antes de escribir lógica.

Migrar todo el contenido textual de las vistas a español

Corregir y unificar:

Sidebar

Navbar (si existe)

Colores y tipografías

Asegurar que todas las vistas:

Usen el mismo layout

Tengan los mismos enlaces de navegación

Verificar que los IDs y clases del HTML sean coherentes y reutilizables

👉 Este paso evita refactors innecesarios más adelante.

🔹 PASO 01
Definición de estructura de datos y utilidades

Objetivo: preparar el “mini backend” antes de tocar las vistas.

Definir estructura de datos:

Alumno

Asistencia

Implementar data.js:

Funciones para guardar y obtener alumnos

Funciones para guardar y obtener asistencias

Implementar utils.js:

Generación de IDs

Manejo de fechas

Funciones auxiliares comunes

👉 Nada de DOM todavía.

🔹 PASO 02
Desarrollo de funcionalidades – Vista matricula.html

Objetivo: lograr el primer flujo funcional completo.

Capturar datos del formulario de matrícula

Validar campos obligatorios

Guardar alumnos en localStorage

Renderizar tabla de alumnos matriculados

Actualizar tabla automáticamente al registrar un alumno

Preparar enlace para ver perfil del alumno

✅ Al finalizar este paso ya debes poder registrar alumnos reales.

🔹 PASO 03
Desarrollo de funcionalidades – Vista asistencia.html

Objetivo: registrar asistencia de alumnos por fecha.

Cargar alumnos según grado y sección

Mostrar lista de alumnos en la tabla

Permitir marcar:

Presente

Ausente

Tarde

Guardar asistencia por alumno y por fecha

Evitar duplicar asistencia para la misma fecha

🔹 PASO 04
Desarrollo de funcionalidades – Vista alumno.html

Objetivo: vista de detalle por alumno.

Obtener el ID del alumno desde la URL

Mostrar datos personales del alumno

Obtener y mostrar historial de asistencia

Renderizar estados de asistencia con estilos visuales

🔹 PASO 05
Desarrollo de funcionalidades – Vista dashboard.html

Objetivo: visualización de métricas generales.

Calcular:

Total de alumnos

Asistencia del día

Alumnos ausentes

Mostrar métricas en cards

(Opcional) Mostrar gráfico simple de asistencia semanal

🔹 PASO 06 (Nuevo – recomendado)
Pruebas y ajustes finales

Objetivo: pulir el sistema.

Probar flujos completos:

Registrar alumno → marcar asistencia → ver perfil

Corregir errores de lógica

Ajustar UI/UX:

Mensajes de éxito

Mensajes de error

Limpiar código y comentarios innecesarios