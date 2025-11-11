Perfecto 👍 Aquí tienes la **nueva guía en el mismo formato y estilo** que tu anterior README — con secciones claras, ejemplos de código, imágenes, y explicaciones didácticas — pero centrada en **Flexbox** y **LESS**.
Puedes copiar y pegar esto directamente como tu `README.md` de la clase de hoy.

---

# Guía Completa de Flexbox y LESS 💻

## ¿Qué es Flexbox?

**Flexbox** (Flexible Box Layout) es un modelo de diseño en CSS que facilita la alineación, distribución y organización de los elementos dentro de un contenedor, incluso cuando su tamaño es desconocido o dinámico.

En otras palabras: **Flexbox es la herramienta perfecta para alinear elementos sin complicarte con floats o posicionamientos absolutos**.

---

## Conceptos Clave

* **Contenedor (Flex Container)** → el elemento padre donde aplicas `display: flex`.
* **Elementos flexibles (Flex Items)** → los hijos directos del contenedor.
* **Eje principal (Main Axis)** → dirección en la que se alinean los elementos.
* **Eje cruzado (Cross Axis)** → perpendicular al eje principal.

![Image](https://samanthaming.gumlet.io/flexbox30/4-flexbox-axes.jpg.gz)
![Image](https://verpex.com/assets/uploads/images/blog/Understanding-CSS-Flexbox.webp?v=1707735727)
![Image](https://user.oc-static.com/upload/2018/06/14/15289918022085_1.png)

---

## Activando Flexbox

Para activar Flexbox en un contenedor:

```css
.contenedor {
  display: flex; /* o inline-flex */
}
```

Una vez que usas `display: flex`, todos los hijos se convierten en **flex items**, listos para alinearse de forma automática.

---

## Direcciones y Alineaciones

### 1. `flex-direction`

Define la dirección principal del eje:

```css
.contenedor {
  flex-direction: row; /* fila (por defecto) */
  /* row | row-reverse | column | column-reverse */
}
```

### 2. `justify-content`

Alinea los elementos en el **eje principal**:

```css
.contenedor {
  justify-content: center;
  /* opciones: flex-start | flex-end | center | space-between | space-around | space-evenly */
}
```

![Image](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

### 3. `align-items`

Alinea los elementos en el **eje cruzado**:

```css
.contenedor {
  align-items: center;
  /* opciones: stretch | flex-start | flex-end | center | baseline */
}
```

![Image](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

### 4. `flex-wrap`

Indica si los elementos deben “saltar” a otra línea cuando no caben:

```css
.contenedor {
  flex-wrap: wrap;
  /* opciones: nowrap | wrap | wrap-reverse */
}
```

![Image](https://tympanus.net/codrops/wp-content/uploads/2014/10/flex-wrap-illustration.jpg)

---

## Propiedades en los elementos hijos

### 1. `flex-grow`

Indica cuánto puede crecer un elemento dentro del espacio disponible.

```css
.item {
  flex-grow: 1; /* ocupa el mismo espacio que sus hermanos */
}
```

### 2. `flex-shrink`

Indica cuánto puede encogerse el elemento cuando no hay espacio suficiente.

```css
.item {
  flex-shrink: 1;
}
```

### 3. `flex-basis`

Define el tamaño base del elemento antes de aplicar `grow` o `shrink`.

```css
.item {
  flex-basis: 200px;
}
```

### 4. Propiedad abreviada

```css
.item {
  flex: 1 1 200px; /* grow | shrink | basis */
}
```

---

## Ejemplo Práctico

```html
<div class="contenedor">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

```css
.contenedor {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #f2f2f2;
}

.item {
  background: #007bff;
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 8px;
}
```

📘 **Resultado:** Los tres bloques se distribuyen uniformemente y se centran verticalmente en el contenedor.

---

## Casos de Uso Comunes

* Menús horizontales o barras de navegación.
* Galerías de tarjetas o productos.
* Footers alineados.
* Contenedores responsivos.
* Centrado perfecto de un elemento.

![Image](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

---

## Ejercicio Didáctico

Crea una **galería de tres tarjetas** que se adapten al tamaño de la ventana usando Flexbox:

```html
<div class="galeria">
  <div class="tarjeta">1</div>
  <div class="tarjeta">2</div>
  <div class="tarjeta">3</div>
</div>
```

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.tarjeta {
  width: 200px;
  height: 150px;
  background-color: #6c63ff;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 150px;
  border-radius: 10px;
}
```

---

## ¿Qué es LESS?

![Image](https://lesscss.org/public/img/less_logo.png)
![Image](https://belvg.com/blog/wp-content/uploads/2016/02/blog-less_css.jpg)

**LESS (Leaner Style Sheets)** es un **preprocesador de CSS** que agrega características avanzadas como:

* **Variables**
* **Anidación (nesting)**
* **Mixins**
* **Funciones y operaciones matemáticas**

💡 LESS hace que escribir CSS sea **más rápido, reutilizable y mantenible**.
Luego, el archivo `.less` se **compila** en CSS estándar para el navegador.

---

## Sintaxis Básica de LESS

### Variables

```less
@color-principal: #4CAF50;

.boton {
  background-color: @color-principal;
  color: white;
}
```

### Anidación (Nesting)

```less
.card {
  background: #fff;

  h2 {
    color: #333;
  }

  p {
    color: #666;
  }
}
```

### Mixins (bloques reutilizables)

```less
.borde-redondeado(@radio: 10px) {
  border-radius: @radio;
}

.caja {
  .borde-redondeado(20px);
  background: #f0f0f0;
}
```

### Operaciones Matemáticas

```less
@ancho-base: 100px;

.caja {
  width: @ancho-base * 3; /* 300px */
}
```

---

## Compilación de LESS a CSS

Para usar LESS necesitas **compilarlo** a CSS.

Puedes hacerlo de varias formas:

1. **Desde Node.js**

   ```bash
   npm install -g less
   lessc estilos.less estilos.css
   ```

2. **Desde el navegador (modo educativo)**

   ```html
   <link rel="stylesheet/less" type="text/css" href="estilos.less" />
   <script src="https://cdn.jsdelivr.net/npm/less@4"></script>
   ```

---

## Ejemplo Completo de LESS

```less
@color-fondo: #f7f7f7;
@color-primario: #0066ff;

.tarjeta {
  background-color: @color-fondo;
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: @color-primario;
  }

  .boton {
    background-color: darken(@color-primario, 10%);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
      background-color: lighten(@color-primario, 5%);
    }
  }
}
```

🔄 Al compilar, esto se convierte en CSS estándar.

---

## Actividad Práctica con LESS

1. Crea un archivo `estilos.less`.
2. Define una variable `@color-principal`.
3. Crea un mixin `.boton()` que defina padding, color y borde.
4. Usa ese mixin para dar estilo a varios botones.
5. Compila a `estilos.css` y enlázalo a tu HTML.

---

## Conclusión 🎓

| Tema        | Beneficio Principal                                             |
| ----------- | --------------------------------------------------------------- |
| **Flexbox** | Control total sobre la alineación y el espacio entre elementos. |
| **LESS**    | Código CSS más limpio, rápido y reutilizable.                   |

Ambas herramientas hacen que el diseño web moderno sea más **eficiente**, **ordenado** y **responsivo**.

---

## Recursos Recomendados

* [MDN Web Docs – Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [CSS-Tricks – A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [LESS Documentation](https://lesscss.org/)
* [FreeCodeCamp – CSS Flexbox Guide](https://www.freecodecamp.org/news/the-css-flexbox-handbook/)
* [W3Schools – LESS Tutorial](https://www.w3schools.com/less/)

---

¿Quieres que te lo prepare en formato **Markdown listo para GitHub** o en **PDF para proyectar en clase**? Puedo generarte cualquiera de los dos.
