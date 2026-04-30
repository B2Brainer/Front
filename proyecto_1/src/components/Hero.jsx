import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="grid gap-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/30 p-6 shadow-glow md:grid-cols-2 md:p-10">
      <div className="space-y-5 animate-rise">
        <p className="inline-flex rounded-full bg-sky-500/20 px-4 py-1 text-sm font-semibold text-sky-200">
          Explora el multiverso en tiempo real
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
          Colecciona personajes, filtra resultados y crea tu lista favorita.
        </h1>
        <p className="max-w-xl text-slate-300">
          Navega por dimensiones, revisa detalles completos y guarda tus personajes favoritos mientras avanzas entre rutas sin perder estado.
        </p>
        <Link
          to="/explorar"
          className="inline-flex items-center rounded-full bg-orange-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-300"
        >
          Explorar ahora
        </Link>
      </div>

      <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez apuntando con un arma futurista"
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-4 left-4 rounded-xl bg-slate-900/80 px-3 py-2 text-sm text-slate-100">
          Universo C-137 detectado
        </div>
      </div>
    </section>
  )
}

export default Hero
