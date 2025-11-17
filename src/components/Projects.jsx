function Projects() {
  const projects = [
    {
      title: 'Sognefjord Cabin',
      image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1974&auto=format&fit=crop',
      tag: 'Cabin',
    },
    {
      title: 'Oslo Townhouse',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
      tag: 'Residential',
    },
    {
      title: 'Bergen Workspace',
      image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2070&auto=format&fit=crop',
      tag: 'Commercial',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Selected projects</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">A few recent builds that reflect our love of light, texture, and durable materials.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-slate-300 text-slate-900 px-4 py-2 hover:bg-slate-100">Start your project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-2 py-1 mb-3">{p.tag}</span>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
