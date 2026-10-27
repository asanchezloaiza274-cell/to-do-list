export type Category = "hogar" | "ocio";
export type Status = "pendiente" | "completada" | "eliminada";

export interface Task {
  id: number;
  title: string;
  status: Status;
  category: Category;
  created_at: string;
  updated_at: string;
}
