# 📋 Proyecto: Sistema de Control de Préstamos de Biblioteca

¡Bienvenidos al proyecto! En este documento encontrarán las **Historias de Usuario (HU)** que construiremos. Cada HU representa una pequeña pieza de funcionalidad que añadiremos a nuestra aplicación.

El objetivo es doble:
1.  Construir una aplicación funcional paso a paso.
2.  Aprender y aplicar prácticas profesionales como el control de versiones (`git`) y el trabajo en equipo mediante GitHub.

##  methodology de trabajo (Git Flow + GitHub)

Para mantener nuestro proyecto ordenado y trabajar como lo hacen los equipos de desarrollo profesionales, seguiremos una metodología de **Pull Requests (PRs)** en GitHub.

**La Regla de Oro:** La rama `main` está protegida. **Nadie sube cambios directamente a `main`**. Todo el trabajo se hace en ramas separadas y se integra a través de Pull Requests.

### Flujo de Trabajo para cada Historia de Usuario (HU)

Sigue estos pasos **siempre** que empieces a trabajar en una nueva HU:

1.  **Sincroniza tu rama `main` local.** Antes de empezar cualquier cosa, asegúrate de que tu `main` local tiene la última versión del proyecto desde GitHub.
    ```bash
    # 1. Cambia a la rama main
    git checkout main

    # 2. Descarga los últimos cambios del repositorio remoto (GitHub)
    git pull
    ```

2.  **Crea una nueva rama para la HU.** El nombre de la rama debe ser descriptivo. Usaremos el formato `feature/HU-XX-descripcion-corta`.
    ```bash
    # Ejemplo para la primera Historia de Usuario (HU-01)
    git checkout -b feature/HU-01-registrar-libro
    ```

3.  **¡A programar!** Ahora estás en tu propia rama. Aquí harás todos los cambios necesarios para completar la HU.

4.  **Guarda y sube tu rama a GitHub.** Una vez que la funcionalidad esté completa y probada, guarda tus cambios (`commit`) y súbelos a GitHub (`push`).
    ```bash
    # 1. Añade los archivos modificados
    git add .

    # 2. Crea el commit con un mensaje descriptivo
    git commit -m "feat(catalogo): Implementa HU-01 Registrar libro"

    # 3. Sube tu nueva rama a GitHub. La primera vez usa "--set-upstream"
    git push --set-upstream origin feature/HU-01-registrar-libro
    ```

5.  **Crea un Pull Request (PR) en GitHub.**
    - Ve a la página del repositorio en GitHub en tu navegador.
    - Verás un aviso para "Compare & pull request". Haz clic ahí.
    - **Base:** `main` (quieres que tus cambios vayan a `main`).
    - **Compare:** `feature/HU-01-registrar-libro` (tu rama con los cambios).
    - Pon un título claro y pide a un compañero de equipo que revise tu código.

6.  **Fusiona (Merge) el Pull Request.**
    - Una vez que tu compañero apruebe el PR (y las pruebas automáticas pasen, si las hubiera), el encargado del repositorio (o tú mismo) puede fusionar los cambios a `main` usando el botón "Merge pull request" en GitHub.

7.  **¡Repite el ciclo!** Ahora que tus cambios ya están en `main`, vuelve al paso 1 para empezar la siguiente tarea.

## 🗂️ Estructura del Proyecto

Para que cada vista tenga su propia lógica y no mezclar todo en un solo archivo, usaremos la siguiente estructura:

```
/12-Lab-Integral
|
|-- index.html         
|-- catalogo.html      
|-- prestamos.html     
|-- control.html       
|-- historial.html     
|
|-- js/
|   |-- catalogo.js    # Lógica para la vista de Catálogo
|   |-- prestamos.js   # Lógica para la vista de Préstamos
|   |-- control.js     # Lógica para la vista de Control
|   |-- historial.js   # Lógica para la vista de Historial
|
```
> **Importante:** Cada archivo HTML debe cargar **únicamente su propio archivo JavaScript**. Por ejemplo, `catalogo.html` debe tener ` <script src="js/catalogo.js" defer></script>` justo antes de `</body>`. La comunicación de datos entre las distintas vistas se realizará a través del `localStorage`, que es compartido por todo el dominio.

## 🧠 Estructura de Datos (Clave)

Nuestra aplicación necesita recordar la información. Usaremos `localStorage` para guardar arrays de objetos.

-   **Objeto `Libro`**:
    ```javascript
    {
      isbn: "978-0307474278",
      titulo: "El Código Da Vinci",
      autor: "Dan Brown",
      estado: "disponible" // "disponible" o "prestado"
    }
    ```

-   **Objeto `Prestamo`**:
    ```javascript
    {
      libroIsbn: "978-0307474278",
      persona: "Juan Pérez",
      fechaPrestamo: "2026-01-11",
      fechaDevolucion: null 
    }
    ```

---

## ✅ Historias de Usuario a Desarrollar

### 📚 MÓDULO 1: Registro de Libros (Catálogo)

#### HU-01: Registrar un nuevo libro
**Como** bibliotecario, **quiero** registrar libros (título, autor, ISBN) **para** tener un catálogo.
-   **Criterios de aceptación:**
    - ✅ En `catalogo.html`, se debe poder ingresar título, autor e ISBN.
    - ✅ Todos los campos son obligatorios.
    - ✅ Al registrar, el libro aparece en la tabla y se guarda en `localStorage`.
    - ✅ El libro nuevo siempre tiene `estado: "disponible"`.

