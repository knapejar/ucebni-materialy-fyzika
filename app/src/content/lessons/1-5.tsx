import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, AGroup, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.5'

/* Nové pojmy, které tato lekce poprvé vykládá (pro pozdější proklik). */
export const provides = {
  'teziste': { lesson: '1.5', label: 'těžiště', short: 'Vážený průměr poloh hmotných bodů: R = Σmᵢrᵢ / Σmᵢ.' },
  'moment-sily': { lesson: '1.5', label: 'moment síly', short: 'Otáčivý účinek síly; Γ = r×F. Pohybová rovnice rotace: Γ = J·α = dL/dt.' },
  'moment-setrvacnosti': { lesson: '1.5', label: 'moment setrvačnosti', short: 'J = Σmᵢrᵢ² — „rotační hmotnost", odpor proti roztočení.' },
  'moment-hybnosti': { lesson: '1.5', label: 'moment hybnosti', short: 'L = J·ω — rotační obdoba hybnosti.' },
  'dvojice-sil': { lesson: '1.5', label: 'dvojice sil', short: 'Dvě stejně velké, opačné síly, které neleží na jedné přímce → čisté otáčení.' },
}

/* Šipka pro SVG (marker). */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACCENT = '#f59e0b' // akcent tématu (oranžová)
const TXT = '#e8ecf8'
const FAINT = '#8b95b5'
const FORCE = '#fb7185'
const MASS = '#9aa6c4'
const GREEN = '#34d399'

export default function Lesson_1_5() {
  return (
    <>
      <p className="lead">
        Místo abychom počítali pohyb každého kamínku v hozeném kameni zvlášť, sledujeme jediný bod —{' '}
        <Term id="teziste">těžiště</Term>. A když se těleso navíc otáčí, použijeme „rotační dvojníky"
        síly, hmotnosti a hybnosti. U zkoušky se ptají hlavně na <b>vzorec pro těžiště</b>,{' '}
        <b>pohybovou rovnici rotace</b> a na jeden oblíbený chyták o <b>parabole</b>.
      </p>

      <Section title="Proč těžiště: jeden bod místo tisíce">
        <p>
          Reálné těleso je soustava <Concept id="hmotny-bod">hmotných bodů</Concept> — spousta malých kousků o hmotnostech{' '}
          <M>{'m_i'}</M> na polohách <M>{'\\vec r_i'}</M>. Počítat pohyb každého zvlášť je beznadějné,
          tak použijeme <b>statistický trik</b>: celé těleso nahradíme jediným bodem, do kterého
          „slijeme" celou hmotnost. Tomu bodu se říká těžiště (hmotný střed).
        </p>
        <p>
          Jeho polohu spočítáme jako <b>vážený průměr</b> poloh všech kousků — váhou je hmotnost
          (těžší kousek táhne těžiště víc k sobě):
        </p>
        <MB>{'\\vec R_{T} = \\frac{\\displaystyle\\sum_{i=1}^{N} m_i\\,\\vec r_i}{\\displaystyle\\sum_{i=1}^{N} m_i} = \\frac{1}{M}\\sum_{i=1}^{N} m_i\\,\\vec r_i, \\qquad M = \\sum_{i=1}^{N} m_i'}</MB>
        <p>
          V čitateli sčítáš <b>hmotnost krát polohu</b> každého bodu, ve jmenovateli je{' '}
          <M>{'M'}</M> — <b>celková hmotnost</b> soustavy. Tělesa mají právě <b>jedno</b> těžiště a
          jeho poloha závisí jen na <b>rozložení hmotnosti</b>. Klidně může ležet i{' '}
          <b>mimo těleso</b> (například uprostřed prstenu nebo podkovy).
        </p>

        <Figure caption="Těžiště dvou kuliček leží blíž té těžší. Olovo (3 kg) přetáhne těžiště k sobě, dřevo (1 kg) ho odtáhne jen málo.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <Defs id="arT" color={ACCENT} />
            {/* osa / tyč */}
            <line x1="40" y1="95" x2="380" y2="95" stroke={FAINT} strokeWidth="2" />
            {/* dřevo m=1 vlevo */}
            <circle cx="80" cy="95" r="16" fill={MASS} />
            <text x="80" y="100" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">1</text>
            <text x="80" y="135" fill={TXT} fontSize="12" textAnchor="middle">dřevo</text>
            {/* olovo m=3 vpravo */}
            <circle cx="340" cy="95" r="26" fill={MASS} />
            <text x="340" y="100" fill="#0b1020" fontSize="15" textAnchor="middle" fontWeight="700">3</text>
            <text x="340" y="142" fill={TXT} fontSize="12" textAnchor="middle">olovo</text>
            {/* teziste blize olovu: x = (1*80 + 3*340)/4 = 275 */}
            <line x1="275" y1="55" x2="275" y2="95" stroke={ACCENT} strokeWidth="2" markerEnd="url(#arT)" />
            <circle cx="275" cy="95" r="6" fill={ACCENT} />
            <text x="275" y="46" fill={ACCENT} fontSize="14" textAnchor="middle" fontWeight="700">těžiště</text>
          </svg>
        </Figure>
        <p className="muted">
          Praktické příklady: provazochodec drží tyč s konci dolů, aby si <b>snížil těžiště</b> a byl
          stabilnější; slepená olověná + dřevěná polokoule má těžiště posunuté do olova.
        </p>
      </Section>

      <Section title="Jak se pohybuje těžiště (a slavný chyták s parabolou)">
        <p>
          Klíčová věc: <b>vnitřní síly</b> (jak se kousky tělesa tahají navzájem) se podle{' '}
          <Concept id="newtonovy-zakony">3. Newtonova zákona</Concept> vzájemně vyruší — vždy přijdou v párech stejně velkých a
          opačných sil. Proto o pohybu těžiště rozhodují <b>jen vnější síly</b> a platí pro něj
          úplně stejná <Concept id="pohybova-rovnice">pohybová rovnice</Concept> jako pro jeden hmotný bod:
        </p>
        <MB>{'\\vec F_{\\text{vnější}} = M\\,\\frac{\\mathrm d^2 \\vec R_T}{\\mathrm d t^2} = M\\,\\vec a_T'}</MB>
        <p>
          Důsledek, který zkoušející milují: hodíš-li šikmo <b>rotující činku</b> (nebo otevřený
          klíč, kladivo, cokoliv), jednotlivé body opisují divoké smyčky, ale <b>těžiště letí
          přesně po parabole</b> — jako bys hodil obyčejný míček. <b>Rotace na dráhu těžiště nemá
          žádný vliv</b>, protože tíhová síla působí pořád stejně na celou hmotnost.
        </p>

        <StepScene
          title="Šikmo vržená rotující činka — kudy letí těžiště?"
          viewBox="0 0 420 200"
          captions={[
            <>Činku hodíme šikmo vzhůru a roztočíme. Sledujeme oranžový bod — její <b>těžiště</b> (uprostřed mezi koulemi).</>,
            <>Koule se točí kolem těžiště a opisují kličky, ale samotné <b>těžiště</b> stoupá po hladké křivce.</>,
            <>Spojnice poloh těžiště je <b>parabola</b> — úplně stejná, jako by žádná rotace nebyla. <b>To je ten chyták.</b></>,
          ]}
        >
          <defs>
            <marker id="arP" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill={ACCENT} /></marker>
          </defs>

          {/* zem */}
          <ALine x1={0} y1={185} x2={420} y2={185} stroke={FAINT} strokeWidth={2} />

          {/* parabolicka draha teziste — postupne se odkryva (kratky usek → cela krivka) */}
          <APath
            d={[
              'M70,150 L70,150',
              'M70,150 Q150,70 210,65',
              'M70,150 Q210,-20 350,150',
            ]}
            fill="none"
            stroke={ACCENT}
            strokeWidth={[3, 2, 3]}
            opacity={[0, 0.8, 1]}
          />

          {/* sipka pocatecni rychlosti v0 — jen v 1. kroku */}
          <ALine x1={80} y1={142} x2={138} y2={108} stroke={ACCENT} strokeWidth={3} markerEnd="url(#arP)" opacity={[1, 0, 0]} />
          <AText x={[150, 150, 150]} y={[100, 100, 100]} fill={ACCENT} fontSize="14" opacity={[1, 0, 0]}>v₀</AText>

          {/* rotujici cinka: posune se po drahe a otaci se */}
          <AGroup x={[70, 210, 350]} y={[150, 65, 150]} rotate={[-30, 70, 160]}>
            <line x1="-22" y1="0" x2="22" y2="0" stroke={MASS} strokeWidth="4" />
            <circle cx="-22" cy="0" r="9" fill={MASS} />
            <circle cx="22" cy="0" r="9" fill={MASS} />
          </AGroup>

          {/* teziste — oranzovy bod jede po drahe spolu s cinkou */}
          <ACircle cx={[70, 210, 350]} cy={[150, 65, 150]} r={6} fill={ACCENT} />

          {/* popisek "parabola" — objevi se az v poslednim kroku */}
          <AText x={210} y={42} fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700" opacity={[0, 0, 1]}>parabola</AText>
        </StepScene>
      </Section>

      <Section title="Rotace tělesa: každá veličina má „otáčivého dvojníka">
        <p>
          Rotace (otáčivý pohyb) je takový pohyb tuhého tělesa, kdy se všechny body
          točí kolem <b>jedné společné osy</b> se stejnou úhlovou rychlostí; jejich dráhy jsou{' '}
          <b>kružnice</b>. Translaci popisujeme <M>{'\\vec F = m\\vec a'}</M>; pro rotaci platí
          úplně stejně vypadající rovnice, jen s „otáčivými" veličinami. Tahle tabulka je u zkoušky
          zlatý důl — stačí si zapamatovat, kdo je čí dvojník:
        </p>

        <div className="lfigure">
          <table className="rot-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95em' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: `2px solid ${FAINT}` }}>Posuvný pohyb (translace)</th>
                <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: `2px solid ${ACCENT}`, color: ACCENT }}>Otáčivý pohyb (rotace)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '6px 8px' }}>dráha <M>{'s'}</M></td>
                <td style={{ padding: '6px 8px' }}>úhel <M>{'\\varphi'}</M></td>
              </tr>
              <tr>
                <td style={{ padding: '6px 8px' }}>rychlost <M>{'v = \\mathrm ds/\\mathrm dt'}</M></td>
                <td style={{ padding: '6px 8px' }}>úhlová rychlost <M>{'\\omega = \\mathrm d\\varphi/\\mathrm dt'}</M></td>
              </tr>
              <tr>
                <td style={{ padding: '6px 8px' }}>zrychlení <M>{'a'}</M></td>
                <td style={{ padding: '6px 8px' }}>úhlové zrychlení <M>{'\\alpha = \\mathrm d\\omega/\\mathrm dt'}</M></td>
              </tr>
              <tr>
                <td style={{ padding: '6px 8px' }}>síla <M>{'\\vec F'}</M></td>
                <td style={{ padding: '6px 8px' }}>moment síly <M>{'\\vec\\Gamma = \\vec r\\times\\vec F'}</M></td>
              </tr>
              <tr>
                <td style={{ padding: '6px 8px' }}>hmotnost <M>{'m'}</M></td>
                <td style={{ padding: '6px 8px' }}>moment setrvačnosti <M>{'J = \\sum m_i r_i^2'}</M></td>
              </tr>
              <tr>
                <td style={{ padding: '6px 8px' }}>hybnost <M>{'\\vec p = m\\vec v'}</M></td>
                <td style={{ padding: '6px 8px' }}>moment hybnosti <M>{'\\vec L = J\\vec\\omega'}</M></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>A teď ta hlavní věta — pohybová rovnice rotace (otáčivá obdoba <M>{'\\vec F = m\\vec a = \\mathrm d\\vec p/\\mathrm dt'}</M>):</p>
        <MB>{'\\vec\\Gamma = J\\,\\vec\\alpha = \\frac{\\mathrm d\\vec L}{\\mathrm d t}'}</MB>
        <p>Slovy a po jednotlivých veličinách (přesně tohle u zkoušky popiš):</p>
        <ul className="biglist">
          <li><b><M>{'\\vec\\Gamma'}</M> — <Term id="moment-sily">moment síly</Term></b> (otáčivý účinek síly), <M>{'\\vec\\Gamma = \\vec r\\times\\vec F'}</M>. Roste s velikostí síly i se vzdáleností působiště od osy (rameno).</li>
          <li><b><M>{'J'}</M> — <Term id="moment-setrvacnosti">moment setrvačnosti</Term></b>, <M>{'J = \\sum m_i r_i^2'}</M>. „Rotační hmotnost" — jak moc se těleso brání roztočení. Záleží i na tom, <b>jak daleko od osy</b> hmota leží.</li>
          <li><b><M>{'\\vec\\alpha'}</M> — úhlové zrychlení</b> (jak rychle roste otáčení).</li>
          <li><b><M>{'\\vec L'}</M> — <Term id="moment-hybnosti">moment hybnosti</Term></b>, <M>{'\\vec L = J\\vec\\omega'}</M>. Rotační obdoba hybnosti.</li>
          <li><b><M>{'\\vec\\omega'}</M> — úhlová rychlost</b> (jak rychle se těleso točí); je rovnoběžná s osou otáčení.</li>
        </ul>
        <p className="muted">
          Příklady rotace: dítě na kolotoči, tmel na gramofonové desce, dvě závaží na roztočené tyči.
        </p>
      </Section>

      <Section title="Dvojice sil — co točí, ale netlačí">
        <p>
          <Term id="dvojice-sil">Dvojice sil</Term> jsou <b>dvě stejně velké</b> a <b>opačně orientované</b> síly,
          které <b>neleží na jedné přímce</b>. Jejich výslednice je nulová (těžiště se neposune),
          ale protože jsou posunuté vedle sebe, vytvoří <b>čistý otáčivý moment</b> — těleso se
          roztočí, ale neposune se. Klasická ukázka: otáčení volantem nebo <Concept id="dipol">dipól</Concept> v homogenním poli.
        </p>

        <Figure caption="Dvojice sil: stejně velké, opačné, na různých přímkách. Rameno d je kolmá vzdálenost obou nositelek → těleso se roztočí. Pozor: kdyby ležely na téže přímce, jen by se vyrušily.">
          <svg viewBox="0 0 420 200" className="svg-fig">
            <defs>
              <marker id="arF" markerWidth="11" markerHeight="11" refX="8" refY="5.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,5.5 L0,11 z" fill={FORCE} /></marker>
              <marker id="arGs" markerWidth="10" markerHeight="10" refX="2" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M10,0 L0,5 L10,10 z" fill={GREEN} /></marker>
              <marker id="arGe" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L10,5 L0,10 z" fill={GREEN} /></marker>
            </defs>
            {/* nositelky sil (vodorovne primky, na nichz sily lezi) */}
            <line x1="55" y1="55" x2="345" y2="55" stroke={FAINT} strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="75" y1="150" x2="365" y2="150" stroke={FAINT} strokeWidth="1.5" strokeDasharray="5 5" />
            {/* tyc / teleso (sikma) */}
            <line x1="110" y1="55" x2="310" y2="150" stroke={MASS} strokeWidth="6" strokeLinecap="round" />
            {/* osa otaceni (teziste) uprostred */}
            <circle cx="210" cy="102" r="5" fill={ACCENT} />
            <text x="210" y="120" fill={ACCENT} fontSize="13" textAnchor="middle">osa</text>
            {/* sila nahore doprava — pusobiste na hornim konci tyce */}
            <line x1="110" y1="55" x2="200" y2="55" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF)" />
            <text x="165" y="44" fill={FORCE} fontSize="15" textAnchor="middle" fontWeight="700">F</text>
            {/* sila dole doleva — pusobiste na dolnim konci tyce */}
            <line x1="310" y1="150" x2="220" y2="150" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF)" />
            <text x="265" y="170" fill={FORCE} fontSize="15" textAnchor="middle" fontWeight="700">−F</text>
            {/* rameno d — kolma (svisla) vzdalenost obou nositelek */}
            <line x1="385" y1="55" x2="385" y2="150" stroke={GREEN} strokeWidth="1.5" markerStart="url(#arGs)" markerEnd="url(#arGe)" />
            <text x="378" y="107" fill={GREEN} fontSize="13" textAnchor="end">d</text>
            <text x="378" y="123" fill={GREEN} fontSize="11" textAnchor="end">rameno</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Těžiště <b>rotující</b> činky (klíče, kladiva) hozené šikmo letí <b>po parabole</b> —
            úplně stejně jako nerotující míček. <b>Rotace na dráhu těžiště nemá vliv.</b>
          </li>
          <li>
            <b>Dvojice sil</b> = stejně velké, opačné a <b>NEleží na jedné přímce</b>. Kdyby ležely na
            téže přímce, jen by se vyrušily a nic by neudělaly. To posunutí (rameno) je celé jádro pojmu.
          </li>
          <li>
            Nepleť si <b>moment setrvačnosti</b> <M>{'J'}</M> (rotační „hmotnost", <M>{'J=\\sum m_i r_i^2'}</M>)
            a <b>moment hybnosti</b> <M>{'L = J\\omega'}</M> (rotační „hybnost").
          </li>
          <li>
            Pohybovou rovnici rotace piš nejlépe v obecném tvaru <M>{'\\vec\\Gamma = \\mathrm d\\vec L/\\mathrm dt'}</M>,
            ne jen <M>{'\\Gamma = J\\alpha'}</M> — působí to líp a je obecnější.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat vzorec pro těžiště R = Σmᵢrᵢ / Σmᵢ a vysvětlit ho (vážený průměr poloh).',
          'Napsat pohybovou rovnici rotace Γ = J·α = dL/dt a popsat veličiny Γ, J, L, ω, α.',
          'Vědět, že těžiště vrženého (i rotujícího) tělesa se pohybuje po parabole.',
          'Definovat dvojici sil: stejně velké, opačné, neleží na jedné přímce.',
          'Spárovat translační a rotační veličiny (síla↔moment síly, hmotnost↔moment setrvačnosti, hybnost↔moment hybnosti).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Napiš vzorec pro polohu těžiště soustavy hmotných bodů a vysvětli, co znamená.</>,
            a: <><M>{'\\vec R_T = \\frac{\\sum m_i \\vec r_i}{\\sum m_i}'}</M> — je to <b>vážený průměr poloh</b> všech bodů, kde váhou je hmotnost. Jmenovatel <M>{'M=\\sum m_i'}</M> je celková hmotnost. Těžiště leží blíž k těžším částem a může být i mimo těleso.</>,
          },
          {
            q: <>Po jaké křivce se pohybuje těžiště rotující činky vržené šikmo vzhůru?</>,
            a: <>Po <b>parabole</b> — stejně jako u obyčejného hmotného bodu. <b>Rotace na to nemá vliv</b>, protože o pohybu těžiště rozhodují jen vnější síly (tady tíhová) a vnitřní síly se podle 3. NZ vyruší.</>,
          },
          {
            q: <>Jak zní pohybová rovnice rotujícího tělesa a co jsou veličiny <M>{'\\Gamma, J, L, \\omega'}</M>?</>,
            a: <><M>{'\\vec\\Gamma = J\\vec\\alpha = \\mathrm d\\vec L/\\mathrm dt'}</M>. <M>{'\\Gamma'}</M> = moment síly (otáčivý účinek, <M>{'\\vec r\\times\\vec F'}</M>), <M>{'J'}</M> = moment setrvačnosti (<M>{'\\sum m_i r_i^2'}</M>, „rotační hmotnost"), <M>{'L = J\\omega'}</M> = moment hybnosti, <M>{'\\omega'}</M> = úhlová rychlost, <M>{'\\alpha'}</M> = úhlové zrychlení.</>,
          },
          {
            q: <>Co je dvojice sil a čím se liší od dvou sil, které se prostě vyruší?</>,
            a: <>Dvě <b>stejně velké</b> a <b>opačně orientované</b> síly, které <b>neleží na jedné přímce</b>. Jejich výslednice je nula (těžiště se neposune), ale díky rameni mezi nimi vytvoří otáčivý moment a těleso <b>roztočí</b>. Kdyby ležely na téže přímce, jen by se vyrušily a nic neudělaly.</>,
          },
        ]}
      />
    </>
  )
}
