import CourseCard from './CourseCard'

const cursos = [
  {
    icono: '⚛️',
    titulo: 'React Basico',
    descripcion: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    icono: '🔁',
    titulo: 'React Hooks',
    descripcion: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    icono: '🗂️',
    titulo: 'Estado Global',
    descripcion: 'Gestion de estado con Context API y aprende cuando usarlo.',
    nivel: 'Intermedio',
  },
  {
    icono: '🚀',
    titulo: 'React Avanzado',
    descripcion: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
]

function Courses() {
  return (
    <section className="courses">
      <h2>Nuestros Cursos</h2>
      <p>Elige el camino que mejor se adapte a ti</p>

      <div className="cards">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.titulo}
            icono={curso.icono}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
          />
        ))}
      </div>
    </section>
  )
}

export default Courses
