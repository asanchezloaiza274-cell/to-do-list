import type { Task } from "../types/task";

const categoryLabels = {
  hogar: "Hogar",
  ocio: "Ocio",
};

interface Props {
  tasks: Task[];
  onEdit: (task: Task) => void;
}

export default function TaskList({ tasks, onEdit }: Props) {
  if (tasks.length === 0) {
    return (
      <p className="empty-state">
        No hay tareas que coincidan con este filtro
      </p>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <div
          className="task-card"
          key={task.id}
        >
          
          <div className="task-details">
            <p
              className={`task-title ${
                task.status === "completada"
                  ? "task-title-completed"
                  : ""
              }`}
            >
              {task.title}
            </p>
            <div className="task-tags">
              <p className="task-tag">
                {categoryLabels[task.category]}
              </p>
              <p
                className={`task-tag ${
                  task.status === "pendiente"
                    ? "task-status-pending"
                    : task.status === "completada"
                      ? "task-status-completed"
                      : "task-status-deleted"
                }`}
              >
                {task.status === "pendiente"
                  ? "Pendiente"
                  : task.status === "completada"
                    ? "Completada"
                    : "Eliminada"}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="edit-button"
            onClick={() => onEdit(task)}
          >
            Editar
          </button>
        </div>
      ))}
    </>
  );
}
