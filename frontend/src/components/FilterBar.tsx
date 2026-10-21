export default function FilterBar() {
  return (
    <div className="flex items-center gap-3">
      <button className="cursor-pointer">Completados</button>
      <button className="cursor-pointer">Pendientes</button>
      <button className="cursor-pointer">Eliminados</button>
    </div>
  );
}
