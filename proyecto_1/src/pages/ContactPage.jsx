import { useMemo, useRef, useState } from 'react'
import { useToast } from '../context/ToastContext'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef(null)
  const toast = useToast()

  const errors = useMemo(() => {
    const result = {}

    if (form.name.trim().length < 3) {
      result.name = 'El nombre debe tener al menos 3 caracteres.'
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailOk) {
      result.email = 'Ingresa un correo valido.'
    }

    if (form.message.trim().length < 10) {
      result.message = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return result
  }, [form])

  const isValid = Object.keys(errors).length === 0

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    if (!isValid) {
      toast.error('Corrige los errores del formulario para continuar.')
      return
    }
    dialogRef.current?.showModal()
  }

  const sendForm = () => {
    dialogRef.current?.close()
    toast.success('Mensaje enviado correctamente.')
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-bold text-white">Contacto</h1>
        <p className="text-slate-300">Envia un mensaje con formulario controlado y validado.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-6" noValidate>
        <label htmlFor="name" className="block space-y-2">
          <span className="text-sm font-semibold text-slate-200">Nombre</span>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-sky-400 transition focus:ring"
          />
          {submitted && errors.name ? <p className="text-sm text-rose-300">{errors.name}</p> : null}
        </label>

        <label htmlFor="email" className="block space-y-2">
          <span className="text-sm font-semibold text-slate-200">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-sky-400 transition focus:ring"
          />
          {submitted && errors.email ? <p className="text-sm text-rose-300">{errors.email}</p> : null}
        </label>

        <label htmlFor="message" className="block space-y-2">
          <span className="text-sm font-semibold text-slate-200">Mensaje</span>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-sky-400 transition focus:ring"
          />
          {submitted && errors.message ? <p className="text-sm text-rose-300">{errors.message}</p> : null}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="rounded-full bg-sky-400 px-5 py-2 font-bold text-slate-950 transition disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
        >
          Enviar formulario
        </button>
      </form>

      <dialog ref={dialogRef} className="w-[92vw] max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-0 text-slate-100">
        <form method="dialog" className="space-y-5 p-6">
          <h2 className="font-heading text-2xl font-bold">Confirmar envio</h2>
          <p className="text-sm text-slate-300">Tu mensaje sera enviado ahora mismo.</p>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={sendForm} className="rounded-full bg-sky-400 px-4 py-2 font-bold text-slate-950">
              Confirmar
            </button>
            <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-full border border-slate-600 px-4 py-2 text-slate-200">
              Volver
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default ContactPage
