import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        ReactAcademy
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/cursos">Cursos</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
