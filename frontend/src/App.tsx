import { useState } from "react";
import CreateAndEditTask from "./components/CreateAndEditTask";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { readTasks, writeTasks } from "./services/taskStorage";
import type { Task, TaskFilter, TaskFormData } from "./types/task";

export default function App() {
  const [taskState, setTaskState] = useState<{
    tasks: Task[];
    error: string | null;
  }>(() => {
    try {
      return { tasks: readTasks(), error: null };
    } catch (error) {
      console.error("Error al cargar tareas:", error);
      return {
        tasks: [],
        error: "No se pudieron cargar las tareas guardadas en este navegador.",
      };
    }
  });
  const { tasks, error } = taskState;
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("todas");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [initialTitle, setInitialTitle] = useState("");

  const handleSaveTask = (data: TaskFormData) => {
    try {
      const updatedTasks = editingTask
        ? tasks.map((task) =>
            task.id === editingTask.id ? { ...task, ...data } : task,
          )
        : [
            ...tasks,
            {
              id: tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1,
              ...data,
            },
          ];
      writeTasks(updatedTasks);
      setTaskState({ tasks: updatedTasks, error: null });
      closeModal();
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
      setTaskState((current) => ({
        ...current,
        error: "No se pudo guardar la tarea en este navegador.",
      }));
    }
  };

  const openCreateModal = (title: string) => {
    setInitialTitle(title);
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const activeTasks = tasks.filter((task) => task.status !== "eliminada");
  const pendingCount = activeTasks.filter(
    (task) => task.status === "pendiente",
  ).length;
  const deletedCount = tasks.filter(
    (task) => task.status === "eliminada",
  ).length;
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "todas") return task.status !== "eliminada";
    return task.status === activeFilter;
  });

  return (
    <main className="app-shell">
      <Header />
      <div className="app-content">
        <div className="task-stack">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            pendingCount={pendingCount}
            totalCount={activeTasks.length}
            deletedCount={deletedCount}
          />
          <TaskInput onOpenCreate={openCreateModal} />
          {error && <p role="alert" className="error-message">{error}</p>}
          <TaskList
            key={activeFilter}
            tasks={filteredTasks}
            onEdit={openEditModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <CreateAndEditTask
          task={editingTask}
          initialTitle={initialTitle}
          onClose={closeModal}
          onSave={handleSaveTask}
        />
      )}
    </main>
  );
}