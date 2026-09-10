import { personal } from '../data/profile'
import { EmptyState } from './ui/EmptyState'
import { SectionHeading } from './ui/SectionHeading'

export function GitHubSection() {
  return (
    <section id="github" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Open Source" title="GitHub" />

        {personal.github ? (
          <div className="glass-card p-8 text-center">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 font-mono"
            >
              {personal.github}
            </a>
          </div>
        ) : (
          <EmptyState
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            }
            title="No GitHub profile linked yet"
            detail="Set personal.github in data/profile.ts to your profile URL (e.g. github.com/username) and this section will link to it automatically."
          />
        )}
      </div>
    </section>
  )
}
