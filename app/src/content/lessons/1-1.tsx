import { Section, M, MB, Concept, Term, Figure, StepScene, ACircle, ALine, AText, AGroup, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.1'

/* Malá pomůcka: šipka pro SVG (definice markeru). */
function Defs({ color }: { color: string }) {
  return (
    <defs>
      <marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const GROUND = '#3a4566'
const STEEL = '#9aa6c4'
const BALL = '#f59e0b'
const FORCE = '#fb7185'
const TXT = '#e8ecf8'

function Cannon({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="0" y="120" width="70" height="34" rx="6" fill={STEEL} />
      <rect x="55" y="128" width="46" height="16" rx="4" fill={STEEL} />
      <circle cx="18" cy="158" r="9" fill="#42506f" />
      <circle cx="52" cy="158" r="9" fill="#42506f" />
    </g>
  )
}

export default function Lesson_1_1() {
  return (
    <>
      <p className="lead">
        Tohle je úplný základ celé mechaniky — a hezky se to učí, protože za tím nejsou žádné
        kouzla, jen <Term>tři věty</Term> a jeden vzoreček. Když je budeš umět vysvětlit a dát ke
        každé příklad, máš první body jisté.
      </p>

      <Section title="Síla a hmotný bod — domluvme se na pojmech">
        <p>
          <Term id="sila">Síla</Term> je <Term>vektorová</Term> veličina: má velikost i směr.
          Měří se v newtonech, <M>{'[\\,\\mathrm{N}\\,] = \\mathrm{kg\\,m\\,s^{-2}}'}</M>. Síla je
          „příčina", proč se pohyb mění (zrychluje, brzdí, zatáčí) nebo proč se těleso deformuje.
        </p>
        <p>
          Abychom to měli jednoduché, často nahradíme těleso{' '}
          <Term id="hmotny-bod">hmotným bodem</Term> — bodem, do kterého soustředíme celou
          hmotnost a jehož rozměry zanedbáme (rozměry tělesa jsou mnohem menší než vzdálenosti děje).
        </p>
      </Section>

      <Section title="Tři Newtonovy zákony">
        <p>Celé to stojí na <Term id="newtonovy-zakony">třech Newtonových zákonech</Term>:</p>

        <ol className="biglist">
          <li>
            <b>1. zákon (setrvačnosti).</b> Těleso, na které nepůsobí žádná výslednice sil, zůstává
            v klidu nebo v rovnoměrném přímočarém pohybu. (Sám od sebe nezačne zrychlovat ani
            zatáčet.)
          </li>
          <li>
            <b>2. zákon (síla a zrychlení).</b> Výslednice sil udává tělesu zrychlení. Píše se{' '}
            <Term id="pohybova-rovnice">pohybovou rovnicí</Term>:
            <MB>{'\\vec{F} = m\\,\\vec{a} = \\frac{\\mathrm{d}\\vec{p}}{\\mathrm{d}t}'}</MB>
            kde <M>{'\\vec{p}=m\\vec{v}'}</M> je <Concept id="hybnost">hybnost</Concept>. Tvar přes{' '}
            <M>{'\\mathrm{d}\\vec p/\\mathrm{d}t'}</M> je obecnější (platí, i když se mění hmotnost).
          </li>
          <li>
            <b>3. zákon (akce a reakce).</b> Působím-li na něco silou, působí to na mě stejně velkou
            silou opačného směru. Důležité: <Term>každá z těch dvou sil působí na jiné těleso</Term>.
          </li>
        </ol>
      </Section>

      <Section title="3. zákon názorně: výstřel z děla">
        <p>
          Nejlíp si akci a reakci zapamatuješ na zpětném rázu. Klikej <b>Další →</b>:
        </p>

        <StepScene
          title="Akce a reakce při výstřelu"
          viewBox="0 0 420 180"
          captions={[
            <>Dělo i koule jsou v klidu. Celková <Concept id="hybnost">hybnost</Concept> soustavy je nulová.</>,
            <>Výstřel: na kouli působí síla doprava (<i>akce</i>), na dělo stejně velká síla doleva (<i>reakce</i>) — <b>každá na jiné těleso</b>.</>,
            <>Hybnosti jsou stejně velké a opačné, takže se sečtou na nulu: <M>{'\\vec p_{\\text{koule}} + \\vec p_{\\text{dělo}} = 0'}</M>. Proto dělo couvne.</>,
          ]}
        >
          {/* markery šipek (3 barvy) */}
          <defs>
            <marker id="arF" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={FORCE} /></marker>
            <marker id="arB" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={BALL} /></marker>
            <marker id="arS" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={STEEL} /></marker>
          </defs>

          {/* zem (statická) */}
          <ALine x1={0} y1={167} x2={420} y2={167} stroke={GROUND} strokeWidth={3} />

          {/* dělo se odsouvá doleva (zpětný ráz) */}
          <AGroup x={[150, 120, 95]}><Cannon x={0} /></AGroup>

          {/* koule jede doprava */}
          <ACircle cx={[258, 300, 330]} cy={136} r={11} fill={BALL} />

          {/* krok 1: klid */}
          <AText x={210} y={40} fill={TXT} fontSize="15" textAnchor="middle" opacity={[1, 0, 0]}>klid: p = 0</AText>

          {/* krok 2: akce / reakce */}
          <ALine x1={318} y1={136} x2={392} y2={136} stroke={FORCE} strokeWidth={4} markerEnd="url(#arF)" opacity={[0, 1, 0]} />
          <AText x={356} y={120} fill={FORCE} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>akce</AText>
          <ALine x1={150} y1={100} x2={78} y2={100} stroke={FORCE} strokeWidth={4} markerEnd="url(#arF)" opacity={[0, 1, 0]} />
          <AText x={112} y={90} fill={FORCE} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>reakce</AText>

          {/* krok 3: hybnosti + součet 0 */}
          <ALine x1={300} y1={62} x2={372} y2={62} stroke={BALL} strokeWidth={5} markerEnd="url(#arB)" opacity={[0, 0, 1]} />
          <AText x={336} y={50} fill={BALL} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>p (koule)</AText>
          <ALine x1={150} y1={62} x2={88} y2={62} stroke={STEEL} strokeWidth={5} markerEnd="url(#arS)" opacity={[0, 0, 1]} />
          <AText x={119} y={50} fill={STEEL} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>p (dělo)</AText>
          <AText x={210} y={152} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 0, 1]}>součet = 0</AText>
        </StepScene>
      </Section>

      <Section title="Příklad ke každému zákonu (přesně tohle chce zkoušející)">
        <Figure caption="Druhý zákon: výslednice síly F dává tělesu zrychlení a ve svém směru.">
          <svg viewBox="0 0 360 110" className="svg-fig">
            <Defs color={FORCE} />
            <rect x="40" y="44" width="58" height="40" rx="6" fill={STEEL} />
            <text x="69" y="69" fill="#0b1020" fontSize="16" textAnchor="middle" fontWeight="700">m</text>
            <line x1="100" y1="64" x2="250" y2="64" stroke={FORCE} strokeWidth="5" markerEnd="url(#ar)" />
            <text x="180" y="50" fill={FORCE} fontSize="15" textAnchor="middle">F → a</text>
          </svg>
        </Figure>
        <ul>
          <li><b>1. zákon:</b> kniha na stole leží v klidu — síly se vyruší, nic ji nerozpohybuje.</li>
          <li><b>2. zákon:</b> volný pád — tíhová síla <M>{'F=mg'}</M> dává zrychlení <M>{'g'}</M>; nebo náboj v elektrickém poli.</li>
          <li><b>3. zákon:</b> střelec a puška — puška „kopne" dozadu (zpětný ráz).</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>U 3. zákona síly akce a reakce <b>působí na dvě různá tělesa</b> — proto se <b>neruší</b> (kdyby působily na totéž těleso, nic by se nehnulo).</li>
          <li>2. zákon napiš obecně přes <M>{'\\mathrm{d}\\vec p/\\mathrm{d}t'}</M>, nejen <M>{'F=ma'}</M> — působí to mnohem líp.</li>
          <li>Síla je <b>vektor</b> (má směr), proto u příkladů vždy řekni i směr.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vyjmenovat a vlastními slovy vysvětlit 3 Newtonovy zákony.',
          'Napsat 2. zákon pohybovou rovnicí F = m·a = dp/dt a popsat veličiny.',
          'Dát konkrétní příklad ke každému ze tří zákonů.',
          'Vědět, že síla je vektor a měří se v newtonech [N].',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Proč se síly akce a reakce navzájem nevyruší, i když jsou stejně velké a opačné?',
            a: <>Protože <b>každá působí na jiné těleso</b> (jedna na dělo, druhá na kouli). Vyrušily by se jen síly působící na totéž těleso.</>,
          },
          {
            q: <>Jak obecně zapíšeš 2. Newtonův zákon a co znamenají symboly?</>,
            a: <><M>{'\\vec F = \\mathrm{d}\\vec p/\\mathrm{d}t'}</M>, kde <M>{'\\vec p=m\\vec v'}</M> je hybnost; výslednice síly se rovná časové změně hybnosti. Pro stálou hmotnost přejde na <M>{'\\vec F=m\\vec a'}</M>.</>,
          },
          {
            q: 'V jaké jednotce se udává síla a je to skalár, nebo vektor?',
            a: <>V newtonech <M>{'[\\mathrm N]=\\mathrm{kg\\,m\\,s^{-2}}'}</M>; síla je <b>vektor</b>.</>,
          },
        ]}
      />
    </>
  )
}
