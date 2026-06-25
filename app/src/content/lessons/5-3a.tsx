import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.3a'

/* Pojmy, které tahle lekce poprvé vykládá — pro pozdější proklikávání. */
export const provides = {
  'radioaktivita': { lesson: '5.3a', label: 'radioaktivita', short: 'Samovolný přechod nestabilního jádra do stabilnějšího stavu; nezávisí na teplotě, tlaku ani vazbě.' },
  'aktivita': { lesson: '5.3a', label: 'aktivita vzorku', short: 'A = λN — počet rozpadů za sekundu [Bq]; závisí na množství vzorku.' },
  'rozpadova-konstanta': { lesson: '5.3a', label: 'rozpadová konstanta', short: 'λ — pravděpodobnost rozpadu jednoho jádra za jednotku času; na množství nezávisí.' },
  'stredni-doba-zivota': { lesson: '5.3a', label: 'střední doba života', short: 'τ = 1/λ — průměrná doba života jádra.' },
  'polocas-rozpadu': { lesson: '5.3a', label: 'poločas rozpadu', short: 'T₁/₂ = τ·ln 2 — čas, za který se rozpadne polovina jader.' },
}

/* Šipka pro SVG (definice markeru). */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACCENT = '#34d399'
const TXT = '#e8ecf8'
const AXIS = '#5a678c'
const DECAY = '#fb7185'
const HALF = '#fbbf24'
const STABLE = '#60a5fa'
const EMPTY = '#161d31' // výplň rozpadlého jádra (téměř barva pozadí → vypadá „prázdně")

/* ——— Animovaná scéna „půlení vzorku" ———
 * Levá půlka: mřížka 32 jader (8×4). V kroku s zbývá REMAIN[s] vyplněných;
 * každé jádro plynule zhasne (zelená → prázdné kolečko) přes pole hodnot.
 * Pravá půlka: exponenciální křivka N(t) s poločasovými značkami, které
 * se objevují postupně (opacity po krocích). */
const REMAIN = [32, 16, 8, 4] // počet nerozpadlých jader v krocích 0–3
const NCOLS = 8
const NROWS = 4
const NX0 = 26
const NY0 = 26
const NDX = 28
const NDY = 27

/* Pro každé jádro vrátí pole hodnot dané vlastnosti přes všechny kroky. */
function nucleusArr<T>(i: number, alive: T, dead: T): T[] {
  return REMAIN.map((rem) => (i < rem ? alive : dead))
}

// geometrie křivky N(t) = N0·2^(−t/T) v pravé části scény
const CX0 = 312 // počátek os (x)
const CBASE = 156 // osa t (y)
const CTOP = 22 // vrchol křivky (N0)
const CT = 50 // poločas v px po ose t
const CH = CBASE - CTOP // výška N0
const yAt = (t: number) => CBASE - CH * Math.pow(2, -t / CT)
const curvePts = (() => {
  const pts: string[] = []
  for (let t = 0; t <= 200; t += 4) pts.push(`${CX0 + t},${yAt(t)}`)
  return pts.join(' ')
})()

