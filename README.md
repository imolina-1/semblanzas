# Simulador de semblanzas PAU

Entrenamiento para la pregunta 3 de la PAU de Historia del Arte (2.º de Bachillerato, Comunidad de Madrid): «De los 5 artistas que se proponen, elija 3, explicando su época, características y obras más significativas».

**Web:** https://imolina-1.github.io/semblanzas/

## Qué incluye

- **Simulacro:** cinco artistas al azar de los temas elegidos, cronómetro de 27 minutos y corrección orientativa (época, características y obras del currículo) con la semblanza modelo.
- **Fichas de obras:** identificar al autor a partir de la imagen, con repaso espaciado (las obras falladas vuelven antes).
- **Consulta:** las 139 semblanzas de los temas 1 a 17, con buscador y enlaces directos (`#a-nombre-del-artista`).
- Funciona sin conexión y se puede instalar en el móvil (aplicación web progresiva).

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa (diseño y programación) |
| `semblanzas.json` | Los textos de las semblanzas |
| `img/` | Una imagen por artista |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Uso sin conexión e instalación en el móvil |

## Cómo actualizar

1. Sustituye `semblanzas.json` (y, si hace falta, las imágenes de `img/`).
2. En `sw.js`, sube el número de `VERSION` (por ejemplo, `semblanzas-v2`) para que los móviles descarguen la versión nueva.

La nota del simulacro es orientativa: comprueba la presencia de contenidos, no la calidad de la redacción.

Material de uso docente. Las imágenes proceden de las presentaciones de clase; las obras y fotografías conservan los derechos de sus autores.
