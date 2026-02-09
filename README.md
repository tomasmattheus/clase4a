# UMBRAL Estudio Jurídico - Landing Page

## Cómo ver la página en local

Tenés varias opciones simples para previsualizar la landing:

### Opción 1: abrir el HTML directamente
1. Hacé doble click sobre `index.html`.
2. Se abrirá en tu navegador por defecto.

### Opción 2: servidor local con Python (recomendado)
1. En la carpeta del proyecto ejecutá:
   ```bash
   python -m http.server 8000
   ```
2. Abrí en tu navegador:
   ```
   http://localhost:8000/index.html
   ```

### Opción 3: servidor local con Node
1. Instalá un servidor simple:
   ```bash
   npx serve .
   ```
2. Abrí la URL que te indique la terminal.

## Notas sobre la captura
La captura que se genera en este entorno aparece como un artefacto temporal (ruta `browser:/...`).
Si no la podés ver, podés generar tu propia captura local abriendo `index.html` y usando la
herramienta de screenshots del navegador.
