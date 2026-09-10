import { about } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

const PHILOSOPHY_ICONS = [
  <path key="1" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  <path key="2" d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
  <path key="3" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  <path key="4" d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5c0 3-2.5 4.5-2.5 6.5h-6c0-2-2.5-3.5-2.5-6.5A5.5 5.5 0 0 1 12 6.5zM9.5 21h5" />,
]

export function About() {
  return (
    <section id="about" className="relative py-28 bg-bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Engineer, not just prompt-writer" />

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}

            <ul className="mt-6 space-y-3">
              {about.coreStrengths.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="glass-card p-2 sm:p-6">
              <p className="section-eyebrow px-4 pt-4 sm:px-0 sm:pt-0 mb-5">Engineering Philosophy</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {about.philosophy.map((item, i) => (
                  <div key={item.title} className="p-4 rounded-xl bg-white border border-border-soft">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        {PHILOSOPHY_ICONS[i % PHILOSOPHY_ICONS.length]}
                      </svg>
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
