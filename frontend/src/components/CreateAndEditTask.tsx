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
    <main className="dialog-overlay">
      <div className="dialog-panel">
        <div className="dialog-heading">
          <p>
            {task ? "Editar Tarea" : "Crear Tarea"}
          </p>
          <button className="dialog-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        <div className="dialog-field">
          <label className="dialog-label" htmlFor="task-title">Título</label>
          <input
            type="text"
            id="task-title"
            placeholder="Entregar la tarea de programación"
            className="field-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="dialog-field">
          <p className="dialog-label">Categoría</p>
          <div className="dialog-options">
            {categorias.map((cat) => {
              const isSelected = category === cat.value;

              return (
                <button
                  className={`option-button ${
                    isSelected
                      ? "option-button-selected"
                      : ""
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

        <div className="dialog-field">
          <p className="dialog-label">Estado</p>
          <div className="dialog-options">
            {estados.map((est) => {
              const isSelected = status === est.value;

              return (
                <button
                  className={`option-button ${
                    isSelected
                      ? "option-button-selected"
                      : ""
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

        <div className="dialog-actions">
          <button
            className="secondary-button"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="primary-button"
            onClick={handleSubmit}
          >
            {task ? "Actualizar cambios" : "Guardar cambios"}
          </button>
        </div>
      </div>
    </main>
  );
}
