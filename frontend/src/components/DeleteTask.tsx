export default function DeleteTask() {
  return (
    <main className="fixed inset-0 hidden items-center justify-center bg-[#787E89]">
      <div className="bg-[#FFFFFF] py-7 px-6 w-md rounded-xl flex flex-col items-center gap-1">
        <p className="text-lg font-bold">¿Eliminar esta tarea?</p>
        <p className="text-sm text-center text-[#8f8e8e]">
          Vas a aliminar{" "}
          <span className="text-black">
            "Entregar la tarea de programación"
          </span>
          . Podrás encontrarla en la pestaña de Eliminadas.
        </p>
        <div className="flex items-center gap-2 w-full mt-5">
          <button
            className="cursor-pointer bg-[#FFFFFF] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg w-full
            "
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer bg-[#DC2626] py-2 px-3 text-sm border border-[#e7e7e7] rounded-lg w-full text-white
            "
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </main>
  );
}
