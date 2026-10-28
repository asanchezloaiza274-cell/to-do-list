import type { TaskFilter } from "../types/task";

interface Props {
  activeFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  pendingCount: number;
  totalCount: number;
  deletedCount: number;
}

const filters: { value: TaskFilter; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "completada", label: "Completadas" },
  { value: "pendiente", label: "Pendientes" },
  { value: "eliminada", label: "Eliminadas" },
];

export default function FilterBar({
  activeFilter,
  onFilterChange,
  pendingCount,
  totalCount,
  deletedCount,
}: Props) {
  return (
    <div className="filter-row">
      <div className="filter-options" role="group" aria-label="Filtrar tareas">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`filter-pill ${
              activeFilter === filter.value ? "filter-pill-active" : ""
            }`}
            aria-pressed={activeFilter === filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className="task-count">
        {activeFilter === "eliminada"
          ? `${deletedCount} eliminadas`
          : `${pendingCount} pendientes de ${totalCount}`}
      </p>
    </div>
  );
}
