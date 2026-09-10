import { useState } from 'react'
import { personal } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

const CONTACT_TILES = [
  {
    key: 'email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: <path d="M6 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L17 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'shantanu-kadukar-aiengineer',
    href: personal.linkedin,
    icon: <path d="M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-3.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16" />,
  },
  {
    key: 'location',
    label: 'Location',
    value: personal.location,
    icon: <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something intelligent." />

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {CONTACT_TILES.map((tile) => {
            const content = (
              <>
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-300 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {tile.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{tile.label}</p>
                  <p className="text-sm text-slate-200 truncate">{tile.value}</p>
                </div>
              </>
            )
            return tile.href ? (
              <a
                key={tile.key}
                href={tile.href}
                target={tile.key === 'linkedin' ? '_blank' : undefined}
                rel="noreferrer"
                className="glass-card tilt-hover flex items-center gap-4 p-4"
              >
                {content}
              </a>
            ) : (
              <div key={tile.key} className="glass-card flex items-center gap-4 p-4">
                {content}
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/40"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/40"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="What are you building?"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/40 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 text-bg font-semibold text-sm shadow-glow hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
