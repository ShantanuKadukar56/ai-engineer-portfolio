import { certifications, education } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="relative py-28 bg-bg-soft">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Education & Certifications" title="Foundations" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="section-eyebrow mb-4">Education</p>
            <div className="glass-card p-6">
              <p className="font-semibold text-slate-900">{education.institution}</p>
              <p className="text-sm text-slate-600 mt-1">{education.degree}</p>
              <div className="flex items-center justify-between mt-4 text-xs font-mono text-slate-500">
                <span>{education.period}</span>
                <span>{education.detail}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="section-eyebrow mb-4">Certifications</p>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.name} className="glass-card p-4">
                  <p className="text-sm font-medium text-slate-900">{c.name}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-2 text-xs text-slate-500">
                    <span>
                      {c.issuer}
                      {c.issued ? ` · ${c.issued}` : ''}
                    </span>
                    {c.credentialId && <span className="font-mono text-slate-500">ID: {c.credentialId}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
