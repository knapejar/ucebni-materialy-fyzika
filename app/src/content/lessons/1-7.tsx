import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.7'

/* Nové pojmy, které tahle lekce poprvé vykládá — ať se na ně dá později prokliknout. */
export const provides = {
  'kineticka-teorie': { lesson: '1.7', label: 'kinetická teorie hmoty', short: 'Spojuje viditelný stav látky s pohybem částic, z nichž je složena. Stojí na 3 axiomech.' },
  'tepelny-pohyb': { lesson: '1.7', label: 'tepelný pohyb', short: 'Neustálý neuspořádaný (chaotický) pohyb částic látky. Čím vyšší teplota, tím rychlejší.' },
  'brownuv-pohyb': { lesson: '1.7', label: 'Brownův pohyb', short: 'Chaotický pohyb drobného zrnka v kapalině; způsobuje ho kolísání počtu nárazů částic kapaliny na zrnko.' },
}

/* Šipka pro SVG. */
function Defs({ color }: { color: string }) {
  return (
    <defs>
      <marker id="ar7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const TXT = '#e8ecf8'
const AKCENT = '#f59e0b'
const VODA = '#5b8def'
const GRAIN = '#e8ecf8'
const DIM = '#6b7494'

/* Drobné částice kapaliny rozmístěné kolem zrnka — pro Brownův pohyb. */
function Castice({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r="4" fill={VODA} />
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tahle lekce je naučení tří vět nazpaměť plus jedno „proč". U zkoušky chtějí{' '}
        <b>tři axiomy kinetické teorie + příklad</b>, vědět, že <b>teplota = jak rychle se částice cukají</b>, a
        umět popsat <b>Brownův pohyb a jeho příčinu</b>. To je celé — a body za to padají snadno.
      </p>

      <Section title="O co jde: kinetická teorie hmoty">
        <p>
          <Term>Kinetická teorie hmoty</Term> spojuje to, co na látce <i>vidíme</i> (skupenství, teplotu, tlak), s tím,
          co dělají <i>částice</i>, ze kterých je složená. Jinými slovy: makroskopický svět vysvětluje pohybem atomů a
          molekul. Nejlíp je rozpracovaná pro <b>ideální plyn</b>.
        </p>
        <p>
          Celá teorie stojí na <b>třech axiomech</b> (axiom = základní předpoklad, který se nedokazuje, ale stavíme na
          něm). Tyhle tři věty musíš umět vysypat z rukávu.
        </p>
      </Section>

      <Section title="Tři axiomy (tohle se ptá)">
        <ol className="biglist">
          <li>
            <b>1. Diskrétní struktura.</b> Látka kteréhokoliv skupenství se skládá z velmi malých částic — atomů či
            molekul. Mezi nimi je vždycky <Term>mezera</Term>, prostor není úplně vyplněný.
            <br />
            <i>Příklad:</i> rozpustíš cukr ve vodě a objem se skoro nezvětší — molekuly cukru zapadnou do mezer mezi
            molekulami vody.
          </li>
          <li>
            <b>2. Tepelný pohyb.</b> Částice jsou v <Term>neustálém neuspořádaném pohybu</Term> — žádný směr nemá
            přednost před ostatními a rychlosti jsou různé.
            <br />
            <i>Příklad / důkaz:</i> <Term>Brownův pohyb</Term> a <b>difúze</b> (vůně se sama rozšíří po místnosti).
          </li>
          <li>
            <b>3. Pohyb se řídí Newtonovými zákony.</b> Částice na sebe působí přitažlivými a odpudivými silami a
            chovají se podle <b>zákonů mechaniky</b>. Souhrn jejich pohybové a polohové energie je{' '}
            <Term>vnitřní energie</Term> soustavy:
            <MB>{'U = \\Delta E_\\mathrm{p} + \\Delta E_\\mathrm{k}'}</MB>
            <i>Příklad:</i> srážky molekul plynu o stěnu nádoby (Newtonovsky odraz) dávají dohromady <b>tlak</b>.
          </li>
        </ol>

        <Figure caption="Tři skupenství = tři režimy tepelného pohybu částic. Všude se hýbou, jen jinak.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <Defs color={AKCENT} />
            {/* pevná látka — pravidelná mřížka, kmitání kolem poloh */}
            <text x="70" y="22" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">pevná látka</text>
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => (
                <circle key={`s${r}${c}`} cx={40 + c * 30} cy={50 + r * 28} r="8" fill={AKCENT} />
              )),
            )}
            <text x="70" y="142" fill={DIM} fontSize="11" textAnchor="middle">kmitají kolem poloh</text>

            {/* kapalina — natěsno, ale neuspořádaně */}
            <text x="210" y="22" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">kapalina</text>
            {[[175, 50], [205, 46], [235, 54], [185, 78], [218, 80], [248, 74], [195, 104], [228, 106]].map(([x, y], k) => (
              <circle key={`l${k}`} cx={x} cy={y} r="8" fill={AKCENT} />
            ))}
            <text x="210" y="142" fill={DIM} fontSize="11" textAnchor="middle">kloužou těsně kolem sebe</text>

            {/* plyn — daleko od sebe, šipky */}
            <text x="355" y="22" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">plyn</text>
            {[[330, 48], [380, 62], [345, 92], [390, 100]].map(([x, y], k) => (
              <g key={`g${k}`}>
                <circle cx={x} cy={y} r="8" fill={AKCENT} />
                <line x1={x} y1={y} x2={x + 18} y2={y - 12} stroke={TXT} strokeWidth="2" markerEnd="url(#ar7)" />
              </g>
            ))}
            <text x="355" y="142" fill={DIM} fontSize="11" textAnchor="middle">létají volně a naráží</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Tepelný pohyb a teplota — co s čím souvisí">
        <p>
          Pohyb částic v látce se jmenuje <Term>tepelný pohyb</Term>: je <b>nepřetržitý</b> (nikdy nepřestane) a{' '}
          <b>neuspořádaný</b> (chaotický). Každá částice má nějakou kinetickou energii a ta odpovídá teplotě.
        </p>
        <p>
          <Term>Teplota</Term> je veličina <b>statistické povahy</b> — popisuje soustavu jako celek, ne jednu částici.
          Měří se v kelvinech <M>{'(\\mathrm{K})'}</M>, případně °C nebo °F. Pro jednoatomový (ideální) plyn je
          teplota přímo úměrná <b>střední kinetické energii</b> částic:
        </p>
        <MB>{'T = \\frac{2}{3k}\\,\\varepsilon_\\mathrm{s}'}</MB>
        <p>
          kde <M>{'k'}</M> je Boltzmannova konstanta a <M>{'\\varepsilon_\\mathrm{s}'}</M> střední kinetická energie
          mikročástic. Z toho plyne to nejdůležitější, co si máš zapamatovat:
        </p>
        <Callout kind="tip" title="Jedna věta, kterou musíš umět">
          <b>Vyšší teplota = rychlejší tepelný pohyb částic.</b> Zahřát látku znamená rozhýbat její částice víc; ochladit
          znamená zpomalit je.
        </Callout>
      </Section>

      <Section title="Brownův pohyb — krok po kroku">
        <p>
          <Term>Brownův pohyb</Term> je chaotický, cukavý pohyb <b>drobného zrnka</b> (např. pylu nebo prachu) na vodní
          hladině. Je to <b>přímý důkaz</b> tepelného pohybu — sám zrnko vidíš pod mikroskopem, jak se nepravidelně
          škube, i když ho nic „nestrká". Proklikej si proč:
        </p>

        <StepFigure
          title="Proč se zrnko cuká: kolísání počtu nárazů"
          steps={[
            {
              label: 'klid? ne',
              caption: <>Zrnko (světlé) obklopují částice vody (modré). Ty do něj <b>neustále narážejí</b> ze všech stran kvůli tepelnému pohybu.</>,
              content: (
                <svg viewBox="0 0 360 200" className="svg-fig">
                  <Defs color={AKCENT} />
                  <Castice cx={70} cy={60} />
                  <Castice cx={120} cy={40} />
                  <Castice cx={250} cy={50} />
                  <Castice cx={300} cy={80} />
                  <Castice cx={60} cy={130} />
                  <Castice cx={110} cy={160} />
                  <Castice cx={260} cy={150} />
                  <Castice cx={300} cy={130} />
                  <circle cx={180} cy={100} r="26" fill={GRAIN} />
                  <text x="180" y="105" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="700">zrnko</text>
                  <text x="180" y="190" fill={DIM} fontSize="12" textAnchor="middle">částice vody buší ze všech stran</text>
                </svg>
              ),
            },
            {
              label: 'rovnováha',
              caption: <>Když narazí <b>stejně</b> částic zleva i zprava, nárazy se <b>vyruší</b> a zrnko se (skoro) nehne.</>,
              content: (
                <svg viewBox="0 0 360 200" className="svg-fig">
                  <Defs color={VODA} />
                  <circle cx={180} cy={100} r="26" fill={GRAIN} />
                  <text x="180" y="105" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="700">zrnko</text>
                  {/* 3 nárazy zleva */}
                  <line x1="90" y1="80" x2="150" y2="92" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="90" y1="100" x2="150" y2="100" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="90" y1="120" x2="150" y2="108" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  {/* 3 nárazy zprava */}
                  <line x1="270" y1="80" x2="210" y2="92" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="270" y1="100" x2="210" y2="100" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="270" y1="120" x2="210" y2="108" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <text x="115" y="160" fill={TXT} fontSize="13" textAnchor="middle">3 zleva</text>
                  <text x="245" y="160" fill={TXT} fontSize="13" textAnchor="middle">3 zprava</text>
                  <text x="180" y="190" fill={DIM} fontSize="12" textAnchor="middle">stejně = vyruší se = klid</text>
                </svg>
              ),
            },
            {
              label: 'nerovnováha',
              caption: <>Ale počty <b>kolísají</b> — chvíli narazí víc částic zleva. Převaha nárazů <b>strčí</b> zrnko doprava.</>,
              content: (
                <svg viewBox="0 0 360 200" className="svg-fig">
                  <Defs color={AKCENT} />
                  <circle cx={180} cy={100} r="26" fill={GRAIN} />
                  <text x="180" y="105" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="700">zrnko</text>
                  {/* 5 nárazů zleva */}
                  <line x1="80" y1="72" x2="150" y2="86" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="80" y1="88" x2="150" y2="94" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="80" y1="100" x2="150" y2="100" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="80" y1="112" x2="150" y2="106" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <line x1="80" y1="128" x2="150" y2="114" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  {/* 1 náraz zprava */}
                  <line x1="270" y1="100" x2="210" y2="100" stroke={VODA} strokeWidth="4" markerEnd="url(#ar7)" />
                  <text x="105" y="165" fill={TXT} fontSize="13" textAnchor="middle">5 zleva</text>
                  <text x="250" y="165" fill={TXT} fontSize="13" textAnchor="middle">1 zprava</text>
                  {/* výsledný posun */}
                  <line x1="210" y1="60" x2="280" y2="60" stroke={AKCENT} strokeWidth="5" markerEnd="url(#ar7)" />
                  <text x="250" y="48" fill={AKCENT} fontSize="13" textAnchor="middle" fontWeight="700">posun</text>
                </svg>
              ),
            },
            {
              label: 'klikatá dráha',
              caption: <>V dalším okamžiku převáží jiný směr. Výsledkem je <b>nepravidelná klikatá dráha</b> — to je Brownův pohyb.</>,
              content: (
                <svg viewBox="0 0 360 200" className="svg-fig">
                  <Defs color={AKCENT} />
                  <polyline
                    points="60,150 95,90 140,130 175,60 215,110 250,70 300,120"
                    fill="none"
                    stroke={AKCENT}
                    strokeWidth="3"
                    strokeLinejoin="round"
                    markerEnd="url(#ar7)"
                  />
                  {[[60, 150], [95, 90], [140, 130], [175, 60], [215, 110], [250, 70], [300, 120]].map(([x, y], k) => (
                    <circle key={k} cx={x} cy={y} r="4" fill={TXT} />
                  ))}
                  <text x="180" y="190" fill={DIM} fontSize="12" textAnchor="middle">každý zlom = jiný směr převahy nárazů</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Proč to zrnko vůbec ucítí? Protože je <b>maličké</b> — jeho hmotnost se blíží hmotnosti částic kapaliny, takže
          mu nárazy podle <b>zákona zachování hybnosti</b> udělí <b>pozorovatelnou rychlost</b>. Velký kámen byste takhle
          rozhýbat nedokázali.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Vyšší teplota = rychlejší tepelný pohyb částic.</b> Neříkej „víc částic" ani „větší částice" — mění se
            <b> rychlost</b> (střední kinetická energie).
          </li>
          <li>
            Příčina Brownova pohybu je <b>kolísání počtu nárazů</b> částic kapaliny na zrnko — ne nějaký „proud" nebo
            „vítr". Kdyby nárazů bylo ze všech stran stejně, zrnko by stálo.
          </li>
          <li>
            Brownův pohyb je <b>důkaz tepelného pohybu</b>, ne jeho příčina. Stejně tak <b>difúze</b>.
          </li>
          <li>
            3. axiom: částice se řídí <b>Newtonovými zákony</b> (zákony mechaniky) — na to se rádo zapomíná, protože
            první dva axiomy jsou „chytlavější".
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vyjmenovat 3 axiomy kinetické teorie (diskrétní struktura, tepelný pohyb, řízení Newtonovými zákony) a dát ke každému příklad.',
          'Vysvětlit, že teplota souvisí se střední kinetickou energií částic: vyšší teplota = rychlejší tepelný pohyb.',
          'Popsat, co je Brownův pohyb a že jeho příčinou je kolísání počtu nárazů částic kapaliny na zrnko.',
          'Vědět, že Brownův pohyb a difúze jsou důkazy tepelného pohybu.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaké jsou 3 axiomy kinetické teorie hmoty?',
            a: (
              <>
                <b>1.</b> Hmota se skládá z velmi malých částic (atomů, molekul) — mezi nimi jsou mezery. <b>2.</b> Tyto
                částice jsou v neustálém neuspořádaném pohybu (tepelný pohyb). <b>3.</b> Jejich pohyb se řídí zákony
                mechaniky — <b>Newtonovými zákony</b>.
              </>
            ),
          },
          {
            q: 'Co je to Brownův pohyb a čím je způsoben?',
            a: (
              <>
                Chaotický pohyb drobných zrnek na vodní hladině. Je způsoben <b>kolísáním počtu narážejících částic vody</b>
                {' '}na zrnko. Podle zákona zachování hybnosti udělí nárazy zrnku (jehož hmotnost je blízká hmotnosti
                částic) pozorovatelnou rychlost.
              </>
            ),
          },
          {
            q: 'Jak souvisí teplota látky s pohybem jejích částic?',
            a: (
              <>
                Teplota je úměrná <b>střední kinetické energii</b> částic (pro jednoatomový plyn <M>{'T = \\tfrac{2}{3k}\\varepsilon_\\mathrm{s}'}</M>).
                Čím vyšší teplota, tím <b>rychlejší tepelný pohyb</b> částic.
              </>
            ),
          },
          {
            q: 'Proč Brownův pohyb pozorujeme jen u velmi malých zrnek, a ne třeba u kamínku?',
            a: (
              <>
                Protože zrnko musí být tak lehké, že se jeho hmotnost blíží hmotnosti částic kapaliny — pak mu kolísání
                nárazů udělí <b>znatelnou rychlost</b>. U těžkého tělesa se nárazy zprůměrují a žádný viditelný pohyb
                nezpůsobí.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
