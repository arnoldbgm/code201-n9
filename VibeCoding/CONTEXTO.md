#### CONTEXTO
📌 CONTEXTO GENERAL DEL PROYECTO

Estoy desarrollando un software web simple para el registro de matrículas y control de asistencia de alumnos de una institución educativa.

El proyecto es solo frontend, usando:

HTML

Tailwind CSS

JavaScript puro (Vanilla JS)

Sin frameworks (no React, no Vue)

Sin backend real (los datos se almacenan con localStorage)

El objetivo es construir un sistema funcional, claro y educativo, pensado para un desarrollador junior.

🧩 VISTAS DEL SISTEMA

El sistema cuenta con 4 vistas principales, cada una en su propio archivo HTML y JS:

1️⃣ Dashboard (index.html)

Vista principal del sistema

Muestra información general mediante cards:

Total de alumnos matriculados

Porcentaje de asistencia del día

Cantidad de alumnos ausentes

Puede incluir un gráfico simple (placeholder)

2️⃣ Registro de Matrícula (matricula.html)

Formulario para registrar alumnos con los siguientes campos obligatorios:

Nombres

Apellidos

Grado

Sección

Apoderado

Teléfono

Botón para registrar la matrícula

Tabla (grilla) que muestra todos los alumnos matriculados

Acciones básicas por alumno (ver perfil)

3️⃣ Registro de Asistencia (asistencia.html)

Permite registrar la asistencia de los alumnos

Incluye:

Selector de fecha

Selector de grado y sección

Tabla de alumnos con opciones:

Presente

Ausente

Tarde

Botón para guardar la asistencia

4️⃣ Perfil del Alumno (alumno.html)

Vista individual de un alumno

Muestra:

Datos personales del alumno

Grado y sección

Apoderado y teléfono

Tabla con el historial de asistencia del alumno:

Fecha

Estado (Presente / Ausente / Tarde)

🏗️ ARQUITECTURA DEL PROYECTO

La arquitectura es simple y pensada para juniors, con un archivo JS por vista y archivos compartidos mínimos.

/matriculas-app
│
├── index.html
├── matricula.html
├── asistencia.html
├── alumno.html
│
├── /css
│   └── styles.css
│
├── /js
│   ├── data.js        # Manejo de datos y localStorage
│   ├── utils.js       # Funciones auxiliares
│   │
│   ├── dashboard.js
│   ├── matricula.js
│   ├── asistencia.js
│   └── alumno.js

🧠 RESPONSABILIDADES DE LOS ARCHIVOS
data.js

Simula un backend usando localStorage

Se encarga de:

Guardar y obtener alumnos

Guardar y obtener asistencias

No contiene lógica de UI

utils.js

Funciones reutilizables como:

Generar IDs

Formatear fechas

Limpiar formularios

No accede directamente a la UI

Archivos de vista (*.js)

Manejan eventos del DOM

Llaman a data.js para guardar u obtener datos

Renderizan tablas y contenido visual

No acceden directamente a localStorage

🔄 FLUJO GENERAL DEL SISTEMA
HTML
 ↓
JS de la vista
 ↓
data.js
 ↓
localStorage

📐 REGLAS IMPORTANTES PARA EL CÓDIGO

Código simple, legible y comentado

Nada de sobre–ingeniería

Pensado para aprendizaje

Usar funciones claras

Cada archivo debe cumplir una sola responsabilidad

🎯 OBJETIVO FINAL

Tener un sistema funcional, entendible y escalable, que permita:

Registrar alumnos

Registrar asistencia

Consultar historial por alumno

Visualizar métricas básicas en el dashboard

⚠️ IMPORTANTE

Aún NO generes código hasta que se te solicite específicamente por archivo.