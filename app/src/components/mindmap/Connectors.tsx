import { motion } from 'framer-motion'

interface Pt {
  x: number
  y: number
  color?: string
}

// Spojnice mezi centrálním uzlem a okolními uzly. SVG s viewBox 0..100 a
// preserveAspectRatio="none" => souřadnice v % přesně sedí na pozice uzlů.
// Čáry jsou jemné a zářící; pod nimi je rozmazaná kopie (neonový glow).
export default function Connectors({ from, to }: { from: Pt; to: Pt[] }) {
  return (
    <svg className="connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id="conn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="rgba(150,175,255,.30)" />
          <stop offset="100%" stopColor="rgba(150,175,255,0)" />
        </radialGradient>
      </defs>

      <circle cx={from.x} cy={from.y} r="16" fill="url(#core-glow)" />

      <g filter="url(#conn-glow)">
        {to.map((p, i) => (
          <motion.line
            key={i}
            x1={from.x} y1={from.y} x2={p.x} y2={p.y}
            stroke={p.color || 'rgba(180,200,255,.45)'}
            strokeWidth={0.16}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.42, transition: { duration: 0.7, delay: 0.08 + i * 0.05 } }}
          />
        ))}
      </g>
    </svg>
  )
}
