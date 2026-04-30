# Proyecto 1 - Portal Multiverso

SPA en React + Vite con React Router, Tailwind y consumo de la API de Rick and Morty.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Requisitos cubiertos

- Vite + React
- React Router con rutas de inicio, exploracion, detalle por ID, favoritos, contacto y 404
- Fetch de lista y detalle por ID
- Estados UI: loading, error, empty
- Busqueda y filtro en tiempo real
- Favoritos en estado global y persistencia en localStorage
- Formulario controlado con validacion y boton disabled
- Toasts success/error/info con auto-dismiss
- Modal de confirmacion con dialog nativo + useRef + showModal
- Dark pattern intencional comentado en el codigo
- SVG inline en JSX
- Tailwind CSS responsive
- Accesibilidad base: alt, role, aria-label, htmlFor y HTML semantico

## Despliegue en Vercel

1. Sube este proyecto a un repositorio publico en GitHub.
2. En Vercel, crea un nuevo proyecto e importa ese repositorio.
3. Configura el Root Directory como `proyecto_1` (si el repo contiene mas carpetas).
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Pulsa Deploy.

Este proyecto incluye `vercel.json` con rewrite global para que React Router funcione al recargar rutas internas.
