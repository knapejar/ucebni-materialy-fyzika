import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.8'

/* Pojmy, které tato lekce zavádí (pro pozdější wiki-proklikávání). */
export const provides = {
  'koherence': { lesson: '3.8', label: 'koherence', short: 'Stejná frekvence, stejná polarizace a konstantní fázový rozdíl — podmínka interference.' },
  'interference-svetla': { lesson: '3.8', label: 'interference světla', short: 'Skládání koherentních světelných vln; důkaz vlnové povahy světla.' },
  'younguv-pokus': { lesson: '3.8', label: 'Youngův pokus', short: 'Dvě štěrbiny → interferenční proužky; klasický důkaz vlnové povahy světla.' },
  'tenka-vrstva': { lesson: '3.8', label: 'interference na tenké vrstvě', short: 'Odraz na horním a dolním rozhraní vrstvy interferuje (olejová skvrna, antireflexní vrstva).' },
  'drahovy-rozdil': { lesson: '3.8', label: 'dráhový rozdíl', short: 'Rozdíl drah dvou paprsků; rozhoduje o max/min interference.' },
  'fazovy-posun-rozhrani': { lesson: '3.8', label: 'fázový posun na hustším prostředí', short: 'Při odrazu na opticky hustším prostředí se přidává zpoždění λ/2.' },
}

