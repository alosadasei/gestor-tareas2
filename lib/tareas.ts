export type Tarea = {
  id: number;
  titulo: string;
  estado: "pendiente" | "en-curso" | "hecha";
  prioridad: number;
};

export const tareas: Tarea[] = [
  { id: 104, titulo: "Pantalla de login", estado: "pendiente", prioridad: 1 },
  { id: 105, titulo: "API de comentarios", estado: "en-curso", prioridad: 2 },
  { id: 106, titulo: "Modelo de usuario", estado: "hecha", prioridad: 3 },
];
