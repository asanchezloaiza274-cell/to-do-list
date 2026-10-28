export default function DeleteTask() {
  return (
    <main className="dialog-overlay dialog-overlay-hidden">
      <div className="dialog-panel items-center">
        <p className="dialog-heading">¿Eliminar esta tarea?</p>
        <p className="dialog-description text-center">
          Vas a eliminar{" "}
          <span className="text-white">
            "Entregar la tarea de programación"
          </span>
          . Podrás encontrarla en la pestaña de Eliminadas.
        </p>
        <div className="dialog-actions w-full">
          <button
            className="secondary-button w-full"
          >
            Cancelar
          </button>
          <button
            className="primary-button danger-button w-full"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </main>
  );
}
