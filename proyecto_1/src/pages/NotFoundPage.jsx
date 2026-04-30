import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="grid place-items-center rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">Error 404</p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-white">Ruta fuera del multiverso</h1>
      <p className="mt-2 max-w-xl text-slate-300">La direccion que buscaste no existe. Regresa al inicio para continuar explorando.</p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-orange-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-300"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
