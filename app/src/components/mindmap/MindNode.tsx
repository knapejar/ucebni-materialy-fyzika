import { motion } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

export interface MindNodeProps {
  x: number // % střed
  y: number // % střed
  accent: string
  size?: 'xl' | 'lg' | 'md' | 'sm'
  label: ReactNode // hlavní text v uzlu (číslo / zkratka)
  caption?: string // popisek pod uzlem
  tip?: string // tooltip (celý název) — když chceme jiný text než caption
  badge?: 'MUST-HAVE' | 'NAVÍC' | null
  progress?: number // 0..1 (prstenec)
  done?: boolean
  delay?: number
  onClick?: (ev: MouseEvent) => void
}

export default function MindNode({
  x, y, accent, size = 'md', label, caption, tip, badge, progress = 0, done, delay = 0, onClick,
}: MindNodeProps) {
  const r = 46
  const c = 2 * Math.PI * r
  const p = done ? 1 : Math.max(0, Math.min(1, progress))
  // DŮLEŽITÉ: polohu (a centrování přes translate(-50%,-50%)) řeší vnější wrapper,
  // protože vnitřní motion.button si sám řídí `transform` (scale/hover). Kdyby
  // bylo centrování na tlačítku, Framer Motion by ho přepsal a uzel by se rozjel
  // vůči spojnicím mapy.
  return (
    <div
      className={`mindnode-pos mindnode-pos--${size}`}
      style={{ left: `${x}%`, top: `${y}%`, ['--accent' as string]: accent }}
    >
      <motion.button
        type="button"
        className="mindnode"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1, transition: { delay, type: 'spring', stiffness: 180, damping: 18 } }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
      {caption && <span className="mindnode__caption">{caption}</span>}
    </div>
  )
}
