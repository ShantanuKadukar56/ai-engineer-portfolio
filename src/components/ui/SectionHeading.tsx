export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto mb-14' : 'mb-14'}>
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  )
}
