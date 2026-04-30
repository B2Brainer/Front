import Counter from '../components/Counter'

function AboutView() {
  return (
    <>
      <section className="about">
        <h2>Nosotros</h2>
        <p>
          Somos una academia enfocada en aprendizaje practico de React. Nuestro objetivo es
          ayudarte a construir proyectos reales y reforzar buenas practicas de frontend.
        </p>
      </section>
      <Counter />
    </>
  )
}

export default AboutView
