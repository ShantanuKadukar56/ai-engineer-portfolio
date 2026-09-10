import { projects } from '../data/profile'
import { ProjectCard } from './ui/ProjectCard'
import { EmptyState } from './ui/EmptyState'
import { SectionHeading } from './ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped, not simulated"
          subtitle="Real systems built at Valethi Technologies, plus a personal project built to explore something new."
        />

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4h16v16H4zM4 9h16" />
              </svg>
            }
            title="No projects added yet"
            detail="Add entries to the `projects` array in data/profile.ts and they will appear here automatically."
          />
        )}
      </div>
    </section>
  )
}
