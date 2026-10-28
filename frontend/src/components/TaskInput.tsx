import { useState } from "react";

export default function TaskInput({
  onOpenCreate,
}: {
  onOpenCreate: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  return (
    <div className="task-input-row">
      <input
        type="text"
        placeholder="Añade una tarea..."
        className="field-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title.trim()) {
            onOpenCreate(title.trim());
            setTitle("");
          }
        }}
      />
      <button
        type="button"
        className="primary-button"
        onClick={() => {
          if (title.trim()) {
            onOpenCreate(title.trim());
            setTitle("");
          }
        }}
      >
        Añadir
      </button>
    </div>
  );
}
