import type { Task, Category, Status } from "../types/task";

const API_URL = "http://127.0.0.1:8000/api";

// Función para crear la tarea

export async function createTask(data: {
  title: string;
  category: Category;
  status: Status;
}): Promise<Task> {
  const response = await fetch(`${API_URL}/tasks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("No se pudo crear la tarea");
  }

  return response.json();
}

export async function updateTask(
  id: number,
  data: Pick<Task, "title" | "category" | "status">,
): Promise<Task> {
  const response = await fetch(`${API_URL}/tasks/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("No se pudo actualizar la tarea");
  }

  return response.json();
}

// Función para listar las tareas

export async function getTask(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/tasks/list/`);
  if (!response.ok) {
    throw new Error("No se pueden cargar las tareas");
  }
  return response.json();
}
