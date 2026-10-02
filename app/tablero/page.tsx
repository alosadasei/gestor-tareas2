import Link from "next/link";
import { tareas } from "@/lib/tareas";

// Componente de servidor: solo muestra datos, no necesita estado ni eventos
export default function Tablero() {
  return (
    <>
      <h1>Tablero</h1>
      <ul>
        {tareas.map((tarea) => (
          // key estable: el id de la tarea
          <li key={tarea.id}>
            <Link href={`/tareas/${tarea.id}`}>{tarea.titulo}</Link> ({tarea.estado})
          </li>
        ))}
      </ul>
    </>
  );
}
