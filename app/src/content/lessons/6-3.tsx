import { Callout, ConceptLink } from '../../components/lesson/primitives'
import { concepts } from '../concepts'
// Vedlejší efekt: zaregistruje i pojmy, které zavádějí jednotlivé lekce
// (sloučí `provides` do `concepts`), aby rejstřík byl kompletní.
import '../lessons'

export const id = '6.3'

// Skupinové písmeno bez diakritiky (č → C, š → S…), ať se pojmy řadí pod běžná písmena.
function letterOf(s: string): string {
  const base = s.charAt(0).normalize('NFD')
  // odstranit kombinující diakritická znaménka (U+0300–U+036F)
  let out = ''
  for (const ch of base) {
    const code = ch.charCodeAt(0)
    if (code < 0x0300 || code > 0x036f) out += ch
  }
  return out.toUpperCase()
}

export default function Lesson_6_3() {
  // seřadit česky podle názvu pojmu
  const entries = Object.entries(concepts).sort((a, b) =>
    a[1].label.localeCompare(b[1].label, 'cs'),
  )

  // rozdělit do skupin podle počátečního písmene
  const groups: { letter: string; items: [string, (typeof concepts)[string]][] }[] = []
  for (const e of entries) {
    const L = letterOf(e[1].label)
    const last = groups[groups.length - 1]
    if (last && last.letter === L) last.items.push(e)
    else groups.push({ letter: L, items: [e] })
  }

  return (
    <>
      <p className="lead">
        Abecední seznam <b>všech {entries.length} pojmů</b> z učebnice. Klikni na pojem a otevře se ti{' '}
        <b>v nové kartě</b> přesně to místo lekce, kde je vyložený — tahle stránka ti přitom zůstane
        otevřená, takže se můžeš proklikat víc pojmů za sebou.
      </p>

      <Callout kind="tip" title="K čemu to je">
        Když u učení (nebo u zkoušky nanečisto) narazíš na pojem a nevíš ho z hlavy, najdeš ho tady a
        jedním klikem skočíš na vysvětlení. Šedý popisek za pojmem je rychlá připomínka.
      </Callout>

      <nav className="cindex__jump" aria-label="Skok na písmeno">
        {groups.map((g) => (
          <a key={g.letter} href={`#rej-${g.letter}`}>
            {g.letter}
          </a>
        ))}
      </nav>

      <div className="cindex">
        {groups.map((g) => (
          <section key={g.letter} className="cindex__group">
            <h2 className="cindex__letter" id={`rej-${g.letter}`}>
              {g.letter}
            </h2>
            <ul>
              {g.items.map(([cid, def]) => (
                <li key={cid} className="cindex__item">
                  <ConceptLink id={cid}>{def.label}</ConceptLink>
                  <span className="cindex__lesson">lekce {def.lesson}</span>
                  {def.short && <span className="cindex__desc">{def.short}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
