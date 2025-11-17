import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks — we will be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Start your project</h2>
            <p className="mt-3 text-slate-600 max-w-xl">Tell us a bit about your goals, and we’ll follow up to schedule a consultation.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Project type</label>
                <select name="type" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                  <option>New build</option>
                  <option>Renovation</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <button className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">Send message</button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1523419409543-a018d9ea8d6a?q=80&w=2070&auto=format&fit=crop"
              alt="Nordic timber facade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
