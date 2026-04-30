function ToastContainer({ toasts, onClose }) {
  return (
    <div className="fixed right-4 top-4 z-50 flex w-[92vw] max-w-sm flex-col gap-2" aria-live="polite">
      {toasts.map((toast) => {
        const palette = {
          success: 'border-emerald-400/50 bg-emerald-500/20 text-emerald-100',
          error: 'border-rose-400/50 bg-rose-500/20 text-rose-100',
          info: 'border-sky-400/50 bg-sky-500/20 text-sky-100',
        }[toast.type]

        return (
          <article
            key={toast.id}
            role="status"
            className={`animate-rise rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${palette}`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-semibold">{toast.message}</p>
              <button
                type="button"
                onClick={() => onClose(toast.id)}
                className="text-xs font-bold uppercase"
                aria-label="Cerrar notificacion"
              >
                cerrar
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ToastContainer
