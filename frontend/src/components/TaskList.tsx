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
  if (tasks.length === 0) return <p>No tienes tareas todavía</p>;

  return (
    <>
      {tasks.map((task) => (
        <div
          className="border border-[#e7e7e7] rounded-2xl py-3 px-5 bg-[#FFFFFF]  flex items-center gap-3 shadow mb-1"
          key={task.id}
        >
          <input type="radio" name="" className="size-5" id="" />
          <div className="flex flex-col gap-1">
            <p
              className={
                task.status === "completada"
                  ? "line-through text-slate-500"
                  : ""
              }
            >
              {task.title}
            </p>
            <div className="flex items-center gap-3">
              <p className="bg-[#F1F5F9] text-gray-700 text-sm px-3 py-0.5 rounded-full">
                {categoryLabels[task.category]}
              </p>
              <p
                className={`${
                  task.status === "completada" ? "bg-green-400" : "bg-yellow-200"
                } text-gray-700 text-sm px-3 py-0.5 rounded-full`}
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
            className="ml-auto cursor-pointer text-sm text-indigo-600"
            onClick={() => onEdit(task)}
          >
            Editar
          </button>
        </div>
      ))}
    </>
  );
}
