import type { Project } from '../../data/profile'
import { useTilt } from '../../hooks/useTilt'
import { TechBadge } from './TechBadge'

export function ProjectCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(4)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card tilt-hover shine-sweep p-7 flex flex-col gap-5"
    >
      <div>
        <h3 className="text-lg font-bold text-slate-100">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.tagline}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="section-eyebrow mb-1.5 text-[0.65rem]">Problem</p>
          <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="section-eyebrow mb-1.5 text-[0.65rem]">Solution</p>
          <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex gap-4 pt-2 text-sm">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300">
              GitHub →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300">
              Live demo →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
