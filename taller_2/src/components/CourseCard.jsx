function CourseCard({ titulo, descripcion, nivel }) {
  return (
    <div className="card">

      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <span>{nivel}</span>

    </div>
  )
}

export default CourseCard