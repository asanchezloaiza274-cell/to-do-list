export default function EditTask() {
  return (
    <main className="fixed inset-0 hidden items-center justify-center bg-[#787E89]">
      <div className="flex flex-col gap-7 bg-[#FFFFFF] py-7 px-6 w-xl rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Editar Tarea</p>
          <button className="cursor-pointer">X</button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Título</p>
          <input
            type="text"
            placeholder="Entregar la tarea de programación"
            className="border border-[#e7e7e7] rounded-lg py-2 px-4 bg-[#FFFFFF] outline-0 text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Categoría</p>
          <div className="flex items-center gap-2">
            <button className="py-2 px-3 cursor-pointer bg-[#EEF2FF] border border-[#7F79EC] text-sm rounded-lg">
              Estudio
            </button>
            <button className="py-2 px-3 cursor-pointer bg-[#FFFFFF] border border-[#e7e7e7] text-sm rounded-lg">
              Estudio
            </button>
            <button className="py-2 px-3 cursor-pointer bg-[#FFFFFF] border border-[#e7e7e7] text-sm rounded-lg">
              Estudio
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end">
          <button
            className="cursor-pointer bg-[#FFFFFF] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg
            "
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer bg-[#4F46E5] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg text-white
            "
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </main>
  );
}
