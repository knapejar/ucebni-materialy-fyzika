import { useEffect, useState } from 'react'
import { useParams, useSearchParams, Navigate } from 'react-router-dom'
import { ZoomPage, useZoom } from '../../lib/nav'
import { getLesson, nextLesson, type Lesson } from '../../data/course'
import { useProgress, markSeen } from '../../lib/progress'
import { focusConcept } from '../../lib/focus'
import { lessonBodies } from '../../content/lessons'
import { ExamGoals, Callout } from './primitives'
import { LessonErrorBoundary } from './ErrorBoundary'

export default function LessonView() {
  const { id = '' } = useParams()
  const [sp] = useSearchParams()
  const focus = sp.get('focus')
  const { zoomTo } = useZoom()
  const { isDone, toggleDone } = useProgress()
  const found = getLesson(id)

  // Těžký obsah lekce (KaTeX, SVG, animace) mountujeme až PO zoom přechodu,
  // aby synchronní render neblokoval animaci (jinak se přechod „zasekne").
  const [bodyReady, setBodyReady] = useState(false)
  useEffect(() => {
    setBodyReady(false)
    const t = window.setTimeout(() => setBodyReady(true), 380)
    return () => window.clearTimeout(t)
  }, [id])

  useEffect(() => {
    if (found) markSeen(id)
    const el = document.querySelector('.zoom-page--scroll')
    if (el) el.scrollTop = 0
  }, [id, found])

  // Proklik pojmu: po načtení lekce odscrolluj k pojmu a zvýrazni ho.
  useEffect(() => {
    if (found && focus) focusConcept(focus, 420)
  }, [id, focus, found])

  if (!found) return <Navigate to="/" replace />
  const { lesson, theme } = found
  const Body = lessonBodies[lesson.id]
  const themeNum = theme.num
  const next = nextLesson(lesson.id)
  const accent = theme.accent

  return (
    <ZoomPage scroll>
      <div className="lesson" style={{ ['--accent' as string]: accent }}>
        <header className="lesson__bar">
          <button className="backbtn" onClick={(e) => zoomTo(`/tema/${themeNum}`, 'out', e)}>
            ← {theme.title.replace(/\s*\(.*\)/, '')}
          </button>
          {!theme.tools && (
            <button
              className={`donebtn ${isDone(lesson.id) ? 'is-done' : ''}`}
              onClick={() => toggleDone(lesson.id)}
            >
              {isDone(lesson.id) ? '✓ Hotovo' : 'Označit jako hotové'}
            </button>
          )}
        </header>

        <article className="lesson__body">
          <div className="lesson__eyebrow">
            <span className="lesson__id" style={{ background: accent }}>{lesson.id}</span>
            <span className="lesson__theme">{theme.title.replace(/\s*\(.*\)/, '')}</span>
            {lesson.badge && (
              <span className={`pill ${lesson.badge === 'MUST-HAVE' ? 'pill--must' : 'pill--extra'}`}>
                {lesson.badge}
              </span>
            )}
          </div>

          <h1 className="lesson__title">{lesson.title}</h1>

          <div className="lesson__meta">
            {lesson.minutes && <span>⏱ ~{lesson.minutes} min</span>}
            {lesson.questions && <span>❓ {lesson.questions} otázek</span>}
            {lesson.prereq.length > 0 && (
              <span className="lesson__prereq">
                Navazuje na:{' '}
                {lesson.prereq.map((p) => (
                  <a key={p} href={`#/lekce/${p}`} className="chip" onClick={(e) => { e.preventDefault(); zoomTo(`/lekce/${p}`, 'none', e) }}>
                    {p}
                  </a>
                ))}
              </span>
            )}
          </div>

          {Body ? (
            <div className="lesson__content">
              <LessonErrorBoundary>
                {bodyReady ? <Body /> : <div className="lesson__skeleton" aria-hidden />}
              </LessonErrorBoundary>
            </div>
          ) : (
            <Placeholder lesson={lesson} />
          )}

          <div className="lesson__nav">
            {next ? (
              <a
                className="nextlesson"
                href={`#/lekce/${next.id}`}
                onClick={(e) => { e.preventDefault(); zoomTo(`/lekce/${next.id}`, 'none', e) }}
              >
                <span className="nextlesson__txt">
                  <span className="nextlesson__eyebrow">Další lekce</span>
                  <span className="nextlesson__name"><b>{next.id}</b> · {next.title}</span>
                </span>
                <span className="nextlesson__arrow" aria-hidden>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M4 12h13M12 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ) : (
              <a
                className="nextlesson nextlesson--end"
                href="#/"
                onClick={(e) => { e.preventDefault(); zoomTo('/', 'out', e) }}
              >
                <span className="nextlesson__txt">
                  <span className="nextlesson__eyebrow">🎉 Tohle byla poslední lekce</span>
                  <span className="nextlesson__name">Zpět na mapu fyziky</span>
                </span>
                <span className="nextlesson__arrow" aria-hidden>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M3 11l9-7 9 7M5 10v9h14v-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            )}
          </div>

          <div className="lesson__footer">
            <button className="backbtn" onClick={(e) => zoomTo(`/tema/${themeNum}`, 'out', e)}>
              ← zpět na mapu tématu
            </button>
            {!theme.tools && (
              <button
                className={`donebtn ${isDone(lesson.id) ? 'is-done' : ''}`}
                onClick={() => toggleDone(lesson.id)}
              >
                {isDone(lesson.id) ? '✓ Hotovo' : 'Označit jako hotové'}
              </button>
            )}
          </div>
        </article>
      </div>
    </ZoomPage>
  )
}

/** Zobrazení nehotové lekce — pořád užitečné: shrnutí, cíle a chytáky z osnovy. */
function Placeholder({ lesson }: { lesson: Lesson }) {
  return (
    <div className="lesson__content">
      <Callout kind="info" title="Plný výklad se připravuje">
        Tahle lekce zatím nemá hotový interaktivní výklad — doplní ho generátor lekcí. Níže je ale
        osnova z plánu učiva, ať víš, co tě čeká a co musíš umět.
      </Callout>

      {lesson.obsah && (
        <section className="lsection">
          <h2 className="lsection__title">O čem to je</h2>
          <p>{lesson.obsah}</p>
        </section>
      )}

      {lesson.goals.length > 0 && <ExamGoals lessonId={lesson.id} goals={lesson.goals} />}

      {lesson.chytaky.length > 0 && (
        <Callout kind="chytak" title="Chytáky / časté chyby">
          <ul>
            {lesson.chytaky.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Callout>
      )}

      {lesson.sources.length > 0 && (
        <p className="lesson__sources">
          Zdroje: {lesson.sources.map((s) => <code key={s}>{s}</code>)}
        </p>
      )}
    </div>
  )
}
