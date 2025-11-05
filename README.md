# Guía Completa de CSS para Principiantes

## ¿Qué es CSS?

CSS (Cascading Style Sheets) es el lenguaje que define el estilo de los documentos HTML. Mientras HTML define la estructura, CSS define cómo se ve: colores, tamaños, tipografías, espacios… En pocas palabras: es la **ropa y maquillaje** de tu página web.

---

## Formas de aplicar CSS

### 1. Estilos inline

Se aplican directamente en el elemento HTML:

```html
<p style="color: blue; font-size: 16px;">Este es un párrafo con estilo directo</p>
```

### 2. Selectores por ID

Se usa para un solo elemento único:

```html
<div id="encabezado">Título principal</div>
```

```css
#encabezado {
  color: green;
  font-weight: bold;
  text-align: center;
}
```

### 3. Selectores de Clase

Para aplicar a varios elementos que comparten estilo:

```html
<p class="texto-importante">Mensaje destacado</p>
<div class="texto-importante">Otro elemento importante</div>
```

```css
.texto-importante {
  color: red;
  font-size: 18px;
  background-color: yellow;
}
```

---

## Propiedades CSS Básicas

### Propiedades de Texto

* `color`: Cambia el color del texto.
* `font-size`: Tamaño de la fuente.
* `font-weight`: Grosor (por ejemplo `normal`, `bold`, o valores numéricos como `700`).
* `text-align`: Alineación (`left`, `right`, `center`, `justify`).

### Propiedades de Fondo

* `background-color`: Color de fondo del elemento.
* `background-image`: Imagen de fondo. Por ejemplo:

```css
.elemento {
  background-image: url("ruta/imagen.jpg");
  background-size: cover; /* para que cubra */
  background-position: center;
}
```

### Propiedades de Borde y Radios

* `border`: Es la línea que rodea un elemento. Ejemplo:

```css
border: 2px solid black;
```

* `border-radius`: Para esquinas redondeadas. Por ejemplo:

```css
border-radius: 10px;
```

Según MDN Web Docs, `border-radius` permite valores en longitud o porcentaje, y uno de sus usos comunes es hacer un círculo si pones `50%`. ([MDN Web Docs][1])
Ejemplo:

```css
div {
  border-radius: 25px 10px; /* dos valores: diferentes radios */
}
```

### Ejemplo completo de estilos

```css
.box {
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #333;
  border: 3px dashed #ffcc00;
  border-radius: 12px;
}
```

---

## Box Model: Estructura de los Elementos 📦

Cada elemento HTML actúa como una “caja” que comprende las siguientes capas (de dentro hacia afuera):

1. **Contenido (Content)**: El texto o imagen que el usuario ve.
2. **Padding (Relleno)**: Espacio interno entre el contenido y el borde.
3. **Border (Borde)**: La línea que rodea la caja (opcional).
4. **Margin (Margen)**: Espacio externo que separa esta caja de otras.

![Image](https://media2.dev.to/dynamic/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F18sfy7anxl7uj5soub2i.png)

![Image](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)

![Image](https://media.geeksforgeeks.org/wp-content/uploads/20210317151556/marginpadding.png)

![Image](https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68c492a402f02a35c435fea4_680bd50e063190f807d7b219_66ce45417d9488e626903aac_61faef292259e74468db3cfd_image4.jpeg)

![Image](https://mustbebuilt.co.uk/html-css-material/images/boxModel-clr.png)

![Image](https://css-irl.info/logical-border-radius-02.webp)

### Ejemplo en CSS

```css
.caja {
  width: 300px;             /* ancho del contenido */
  padding: 20px;            /* espacio interno */
  border: 5px solid blue;   /* borde */
  margin: 10px;             /* espacio fuera de la caja */
}
```

### ¿Por qué es relevante?

* Si defines `width` y `height`, normalmente esos valores se refieren solo al contenido (content-box) y luego se suman padding + border para obtener el tamaño total. ([w3schools.com][2])
* Puedes cambiar la forma en que se calcula con `box-sizing: border-box;`, de modo que `width` incluya padding y border, lo que facilita el control de tamaños. ([MDN Web Docs][3])

### Margin vs Padding – ¿Cuál usar cuándo?

* **Padding**: espacio **dentro** de la caja, entre el contenido y el borde.
* **Margin**: espacio **fuera** de la caja, separando esta caja de otras. ([HubSpot Blog][4])

> Un comentario útil de Reddit:
> “Simplest way to remember: padding is the space between your div and its contents, margin is the space between your div and what’s outside of it.” ([Reddit][5])

---

## Más Propiedades Útiles

### Tamaño de fuente y grosor

```css
.elemento {
  font-size: 24px;       /* tamaño de la letra */
  font-weight: bold;     /* grosor de la letra */
}
```

### Color y fondo

```css
.elemento {
  color: #ffffff;                 /* color del texto */
  background-color: #007bff;     /* fondo de la caja */
  background-image: url("fondo.jpg");  /* imagen de fondo */
  background-size: cover;        /* que la imagen cubra bien */
}
```

### Borde con estilo y radios

```css
.elemento {
  border: 4px dashed #ff0000;    /* borde rojo con línea discontinua */
  border-radius: 15px;           /* esquinas redondeadas */
}
```

### Imagen de fondo

```css
.section {
  background-image: url("ruta/a/imagen.jpg");
  background-repeat: no-repeat;       /* que no se repita */
  background-position: center center; /* posición centrada */
  background-size: cover;             /* cubre el contenedor */
}
```

---

## Ejemplo Didáctico Completo

```html
<div class="tarjeta">
  <h2>Mi Tarjeta CSS</h2>
  <p>Esta es una explicación con estilo.</p>
</div>
```

```css
.tarjeta {
  width: 320px;
  padding: 20px;
  margin: 20px auto;              /* centrar horizontalmente */
  border: 3px solid #555;
  border-radius: 10px;
  background-color: #f0f0f0;
  background-image: url("fondo-tarjeta.png");
  background-size: cover;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
```

---

## Consejos Finales

* Usa **clases** para estilos reutilizables.
* Usa **IDs** sólo para estilos únicos.
* Evita abusar de los estilos inline (hacen el mantenimiento difícil).
* Organiza tu CSS: agrupa por bloques, usa comentarios si es necesario.
* Enséñales a tus alumnos a **experimentar**: cambiar valores y ver el efecto en la caja, borde, margen, relleno…
* Recuerda siempre explicar el **por qué**: por ejemplo, por qué `box-sizing: border-box;` puede ser útil cuando se diseña para responsive.

---

## Recursos Adicionales

* [MDN Web Docs – Box Model](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics#the_box_model)
* [W3Schools – CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) ([w3schools.com][2])
* [W3Schools – CSS Rounded Corners (`border-radius`)](https://www.w3schools.com/css/css3_borders.asp) ([w3schools.com][6])

---
