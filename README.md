# Gestor de Tareas — rutas con el App Router de Next

**URL pública (Vercel):** `https://gestor-tareas2.vercel.app/`

## Rutas
| Ruta | Qué muestra | Tipo |
|---|---|---|
| `/` | Página de inicio con enlaces a login y tablero | servidor |
| `/login` | Formulario con email; al enviar navega a `/tablero` con `useRouter` | cliente (`"use client"`) |
| `/tablero` | Lista de tareas; cada una enlaza a su detalle con `Link` | servidor |
| `/tareas/:id` | Detalle de una tarea (título, estado, prioridad) o "No hemos encontrado la tarea {id}"; enlace de vuelta al tablero | servidor |
