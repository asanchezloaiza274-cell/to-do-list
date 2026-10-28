import { useEffect, useState } from "react";
import CreateAndEditTask from "./components/CreateAndEditTask";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { getTask, createTask, updateTask } from "./services/api";
import type { Task, TaskFormData } from "./types/task";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [initialTitle, setInitialTitle] = useState("");

  async function fetchTasks() {
    try {
      const data = await getTask();
      setTasks(data);
      setError(null);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
      setError("No se pudieron cargar las tareas.");
    }
  }

  useEffect(() => {
    let active = true;

    async function loadTasks() {
      try {
        const data = await getTask();
        if (active) {
          setTasks(data);
          setError(null);
        }
      } catch (error) {
        console.error("Error al cargar tareas:", error);
        if (active) {
          setError("No se pudieron cargar las tareas.");
        }
      }
    }

    loadTasks();
    return () => {
      active = false;
    };
  }, []);

  const handleSaveTask = async (data: TaskFormData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, data);
      } else {
        await createTask(data);
      }
      await fetchTasks();
      closeModal();
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
      setError("No se pudo guardar la tarea.");
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

  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <div className="w-full max-w-7xl px-4 flex flex-col gap-3">
          <FilterBar
            pendingCount={pendingCount}
            totalCount={activeTasks.length}
          />
          <TaskInput onOpenCreate={openCreateModal} />
          {error && <p role="alert" className="text-red-600">{error}</p>}
          <TaskList tasks={tasks} onEdit={openEditModal} />
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