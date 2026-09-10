import { personal } from '../data/profile'
import { Starfield } from './ui/Starfield'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-engineering-grid bg-radial-fade overflow-hidden"
    >
      <Starfield count={70} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="pill-badge mx-auto mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {personal.availability}
        </div>

        <p className="font-script text-gradient-gold text-xl mb-3">The Portfolio</p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-50">
          {personal.name}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-gradient-primary">
          {personal.title} · Multi-Agent LLM Systems
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-relaxed">
          I build production AI systems across multiple LLM providers, backed by the data engineering
          discipline to keep them reliable, not just impressive in a demo.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 text-bg font-semibold text-sm shadow-glow hover:brightness-110 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-lg border border-border text-slate-200 font-semibold text-sm hover:border-cyan-400/40 hover:text-cyan-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-float">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16M6 14l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
