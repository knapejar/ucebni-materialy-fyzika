interface Pt {
  x: number
  y: number
  color?: string
}

// Statické spojnice (žádný Framer Motion) — při přechodech mapy se nic draze
// nevytváří/neruší. SVG viewBox 0..100 + preserveAspectRatio="none" => souřadnice
// v % přesně sedí na pozice uzlů.
export default function Connectors({ from, to }: { from: Pt; to: Pt[] }) {
  return (
    <svg className="connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="rgba(150,175,255,.30)" />
          <stop offset="100%" stopColor="rgba(150,175,255,0)" />
        </radialGradient>
      </defs>
      <circle cx={from.x} cy={from.y} r="16" fill="url(#core-glow)" />
      {to.map((p, i) => (
        <line
          key={i}
          x1={from.x} y1={from.y} x2={p.x} y2={p.y}
          stroke={p.color || 'rgba(180,200,255,.45)'}
          strokeWidth={0.16}
          strokeLinecap="round"
          opacity={0.42}
        />
      ))}
    </svg>
  )
}
