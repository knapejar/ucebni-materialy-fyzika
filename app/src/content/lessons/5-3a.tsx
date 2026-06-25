import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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

/* Mřížka jader: vyplněná = ještě nerozpadlá, prázdná = rozpadlá. */
function Nuclei({ remaining }: { remaining: number }) {
  const cells = []
  const cols = 8
  const rows = 4
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c
      const alive = i < remaining
      cells.push(
        <circle
          key={i}
          cx={28 + c * 30}
          cy={24 + r * 30}
          r="10"
          fill={alive ? ACCENT : 'none'}
          stroke={alive ? ACCENT : AXIS}
          strokeWidth="2"
          opacity={alive ? 1 : 0.55}
        />,
      )
    }
  }
  return <>{cells}</>
}

/* Křivka exponenciálního poklesu N(t) s vyznačením poločasů. */
function DecayCurve({ shown }: { shown: number }) {
  // body křivky N = N0 * 2^(-t/T), T = 60 px, N0 = 110 px výška
  const x0 = 50
  const y0 = 30
  const baseY = 170
  const T = 55
  const pts: string[] = []
  for (let t = 0; t <= 240; t += 4) {
    const x = x0 + t
    const y = baseY - (140 * Math.pow(2, -t / T))
    pts.push(`${x},${y}`)
  }
  const yAt = (t: number) => baseY - 140 * Math.pow(2, -t / T)
  return (
    <>
      {/* osy */}
      <line x1={x0} y1={y0} x2={x0} y2={baseY} stroke={AXIS} strokeWidth="2" />
      <line x1={x0} y1={baseY} x2="300" y2={baseY} stroke={AXIS} strokeWidth="2" />
      <text x={x0 - 8} y={y0 + 6} fill={TXT} fontSize="13" textAnchor="end">N</text>
      <text x="298" y={baseY + 18} fill={TXT} fontSize="13" textAnchor="end">t</text>

      {/* křivka */}
      <polyline points={pts.join(' ')} fill="none" stroke={ACCENT} strokeWidth="3" />

      {/* poločasy: čárkované značky do shown */}
      {[1, 2, 3].map((k) =>
        k <= shown ? (
          <g key={k}>
            <line x1={x0 + k * T} y1={yAt(k * T)} x2={x0 + k * T} y2={baseY} stroke={HALF} strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1={x0} y1={yAt(k * T)} x2={x0 + k * T} y2={yAt(k * T)} stroke={HALF} strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx={x0 + k * T} cy={yAt(k * T)} r="4" fill={HALF} />
            <text x={x0 + k * T} y={baseY + 16} fill={HALF} fontSize="11" textAnchor="middle">{k}·T</text>
            <text x={x0 - 6} y={yAt(k * T) + 4} fill={HALF} fontSize="11" textAnchor="end">{`N₀/${2 ** k}`}</text>
          </g>
        ) : null,
      )}
      {/* N0 popisek */}
      <text x={x0 - 6} y={yAt(0) + 4} fill={TXT} fontSize="11" textAnchor="end">N₀</text>
    </>
  )
}

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
        <StepFigure
          title="Co se stane za každý poločas T₁/₂"
          steps={[
            {
              label: 't = 0',
              caption: <>Na začátku máme <M>{'N_0'}</M> nerozpadlých jader (zeleně). Aktivita je největší: <M>{'A_0=\\lambda N_0'}</M>.</>,
              content: (
                <svg viewBox="0 0 560 200" className="svg-fig">
                  <Nuclei remaining={32} />
                  <text x="128" y="195" fill={ACCENT} fontSize="14" textAnchor="middle">N = N₀ (vše)</text>
                  <DecayCurve shown={0} />
                </svg>
              ),
            },
            {
              label: 'za 1·T₁/₂',
              caption: <>Po jednom poločase je rozpadlá <b>polovina</b> jader. Zbývá <M>{'N_0/2'}</M> a aktivita klesla na polovinu.</>,
              content: (
                <svg viewBox="0 0 560 200" className="svg-fig">
                  <Nuclei remaining={16} />
                  <text x="128" y="195" fill={HALF} fontSize="14" textAnchor="middle">N = N₀/2</text>
                  <DecayCurve shown={1} />
                </svg>
              ),
            },
            {
              label: 'za 2·T₁/₂',
              caption: <>Po druhém poločase je z poloviny zase polovina: zbývá <M>{'N_0/4'}</M>. <b>Pozor: za 2 poločasy NEzbude nula!</b></>,
              content: (
                <svg viewBox="0 0 560 200" className="svg-fig">
                  <Nuclei remaining={8} />
                  <text x="128" y="195" fill={HALF} fontSize="14" textAnchor="middle">N = N₀/4</text>
                  <DecayCurve shown={2} />
                </svg>
              ),
            },
            {
              label: 'za 3·T₁/₂',
              caption: <>A tak dál — vždy se ubere polovina z toho, co zbylo: <M>{'N_0/8'}</M>. Křivka je <Term>exponenciála</Term> <M>{'N=N_0\\,2^{-t/T_{1/2}}'}</M>, nikdy nedosáhne přesné nuly.</>,
              content: (
                <svg viewBox="0 0 560 200" className="svg-fig">
                  <Nuclei remaining={4} />
                  <text x="128" y="195" fill={STABLE} fontSize="14" textAnchor="middle">N = N₀/8</text>
                  <DecayCurve shown={3} />
                </svg>
              ),
            },
          ]}
        />
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
