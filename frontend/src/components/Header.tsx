export default function Header() {
  return (
    <header className=" py-5 bg-[#FFFFFF] shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-[#4F46E5] font-bold text-xl">Mis Tareas</h1>
        <h2 className="text-[#8f8e8e]">
          Bienvenido, <span className="text-black">Alejandro</span>
        </h2>
        <div className="flex items-center gap-5">
          <button className="cursor-pointer text-[#8f8e8e]">
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
}