#### HU-02: Ver listado de libros registrados
**Como** bibliotecario, **quiero** ver todos los libros registrados **para** conocer mi catálogo.
-   **Criterios de aceptación:**
    - ✅ `catalogo.html` muestra una tabla con todos los libros de `localStorage`.
    - ✅ La tabla muestra: título, autor, ISBN y estado.
    - ✅ La lista se actualiza automáticamente al agregar un libro.

#### HU-03: Eliminar un libro del catálogo
**Como** bibliotecario, **quiero** eliminar libros **para** mantener el catálogo actualizado.
-   **Criterios de aceptación:**
    - ✅ Cada fila en `catalogo.html` tiene un botón "Eliminar".
    - ✅ Al eliminar, el libro desaparece de la lista y de `localStorage`.
    - 🚧 **Reto:** No se puede eliminar un libro con `estado: "prestado"`.

---

### 🤝 MÓDULO 2: Préstamos y Devoluciones

#### HU-04: Registrar un préstamo
**Como** bibliotecario, **quiero** registrar un préstamo **para** controlar los libros fuera.
-   **Criterios de aceptación:**
    - ✅ En `prestamos.html`, el `<select>` muestra solo libros `disponibles`.
    - ✅ Se debe ingresar el nombre de la persona.
    - ✅ Se registra la fecha del préstamo.
    - ✅ El `estado` del libro cambia a `prestado`.
    - ✅ El nuevo `Prestamo` se guarda en `localStorage`.

#### HU-05: Registrar una devolución
**Como** bibliotecario, **quiero** marcar un libro como devuelto **para** que esté disponible de nuevo.
-   **Criterios de aceptación:**
    - ✅ En `prestamos.html`, la tabla de préstamos activos tiene un botón "Devolver".
    - ✅ Al devolver, se registra la `fechaDevolucion` en el `Prestamo`.
    - ✅ El `estado` del libro vuelve a ser `disponible`.
    - ✅ Los cambios se guardan en `localStorage`.

#### HU-06: Ver a quién está prestado un libro
**Como** bibliotecario, **quiero** ver quién tiene un libro prestado actualmente **para** saber a quién debo reclamar en caso de demora.
-   **Criterios de aceptación:**
    - ✅ En el listado de libros (`catalogo.html`), si un libro está prestado, se debe poder ver a quién. (Sugerencia: podrías añadirlo en la misma celda de "Estado").
    - ✅ Se muestra la fecha desde cuándo lo tiene.

---

### 📊 MÓDULO 3: Listado General y Control

#### HU-07: Ver todos los préstamos activos
**Como** bibliotecario, **quiero** ver todos los libros que están prestados en este momento **para** tener un control general.
-   **Criterios de aceptación:**
    - ✅ En `control.html` (o `prestamos.html`), se muestra una lista filtrada solo con libros prestados.
    - ✅ Se ve: título del libro, persona que lo tiene y fecha de préstamo.
    - ✅ La lista se actualiza al hacer préstamos o devoluciones.

#### HU-08: Ver libros disponibles
**Como** bibliotecario, **quiero** ver qué libros están disponibles para prestar **para** saber rápidamente qué puedo ofrecer.
-   **Criterios de aceptación:**
    - ✅ En `control.html`, se muestra una lista filtrada solo con libros `disponibles`.
    - ✅ Se ve al menos: título y autor.
    - ✅ La lista se actualiza automáticamente.

#### HU-09: Ver estadísticas básicas
**Como** bibliotecario, **quiero** ver contadores de libros totales, prestados y disponibles **para** tener una visión rápida del estado general.
-   **Criterios de aceptación:**
    - ✅ En `control.html`, se muestra el número total de libros registrados.
    - ✅ Se muestra la cantidad de libros con estado `prestado`.
    - ✅ Se muestra la cantidad de libros con estado `disponible`.
    - ✅ Los números se actualizan automáticamente.

---

### 📜 MÓDULO 4: Historial (Avanzado)

#### HU-10: Ver historial completo de préstamos
**Como** bibliotecario, **quiero** ver todos los préstamos realizados (incluso los ya devueltos) **para** tener un registro histórico.
-   **Criterios de aceptación:**
    - ✅ En `historial.html`, se muestran todos los préstamos: activos y finalizados.
    - ✅ Se muestra: libro, persona, fecha de préstamo y fecha de devolución (si aplica).

#### HU-11: Filtrar historial por persona
**Como** bibliotecario, **quiero** buscar todos los préstamos de una persona específica **para** conocer su historial.
-   **Criterios de aceptación:**
    - ✅ En `historial.html`, hay un campo de búsqueda por nombre de persona.
    - ✅ Al buscar, la tabla filtra solo los préstamos de esa persona.

---

### 🎨 MÓDULO TRANSVERSAL: Navegación

#### HU-12: Navegar entre vistas
**Como** bibliotecario, **quiero** cambiar fácilmente entre las diferentes secciones del sistema **para** acceder a las funciones que necesito.
-   **Criterios de aceptación:**
    - ✅ `index.html` contiene un menú de navegación claro.
    - ✅ Al hacer clic en un enlace, se carga la página correspondiente (ej: `catalogo.html`).
    - ✅ La navegación es fluida y clara.

---

### 💡 Orden de Implementación Recomendado

1.  **HU-01 y HU-02**: Base del catálogo.
2.  **HU-04 y HU-05**: Lógica de préstamos.
3.  **HU-07, HU-08, HU-09**: Vistas de control (lectura de datos).
4.  **HU-03 y HU-06**: Gestión y detalles.
5.  **HU-10 y HU-11**: Historial (avanzado).
6.  **HU-12**: Navegación.

¡Mucho éxito en el desarrollo!