import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.1'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'dualismus': { lesson: '4.1', label: 'korpuskulárně-vlnový dualismus', short: 'Objekty mikrosvěta se chovají jednou jako vlny, jindy jako částice — nikdy zároveň při jednom ději.' },
  'foton': { lesson: '4.1', label: 'foton', short: 'Kvantum elektromagnetického pole; nulová klidová hmotnost, letí rychlostí c, energie E = hν.' },
  'de-broglieho-vlna': { lesson: '4.1', label: 'de Broglieho vlna', short: 'Vlnová délka přiřazená každé částici: λ = h/p. Klesá s rostoucí hybností.' },
  'planckova-konstanta': { lesson: '4.1', label: 'Planckova konstanta', short: 'h ≈ 6,63·10⁻³⁴ J·s — hranice mezi makrosvětem a mikrosvětem; vystupuje v E = hν i λ = h/p.' },
  'dvojsterbinovy-experiment': { lesson: '4.1', label: 'experiment se dvěma štěrbinami', short: 'Klíčový pokus dualismu: za dvěma štěrbinami vzniká interferenční obrazec (vlna), ale dopady jsou bodové (částice).' },
}

const ACC = '#f472b6'   // akcent tématu
const TXT = '#e8ecf8'
const MUTED = '#9aa6c4'
const WALL = '#3a4566'
const WAVE = '#f472b6'
const PART = '#f59e0b'
const SCREEN = '#9aa6c4'

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

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tohle je vstupní brána do kvantové fyziky a u zkoušky padá skoro vždycky. Stačí pochopit
        jednu myšlenku — <Term>jednou vlna, jednou částice, ale nikdy obojí zároveň</Term> — a umět
        tři vzorečky kolem fotonu. Pak máš body jisté.
      </p>

      <Section title="O co jde: dualismus jednou větou">
        <p>
          <Term id="dualismus">Korpuskulárně-vlnový dualismus</Term> (korpuskulární = částicový) říká, že objekty
          mikrosvěta — foton, elektron — se <b>jednou chovají jako vlna</b> (interferují, ohýbají se)
          a <b>jindy jako částice</b> (dopadnou na jediné místo jako kulička). Která stránka se ukáže,
          rozhoduje to, <i>jaké měření na ně pustíme</i>.
        </p>
        <p>
          Nejdůležitější věta celé lekce, a oblíbený chyták: <Term>žádný děj neukazuje obě
          vlastnosti současně</Term>. Buď vidíš vlnu, nebo částici — nikdy obojí naráz.
        </p>
        <Callout kind="chytak" title="Klasický chyták zkoušejícího">
          <p>
            „Při jakém ději se objekt chová <b>zároveň</b> jako vlna i částice?“ Správná odpověď:{' '}
            <b>při žádném.</b> Obě vlastnosti byly experimentálně prokázány, ale není znám děj, kde by
            se pozorovaly <i>současně</i>.
          </p>
        </Callout>
      </Section>

      <Section title="Tři analogické experimenty se dvěma štěrbinami">
        <p>
          Dualismus se nejlíp ukáže na <Term id="dvojsterbinovy-experiment">experimentu se dvěma štěrbinami</Term> (stěna se dvěma
          otvory, za ní stínítko). Srovnáváme tři situace: klasické <b>kuličky</b>, klasické{' '}
          <b>vlny</b> (třeba na vodě) a <b>elektrony</b>.
        </p>

        <Figure caption="Kuličky (žluté) létají po přímkách a dopadnou bodově za štěrbinou. Vlny (růžové) se za každou štěrbinou šíří do oblouků, oba oblouky se překryjí a na stínítku vznikne interferenční obrazec (proužky). Elektron dělá obojí: dopadá bodově jako kulička, ale po mnoha dopadech složí proužky jako vlna.">
          <svg viewBox="0 0 460 260" className="svg-fig">
            <Defs color={PART} id="arP" />
            {/* stěna se dvěma štěrbinami */}
            <line x1="150" y1="20" x2="150" y2="95" stroke={WALL} strokeWidth="6" />
            <line x1="150" y1="120" x2="150" y2="145" stroke={WALL} strokeWidth="6" />
            <line x1="150" y1="170" x2="150" y2="245" stroke={WALL} strokeWidth="6" />
            <text x="150" y="14" fill={MUTED} fontSize="11" textAnchor="middle">2 štěrbiny</text>
            {/* stínítko */}
            <line x1="420" y1="20" x2="420" y2="245" stroke={SCREEN} strokeWidth="4" />
            <text x="420" y="14" fill={MUTED} fontSize="11" textAnchor="middle">stínítko</text>

            {/* kuličky: přímé dráhy skrz štěrbiny */}
            <line x1="20" y1="108" x2="146" y2="108" stroke={PART} strokeWidth="2.5" />
            <line x1="154" y1="108" x2="416" y2="70" stroke={PART} strokeWidth="2.5" markerEnd="url(#arP)" />
            <line x1="20" y1="158" x2="146" y2="158" stroke={PART} strokeWidth="2.5" />
            <line x1="154" y1="158" x2="416" y2="196" stroke={PART} strokeWidth="2.5" markerEnd="url(#arP)" />
            <circle cx="416" cy="70" r="4" fill={PART} />
            <circle cx="416" cy="196" r="4" fill={PART} />
            <text x="60" y="100" fill={PART} fontSize="11">kuličky</text>

            {/* vlny: oblouky z obou štěrbin */}
            <g fill="none" stroke={WAVE} strokeWidth="1.6" opacity="0.9">
              <path d="M150,108 a22,22 0 0 1 0,0" />
              <path d="M154,90 a30,30 0 0 1 0,36" />
              <path d="M154,82 a44,44 0 0 1 0,52" />
              <path d="M154,74 a58,58 0 0 1 0,68" />
              <path d="M154,158 a30,30 0 0 1 0,36" />
              <path d="M154,150 a44,44 0 0 1 0,52" />
              <path d="M154,142 a58,58 0 0 1 0,68" />
            </g>
            {/* interferenční proužky na stínítku */}
            <g fill={WAVE}>
              <rect x="412" y="40" width="8" height="16" rx="2" opacity="0.9" />
              <rect x="412" y="78" width="8" height="22" rx="2" />
              <rect x="412" y="118" width="8" height="16" rx="2" opacity="0.7" />
              <rect x="412" y="150" width="8" height="22" rx="2" />
              <rect x="412" y="194" width="8" height="16" rx="2" opacity="0.9" />
            </g>
            <text x="372" y="234" fill={WAVE} fontSize="11" textAnchor="end">interferenční proužky</text>
          </svg>
        </Figure>

        <ul>
          <li>
            <b>Kuličky (klasické částice).</b> Letí rovně, projdou jednou ze štěrbin a dopadnou{' '}
            <b>bodově</b>. Žádné proužky — jen dva chumly za štěrbinami.
          </li>
          <li>
            <b>Vlny.</b> Za každou štěrbinou se šíří do oblouků, oba se překryjí a{' '}
            <Concept id="interference">interferují</Concept> — na stínítku vznikne pruhovaný obrazec (světlá/tmavá místa).
          </li>
          <li>
            <b>Elektrony.</b> Každý dopadne <i>bodově</i> jako kulička, ale když jich pošleš spoustu,
            jejich dopady složí <i>interferenční proužky</i> jako vlna. A nejlíp to ukáže další
            obrázek.
          </li>
        </ul>
      </Section>

      <Section title="Pozorování změní výsledek (a proč to není ‚zároveň‘)">
        <p>
          Tahle část je srdce dualismu. Posíláme <b>elektrony jeden po druhém</b> a koukáme, co
          udělá, když se podíváme (změříme), kterou štěrbinou prošly. Klikej <b>Další →</b>.
        </p>

        <StepFigure
          title="Elektron: nepozorovaný = vlna, pozorovaný = částice"
          steps={[
            {
              label: 'nepozorujeme',
              caption: (
                <>
                  Nedíváme se, kterou štěrbinou elektron prošel. Chová se jako <b>vlna</b>: projde
                  „oběma najednou“ a sám se sebou interferuje.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs color={PART} id="arS1" />
                  <line x1="140" y1="20" x2="140" y2="80" stroke={WALL} strokeWidth="6" />
                  <line x1="140" y1="100" x2="140" y2="120" stroke={WALL} strokeWidth="6" />
                  <line x1="140" y1="140" x2="140" y2="200" stroke={WALL} strokeWidth="6" />
                  <line x1="390" y1="20" x2="390" y2="200" stroke={SCREEN} strokeWidth="4" />
                  {/* dopadající elektron */}
                  <text x="30" y="105" fill={PART} fontSize="13" fontWeight="700">e⁻</text>
                  <line x1="50" y1="110" x2="136" y2="110" stroke={PART} strokeWidth="2.5" markerEnd="url(#arS1)" />
                  {/* vlny z obou štěrbin */}
                  <g fill="none" stroke={WAVE} strokeWidth="1.6">
                    <path d="M144,70 a34,34 0 0 1 0,40" />
                    <path d="M144,62 a50,50 0 0 1 0,56" />
                    <path d="M144,150 a34,34 0 0 1 0,-40" />
                    <path d="M144,158 a50,50 0 0 1 0,-56" />
                  </g>
                  <g fill={WAVE}>
                    <rect x="382" y="40" width="8" height="14" rx="2" opacity="0.8" />
                    <rect x="382" y="74" width="8" height="20" rx="2" />
                    <rect x="382" y="104" width="8" height="14" rx="2" opacity="0.6" />
                    <rect x="382" y="132" width="8" height="20" rx="2" />
                    <rect x="382" y="166" width="8" height="14" rx="2" opacity="0.8" />
                  </g>
                  <text x="265" y="214" fill={WAVE} fontSize="11" textAnchor="middle">→ proužky = interference (vlna)</text>
                </svg>
              ),
            },
            {
              label: 'pozorujeme',
              caption: (
                <>
                  Dáme k otvorům detektor (světlo) a sledujeme, kudy elektron prošel. Tím už se chová
                  jako <b>částice</b>: projde jednou konkrétní štěrbinou.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs color={PART} id="arS2" />
                  <line x1="140" y1="20" x2="140" y2="80" stroke={WALL} strokeWidth="6" />
                  <line x1="140" y1="100" x2="140" y2="120" stroke={WALL} strokeWidth="6" />
                  <line x1="140" y1="140" x2="140" y2="200" stroke={WALL} strokeWidth="6" />
                  <line x1="390" y1="20" x2="390" y2="200" stroke={SCREEN} strokeWidth="4" />
                  <text x="30" y="85" fill={PART} fontSize="13" fontWeight="700">e⁻</text>
                  <line x1="50" y1="90" x2="136" y2="90" stroke={PART} strokeWidth="2.5" />
                  {/* detektor / oko u horní štěrbiny */}
                  <circle cx="160" cy="62" r="11" fill="none" stroke={ACC} strokeWidth="2" />
                  <circle cx="160" cy="62" r="3.5" fill={ACC} />
                  <text x="178" y="50" fill={ACC} fontSize="11">detektor</text>
                  {/* záblesk u horní štěrbiny */}
                  <line x1="144" y1="90" x2="158" y2="68" stroke={ACC} strokeWidth="2" />
                  {/* elektron projde jako částice rovně */}
                  <line x1="144" y1="90" x2="386" y2="78" stroke={PART} strokeWidth="2.5" markerEnd="url(#arS2)" />
                  <circle cx="386" cy="78" r="4" fill={PART} />
                  <text x="265" y="214" fill={PART} fontSize="11" textAnchor="middle">→ bodový dopad = částice (proužky zmizí)</text>
                </svg>
              ),
            },
            {
              label: 'závěr',
              caption: (
                <>
                  Pointa: v jednom uspořádání vidíš <b>buď</b> vlnu, <b>nebo</b> částici. Nikdy obojí
                  zároveň — proto „dualismus“ neznamená „současně“.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <text x="110" y="50" fill={WAVE} fontSize="14" textAnchor="middle" fontWeight="700">nepozoruji</text>
                  <text x="110" y="74" fill={TXT} fontSize="12" textAnchor="middle">⇒ vlna (proužky)</text>
                  <text x="310" y="50" fill={PART} fontSize="14" textAnchor="middle" fontWeight="700">pozoruji</text>
                  <text x="310" y="74" fill={TXT} fontSize="12" textAnchor="middle">⇒ částice (bod)</text>
                  <line x1="210" y1="30" x2="210" y2="110" stroke={MUTED} strokeWidth="1.5" strokeDasharray="5 5" />
                  <text x="210" y="160" fill={ACC} fontSize="15" textAnchor="middle" fontWeight="700">nikdy obojí ZÁROVEŇ</text>
                  <text x="210" y="186" fill={MUTED} fontSize="12" textAnchor="middle">to je celý dualismus</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Foton — kvantum elektromagnetického pole">
        <p>
          <Term id="foton">Foton</Term> je <b>kvantum (nejmenší porce) elektromagnetického pole</b> — částice
          světla. Tři věci, které o něm musíš umět vysypat:
        </p>
        <ul>
          <li><b>Nulová klidová hmotnost</b> (a tedy nulová klidová energie). Foton nikdy „nestojí“.</li>
          <li>Vždy se pohybuje <b>rychlostí světla</b> <M>{'c'}</M>.</li>
          <li>Nese energii <M>{'E = h\\nu'}</M> a <Concept id="hybnost">hybnost</Concept> <M>{'p = E/c = h/\\lambda'}</M>.</li>
        </ul>
        <p>
          I když má foton nulovou <i>klidovou</i> hmotnost, díky své energii má <Term>relativistickou
          hmotnost</Term> <M>{'m = E/c^2'}</M> — z toho plyne i jeho hybnost. Konstanta{' '}
          <Term>h</Term> (<Term id="planckova-konstanta">Planckova konstanta</Term>) je doslova „hranice mezi makrosvětem a
          mikrosvětem“.
        </p>
        <MB>{'E = h\\nu = \\frac{h c}{\\lambda} \\qquad p = \\frac{E}{c} = \\frac{h}{\\lambda} \\qquad m = \\frac{E}{c^2}'}</MB>
        <p>
          (<M>{'\\nu'}</M> je frekvence, <M>{'\\lambda'}</M> <Concept id="vlnova-delka">vlnová délka</Concept>; platí <M>{'c = \\lambda\\nu'}</M>.)
        </p>
      </Section>

      <Section title="Energie fotonu: roste s frekvencí, klesá s vlnovou délkou">
        <p>
          Tady číhá nejčastější početní chyták. Ze vztahů <M>{'E = h\\nu'}</M> a{' '}
          <M>{'E = hc/\\lambda'}</M> plyne:
        </p>
        <ul>
          <li><b>Vyšší frekvence</b> <M>{'\\nu'}</M> ⇒ <b>vyšší</b> energie (přímá úměra).</li>
          <li><b>Větší vlnová délka</b> <M>{'\\lambda'}</M> ⇒ <b>nižší</b> energie (nepřímá úměra).</li>
        </ul>

        <Figure caption="Modrý (krátkovlnný, vysokofrekvenční) foton nese víc energie než červený (dlouhovlnný, nízkofrekvenční). Krátká vlnová délka = vysoká energie.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            {/* červený foton - dlouhá vlna, málo E */}
            <path d="M20,45 q15,-18 30,0 t30,0 t30,0 t30,0 t30,0 t30,0"
              fill="none" stroke="#f87171" strokeWidth="3" />
            <text x="200" y="30" fill="#f87171" fontSize="12" textAnchor="middle">velká λ, malá ν → malá E</text>
            {/* modrý foton - krátká vlna, hodně E */}
            <path d="M20,115 q7.5,-16 15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0 t15,0"
              fill="none" stroke={ACC} strokeWidth="3" />
            <text x="200" y="138" fill={ACC} fontSize="12" textAnchor="middle">malá λ, velká ν → velká E</text>
          </svg>
        </Figure>

        <Callout kind="chytak" title="Pozor na směr úměry">
          <p>
            Energie <b>roste</b> s frekvencí (<M>{'E = h\\nu'}</M>), ale s vlnovou délkou{' '}
            <b>klesá</b> (<M>{'E = hc/\\lambda'}</M>). Spousta lidí omylem řekne, že delší vlna = víc
            energie — je to <b>přesně naopak</b>. Pomůcka: rentgen (krátká vlna) je nebezpečný, rádio
            (dlouhá vlna) ne.
          </p>
        </Callout>
      </Section>

      <Section title="De Broglieho vlna — i částice má vlnovou délku">
        <p>
          De Broglie přišel s odvážnou symetrií: když se vlna (foton) chová jako částice, ať se i{' '}
          <Term id="de-broglie"><b>každá částice chová jako vlna</b></Term>. Každé částici s hybností <M>{'p'}</M> přiřadil{' '}
          <Term id="de-broglieho-vlna">de Broglieho vlnovou délku</Term>:
        </p>
        <MB>{'\\lambda = \\frac{h}{p} \\qquad \\nu = \\frac{E}{h}'}</MB>
        <p>
          Z <M>{'\\lambda = h/p'}</M> hned vidíš: <b>čím větší hybnost, tím kratší vlnová délka</b>{' '}
          (nepřímá úměra). Proto je vlnová povaha vidět jen u lehkých rychlých částic (elektron),
          kdežto u dělové koule je <M>{'\\lambda'}</M> tak nepatrná, že se neprojeví — proto u běžných
          věcí kolem nás žádné vlnění nevnímáme.
        </p>
        <p>
          Energii přitom částice přenáší <Concept id="grupova-rychlost">grupovou rychlostí</Concept> <Concept id="vlnove-klubko">vlnového klubka</Concept>, a ta se
          rovná <b>rychlosti samotné částice</b> — vlnový popis tedy sedí na pohyb částice.
        </p>
        <Callout kind="tip" title="Typický zkouškový výpočet">
          <p>
            „<Concept id="kineticka-energie">Kinetická energie</Concept> elektronu vzroste 4×. Co udělá jeho de Broglieho vlnová délka?“ Pro
            nerelativistickou rychlost je <M>{'p = \\sqrt{2 m E_k}'}</M>, takže 4× větší{' '}
            <M>{'E_k'}</M> dá 2× větší <M>{'p'}</M>, a protože <M>{'\\lambda = h/p'}</M>, vlnová délka
            se <b>2× zmenší</b>.
          </p>
        </Callout>
      </Section>

      <Callout kind="chytak" title="Chytáky, na kterých se ztrácejí body">
        <ul>
          <li>
            „Kdy se objekt chová <b>zároveň</b> jako vlna i částice?“ → <b>Při žádném ději.</b> Vždy
            jen jedno, podle měření.
          </li>
          <li>
            Energie fotonu <b>roste</b> s frekvencí, ale <b>klesá</b> s vlnovou délkou — nezaměň směr
            úměry.
          </li>
          <li>
            Foton má <b>nulovou klidovou hmotnost</b>, ne nulovou hmotnost vůbec — má relativistickou
            hmotnost <M>{'m = E/c^2'}</M>.
          </li>
          <li>
            De Broglie: <M>{'\\lambda = h/p'}</M>, tedy <b>větší hybnost = kratší vlna</b> (ne delší).
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit dualismus a zdůraznit, že vlnové a částicové vlastnosti se nikdy neukážou zároveň.',
          'Popsat experiment se dvěma štěrbinami a co dělají kuličky, vlny a elektrony.',
          'Charakterizovat foton: kvantum elmag. pole, nulová klidová hmotnost, rychlost c, E = hν.',
          'Napsat de Broglieho vztahy λ = h/p a ν = E/h a vědět, že grupová rychlost = rychlost částice.',
          'Vědět, že E fotonu roste s frekvencí (E = hν) a klesá s vlnovou délkou (E = hc/λ).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Při jakém ději se objekt mikrosvěta chová zároveň jako vlna i jako částice?',
            a: <>Při <b>žádném.</b> Obě vlastnosti byly prokázány, ale není znám děj, kde by se pozorovaly <i>současně</i> — vždy se ukáže jen jedna podle toho, jak měříme.</>,
          },
          {
            q: <>Jaká je energie fotonu a jak závisí na frekvenci a vlnové délce?</>,
            a: <><M>{'E = h\\nu = hc/\\lambda'}</M>. S frekvencí <b>roste</b>, s vlnovou délkou <b>klesá</b>.</>,
          },
          {
            q: 'Jakou klidovou hmotnost má foton a jakou rychlostí se pohybuje?',
            a: <>Klidová hmotnost je <b>nulová</b>; foton se vždy pohybuje <b>rychlostí světla</b> <M>{'c'}</M>. Relativistickou hmotnost má <M>{'m = E/c^2'}</M>.</>,
          },
          {
            q: <>Kinetická energie elektronu vzroste 4×. Jak se změní jeho de Broglieho vlnová délka?</>,
            a: <>Protože <M>{'p = \\sqrt{2 m E_k}'}</M>, hybnost vzroste 2×, a z <M>{'\\lambda = h/p'}</M> se vlnová délka <b>2× zmenší</b>.</>,
          },
        ]}
      />
    </>
  )
}
