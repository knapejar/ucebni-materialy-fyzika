import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, AGroup, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.7'

/* Nové pojmy, které tahle lekce poprvé vykládá — ať se na ně dá později prokliknout. */
export const provides = {
  'kineticka-teorie': { lesson: '1.7', label: 'kinetická teorie hmoty', short: 'Spojuje viditelný stav látky s pohybem částic, z nichž je složena. Stojí na 3 axiomech.' },
  'tepelny-pohyb': { lesson: '1.7', label: 'tepelný pohyb', short: 'Neustálý neuspořádaný (chaotický) pohyb částic látky. Čím vyšší teplota, tím rychlejší.' },
  'brownuv-pohyb': { lesson: '1.7', label: 'Brownův pohyb', short: 'Chaotický pohyb drobného zrnka v kapalině; způsobuje ho kolísání počtu nárazů částic kapaliny na zrnko.' },
}

/* Šipka pro SVG. markerUnits="userSpaceOnUse" → hrot má pevnou velikost
   nezávislou na tloušťce čáry (jinak silné čáry udělají obří hroty). */
function Defs({ color }: { color: string }) {
  return (
    <defs>
      <marker id="ar7" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill={color} />
      </marker>
    </defs>
  )
}

const TXT = '#e8ecf8'
const AKCENT = '#f59e0b'
const VODA = '#5b8def'
const GRAIN = '#e8ecf8'
const DIM = '#6b7494'

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
          <Term id="kineticka-teorie">Kinetická teorie hmoty</Term> spojuje to, co na látce <i>vidíme</i> (skupenství, teplotu, tlak), s tím,
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
            molekul. Mezi nimi je vždycky mezera, prostor není úplně vyplněný.
            <br />
            <i>Příklad:</i> rozpustíš cukr ve vodě a objem se skoro nezvětší — molekuly cukru zapadnou do mezer mezi
            molekulami vody.
          </li>
          <li>
            <b>2. Tepelný pohyb.</b> Částice jsou v neustálém neuspořádaném pohybu — žádný směr nemá
            přednost před ostatními a rychlosti jsou různé.
            <br />
            <i>Příklad / důkaz:</i> Brownův pohyb a <b>difúze</b> (vůně se sama rozšíří po místnosti).
          </li>
          <li>
            <b>3. Pohyb se řídí <Concept id="newtonovy-zakony">Newtonovými zákony</Concept>.</b> Částice na sebe působí přitažlivými a odpudivými silami a
            chovají se podle <b>zákonů mechaniky</b>. Souhrn jejich pohybové a polohové energie je{' '}
            vnitřní energie soustavy:
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

            {/* plyn — daleko od sebe, šipky (různé směry rychlostí) */}
            <text x="355" y="22" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">plyn</text>
            {([[318, 52, 28, -14], [392, 58, -22, 18], [332, 104, 26, 10], [398, 100, -24, -16]] as const).map(([x, y, dx, dy], k) => (
              <g key={`g${k}`}>
                <line x1={x} y1={y} x2={x + dx} y2={y + dy} stroke={TXT} strokeWidth="2.5" markerEnd="url(#ar7)" />
                <circle cx={x} cy={y} r="7" fill={AKCENT} />
              </g>
            ))}
            <text x="355" y="142" fill={DIM} fontSize="11" textAnchor="middle">létají volně a naráží</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Tepelný pohyb a teplota — co s čím souvisí">
        <p>
          Pohyb částic v látce se jmenuje <Term id="tepelny-pohyb">tepelný pohyb</Term>: je <b>nepřetržitý</b> (nikdy nepřestane) a{' '}
          <b>neuspořádaný</b> (chaotický). Každá částice má nějakou <Concept id="kineticka-energie">kinetickou energii</Concept> a ta odpovídá teplotě.
        </p>
        <p>
          <Term id="teplota">Teplota</Term> je veličina <b>statistické povahy</b> — popisuje soustavu jako celek, ne jednu částici.
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
          <Term id="brownuv-pohyb">Brownův pohyb</Term> je chaotický, cukavý pohyb <b>drobného zrnka</b> (např. pylu nebo prachu) na vodní
          hladině. Je to <b>přímý důkaz</b> tepelného pohybu — sám zrnko vidíš pod mikroskopem, jak se nepravidelně
          škube, i když ho nic „nestrká". Proklikej si proč:
        </p>

        <StepScene
          title="Proč se zrnko cuká: kolísání počtu nárazů"
          viewBox="0 0 360 210"
          captions={[
            <>Zrnko (světlé) obklopují částice vody (modré). Ty do něj <b>neustále narážejí</b> ze všech stran kvůli tepelnému pohybu.</>,
            <>Když narazí <b>stejně</b> částic zleva i zprava, nárazy se <b>vyruší</b> a zrnko se (skoro) nehne.</>,
            <>Ale počty <b>kolísají</b> — chvíli narazí víc částic zleva. Převaha nárazů <b>strčí</b> zrnko doprava.</>,
            <>V dalším okamžiku převáží jiný směr. Výsledkem je <b>nepravidelná klikatá dráha</b> — to je Brownův pohyb.</>,
          ]}
        >
          {/* hroty šipek (modrá = nárazy vody, oranžová = výsledný posun) */}
          <defs>
            <marker id="arV" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto"><path d="M0,0 L11,5.5 L0,11 z" fill={VODA} /></marker>
            <marker id="arA" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto"><path d="M0,0 L11,5.5 L0,11 z" fill={AKCENT} /></marker>
          </defs>

          {/* částice vody kolem zrnka — viditelné jen v 1. kroku */}
          {([[70, 55], [120, 38], [245, 46], [300, 70], [58, 120], [108, 150], [255, 145], [302, 118]] as const).map(([x, y], k) => (
            <ACircle key={`p${k}`} cx={x} cy={y} r={5} fill={VODA} opacity={[1, 0, 0, 0]} />
          ))}

          {/* klikatá dráha — objeví se až v posledním kroku */}
          <APath
            d="M60,150 L95,90 L140,130 L175,60 L215,110 L255,80 L300,118"
            fill="none" stroke={AKCENT} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round"
            opacity={[0, 0, 0, 1]}
          />
          {([[60, 150], [95, 90], [140, 130], [175, 60], [215, 110], [255, 80]] as const).map(([x, y], k) => (
            <ACircle key={`z${k}`} cx={x} cy={y} r={4} fill={TXT} opacity={[0, 0, 0, 1]} />
          ))}

          {/* nárazy ZLEVA: 3 v rovnováze, 5 v nerovnováze (krajní 2 jen nerovnováha).
              hroty dojíždějí ke zrnku — v kroku 3 je zrnko posunuté doprava (x2 → 182). */}
          <ALine x1={96} y1={92} x2={[156, 156, 182, 182]} y2={94} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 1, 0]} />
          <ALine x1={96} y1={100} x2={[156, 156, 182, 182]} y2={100} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 1, 0]} />
          <ALine x1={96} y1={108} x2={[156, 156, 182, 182]} y2={106} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 1, 0]} />
          <ALine x1={96} y1={80} x2={182} y2={88} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 0, 1, 0]} />
          <ALine x1={96} y1={120} x2={182} y2={112} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 0, 1, 0]} />

          {/* nárazy ZPRAVA: 3 v rovnováze, jen 1 v nerovnováze (ta sleduje posunuté zrnko) */}
          <ALine x1={264} y1={100} x2={[204, 204, 230, 230]} y2={100} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 1, 0]} />
          <ALine x1={264} y1={88} x2={204} y2={94} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 0, 0]} />
          <ALine x1={264} y1={112} x2={204} y2={106} stroke={VODA} strokeWidth={3} markerEnd="url(#arV)" opacity={[0, 1, 0, 0]} />

          {/* zrnko: střed → (klid) → posun doprava → konec klikaté dráhy. Drží identitu. */}
          <ACircle cx={[180, 180, 206, 300]} cy={[100, 100, 100, 118]} r={[24, 22, 22, 7]} fill={GRAIN} />
          <AText x={[180, 180, 206, 300]} y={[105, 105, 105, 123]} fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="700" opacity={[1, 1, 1, 0]}>zrnko</AText>

          {/* výsledný posun — jen v nerovnováze */}
          <ALine x1={238} y1={58} x2={296} y2={58} stroke={AKCENT} strokeWidth={4} markerEnd="url(#arA)" opacity={[0, 0, 1, 0]} />
          <AText x={267} y={46} fill={AKCENT} fontSize="13" textAnchor="middle" fontWeight="700" opacity={[0, 0, 1, 0]}>posun</AText>

          {/* popisky počtů — každý stav je vlastní text, přepíná se průhledností */}
          <AText x={110} y={172} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>3 zleva</AText>
          <AText x={110} y={172} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 0, 1, 0]}>5 zleva</AText>
          <AText x={250} y={172} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>3 zprava</AText>
          <AText x={250} y={172} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 0, 1, 0]}>1 zprava</AText>

          {/* spodní popisek — jeden text na každý krok */}
          <AText x={180} y={200} fill={DIM} fontSize="12" textAnchor="middle" opacity={[1, 0, 0, 0]}>částice vody buší ze všech stran</AText>
          <AText x={180} y={200} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 1, 0, 0]}>stejně = vyruší se = klid</AText>
          <AText x={180} y={200} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 0, 1, 0]}>převaha zleva → posun doprava</AText>
          <AText x={180} y={200} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 0, 0, 1]}>každý zlom = jiný směr převahy nárazů</AText>
        </StepScene>

        <p>
          Proč to zrnko vůbec ucítí? Protože je <b>maličké</b> — jeho hmotnost se blíží hmotnosti částic kapaliny, takže
          mu nárazy podle <b><Concept id="zachovani-hybnosti">zákona zachování hybnosti</Concept></b> udělí <b>pozorovatelnou rychlost</b>. Velký kámen byste takhle
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
