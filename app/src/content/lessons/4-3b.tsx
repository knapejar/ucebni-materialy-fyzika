import { Section, M, MB, Term, Concept, Figure, StepScene, ARect, ACircle, ALine, AText, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.3b'

/* Nové pojmy, které tahle lekce zavádí (pro pozdější proklikávání). */
export const provides = {
  'mezni-frekvence': {
    lesson: '4.3b',
    label: 'mezní frekvence',
    short: 'ν₀ = A/h — pod ní se neuvolní žádný elektron, ať svítíš jakkoli silně.',
  },
  'mezni-vlnova-delka': {
    lesson: '4.3b',
    label: 'mezní vlnová délka',
    short: 'λ₀ = hc/A — nejdelší vlna, která ještě fotoefekt vyvolá.',
  },
}

const ACCENT = '#f472b6' // růžová = energie / frekvence
const ELECTRON = '#60a5fa' // modrá = elektrony (počet)
const METAL = '#9aa6c4'
const TXT = '#e8ecf8'
const MUTED = '#9aa6c4'

/* Šipka pro SVG. */
function Defs({ color, id: mid }: { color: string; id: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Foton jako vlnka mířící na kov. */
function Photon({ x, y, color = ACCENT, w = 1 }: { x: number; y: number; color?: string; w?: number }) {
  return (
    <path
      d={`M${x},${y} q 6,-7 12,0 q 6,7 12,0 q 6,-7 12,0 q 6,7 12,0`}
      fill="none"
      stroke={color}
      strokeWidth={w}
    />
  )
}

/* Cesta (d) jedné vlnky-fotonu — pro animaci přes <APath>. */
function photonD(x: number, y: number) {
  return `M${x},${y} q 6,-7 12,0 q 6,7 12,0 q 6,-7 12,0 q 6,7 12,0`
}

export default function Lesson_4_3b() {
  return (
    <>
      <p className="lead">
        Tahle lekce je čistý dril jedné jediné myšlenky. U zkoušky padne otázka typu „co se stane, když
        zesílíš světlo / zvýšíš frekvenci?“ — a kdo si to plete, ztrácí body zbytečně. Naučíš se to
        odpovědět spolehlivě a poznáš dva nejčastější chytáky.
      </p>

      <Section title="Dvě páčky, dvě různé věci">
        <p>
          Připomeň si rovnici <Concept id="fotoefekt">fotoefektu</Concept> (Einsteinova rovnice). Energie jednoho <Concept id="foton">fotonu</Concept> se
          rozdělí na vytržení elektronu z kovu a na jeho pohyb:
        </p>
        <MB>{'h\\nu = A + E_{e}'}</MB>
        <p>
          kde <M>{'h\\nu'}</M> je energie fotonu, <M>{'A'}</M> je <Concept id="vystupni-prace">výstupní práce</Concept> (kolik
          stojí vytrhnout elektron) a <M>{'E_{e}'}</M> je energie, kterou si elektron odnese (jeho rychlost).
          Z téhle jediné rovnice plyne <b>celá lekce</b>. Klíč je oddělit dvě nezávislé páčky:
        </p>
        <div className="biglist">
          <p>
            <span style={{ color: ELECTRON }}>● <b>INTENZITA</b></span> světla = kolik fotonů za sekundu dopadá.
            Víc fotonů → víc zásahů → <b>víc uvolněných elektronů</b>. Mění tedy jen{' '}
            <Term>počet</Term> elektronů (a tím i fotoproud).
          </p>
          <p>
            <span style={{ color: ACCENT }}>● <b>FREKVENCE</b></span> (barva) světla = energie jednoho fotonu{' '}
            <M>{'h\\nu'}</M>. Vyšší frekvence → energičtější foton → po zaplacení <M>{'A'}</M> zbude
            elektronu víc → <b>vyšší energie a rychlost</b> elektronu. Mění tedy <Term>energii</Term>{' '}
            (rychlost) elektronu, ne jejich počet.
          </p>
        </div>
        <Callout kind="tip" title="Mantra, kterou si zapamatuj">
          <b>Intenzita řídí POČET, frekvence řídí ENERGII (rychlost).</b> Dvě páčky, dvě různé veličiny.
          Nikdy se nemíchají.
        </Callout>
      </Section>

      <Section title="Vidět to na obrázku">
        <Figure caption="Intenzita = kolik fotonů přiletí (počet vyražených elektronů). Frekvence = jak je každý foton energický (rychlost elektronů).">
          <svg viewBox="0 0 440 220" className="svg-fig">
            <Defs color={ELECTRON} id="are" />
            {/* kov */}
            <rect x="300" y="30" width="40" height="160" rx="4" fill={METAL} />
            <text x="320" y="205" fill={MUTED} fontSize="13" textAnchor="middle">kov</text>

            {/* slabé světlo nahoře: 1 foton -> 1 elektron */}
            <text x="20" y="55" fill={ELECTRON} fontSize="13">slabé světlo</text>
            <Photon x={150} y={70} />
            <line x1="345" y1="70" x2="420" y2="70" stroke={ELECTRON} strokeWidth="3" markerEnd="url(#are)" />
            <circle cx="360" cy="70" r="6" fill={ELECTRON} />

            {/* silné světlo dole: 3 fotony -> 3 elektrony */}
            <text x="20" y="135" fill={ELECTRON} fontSize="13">silné světlo</text>
            <Photon x={150} y={120} />
            <Photon x={150} y={145} />
            <Photon x={150} y={170} />
            <line x1="345" y1="120" x2="420" y2="120" stroke={ELECTRON} strokeWidth="3" markerEnd="url(#are)" />
            <line x1="345" y1="145" x2="420" y2="145" stroke={ELECTRON} strokeWidth="3" markerEnd="url(#are)" />
            <line x1="345" y1="170" x2="420" y2="170" stroke={ELECTRON} strokeWidth="3" markerEnd="url(#are)" />
            <circle cx="360" cy="120" r="6" fill={ELECTRON} />
            <circle cx="360" cy="145" r="6" fill={ELECTRON} />
            <circle cx="360" cy="170" r="6" fill={ELECTRON} />

            <text x="395" y="200" fill={ELECTRON} fontSize="12" textAnchor="middle">víc fotonů = víc e⁻</text>
          </svg>
        </Figure>
        <p>
          Všimni si: ve spodní řadě je <b>víc</b> elektronů, ale šipky (rychlosti) jsou{' '}
          <b>stejně dlouhé</b> jako nahoře. Silnější světlo stejné barvy nedělá rychlejší elektrony —
          jen jich je víc. To je jádro celé lekce.
        </p>
      </Section>

      <Section title="Krok za krokem: co dělá která změna">
        <p>Proklikej si tři scénáře a sleduj, co se mění a co zůstává — prvky se mezi kroky plynule zanimují.</p>
        <StepScene
          title="Zesílit světlo × změnit barvu"
          viewBox="0 0 440 210"
          captions={[
            <>
              Modré světlo dopadá na kov a vyráží 2 elektrony, každý má jistou rychlost (délka šipky).
              Foton má energii <M>{'h\\nu > A'}</M>.
            </>,
            <>
              Zdvojnásobím <b>intenzitu</b> (stejná barva): přiletí 2× víc fotonů → vyletí 2× víc
              elektronů. Ale rychlost (délka šipek) je <b>úplně stejná</b>! Energie elektronu na
              intenzitě nezávisí.
            </>,
            <>
              Vrátím intenzitu zpět, ale zvýším <b>frekvenci</b> (modřejší světlo). Počet elektronů
              zůstane stejný (2), ale každý dostane <b>víc energie</b> → šipky jsou <b>delší</b>{' '}
              (rychlejší elektrony), protože <M>{'E_{e} = h\\nu - A'}</M> vzrostlo.
            </>,
          ]}
        >
          {/* hrot šipky s pevnou velikostí (nezávisí na strokeWidth) */}
          <defs>
            <marker id="ar43b" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
              <path d="M0,0 L12,6 L0,12 z" fill={ELECTRON} />
            </marker>
          </defs>

          {/* kov (stálý) */}
          <ARect x={292} y={25} width={36} height={160} rx={4} fill={METAL} />
          <AText x={310} y={203} fill={MUTED} fontSize="13" textAnchor="middle">kov</AText>

          {/* fotony — p1, p2 jsou vždy; p3, p4 jen v kroku 2 (víc intenzity) */}
          <APath d={[photonD(150, 70), photonD(150, 50), photonD(138, 70)]} fill="none" stroke={ACCENT} strokeWidth={[1, 1, 1.6]} />
          <APath d={[photonD(150, 130), photonD(150, 160), photonD(138, 130)]} fill="none" stroke={ACCENT} strokeWidth={[1, 1, 1.6]} />
          <APath d={photonD(150, 90)} fill="none" stroke={ACCENT} strokeWidth={1} opacity={[0, 1, 0]} />
          <APath d={photonD(150, 120)} fill="none" stroke={ACCENT} strokeWidth={1} opacity={[0, 1, 0]} />

          {/* elektrony (kolečko + šipka rychlosti) — e1, e2 vždy; e3, e4 jen krok 2 */}
          <ALine x1={332} y1={[70, 50, 70]} x2={[395, 395, 425]} y2={[70, 50, 70]} stroke={ELECTRON} strokeWidth={3} markerEnd="url(#ar43b)" />
          <ALine x1={332} y1={[130, 160, 130]} x2={[395, 395, 425]} y2={[130, 160, 130]} stroke={ELECTRON} strokeWidth={3} markerEnd="url(#ar43b)" />
          <ALine x1={332} y1={90} x2={395} y2={90} stroke={ELECTRON} strokeWidth={3} markerEnd="url(#ar43b)" opacity={[0, 1, 0]} />
          <ALine x1={332} y1={120} x2={395} y2={120} stroke={ELECTRON} strokeWidth={3} markerEnd="url(#ar43b)" opacity={[0, 1, 0]} />

          <ACircle cx={336} cy={[70, 50, 70]} r={5} fill={ELECTRON} />
          <ACircle cx={336} cy={[130, 160, 130]} r={5} fill={ELECTRON} />
          <ACircle cx={336} cy={90} r={5} fill={ELECTRON} opacity={[0, 1, 0]} />
          <ACircle cx={336} cy={120} r={5} fill={ELECTRON} opacity={[0, 1, 0]} />

          {/* popisky fotonů (vlevo dole) — jen jeden viditelný v daném kroku */}
          <AText x={110} y={198} fill={ACCENT} fontSize="14" textAnchor="middle" opacity={[1, 0, 0]}>2 fotony</AText>
          <AText x={110} y={198} fill={ACCENT} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>4 fotony</AText>
          <AText x={120} y={198} fill={ACCENT} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>2 energičtější fotony</AText>

          {/* popisky elektronů (vpravo) */}
          <AText x={388} y={158} fill={ELECTRON} fontSize="14" textAnchor="middle" opacity={[1, 0, 0]}>2 e⁻</AText>
          <AText x={395} y={203} fill={ELECTRON} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>4 e⁻</AText>
          <AText x={388} y={158} fill={ELECTRON} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>2 rychlejší e⁻</AText>
        </StepScene>
      </Section>

      <Section title="Mezní frekvence a mezní vlnová délka">
        <p>
          Když je foton moc slabý, jeho energie nestačí ani na zaplacení výstupní práce —{' '}
          <M>{'h\\nu < A'}</M> — a <b>nevyletí ani jeden elektron</b>, i kdybys svítil jak silně chceš.
          Hranice je <Term id="mezni-frekvence">mezní frekvence</Term> <M>{'\\nu_0'}</M>, kde foton akorát zaplatí <M>{'A'}</M> a
          elektronu nezbude nic:
        </p>
        <MB>{'h\\nu_0 = A \\quad\\Rightarrow\\quad \\nu_0 = \\frac{A}{h}'}</MB>
        <p>
          Stejnou hranici lze zapsat přes <Concept id="vlnova-delka">vlnovou délku</Concept>. Protože vyšší frekvence = kratší vlna
          (<M>{'\\lambda = c/\\nu'}</M>), existuje <Term id="mezni-vlnova-delka">mezní vlnová délka</Term> <M>{'\\lambda_0'}</M> —{' '}
          <b>nejdelší</b> vlna, která fotoefekt ještě vyvolá:
        </p>
        <MB>{'\\lambda_0 = \\frac{c}{\\nu_0} = \\frac{h c}{A}'}</MB>
        <Figure caption="Pod mezní frekvencí (vlevo) se neděje nic. Nad ní (vpravo) elektrony letí a tím víc, čím výš nad ν₀ jsi.">
          <svg viewBox="0 0 440 180" className="svg-fig">
            <Defs color={ELECTRON} id="arm" />
            {/* osa frekvence */}
            <line x1="30" y1="150" x2="410" y2="150" stroke={MUTED} strokeWidth="2" markerEnd="url(#arm)" />
            <text x="410" y="170" fill={MUTED} fontSize="12" textAnchor="end">frekvence ν</text>
            {/* mez */}
            <line x1="200" y1="40" x2="200" y2="150" stroke={ACCENT} strokeWidth="2" strokeDasharray="5 4" />
            <text x="200" y="32" fill={ACCENT} fontSize="13" textAnchor="middle">ν₀ (mez)</text>
            {/* zóna nic */}
            <text x="115" y="100" fill={MUTED} fontSize="13" textAnchor="middle">ν &lt; ν₀</text>
            <text x="115" y="120" fill={MUTED} fontSize="12" textAnchor="middle">žádné e⁻</text>
            {/* zóna emise: stoupající Emax */}
            <line x1="235" y1="135" x2="262" y2="108" stroke={ELECTRON} strokeWidth="3" />
            <line x1="290" y1="135" x2="325" y2="83" stroke={ELECTRON} strokeWidth="3" />
            <line x1="345" y1="135" x2="392" y2="58" stroke={ELECTRON} strokeWidth="3" />
            <text x="300" y="44" fill={ELECTRON} fontSize="13" textAnchor="middle">ν &gt; ν₀: roste Eₑ</text>
          </svg>
        </Figure>
        <p>
          Pozor na směr: <b>vyšší frekvence ↔ kratší vlnová délka</b>. Takže „mezní“ frekvence je{' '}
          <i>nejnižší</i> možná, ale mezní <i>vlnová délka</i> je <i>nejdelší</i> možná. U zkoušky se na
          tom dá snadno seknout.
        </p>
      </Section>

      <Section title="Drilovací tabulka: co se stane, když…">
        <p>
          Tohle je esence celé lekce. Projeď si všechny řádky a uměj na ně odpovědět bez přemýšlení.
          <span style={{ color: ELECTRON }}> Počet</span> hlídá intenzita,
          <span style={{ color: ACCENT }}> energii/rychlost</span> hlídá frekvence.
        </p>
        <ul className="biglist">
          <li>
            <b>Zvýším intenzitu (stejná barva):</b> víc elektronů (větší fotoproud),{' '}
            <b>rychlost beze změny</b>.
          </li>
          <li>
            <b>Snížím intenzitu:</b> méně elektronů, rychlost beze změny. (Při velmi slabém světle pořád
            vyletí, jen málo — fotoefekt nemá „práh intenzity“.)
          </li>
          <li>
            <b>Zvýším frekvenci (nad <M>{'\\nu_0'}</M>):</b> elektrony rychlejší (vyšší <M>{'E_e'}</M>),
            <b> počet se nemění</b>.
          </li>
          <li>
            <b>Snížím frekvenci, ale pořád <M>{'\\nu > \\nu_0'}</M>:</b> elektrony pomalejší, počet stejný.
          </li>
          <li>
            <b>Klesnu pod <M>{'\\nu_0'}</M>:</b> <b>nevyletí nic</b>, ať intenzitu zvedneš jak chceš.
          </li>
          <li>
            <b>Použiju delší vlnovou délku než <M>{'\\lambda_0'}</M>:</b> totéž — <b>nic</b> (delší vlna =
            nižší frekvence).
          </li>
          <li>
            <b>Zdvojnásobím intenzitu i frekvenci:</b> víc elektronů <i>a</i> zároveň rychlejších —
            obě páčky najednou.
          </li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>Rychlost (energie) elektronů NEzávisí na intenzitě</b> — závisí jen na frekvenci. Klasická
            otázka „zesílím světlo, poletí elektrony rychleji?“ → <b>NE</b>, jen jich poletí víc.
          </li>
          <li>
            <b>Víc intenzity = víc elektronů, ne rychlejších.</b> Nepleť „silnější světlo“ s „energičtějšími
            elektrony“.
          </li>
          <li>
            <b>Pod mezní frekvencí se neuvolní žádný elektron</b>, ať svítíš jakkoli silně. Žádné množství
            slabých fotonů se nesečte do jednoho velkého — interaguje vždy <M>{'1'}</M> foton s <M>{'1'}</M> elektronem.
          </li>
          <li>
            Mezní <b>vlnová délka</b> je <i>nejdelší</i> (ne nejkratší!) vlna, co ještě funguje — protože
            delší vlna znamená nižší frekvenci.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Odpovědět na libovolnou variantu: intenzita mění POČET elektronů, frekvence mění ENERGII (rychlost).',
          'Vědět, že rychlost/energie elektronů NEzávisí na intenzitě, jen na frekvenci.',
          'Vysvětlit, že pod mezní frekvencí se neuvolní žádný elektron bez ohledu na intenzitu.',
          'Napsat ν₀ = A/h a λ₀ = hc/A a vědět, že λ₀ je nejdelší funkční vlnová délka.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Zesílíš dopadající světlo (stejná barva). Co se stane s rychlostí vyletujících elektronů a co s jejich počtem?',
            a: (
              <>
                Rychlost (energie) se <b>nezmění</b> — ta závisí jen na frekvenci. Změní se{' '}
                <b>počet</b>: vyletí víc elektronů, takže vzroste fotoproud.
              </>
            ),
          },
          {
            q: 'Svítíš na kov velmi silným světlem, ale jeho frekvence je pod mezní frekvencí ν₀. Vyletí elektrony?',
            a: (
              <>
                <b>Ne, ani jeden.</b> Když <M>{'h\\nu < A'}</M>, jeden foton nemá dost energie na vytržení
                elektronu, a fotony se nesčítají (1 foton ↔ 1 elektron). Intenzita s tím nic nezmůže.
              </>
            ),
          },
          {
            q: 'Jak se změní energie elektronů, když zvýšíš frekvenci dopadajícího světla (nad ν₀)?',
            a: (
              <>
                Vzroste: z <M>{'E_e = h\\nu - A'}</M> plyne, že vyšší <M>{'\\nu'}</M> dá elektronu víc
                energie → letí rychleji. Počet elektronů se přitom nemění.
              </>
            ),
          },
          {
            q: 'Napiš vztah pro mezní vlnovou délku a řekni, jestli kratší, nebo delší vlny fotoefekt vyvolají.',
            a: (
              <>
                <M>{'\\lambda_0 = \\dfrac{h c}{A}'}</M>. Fotoefekt vyvolají <b>kratší</b> vlny než{' '}
                <M>{'\\lambda_0'}</M> (kratší vlna = vyšší frekvence = energičtější foton). Delší vlny
                nefungují.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
