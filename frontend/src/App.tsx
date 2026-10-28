import { useEffect, useState } from "react";
import CreateAndEditTask from "./components/CreateAndEditTask";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { getTask, createTask, updateTask } from "./services/api";
import type { Task, TaskFilter, TaskFormData } from "./types/task";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("todas");
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