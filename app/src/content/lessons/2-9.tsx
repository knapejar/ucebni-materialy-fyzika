import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, APath, ARect, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.9'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'sila-na-vodic': {
    lesson: '2.9',
    label: 'síla na vodič s proudem',
    short: 'F = B·I·l·sin α — magnetické pole tlačí na vodič, kterým teče proud.',
  },
  'proudova-smycka': {
    lesson: '2.9',
    label: 'proudová smyčka',
    short: 'Uzavřená smyčka s proudem; v homogenním poli je výsledná síla 0, ale moment ne.',
  },
  'magneticky-moment': {
    lesson: '2.9',
    label: 'magnetický moment',
    short: 'm⃗ = I·S⃗ — vektor kolmý na rovinu smyčky; popisuje, jak silně se smyčka „chce“ natočit do pole.',
  },
}

/* Šipky pro SVG (různé barvy = různý význam). */
function Defs() {
  return (
    <defs>
      <marker id="ar-acc" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACCENT} />
      </marker>
      <marker id="ar-force" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={FORCE} />
      </marker>
      <marker id="ar-mom" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={MOMENT} />
      </marker>
    </defs>
  )
}

const ACCENT = '#38bdf8' // pole B (akcent tématu)
const FORCE = '#fb7185' // síly F
const MOMENT = '#fbbf24' // magnetický moment / normála S
const TXT = '#e8ecf8'
const WIRE = '#cbd5e1'

