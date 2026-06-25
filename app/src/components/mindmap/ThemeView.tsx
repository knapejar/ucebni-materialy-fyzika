import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ZoomPage, useZoom } from '../../lib/nav'
import { getTheme, themeShort } from '../../data/course'
import { useProgress } from '../../lib/progress'
import MindNode from './MindNode'
import Connectors from './Connectors'

export default function ThemeView() {
  const { t } = useParams()
  const { zoomTo } = useZoom()
  const { isDone, isSeen } = useProgress()
  const theme = getTheme(Number(t))

  const nodes = useMemo(() => {
    if (!theme) return []
    const n = theme.lessons.length
    const rx = n > 8 ? 41 : 34
    const ry = n > 8 ? 38 : 33
    return theme.lessons.map((l, i) => {
      const ang = (-90 + i * (360 / n)) * (Math.PI / 180)
      return { l, x: 50 + rx * Math.cos(ang), y: 50 + ry * Math.sin(ang) }
    })
  }, [theme])

  // krátký název do uzlu (celý je v tooltipu)
  const short = (s: string) => s.split(/[,:(]/)[0].trim()

  if (!theme) return <Navigate to="/" replace />

  const done = theme.lessons.filter((l) => isDone(l.id)).length

  return (
    <ZoomPage>
      <header className="topbar">
        <button className="backbtn" onClick={(e) => zoomTo('/', 'out', e)} aria-label="Zpět na atlas">
          ← Atlas
        </button>
        <div className="topbar__title" style={{ color: theme.accent }}>
          <span className="topbar__num">{theme.num}</span> {themeShort(theme)}
        </div>
        <div className="topbar__progress">
          <div className="bar"><span style={{ width: `${(done / theme.lessons.length) * 100}%`, background: theme.accent }} /></div>
          <span className="topbar__count">{done}/{theme.lessons.length}</span>
        </div>
      </header>

      <div className="stage">
        <Connectors from={{ x: 50, y: 50 }} to={nodes.map((n) => ({ x: n.x, y: n.y, color: theme.accent }))} />

        <MindNode
          x={50} y={50} accent={theme.accent} size="xl"
          label={<span className="tnum">{theme.num}</span>}
          tip={theme.subtitle || themeShort(theme)}
          progress={done / theme.lessons.length}
          onClick={(e) => zoomTo('/', 'out', e)}
        />

        {nodes.map((n, i) => (
          <MindNode
            key={n.l.id}
            x={n.x} y={n.y} accent={theme.accent}
            size={theme.lessons.length > 8 ? 'sm' : 'md'} delay={0.04 + i * 0.04}
            label={<span className="lnum">{n.l.id}</span>}
            caption={short(n.l.title)}
            tip={n.l.title}
            badge={n.l.badge}
            done={isDone(n.l.id)}
            progress={isSeen(n.l.id) ? 0.5 : 0}
            onClick={(e) => zoomTo(`/lekce/${n.l.id}`, 'in', e)}
          />
        ))}
      </div>
    </ZoomPage>
  )
}
