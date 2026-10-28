import type { Category, Status, Task } from "../types/task";

const STORAGE_KEY = "to-do-list.tasks";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isStatus(value: unknown): value is Status {
  return (
    value === "pendiente" ||
    value === "completada" ||
    value === "eliminada"
  );
}

function isCategory(value: unknown): value is Category {
  return value === "hogar" || value === "ocio";
}

function isTask(value: unknown): value is Task {
  if (!isRecord(value)) return false;

  const { id, title, status, category } = value;

  return (
    typeof id === "number" &&
    Number.isFinite(id) &&
    typeof title === "string" &&
    isStatus(status) &&
    isCategory(category)
  );
}

export function readTasks(): Task[] {
  const storedTasks = localStorage.getItem(STORAGE_KEY);
  if (storedTasks === null) return [];

  const parsedTasks: unknown = JSON.parse(storedTasks);
  if (!Array.isArray(parsedTasks) || !parsedTasks.every(isTask)) {
    throw new Error("Los datos guardados de las tareas no tienen un formato válido.");
  }

  return parsedTasks;
}

export function writeTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
