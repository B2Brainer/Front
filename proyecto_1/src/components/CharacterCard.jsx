import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'

function CharacterCard({ character }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const toast = useToast()
  const favorite = isFavorite(character.id)

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id)
      toast.info(`${character.name} fue removido de favoritos.`)
      return
    }

    const added = addFavorite(character)
    if (added) {
      toast.success(`${character.name} fue agregado a favoritos.`)
    }
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-md transition hover:-translate-y-1 hover:shadow-glow">
      <img
        src={character.image}
        alt={`Retrato de ${character.name}`}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-4 p-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-white">{character.name}</h3>
          <p className="text-sm text-slate-300">{character.species} - {character.status}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Link
            to={`/personaje/${character.id}`}
            className="rounded-full border border-sky-400/40 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-500 hover:text-slate-950"
            aria-label={`Ver detalle de ${character.name}`}
          >
            Ver detalle
          </Link>

          <button
            type="button"
            onClick={handleFavorite}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              favorite
                ? 'bg-orange-400 text-slate-900 hover:bg-orange-300'
                : 'bg-slate-800 text-slate-100 hover:bg-slate-700'
            }`}
            aria-label={favorite ? `Quitar ${character.name} de favoritos` : `Agregar ${character.name} a favoritos`}
          >
            {favorite ? 'Guardado' : 'Favorito'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
