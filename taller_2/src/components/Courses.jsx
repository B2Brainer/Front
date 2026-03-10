import CourseCard from "./CourseCard"

function Courses() {

  return (
    <section className="courses">

      <h2>Nuestros Cursos</h2>

      <div className="cards">

        <CourseCard
          titulo="React Básico"
          descripcion="Aprende componentes y props."
          nivel="Principiante"
        />

        <CourseCard
          titulo="React Hooks"
          descripcion="useState y useEffect."
          nivel="Intermedio"
        />

        <CourseCard
          titulo="React Router"
          descripcion="Navegación en aplicaciones."
          nivel="Intermedio"
        />

        <CourseCard
          titulo="React Avanzado"
          descripcion="Arquitectura y optimización."
          nivel="Avanzado"
        />

      </div>

    </section>
  )
}

export default Courses