interface Props {
  pendingCount: number;
  totalCount: number;
}

export default function FilterBar({ pendingCount, totalCount }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="cursor-pointer bg-[#4F46E5] text-white rounded-full py-2 px-5 text-sm">
          Todas
        </button>

        <button className="cursor-pointer bg-white py-2 px-5 border border-[#e7e7e7] rounded-full  text-gray-700 text-sm">
          Completados
        </button>
        <button className="cursor-pointer bg-white py-2 px-5 border border-[#e7e7e7] rounded-full  text-gray-700 text-sm">
          Pendientes
        </button>
        <button className="cursor-pointer bg-white py-2 px-5 border border-[#e7e7e7] rounded-full  text-gray-700 text-sm">
          Eliminados
        </button>
      </div>
      <p className="text-[#8f8e8e]">
        {pendingCount} pendientes de {totalCount}
      </p>
    </div>
  );
}
