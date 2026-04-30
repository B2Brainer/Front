import { useEffect, useMemo, useState } from 'react'
import CharacterGrid from '../components/CharacterGrid'
import SearchBar from '../components/SearchBar'
import StatePanel from '../components/StatePanel'
import StatusFilter from '../components/StatusFilter'
import { useToast } from '../context/ToastContext'

const API_URL = 'https://rickandmortyapi.com/api/character'

function ExplorePage() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [retryToken, setRetryToken] = useState(0)
  const toast = useToast()

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCharacters() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('No se pudieron cargar los personajes.')
        }
        const data = await response.json()
        setCharacters(data.results ?? [])
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
          toast.error('Hubo un error al cargar la lista de personajes.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()

    return () => controller.abort()
  }, [retryToken, toast])

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesName = character.name.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'all' ? true : character.status.toLowerCase() === status
      return matchesName && matchesStatus
    })
  }, [characters, search, status])

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-bold text-white">Exploracion</h1>
        <p className="text-slate-300">Busca y filtra personajes en tiempo real desde la API.</p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:grid-cols-2 sm:p-6">
        <SearchBar value={search} onChange={setSearch} />
        <StatusFilter value={status} onChange={setStatus} />
      </section>

      {loading ? (
        <StatePanel
          type="loading"
          title="Cargando personajes"
          message="Estamos consultando el portal para traer datos frescos del multiverso."
        />
      ) : null}

      {!loading && error ? (
        <StatePanel
          type="error"
          title="No fue posible consultar la API"
          message={error}
          onRetry={() => setRetryToken((current) => current + 1)}
        />
      ) : null}

      {!loading && !error && filteredCharacters.length === 0 ? (
        <StatePanel
          type="empty"
          title="Sin resultados"
          message="No encontramos coincidencias con esos filtros. Ajusta la busqueda para continuar."
        />
      ) : null}

      {!loading && !error && filteredCharacters.length > 0 ? (
        <CharacterGrid characters={filteredCharacters} />
      ) : null}
    </div>
  )
}

export default ExplorePage
