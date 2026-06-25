import { Section, M, MB, Term, Concept, Figure, StepScene, ALine, ARect, AText, AGroup, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.9'

/* Nové pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání).
   Pozn.: 'polarizace-svetla' je už v registru concepts.ts, proto ho tu neduplikujeme. */
export const provides = {
  'opticka-aktivita': {
    lesson: '3.9',
    label: 'optická aktivita',
    short: 'Látka stáčí rovinu polarizace procházejícího světla (chirální molekuly).',
  },
  'chiralita': {
    lesson: '3.9',
    label: 'chiralita',
    short: 'Molekula se nedá ztotožnit se svým zrcadlovým obrazem (jako levá a pravá ruka).',
  },
}

const ACCENT = '#a78bfa'   // akcent tématu (fialová)
const TXT = '#e8ecf8'      // světlý text/tahy
const DIM = '#9aa6c4'      // ztlumené popisky
const RAY = '#7dd3fc'      // paprsek světla (světle modrá)
const BLOCK = '#fb7185'    // „zablokováno" (červená)
const OK = '#34d399'       // „prošlo" (zelená)

/* Šipka pro SVG. */
function Defs({ color = ACCENT, name = 'ar' }: { color?: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Krátká, ale oblíbená zkoušková látka: stačí umět <Term>rozlišit polarizované a nepolarizované
        světlo</Term>, vědět, <Term>jak vzniká</Term> (filtrem) a co je <Term>optická aktivita</Term>.
        A hlavně jeden chyták: polarizace jde <b>jen u příčného vlnění</b> — proto světlo ano, zvuk ne.
      </p>

      <Section title="Polarizované × nepolarizované — o co jde">
        <p>
          Světlo je <b>příčné</b> elektromagnetické <Concept id="vlneni">vlnění</Concept>: vektor{' '}
          <Concept id="intenzita-pole">intenzity elektrického pole</Concept>{' '}
          <M>{'\\vec E'}</M> kmitá <b>kolmo</b> na směr šíření. Otázka je, <i>v jakých rovinách</i> ty
          kmity probíhají.
        </p>
        <ul>
          <li>
            <Term>Nepolarizované světlo</Term> (běžné — Slunce, žárovka): jednotlivé vlny kmitají{' '}
            <b>v náhodně otočených rovinách</b>. Roviny jsou rozházené do všech směrů kolem paprsku.
          </li>
          <li>
            <Term id="polarizace-svetla">Lineárně polarizované světlo</Term>: <M>{'\\vec E'}</M> kmitá <b>jen v jedné rovině</b>.
            Tahle rovina se jmenuje <Term>rovina polarizace</Term>.
          </li>
        </ul>

        <Figure caption="Pohled zepředu do paprsku (zorným směrem k tobě). Vlevo náhodně otočené roviny kmitů = nepolarizované; vpravo jediný směr = lineárně polarizované.">
          <svg viewBox="0 0 360 150" className="svg-fig">
            <Defs />
            {/* nepolarizované: hvězdice kmitů */}
            <circle cx="95" cy="75" r="48" fill="none" stroke={DIM} strokeWidth="1" strokeDasharray="3 4" />
            {[0, 30, 60, 90, 120, 150].map((a, k) => {
              const r = (a * Math.PI) / 180
              const dx = Math.cos(r) * 42
              const dy = Math.sin(r) * 42
              return <line key={k} x1={95 - dx} y1={75 - dy} x2={95 + dx} y2={75 + dy} stroke={RAY} strokeWidth="2" />
            })}
            <text x="95" y="138" fill={TXT} fontSize="13" textAnchor="middle">nepolarizované</text>

            {/* polarizované: jen jeden směr */}
            <circle cx="265" cy="75" r="48" fill="none" stroke={DIM} strokeWidth="1" strokeDasharray="3 4" />
            <line x1="265" y1="33" x2="265" y2="117" stroke={ACCENT} strokeWidth="4" markerEnd="url(#ar)" markerStart="url(#ar)" />
            <text x="265" y="138" fill={TXT} fontSize="13" textAnchor="middle">lineárně polarizované</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Jak vzniká polarizované světlo — polarizační filtr">
        <p>
          Nejnázornější způsob je <Term>polarizační filtr</Term> (polarizátor). Funguje jako mřížka
          štěrbin: propustí jen tu složku kmitů <M>{'\\vec E'}</M>, která je <b>rovnoběžná s jeho
          propustnou osou</b>, zbytek pohltí. Z neuspořádaného světla tak udělá uspořádané —
          lineárně polarizované. Klikej <b>Další →</b>:
        </p>

        <StepScene
          title="Dva filtry: jak poznáš, že světlo je polarizované"
          viewBox="0 0 440 200"
          captions={[
            <>Do filtru přichází <b>nepolarizované</b> světlo — kmity ve všech rovinách.</>,
            <>Za prvním filtrem (svislá osa) projde jen <b>svislá složka</b>. Vzniká <Term>lineárně polarizované</Term> světlo.</>,
            <>Druhý filtr se <b>stejnou</b> osou (svislou) světlo <b>propustí</b> — projde skoro celé.</>,
            <>Otoč druhý filtr o <M>{'90^\\circ'}</M> (vodorovná osa) — svislé kmity neprojdou, <b>světlo zhasne</b>. <i>Tím se polarizace dokazuje.</i></>,
          ]}
        >
          {/* markery šipek (3 barvy) */}
          <defs>
            <marker id="p-ray" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={RAY} /></marker>
            <marker id="p-ok" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={OK} /></marker>
          </defs>

          {/* ── ZDROJ: nepolarizovaný paprsek + hvězdice kmitů (stálý) ── */}
          <ALine x1={8} y1={104} x2={92} y2={104} stroke={RAY} strokeWidth={3} markerEnd="url(#p-ray)" />
          {[20, 70, 110, 160].map((a, k) => {
            const r = (a * Math.PI) / 180
            return (
              <ALine
                key={k}
                x1={55 - Math.cos(r) * 16}
                y1={104 - Math.sin(r) * 16}
                x2={55 + Math.cos(r) * 16}
                y2={104 + Math.sin(r) * 16}
                stroke={RAY}
                strokeWidth={2}
              />
            )
          })}
          <AText x={55} y={48} fill={TXT} fontSize="13" textAnchor="middle">nepolarizované</AText>

          {/* ── FILTR 1 (svislá osa) — objeví se od kroku 1, zůstává ── */}
          <AGroup opacity={[0, 1, 1, 1]}>
            <rect x={132} y={62} width={56} height={84} rx="6" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            {[1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1={132 + i * 9.3} y1={68} x2={132 + i * 9.3} y2={140} stroke={ACCENT} strokeWidth="2" />
            ))}
          </AGroup>
          <AText x={160} y={166} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 1, 1, 1]}>osa ↕</AText>

          {/* ── POLARIZOVANÝ PAPRSEK mezi filtry (zelený) — od kroku 1 ──
               krok 1: vyteče z filtru1 doprava a má vlastní šipku (žádný 2. filtr)
               krok 2-3: končí u filtru 2 (x=307) */}
          <ALine x1={188} y1={104} x2={[386, 386, 307, 307]} y2={104} stroke={OK} strokeWidth={3} opacity={[0, 1, 1, 1]} />
          {/* svislá „čárka" = kmit E (jen mezi filtry) */}
          <ALine x1={245} y1={84} x2={245} y2={124} stroke={OK} strokeWidth={3} opacity={[0, 1, 1, 1]} />
          {/* šipka konce paprsku po 1. filtru (jen krok 1, kdy 2. filtr není) */}
          <ALine x1={386} y1={104} x2={414} y2={104} stroke={OK} strokeWidth={3} markerEnd="url(#p-ok)" opacity={[0, 1, 0, 0]} />
          <AText x={300} y={56} fill={OK} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>polarizované ↕</AText>

          {/* ── FILTR 2 — objeví se od kroku 2; štěrbiny se v kroku 3 otočí ──
               barva rámečku: zelená (propustí) v kroku 2, červená (zablokuje) v kroku 3 */}
          <ARect x={307} y={62} width={56} height={84} rx="6" fill="none" stroke={[ACCENT, ACCENT, OK, BLOCK]} strokeWidth={2.5} opacity={[0, 0, 1, 1]} />
          {/* svislé štěrbiny 2. filtru (krok 2, propustný) */}
          {[1, 2, 3, 4, 5].map((i) => (
            <ALine
              key={`s2v-${i}`}
              x1={307 + i * 9.3}
              y1={68}
              x2={307 + i * 9.3}
              y2={140}
              stroke={OK}
              strokeWidth={2}
              opacity={[0, 0, 1, 0]}
            />
          ))}
          {/* vodorovné štěrbiny 2. filtru (krok 3, zablokovaný) */}
          {[1, 2, 3, 4, 5].map((i) => (
            <ALine
              key={`s2h-${i}`}
              x1={313}
              y1={62 + i * 14}
              x2={357}
              y2={62 + i * 14}
              stroke={BLOCK}
              strokeWidth={2}
              opacity={[0, 0, 0, 1]}
            />
          ))}
          {/* popisek osy 2. filtru — „osa ↕" (krok 2) překryto „osa ↔" (krok 3) */}
          <AText x={335} y={166} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 0, 1, 0]}>osa ↕</AText>
          <AText x={335} y={166} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 0, 0, 1]}>osa ↔</AText>

          {/* ── VÝSTUP za 2. filtrem ── */}
          {/* krok 2: prošlo (zelená šipka + popisek) */}
          <ALine x1={363} y1={104} x2={428} y2={104} stroke={OK} strokeWidth={3} markerEnd="url(#p-ok)" opacity={[0, 0, 1, 0]} />
          <AText x={398} y={62} fill={OK} fontSize="14" textAnchor="middle" opacity={[0, 0, 1, 0]}>projde ✓</AText>
          {/* krok 3: zhasne (červená přerušovaná + křížek) */}
          <ALine x1={363} y1={104} x2={418} y2={104} stroke={BLOCK} strokeWidth={3} strokeDasharray="5 5" opacity={[0, 0, 0, 1]} />
          <ALine x1={384} y1={90} x2={414} y2={118} stroke={BLOCK} strokeWidth={3} opacity={[0, 0, 0, 1]} />
          <ALine x1={414} y1={90} x2={384} y2={118} stroke={BLOCK} strokeWidth={3} opacity={[0, 0, 0, 1]} />
          <AText x={399} y={62} fill={BLOCK} fontSize="14" textAnchor="middle" opacity={[0, 0, 0, 1]}>zhasne ✗</AText>
        </StepScene>
        <p style={{ color: DIM }}>
          (Polarizované světlo umí vzniknout i jinak: <Term>odrazem pod vhodným úhlem</Term> (Brewsterův
          úhel), <Term>dvojlomem</Term> v anizotropním krystalu nebo <Term>dichroismem</Term>. K vysvětlení
          principu ale stačí filtr.)
        </p>
      </Section>

      <Section title="Optická aktivita a chiralita">
        <p>
          <Term id="opticka-aktivita">Optická aktivita</Term> je schopnost některých látek <b>stáčet rovinu polarizace</b>
          procházejícího lineárně polarizovaného světla. Když mezi dva zkřížené filtry (které jinak
          zhasnou) vložíš opticky aktivní roztok, světlo se zase trochu rozsvítí — protože látka rovinu
          pootočila.
        </p>
        <p>
          Příčinou je <Term>asymetrie molekul</Term> — molekula je <Term id="chiralita">chirální</Term>: nedá se
          ztotožnit se svým zrcadlovým obrazem (jako <b>levá a pravá ruka</b>). U organických látek to
          typicky způsobuje <Term>chirální (asymetrický) uhlík</Term> — atom uhlíku se čtyřmi <b>různými</b>
          skupinami. Vznikají tak dvojice <Term>stereoizomerů</Term>, které stáčejí rovinu opačným směrem
          (<b>pravotočivé</b> × <b>levotočivé</b>).
        </p>

        <Figure caption="Chiralita: dvě molekuly se stejnými díly, ale uspořádané zrcadlově — jako levá a pravá ruka. Nedají se na sebe položit. Jedna stáčí rovinu doprava, druhá doleva.">
          <svg viewBox="0 0 360 170" className="svg-fig">
            {/* zrcadlo */}
            <line x1="180" y1="15" x2="180" y2="155" stroke={DIM} strokeWidth="1.5" strokeDasharray="4 5" />
            <text x="180" y="168" fill={DIM} fontSize="11" textAnchor="middle">zrcadlo</text>

            {/* levá molekula: centrální C se 4 skupinami */}
            <g>
              <circle cx="95" cy="85" r="14" fill={ACCENT} />
              <text x="95" y="90" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">C</text>
              <line x1="95" y1="85" x2="95" y2="35" stroke={TXT} strokeWidth="2" />
              <circle cx="95" cy="30" r="9" fill={OK} />
              <line x1="95" y1="85" x2="55" y2="115" stroke={TXT} strokeWidth="2" />
              <circle cx="50" cy="120" r="9" fill={RAY} />
              <line x1="95" y1="85" x2="135" y2="115" stroke={TXT} strokeWidth="2" />
              <circle cx="140" cy="120" r="9" fill={BLOCK} />
              <line x1="95" y1="85" x2="70" y2="70" stroke={TXT} strokeWidth="2" />
              <circle cx="64" cy="66" r="7" fill="#fbbf24" />
              <text x="95" y="150" fill={TXT} fontSize="12" textAnchor="middle">levotočivá</text>
            </g>

            {/* pravá molekula: zrcadlový obraz (RAY a BLOCK prohozené) */}
            <g>
              <circle cx="265" cy="85" r="14" fill={ACCENT} />
              <text x="265" y="90" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">C</text>
              <line x1="265" y1="85" x2="265" y2="35" stroke={TXT} strokeWidth="2" />
              <circle cx="265" cy="30" r="9" fill={OK} />
              <line x1="265" y1="85" x2="305" y2="115" stroke={TXT} strokeWidth="2" />
              <circle cx="310" cy="120" r="9" fill={RAY} />
              <line x1="265" y1="85" x2="225" y2="115" stroke={TXT} strokeWidth="2" />
              <circle cx="220" cy="120" r="9" fill={BLOCK} />
              <line x1="265" y1="85" x2="290" y2="70" stroke={TXT} strokeWidth="2" />
              <circle cx="296" cy="66" r="7" fill="#fbbf24" />
              <text x="265" y="150" fill={TXT} fontSize="12" textAnchor="middle">pravotočivá</text>
            </g>
          </svg>
        </Figure>

        <p>
          Pro monochromatické světlo platí jednoduchý vztah pro úhel stočení{' '}
          <M>{'\\Delta\\varphi'}</M>:
        </p>
        <MB>{'\\Delta\\varphi = \\alpha\\,C\\,L'}</MB>
        <p style={{ color: DIM }}>
          kde <M>{'\\alpha'}</M> je měrná stáčivost látky, <M>{'C'}</M> koncentrace roztoku a{' '}
          <M>{'L'}</M> délka dráhy světla v látce. (Tohle se přesně memorovat nemusí, ale je dobré
          vědět, že stočení roste s koncentrací i s délkou cesty — proto se tím měří třeba cukernatost.)
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Polarizace je možná jen u příčného vlnění.</b> Proto <b>světlo polarizovat lze</b>{' '}
            (kmity <M>{'\\vec E'}</M> jsou kolmé na šíření), ale <b>zvuk ne</b> — zvuk je <i>podélné</i>{' '}
            vlnění (kmity ve směru šíření, žádná „rovina" navíc). Klasická chytácká otázka.
          </li>
          <li>
            <b>Polarizované = výchylky v jedné rovině; nepolarizované = náhodně.</b> Nepleť si to:
            nepolarizované neznamená „bez kmitů", ale „kmity ve všech možných rovinách".
          </li>
          <li>
            <b>Optická aktivita ≠ polarizace.</b> Polarizace je <i>výběr</i> jedné roviny; optická
            aktivita je <i>stáčení</i> té roviny opticky aktivní (chirální) látkou.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Rozlišit polarizované a nepolarizované světlo (kmity v jedné rovině × náhodně).',
          'Vysvětlit, jak vzniká lineárně polarizované světlo polarizačním filtrem.',
          'Popsat pokus se dvěma filtry (zkřížené → zhasne) jako důkaz polarizace.',
          'Vysvětlit optickou aktivitu a její příčinu — chiralitu / asymetrický uhlík.',
          'Vědět, že polarizace jde jen u příčného vlnění (světlo ano, zvuk ne).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaký je rozdíl mezi polarizovaným a nepolarizovaným světlem?',
            a: (
              <>
                U <b>lineárně polarizovaného</b> světla kmitá vektor <M>{'\\vec E'}</M> jen v <b>jedné
                rovině</b> (rovina polarizace). U <b>nepolarizovaného</b> kmitají jednotlivé vlny v{' '}
                <b>náhodně otočených rovinách</b>.
              </>
            ),
          },
          {
            q: 'Proč lze polarizovat světlo, ale ne zvuk?',
            a: (
              <>
                Polarizace je možná <b>jen u příčného vlnění</b>. Světlo je příčné (kmity <M>{'\\vec E'}</M>{' '}
                jsou kolmé na směr šíření, dá se vybrat rovina). Zvuk je <b>podélné</b> vlnění (kmity ve
                směru šíření), takže žádnou rovinu polarizace nemá.
              </>
            ),
          },
          {
            q: 'Jak filtrem vznikne polarizované světlo a jak polarizaci experimentálně dokážeš?',
            a: (
              <>
                Filtr propustí jen složku <M>{'\\vec E'}</M> rovnoběžnou s jeho propustnou osou → vznikne
                lineárně polarizované světlo. Důkaz: za první filtr dáš <b>druhý</b> a otáčíš jím — při{' '}
                <b>zkřížených</b> osách (<M>{'90^\\circ'}</M>) světlo <b>zhasne</b>.
              </>
            ),
          },
          {
            q: 'Co je optická aktivita a čím je způsobená?',
            a: (
              <>
                <b>Optická aktivita</b> = látka <b>stáčí rovinu polarizace</b> procházejícího světla.
                Příčinou je <b>asymetrie (chiralita) molekul</b> — molekula se neztotožní se svým
                zrcadlovým obrazem; u organických látek typicky <b>chirální (asymetrický) uhlík</b> a jeho
                stereoizomery (pravo- × levotočivé).
              </>
            ),
          },
        ]}
      />
    </>
  )
}
