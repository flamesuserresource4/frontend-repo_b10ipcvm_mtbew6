function Services() {
  const services = [
    {
      title: 'Design & planning',
      desc: 'Architectural drawings, permitting, and material selection with a focus on warmth and simplicity.',
    },
    {
      title: 'New builds',
      desc: 'From foundations to finish, energy-efficient homes, cabins, and commercial spaces.',
    },
    {
      title: 'Renovations',
      desc: 'Kitchen, bath, and full-home remodels that respect the original character.',
    },
    {
      title: 'Custom carpentry',
      desc: 'Built-ins, staircases, and bespoke woodwork in oak, ash, and spruce.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A streamlined, transparent approach — from first sketch to handover.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
