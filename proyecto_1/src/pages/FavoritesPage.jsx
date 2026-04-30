import { useRef, useState } from 'react'
import StatePanel from '../components/StatePanel'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites()
  const [pendingCharacter, setPendingCharacter] = useState(null)
  const dialogRef = useRef(null)
  const toast = useToast()

  const askRemove = (character) => {
    setPendingCharacter(character)
    dialogRef.current?.showModal()
  }

  const confirmRemove = () => {
    if (!pendingCharacter) {
      return
    }
    removeFavorite(pendingCharacter.id)
    toast.info(`${pendingCharacter.name} fue removido de tu lista.`)
    dialogRef.current?.close()
    setPendingCharacter(null)
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-bold text-white">Tus favoritos</h1>
        <p className="text-slate-300">Gestiona tu lista personal de personajes guardados.</p>
      </header>

      {favorites.length === 0 ? (
        <StatePanel
          type="empty"
          title="Todavia no guardaste personajes"
          message="Agrega favoritos desde explorar o detalle para verlos aqui."
        />
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((character) => (
            <article key={character.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <img
                src={character.image}
                alt={`Avatar de ${character.name}`}
                className="h-40 w-full rounded-xl object-cover"
              />
              <h2 className="mt-3 font-heading text-xl font-bold text-white">{character.name}</h2>
              <p className="text-sm text-slate-300">{character.species} - {character.status}</p>
              <button
                type="button"
                onClick={() => askRemove(character)}
                className="mt-4 rounded-full bg-rose-400 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-rose-300"
                aria-label={`Quitar ${character.name} de favoritos`}
              >
                Quitar
              </button>
            </article>
          ))}
        </section>
      )}

      <dialog ref={dialogRef} className="w-[92vw] max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-0 text-slate-100">
        <form method="dialog" className="space-y-5 p-6">
          <h2 className="font-heading text-2xl font-bold">Confirmar accion</h2>
          <p className="text-sm text-slate-300">
            Vas a quitar {pendingCharacter?.name ?? 'este personaje'} de favoritos.
          </p>

          <div className="flex justify-end gap-2">
            {/* Dark pattern intencional: el boton de confirmar es visualmente dominante para empujar la decision rapida. */}
            <button
              type="button"
              onClick={confirmRemove}
              className="rounded-full bg-rose-400 px-4 py-2 font-bold text-slate-950"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={() => {
                dialogRef.current?.close()
                setPendingCharacter(null)
              }}
              className="rounded-full border border-slate-600 px-4 py-2 text-slate-200"
            >
              Cancelar
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default FavoritesPage
