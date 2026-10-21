export default function Header() {
  return (
    <header className="flex items-center justify-between py-5">
      <h1>Mis Tareas</h1>
      <h2>Bienvenido, Alejandro</h2>
      <div className="flex items-center gap-5">
        <button className="cursor-pointer">MO</button>
        <button className="cursor-pointer">Cerrar Sesion</button>
      </div>
    </header>
  );
}
