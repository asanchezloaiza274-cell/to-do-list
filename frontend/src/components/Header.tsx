export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <h1 className="brand">Mis Tareas</h1>
        <h2 className="welcome">
          Bienvenido, <strong>Alejandro</strong>
        </h2>
        <div>
          <button className="header-action">Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
}
