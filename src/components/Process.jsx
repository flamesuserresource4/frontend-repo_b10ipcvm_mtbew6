function Process() {
  const steps = [
    {
      title: 'Consultation',
      desc: 'We listen, measure, and define goals, budget, and timeline together.',
    },
    {
      title: 'Design',
      desc: 'Concepts become drawings and material palettes you can feel and adjust.',
    },
    {
      title: 'Build',
      desc: 'Our in-house team and trusted partners deliver with pride and precision.',
    },
    {
      title: 'Handover',
      desc: 'A walkthrough covering care, warranties, and maintenance.',
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How we work</h2>
            <p className="mt-3 text-slate-600 max-w-xl">Clear communication, weekly updates, and thoughtful scheduling keep your project moving smoothly.</p>

            <div className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">{i + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-6 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop"
              alt="Site planning and material layout"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
