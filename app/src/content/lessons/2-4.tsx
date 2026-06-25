import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.4'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější wiki-proklik). */
export const provides = {
  'dipol': { lesson: '2.4', label: 'elektrický dipól', short: 'Dvojice stejně velkých opačných nábojů ve vzdálenosti d.' },
  'dipolovy-moment': { lesson: '2.4', label: 'dipólový moment', short: 'p = Q·d — vektor od − k +, popisuje rozložení náboje.' },
  'polarni-molekula': { lesson: '2.4', label: 'polární molekula', short: 'Molekula s vlastním dipólovým momentem (např. voda).' },
}

const ACCENT = '#38bdf8' // akcent tématu (E pole)
const TXT = '#e8ecf8'
const POS = '#fb7185' // kladný náboj / síla
const NEG = '#60a5fa' // záporný náboj
const P = '#fbbf24' // dipólový moment p
const ROT = '#a78bfa' // rotace / moment síly
const MUTED = '#7c89ad'

/* Šipky pro SVG (markery v různých barvách). */
function Defs() {
  return (
    <defs>
      <marker id="d4-e" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACCENT} />
      </marker>
      <marker id="d4-p" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={P} />
      </marker>
      <marker id="d4-pos" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={POS} />
      </marker>
      <marker id="d4-neg" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={NEG} />
      </marker>
      <marker id="d4-rot" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ROT} />
      </marker>
    </defs>
  )
}

/* Náboj jako kolečko s + nebo −. */
function Charge({ x, y, sign }: { x: number; y: number; sign: '+' | '−' }) {
  const c = sign === '+' ? POS : NEG
  return (
    <g>
      <circle cx={x} cy={y} r="13" fill={c} />
      <text x={x} y={y + 5} fill="#0b1020" fontSize="17" textAnchor="middle" fontWeight="800">{sign}</text>
    </g>
  )
}

/* Tři vodorovné siločáry vnějšího pole E (míří doprava). */
function FieldLines({ x1, x2, ys }: { x1: number; x2: number; ys: number[] }) {
  return (
    <g>
      {ys.map((y, i) => (
        <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#d4-e)" opacity="0.85" />
      ))}
    </g>
  )
}