/* Růžové (zde modré) indukční čáry pole B mířící doprava. */
function FieldLines({ rows = [60, 110, 160], x1 = 30, x2 = 360 }: { rows?: number[]; x1?: number | string; x2?: number | string }) {
  return (
    <g stroke={ACCENT} strokeWidth="2" opacity="0.7">
      {rows.map((y, k) => (
        <line key={k} x1={x1} y1={y} x2={x2} y2={y} markerEnd="url(#ar-acc)" />
      ))}
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tohle je oblíbená zkoušková dvojka otázek: <b>co dělá <Concept id="magneticke-pole">magnetické pole</Concept> s vodičem, kterým teče
        proud</b>, a <b>jak se chová proudová smyčka</b>. Stačí umět pár vět a jeden chyták —
        a body máš jisté. Hlavní past je úplně na konci, tak vydrž až k ní.
      </p>

      <Section title="Síla na vodič s proudem — odkud se bere">
        <p>
          V drátu se <Concept id="elektricky-proud">proud</Concept> = pohybující se náboje. A na pohybující se náboj v magnetickém poli působí{' '}
          <Concept id="lorentzova-sila">magnetická síla</Concept> <M>{'F_m = B\\,Q\\,v\\,\\sin\\alpha'}</M>. Když ty malé síly na všechny
          nositele náboje sečteš, vyjde <Term id="sila-na-vodic">síla na vodič s proudem</Term>:
        </p>
        <MB>{'F = B\\,I\\,l\\,\\sin\\alpha'}</MB>
        <p>
          kde <M>{'I'}</M> je proud, <M>{'l'}</M> délka vodiče v poli a <M>{'\\alpha'}</M> úhel mezi
          směrem proudu (vodičem) a indukcí <M>{'\\vec B'}</M>. Vektorově se to píše elegantně{' '}
          <M>{'\\vec F = I\\,\\vec l \\times \\vec B'}</M> — síla je <Term>kolmá</Term> na vodič i na
          pole. Směr ti dá Flemingovo pravidlo levé ruky.
        </p>

        <Figure caption="Síla na rovný vodič: je největší, když je vodič kolmý na pole (α = 90°), a nulová, když je rovnoběžně (α = 0°).">
          <svg viewBox="0 0 390 200" className="svg-fig">
            <Defs />
            <FieldLines rows={[45, 105, 165]} x1="25" x2="360" />
            <text x="335" y="35" fill={ACCENT} fontSize="15" fontStyle="italic">B</text>
            {/* vodic kolmy na pole (svisly) */}
            <line x1="180" y1="35" x2="180" y2="175" stroke={WIRE} strokeWidth="5" />
            <circle cx="180" cy="105" r="9" fill="none" stroke={MOMENT} strokeWidth="2.5" />
            <circle cx="180" cy="105" r="2.5" fill={MOMENT} />
            <text x="150" y="30" fill={WIRE} fontSize="14" fontStyle="italic">I (ven z pole)</text>
            {/* sila F kolma na obojI (nahoru) */}
            <line x1="180" y1="105" x2="180" y2="50" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-force)" />
            <text x="192" y="70" fill={FORCE} fontSize="15" fontStyle="italic">F</text>
            <text x="120" y="195" fill={TXT} fontSize="13">F = B·I·l (kolmo na pole i vodič)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Proudová smyčka v poli — síly se sčítají na nulu">
        <p>
          Teď z vodiče udělej obdélníkovou <Term id="proudova-smycka">proudovou smyčku</Term> (rámeček, kterým teče
          proud <M>{'I'}</M>) a vlož ji do <b>homogenního</b> (všude stejného) magnetického pole.
          Na každou stranu rámečku působí magnetická síla. Klíčové zjištění:
        </p>
        <MB>{'\\vec F = \\sum_i \\vec F_i = 0'}</MB>
        <p>
          <b>Výsledná síla na uzavřenou smyčku v homogenním poli je nulová.</b> Síly na protější
          strany jsou stejně velké a opačné — takže smyčka se jako celek <i>nikam neposune</i>.
          Ale pozor: to neznamená, že se nic neděje.
        </p>

        <Callout kind="tip" title="Proč to vyjde 0">
          <p>
            Protější strany rámečku vedou proud opačným směrem (jednou „tam“, podruhé „zpět“).
            Stejné pole × opačný proud = opačné síly. Sečteno: nula. Platí to jen v homogenním poli —
            v nehomogenním se síly úplně nevyruší a smyčka se navíc i posouvá (translace).
          </p>
        </Callout>
      </Section>

      <Section title="Moment síly: smyčku to roztočí">
        <p>
          I když je výslednice sil nula, <b><Concept id="dvojice-sil">dvojice sil</Concept> na protější strany působí v různé výšce</b> —
          a to je přesně dvojice sil, která smyčku <Term>otáčí</Term>. Výsledný moment je
        </p>
        <MB>{'\\vec M = I\\,(\\vec S \\times \\vec B) \\qquad\\Rightarrow\\qquad |\\vec M| = I\\,S\\,B\\,\\sin\\alpha'}</MB>
        <p>
          kde <M>{'S'}</M> je obsah plochy smyčky a <M>{'\\alpha'}</M> je úhel mezi <b>normálou
          plochy</b> (kolmicí k rovině smyčky) a polem <M>{'\\vec B'}</M>. Moment je největší pro{' '}
          <M>{'\\alpha = 90^\\circ'}</M> a nulový pro <M>{'\\alpha = 0^\\circ'}</M> (když normála
          míří podél pole — pak už není co otáčet).
        </p>

        <StepScene
          title="Jak se smyčka natáčí (klikej Další →)"
          viewBox="0 0 390 220"
          captions={[
            <>
              Na čtyři strany působí síly. Dvě <span style={{ color: FORCE }}>(F₂, F₄)</span> míří
              od sebe, leží na stejné přímce → jen smyčku napínají, <b>navzájem se vyruší</b>.
            </>,
            <>
              Druhé dvě síly <span style={{ color: FORCE }}>(F₁, F₃)</span> jsou taky stejně velké
              a opačné, ale <b>působí v různé výšce</b> → tvoří <b>dvojici sil</b>, která smyčku
              roztáčí. To je ten moment <M>{'|\\vec M| = I\\,S\\,B\\,\\sin\\alpha'}</M>.
            </>,
            <>
              Smyčka se otáčí, dokud normála (a tím i magnetický moment) nemíří <b>podél pole</b>.
              Pak je <M>{'\\alpha = 0'}</M>, moment je nulový a smyčka stojí v rovnováze. <b>Rovina
              smyčky je pak kolmá k B.</b>
            </>,
          ]}
        >
          <Defs />
          {/* pole B (statické indukční čáry) */}
          <g stroke={ACCENT} strokeWidth="2" opacity="0.7">
            <line x1="25" y1="45" x2="360" y2="45" markerEnd="url(#ar-acc)" />
            <line x1="25" y1="110" x2="360" y2="110" markerEnd="url(#ar-acc)" />
            <line x1="25" y1="175" x2="360" y2="175" markerEnd="url(#ar-acc)" />
          </g>
          <AText x={336} y={32} fill={ACCENT} fontSize="14" fontStyle="italic" opacity={1}>B</AText>

          {/* ——— KROK 1: smyčka čelně jako obdélník, F2 nahoru / F4 dolů (vyruší se) ——— */}
          <ARect x={150} y={75} width={90} height={70} fill="none" stroke={WIRE} strokeWidth={3} opacity={[1, 0, 0]} />
          <AText x={195} y={114} fill={WIRE} fontSize="13" fontStyle="italic" textAnchor="middle" opacity={[1, 0, 0]}>I</AText>
          <ALine x1={195} y1={75} x2={195} y2={40} stroke={FORCE} strokeWidth={4} markerEnd="url(#ar-force)" opacity={[1, 0, 0]} />
          <AText x={208} y={56} fill={FORCE} fontSize="13" fontStyle="italic" opacity={[1, 0, 0]}>F₂</AText>
          <ALine x1={195} y1={145} x2={195} y2={180} stroke={FORCE} strokeWidth={4} markerEnd="url(#ar-force)" opacity={[1, 0, 0]} />
          <AText x={208} y={172} fill={FORCE} fontSize="13" fontStyle="italic" opacity={[1, 0, 0]}>F₄</AText>

          {/* ——— smyčka z boku jako úsečka — rotuje z nakloněné „\" (krok 2) do svislé (krok 3) ——— */}
          {/* horní (levý) konec úsečky → nahoru */}
          <ACircle cx={[155, 155, 195]} cy={[70, 70, 60]} r={4} fill={WIRE} opacity={[0, 1, 1]} />
          {/* dolní (pravý) konec úsečky → dolů */}
          <ACircle cx={[235, 235, 195]} cy={[150, 150, 160]} r={4} fill={WIRE} opacity={[0, 1, 1]} />
          {/* tělo úsečky (smyčka z boku) */}
          <ALine x1={[155, 155, 195]} y1={[70, 70, 60]} x2={[235, 235, 195]} y2={[150, 150, 160]} stroke={WIRE} strokeWidth={4} opacity={[0, 1, 1]} />

          {/* normála S (krok 2) — kolmá na úsečku, míří vzhůru-vpravo, mizí v kroku 3 */}
          <ALine x1={195} y1={110} x2={233} y2={74} stroke={MOMENT} strokeWidth={3} markerEnd="url(#ar-mom)" opacity={[0, 1, 0]} />
          <AText x={236} y={66} fill={MOMENT} fontSize="13" fontStyle="italic" opacity={[0, 1, 0]}>S (normála)</AText>

          {/* F3 nahoru na horním (levém) konci (krok 2) */}
          <ALine x1={155} y1={70} x2={155} y2={36} stroke={FORCE} strokeWidth={4} markerEnd="url(#ar-force)" opacity={[0, 1, 0]} />
          <AText x={125} y={52} fill={FORCE} fontSize="13" fontStyle="italic" opacity={[0, 1, 0]}>F₃</AText>
          {/* F1 dolů na dolním (pravém) konci (krok 2) */}
          <ALine x1={235} y1={150} x2={235} y2={188} stroke={FORCE} strokeWidth={4} markerEnd="url(#ar-force)" opacity={[0, 1, 0]} />
          <AText x={258} y={166} fill={FORCE} fontSize="13" fontStyle="italic" opacity={[0, 1, 0]}>F₁</AText>

          {/* rotační šipka „otáčí" (krok 2) — po směru hodin: vpravo dolů (pravá strana klesá, levá stoupá) */}
          <APath d="M286,68 A44,44 0 0 1 300,150" fill="none" stroke={MOMENT} strokeWidth={2.5} markerEnd="url(#ar-mom)" opacity={[0, 1, 0]} />
          <AText x={312} y={98} fill={MOMENT} fontSize="13" opacity={[0, 1, 0]}>otáčí</AText>

          {/* ——— KROK 3: magnetický moment m podél pole (doprava) ——— */}
          <ALine x1={195} y1={110} x2={278} y2={110} stroke={MOMENT} strokeWidth={4} markerEnd="url(#ar-mom)" opacity={[0, 0, 1]} />
          <AText x={236} y={97} fill={MOMENT} fontSize="14" fontStyle="italic" textAnchor="middle" opacity={[0, 0, 1]}>m ∥ B</AText>

          {/* spodní popisek (mění se podle kroku) */}
          <AText x={195} y={210} fill={TXT} fontSize="12" textAnchor="middle" opacity={[1, 0, 0]}>F₂ = −F₄ → vyruší se (jen deformují)</AText>
          <AText x={195} y={210} fill={TXT} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>rovina smyčky ⊥ B, moment m ∥ B → rovnováha</AText>
        </StepScene>
      </Section>

      <Section title="Magnetický moment — co to je">
        <p>
          Aby se to psalo hezky, zavádí se <Term id="magneticky-moment">magnetický moment</Term> smyčky jako vektor:
        </p>
        <MB>{'\\vec m = I\\,\\vec S'}</MB>
        <p>
          Velikost je <M>{'m = I\\,S'}</M> (proud krát plocha) a <b>směr je kolmý na rovinu
          smyčky</b> (po směru normály <M>{'\\vec S'}</M>, podle pravotočivé orientace proudu).
          S ním se <Concept id="moment-sily">moment síly</Concept> napíše jako čistý vektorový součin:
        </p>
        <MB>{'\\vec M = \\vec m \\times \\vec B \\qquad |\\vec M| = m\\,B\\,\\sin\\alpha = I\\,S\\,B\\,\\sin\\alpha'}</MB>
        <p>
          Magnetický moment ti říká, „jak silně se smyčka chce natočit do pole“. Je to úplná analogie
          <Concept id="dipol">elektrického dipólu</Concept> v elektrickém poli (tam moment <M>{'M = p\\,E\\,\\sin\\alpha'}</M>).
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>Nejčastější past — rovnováha smyčky:</b> v rovnováze je{' '}
            <b>rovina smyčky KOLMÁ k <M>{'\\vec B'}</M></b>, ale <b>magnetický moment <M>{'\\vec m'}</M>{' '}
            (= normála) je ROVNOBĚŽNÝ s <M>{'\\vec B'}</M></b>. Nepleť si rovinu a normálu — jsou na
            sebe kolmé, takže když je jedna ⊥ k poli, druhá je ∥.
          </li>
          <li>
            <b>Výsledná síla</b> na uzavřenou smyčku v homogenním poli je <b>nula</b> — ale{' '}
            <b>výsledný moment ne</b>. „Žádná síla“ ≠ „nic se neděje“: smyčka se otáčí.
          </li>
          <li>
            V <M>{'|\\vec M| = I\\,S\\,B\\,\\sin\\alpha'}</M> je <M>{'\\alpha'}</M> úhel <b>normály</b>{' '}
            s polem (ne úhel roviny smyčky). Moment je max při <M>{'\\alpha=90^\\circ'}</M>, nulový při{' '}
            <M>{'\\alpha=0'}</M>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat sílu na vodič s proudem F = B·I·l·sin α a vědět, že je kolmá na vodič i na pole.',
          'Vědět, že výsledná síla na smyčku v homogenním poli je 0, ale výsledný moment není.',
          'Napsat moment M = I·(S×B), tedy |M| = I·S·B·sin α, a říct, co je α.',
          'Definovat magnetický moment m⃗ = I·S⃗ (kolmý na rovinu smyčky).',
          'Určit orientaci v rovnováze: rovina smyčky ⊥ B, magnetický moment ∥ B.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaká je výsledná síla na uzavřenou proudovou smyčku v homogenním magnetickém poli?',
            a: (
              <>
                <b>Nulová</b> (<M>{'\\sum \\vec F_i = 0'}</M>). Síly na protější strany jsou stejně
                velké a opačné. Ale výsledný <i>moment</i> nulový být nemusí — smyčku to otáčí.
              </>
            ),
          },
          {
            q: 'Jaká je vzájemná orientace roviny proudové smyčky v rovnováze a vektoru indukce B?',
            a: <>Jsou navzájem <b>kolmé</b> (rovina smyčky ⊥ <M>{'\\vec B'}</M>).</>,
          },
          {
            q: 'Jaká je v rovnováze orientace magnetického momentu smyčky vůči vektoru indukce B?',
            a: <>Jsou navzájem <b>rovnoběžné</b> (<M>{'\\vec m \\parallel \\vec B'}</M>).</>,
          },
          {
            q: <>Jak je definován magnetický moment smyčky a čemu je roven moment síly na ni?</>,
            a: (
              <>
                <M>{'\\vec m = I\\,\\vec S'}</M> (proud krát plocha, kolmo na rovinu smyčky). Moment
                síly: <M>{'\\vec M = \\vec m \\times \\vec B'}</M>, tedy{' '}
                <M>{'|\\vec M| = I\\,S\\,B\\,\\sin\\alpha'}</M>.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
