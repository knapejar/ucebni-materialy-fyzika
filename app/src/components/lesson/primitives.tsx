import { useState, useEffect, useRef, createContext, useContext, type ReactNode, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import katex from 'katex'
import { useZoom } from '../../lib/nav'
import { concepts } from '../../content/concepts'

/* ------------------------------------------------------------------ *
 *  MATEMATIKA (KaTeX, bundlovaná — žádný CDN)
 * ------------------------------------------------------------------ */
export function M({ children }: { children: string }) {
  const html = katex.renderToString(children, { throwOnError: false, displayMode: false })
  return <span className="math-inline" dangerouslySetInnerHTML={{ __html: html }} />
}
export function MB({ children }: { children: string }) {
  const html = katex.renderToString(children, { throwOnError: false, displayMode: true })
  return <div className="math-block" dangerouslySetInnerHTML={{ __html: html }} />
}

/* ------------------------------------------------------------------ *
 *  POJEM — wiki proklik. <Concept id="...">text</Concept>
 *  Když je pojem v registru, je to odkaz do lekce, kde je vyložen.
 * ------------------------------------------------------------------ */
export function Concept({ id, children }: { id: string; children: ReactNode }) {
  const { zoomTo } = useZoom()
  const c = concepts[id]
  if (!c) {
    if (import.meta.env.DEV) console.warn(`[Concept] neznámé id "${id}" — zatím bez odkazu`)
    return <span className="concept concept--pending">{children}</span>
  }
  const go = (e: MouseEvent) => {
    e.preventDefault()
    // ?focus=<id> → cílová lekce po načtení odscrolluje k pojmu a zvýrazní ho
    zoomTo(`/lekce/${c.lesson}?focus=${id}`, 'none', e)
  }
  return (
    <a href={`#/lekce/${c.lesson}?focus=${id}`} className="concept" onClick={go} title={c.short || c.label}>
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------ *
 *  SEKCE
 * ------------------------------------------------------------------ */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="lsection">
      <h2 className="lsection__title">{title}</h2>
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ *
 *  OBRÁZEK (statický)
 * ------------------------------------------------------------------ */
export function Figure({ caption, children }: { caption?: ReactNode; children: ReactNode }) {
  return (
    <figure className="lfigure">
      <div className="lfigure__canvas">{children}</div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 *  KROKOVATELNÁ ILUSTRACE — „další / zpět" pro procesy
 * ------------------------------------------------------------------ */
export interface Step {
  content: ReactNode
  caption?: ReactNode
  label?: string
}
export function StepFigure({ title, steps }: { title?: string; steps: Step[] }) {
  const [i, setI] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const n = steps.length
  const prev = () => setI((x) => Math.max(0, x - 1))
  const next = () => setI((x) => Math.min(n - 1, x + 1))
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [n])
  const step = steps[i]
  return (
    <figure className="stepfig" ref={ref} tabIndex={0}>
      {title && <div className="stepfig__title">{title}</div>}
      <div className="stepfig__stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28 }}
            className="stepfig__content"
          >
            {step.content}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="stepfig__bar">
        <button className="stepbtn" onClick={prev} disabled={i === 0}>← Zpět</button>
        <div className="stepfig__dots">
          {steps.map((_, k) => (
            <button
              key={k}
              className={`dot ${k === i ? 'is-on' : ''}`}
              aria-label={`Krok ${k + 1}`}
              onClick={() => setI(k)}
            />
          ))}
        </div>
        <button className="stepbtn" onClick={next} disabled={i === n - 1}>Další →</button>
      </div>
      {(step.caption || step.label) && (
        <figcaption className="stepfig__cap">
          <span className="stepfig__stepno">Krok {i + 1}/{n}{step.label ? ` · ${step.label}` : ''}</span>
          {step.caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 *  CALLOUT — chyták / tip / cíl / pozor / info
 * ------------------------------------------------------------------ */
type CalloutKind = 'chytak' | 'tip' | 'cil' | 'pozor' | 'info'
const CALLOUT_META: Record<CalloutKind, { icon: string; label: string }> = {
  chytak: { icon: '🪤', label: 'Chyták' },
  tip: { icon: '💡', label: 'Tip' },
  cil: { icon: '🎯', label: 'Cíl' },
  pozor: { icon: '⚠️', label: 'Pozor' },
  info: { icon: 'ℹ️', label: 'Poznámka' },
}
export function Callout({ kind = 'info', title, children }: { kind?: CalloutKind; title?: string; children: ReactNode }) {
  const m = CALLOUT_META[kind]
  return (
    <aside className={`callout callout--${kind}`}>
      <div className="callout__head">
        <span className="callout__icon">{m.icon}</span>
        <span className="callout__label">{title || m.label}</span>
      </div>
      <div className="callout__body">{children}</div>
    </aside>
  )
}

/* ------------------------------------------------------------------ *
 *  CÍLE „CO UMĚT NA 1" — checklist (ukládá se do localStorage)
 * ------------------------------------------------------------------ */
export function ExamGoals({ lessonId, goals }: { lessonId: string; goals: string[] }) {
  const key = `fyzika.goals.${lessonId}`
  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || 'null') || goals.map(() => false)
    } catch {
      return goals.map(() => false)
    }
  })
  const toggle = (i: number) => {
    const next = checked.slice()
    next[i] = !next[i]
    setChecked(next)
    localStorage.setItem(key, JSON.stringify(next))
  }
  return (
    <div className="examgoals">
      <div className="examgoals__head">🎯 Co umět na jedničku</div>
      <ul>
        {goals.map((g, i) => (
          <li key={i} className={checked[i] ? 'is-done' : ''}>
            <button className="examgoals__check" onClick={() => toggle(i)} aria-pressed={checked[i]}>
              {checked[i] ? '✓' : ''}
            </button>
            <span>{g}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 *  SELF-CHECK „umím to?" — otázka s odkrytím odpovědi
 * ------------------------------------------------------------------ */
export function SelfCheck({ items }: { items: { q: ReactNode; a: ReactNode }[] }) {
  return (
    <div className="selfcheck">
      <div className="selfcheck__head">✅ Umím to? (zkus odpovědět, pak odkryj)</div>
      <ol>
        {items.map((it, i) => <SelfCheckItem key={i} {...it} />)}
      </ol>
    </div>
  )
}
function SelfCheckItem({ q, a }: { q: ReactNode; a: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="selfcheck__item">
      <div className="selfcheck__q">{q}</div>
      <button className="selfcheck__toggle" onClick={() => setOpen((o) => !o)}>
        {open ? 'Skrýt odpověď' : 'Ukázat odpověď'}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="selfcheck__a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="selfcheck__a-inner">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

/* zvýraznění klíčového pojmu (definice na místě).
   `id` = kotva pro proklik: jiné lekce se přes <Concept id="..."> doscrollují sem. */
export function Term({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <strong className="term" id={id ? `c-${id}` : undefined} data-concept={id}>
      {children}
    </strong>
  )
}

/* ================================================================== *
 *  ANIMOVANÁ KROKOVATELNÁ VIZUALIZACE (StepScene)
 *
 *  Na rozdíl od StepFigure to NEJSOU slidy: je to JEDNO svg, jehož prvky
 *  se mezi kroky PLYNULE ZANIMUJÍ (poloha, velikost, průhlednost, barva).
 *  Každý prvek (A*) dostane buď jednu hodnotu (konstantní přes kroky), nebo
 *  POLE hodnot [krok0, krok1, …]; komponenta podle aktuálního kroku interpoluje.
 *
 *  Příklad:
 *    <StepScene title="…" viewBox="0 0 420 180" captions={[<>…</>, <>…</>]}>
 *      <ALine x1={0} y1={167} x2={420} y2={167} stroke="#3a4566" strokeWidth={3} />
 *      <ACircle cx={[258, 330]} cy={136} r={11} fill="#f59e0b" />
 *      <AText x={[210, 320]} y={40} opacity={[1, 0]}>klid</AText>
 *    </StepScene>
 *  Prvky, které v některém kroku „nejsou", jen schovej průhledností (opacity 0).
 * ================================================================== */

const StepCtx = createContext(0)
const ASTEP_T = { duration: 0.55, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
type V<T> = T | T[]
function pick<T>(v: V<T> | undefined, s: number): T | undefined {
  if (v === undefined) return undefined
  return Array.isArray(v) ? (v as T[])[Math.min(s, (v as T[]).length - 1)] : (v as T)
}
function av(s: number, obj: Record<string, V<number | string> | undefined>) {
  const o: Record<string, number | string> = {}
  for (const k in obj) {
    const val = pick(obj[k], s)
    if (val !== undefined) o[k] = val
  }
  return o
}

export function StepScene({
  title, viewBox, captions, children,
}: { title?: string; viewBox: string; captions: ReactNode[]; children: ReactNode }) {
  const [i, setI] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const n = captions.length
  const prev = () => setI((x) => Math.max(0, x - 1))
  const next = () => setI((x) => Math.min(n - 1, x + 1))
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [n])
  return (
    <figure className="stepfig stepfig--anim" ref={ref} tabIndex={0}>
      {title && <div className="stepfig__title">{title}</div>}
      <div className="stepfig__stage stepfig__stage--anim">
        <svg viewBox={viewBox} className="svg-fig">
          <StepCtx.Provider value={i}>{children}</StepCtx.Provider>
        </svg>
      </div>
      <div className="stepfig__bar">
        <button className="stepbtn" onClick={prev} disabled={i === 0}>← Zpět</button>
        <div className="stepfig__dots">
          {captions.map((_, k) => (
            <button key={k} className={`dot ${k === i ? 'is-on' : ''}`} aria-label={`Krok ${k + 1}`} onClick={() => setI(k)} />
          ))}
        </div>
        <button className="stepbtn" onClick={next} disabled={i === n - 1}>Další →</button>
      </div>
      <figcaption className="stepfig__cap">
        <span className="stepfig__stepno">Krok {i + 1}/{n}</span> {captions[i]}
      </figcaption>
    </figure>
  )
}

// ——— animované SVG prvky (poloha/velikost/průhlednost/barva po krocích) ———
type CommonA = { opacity?: V<number>; fill?: V<string>; stroke?: V<string>; strokeWidth?: V<number> }

export function ACircle({ cx, cy, r, ...rest }: { cx: V<number>; cy: V<number>; r: V<number> } & CommonA & Record<string, unknown>) {
  const s = useContext(StepCtx)
  const { opacity, fill, stroke, strokeWidth, ...other } = rest
  return <motion.circle {...other} initial={false} animate={av(s, { cx, cy, r, opacity, fill, stroke, strokeWidth })} transition={ASTEP_T} />
}

export function ALine({ x1, y1, x2, y2, ...rest }: { x1: V<number>; y1: V<number>; x2: V<number>; y2: V<number> } & CommonA & Record<string, unknown>) {
  const s = useContext(StepCtx)
  const { opacity, stroke, strokeWidth, fill, ...other } = rest
  return <motion.line {...other} initial={false} animate={av(s, { x1, y1, x2, y2, opacity, stroke, strokeWidth })} transition={ASTEP_T} />
}

export function ARect({ x, y, width, height, ...rest }: { x: V<number>; y: V<number>; width: V<number>; height: V<number> } & CommonA & Record<string, unknown>) {
  const s = useContext(StepCtx)
  const { opacity, fill, stroke, strokeWidth, ...other } = rest
  // x/y jako SVG atributy (ne transform) → attrX/attrY
  return <motion.rect {...other} initial={false} animate={av(s, { attrX: x, attrY: y, width, height, opacity, fill, stroke, strokeWidth })} transition={ASTEP_T} />
}

export function AText({ x, y, children, ...rest }: { x: V<number>; y: V<number>; children: ReactNode } & CommonA & Record<string, unknown>) {
  const s = useContext(StepCtx)
  const { opacity, fill, stroke, strokeWidth, ...other } = rest
  return <motion.text {...other} initial={false} animate={av(s, { attrX: x, attrY: y, opacity, fill })} transition={ASTEP_T}>{children}</motion.text>
}

// Skupina: pohyb celé pod-kresby (x,y = posun/translate), průhlednost, zvětšení, rotace.
export function AGroup({ x, y, scale, rotate, opacity, children, ...rest }:
  { x?: V<number>; y?: V<number>; scale?: V<number>; rotate?: V<number>; opacity?: V<number>; children: ReactNode } & Record<string, unknown>) {
  const s = useContext(StepCtx)
  return <motion.g {...rest} initial={false} animate={av(s, { x, y, scale, rotate, opacity })} transition={ASTEP_T}>{children}</motion.g>
}

export function APath({ d, ...rest }: { d: V<string> } & CommonA & Record<string, unknown>) {
  const s = useContext(StepCtx)
  const { opacity, fill, stroke, strokeWidth, ...other } = rest
  return <motion.path {...other} initial={false} animate={av(s, { d, opacity, fill, stroke, strokeWidth })} transition={ASTEP_T} />
}
