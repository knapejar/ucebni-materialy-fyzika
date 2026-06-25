import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.5'

/* Nové pojmy, které tato lekce poprvé vykládá — k pozdějšímu prolinkování. */
export const provides = {
  'heisenberg-relace': { lesson: '4.5', label: 'Heisenbergovy relace neurčitosti', short: 'Δx·Δp ≥ ℏ/2 — polohu a hybnost nelze současně určit přesně.' },
  'vlnova-funkce': { lesson: '4.5', label: 'vlnová funkce ψ', short: 'Funkce popisující stav kvantové částice.' },
  'hustota-pravdepodobnosti': { lesson: '4.5', label: 'hustota pravděpodobnosti |ψ|²', short: 'Druhá mocnina vlnové funkce — pravděpodobnost nalezení částice v daném místě.' },
  'schrodingerova-rovnice': { lesson: '4.5', label: 'Schrödingerova rovnice', short: 'Základní rovnice kvantové mechaniky; obdoba 2. Newtonova zákona.' },
  'zakladni-excitovany-stav': { lesson: '4.5', label: 'základní a excitovaný stav', short: 'Nejnižší vs. vyšší energetická hladina atomu; přechod = foton.' },
}

const TXT = '#e8ecf8'
const ACC = '#f472b6'   // akcent tématu (kvantová fyzika)
const DIM = '#8b93b0'
const GRID = '#3a4566'
const BLUE = '#7cc4ff'

