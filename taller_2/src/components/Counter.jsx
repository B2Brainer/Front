import { useState } from "react"

function Counter() {

  const [count, setCount] = useState(0)

  return (
  <section className="counter">

  <h2>Cuántos estudiantes van a inscribirse?</h2>

  <p>Usa los botones para ajustar el número</p>

  <div className="counter-box">

    <button onClick={() => setCount(count - 1)}>-</button>

    <span>{count}</span>

    <button onClick={() => setCount(count + 1)}>+</button>

  </div>

  <p>estudiantes inscritos</p>

</section>
  )
}

export default Counter