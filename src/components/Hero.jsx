function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-slate-100 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Established 2004 • Family owned
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Scandinavian craft. Modern construction.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              We design and build warm, minimalist spaces across the Nordics — homes, cabins, and commercial interiors with natural materials and timeless detail.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">
                Get a quote
              </a>
              <a href="#projects" className="inline-flex items-center rounded-md border border-slate-300 text-slate-900 px-5 py-3 hover:bg-slate-100 transition-colors">
                View projects
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-semibold text-slate-900">350+</p>
                <p className="text-sm text-slate-600">Projects delivered</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">20</p>
                <p className="text-sm text-slate-600">Years in business</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">4.9</p>
                <p className="text-sm text-slate-600">Client rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop"
                alt="Nordic wood and concrete interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col justify-center">
              <p className="text-xs text-slate-500">Materials</p>
              <p className="text-sm font-medium text-slate-900">Spruce, oak, concrete, glass</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
