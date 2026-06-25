import type { MouseEvent, ReactNode } from 'react'

export interface MindNodeProps {
  x: number // % střed
  y: number // % střed
  accent: string
  size?: 'xl' | 'lg' | 'md' | 'sm'
  label: ReactNode
  caption?: string
  tip?: string
  badge?: 'MUST-HAVE' | 'NAVÍC' | null
  progress?: number
  done?: boolean
  delay?: number
  onClick?: (ev: MouseEvent) => void
}

// Čistě CSS (žádný Framer Motion) — uzly se nemusí draze vytvářet/rušit při
// přechodech mapy. Vstupní animace přes @keyframes, hover/tap přes :hover/:active.
export default function MindNode({
  x, y, accent, size = 'md', label, caption, tip, badge, progress = 0, done, delay = 0, onClick,
}: MindNodeProps) {
  const r = 46
  const c = 2 * Math.PI * r
  const p = done ? 1 : Math.max(0, Math.min(1, progress))
  return (
    <div
      className={`mindnode-pos mindnode-pos--${size}`}
      style={{ left: `${x}%`, top: `${y}%`, ['--accent' as string]: accent }}
    >
      <button
        type="button"
        className="mindnode"
        style={{ animationDelay: `${delay}s` }}
        onClick={onClick}
        title={tip || caption}
      >
        <span className="mindnode__halo" />
        <svg className="mindnode__ring" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r={r} className="mindnode__track" />
          <circle
            cx="50" cy="50" r={r} className="mindnode__prog"
            strokeDasharray={c} strokeDashoffset={c * (1 - p)} transform="rotate(-90 50 50)"
          />
        </svg>
        <span className="mindnode__face">
          <span className="mindnode__label">{label}</span>
          {done && <span className="mindnode__check">✓</span>}
        </span>
        {badge && (
          <span className={`mindnode__badge ${badge === 'MUST-HAVE' ? 'is-must' : 'is-extra'}`}>
            {badge === 'MUST-HAVE' ? '★' : '+'}
          </span>
        )}
      </button>
      {caption && <span className="mindnode__caption">{caption}</span>}
    </div>
  )
}
