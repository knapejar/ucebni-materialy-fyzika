import { useMemo } from 'react'
import { ZoomPage, useZoom } from '../../lib/nav'
import { themes, themeShort } from '../../data/course'
import { useProgress } from '../../lib/progress'
import MindNode from './MindNode'
import Connectors from './Connectors'

export default function Atlas() {
  const { zoomTo } = useZoom()
  const { isDone } = useProgress()

  const nodes = useMemo(() => {
    const rx = 33, ry = 34
    return themes.map((t, i) => {
      const ang = (-90 + i * (360 / themes.length)) * (Math.PI / 180)
      const x = 50 + rx * Math.cos(ang)
      const y = 50 + ry * Math.sin(ang)
      const done = t.lessons.filter((l) => isDone(l.id)).length
      return { t, x, y, done, total: t.lessons.length, progress: done / t.lessons.length }
    })
  }, [isDone])

  const allDone = themes.flatMap((t) => t.lessons).filter((l) => isDone(l.id)).length
  const allTotal = themes.flatMap((t) => t.lessons).length

  return (
    <ZoomPage>
      <header className="topbar">
        <div className="brand">
          <span className="brand__dot" />
          Fyzika <span className="brand__sub">interaktivní učebnice</span>
        </div>
        <div className="topbar__progress" title="Tvůj celkový pokrok">
          <div className="bar"><span style={{ width: `${(allDone / allTotal) * 100}%` }} /></div>
          <span className="topbar__count">{allDone}/{allTotal} lekcí</span>
        </div>
      </header>

      <div className="stage">
        <Connectors from={{ x: 50, y: 50 }} to={nodes.map((n) => ({ x: n.x, y: n.y, color: n.t.accent }))} />

        <MindNode
          x={50} y={50} accent="#cdd6ff" size="xl" label="Fyzika"
          progress={allDone / allTotal}
        />

        {nodes.map((n, i) => (
          <MindNode
            key={n.t.num}
            x={n.x} y={n.y} accent={n.t.accent} size="lg" delay={0.05 + i * 0.06}
            label={<span className="tnum">{n.t.num}</span>}
            caption={`${themeShort(n.t)} · ${n.total} lekcí`}
            progress={n.progress}
            done={n.done === n.total}
            onClick={(ev) => zoomTo(`/tema/${n.t.num}`, 'in', ev)}
          />
        ))}
      </div>
    </ZoomPage>
  )
}
