export function EmptyState({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode
  title: string
  detail: string
}) {
  return (
    <div className="empty-state flex flex-col items-center text-center gap-4 py-16 px-6">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400">{icon}</div>
      <p className="text-slate-200 font-medium">{title}</p>
      <p className="text-slate-500 text-sm max-w-md font-mono">{detail}</p>
    </div>
  )
}
