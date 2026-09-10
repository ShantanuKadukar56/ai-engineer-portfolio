import { personal } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex items-center gap-5 text-xs text-slate-500">
          <a href={`mailto:${personal.email}`} className="hover:text-blue-700 transition-colors">
            Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