/* Šipka pro SVG. */
function Defs({ color, idName = 'ar' }: { color: string; idName?: string }) {
  return (
    <defs>
      <marker id={idName} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACCENT = '#a78bfa' // akcent tématu (fialová)
const RAY = '#f5c518' // paprsky světla (žlutá)
const TXT = '#e8ecf8'
const DIM = '#9aa6c4'
const PINK = '#fb7185' // dráhový rozdíl / zvýraznění
const GLASS = '#4a90c2'

export default function Lesson_3_8() {
  return (
    <>
      <p className="lead">
        Tohle je oblíbená zkoušková otázka, protože jde hezky „odvyprávět": interference světla je{' '}
        <Term>přímý důkaz, že světlo je vlna</Term>. Stačí umět tři věci — <b>podmínky (koherence)</b>,{' '}
        <b>Youngův pokus</b> a <b>tenkou vrstvu</b> (olejová skvrna, antireflexní vrstva) — a k tomu jeden chyták
        s <M>{'\\lambda/2'}</M>. To dáš.
      </p>

      <Section title="Co je interference světla a proč na ní záleží">
        <p>
          <Term id="interference-svetla">Interference světla</Term> je skládání dvou (nebo více) světelných vln. Světlo je{' '}
          <Term>elektromagnetické vlnění</Term> — intenzita elektrického pole <M>{'\\vec E'}</M> a indukce
          magnetického pole <M>{'\\vec B'}</M> jsou v každém bodě navzájem kolmé, takže jde o vlnění{' '}
          <b>příčné</b>. (Viditelné světlo má <M>{'380\\,\\mathrm{nm} < \\lambda < 780\\,\\mathrm{nm}'}</M>.)
        </p>
        <p>
          Když se dvě takové vlny potkají, jejich pole se <b>sčítají</b> (<Concept id="superpozice">princip superpozice</Concept>):
        </p>
        <MB>{'\\vec E = \\vec E_1 + \\vec E_2'}</MB>
        <p>
          Detektor (oko, kamera) ale neměří okamžité <M>{'\\vec E'}</M> — měří <b>intenzitu</b> (průměrnou
          energii). A při umocnění součtu vznikne navíc <Term>interferenční člen</Term> úměrný{' '}
          <M>{'\\vec E_1 \\cdot \\vec E_2'}</M>. Právě ten člen způsobí, že někde se vlny <b>zesílí</b>{' '}
          (maximum, světlo) a jinde <b>vyruší</b> (minimum, tma). Žádná částicová představa tohle nevysvětlí —
          proto je interference <Term>důkazem vlnové povahy světla</Term>.
        </p>
      </Section>

      <Section title="Kdy interference nastane — KOHERENCE (tady se ztrácejí body)">
        <p>
          Aby vznikl stabilní interferenční obrazec (pruhy, které se v čase nemění), musí být vlny{' '}
          <Term id="koherence">koherentní</Term>. To znamená splnit tři podmínky najednou:
        </p>
        <ol className="biglist">
          <li><b>Stejná frekvence</b> (tedy i stejná <Concept id="vlnova-delka">vlnová délka</Concept> <M>{'\\lambda'}</M>).</li>
          <li><b>Stejná <Concept id="polarizace-svetla">polarizace</Concept></b> — <M>{'\\vec E'}</M> obou vln kmitá ve stejné rovině (<M>{'\\vec E_{0,1} \\parallel \\vec E_{0,2}'}</M>).</li>
          <li><b>Konstantní fázový rozdíl</b> v čase (fázový rozdíl se nesmí náhodně měnit).</li>
        </ol>
        <p>
          Nekoherentní vlny (např. dvě obyčejné žárovky) interferenční obrazec <b>nedají</b> — fáze tam skáče
          tak rychle, že se obrazec rozmaže a vidíme jen průměr. Zdrojem koherentního světla je{' '}
          <b><Concept id="laser">laser</Concept></b>, nebo trik: vezme se <b>jeden</b> zdroj a jeho <Concept id="vlnoplocha">vlnoplocha</Concept> se rozdělí (štěrbinami,
          odrazem, lomem) — pak mají obě části stále stejný „rytmus".
        </p>
        <Callout kind="chytak" title="Chyták číslo jedna">
          <ul>
            <li>Interferovat mohou <b>jen koherentní</b> vlny — klíčové je <b>konstantní</b> fázový rozdíl.</li>
            <li>
              Vlny o <b>různých frekvencích</b> interferenční obrazec <b>nevytvoří</b> (fázový rozdíl se mění,
              obrazec se rozmaže). Když se tě zeptají „proč dvě žárovky neinterferují" — odpověz tímhle.
            </li>
            <li>
              Proto se na koherentní zdroj v praxi vyrábí ze <b>společné</b> vlnoplochy (jeden zdroj rozdělím),
              ne ze dvou nezávislých zdrojů.
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Youngův pokus (dvě štěrbiny) — klasika, co se vždycky chce">
        <p>
          <Term id="younguv-pokus">Youngův pokus</Term> je nejjednodušší způsob, jak interferenci světla ukázat — a zároveň{' '}
          <b>klasický důkaz vlnové povahy světla</b>. Princip: jeden zdroj (aby bylo světlo koherentní) →
          dvě blízké štěrbiny → vzdálené stínítko, na kterém naskáčou <b>interferenční proužky</b>.
        </p>

        <StepFigure
          title="Jak vzniknou proužky"
          steps={[
            {
              label: 'koherentní světlo',
              caption: <>Na <b>první stínítko</b> dopadá rovinná vlna a projde dvěma blízkými štěrbinami. Ty se podle <Concept id="huygensuv-princip">Huygensova principu</Concept> chovají jako <b>dva nové zdroje</b> — a protože vznikly z jedné vlnoplochy, vychází z nich světlo se <b>stejnou fází</b> (jsou koherentní).</>,
              content: (
                <svg viewBox="0 0 460 240" className="svg-fig">
                  <Defs color={RAY} />
                  {/* clona se dvěma štěrbinami */}
                  <rect x="150" y="20" width="10" height="200" fill={DIM} />
                  <rect x="150" y="95" width="10" height="14" fill="#0b1020" />
                  <rect x="150" y="131" width="10" height="14" fill="#0b1020" />
                  {/* rovinná vlna zleva */}
                  <g stroke={RAY} strokeWidth="2.5" opacity="0.85">
                    <line x1="20" y1="60" x2="150" y2="60" />
                    <line x1="20" y1="100" x2="150" y2="102" />
                    <line x1="20" y1="140" x2="150" y2="138" />
                    <line x1="20" y1="180" x2="150" y2="180" />
                  </g>
                  <text x="55" y="40" fill={TXT} fontSize="13">rovinná vlna</text>
                  <text x="168" y="92" fill={ACCENT} fontSize="13">štěrbina 1</text>
                  <text x="168" y="160" fill={ACCENT} fontSize="13">štěrbina 2</text>
                  <text x="120" y="232" fill={DIM} fontSize="12" textAnchor="middle">clona</text>
                </svg>
              ),
            },
            {
              label: 'dvě vlnoplochy',
              caption: <>Z obou štěrbin se šíří kruhové vlnoplochy a na cestě k druhému stínítku se <b>překrývají</b>. V každém bodě stínítka se sečte světlo z obou štěrbin.</>,
              content: (
                <svg viewBox="0 0 460 240" className="svg-fig">
                  <Defs color={RAY} />
                  <rect x="150" y="20" width="10" height="200" fill={DIM} />
                  <rect x="150" y="95" width="10" height="14" fill="#0b1020" />
                  <rect x="150" y="131" width="10" height="14" fill="#0b1020" />
                  {/* vlnoplochy ze štěrbiny 1 */}
                  <g fill="none" stroke={RAY} strokeWidth="1.6" opacity="0.7">
                    <path d="M160,102 A40,40 0 0 1 160,22" />
                    <path d="M160,102 A75,75 0 0 1 160,-10" transform="translate(0,0)" />
                    <path d="M160,102 A110,110 0 0 1 160,-40" />
                  </g>
                  {/* vlnoplochy ze štěrbiny 2 */}
                  <g fill="none" stroke={ACCENT} strokeWidth="1.6" opacity="0.7">
                    <path d="M160,138 A40,40 0 0 0 160,218" />
                    <path d="M160,138 A75,75 0 0 0 160,250" />
                    <path d="M160,138 A110,110 0 0 0 160,280" />
                  </g>
                  <line x1="420" y1="20" x2="420" y2="220" stroke={DIM} strokeWidth="6" />
                  <text x="120" y="232" fill={DIM} fontSize="12" textAnchor="middle">clona</text>
                  <text x="430" y="124" fill={DIM} fontSize="12">stínítko</text>
                </svg>
              ),
            },
            {
              label: 'dráhový rozdíl',
              caption: <>Do každého bodu stínítka dorazí paprsky z obou štěrbin po <b>různě dlouhé dráze</b>. Rozhoduje jejich <b>dráhový rozdíl</b> <M>{'\\delta'}</M>: na ose je <M>{'\\delta = 0'}</M> (maximum), výš a níž se dráhy rozcházejí.</>,
              content: (
                <svg viewBox="0 0 460 240" className="svg-fig">
                  <Defs color={RAY} />
                  <rect x="150" y="20" width="10" height="200" fill={DIM} />
                  <line x1="420" y1="20" x2="420" y2="220" stroke={DIM} strokeWidth="6" />
                  {/* paprsky do bodu nad osou */}
                  <line x1="160" y1="102" x2="420" y2="80" stroke={RAY} strokeWidth="2.5" />
                  <line x1="160" y1="138" x2="420" y2="80" stroke={ACCENT} strokeWidth="2.5" />
                  <circle cx="420" cy="80" r="5" fill={PINK} />
                  <text x="335" y="60" fill={PINK} fontSize="13">δ ≠ 0</text>
                  {/* paprsky do bodu na ose */}
                  <line x1="160" y1="102" x2="420" y2="160" stroke={RAY} strokeWidth="2" opacity="0.6" />
                  <line x1="160" y1="138" x2="420" y2="160" stroke={ACCENT} strokeWidth="2" opacity="0.6" />
                  <text x="300" y="185" fill={TXT} fontSize="12">na ose: δ = 0</text>
                  <text x="430" y="124" fill={DIM} fontSize="12">stínítko</text>
                </svg>
              ),
            },
            {
              label: 'proužky',
              caption: <>Tam, kde je <M>{'\\delta'}</M> roven <b>celistvému násobku <M>{'\\lambda'}</M></b>, se vlny sečtou → <b>maximum</b> (světlý proužek). Kde je <M>{'\\delta'}</M> roven <b>lichému násobku <M>{'\\lambda/2'}</M></b>, se vyruší → <b>minimum</b> (tma). Vznikne pravidelné střídání světlých a tmavých proužků.</>,
              content: (
                <svg viewBox="0 0 460 240" className="svg-fig">
                  <line x1="420" y1="20" x2="420" y2="220" stroke={DIM} strokeWidth="3" />
                  {/* proužky na stínítku */}
                  {[40, 80, 120, 160, 200].map((y, k) => (
                    <rect key={k} x="380" y={y - 8} width="40" height="16" rx="3" fill={RAY} opacity={0.9} />
                  ))}
                  <text x="200" y="40" fill={RAY} fontSize="13">maximum: δ = k·λ</text>
                  <text x="200" y="62" fill={DIM} fontSize="13">minimum: δ = (2k+1)·λ/2</text>
                  <text x="200" y="150" fill={TXT} fontSize="13">→ interferenční proužky</text>
                  <text x="200" y="172" fill={DIM} fontSize="12">(střídání světlo / tma)</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Zapsáno vzorečky pro <Term>dráhový rozdíl</Term> <M>{'\\delta'}</M> (rozdíl délek obou drah):
        </p>
        <MB>{'\\text{maximum:}\\quad \\delta = k\\lambda \\qquad\\qquad \\text{minimum:}\\quad \\delta = (2k+1)\\frac{\\lambda}{2}'}</MB>
        <p>
          kde <M>{'k = 0, 1, 2, \\dots'}</M>. Slovy: <b>sudý počet půlvln</b> = maximum, <b>lichý počet
          půlvln</b> = minimum.
        </p>
      </Section>

      <Section title="Interference na tenké vrstvě (olejová skvrna, mýdlová bublina, antireflexní vrstva)">
        <p>
          Tohle je nejhezčí praktická ukázka — a u zkoušky téměř jistá. Když světlo dopadne na{' '}
          <Term id="tenka-vrstva">tenkou planparalelní vrstvu</Term> (olej na vodě, mýdlová bublina, vrstvička na čočce),
          část se odrazí na <b>horním</b> rozhraní a část projde dovnitř, odrazí se na <b>dolním</b> rozhraní
          a vyjde ven. Oba odražené paprsky vznikly z <b>jednoho</b> zdroje, takže jsou <b>koherentní</b> —
          a interferují spolu.
        </p>

        <Figure caption="Paprsek 1 se odráží na horním rozhraní, paprsek 2 projde vrstvou (tloušťka d), odrazí se dole a vrátí se. Růžově je dráhový rozdíl σ navíc, který urazí paprsek 2 ve vrstvě.">
          <svg viewBox="0 0 460 280" className="svg-fig">
            <Defs color={RAY} />
            {/* vrstva n2 */}
            <rect x="40" y="120" width="380" height="90" fill={GLASS} opacity="0.25" />
            <line x1="40" y1="120" x2="420" y2="120" stroke={TXT} strokeWidth="2" />
            <line x1="40" y1="210" x2="420" y2="210" stroke={TXT} strokeWidth="2" />
            {/* prostředí */}
            <text x="380" y="100" fill={DIM} fontSize="13">n₁ (vzduch)</text>
            <text x="380" y="170" fill={GLASS} fontSize="13">n₂ &gt; n₁</text>
            <text x="380" y="235" fill={DIM} fontSize="13">n₁</text>
            {/* tloušťka d */}
            <line x1="62" y1="120" x2="62" y2="210" stroke={PINK} strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="46" y="170" fill={PINK} fontSize="14" fontStyle="italic">d</text>
            {/* dopadající paprsek */}
            <line x1="90" y1="50" x2="160" y2="120" stroke={RAY} strokeWidth="2.5" markerEnd="url(#ar)" />
            <text x="92" y="46" fill={TXT} fontSize="12">dopad</text>
            {/* paprsek 1 — odraz nahoře */}
            <line x1="160" y1="120" x2="230" y2="50" stroke={RAY} strokeWidth="3" markerEnd="url(#ar)" />
            <text x="232" y="48" fill={RAY} fontSize="13">paprsek 1</text>
            {/* paprsek 2 — dovnitř, odraz dole, ven */}
            <line x1="160" y1="120" x2="250" y2="210" stroke={ACCENT} strokeWidth="2.5" />
            <line x1="250" y1="210" x2="340" y2="120" stroke={ACCENT} strokeWidth="2.5" />
            <line x1="340" y1="120" x2="410" y2="50" stroke={ACCENT} strokeWidth="3" markerEnd="url(#ar)" />
            <text x="345" y="48" fill={ACCENT} fontSize="13">paprsek 2</text>
            {/* sigma uvnitř */}
            <text x="248" y="175" fill={PINK} fontSize="15" fontStyle="italic">σ</text>
            {/* fázový posun */}
            <circle cx="160" cy="120" r="7" fill="none" stroke={PINK} strokeWidth="2" />
            <text x="120" y="112" fill={PINK} fontSize="12">−λ/2 (odraz na hustším)</text>
          </svg>
        </Figure>

        <p>
          Paprsek 2 urazí ve vrstvě navíc dráhu — to je <Term>dráhový rozdíl</Term> <M>{'\\sigma'}</M>. Z
          geometrie (tloušťka <M>{'d'}</M>, úhel lomu <M>{'\\beta'}</M>) platí{' '}
          <M>{'\\sigma = 2d\\cos\\beta'}</M>. Navíc — a to je ten chyták — protože vrstva má vyšší index
          lomu (<M>{'n_2 > n_1'}</M>), přidá se k tomu fázový posun.
        </p>

        <Callout kind="chytak" title="Hlavní chyták: fázový posun −λ/2 na hustším prostředí">
          <p>
            <Term id="fazovy-posun-rozhrani">Při odrazu světla na <b>opticky hustším</b> prostředí (vyšší index lomu) se fáze vlny otočí o
            půl periody — jako by se přidalo <b>fázové zpoždění o <M>{'\\lambda/2'}</M></b></Term>. (Je to analogie
            odrazu mechanického vlnění na <b>pevném konci</b>. Naopak odraz na <b>řidším</b> prostředí fázi
            nemění — jako volný konec.)
          </p>
          <ul>
            <li>Paprsek 1 (odraz nahoře na hustším <M>{'n_2'}</M>): fázi <b>otočí</b> → přidává <M>{'-\\lambda/2'}</M>.</li>
            <li>Paprsek 2 (odraz dole na řidším <M>{'n_1'}</M>): fázi <b>nemění</b>.</li>
            <li>
              Proto je v podmínce pro maximum/minimum potřeba ten člen <M>{'\\lambda/2'}</M> <b>nezapomenout</b>
              — jinak ti vyjde max tam, kde je ve skutečnosti min. To je nejčastější chyba v této otázce.
            </li>
          </ul>
        </Callout>

        <p>
          <b>Příklady, které zmiň u zkoušky:</b>
        </p>
        <ul>
          <li>
            <b>Olejová skvrna na mokré vozovce</b> / <b>mýdlová bublina</b>: bílé světlo obsahuje všechny
            <M>{'\\lambda'}</M>; pro každou tloušťku se zesílí jiná barva → vidíme <b>duhové barevné pruhy</b>.
          </li>
          <li>
            <b>Antireflexní vrstva</b> na čočkách (brýle, foťák): tloušťka se navrhne tak, aby odražené světlo
            interferovalo na <b>minimum</b> → odraz se potlačí a víc světla projde dovnitř. Přesný opak duhy —
            tady chceme <b>tmu v odrazu</b>.
          </li>
        </ul>
      </Section>

      <Section title="Světlo na rozhraní — krátké shrnutí (odraz / lom)">
        <p>
          Na rozhraní dvou prostředí se světlo z části <b>odrazí</b> a z části <b>láme</b> (mění směr, protože
          se v hustším prostředí šíří pomaleji, <M>{'v = c/n'}</M>). Pro interferenci na vrstvě jsou důležité
          dvě věci, které už znáš:
        </p>
        <ul>
          <li>
            Ve vrstvě o indexu lomu <M>{'n'}</M> je <M>{'\\lambda'}</M> menší — počítáme proto{' '}
            <b>optickou dráhu</b> <M>{'l = 2nd'}</M> (světlo tam a zpět vrstvou o tloušťce <M>{'d'}</M>).
          </li>
          <li>
            Odraz na <b>hustším</b> prostředí přidává <M>{'\\lambda/2'}</M> (fázové zpoždění), odraz na{' '}
            <b>řidším</b> ne. (To je ten chyták výše.)
          </li>
        </ul>
      </Section>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit, že interference je důkazem vlnové povahy světla (přes interferenční člen ~ E₁·E₂).',
          'Vyjmenovat podmínky koherence: stejná frekvence, stejná polarizace, konstantní fázový rozdíl.',
          'Popsat Youngův pokus (jeden zdroj → dvě štěrbiny → proužky) a podmínku max/min přes dráhový rozdíl δ.',
          'Popsat interferenci na tenké vrstvě a uvést příklad (olejová skvrna / antireflexní vrstva).',
          'Znát fázový posun −λ/2 při odrazu na opticky hustším prostředí a proč ho nesmím vynechat.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Za jakých podmínek může nastat interference světla a proč dvě obyčejné žárovky neinterferují?</>,
            a: <>Vlny musí být <b>koherentní</b>: stejná <b>frekvence</b>, stejná <b>polarizace</b> a <b>konstantní fázový rozdíl</b>. Dvě žárovky jsou <b>nezávislé</b> zdroje s náhodně skákající fází (a různými frekvencemi) — fázový rozdíl není konstantní, takže se obrazec rozmaže a interferenci nevidíme.</>,
          },
          {
            q: <>Proč je interference experimentálním důkazem vlnové povahy světla?</>,
            a: <>Protože při skládání vln vznikne <b>interferenční člen</b> (~ <M>{'\\vec E_1\\cdot\\vec E_2'}</M>), který způsobí střídání <b>maxim a minim</b> (světlo–tma). Takové zesilování a vyrušení umí jen vlny — částicová představa to nevysvětlí.</>,
          },
          {
            q: <>Popiš Youngův pokus a napiš podmínku pro interferenční maximum a minimum.</>,
            a: <>Koherentní (rovinné) světlo projde dvěma blízkými <b>štěrbinami</b>, ze kterých vychází se stejnou fází, a dopadá na vzdálené stínítko, kde vzniknou <b>interferenční proužky</b>. Rozhoduje <b>dráhový rozdíl</b> <M>{'\\delta'}</M>: maximum pro <M>{'\\delta = k\\lambda'}</M>, minimum pro <M>{'\\delta = (2k+1)\\tfrac{\\lambda}{2}'}</M>.</>,
          },
          {
            q: <>Co se stane s fází při odrazu na opticky hustším prostředí a proč to musíš u tenké vrstvy hlídat?</>,
            a: <>Fáze se otočí o půl periody — přidává se <b>fázové zpoždění <M>{'\\lambda/2'}</M></b> (analogie pevného konce u mechanického vlnění; na řidším prostředí se fáze nemění = volný konec). U tenké vrstvy nastane jen na <b>jednom</b> ze dvou rozhraní, takže ho musíš <b>započítat</b> do podmínky max/min — jinak prohodíš maximum za minimum. To je nejčastější chyba.</>,
          },
        ]}
      />
    </>
  )
}
