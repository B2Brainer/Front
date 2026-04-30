import { NavLink } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/explorar', label: 'Explorar' },
  { to: '/favoritos', label: 'Favoritos' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  const { favorites } = useFavorites()

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegacion principal">
        <NavLink to="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <svg
            viewBox="0 0 60 60"
            className="h-10 w-10"
            role="img"
            aria-label="Logo portal multiverso"
          >
            <circle cx="30" cy="30" r="28" fill="#f97316" />
            <path d="M15 30c0-8.3 6.7-15 15-15 7.1 0 13.1 4.9 14.6 11.5" fill="none" stroke="#082f49" strokeWidth="5" strokeLinecap="round" />
            <path d="M45 30c0 8.3-6.7 15-15 15-7.1 0-13.1-4.9-14.6-11.5" fill="none" stroke="#082f49" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="font-heading text-lg font-bold tracking-wide text-slate-100 group-hover:text-orange-300">
            Portal Multiverso
          </span>
        </NavLink>

        <ul className="flex items-center gap-2 sm:gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-sky-500 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="rounded-full border border-orange-300/40 px-3 py-1 text-xs font-bold text-orange-300">
            {favorites.length} guardados
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
