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
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600">{icon}</div>
      <p className="text-slate-800 font-medium">{title}</p>
      <p className="text-slate-500 text-sm max-w-md font-mono">{detail}</p>
    </div>
  )
}
