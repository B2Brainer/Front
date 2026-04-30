import { Link } from 'react-router-dom'

function NotFoundView() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/" className="primary-btn">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundView
