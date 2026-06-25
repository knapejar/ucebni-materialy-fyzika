import { Section, M, MB, Concept, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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
          <Concept id="sila">Síla</Concept> je <Term>vektorová</Term> veličina: má velikost i směr.
          Měří se v newtonech, <M>{'[\\,\\mathrm{N}\\,] = \\mathrm{kg\\,m\\,s^{-2}}'}</M>. Síla je
          „příčina", proč se pohyb mění (zrychluje, brzdí, zatáčí) nebo proč se těleso deformuje.
        </p>
        <p>
          Abychom to měli jednoduché, často nahradíme těleso{' '}
          <Concept id="hmotny-bod">hmotným bodem</Concept> — bodem, do kterého soustředíme celou
          hmotnost a jehož rozměry zanedbáme (rozměry tělesa jsou mnohem menší než vzdálenosti děje).
        </p>
      </Section>

      <Section title="Tři Newtonovy zákony">
        <p>Celé to stojí na <Concept id="newtonovy-zakony">třech Newtonových zákonech</Concept>:</p>

        <ol className="biglist">
          <li>
            <b>1. zákon (setrvačnosti).</b> Těleso, na které nepůsobí žádná výslednice sil, zůstává
            v klidu nebo v rovnoměrném přímočarém pohybu. (Sám od sebe nezačne zrychlovat ani
            zatáčet.)
          </li>
          <li>
            <b>2. zákon (síla a zrychlení).</b> Výslednice sil udává tělesu zrychlení. Píše se{' '}
            <Concept id="pohybova-rovnice">pohybovou rovnicí</Concept>:
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

        <StepFigure
          title="Akce a reakce při výstřelu"
          steps={[
            {
              label: 'klid',
              caption: <>Dělo i koule jsou v klidu. Celková <Concept id="hybnost">hybnost</Concept> soustavy je nulová.</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={FORCE} />
                  <line x1="0" y1="167" x2="420" y2="167" stroke={GROUND} strokeWidth="3" />
                  <Cannon x={150} />
                  <circle cx={258} cy={136} r="11" fill={BALL} />
                  <text x="210" y="40" fill={TXT} fontSize="15" textAnchor="middle">klid: p = 0</text>
                </svg>
              ),
            },
            {
              label: 'výstřel',
              caption: <>Výstřel: na kouli působí síla doprava (<i>akce</i>), na dělo stejně velká síla doleva (<i>reakce</i>) — <b>každá na jiné těleso</b>.</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={FORCE} />
                  <line x1="0" y1="167" x2="420" y2="167" stroke={GROUND} strokeWidth="3" />
                  <Cannon x={120} />
                  <circle cx={300} cy={136} r="11" fill={BALL} />
                  <line x1="265" y1="136" x2="345" y2="136" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar)" />
                  <text x="320" y="120" fill={FORCE} fontSize="14" textAnchor="middle">akce</text>
                  <line x1="150" y1="100" x2="80" y2="100" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar)" />
                  <text x="110" y="90" fill={FORCE} fontSize="14" textAnchor="middle">reakce</text>
                </svg>
              ),
            },
            {
              label: 'hybnosti',
              caption: <>Hybnosti jsou stejně velké a opačné, takže se sečtou na nulu: <M>{'\\vec p_{\\text{koule}} + \\vec p_{\\text{dělo}} = 0'}</M>. Proto dělo couvne.</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={BALL} />
                  <line x1="0" y1="167" x2="420" y2="167" stroke={GROUND} strokeWidth="3" />
                  <Cannon x={95} />
                  <circle cx={330} cy={136} r="11" fill={BALL} />
                  <line x1="300" y1="60" x2="360" y2="60" stroke={BALL} strokeWidth="5" markerEnd="url(#ar)" />
                  <text x="330" y="48" fill={BALL} fontSize="14" textAnchor="middle">p (koule)</text>
                  <line x1="150" y1="60" x2="90" y2="60" stroke={STEEL} strokeWidth="5" markerEnd="url(#ar)" />
                  <text x="120" y="48" fill={STEEL} fontSize="14" textAnchor="middle">p (dělo)</text>
                  <text x="210" y="150" fill={TXT} fontSize="13" textAnchor="middle">součet = 0</text>
                </svg>
              ),
            },
          ]}
        />
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
