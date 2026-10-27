import { useState } from "react";

export default function TaskInput({
  onOpenCreate,
}: {
  onOpenCreate: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  return (
    <div className="flex items-center justify-between gap-3">
      <input
        type="text"
        placeholder="Añade una tarea..."
        className="bg-[#FFFFFF] w-full border border-[#e7e7e7] rounded-2xl py-3 px-5 outline-0 "
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
        className="cursor-pointer bg-[#4F46E5] rounded-xl py-3 px-7 text-white font-semibold "
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
