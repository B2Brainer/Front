import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <h1>
        Aprende <span>React</span> desde cero
      </h1>
      <p>Domina la libreria mas popular del frontend con proyectos practicos y reales.</p>
      <Link to="/cursos" className="primary-btn">
        Ver Cursos
      </Link>
    </section>
  )
}

export default Hero
