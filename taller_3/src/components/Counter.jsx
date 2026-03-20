import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function restar() {
    setCount((valorActual) => Math.max(0, valorActual - 1))
  }

  function sumar() {
    setCount((valorActual) => valorActual + 1)
  }

  return (
    <section className="counter">
      <h2>Cuantos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el numero</p>

      <div className="counter-box">
        <button type="button" onClick={restar} aria-label="Restar estudiante">
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={sumar} aria-label="Sumar estudiante">
          +
        </button>
      </div>

      <small>{count} estudiantes inscritos</small>
    </section>
  )
}

export default Counter