export default function Lesson_5_3a() {
  return (
    <>
      <p className="lead">
        Tahle lekce je čistě o tom, abys u zkoušky nepopletla čtyři podobně znějící veličiny:{' '}
        <Term>aktivita</Term>, <Term>λ</Term>, <Term>τ</Term> a <Term>poločas</Term>. Když budeš
        vědět, co která znamená a jak spolu souvisí (a hlavně co na čem závisí), máš bod jistý —
        právě tady totiž zkoušející rád nachytá.
      </p>

      <Section title="Co je radioaktivita (a na čem vůbec NEzávisí)">
        <p>
          <Term id="radioaktivita">Radioaktivita</Term> je <Term>samovolný přechod nestabilního jádra do stabilnějšího
          stavu</Term> — jádro se přemění (vyzáří částici nebo <Concept id="foton">foton</Concept>) a tím se zbaví přebytečné
          energie. Rozlišujeme:
        </p>
        <ul>
          <li><b>přirozenou</b> — děje se sama u nestabilních nuklidů v přírodě;</li>
          <li><b>umělou</b> — vyvoláme ji uměle, např. ostřelováním jader α-částicemi.</li>
        </ul>
        <p>
          Klíčové (a oblíbená zkušební otázka): <b>jestli a jak rychle se jádro rozpadne, neurčuje
          okolí, ale jen samo jádro.</b> Radioaktivita proto:
        </p>
        <ul>
          <li><b>NEzávisí</b> na <Term>teplotě, tlaku ani chemické vazbě</Term> (je úplně jedno, jestli je atom v krystalu, v plynu nebo v molekule — jádro je „schované" hluboko a okolní chemie se ho netýká);</li>
          <li><b>závisí</b> jen na <Term>kombinaci <Concept id="protonove-cislo">protonového čísla Z</Concept> a neutronového čísla N</Term> — nestabilní kombinace se rozpadá, stabilní ne.</li>
        </ul>
        <Callout kind="tip" title="Jak si to představit">
          Chemie hýbe s elektrony v obalu. Rozpad se ale děje v <i>jádru</i>, kam elektronový obal
          „nedosáhne". Proto ho nezměníš ani zahřátím, ani stlačením, ani tím, do jaké sloučeniny
          atom zapojíš.
        </Callout>
      </Section>

      <Section title="Rozpad je náhoda — proto statistika">
        <p>
          U jednoho konkrétního jádra <b>nevíš</b>, kdy se rozpadne — je to náhodný (statistický)
          děj. Ale u velkého počtu jader už platí pěkná pravidelnost. Zavádíme:
        </p>
        <p>
          <Term id="rozpadova-konstanta">Rozpadová konstanta</Term> <M>{'\\lambda'}</M> = pravděpodobnost, že se{' '}
          <i>jedno</i> jádro rozpadne za jednotku času. Je to „vnitřní vlastnost" daného nuklidu —{' '}
          <b>na množství vzorku nezávisí</b> (jednotka <M>{'\\mathrm{s^{-1}}'}</M>).
        </p>
        <p>
          Z <M>{'\\lambda'}</M> hned plynou další dvě veličiny:
        </p>
        <MB>{'\\tau = \\frac{1}{\\lambda} \\qquad\\qquad T_{1/2} = \\tau\\,\\ln 2 = \\frac{\\ln 2}{\\lambda}'}</MB>
        <ul>
          <li><Term id="stredni-doba-zivota">Střední doba života</Term> <M>{'\\tau = 1/\\lambda'}</M> — průměrná doba, jak dlouho jádro „žije", než se rozpadne.</li>
          <li><Term id="polocas-rozpadu">Poločas rozpadu</Term> <M>{'T_{1/2}'}</M> — čas, za který se rozpadne <b>polovina</b> jader ve vzorku. Pozor: <b>není</b> to <M>{'\\tau/2'}</M>, ale <M>{'\\tau\\cdot\\ln 2 \\approx 0{,}693\\,\\tau'}</M>.</li>
        </ul>
        <Figure caption="Tři veličiny, jeden zdroj: všechny vyrostou z rozpadové konstanty λ.">
          <svg viewBox="0 0 360 130" className="svg-fig">
            <Defs id="ar53" color={ACCENT} />
            <rect x="10" y="48" width="86" height="34" rx="8" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            <text x="53" y="70" fill={ACCENT} fontSize="18" textAnchor="middle" fontWeight="700">λ</text>
            <line x1="98" y1="50" x2="148" y2="24" stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#ar53)" />
            <line x1="98" y1="78" x2="148" y2="104" stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#ar53)" />
            <text x="220" y="26" fill={TXT} fontSize="14" textAnchor="middle">τ = 1/λ</text>
            <text x="225" y="108" fill={TXT} fontSize="14" textAnchor="middle">T₁ᐟ₂ = τ·ln 2</text>
            <text x="305" y="70" fill={HALF} fontSize="13" textAnchor="middle">≈ 0,69·τ</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Aktivita — kolik rozpadů za sekundu">
        <p>
          <Term id="aktivita">Aktivita</Term> <M>{'A'}</M> vzorku je <b>počet jader, která se rozpadnou za jednotku
          času</b>. Měří se v <Term>becquerelech</Term> <M>{'[\\,\\mathrm{Bq}\\,]'}</M> (1 Bq = jeden
          rozpad za sekundu; starší jednotka je curie, Ci). Platí:
        </p>
        <MB>{'A = \\lambda\\,N'}</MB>
        <p>
          kde <M>{'N'}</M> je počet (zatím nerozpadlých) jader ve vzorku. A právě tady je ten největší
          chyták: <b>aktivita závisí na množství</b> (na <M>{'N'}</M>) — dvojnásobek vzorku má
          dvojnásobnou aktivitu. Naproti tomu <M>{'\\lambda'}</M> (a tím i <M>{'\\tau'}</M> a{' '}
          <M>{'T_{1/2}'}</M>) na množství <b>nezávisí</b> vůbec.
        </p>
        <p>
          Jak ubývá jader a klesá aktivita v čase, popisují <b>rozpadové zákony</b> (exponenciála):
        </p>
        <MB>{'N(t) = N_0\\,e^{-\\lambda t} \\qquad\\qquad A(t) = A_0\\,e^{-\\lambda t}'}</MB>
        <p>
          Obě klesají stejně rychle (aktivita je jen <M>{'\\lambda'}</M>-násobek počtu jader). Za
          každý poločas <M>{'T_{1/2}'}</M> spadne hodnota na polovinu.
        </p>
      </Section>

      <Section title="Poločas názorně: půlení vzorku">
        <p>
          Nejlíp si poločas zapamatuješ jako „pořád na půl". Klikej <b>Další →</b> — vlevo ubývají
          jádra, vpravo se k tomu kreslí křivka <M>{'N(t)'}</M>:
        </p>
        <StepScene
          title="Co se stane za každý poločas T₁/₂"
          viewBox="0 0 580 210"
          captions={[
            <>Na začátku máme <M>{'N_0'}</M> nerozpadlých jader (zeleně). Aktivita je největší: <M>{'A_0=\\lambda N_0'}</M>.</>,
            <>Po jednom poločase je rozpadlá <b>polovina</b> jader. Zbývá <M>{'N_0/2'}</M> a aktivita klesla na polovinu.</>,
            <>Po druhém poločase je z poloviny zase polovina: zbývá <M>{'N_0/4'}</M>. <b>Pozor: za 2 poločasy NEzbude nula!</b></>,
            <>A tak dál — vždy se ubere polovina z toho, co zbylo: <M>{'N_0/8'}</M>. Křivka je <Term>exponenciála</Term> <M>{'N=N_0\\,2^{-t/T_{1/2}}'}</M>, nikdy nedosáhne přesné nuly.</>,
          ]}
        >
          {/* ——— LEVÁ ČÁST: mřížka jader, která postupně zhasínají ——— */}
          {Array.from({ length: NCOLS * NROWS }, (_, i) => {
            const c = i % NCOLS
            const r = Math.floor(i / NCOLS)
            return (
              <ACircle
                key={`n${i}`}
                cx={NX0 + c * NDX}
                cy={NY0 + r * NDY}
                r={9}
                fill={nucleusArr(i, ACCENT, EMPTY)}
                stroke={nucleusArr(i, ACCENT, AXIS)}
                strokeWidth={2}
                opacity={nucleusArr(i, 1, 0.75)}
              />
            )
          })}
          {/* popisek zbývajícího počtu jader (jeden text na krok, prolíná se) */}
          <AText x={130} y={170} fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="600" opacity={[1, 0, 0, 0]}>N = N₀</AText>
          <AText x={130} y={170} fill={HALF} fontSize="15" textAnchor="middle" fontWeight="600" opacity={[0, 1, 0, 0]}>N = N₀/2</AText>
          <AText x={130} y={170} fill={HALF} fontSize="15" textAnchor="middle" fontWeight="600" opacity={[0, 0, 1, 0]}>N = N₀/4</AText>
          <AText x={130} y={170} fill={STABLE} fontSize="15" textAnchor="middle" fontWeight="600" opacity={[0, 0, 0, 1]}>N = N₀/8</AText>

          {/* ——— PRAVÁ ČÁST: křivka N(t) ——— */}
          {/* osy */}
          <ALine x1={CX0} y1={CTOP - 6} x2={CX0} y2={CBASE} stroke={AXIS} strokeWidth={2} />
          <ALine x1={CX0} y1={CBASE} x2={566} y2={CBASE} stroke={AXIS} strokeWidth={2} />
          {/* osa N je popsaná hodnotou v t=0, tj. N₀ (na vrcholu křivky) */}
          <text x={CX0 - 8} y={yAt(0) + 4} fill={TXT} fontSize="13" textAnchor="end">N₀</text>
          <text x={564} y={CBASE + 17} fill={TXT} fontSize="13" textAnchor="end">t</text>
          {/* křivka (stejná ve všech krocích) */}
          <polyline points={curvePts} fill="none" stroke={ACCENT} strokeWidth={3} />

          {/* poločasové značky 1·T, 2·T, 3·T — objevují se postupně */}
          {([1, 2, 3] as const).map((k) => {
            const op = [0, 0, 0, 0].map((_, s) => (s >= k ? 1 : 0))
            const x = CX0 + k * CT
            const y = yAt(k * CT)
            return (
              <g key={`mk${k}`}>
                <ALine x1={x} y1={y} x2={x} y2={CBASE} stroke={HALF} strokeWidth={1.5} strokeDasharray="4 3" opacity={op} />
                <ALine x1={CX0} y1={y} x2={x} y2={y} stroke={HALF} strokeWidth={1.5} strokeDasharray="4 3" opacity={op} />
                <ACircle cx={x} cy={y} r={4} fill={HALF} opacity={op} />
                <AText x={x} y={CBASE + 17} fill={HALF} fontSize="11" textAnchor="middle" opacity={op}>{`${k}·T`}</AText>
                <AText x={CX0 - 8} y={y + 4} fill={HALF} fontSize="11" textAnchor="end" opacity={op}>{`N₀/${2 ** k}`}</AText>
              </g>
            )
          })}
        </StepScene>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Radioaktivita <b>nezávisí</b> na teplotě, tlaku ani chemické vazbě — záleží jen na{' '}
            <b>kombinaci Z a N</b>. (Když to někdo plete, je to skoro vždy past v testu.)
          </li>
          <li>
            <b>Aktivita</b> <M>{'A=\\lambda N'}</M> <b>závisí na množství</b> vzorku (na <M>{'N'}</M>).
            Ale <M>{'\\lambda'}</M>, <M>{'\\tau'}</M> i <M>{'T_{1/2}'}</M> na množství{' '}
            <b>nezávisí</b> — jsou dané jen druhem nuklidu.
          </li>
          <li>
            <b><M>{'T_{1/2}=\\tau\\cdot\\ln 2'}</M></b>, ne <M>{'\\tau/2'}</M>. Poločas je tedy{' '}
            <i>kratší</i> než střední doba života (<M>{'\\ln 2\\approx 0{,}69'}</M>).
          </li>
          <li>
            Za 2 poločasy nezbyde nula, ale čtvrtina; za 3 osmina. Nikdy přesná nula — pokles je{' '}
            exponenciální.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat radioaktivitu jako samovolný přechod jádra do stabilnějšího stavu a rozlišit přirozenou × umělou.',
          'Vyjmenovat, na čem radioaktivita NEzávisí (teplota, tlak, vazba) a na čem ano (kombinace Z a N).',
          'Rozlišit aktivitu A, λ, τ a T₁/₂ a vědět, co z nich závisí na množství vzorku (jen A).',
          'Napsat vztahy A = λN, τ = 1/λ, T₁/₂ = τ·ln 2 a zákon N(t) = N₀·e^(−λt).',
          'Vědět, že aktivita se měří v becquerelech [Bq] = počet rozpadů za sekundu.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Změní se rychlost radioaktivního rozpadu, když vzorek zahřeješ nebo stlačíš?',
            a: <>Ne. Radioaktivita <b>nezávisí</b> na teplotě, tlaku ani na chemické vazbě — záleží jen na <b>kombinaci protonového čísla Z a neutronového čísla N</b> v jádře.</>,
          },
          {
            q: <>Jaký je rozdíl mezi rozpadovou konstantou <M>{'\\lambda'}</M> a aktivitou <M>{'A'}</M>? Co z toho závisí na množství vzorku?</>,
            a: <><M>{'\\lambda'}</M> je pravděpodobnost rozpadu jednoho jádra za čas — na množství <b>nezávisí</b>. <M>{'A=\\lambda N'}</M> je počet rozpadů za sekundu (v <M>{'[\\mathrm{Bq}]'}</M>) — <b>závisí na množství</b> přes <M>{'N'}</M>.</>,
          },
          {
            q: <>Jak souvisí poločas rozpadu <M>{'T_{1/2}'}</M> se střední dobou života <M>{'\\tau'}</M>?</>,
            a: <><M>{'T_{1/2}=\\tau\\cdot\\ln 2\\approx 0{,}69\\,\\tau'}</M> (a zároveň <M>{'\\tau=1/\\lambda'}</M>). Poločas je tedy o něco <b>kratší</b> než střední doba života, ne polovina.</>,
          },
          {
            q: 'Kolik procent vzorku zbude po dvou poločasech rozpadu?',
            a: <>Čtvrtina (25 %). Za každý poločas ubude polovina toho, co zbylo: po 1·T₁/₂ je to 1/2, po 2·T₁/₂ je 1/4. Pokles je exponenciální, takže přesné nuly nikdy nedosáhne.</>,
          },
        ]}
      />
    </>
  )
}
