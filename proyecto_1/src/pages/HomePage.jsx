import Hero from '../components/Hero'

function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:grid-cols-3">
        <article className="rounded-xl bg-slate-950/70 p-4">
          <h2 className="font-heading text-xl font-bold text-white">Filtro en vivo</h2>
          <p className="mt-2 text-sm text-slate-300">Explora y filtra personajes por nombre y estado al instante.</p>
        </article>
        <article className="rounded-xl bg-slate-950/70 p-4">
          <h2 className="font-heading text-xl font-bold text-white">Detalles por ID</h2>
          <p className="mt-2 text-sm text-slate-300">Cada tarjeta lleva a su ruta dinamica con datos completos y frescos.</p>
        </article>
        <article className="rounded-xl bg-slate-950/70 p-4">
          <h2 className="font-heading text-xl font-bold text-white">Favoritos persistentes</h2>
          <p className="mt-2 text-sm text-slate-300">Guarda personajes para revisarlos mas tarde entre distintas rutas.</p>
        </article>
      </section>
    </div>
  )
}

export default HomePage
