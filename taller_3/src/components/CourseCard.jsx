function CourseCard({ icono, titulo, descripcion, nivel }) {
  return (
    <article className="card">
      <div className="icon">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span className="tag">{nivel}</span>
    </article>
  )
}

export default CourseCard
