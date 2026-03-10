import { useState } from "react"

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <section className="counter">

      <h2>Estudiantes inscritos</h2>

      <div>

        <button onClick={() => setCount(count - 1)}>-</button>

        <span>{count}</span>

        <button onClick={() => setCount(count + 1)}>+</button>

      </div>

    </section>
  )
}

export default Counter