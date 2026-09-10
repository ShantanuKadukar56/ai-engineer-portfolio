import { useState } from 'react'
import { personal } from '../data/profile'
import { useTilt } from '../hooks/useTilt'
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
          {CONTACT_TILES.map((tile) => (
            <ContactTile key={tile.key} tile={tile} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="bg-white border border-border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600/40"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="bg-white border border-border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600/40"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="What are you building?"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600/40 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-glow hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactTile({ tile }: { tile: (typeof CONTACT_TILES)[number] }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement | HTMLDivElement>(3)

  const content = (
    <>
      <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          {tile.icon}
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-500">{tile.label}</p>
        <p className="text-sm text-slate-800 truncate">{tile.value}</p>
      </div>
    </>
  )

  return tile.href ? (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={tile.href}
      target={tile.key === 'linkedin' ? '_blank' : undefined}
      rel="noreferrer"
      className="glass-card tilt-hover flex items-center gap-4 p-4"
    >
      {content}
    </a>
  ) : (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card tilt-hover flex items-center gap-4 p-4"
    >
      {content}
    </div>
  )
}