export default function Lesson_2_4() {
  return (
    <>
      <p className="lead">
        Dipól je oblíbená zkoušková otázka, protože se na něm dá ptát na hromadu věcí najednou —
        vzoreček, otáčení v poli, polární molekuly. Dobrá zpráva: je to <Term>jen dvojice nábojů</Term>{' '}
        a tři čísla, která si zapamatuješ. Špatná zpráva: jsou tam dva chytáky na úhel a na druh pole,
        kde se ztrácejí body. Tady je oba vychytáme.
      </p>

      <Section title="Co je dipól a co je dipólový moment">
        <p>
          <Term id="dipol">Elektrický dipól</Term> je soustava <b>dvou stejně velkých <Concept id="naboj">nábojů</Concept> opačného znaménka</b>{' '}
          (<M>{'+Q'}</M> a <M>{'-Q'}</M>) ve stálé vzdálenosti <M>{'d'}</M>. Jako celek je elektricky
          neutrální (náboje se sečtou na nulu), ale náboj je v něm <b>rozdělen nesymetricky</b> — a právě
          to je důležité.
        </p>
        <p>
          Jak moc je dipól „silný" a kam míří, popisuje jeden vektor — <Term id="dipolovy-moment">dipólový moment</Term>:
        </p>
        <MB>{'\\vec p = Q\\,\\vec d'}</MB>
        <p>
          Velikost je <M>{'p = Q\\cdot d'}</M> (náboj krát vzdálenost). Směr vektoru <M>{'\\vec p'}</M> je
          <b> od záporného náboje ke kladnému</b> (od <M>{'-Q'}</M> k <M>{'+Q'}</M>). Jednotka se v chemii
          často uvádí v <Term>debyech (D)</Term>, v SI je to <M>{'\\mathrm{C\\cdot m}'}</M>.
        </p>
        <Callout kind="tip" title="Jak si to zapamatovat">
          <M>{'\\vec p'}</M> je „šipka, která ukazuje, kde sedí kladný konec". Větší náboj nebo větší
          vzdálenost = větší <M>{'p'}</M> = dipól, který v poli „víc cítí" otáčivou sílu.
        </Callout>
      </Section>

      <Section title="Vlastní pole dipólu">
        <p>
          Dipól sám kolem sebe vytváří elektrické pole. Spočítá se jednoduše přes{' '}
          <Concept id="superpozice">princip superpozice</Concept>: v každém bodě sečteš (vektorově)
          <b> <Concept id="intenzita-pole">intenzitu</Concept> od kladného a od záporného náboje</b>. Výsledné <Concept id="silocary">siločáry</Concept> vychází z <M>{'+Q'}</M> a
          vrací se do <M>{'-Q'}</M>.
        </p>
        <Figure caption="Vlastní pole dipólu: intenzita E v daném bodě je vektorový součet polí obou nábojů. Siločáry (modré) jdou od + k −, červené čárkované jsou ekvipotenciály (jsou na siločáry kolmé).">
          <svg viewBox="0 0 380 240" className="svg-fig">
            <Defs />
            {/* ekvipotenciály kolem každého náboje (jen naznačené) */}
            <g fill="none" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 5" opacity="0.7">
              <circle cx="130" cy="120" r="22" />
              <circle cx="130" cy="120" r="40" />
              <circle cx="250" cy="120" r="22" />
              <circle cx="250" cy="120" r="40" />
            </g>
            {/* siločáry od + (vpravo) k - (vlevo) */}
            <g fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.9">
              <path d="M250,120 C235,70 145,70 130,120" markerEnd="url(#d4-e)" />
              <path d="M250,120 C235,170 145,170 130,120" markerEnd="url(#d4-e)" />
              <path d="M270,108 C300,55 90,45 110,108" markerEnd="url(#d4-e)" />
              <path d="M270,132 C300,185 90,195 110,132" markerEnd="url(#d4-e)" />
            </g>
            <Charge x={130} y={120} sign="−" />
            <Charge x={250} y={120} sign="+" />
            {/* dipólový moment p od - k + */}
            <line x1="150" y1="120" x2="230" y2="120" stroke={P} strokeWidth="3.5" markerEnd="url(#d4-p)" />
            <text x="190" y="112" fill={P} fontSize="16" textAnchor="middle" fontStyle="italic" fontWeight="700">p</text>
            <text x="190" y="223" fill={TXT} fontSize="13" textAnchor="middle">p míří od − k +</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Dipól ve vnějším poli: otáčí se (hlavní věc!)">
        <p>
          Tohle je jádro otázky. Vlož dipól do <Concept id="intenzita-pole">vnějšího pole</Concept>{' '}
          <M>{'\\vec E'}</M>. Na kladný konec pole zatlačí jedním směrem, na záporný konec opačným směrem —
          vznikne <Concept id="dvojice-sil"><b>dvojice sil</b></Concept>, která dipól <Term>otáčí</Term> tak, aby se srovnal s polem.
        </p>
        <p>Otáčivý účinek měří <Concept id="moment-sily">moment síly</Concept>:</p>
        <MB>{'\\vec M = \\vec p \\times \\vec E \\qquad |\\vec M| = p\\,E\\,\\sin\\alpha'}</MB>
        <p>
          kde <M>{'\\alpha'}</M> je úhel mezi <M>{'\\vec p'}</M> a <M>{'\\vec E'}</M>. To{' '}
          <M>{'\\sin\\alpha'}</M> je přesně to, na co se chytá u zkoušky — proklikej si to:
        </p>

        <StepFigure
          title="Otáčivý moment dipólu podle úhlu α"
          steps={[
            {
              label: 'α = 90°',
              caption: (
                <>
                  Dipól je <b>kolmo</b> na pole (<M>{'\\alpha = 90^\\circ'}</M>). Síly tvoří dvojici s
                  největším ramenem → <b>moment je MAXIMÁLNÍ</b>: <M>{'|\\vec M| = p\\,E\\,\\sin 90^\\circ = pE'}</M>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs />
                  <FieldLines x1={20} x2={130} ys={[45, 110, 175]} />
                  <FieldLines x1={290} x2={400} ys={[45, 110, 175]} />
                  <text x="55" y="35" fill={ACCENT} fontSize="14" fontStyle="italic">E</text>
                  {/* dipól svisle: - dole, + nahoře; p nahoru */}
                  <line x1="210" y1="155" x2="210" y2="85" stroke={P} strokeWidth="3.5" markerEnd="url(#d4-p)" />
                  <text x="222" y="120" fill={P} fontSize="15" fontStyle="italic" fontWeight="700">p</text>
                  <Charge x={210} y={160} sign="−" />
                  <Charge x={210} y={80} sign="+" />
                  {/* síly: na + doprava, na - doleva */}
                  <line x1="225" y1="80" x2="278" y2="80" stroke={POS} strokeWidth="3" markerEnd="url(#d4-pos)" />
                  <line x1="195" y1="160" x2="142" y2="160" stroke={NEG} strokeWidth="3" markerEnd="url(#d4-neg)" />
                  {/* rotační šipky */}
                  <path d="M250,95 Q280,120 250,150" fill="none" stroke={ROT} strokeWidth="2.5" markerEnd="url(#d4-rot)" />
                  <text x="210" y="208" fill={ROT} fontSize="13" textAnchor="middle">největší otáčení</text>
                </svg>
              ),
            },
            {
              label: '0° < α < 90°',
              caption: (
                <>
                  Dipól se už natáčí do směru pole. Moment <b>klesá</b> (<M>{'\\sin\\alpha'}</M> je menší než 1),
                  ale pořád otáčí dál — pole ho „dorovnává".
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs />
                  <FieldLines x1={20} x2={130} ys={[45, 110, 175]} />
                  <FieldLines x1={290} x2={400} ys={[45, 110, 175]} />
                  <text x="55" y="35" fill={ACCENT} fontSize="14" fontStyle="italic">E</text>
                  {/* dipól pod úhlem ~45°: - vlevo dole, + vpravo nahoře */}
                  <line x1="178" y1="150" x2="242" y2="90" stroke={P} strokeWidth="3.5" markerEnd="url(#d4-p)" />
                  <text x="200" y="108" fill={P} fontSize="15" fontStyle="italic" fontWeight="700">p</text>
                  <Charge x={172} y={156} sign="−" />
                  <Charge x={248} y={84} sign="+" />
                  <line x1="263" y1="84" x2="312" y2="84" stroke={POS} strokeWidth="3" markerEnd="url(#d4-pos)" />
                  <line x1="157" y1="156" x2="108" y2="156" stroke={NEG} strokeWidth="3" markerEnd="url(#d4-neg)" />
                  <path d="M278,100 Q300,120 282,145" fill="none" stroke={ROT} strokeWidth="2.5" markerEnd="url(#d4-rot)" />
                  <text x="210" y="208" fill={ROT} fontSize="13" textAnchor="middle">otáčí se dál, moment slábne</text>
                </svg>
              ),
            },
            {
              label: 'α = 0°',
              caption: (
                <>
                  Dipól je <b>zarovnaný s polem</b> (<M>{'\\alpha = 0^\\circ'}</M>). Obě síly leží na jedné
                  přímce a vyruší se → <b>moment je NULOVÝ</b>: <M>{'\\sin 0^\\circ = 0'}</M>. Tohle je{' '}
                  <Term>rovnovážná poloha</Term>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs />
                  <FieldLines x1={20} x2={130} ys={[45, 175]} />
                  <FieldLines x1={300} x2={400} ys={[45, 175]} />
                  <text x="55" y="35" fill={ACCENT} fontSize="14" fontStyle="italic">E</text>
                  {/* dipól vodorovně: - vlevo, + vpravo, p doprava (= směr E) */}
                  <line x1="180" y1="110" x2="244" y2="110" stroke={P} strokeWidth="3.5" markerEnd="url(#d4-p)" />
                  <text x="212" y="98" fill={P} fontSize="15" fontStyle="italic" fontWeight="700" textAnchor="middle">p</text>
                  <Charge x={170} y={110} sign="−" />
                  <Charge x={250} y={110} sign="+" />
                  {/* síly na jedné přímce, opačné -> vyruší se */}
                  <line x1="265" y1="110" x2="315" y2="110" stroke={POS} strokeWidth="3" markerEnd="url(#d4-pos)" />
                  <line x1="155" y1="110" x2="105" y2="110" stroke={NEG} strokeWidth="3" markerEnd="url(#d4-neg)" />
                  <text x="210" y="208" fill={TXT} fontSize="13" textAnchor="middle">síly na jedné přímce → M = 0 (rovnováha)</text>
                </svg>
              ),
            },
          ]}
        />

        <Callout kind="chytak" title="Chyták č. 1: kdy je moment 0 a kdy max">
          <p>Lidská intuice tě svádí to splést. Drž se vzorce <M>{'|\\vec M| = pE\\sin\\alpha'}</M>:</p>
          <ul>
            <li><b>Největší moment</b> je při <M>{'\\alpha = 90^\\circ'}</M> (dipól kolmo na pole) — <M>{'\\sin 90^\\circ = 1'}</M>.</li>
            <li><b>Nulový moment</b> je při <M>{'\\alpha = 0^\\circ'}</M> (dipól zarovnaný s polem) — <M>{'\\sin 0^\\circ = 0'}</M>.</li>
          </ul>
          <p>
            Jinak řečeno: čím je dipól <b>blíž srovnání s polem, tím míň ho pole otáčí</b>. Když je už
            srovnaný, neotáčí se vůbec (a navíc je to jeho stabilní rovnovážná poloha).
          </p>
        </Callout>
      </Section>

      <Section title="Homogenní × nehomogenní pole (druhý chyták)">
        <p>
          Pozor na rozdíl mezi dvěma druhy pole. Rozhoduje, jestli jsou obě síly <b>stejně velké</b>,
          nebo ne:
        </p>
        <Figure caption="Vlevo homogenní pole: síly jsou stejně velké, vyruší se → dipól se jen otáčí (rotace). Vpravo nehomogenní pole: blíž ke zdroji je síla větší → dipól se navíc i posouvá (translace).">
          <svg viewBox="0 0 560 230" className="svg-fig">
            <Defs />
            {/* —— HOMOGENNÍ —— stejně husté/dlouhé siločáry */}
            <text x="135" y="24" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">homogenní pole</text>
            <FieldLines x1={20} x2={250} ys={[60, 110, 160]} />
            <Charge x={150} y={88} sign="+" />
            <Charge x={120} y={140} sign="−" />
            <line x1="120" y1="140" x2="150" y2="88" stroke={P} strokeWidth="3" markerEnd="url(#d4-p)" />
            {/* stejně velké opačné síly */}
            <line x1="165" y1="84" x2="205" y2="84" stroke={POS} strokeWidth="3" markerEnd="url(#d4-pos)" />
            <line x1="105" y1="144" x2="65" y2="144" stroke={NEG} strokeWidth="3" markerEnd="url(#d4-neg)" />
            <text x="135" y="208" fill={ROT} fontSize="13" textAnchor="middle">jen rotace</text>

            {/* dělicí čára */}
            <line x1="290" y1="20" x2="290" y2="210" stroke={MUTED} strokeWidth="1" strokeDasharray="5 5" />

            {/* —— NEHOMOGENNÍ —— siločáry se sbíhají doleva (silnější pole vlevo) */}
            <text x="430" y="24" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">nehomogenní pole</text>
            <g fill="none" stroke={ACCENT} strokeWidth="2.5" opacity="0.85">
              <path d="M540,55 C470,70 400,80 320,95" markerEnd="url(#d4-e)" />
              <path d="M540,115 L320,115" markerEnd="url(#d4-e)" />
              <path d="M540,175 C470,160 400,150 320,135" markerEnd="url(#d4-e)" />
            </g>
            <Charge x={420} y={95} sign="+" />
            <Charge x={450} y={138} sign="−" />
            <line x1="450" y1="138" x2="420" y2="95" stroke={P} strokeWidth="3" markerEnd="url(#d4-p)" />
            {/* síla na bližší (levý, + ) konec větší než na pravý */}
            <line x1="405" y1="92" x2="345" y2="92" stroke={POS} strokeWidth="4" markerEnd="url(#d4-pos)" />
            <line x1="465" y1="140" x2="500" y2="140" stroke={NEG} strokeWidth="2.5" markerEnd="url(#d4-neg)" />
            {/* výsledná translace doleva */}
            <line x1="430" y1="195" x2="360" y2="195" stroke={ROT} strokeWidth="3.5" markerEnd="url(#d4-rot)" />
            <text x="395" y="218" fill={ROT} fontSize="13" textAnchor="middle">rotace + posun (translace)</text>
          </svg>
        </Figure>
        <ul className="biglist">
          <li>
            <b>Homogenní pole</b> (siločáry stejně husté, např. mezi deskami kondenzátoru): obě síly jsou
            <b> stejně velké a opačné</b>, takže se vyruší. Zbude jen otáčivý moment → dipól se <b>jen otáčí</b>.
          </li>
          <li>
            <b>Nehomogenní pole</b> (siločáry se zhušťují, např. blízko bodového náboje): blíž ke zdroji je
            pole silnější, takže <b>jedna síla je větší</b>. Síly se nevyruší → kromě otáčení se dipól
            <b> ještě posouvá (translace)</b> ve směru větší síly.
          </li>
        </ul>
        <Callout kind="chytak" title="Chyták č. 2: translace jen v nehomogenním poli">
          <p>
            Otáčet se dipól umí v <b>obou</b> polích. Ale <b>posouvat (translace) se umí JEN
            v nehomogenním poli</b> — v homogenním se síly přesně vyruší, takže žádný posun.
          </p>
          <p className="muted">
            Praktický příklad: nabitá tyč přitáhne pramínek vody. Pole u tyče je nehomogenní, takže polární
            molekuly vody se k tyči přitáhnou (a to nezávisle na znaménku náboje tyče).
          </p>
        </Callout>
      </Section>

      <Section title="Polární × nepolární molekuly">
        <p>
          Proč to celé řešíme? Protože dipólem se popisují <Term>molekuly</Term>. Podle toho, jestli mají
          „vestavěný" dipól, je dělíme na dva druhy:
        </p>
        <Figure caption="Polární molekula (vlevo, např. voda) má kladné a záporné těžiště náboje posunuté → má vlastní dipólový moment p. Nepolární molekula (vpravo) má náboj rozložený symetricky → p = 0.">
          <svg viewBox="0 0 540 200" className="svg-fig">
            <Defs />
            {/* —— POLÁRNÍ: voda, lomená molekula —— */}
            <text x="135" y="26" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">polární (např. H₂O)</text>
            {/* O uprostřed (záporný konec), 2 H (kladný konec) */}
            <circle cx="135" cy="95" r="20" fill={NEG} />
            <text x="135" y="100" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="800">O</text>
            <circle cx="95" cy="135" r="13" fill={POS} />
            <text x="95" y="140" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="800">H</text>
            <circle cx="175" cy="135" r="13" fill={POS} />
            <text x="175" y="140" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="800">H</text>
            <line x1="135" y1="95" x2="95" y2="135" stroke={MUTED} strokeWidth="3" />
            <line x1="135" y1="95" x2="175" y2="135" stroke={MUTED} strokeWidth="3" />
            {/* vlastní dipólový moment p míří k zápornému konci (nahoru) */}
            <line x1="135" y1="135" x2="135" y2="70" stroke={P} strokeWidth="3.5" markerEnd="url(#d4-p)" />
            <text x="148" y="100" fill={P} fontSize="15" fontStyle="italic" fontWeight="700">p</text>
            <text x="135" y="185" fill={P} fontSize="13" textAnchor="middle">má vlastní p ≠ 0</text>

            {/* dělicí čára */}
            <line x1="270" y1="20" x2="270" y2="180" stroke={MUTED} strokeWidth="1" strokeDasharray="5 5" />

            {/* —— NEPOLÁRNÍ: symetrická, např. CO2 lineární —— */}
            <text x="405" y="26" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">nepolární (např. CO₂)</text>
            <circle cx="345" cy="100" r="13" fill={POS} />
            <text x="345" y="105" fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="800">O</text>
            <circle cx="405" cy="100" r="18" fill={NEG} />
            <text x="405" y="105" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="800">C</text>
            <circle cx="465" cy="100" r="13" fill={POS} />
            <text x="465" y="105" fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="800">O</text>
            <line x1="358" y1="100" x2="387" y2="100" stroke={MUTED} strokeWidth="3" />
            <line x1="423" y1="100" x2="452" y2="100" stroke={MUTED} strokeWidth="3" />
            <text x="405" y="155" fill={TXT} fontSize="13" textAnchor="middle">souměrné → p = 0</text>
            <text x="405" y="185" fill={MUTED} fontSize="13" textAnchor="middle">dipól vznikne až v poli</text>
          </svg>
        </Figure>
        <ul>
          <li>
            <Term>Polární molekula</Term> = má <b>vlastní</b> (trvalý) dipólový moment. Náboj je v ní
            rozložen nesymetricky i bez vnějšího pole. Příklad: voda.
          </li>
          <li>
            <Term>Nepolární molekula</Term> = <b>nemá</b> vlastní dipólový moment (náboj je symetrický).
            Dipól se v ní může <i>indukovat</i> (vynutit) až tím, že ji vložíme do vnějšího pole.
          </li>
        </ul>
        <Callout kind="chytak" title="Chyták č. 3: definice polární molekuly">
          U zkoušky řekni přesně: <b>polární molekula = má vlastní (trvalý) dipólový moment</b>. Nestačí
          říct „je nabitá" — molekula je jako celek <b>neutrální</b>, jen má náboj rozdělený nesymetricky.
        </Callout>
      </Section>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat elektrický dipól a napsat dipólový moment p = Q·d (vektor od − k +).',
          'Popsat chování dipólu ve vnějším poli: M = p × E, |M| = p·E·sin α.',
          'Vědět, že moment je MAX při α = 90° a NULOVÝ při α = 0° (rovnovážná poloha).',
          'Rozlišit homogenní (jen rotace) a nehomogenní pole (rotace + translace).',
          'Rozlišit polární (vlastní p) a nepolární (p = 0) molekuly.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Jak je definovaný dipólový moment a kam míří jeho vektor?</>,
            a: (
              <>
                <M>{'\\vec p = Q\\,\\vec d'}</M>, velikost <M>{'p = Q\\cdot d'}</M> (náboj krát vzdálenost
                nábojů). Vektor míří <b>od záporného náboje ke kladnému</b> (od <M>{'-Q'}</M> k <M>{'+Q'}</M>).
              </>
            ),
          },
          {
            q: <>Při jakém úhlu α mezi <M>{'\\vec p'}</M> a <M>{'\\vec E'}</M> je otáčivý moment největší a kdy je nulový?</>,
            a: (
              <>
                Z <M>{'|\\vec M| = pE\\sin\\alpha'}</M>: <b>největší při <M>{'\\alpha = 90^\\circ'}</M></b>{' '}
                (dipól kolmo na pole, <M>{'\\sin 90^\\circ = 1'}</M>) a <b>nulový při <M>{'\\alpha = 0^\\circ'}</M></b>{' '}
                (dipól zarovnaný s polem, <M>{'\\sin 0^\\circ = 0'}</M> — rovnovážná poloha).
              </>
            ),
          },
          {
            q: <>Čím se liší chování dipólu v homogenním a v nehomogenním poli?</>,
            a: (
              <>
                V <b>homogenním</b> poli jsou obě síly stejně velké a opačné → vyruší se, dipól se{' '}
                <b>jen otáčí</b>. V <b>nehomogenním</b> poli je jedna síla větší → kromě otáčení se dipól
                <b> ještě posouvá (translace)</b> ve směru větší síly.
              </>
            ),
          },
          {
            q: <>Co znamená, že je molekula polární?</>,
            a: (
              <>
                Má <b>vlastní (trvalý) dipólový moment</b> — náboj je v ní rozložen nesymetricky i bez
                vnějšího pole (např. voda). Nepolární molekula vlastní dipólový moment nemá (<M>{'p = 0'}</M>),
                vznikne v ní až indukcí ve vnějším poli.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
