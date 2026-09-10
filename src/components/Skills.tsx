import type { ReactElement } from 'react'
import { skillCategories, type SkillCategory } from '../data/profile'
import { useTilt } from '../hooks/useTilt'
import { SectionHeading } from './ui/SectionHeading'
import { TechBadge } from './ui/TechBadge'

const ICONS: Record<SkillCategory['icon'], ReactElement> = {
  ai: <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.4 1.5 3.2C8.6 10.2 8 11.4 8 13a4 4 0 0 0 8 0c0-1.6-.6-2.8-1.5-3.8.7-.8 1.5-1.7 1.5-3.2a4 4 0 0 0-4-4zM8 21h8M10 17.5v3M14 17.5v3" />,
  data: <path d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zM4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2" />,
  cloud: <path d="M7 18a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18 12a3.5 3.5 0 0 1-.5 6.9H7z" />,
  web: <path d="M4 5h16v14H4zM4 9h16M9 5v4" />,
  bi: <path d="M4 20V10M10 20V4M16 20v-7M4 20h16" />,
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the systems"
          subtitle="Everything below is a skill actually listed and used in real work, grouped by where it sits in the stack."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ cat }: { cat: SkillCategory }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(3)
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card tilt-hover shine-sweep p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-300 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {ICONS[cat.icon]}
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-slate-100">{cat.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s) => (
          <TechBadge key={s} label={s} />
        ))}
      </div>
    </div>
  )
}
