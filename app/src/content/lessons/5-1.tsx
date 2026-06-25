import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.1'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější prokliky). */
export const provides = {
  'nukleony': { lesson: '5.1', label: 'nukleony', short: 'Protony a neutrony — částice v jádře.' },
  'protonove-cislo': { lesson: '5.1', label: 'protonové číslo Z', short: 'Počet protonů v jádře; určuje, o jaký prvek jde.' },
  'nukleonove-cislo': { lesson: '5.1', label: 'nukleonové číslo A', short: 'Počet nukleonů, A = N + Z.' },
  'izotopy': { lesson: '5.1', label: 'izotopy', short: 'Stejné Z, různé N — stejné chemické, jiné fyzikální vlastnosti.' },
  'jaderne-sily': { lesson: '5.1', label: 'jaderné síly', short: 'Přitažlivé, krátký dosah, saturace, nezávislé na náboji.' },
}

/* —— barvy (téma 5: jaderná fyzika) —— */
const ACC = '#34d399'   // akcent tématu (zelená)
const PROTON = '#fb7185' // proton (kladný) — červená
const NEUTRON = '#9aa6c4' // neutron (bez náboje) — šedá
const FORCE = '#34d399'  // jaderná síla
const COUL = '#fbbf24'   // coulombovská (odpudivá) — žlutá
const TXT = '#e8ecf8'

/* šipka pro SVG */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* jeden nukleon jako kolečko */
function Nuc({ x, y, kind, r = 13 }: { x: number; y: number; kind: 'p' | 'n'; r?: number }) {
  const fill = kind === 'p' ? PROTON : NEUTRON
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke="#0b1020" strokeWidth="1.5" />
      <text x={x} y={y + 5} fill="#0b1020" fontSize="14" fontWeight="700" textAnchor="middle">
        {kind === 'p' ? '+' : '0'}
      </text>
    </g>
  )
}

