# Gestor de Tareas — rutas con el App Router de Next

**URL pública (Vercel):** _pendiente de desplegar — pega aquí la URL `https://….vercel.app`_

## Rutas
| Ruta | Qué muestra | Tipo |
|---|---|---|
| `/` | Página de inicio con enlaces a login y tablero | servidor |
| `/login` | Formulario con email; al enviar navega a `/tablero` con `useRouter` | cliente (`"use client"`) |
| `/tablero` | Lista de tareas; cada una enlaza a su detalle con `Link` | servidor |
| `/tareas/:id` | Detalle de una tarea (título, estado, prioridad) o "No hemos encontrado la tarea {id}"; enlace de vuelta al tablero | servidor |

`app/layout.tsx` pone la cabecera "Gestor de Tareas" en todas las páginas. Los datos de ejemplo están en `lib/tareas.ts`.

## Arrancar en local
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # comprueba que compila
```

## Desplegar en Vercel
1. Sube la carpeta a un repositorio de GitHub (`git init`, `git add .`, `git commit`, `git push`).
2. En vercel.com → *Add New… → Project*, importa el repositorio. Si el proyecto está en una subcarpeta, pon esa carpeta como *Root Directory*. Vercel detecta Next.js solo.
3. Pulsa *Deploy*, copia la URL `*.vercel.app` y pégala arriba.
