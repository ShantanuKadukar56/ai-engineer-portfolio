import { aiStack } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'

const W = 1300
const H = 640
const ROOT_Y = 60
const BRANCH_Y = 250
const CHILD_Y = 420
const OUTPUT_Y = 580

export function AIStack() {
  const branchCount = aiStack.branches.length
  const rootPos = { x: W / 2, y: ROOT_Y }
  const outputPos = { x: W / 2, y: OUTPUT_Y }

  const branchPositions = aiStack.branches.map((b, i) => ({
    ...b,
    x: ((i + 1) * W) / (branchCount + 1),
    y: BRANCH_Y,
  }))

  const childPositions = branchPositions.flatMap((branch) =>
    branch.children.map((label, j) => {
      const n = branch.children.length
      const spread = 160
      const x = branch.x + (j - (n - 1) / 2) * spread
      return { label, x, y: CHILD_Y, parentX: branch.x, parentY: branch.y }
    }),
  )

  const rootLines = branchPositions.map((b) => ({ x1: rootPos.x, y1: rootPos.y, x2: b.x, y2: b.y }))
  const branchLines = childPositions.map((c) => ({ x1: c.parentX, y1: c.parentY, x2: c.x, y2: c.y }))
  const outputLines = childPositions.map((c) => ({ x1: c.x, y1: c.y, x2: outputPos.x, y2: outputPos.y }))

  const allLines = [...rootLines, ...branchLines, ...outputLines]

  return (
    <section id="ai-stack" className="relative py-28 bg-bg-soft overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="AI Engineering Stack"
          title="How the pieces connect"
          subtitle="From provider APIs and agent orchestration down to a single production system."
        />

        <div className="glass-card p-4 sm:p-8">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="AI engineering stack diagram">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {allLines.map((l, i) => {
              const d = `M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`
              return (
                <g key={i}>
                  <path d={d} stroke="url(#lineGrad)" strokeWidth={1.5} fill="none" />
                  <circle r={3} fill="#67e8f9" filter="url(#glow)">
                    <animateMotion dur={`${3 + (i % 5) * 0.4}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              )
            })}

            {/* Root node */}
            <Node x={rootPos.x} y={rootPos.y} label={aiStack.root} kind="root" />

            {/* Branch nodes */}
            {branchPositions.map((b) => (
              <Node key={b.label} x={b.x} y={b.y} label={b.label} kind="branch" />
            ))}

            {/* Child leaf nodes */}
            {childPositions.map((c) => (
              <Node key={c.label} x={c.x} y={c.y} label={c.label} kind="child" />
            ))}

            {/* Output node */}
            <Node x={outputPos.x} y={outputPos.y} label={aiStack.output} kind="output" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function Node({
  x,
  y,
  label,
  kind,
}: {
  x: number
  y: number
  label: string
  kind: 'root' | 'branch' | 'child' | 'output'
}) {
  const isRoot = kind === 'root'
  const isOutput = kind === 'output'
  const isBranch = kind === 'branch'

  const paddingX = isRoot || isOutput ? 20 : isBranch ? 16 : 10
  const height = isRoot || isOutput ? 40 : isBranch ? 36 : 28
  const fontSize = isRoot || isOutput ? 15 : isBranch ? 12.5 : 10.5
  const charWidth = fontSize * 0.6
  const width = label.length * charWidth + paddingX * 2

  const fill = isRoot
    ? '#22d3ee'
    : isOutput
      ? '#a78bfa'
      : isBranch
        ? 'rgba(34,211,238,0.12)'
        : 'rgba(148,163,184,0.08)'
  const stroke = isRoot || isOutput ? 'transparent' : isBranch ? 'rgba(34,211,238,0.4)' : 'rgba(148,163,184,0.25)'
  const textColor = isRoot ? '#05070d' : isOutput ? '#05070d' : isBranch ? '#67e8f9' : '#cbd5e1'
  const fontWeight = isRoot || isOutput ? 700 : isBranch ? 600 : 500

  return (
    <g>
      <rect
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
        rx={height / 2}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
        filter={isRoot || isOutput ? 'url(#glow)' : undefined}
      />
      <text
        x={x}
        y={y + fontSize * 0.35}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={textColor}
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
      >
        {label}
      </text>
    </g>
  )
}
