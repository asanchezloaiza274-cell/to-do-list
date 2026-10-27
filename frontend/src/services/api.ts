import type { Task } from "../types/task";

const API_URL = "http://127.0.0.1:8000/api";

export async function getTask(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/tasks/list/`);
  if (!response.ok) {
    throw new Error("No se pueden cargar las tareas");
  }
  return response.json();
}
