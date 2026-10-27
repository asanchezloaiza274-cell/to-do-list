import { useState } from "react";
import type { Category, Task, Status, TaskFormData } from "../types/task";

const categorias: { value: Category; label: string }[] = [
  { value: "hogar", label: "Hogar" },
  { value: "ocio", label: "Ocio" },
];

const estados: { value: Status; label: string }[] = [
  { value: "pendiente", label: "Pendiente" },
  { value: "completada", label: "Completada" },
  { value: "eliminada", label: "Eliminada" },
];

interface Props {
  task: Task | null;
  initialTitle: string;
  onClose: () => void;
  onSave: (data: TaskFormData) => void;
}

export default function CreateAndEditTask({
  task,
  initialTitle,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState(task?.title ?? initialTitle);
  const [category, setCategory] = useState<Category>(task?.category ?? "hogar");
  const [status, setStatus] = useState<Status>(task?.status ?? "pendiente");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSave({ title, category, status });
  };

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-[#787E89]">
      <div className="flex flex-col gap-7 bg-[#FFFFFF] py-7 px-6 w-xl rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">
            {task ? "Editar Tarea" : "Crear Tarea"}
          </p>
          <button className="cursor-pointer" onClick={onClose}>
            X
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Título</p>
          <input
            type="text"
            placeholder="Entregar la tarea de programación"
            className="border border-[#e7e7e7] rounded-lg py-2 px-4 bg-[#FFFFFF] outline-0 text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Categoría</p>
          <div className="flex items-center gap-2">
            {categorias.map((cat) => {
              const isSelected = category === cat.value;

              return (
                <button
                  className={`py-2 px-3 cursor-pointer text-sm rounded-lg border ${
                    isSelected
                      ? "bg-[#EEF2FF] border-[#7F79EC] text-[#4F46E5] font-medium"
                      : "bg-[#FFFFFF] border-[#e7e7e7] text-gray-700"
                  }`}
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Estado</p>
          <div className="flex items-center gap-2">
            {estados.map((est) => {
              const isSelected = status === est.value;

              return (
                <button
                  className={`py-2 px-3 cursor-pointer text-sm rounded-lg border ${
                    isSelected
                      ? "bg-[#EEF2FF] border-[#7F79EC] text-[#4F46E5] font-medium"
                      : "bg-[#FFFFFF] border-[#e7e7e7] text-gray-700"
                  }`}
                  key={est.value}
                  type="button"
                  onClick={() => setStatus(est.value)}
                >
                  {est.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end">
          <button
            className="cursor-pointer bg-[#FFFFFF] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg
            "
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer bg-[#4F46E5] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg text-white
            "
            onClick={handleSubmit}
          >
            {task ? "Actualizar cambios" : "Guardar cambios"}
          </button>
        </div>
      </div>
    </main>
  );
}
