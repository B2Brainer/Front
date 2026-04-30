import { createContext, useContext, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)

function readFavorites() {
  try {
    const stored = localStorage.getItem('portal-favorites')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)

  const value = useMemo(() => {
    const persist = (next) => {
      setFavorites(next)
      localStorage.setItem('portal-favorites', JSON.stringify(next))
    }

    const addFavorite = (character) => {
      if (favorites.some((item) => item.id === character.id)) {
        return false
      }
      persist([...favorites, character])
      return true
    }

    const removeFavorite = (id) => {
      persist(favorites.filter((item) => item.id !== id))
    }

    const isFavorite = (id) => favorites.some((item) => item.id === id)

    return {
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
    }
  }, [favorites])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider')
  }
  return context
}
