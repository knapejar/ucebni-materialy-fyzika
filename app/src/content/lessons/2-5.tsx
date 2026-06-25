import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.5'

/* Pojmy, které tahle lekce poprvé zavádí (pro pozdější wiki-proklik). */
export const provides = {
  'gaussova-veta': { lesson: '2.5', label: 'Gaussova věta', short: 'Tok intenzity uzavřenou plochou = Q/ε₀ — závisí jen na náboji uvnitř.' },
  'tok-pole': { lesson: '2.5', label: 'tok intenzity plochou', short: 'Kolik siločar prochází plochou; pro uzavřenou plochu φ_E = Q/ε₀.' },
  'gaussova-plocha': { lesson: '2.5', label: 'Gaussova plocha', short: 'Libovolná myšlená uzavřená plocha, kterou počítáme tok.' },
}

const ACCENT = '#38bdf8' // akcent tématu (modrá)
const TXT = '#e8ecf8'
const POS = '#fb7185' // kladný náboj
const NEG = '#60a5fa' // záporný náboj
const SURF = '#94a3b8' // myšlená (Gaussova) plocha

/* Šipka pro SVG (marker). Dovolí víc barev přes id. */
function Defs() {
  return (
    <defs>
      <marker id="ar25" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACCENT} />
      </marker>
    </defs>
  )
}

/* Animované paprsky pro StepScene: 8 siločar z náboje (210,100).
   Délka roste podle plochy; v posledním kroku (náboj venku) zmizí. */
const RAY_DIRS = [0, 45, 90, 135, 180, 225, 270, 315]
const RAY_LEN = [70, 102, 70, 70] // kroky: malá, velká, divný tvar, (venku – schováno)
function AnimRays() {
  const cx = 210
  const cy = 100
  const r0 = 17
  return (
    <>
      {RAY_DIRS.map((deg, i) => {
        const a = (deg * Math.PI) / 180
        const ca = Math.cos(a)
        const sa = Math.sin(a)
        const x1 = cx + r0 * ca
        const y1 = cy + r0 * sa
        const x2 = RAY_LEN.map((L) => cx + L * ca)
        const y2 = RAY_LEN.map((L) => cy + L * sa)
        return (
          <ALine
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={ACCENT}
            strokeWidth={2.4}
            markerEnd="url(#ar25)"
            opacity={[0.92, 0.92, 0.92, 0]}
          />
        )
      })}
    </>
  )
}

