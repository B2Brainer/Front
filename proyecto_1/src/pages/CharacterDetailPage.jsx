import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import StatePanel from '../components/StatePanel'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'

function CharacterDetailPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const toast = useToast()

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCharacter() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('No se encontro el personaje solicitado.')
        }

        const data = await response.json()
        setCharacter(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
          toast.error('No se pudo cargar el detalle del personaje.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
    return () => controller.abort()
  }, [id, toast])

  if (loading) {
    return (
      <StatePanel
        type="loading"
        title="Cargando detalle"
        message="Estamos sincronizando la ficha completa del personaje."
      />
    )
  }

  if (error || !character) {
    return <StatePanel type="error" title="Error de detalle" message={error || 'Sin datos disponibles.'} />
  }

  const favorite = isFavorite(character.id)

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id)
      toast.info(`${character.name} fue quitado de favoritos.`)
      return
    }

    const added = addFavorite(character)
    if (added) {
      toast.success(`${character.name} fue agregado a favoritos.`)
    }
  }

  return (
    <article className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 md:grid-cols-2 md:p-8">
      <img
        src={character.image}
        alt={`Detalle de ${character.name}`}
        className="h-full min-h-72 w-full rounded-2xl object-cover"
      />

      <div className="space-y-4">
        <h1 className="font-heading text-3xl font-bold text-white">{character.name}</h1>
        <p className="text-slate-300">{character.species} - {character.status}</p>

        <ul className="space-y-2 text-sm text-slate-200">
          <li><strong>Origen:</strong> {character.origin?.name}</li>
          <li><strong>Ubicacion:</strong> {character.location?.name}</li>
          <li><strong>Genero:</strong> {character.gender}</li>
          <li><strong>Episodios:</strong> {character.episode?.length}</li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={handleFavorite}
            className="rounded-full bg-orange-400 px-5 py-2 font-bold text-slate-950 transition hover:bg-orange-300"
            aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {favorite ? 'Quitar favorito' : 'Agregar a favoritos'}
          </button>

          <Link
            to="/explorar"
            className="rounded-full border border-slate-600 px-5 py-2 font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            Volver a explorar
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CharacterDetailPage
