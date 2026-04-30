function SearchBar({ value, onChange }) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm font-semibold text-slate-200" htmlFor="search">
      Buscar personaje
      <input
        id="search"
        name="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ej: Morty, Summer, Birdperson"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-sky-400 transition focus:ring"
        aria-label="Buscar por nombre de personaje"
      />
    </label>
  )
}

export default SearchBar
