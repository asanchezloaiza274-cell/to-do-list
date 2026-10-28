export type Category = "hogar" | "ocio";
export type Status = "pendiente" | "completada" | "eliminada";
export type TaskFilter = "todas" | Status;

export interface Task {
  id: number;
  title: string;
  status: Status;
  category: Category;
}

export type TaskFormData = Pick<Task, "title" | "category" | "status">;
