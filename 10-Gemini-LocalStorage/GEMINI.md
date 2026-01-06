# Aplicación de Control de Productos

Este proyecto es una aplicación sencilla para el control de productos, desarrollada utilizando solo HTML, JavaScript y Tailwind CSS, sin el uso de frameworks.

## Archivos Generados:

-   `index.html`: Contiene el formulario para el registro de nuevos productos (Nombre, Precio, Cantidad). Incluye un botón para navegar a la vista de productos.
-   `productos.html`: Muestra los productos registrados en un formato de grilla. Contiene un botón para regresar al formulario de registro.
-   `app.js`: Este archivo está enlazado a ambos HTML y está destinado para que implementes la lógica JavaScript necesaria para la aplicación.

## Características Clave:

-   **Registro de Productos:** Formulario intuitivo para añadir nuevos productos.
-   **Visualización de Productos:** Grilla para listar y ver los productos creados.
-   **Navegación Fluida:** Botones de navegación entre las dos vistas.
-   **Diseño Moderno:** Estilizado con Tailwind CSS para una experiencia de usuario agradable.

## Próximos Pasos (Implementación de JavaScript):

Como has mencionado, la funcionalidad de JavaScript la implementarás tú. Aquí te dejo algunas sugerencias para `app.js`:

1.  **Manejo del Formulario (`index.html`):**
    *   Captura los valores de los campos del formulario (`product-name`, `product-price`, `product-quantity`).
    *   Valida los datos de entrada.
    *   Guarda los productos en el `localStorage` del navegador (por ejemplo, como un array de objetos).
    *   Asegúrate de que, al guardar un producto, la lista en `productos.html` se actualice correctamente.

2.  **Carga y Visualización de Productos (`productos.html`):**
    *   Al cargar `productos.html`, lee los productos almacenados en el `localStorage`.
    *   Crea dinámicamente las tarjetas de producto en la grilla (`#product-grid`) basándote en los datos del `localStorage`.
    *   Muestra un mensaje si no hay productos registrados.

3.  **Comunicación entre Vistas:**
    *   Asegúrate de que los cambios en una vista (ej. agregar un producto) se reflejen al volver a la otra vista (ej. ver la lista actualizada).

¡Mucha suerte con el desarrollo de la lógica JavaScript! Si tienes alguna pregunta sobre la estructura HTML/CSS o necesitas alguna modificación, no dudes en preguntar.
