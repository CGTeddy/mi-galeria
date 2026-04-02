# Mi Galería 📸

Galería de fotos con slideshow automático y efecto fade.

## Cómo agregar tus fotos

1. Creá una carpeta llamada `imagenes` dentro de esta carpeta
2. Poné tus fotos adentro con nombres como `foto1.jpg`, `foto2.jpg`, etc.
3. Abrí `index.html` y modificá la sección de slides:

```html
<div class="slide active">
  <img src="imagenes/TU-FOTO.jpg" alt="Descripción" />
</div>
```

- El primer slide debe tener la clase `active`
- Los demás solo tienen la clase `slide`
- Podés agregar o quitar slides según cuántas fotos tengas

## Personalización

- **Tiempo entre fotos**: En `script.js`, cambiá el valor de `INTERVALO` (en milisegundos). Por ejemplo, `5000` = 5 segundos.
- **Color de fondo**: En `style.css`, cambiá la variable `--bg`.
- **Color del acento**: Cambiá la variable `--accent`.

## Subir a Vercel

1. Subí esta carpeta a un repositorio de GitHub
2. Conectá el repositorio en vercel.com
3. ¡Listo! Tu sitio queda en línea automáticamente.