/* Šipka pro SVG (marker). */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson_4_5() {
  return (
    <>
      <p className="lead">
        Tahle lekce je „NAVÍC", ale u zkoušky padne ráda — a hezky se boduje, protože stačí
        umět <Term>vysvětlit pár myšlenek slovy</Term> a napsat dva vzorečky. Klíč je
        pochopit, že v mikrosvětě nepracujeme s jistotami, ale s <Term>pravděpodobností</Term>.
        Nejde o to, že bychom měřili špatně — příroda to tak prostě má.
      </p>

      <Section title="Heisenbergovy relace neurčitosti">
        <p>
          V klasické mechanice si u tělesa kdykoli změříš zároveň, <b>kde je</b> (poloha){' '}
          i <b>jak rychle a kam letí</b> (hybnost <M>{'p = m v'}</M>). U částice v mikrosvětě
          to <b>nejde současně přesně</b>. Platí <Term>Heisenbergova relace neurčitosti</Term>:
        </p>

        <MB>{'\\Delta x \\cdot \\Delta p \\;\\ge\\; \\frac{\\hbar}{2}, \\qquad \\hbar = \\frac{h}{2\\pi}'}</MB>

        <ul>
          <li><M>{'\\Delta x'}</M> &hellip; <b>neurčitost polohy</b> (jak rozmazaně víš, kde částice je),</li>
          <li><M>{'\\Delta p'}</M> &hellip; <b>neurčitost hybnosti</b> (jak rozmazaně víš, jak rychle a kam letí),</li>
          <li><M>{'\\hbar'}</M> &hellip; redukovaná Planckova konstanta, <M>{'h'}</M> &hellip; Planckova konstanta.</li>
        </ul>

        <p>
          Slovy: <b>čím přesněji určíš polohu, tím méně přesně znáš hybnost</b> — a naopak.
          Je to <b>součin</b>: zmenšíš-li <M>{'\\Delta x'}</M> na čtvrtinu, musí{' '}
          <M>{'\\Delta p'}</M> narůst čtyřikrát, aby součin nespadl pod <M>{'\\hbar/2'}</M>.
        </p>

        <Figure caption="Sevřu-li polohu (úzké Δx vlevo), hybnost se rozmaže (velké Δp) — a naopak. Součin obou ploch nikdy neklesne pod ℏ/2.">
          <svg viewBox="0 0 460 180" className="svg-fig">
            <Defs color={ACC} />
            {/* levý případ: přesná poloha, rozmazaná hybnost */}
            <text x="115" y="20" fill={TXT} fontSize="13" textAnchor="middle">přesná poloha</text>
            <line x1="40" y1="120" x2="190" y2="120" stroke={GRID} strokeWidth="2" />
            <rect x="105" y="55" width="20" height="65" fill={ACC} opacity="0.85" />
            <line x1="105" y1="138" x2="125" y2="138" stroke={ACC} strokeWidth="3" />
            <text x="115" y="155" fill={ACC} fontSize="12" textAnchor="middle">malé Δx</text>
            <line x1="50" y1="100" x2="180" y2="100" stroke={BLUE} strokeWidth="3" markerEnd="url(#ar)" opacity="0.5" />
            <text x="115" y="92" fill={BLUE} fontSize="12" textAnchor="middle">velké Δp</text>

            {/* pravý případ: rozmazaná poloha, přesná hybnost */}
            <text x="345" y="20" fill={TXT} fontSize="13" textAnchor="middle">přesná hybnost</text>
            <line x1="270" y1="120" x2="420" y2="120" stroke={GRID} strokeWidth="2" />
            <rect x="295" y="85" width="100" height="35" fill={ACC} opacity="0.5" />
            <line x1="295" y1="138" x2="395" y2="138" stroke={ACC} strokeWidth="3" />
            <text x="345" y="155" fill={ACC} fontSize="12" textAnchor="middle">velké Δx</text>
            <line x1="320" y1="100" x2="370" y2="100" stroke={BLUE} strokeWidth="3" markerEnd="url(#ar)" />
            <text x="345" y="92" fill={BLUE} fontSize="12" textAnchor="middle">malé Δp</text>
          </svg>
        </Figure>

        <Callout kind="chytak" title="Nejdůležitější chyták celé lekce">
          <M>{'\\Delta x \\cdot \\Delta p'}</M> je <b>neredukovatelné minimum</b> — <b>vlastnost
          přírody</b>, ne nedokonalost přístroje. Není to tak, že „kdybychom měli lepší
          mikroskop, změříme obojí přesně". <b>Nejde to z principu</b>, plyne to z vlnové
          povahy částic. U zkoušky tuhle větu řekni nahlas, je za ni bod.
        </Callout>

        <p>
          Proč to v běžném životě nevidíš? <M>{'\\hbar'}</M> je nepředstavitelně malé. U zrnka
          prachu nebo auta vyjde neurčitost tak titěrná, že je neměřitelná — chovají se jako
          klasické <Term>hmotné body</Term>. Naplno se relace projeví až u elektronu v atomu.
        </p>
      </Section>

      <Section title="Vlnová funkce ψ a |ψ|² (hustota pravděpodobnosti)">
        <p>
          Když polohu nemůžeme znát přesně, čím částici vůbec popíšeme? <Term>Vlnovou
          funkcí</Term> <M>{'\\psi(x,t)'}</M> (psí). Sama o sobě nemá přímý fyzikální význam —
          je to matematický „obal", který v sobě nese všechnu informaci o stavu částice.
          Fyzikální význam má až její <b>druhá mocnina</b>:
        </p>

        <MB>{'|\\psi(x,t)|^2 \\;=\\; \\text{hustota pravděpodobnosti}'}</MB>

        <p>
          <M>{'|\\psi|^2'}</M> říká, <b>jak pravděpodobné je, že částici najdeš právě v tomto
          místě a čase</b>. Kde je <M>{'|\\psi|^2'}</M> velké, tam ji najdeš s velkou
          pravděpodobností; kde je nulové, tam nikdy.
        </p>

        <Figure caption="|ψ|² nad jádrem atomu: elektron není na jedné dráze — je to „mrak pravděpodobnosti“. Hustší mrak = větší šance najít elektron právě tam.">
          <svg viewBox="0 0 420 170" className="svg-fig">
            <Defs color={ACC} />
            {/* mrak pravděpodobnosti kolem jádra */}
            <radialGradient id="cloud" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={ACC} stopOpacity="0.85" />
              <stop offset="45%" stopColor={ACC} stopOpacity="0.4" />
              <stop offset="100%" stopColor={ACC} stopOpacity="0.03" />
            </radialGradient>
            <circle cx="150" cy="90" r="75" fill="url(#cloud)" />
            <circle cx="150" cy="90" r="5" fill={BLUE} />
            <text x="150" y="80" fill={TXT} fontSize="12" textAnchor="middle">jádro</text>
            <text x="150" y="178" fill={DIM} fontSize="12" textAnchor="middle">„elektronový mrak" |ψ|²</text>

            {/* graf hustoty vpravo */}
            <line x1="280" y1="135" x2="410" y2="135" stroke={GRID} strokeWidth="2" markerEnd="url(#ar)" />
            <line x1="285" y1="140" x2="285" y2="35" stroke={GRID} strokeWidth="2" markerEnd="url(#ar)" />
            <text x="270" y="40" fill={TXT} fontSize="12" textAnchor="middle">|ψ|²</text>
            <text x="408" y="153" fill={TXT} fontSize="12" textAnchor="middle">x</text>
            <path d="M285,135 C320,135 330,50 347,50 C364,50 374,135 410,135" fill="none" stroke={ACC} strokeWidth="2.5" />
            <text x="347" y="115" fill={DIM} fontSize="11" textAnchor="middle">max šance</text>
          </svg>
        </Figure>

        <Callout kind="chytak" title="Druhý velký chyták">
          <M>{'|\\psi|^2'}</M> je <b>pravděpodobnost</b>, <b>ne přímo poloha</b> a ne dráha
          elektronu! Elektron nemá oběžnou dráhu jako planeta — má jen oblast, kde ho
          <b> pravděpodobně</b> najdeš. Při měření ho najdeš v jednom místě celý, nebo vůbec.
          Když je třeba <M>{'|\\psi|^2 = 0{,}2'}</M>, je 20% šance, že tam částice bude.
        </Callout>
      </Section>

      <Section title="Schrödingerova rovnice (jak se staví elektronový obal)">
        <p>
          Jak se vlnová funkce v čase vyvíjí a jaké tvary <M>{'|\\psi|^2'}</M> v atomu vzniknou?
          To řeší <Term>Schrödingerova rovnice</Term> — <b>základní rovnice kvantové
          mechaniky</b>. Symbolicky se píše:
        </p>

        <MB>{'\\hat{H}\\,\\psi \\;=\\; E\\,\\psi'}</MB>

        <p>
          <M>{'\\hat H'}</M> je hamiltonián (operátor celkové energie). U elektronu v atomu do něj
          dosadíme <b>Coulombův potenciál</b> přitažlivé síly mezi záporným elektronem a kladným
          jádrem — a z řešení vyjdou <b>dovolené energetické hladiny</b> a tvary orbitalů. <b>Tak
          se „postaví" elektronový obal.</b>
        </p>
        <ul>
          <li>Má v kvantové mechanice <b>stejné postavení jako 2. Newtonův zákon</b> v té klasické (Newtonův zákon říká, jak se vyvíjí poloha; Schrödinger říká, jak se vyvíjí <M>{'\\psi'}</M>).</li>
          <li>Z řešení automaticky vychází, že energie je <b>kvantovaná</b> — povolené jsou jen určité hladiny.</li>
          <li>Stačí znát potenciální energii systému; přesné řešení se ale často najít nedá (jen se ví, že existuje).</li>
        </ul>

        <Figure caption="Coulombova „nálevka“: kladné jádro přitahuje elektron. Schrödingerova rovnice z tohoto potenciálu spočítá dovolené hladiny E₁, E₂, E₃ (každá vyšší).">
          <svg viewBox="0 0 420 180" className="svg-fig">
            <Defs color={ACC} />
            {/* potenciálová jáma (Coulomb ~ -1/r) */}
            <path d="M30,40 C120,42 150,150 210,150 C270,150 300,42 390,40" fill="none" stroke={DIM} strokeWidth="2.5" />
            <circle cx="210" cy="158" r="5" fill={BLUE} />
            <text x="210" y="175" fill={TXT} fontSize="12" textAnchor="middle">jádro (+)</text>
            {/* hladiny */}
            <line x1="150" y1="120" x2="270" y2="120" stroke={ACC} strokeWidth="2.5" />
            <text x="285" y="124" fill={ACC} fontSize="12">E₁</text>
            <line x1="118" y1="90" x2="302" y2="90" stroke={ACC} strokeWidth="2" opacity="0.8" />
            <text x="312" y="94" fill={ACC} fontSize="12" opacity="0.85">E₂</text>
            <line x1="95" y1="65" x2="325" y2="65" stroke={ACC} strokeWidth="1.6" opacity="0.6" />
            <text x="332" y="69" fill={ACC} fontSize="12" opacity="0.7">E₃</text>
            <text x="70" y="30" fill={TXT} fontSize="12">energie</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Důkaz vlnových vlastností: ohyb elektronů na krystalu">
        <p>
          Že částice opravdu mají vlnovou povahu (de&nbsp;Broglie), se <b>dokázalo
          experimentálně</b>: elektrony se při průchodu <b>krystalem</b> (např. tenkou vrstvou
          niklu) <Term>ohýbají</Term> a vytvoří <b>interferenční obrazec</b> — přesně jako
          vlny. Funguje to proto, že rozestup atomů v krystalu je řádově stejný jako de
          Broglieho vlnová délka elektronu, takže krystal slouží jako přírodní „mřížka".
        </p>
        <Figure caption="Elektrony (jako vlny) projdou pravidelnou mříží krystalu a na stínítku vytvoří soustavu maxim a minim — ohybový (interferenční) obrazec. To by čistá kulička nikdy neudělala.">
          <svg viewBox="0 0 440 180" className="svg-fig">
            <Defs color={ACC} />
            <text x="30" y="20" fill={TXT} fontSize="12">elektrony</text>
            {/* svazek zleva */}
            <line x1="20" y1="90" x2="120" y2="90" stroke={BLUE} strokeWidth="3" markerEnd="url(#ar)" />
            {/* krystalová mříž */}
            <text x="170" y="20" fill={TXT} fontSize="12" textAnchor="middle">krystal (mříž)</text>
            <g fill={DIM}>
              <circle cx="160" cy="55" r="4" /><circle cx="180" cy="55" r="4" />
              <circle cx="160" cy="90" r="4" /><circle cx="180" cy="90" r="4" />
              <circle cx="160" cy="125" r="4" /><circle cx="180" cy="125" r="4" />
            </g>
            {/* rozptýlené vlny */}
            <g fill="none" stroke={ACC} strokeWidth="1.6" opacity="0.8">
              <path d="M195,90 a16,16 0 0 1 0,32" />
              <path d="M195,90 a28,28 0 0 1 0,56" />
              <path d="M195,90 a16,16 0 0 0 0,-32" />
              <path d="M195,90 a28,28 0 0 0 0,-56" />
            </g>
            {/* stínítko s maximy */}
            <line x1="400" y1="30" x2="400" y2="150" stroke={GRID} strokeWidth="3" />
            <text x="400" y="168" fill={TXT} fontSize="12" textAnchor="middle">stínítko</text>
            <g fill={ACC}>
              <ellipse cx="400" cy="50" rx="6" ry="3" opacity="0.5" />
              <ellipse cx="400" cy="70" rx="8" ry="5" opacity="0.85" />
              <ellipse cx="400" cy="90" rx="9" ry="7" />
              <ellipse cx="400" cy="110" rx="8" ry="5" opacity="0.85" />
              <ellipse cx="400" cy="130" rx="6" ry="3" opacity="0.5" />
            </g>
          </svg>
        </Figure>
      </Section>

      <Section title="Vztah klasické a kvantové mechaniky">
        <p>
          Kvantová mechanika neruší tu klasickou — <b>obsahuje ji</b>. Newtonova mechanika je
          jen <b>přibližná („limitní") verze</b> té kvantové pro velké objekty. Přechod nastává
          pro <Term>velká kvantová čísla</Term>: čím vyšší hladiny / čím větší objekt, tím víc
          se kvantové předpovědi blíží těm klasickým.
        </p>
        <ul>
          <li>Ze Schrödingerovy rovnice se přes <b>střední hodnoty</b> veličin dostaneš zpět na <b>2. Newtonův zákon</b>.</li>
          <li>U zrnka prachu, auta nebo planety jsou kvantové efekty fakticky nulové — vystačíš s Newtonem.</li>
        </ul>

        <Callout kind="chytak" title="Chyták na vztah teorií">
          <b>Klasická mechanika = limita kvantové pro velká kvantová čísla</b> (resp. pro
          velké objekty). Není to tak, že „klasická platí v makrosvětě a kvantová v mikrosvětě
          jako dvě nezávislé věci" — kvantová platí <b>všude</b>, jen v makrosvětě <b>splyne</b>
          s klasickou. Tuhle větu si pamatuj přesně.
        </Callout>
      </Section>

      <Section title="Atom v základním × excitovaném stavu a vyzáření fotonu">
        <p>
          Elektrony v atomu sedí na povolených hladinách. <b>Nejnižší možná energie</b> =
          <Term> základní stav</Term> (atom je „v klidu", nejstabilnější). Dodáme-li energii
          (teplem, srážkou, světlem), elektron <b>přeskočí výš</b> — atom je v{' '}
          <Term>excitovaném stavu</Term>. Ten je nestabilní: elektron za chvíli <b>spadne
          zpět</b> a přebytek energie <b>vyzáří jako foton</b>. Klikej krok po kroku:
        </p>

        <StepFigure
          title="Excitace a vyzáření fotonu"
          steps={[
            {
              label: 'základní stav',
              caption: <>Elektron sedí na nejnižší hladině <M>{'E_2'}</M> (nižší energie). Atom je stabilní.</>,
              content: (
                <svg viewBox="0 0 380 200" className="svg-fig">
                  <line x1="90" y1="150" x2="290" y2="150" stroke={ACC} strokeWidth="2.5" />
                  <text x="305" y="154" fill={ACC} fontSize="13">E₂</text>
                  <line x1="90" y1="60" x2="290" y2="60" stroke={DIM} strokeWidth="1.6" strokeDasharray="6 5" />
                  <text x="305" y="64" fill={DIM} fontSize="13">E₁</text>
                  <circle cx="150" cy="150" r="8" fill={BLUE} />
                  <text x="190" y="185" fill={TXT} fontSize="12" textAnchor="middle">elektron dole = základní stav</text>
                </svg>
              ),
            },
            {
              label: 'dodání energie',
              caption: <>Dodáme energii (foton, srážka, teplo) — elektron <b>vyskočí</b> na vyšší hladinu <M>{'E_1'}</M>. Atom je teď v <b>excitovaném stavu</b>.</>,
              content: (
                <svg viewBox="0 0 380 200" className="svg-fig">
                  <Defs color="#fbbf24" name="up" />
                  <line x1="90" y1="150" x2="290" y2="150" stroke={DIM} strokeWidth="1.6" strokeDasharray="6 5" />
                  <text x="305" y="154" fill={DIM} fontSize="13">E₂</text>
                  <line x1="90" y1="60" x2="290" y2="60" stroke={ACC} strokeWidth="2.5" />
                  <text x="305" y="64" fill={ACC} fontSize="13">E₁</text>
                  <line x1="150" y1="148" x2="150" y2="66" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#up)" />
                  <circle cx="150" cy="60" r="8" fill={BLUE} />
                  <text x="190" y="185" fill={TXT} fontSize="12" textAnchor="middle">elektron nahoře = excitovaný stav</text>
                </svg>
              ),
            },
            {
              label: 'deexcitace + foton',
              caption: <>Elektron spadne zpět dolů a rozdíl energií <b>vyzáří jako foton</b> o frekvenci <M>{'\\nu = (E_1 - E_2)/h'}</M>.</>,
              content: (
                <svg viewBox="0 0 380 200" className="svg-fig">
                  <Defs color="#fbbf24" name="dn" />
                  <line x1="90" y1="150" x2="290" y2="150" stroke={ACC} strokeWidth="2.5" />
                  <text x="305" y="154" fill={ACC} fontSize="13">E₂</text>
                  <line x1="90" y1="60" x2="290" y2="60" stroke={DIM} strokeWidth="1.6" strokeDasharray="6 5" />
                  <text x="305" y="64" fill={DIM} fontSize="13">E₁</text>
                  <line x1="150" y1="64" x2="150" y2="146" stroke={BLUE} strokeWidth="2.5" markerEnd="url(#dn)" opacity="0.7" />
                  <circle cx="150" cy="150" r="8" fill={BLUE} />
                  {/* foton (vlnka ven) */}
                  <path d="M170,105 q9,-9 18,0 t18,0 t18,0 t18,0 t18,0" fill="none" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#dn)" />
                  <text x="250" y="98" fill="#fbbf24" fontSize="13">foton ν</text>
                </svg>
              ),
            },
          ]}
        />

        <p>Frekvence vyzářeného fotonu je dána přesně rozdílem hladin:</p>
        <MB>{'\\nu = \\dfrac{E_1 - E_2}{h}'}</MB>
        <p>
          (kde <M>{'E_1'}</M> je vyšší a <M>{'E_2'}</M> nižší hladina, <M>{'h'}</M> Planckova
          konstanta). Proto má každý prvek svoje <b>čárové spektrum</b> — sada přesných
          frekvencí odpovídá povoleným přeskokům mezi hladinami. To je „otisk prstu" atomu.
        </p>

        <Callout kind="tip" title="Jak na to u zkoušky">
          Energie fotonu <M>{'E = h\\nu'}</M>, takže rozdíl hladin <M>{'\\Delta E = E_1 - E_2 = h\\nu'}</M>.
          Z toho si vždy odvodíš <M>{'\\nu = \\Delta E / h'}</M> i <M>{'\\lambda = c/\\nu = hc/\\Delta E'}</M>.
          Větší skok = větší <M>{'\\Delta E'}</M> = vyšší frekvence = kratší vlnová délka.
        </Callout>
      </Section>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat Heisenbergovu relaci Δx·Δp ≥ ℏ/2 a vysvětlit Δx a Δp.',
          'Říct, že Δx·Δp je neredukovatelné minimum (vlastnost přírody, ne chyba měření).',
          'Vysvětlit, co je |ψ|² (hustota pravděpodobnosti) — a že to NENÍ přímo poloha.',
          'Vědět, že Schrödingerova rovnice (Ĥψ = Eψ) je obdoba 2. Newtonova zákona a staví obal z Coulombova potenciálu.',
          'Vysvětlit vztah klasické a kvantové mechaniky (klasická = limita pro velká kvantová čísla).',
          'Rozlišit základní a excitovaný stav a napsat ν = (E₁ − E₂)/h.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Napiš Heisenbergovu relaci neurčitosti a vysvětli, proč ji nejde „obejít" lepším přístrojem.</>,
            a: <><M>{'\\Delta x \\cdot \\Delta p \\ge \\hbar/2'}</M>. Součin neurčitosti polohy a hybnosti má <b>neredukovatelné minimum</b> — je to <b>vlastnost přírody</b> (vlnová povaha částic), ne nedokonalost měřidla. Lepší přístroj na tom nic nezmění.</>,
          },
          {
            q: <>Co fyzikálně znamená <M>{'|\\psi|^2'}</M>?</>,
            a: <><b>Hustotu pravděpodobnosti</b> — pravděpodobnost, že částici (popsanou vlnovou funkcí <M>{'\\psi'}</M>) najdeš v daném <b>místě a čase</b>. Pozor: je to pravděpodobnost, <b>ne přímo poloha</b> ani dráha. Když <M>{'|\\psi|^2 = 0{,}2'}</M>, je tam 20% šance.</>,
          },
          {
            q: <>Jaký je vztah klasické a kvantové mechaniky?</>,
            a: <>Kvantová mechanika je obecnější; <b>klasická (Newtonova) mechanika je její limita pro velká kvantová čísla / velké objekty</b>. Ze Schrödingerovy rovnice se přes střední hodnoty dostaneš na 2. Newtonův zákon. V makrosvětě kvantové efekty nepozorujeme.</>,
          },
          {
            q: <>Atom přejde z hladiny <M>{'E_1'}</M> na nižší <M>{'E_2'}</M>. Co se stane a jakou frekvenci má vyzářený foton?</>,
            a: <>Atom <b>deexcituje</b> (z excitovaného do základnějšího stavu) a přebytek energie vyzáří jako foton o frekvenci <M>{'\\nu = (E_1 - E_2)/h'}</M>. Větší rozdíl hladin → vyšší frekvence → kratší vlnová délka.</>,
          },
        ]}
      />
    </>
  )
}
