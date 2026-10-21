export default function TaskInput() {
  return (
    <div className="flex items-center gap-3">
      <input type="text" placeholder="Añade una tarea..." />
      <button type="submit" className="cursor-pointer">
        Añadir
      </button>
    </div>
  );
}
