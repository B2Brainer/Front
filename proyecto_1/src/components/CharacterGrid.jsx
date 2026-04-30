import CharacterCard from './CharacterCard'

function CharacterGrid({ characters }) {
  return (
    <section
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      role="list"
      aria-label="Lista de personajes"
    >
      {characters.map((character) => (
        <div key={character.id} role="listitem">
          <CharacterCard character={character} />
        </div>
      ))}
    </section>
  )
}

export default CharacterGrid
