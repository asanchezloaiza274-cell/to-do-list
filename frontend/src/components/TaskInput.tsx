export default function TaskInput() {
  return (
    <div className="flex items-center justify-between gap-3">
      <input
        type="text"
        placeholder="Añade una tarea..."
        className="bg-[#FFFFFF] w-full border border-[#e7e7e7] rounded-2xl py-3 px-5 outline-0 "
      />
      <button
        type="submit"
        className="cursor-pointer bg-[#4F46E5] rounded-xl py-3 px-7 text-white font-semibold "
      >
        Añadir
      </button>
    </div>
  );
}
