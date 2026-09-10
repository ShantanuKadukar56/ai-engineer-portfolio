import { experience } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-bg-soft">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Experience" title="Where the work actually happened" />

        <div className="space-y-14">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative pl-8 border-l border-border">
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-blue-600 shadow-glow" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <span className="font-mono text-xs text-blue-600">{job.period}</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                {job.company} · {job.location}
              </p>

              <div className="space-y-8">
                {job.groups.map((group) => (
                  <div key={group.heading} className="glass-card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="font-semibold text-slate-900">{group.heading}</h4>
                      {group.techStack && (
                        <span className="font-mono text-[0.7rem] text-violet-700">{group.techStack}</span>
                      )}
                    </div>
                    <ul className="space-y-2.5">
                      {group.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
