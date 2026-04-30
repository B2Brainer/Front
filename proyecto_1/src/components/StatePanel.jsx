function StatePanel({ type, title, message, onRetry }) {
  const tone = {
    loading: 'border-sky-500/40 bg-sky-500/10 text-sky-100',
    error: 'border-rose-500/40 bg-rose-500/10 text-rose-100',
    empty: 'border-slate-700 bg-slate-900/80 text-slate-200',
  }[type]

  return (
    <section className={`rounded-2xl border p-8 text-center ${tone}`}>
      <h2 className="font-heading text-2xl font-bold">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base">{message}</p>
      {type === 'loading' && (
        <div className="mx-auto mt-5 h-10 w-10 animate-spin rounded-full border-4 border-sky-300 border-t-transparent" />
      )}
      {type === 'error' && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-full bg-rose-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-rose-300"
        >
          Reintentar
        </button>
      )}
    </section>
  )
}

export default StatePanel