export default function Lesson_5_1() {
  return (
    <>
      <p className="lead">
        Tohle je vstupní brána do jaderné fyziky a u zkoušky skoro jistá otázka. Stačí pár pojmů
        (<Term>Z, N, A</Term>), jeden jednoduchý vztah <M>{'A = N + Z'}</M> a umět vysvětlit,
        proč jádro vůbec drží pohromadě, když se protony uvnitř zuřivě odpuzují. Když tohle dáš,
        máš úvod tématu jistý.
      </p>

      <Section title="Z čeho se jádro skládá">
        <p>
          Jádro je tvořeno <Term id="nukleony">nukleony</Term> — a nukleony jsou dva druhy částic:{' '}
          <b style={{ color: PROTON }}>protony</b> (kladný náboj) a{' '}
          <b style={{ color: NEUTRON }}>neutrony</b> (bez náboje). Jádro je maličké, jeho velikost je
          řádově <M>{'10^{-15}\\,\\mathrm{m}'}</M> (to je jeden <Term>femtometr</Term>, fm), a přitom
          v něm sedí skoro celá hmotnost atomu (99,9 %). Kolem něj obíhá záporný elektronový obal.
        </p>

        <p>Tři čísla, která musíš znát zpaměti a nikdy si je nesmět:</p>
        <ul className="biglist">
          <li>
            <b style={{ color: PROTON }}>Z — <Term id="protonove-cislo">protonové číslo</Term></b> = počet protonů. Určuje,{' '}
            <b>o jaký prvek jde</b> (a tím i celou chemii).
          </li>
          <li>
            <b style={{ color: NEUTRON }}>N — neutronové číslo</b> = počet neutronů.
          </li>
          <li>
            <b style={{ color: ACC }}>A — <Term id="nukleonove-cislo">nukleonové (hmotnostní) číslo</Term></b> = počet všech nukleonů.
          </li>
        </ul>

        <p>A vztah, který u zkoušky napíšeš jako první:</p>
        <MB>{'A = N + Z'}</MB>

        <p>
          Prvek se značí <M>{'{}^{A}_{Z}\\mathrm{X}'}</M> — nahoře A, dole Z. Třeba uran{' '}
          <M>{'{}^{235}_{\\;92}\\mathrm{U}'}</M> má <M>{'Z = 92'}</M> protonů a{' '}
          <M>{'N = A - Z = 235 - 92 = 143'}</M> neutronů.
        </p>

        <Figure caption="Jádro = nukleony pohromadě. Červené protony (+) a šedé neutrony (0). Z je počet protonů, A je počet všech nukleonů.">
          <svg viewBox="0 0 360 200" className="svg-fig">
            <circle cx="135" cy="100" r="62" fill="none" stroke={ACC} strokeWidth="2" strokeDasharray="4 4" />
            <Nuc x={120} y={78} kind="p" />
            <Nuc x={152} y={84} kind="n" />
            <Nuc x={108} y={108} kind="n" />
            <Nuc x={138} y={108} kind="p" />
            <Nuc x={166} y={112} kind="p" />
            <Nuc x={124} y={134} kind="n" />
            <Nuc x={154} y={134} kind="n" />
            <text x="135" y="184" fill={ACC} fontSize="13" textAnchor="middle">jádro ~ 10⁻¹⁵ m</text>
            <Nuc x={290} y={70} kind="p" />
            <text x="312" y="75" fill={TXT} fontSize="13" textAnchor="start">proton</text>
            <Nuc x={290} y={110} kind="n" />
            <text x="312" y="115" fill={TXT} fontSize="13" textAnchor="start">neutron</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Izotopy — stejný prvek, jiná váha">
        <p>
          <Term id="izotopy">Izotopy</Term> jsou jádra <b>stejného prvku</b>, která mají{' '}
          <b style={{ color: PROTON }}>stejné Z</b> (stejný počet protonů), ale{' '}
          <b style={{ color: NEUTRON }}>různé N</b> (různý počet neutronů). Protože se liší jen počtem
          neutronů, liší se i hmotností (A) — ale chemicky se chovají úplně stejně.
        </p>

        <Callout kind="chytak" title="Proč mají izotopy stejné chemické vlastnosti?">
          Protože mají <b>stejný počet protonů (Z) → stejný počet elektronů → stejný elektronový obal</b>.
          A chemii dělá <b>elektronový obal</b>, ne jádro. Neutrony chemii neřeší. Lišit se budou jen{' '}
          <b>fyzikálně</b> (hmotnost, hustota, případně <Concept id="radioaktivita">radioaktivita</Concept>) a v <b>jaderných reakcích</b>.
        </Callout>

        <p>Učebnicový příklad jsou izotopy vodíku (<M>{'Z = 1'}</M>):</p>
        <Figure caption="Tři izotopy vodíku: všechny mají 1 proton (Z = 1), liší se počtem neutronů. Chemicky stejné, fyzikálně různé.">
          <svg viewBox="0 0 480 150" className="svg-fig">
            {/* protium */}
            <g>
              <circle cx="80" cy="60" r="30" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
              <Nuc x={80} y={60} kind="p" />
              <text x="80" y="118" fill={TXT} fontSize="13" textAnchor="middle">vodík</text>
              <text x="80" y="136" fill={TXT} fontSize="13" textAnchor="middle">¹H · N=0</text>
            </g>
            {/* deuterium */}
            <g>
              <circle cx="240" cy="60" r="30" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
              <Nuc x={228} y={60} kind="p" />
              <Nuc x={252} y={60} kind="n" />
              <text x="240" y="118" fill={ACC} fontSize="13" textAnchor="middle" fontWeight="700">deuterium</text>
              <text x="240" y="136" fill={TXT} fontSize="13" textAnchor="middle">²H · N=1</text>
            </g>
            {/* tritium */}
            <g>
              <circle cx="400" cy="60" r="30" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
              <Nuc x={388} y={50} kind="p" />
              <Nuc x={412} y={50} kind="n" />
              <Nuc x={400} y={72} kind="n" />
              <text x="400" y="118" fill={ACC} fontSize="13" textAnchor="middle" fontWeight="700">tritium</text>
              <text x="400" y="136" fill={TXT} fontSize="13" textAnchor="middle">³H · N=2</text>
            </g>
          </svg>
        </Figure>
        <p>
          <b style={{ color: ACC }}>Deuterium</b> (<M>{'{}^{2}_{1}\\mathrm{H}'}</M>, 1 proton + 1 neutron)
          a <b style={{ color: ACC }}>tritium</b> (<M>{'{}^{3}_{1}\\mathrm{H}'}</M>, 1 proton + 2 neutrony)
          jsou pořád vodík — chemicky se chovají jako vodík, jen jsou těžší.
        </p>
      </Section>

      <Section title="Jaderné síly vs. Coulombovská odpudivá síla">
        <p>
          Tady je jádro toho, čemu se zkoušející věnuje nejvíc. V jádře jsou na sebe naskládané protony
          ve vzdálenosti <M>{'10^{-15}\\,\\mathrm{m}'}</M> — a stejné náboje se odpuzují. Působí mezi nimi{' '}
          <Concept id="coulombuv-zakon">Coulombovská odpudivá síla</Concept>, která by jádro měla roztrhat. Že se to neděje,
          zařizují <Term id="jaderne-sily">jaderné síly</Term> (silná interakce), které nukleony drží u sebe.
        </p>

        <div className="cmp-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th style={{ color: FORCE }}>Jaderné síly</th>
                <th style={{ color: COUL }}>Coulombovská síla</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>působí</td><td><b>přitažlivě</b> (drží jádro)</td><td><b>odpudivě</b> (roztrhává)</td></tr>
              <tr><td>mezi čím</td><td>všemi nukleony: p-p, n-n, n-p</td><td>jen mezi protony (náboji)</td></tr>
              <tr><td>dosah</td><td><b>velmi krátký</b> (jen sousedi)</td><td><b>delší</b> (klesá pomaleji ~1/r²)</td></tr>
              <tr><td>náboj</td><td><b>nezávisí na náboji</b></td><td>závisí na náboji</td></tr>
              <tr><td>velikost</td><td>na malé vzdálenosti mnohem větší</td><td>menší</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Dvě vlastnosti jaderných sil si zapamatuj nejvíc, protože je zkoušející rád slyší:
        </p>
        <ul className="biglist">
          <li>
            <b>Krátký dosah a saturace (nasycení).</b> Jaderná síla působí jen mezi{' '}
            <b>nejbližšími sousedy</b>. Každý nukleon „cítí" jen pár nukleonů kolem sebe, ne celé jádro.
          </li>
          <li>
            <b>Nezávislost na náboji.</b> Jaderná síla působí <b>stejně</b> mezi p-p, n-n i n-p.
            Je jí jedno, jestli má nukleon náboj, nebo ne.
          </li>
        </ul>

        <Figure caption="Souboj sil v jádře: jaderná síla (zelená) přitahuje a má krátký dosah; Coulombovská (žlutá) odpuzuje protony a má delší dosah.">
          <svg viewBox="0 0 420 160" className="svg-fig">
            <Defs id="arF" color={FORCE} />
            <Defs id="arC" color={COUL} />
            <Nuc x={150} y={80} kind="p" r={16} />
            <Nuc x={270} y={80} kind="p" r={16} />
            {/* jaderná přitažlivá (dovnitř) */}
            <line x1="178" y1="64" x2="232" y2="64" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF)" />
            <line x1="242" y1="64" x2="188" y2="64" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF)" />
            <text x="210" y="48" fill={FORCE} fontSize="13" textAnchor="middle">jaderná (přitažlivá)</text>
            {/* coulombovská odpudivá (ven) */}
            <line x1="140" y1="100" x2="80" y2="100" stroke={COUL} strokeWidth="4" markerEnd="url(#arC)" />
            <line x1="280" y1="100" x2="340" y2="100" stroke={COUL} strokeWidth="4" markerEnd="url(#arC)" />
            <text x="210" y="128" fill={COUL} fontSize="13" textAnchor="middle">Coulombovská (odpudivá)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Proč mají těžší jádra víc neutronů">
        <p>
          U lehkých jader (<M>{'A < 20'}</M>) je počet protonů a neutronů zhruba stejný (<M>{'N \\approx Z'}</M>).
          Ale čím těžší jádro, tím <b>rychleji roste počet neutronů než protonů</b>. Proč? Sleduj krok po kroku.
        </p>

        <StepFigure
          title="Proč těžká jádra potřebují přebytek neutronů"
          steps={[
            {
              label: 'lehké jádro',
              caption: <>Lehké jádro: protonů a neutronů je zhruba stejně (<M>{'N \\approx Z'}</M>). Protonů je málo a jsou blízko, jaderná síla v pohodě přebije odpuzování.</>,
              content: (
                <svg viewBox="0 0 360 150" className="svg-fig">
                  <circle cx="180" cy="75" r="42" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
                  <Nuc x={166} y={58} kind="p" />
                  <Nuc x={194} y={62} kind="n" />
                  <Nuc x={160} y={86} kind="n" />
                  <Nuc x={188} y={90} kind="p" />
                  <text x="180" y="138" fill={TXT} fontSize="13" textAnchor="middle">N ≈ Z — stabilní</text>
                </svg>
              ),
            },
            {
              label: 'problém odpuzování',
              caption: <><b>Coulombovské odpuzování</b> protonů má <b>delší dosah</b> — každý proton odpuzuje úplně všechny ostatní protony, i ty na druhém konci jádra. To se s rostoucím počtem protonů sčítá a roste.</>,
              content: (
                <svg viewBox="0 0 360 150" className="svg-fig">
                  <Defs id="arC2" color={COUL} />
                  <circle cx="180" cy="75" r="56" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
                  <Nuc x={150} y={60} kind="p" r={12} />
                  <Nuc x={210} y={60} kind="p" r={12} />
                  <Nuc x={180} y={95} kind="p" r={12} />
                  <line x1="162" y1="60" x2="198" y2="60" stroke={COUL} strokeWidth="3" markerEnd="url(#arC2)" />
                  <line x1="156" y1="70" x2="174" y2="90" stroke={COUL} strokeWidth="3" markerEnd="url(#arC2)" />
                  <line x1="204" y1="70" x2="186" y2="90" stroke={COUL} strokeWidth="3" markerEnd="url(#arC2)" />
                  <text x="180" y="140" fill={COUL} fontSize="13" textAnchor="middle">protony se odpuzují přes celé jádro</text>
                </svg>
              ),
            },
            {
              label: 'jaderná síla nestíhá',
              caption: <><b>Jaderná síla má krátký dosah a saturuje</b> — drží jen nejbližší sousedy a nedosáhne přes celé velké jádro. Takže ve velkém jádře přitažlivost „nestíhá" sčítané odpuzování.</>,
              content: (
                <svg viewBox="0 0 360 150" className="svg-fig">
                  <Defs id="arF2" color={FORCE} />
                  <circle cx="180" cy="75" r="56" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
                  <Nuc x={150} y={60} kind="p" r={12} />
                  <Nuc x={210} y={60} kind="p" r={12} />
                  <Nuc x={180} y={95} kind="p" r={12} />
                  <line x1="162" y1="62" x2="170" y2="86" stroke={FORCE} strokeWidth="3" markerEnd="url(#arF2)" />
                  <text x="180" y="140" fill={FORCE} fontSize="13" textAnchor="middle">jaderná síla jen mezi sousedy</text>
                </svg>
              ),
            },
            {
              label: 'řešení = víc neutronů',
              caption: <>Řešení: přidat <b style={{ color: NEUTRON }}>neutrony</b>. Neutrony přidávají <b>jen přitažlivou</b> jadernou sílu (jsou nenabité, neodpuzují), a tím rozředí protony a stmelí jádro. Proto těžká jádra mají <b>přebytek neutronů</b> (<M>{'N > Z'}</M>).</>,
              content: (
                <svg viewBox="0 0 360 150" className="svg-fig">
                  <circle cx="180" cy="75" r="56" fill="none" stroke={ACC} strokeWidth="1.5" strokeDasharray="3 3" />
                  <Nuc x={150} y={58} kind="p" r={12} />
                  <Nuc x={210} y={58} kind="p" r={12} />
                  <Nuc x={180} y={92} kind="p" r={12} />
                  <Nuc x={178} y={58} kind="n" r={12} />
                  <Nuc x={150} y={88} kind="n" r={12} />
                  <Nuc x={210} y={88} kind="n" r={12} />
                  <text x="180" y="140" fill={NEUTRON} fontSize="13" textAnchor="middle">N &gt; Z — neutrony tmelí jádro</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Krátká věta na zkoušku: <i>„Coulombovské odpuzování protonů má delší dosah a s rostoucím Z roste,
          kdežto přitažlivá jaderná síla má krátký dosah a saturuje. Proto těžká jádra přidávají neutrony,
          které přitahují, ale neodpuzují, a tím jádro stabilizují."</i>
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady se ztrácejí body)">
        <ul>
          <li>Izotopy mají stejné <b>chemické</b> vlastnosti, protože mají <b>stejné Z → stejný elektronový obal</b>. Liší se jen <b>fyzikálně</b> (hmotnost) a v <b>jaderných reakcích</b>.</li>
          <li>Jaderná síla <b>nezávisí na náboji</b> — působí stejně p-p, n-n i n-p. Nepleť si ji s elektrickou silou.</li>
          <li>Jaderná síla má <b>velmi krátký dosah</b> a <b>saturuje</b> (každý nukleon drží jen pár sousedů). Coulombovská má <b>delší</b> dosah.</li>
          <li><M>{'A = N + Z'}</M>, ne <M>{'A = N \\cdot Z'}</M>. A počet neutronů spočítáš jako <M>{'N = A - Z'}</M>.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit, co je nukleon, a popsat čísla Z, N, A včetně vztahu A = N + Z.',
          'Definovat izotopy a vysvětlit, PROČ mají stejné chemické vlastnosti (stejné Z → stejný elektronový obal).',
          'Porovnat jaderné a Coulombovské síly (přitažlivé/odpudivé, dosah, závislost na náboji, mezi čím působí).',
          'Vysvětlit, proč mají těžší jádra víc neutronů než protonů.',
          'Uvést izotopy vodíku: deuterium a tritium.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co znamenají symboly Z, N, A a jaký je mezi nimi vztah?',
            a: <>Z = protonové číslo (počet protonů), N = neutronové číslo (počet neutronů), A = nukleonové (hmotnostní) číslo (počet všech nukleonů). Platí <M>{'A = N + Z'}</M>, takže <M>{'N = A - Z'}</M>.</>,
          },
          {
            q: 'Co jsou izotopy a proč mají stejné chemické vlastnosti?',
            a: <>Jádra téhož prvku se <b>stejným Z</b>, ale <b>různým N</b>. Stejné chemické vlastnosti mají proto, že stejné Z znamená <b>stejný počet elektronů a stejný elektronový obal</b> — a chemii dělá obal. Liší se fyzikálně (hmotnost). Příklad: deuterium <M>{'{}^{2}_{1}\\mathrm{H}'}</M> a tritium <M>{'{}^{3}_{1}\\mathrm{H}'}</M>.</>,
          },
          {
            q: 'Vyjmenuj vlastnosti jaderných sil a porovnej je s Coulombovskou silou.',
            a: <>Jaderné síly: <b>přitažlivé</b>, <b>velmi krátký dosah</b>, <b>saturace</b> (jen nejbližší sousedi), <b>nezávislé na náboji</b> (p-p = n-n = n-p), na malé vzdálenosti mnohem silnější. Coulombovská síla: <b>odpudivá</b>, <b>delší dosah</b>, působí <b>jen mezi protony</b> (náboji), závisí na náboji.</>,
          },
          {
            q: 'Proč mají těžší jádra více neutronů než protonů?',
            a: <>S rostoucím počtem protonů roste <b>Coulombovské odpuzování</b>, které má <b>delší dosah</b> a sčítá se přes celé jádro. Přitažlivá <b>jaderná síla má krátký dosah a saturuje</b>, takže velké jádro nestmelí sama. Proto se přidají <b>neutrony</b> — přidávají jen přitažlivou jadernou sílu (neodpuzují) a jádro stabilizují, takže <M>{'N > Z'}</M>.</>,
          },
        ]}
      />
    </>
  )
}