export default function Lesson_2_5() {
  return (
    <>
      <p className="lead">
        <Term id="gaussova-veta">Gaussova věta</Term> je u zkoušky vděčná: stačí napsat jeden vzoreček a říct k němu dvě věty.
        Jádro je super jednoduché — <b>tok pole skrz uzavřenou plochu závisí jen na náboji uvnitř</b>,
        ne na tvaru plochy. A k tomu jeden „bonusový" fakt o <Concept id="magneticke-pole">magnetickém poli</Concept>, který chce zkoušející slyšet.
      </p>

      <Section title="Co je tok plochou (lidsky)">
        <p>
          Představ si <Concept id="silocary">siločáry</Concept> elektrického pole jako šipky vyletující z <Concept id="naboj">náboje</Concept>. <Term id="tok-pole">Tok</Term>{' '}
          (značíme <M>{'\\varphi_E'}</M>) je vlastně <b>kolik těch siločar projde danou plochou</b> — jako kdybys
          počítala, kolik šípů proletí oknem. Když šipky míří ven, tok je kladný; když dovnitř, je záporný.
        </p>
        <p>
          U Gaussovy věty nás zajímá <Term>uzavřená plocha</Term> (myšlený „obal" kolem něčeho — koule, krabice,
          cokoli). Říká se jí <Term id="gaussova-plocha">Gaussova plocha</Term>. Není to skutečná blána, jen pomyslný obal, na kterém
          počítáme čistou bilanci: <i>kolik siločar z plochy vyletí ven mínus kolik do ní vletí</i>.
        </p>
      </Section>

      <Section title="Gaussova věta — ten jeden vzoreček">
        <p>
          Celý tok intenzity elektrického pole libovolnou uzavřenou plochou je přímo úměrný{' '}
          <b>celkovému náboji uvnitř</b> té plochy. Konstanta úměrnosti je převrácená{' '}
          <M>{'\\varepsilon_0'}</M> (<Concept id="permitivita">permitivita</Concept> vakua):
        </p>
        <MB>{'\\varphi_E = \\frac{Q}{\\varepsilon_0}'}</MB>
        <p>
          Kde <M>{'Q'}</M> je <b>součet všech nábojů uvnitř</b> plochy (s plusem i mínusem). To je celé — všimni si,
          co tam <b>není</b>: žádný tvar plochy, žádná vzdálenost, žádná geometrie. Tok záleží{' '}
          <b>jen na náboji uvnitř</b>.
        </p>
        <Callout kind="tip" title="Jak to říct u zkoušky">
          „Tok intenzity uzavřenou (Gaussovou) plochou je roven náboji uvnitř děleno <M>{'\\varepsilon_0'}</M>.
          Nezávisí na geometrii ani na tvaru plochy, jen na velikosti celkového náboje uvnitř."
        </Callout>
      </Section>

      <Section title="Proč na tvaru plochy nezáleží">
        <p>
          Tohle je hlavní pointa i hlavní chyták. Klikej <b>Další →</b> a uvidíš, proč je tok pořád stejný, ať plochu
          nafoukneš, zmáčkneš, nebo náboj posuneš stranou.
        </p>

        <StepScene
          title="Tok závisí jen na náboji uvnitř"
          viewBox="0 0 420 216"
          captions={[
            <>
              Kolem kladného náboje <M>{'+Q'}</M> obalíme malou kouli. Všechny siločáry, co z náboje vyletí,
              projdou plochou ven → tok <M>{'\\varphi_E = Q/\\varepsilon_0'}</M>.
            </>,
            <>
              Plochu nafoukneme na dvojnásobek. Siločáry jsou řidší, ale projde jich <b>úplně stejný počet</b> →
              tok je <b>pořád</b> <M>{'Q/\\varepsilon_0'}</M>. Tvar a velikost plochy nehrají roli.
            </>,
            <>
              I když je plocha celá pokroucená a nepravidelná, tok se nezmění — <b>jediné, co rozhoduje,
              je, že náboj je uvnitř</b>. Geometrie je jedno.
            </>,
            <>
              A teď náboj <b>mimo</b> plochu: co na jedné straně vletí dovnitř, na druhé zase vyletí ven. Bilance je
              nula → <M>{'\\varphi_E = 0'}</M>. Náboj venku do toku nepřispívá.
            </>,
          ]}
        >
          <Defs />

          {/* Gaussova plocha: kruh (malý → velký → schovaný → posunutý vpravo, náboj venku) */}
          <ACircle
            cx={[210, 210, 210, 258]}
            cy={100}
            r={[58, 90, 58, 60]}
            fill="none"
            stroke={SURF}
            strokeWidth={2.5}
            strokeDasharray="6 5"
            opacity={[1, 1, 0, 1]}
          />

          {/* Gaussova plocha: pokroucený obal — jen ve 3. kroku (obklopuje paprsky) */}
          <APath
            d="M302,100 C300,130 290,160 268,150 C240,185 175,190 150,156 C120,170 100,120 116,96 C100,60 120,30 152,46 C175,10 245,10 272,50 C300,40 305,75 302,100 Z"
            fill="none"
            stroke={SURF}
            strokeWidth={2.5}
            strokeDasharray="6 5"
            opacity={[0, 0, 1, 0]}
          />

          {/* paprsky z náboje (kroky 1–3), v posledním zmizí */}
          <AnimRays />

          {/* siločáry procházející plochou (jen krok 4: náboj venku) */}
          <ALine x1={98} y1={100} x2={[98, 98, 98, 322]} y2={100} stroke={ACCENT} strokeWidth={2.4} markerEnd="url(#ar25)" opacity={[0, 0, 0, 0.95]} />
          <ALine x1={98} y1={74} x2={[98, 98, 98, 315]} y2={62} stroke={ACCENT} strokeWidth={2.4} markerEnd="url(#ar25)" opacity={[0, 0, 0, 0.8]} />
          <ALine x1={98} y1={126} x2={[98, 98, 98, 315]} y2={138} stroke={ACCENT} strokeWidth={2.4} markerEnd="url(#ar25)" opacity={[0, 0, 0, 0.8]} />

          {/* náboj +Q: ve středu (kroky 1–3), pak ven doleva (krok 4) */}
          <ACircle cx={[210, 210, 210, 80]} cy={100} r={13} fill={POS} />
          <AText x={[210, 210, 210, 80]} y={105} fill="#0b1020" fontSize="15" textAnchor="middle" fontWeight="700">+</AText>

          {/* popisky pod scénou — vždy jen jeden viditelný */}
          <AText x={210} y={211} fill={SURF} fontSize="13" textAnchor="middle" opacity={[1, 0, 0, 0]}>malá Gaussova plocha</AText>
          <AText x={210} y={211} fill={SURF} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>stejný tok, větší plocha</AText>
          <AText x={210} y={211} fill={SURF} fontSize="13" textAnchor="middle" opacity={[0, 0, 1, 0]}>pokroucená plocha — tok stejný</AText>
          <AText x={210} y={211} fill={SURF} fontSize="13" textAnchor="middle" opacity={[0, 0, 0, 1]}>náboj venku → vletí i vyletí → φ = 0</AText>
        </StepScene>
      </Section>

      <Section title="Nulový náboj uvnitř → nulový tok">
        <p>
          Přímý důsledek vzorečku: když je <b>celkový</b> náboj uvnitř plochy nulový, je nulový i tok. A pozor — „nulový
          celkový náboj" <b>neznamená „žádný náboj"</b>. Můžeš mít uvnitř klidně <M>{'+Q'}</M> i <M>{'-Q'}</M>; sečtou se
          na nulu a tok je taky nula (kolik siločar z plusu vyletí, tolik jich do mínusu vletí).
        </p>
        <Figure caption="Uvnitř je +Q i −Q, dohromady náboj 0 → celkový tok plochou je nulový (každá siločára z plusu skončí v mínusu).">
          <svg viewBox="0 0 420 190" className="svg-fig">
            <defs>
              <marker id="ar25d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 z" fill={ACCENT} />
              </marker>
            </defs>
            <circle cx="210" cy="86" r="74" fill="none" stroke={SURF} strokeWidth="2.5" strokeDasharray="6 5" />
            {/* siločáry z + do − (oblouk nahoře, přímka uprostřed, oblouk dole) — šipky míří do mínusu */}
            <path d="M171,80 C200,44 224,44 250,76" fill="none" stroke={ACCENT} strokeWidth="2.2" markerEnd="url(#ar25d)" opacity="0.85" />
            <path d="M172,86 L246,86" fill="none" stroke={ACCENT} strokeWidth="2.2" markerEnd="url(#ar25d)" />
            <path d="M171,92 C200,128 224,128 250,96" fill="none" stroke={ACCENT} strokeWidth="2.2" markerEnd="url(#ar25d)" opacity="0.85" />
            <circle cx="158" cy="86" r="13" fill={POS} />
            <text x="158" y="91" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="700">+</text>
            <circle cx="262" cy="86" r="13" fill={NEG} />
            <text x="262" y="91" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="700">−</text>
            <text x="210" y="182" fill={TXT} fontSize="13" textAnchor="middle">Q = (+Q) + (−Q) = 0 → φ = 0</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Bonus, který zkoušející chce slyšet: magnetické pole">
        <p>
          Úplně stejnou otázku můžeš dostat o <Term>magnetické indukci</Term> <M>{'\\vec B'}</M>. Odpověď je krátká a
          pevná: <b>tok magnetické indukce libovolnou uzavřenou plochou je vždy nulový</b>.
        </p>
        <MB>{'\\varphi_B = \\oint \\vec B \\cdot \\mathrm{d}\\vec S = 0'}</MB>
        <p>
          Důvod: <b>neexistuje magnetický monopól</b> (samostatný „magnetický náboj"). Magnetické{' '}
          <Term>indukční čáry</Term> jsou vždy <b>uzavřené smyčky</b> — nikde nezačínají ani nekončí. Takže do každé
          plochy jich tolik vletí, kolik z ní vyletí, a bilance je nula. <i>Vždy</i>, bez ohledu na to, co je uvnitř.
        </p>
        <Figure caption="Magnetické indukční čáry tvoří uzavřené smyčky — do plochy stejně vletí jako vyletí, takže φ_B = 0.">
          <svg viewBox="0 0 420 180" className="svg-fig">
            <Defs />
            <rect x="150" y="70" width="120" height="40" rx="6" fill="#334155" stroke={SURF} strokeWidth="1.5" />
            <text x="210" y="95" fill={TXT} fontSize="13" textAnchor="middle">magnet (N – S)</text>
            <ellipse cx="210" cy="90" rx="118" ry="62" fill="none" stroke={ACCENT} strokeWidth="2.2" markerEnd="url(#ar25)" />
            <ellipse cx="210" cy="90" rx="150" ry="78" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.6" />
            <circle cx="322" cy="56" r="38" fill="none" stroke={SURF} strokeWidth="2.5" strokeDasharray="6 5" />
            <text x="322" y="60" fill={SURF} fontSize="12" textAnchor="middle">plocha</text>
          </svg>
        </Figure>
        <Callout kind="info" title="Srovnání jednou větou">
          Elektrické: <M>{'\\varphi_E = Q/\\varepsilon_0'}</M> (může být nenulový — náboje existují samostatně).
          Magnetické: <M>{'\\varphi_B = 0'}</M> <b>vždy</b> (monopóly neexistují).
        </Callout>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady padají body)">
        <ul>
          <li>
            Tok závisí <b>jen na náboji uvnitř</b> plochy — <b>ne na jejím tvaru, velikosti ani poloze náboje uvnitř</b>.
            Neříkej, že „větší plocha = větší tok".
          </li>
          <li>
            „Nulový tok" neznamená „uvnitř není žádný náboj". Znamená to, že <b>celkový</b> (sečtený) náboj uvnitř je
            nula — třeba <M>{'+Q'}</M> a <M>{'-Q'}</M> spolu.
          </li>
          <li>
            <b>Náboj mimo plochu</b> do toku nepřispívá vůbec (co vletí, to vyletí).
          </li>
          <li>
            Tok <b>magnetické</b> indukce uzavřenou plochou je <b>vždy 0</b> — protože <b>neexistuje magnetický
            monopól</b>. To je oblíbená rychlá otázka.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat Gaussovu větu φ_E = Q/ε₀ a popsat, co je Q a ε₀.',
          'Vysvětlit, co je tok plochou a že závisí jen na náboji uvnitř, ne na geometrii.',
          'Vědět, že nulový celkový náboj uvnitř → nulový tok (a že to není totéž co „žádný náboj").',
          'Říct, že tok magnetické indukce uzavřenou plochou je vždy 0, protože neexistuje magnetický monopól.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jak zní Gaussova věta a na čem tok závisí?',
            a: (
              <>
                <M>{'\\varphi_E = Q/\\varepsilon_0'}</M> — tok intenzity uzavřenou plochou je úměrný{' '}
                <b>celkovému náboji uvnitř</b> plochy. <b>Nezávisí na tvaru ani velikosti</b> plochy, jen na velikosti
                náboje uvnitř.
              </>
            ),
          },
          {
            q: 'Uvnitř plochy je +5 nC a −5 nC. Jaký je tok plochou?',
            a: (
              <>
                Nulový. Celkový náboj uvnitř je <M>{'Q = +5 - 5 = 0'}</M>, takže <M>{'\\varphi_E = 0/\\varepsilon_0 = 0'}</M>.
              </>
            ),
          },
          {
            q: 'Změní se tok, když Gaussovu plochu zvětším nebo náboj uvnitř posunu ke kraji?',
            a: <>Ne. Dokud zůstane stejný náboj <b>uvnitř</b>, je tok stejný — geometrie ani poloha náboje uvnitř nehrají roli.</>,
          },
          {
            q: 'Jak velký je tok indukce magnetického pole libovolnou uzavřenou plochou a proč?',
            a: (
              <>
                <b>Vždy nulový</b> (<M>{'\\varphi_B = 0'}</M>), protože <b>neexistuje magnetický monopól</b> — indukční čáry
                jsou uzavřené smyčky, takže do plochy stejně vletí, kolik vyletí.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
