import Link from "next/link";
import { tareas } from "@/lib/tareas";

// En Next 15 params es una promesa, por eso la página es async y se hace await
export default async function DetalleTarea({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // El id de la URL llega como texto: se compara con String(t.id)
  const tarea = tareas.find((t) => String(t.id) === id);

  return (
    <>
      {tarea ? (
        <>
          <h1>{tarea.titulo}</h1>
          <p>Estado: {tarea.estado}</p>
          <p>Prioridad: {tarea.prioridad}</p>
        </>
      ) : (
        <p>No hemos encontrado la tarea {id}</p>
      )}
      {/* Paso 6 — enlace de vuelta */}
      <p>
        <Link href="/tablero">← Volver al tablero</Link>
      </p>
    </>
  );
}
