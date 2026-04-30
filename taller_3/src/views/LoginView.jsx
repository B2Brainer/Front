import { useState } from 'react'

function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canSubmit = email.trim() !== '' && password.trim() !== '' && !isSubmitting && !submitted

  function handleSubmit(evento) {
    evento.preventDefault()

    if (!canSubmit) {
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section className="login-wrapper">
      <article className="login-card">
        <h1>Iniciar sesion</h1>
        <p className="helper-text">Solo interfaz, no valida credenciales.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            disabled={isSubmitting || submitted}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu password"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
            disabled={isSubmitting || submitted}
          />

          <button type="submit" disabled={!canSubmit}>
            {isSubmitting ? 'Enviando...' : submitted ? 'Formulario enviado' : 'Ingresar'}
          </button>
        </form>
      </article>
    </section>
  )
}

export default LoginView
