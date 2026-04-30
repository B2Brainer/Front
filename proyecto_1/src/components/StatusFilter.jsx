function StatusFilter({ value, onChange }) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm font-semibold text-slate-200" htmlFor="status-filter">
      Filtrar por estado
      <select
        id="status-filter"
        name="status-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-sky-400 transition focus:ring"
        aria-label="Filtrar personajes por estado"
      >
        <option value="all">Todos</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
    </label>
  )
}

export default StatusFilter
