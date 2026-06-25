import { createContext, useContext, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'

// Navigace s "Prezi" zoomem: při kliknutí na uzel zapamatujeme jeho střed
// (origin) a směr (dovnitř / ven). Přechody pak letí přesně do/ze zvoleného bodu.

export type ZoomDir = 'in' | 'out' | 'none'
export interface Origin {
  x: number
  y: number
}

interface NavState {
  origin: Origin
  dir: ZoomDir
  zoomTo: (to: string, dir: ZoomDir, ev?: MouseEvent) => void
}

const Ctx = createContext<NavState | null>(null)
export const useZoom = () => {
  const v = useContext(Ctx)
  if (!v) throw new Error('useZoom must be used within ZoomProvider')
  return v
}

export function ZoomProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [state, setState] = useState<{ origin: Origin; dir: ZoomDir }>({
    origin: { x: 50, y: 50 },
    dir: 'none',
  })
  const lock = useRef(false)

  const zoomTo = (to: string, dir: ZoomDir, ev?: MouseEvent) => {
    if (lock.current) return
    lock.current = true
    setTimeout(() => (lock.current = false), 200)
    let origin: Origin = { x: 50, y: 50 }
    if (ev) {
      const el = ev.currentTarget as HTMLElement
      const r = el.getBoundingClientRect()
      origin = {
        x: ((r.left + r.width / 2) / window.innerWidth) * 100,
        y: ((r.top + r.height / 2) / window.innerHeight) * 100,
      }
    }
    setState({ origin, dir })
    navigate(to)
  }

  return <Ctx.Provider value={{ ...state, zoomTo }}>{children}</Ctx.Provider>
}

const DUR = 0.3
const EASE = [0.22, 1, 0.36, 1] as const

// Přechod vedený PRŮHLEDNOSTÍ (opacity je čistě kompozitní – nerasterizuje se).
// Škálování děláme jen JEMNÉ: těžká lekce bez škálování (jinak se draze
// rasterizuje obří vrstva), lehká mapa jen lehký „zoom" pocit.
const variantsFor = (dir: ZoomDir, heavy: boolean): Variants => {
  // Lekce (heavy): jen crossfade (scale 1) — těžká vrstva, škálování by sekalo.
  // Mapa (light): výrazný zoom k/od uzlu → zachová „prezi" pocit, je lehká.
  const inS = heavy ? 1 : 0.9 // počáteční scale při příchodu
  const outS = heavy ? 1 : 1.12 // koncový scale při odchodu
  const t = { duration: DUR, ease: EASE }
  if (dir === 'in')
    return {
      initial: { scale: inS, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: t },
      exit: { scale: outS, opacity: 0, transition: t },
    }
  if (dir === 'out')
    return {
      initial: { scale: outS, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: t },
      exit: { scale: inS, opacity: 0, transition: t },
    }
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.22 } },
    exit: { opacity: 0, transition: { duration: 0.16 } },
  }
}

/** Obal stránky, který aplikuje zoom přechod podle aktuálního směru a originu. */
export function ZoomPage({ children, scroll = false }: { children: ReactNode; scroll?: boolean }) {
  const { origin, dir } = useZoom()
  return (
    <motion.div
      className={scroll ? 'zoom-page zoom-page--scroll' : 'zoom-page'}
      style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
      variants={variantsFor(dir, scroll)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
