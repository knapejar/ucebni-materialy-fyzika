import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, AGroup, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.8'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější wiki-proklik). */
export const provides = {
  'magneticky-tok': {
    lesson: '2.8',
    label: 'magnetický tok Φ',
    short: 'Φ = B·S·cos α — kolik magnetického pole „prochází" plochou.',
  },
  'elektromagneticka-indukce': {
    lesson: '2.8',
    label: 'elektromagnetická indukce',
    short: 'Změna magnetického toku vyvolá (indukuje) napětí a proud.',
  },
  'faraduv-zakon': {
    lesson: '2.8',
    label: 'Faradayův zákon',
    short: 'ε_i = −dΦ/dt — indukované napětí se rovná rychlosti změny toku.',
  },
  'lenzovo-pravidlo': {
    lesson: '2.8',
    label: 'Lenzovo pravidlo',
    short: 'Indukovaný proud se brání té změně, která ho vyvolala (znaménko mínus).',
  },
}

const ACC = '#38bdf8'   // akcent tématu (modrá)
const TXT = '#e8ecf8'   // světlý text/tahy
const MUTED = '#9aa6c4' // tlumené tahy
const NPOLE = '#fb7185' // sever magnetu (červená)
const SPOLE = '#60a5fa' // jih magnetu (modrá)
const FLUX = '#34d399'  // siločáry pole B (zelená)

/* Cívka s nesvítící žárovkou (statický skelet drátu). Glow se animuje zvlášť. */
function Coil() {
  return (
    <g>
      {/* závit / smyčka */}
      <ellipse cx="120" cy="110" rx="26" ry="58" fill="none" stroke={MUTED} strokeWidth="5" />
      {/* drát dolů k žárovce */}
      <path d="M120,168 L120,196 L70,196" fill="none" stroke={MUTED} strokeWidth="3" />
      <path d="M120,52 L120,30 L70,30 L70,182" fill="none" stroke={MUTED} strokeWidth="3" />
      {/* žárovka (zhasnutý obrys) */}
      <circle cx="70" cy="196" r="14" fill="none" stroke={MUTED} strokeWidth="2" />
      <line x1="61" y1="187" x2="79" y2="205" stroke={MUTED} strokeWidth="2" />
      <line x1="79" y1="187" x2="61" y2="205" stroke={MUTED} strokeWidth="2" />
    </g>
  )
}

/* Tyčový magnet N–S v lokálním počátku (posun řeší AGroup). */
function MagnetBody() {
  return (
    <g>
      <rect x="0" y="88" width="70" height="44" rx="4" fill="#1e293b" stroke={MUTED} strokeWidth="1.5" />
      <rect x="0" y="88" width="35" height="44" rx="4" fill={NPOLE} opacity="0.85" />
      <rect x="35" y="88" width="35" height="44" fill={SPOLE} opacity="0.85" />
      <text x="17" y="116" fill="#0b1020" fontSize="18" fontWeight="700" textAnchor="middle">N</text>
      <text x="52" y="116" fill="#0b1020" fontSize="18" fontWeight="700" textAnchor="middle">S</text>
    </g>
  )
}

export default function Lesson_2_8() {
  return (
    <>
      <p className="lead">
        Tohle je princip, na kterém stojí skoro veškerá výroba elektřiny — generátory v elektrárnách.
        U zkoušky chtějí slyšet tři věci: vzoreček pro <Term>tok</Term>, <Term>Faradayův zákon</Term>{' '}
        a <b>3 způsoby</b>, jak proud naindukovat. A jeden hlavní chyták: indukuje se jen při <b>změně</b>.
      </p>

      <Section title="Magnetický tok Φ — kolik pole „protéká“ plochou">
        <p>
          Představ si rámeček (smyčku drátu) v <Concept id="magneticke-pole">magnetickém poli</Concept>. <Term id="magneticky-tok">Magnetický tok</Term>{' '}
          <M>{'\\Phi'}</M> říká, kolik <Concept id="silocary">siločar</Concept> magnetického pole tím rámečkem „prochází". Když je pole
          homogenní (všude stejné) a plocha rovinná, počítá se jednoduše:
        </p>
        <MB>{'\\Phi = \\vec{B}\\cdot\\vec{S} = B\\,S\\,\\cos\\alpha'}</MB>
        <p>
          kde <M>{'B'}</M> je velikost magnetické indukce (síla pole), <M>{'S'}</M> je obsah plochy
          smyčky a <M>{'\\alpha'}</M> je úhel mezi <b>vektorem pole</b> <M>{'\\vec B'}</M> a{' '}
          <b>vektorem plochy</b> <M>{'\\vec S'}</M> (ten trčí kolmo z plochy ven). Jednotka toku je{' '}
          <M>{'\\mathrm{weber}\\;[\\mathrm{Wb}]'}</M>.
        </p>
        <Figure caption="Tok závisí na úhlu α: čím víc je plocha „čelem“ k poli (α = 0, cos α = 1), tím větší tok. Když je plocha „naležato“ podél pole (α = 90°), tok je nulový.">
          <svg viewBox="0 0 360 170" className="svg-fig">
            <defs>
              <marker id="ar1b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={FLUX} /></marker>
              <marker id="ar1s" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={TXT} /></marker>
            </defs>
            {/* siločáry pole B doprava */}
            {[40, 70, 100, 130].map((y) => (
              <line key={y} x1="20" y1={y} x2="340" y2={y} stroke={FLUX} strokeWidth="2.5" markerEnd="url(#ar1b)" opacity="0.8" />
            ))}
            <text x="40" y="22" fill={FLUX} fontSize="14" fontWeight="600">B</text>
            {/* smyčka čelem k poli (kolmo na siločáry) */}
            <rect x="150" y="30" width="14" height="110" rx="3" fill={ACC} opacity="0.85" />
            {/* vektor plochy S podél pole */}
            <line x1="164" y1="85" x2="240" y2="85" stroke={TXT} strokeWidth="3" markerEnd="url(#ar1s)" />
            <text x="210" y="76" fill={TXT} fontSize="14" textAnchor="middle">S</text>
            <text x="200" y="160" fill={MUTED} fontSize="13" textAnchor="middle">α = 0 → Φ = B·S (maximum)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Elektromagnetická indukce — změna toku vyrobí napětí">
        <p>
          <Term id="elektromagneticka-indukce">Elektromagnetická indukce</Term> je vznik napětí (a v uzavřeném obvodu i <Concept id="elektricky-proud">proudu</Concept>) ve
          <Concept id="vodic">vodiči</Concept>, když se mění magnetický tok. Klíčové slovo je <b>změna</b>: dáš-li smyčku do pole,
          které se nemění a smyčka se nehýbe, <b>neteče nic</b>. Jakmile se ale tok začne měnit
          (přiblížíš magnet, otočíš smyčku…), naskočí napětí.
        </p>

        <StepScene
          title="Pohyb magnetu k cívce indukuje napětí"
          viewBox="0 0 360 230"
          captions={[
            <>Magnet i cívka stojí. Tok <M>{'\\Phi'}</M> se nemění → <b>žádné napětí, žárovka nesvítí</b>.</>,
            <>Přibližuji magnet → tok přes cívku <b>roste</b> → indukuje se napětí, žárovka <b>svítí</b>. Čím rychleji, tím víc.</>,
            <>Magnet zastavím (i když je blízko). Tok je zase <b>konstantní</b> → napětí mizí, žárovka zhasne. Vidíš: rozhoduje <b>změna</b>, ne samotná blízkost.</>,
          ]}
        >
          {/* šipka pohybu (akcent) */}
          <defs>
            <marker id="arMove" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={ACC} /></marker>
          </defs>

          {/* statická cívka s žárovkou */}
          <Coil />

          {/* žárovka SVÍTÍ jen v kroku 2 (změna toku) — překryv přes zhasnutý obrys */}
          <ACircle cx={70} cy={196} r={14} fill="#fde047" stroke="#fde047" strokeWidth={2} opacity={[0, 1, 0]} />
          <ALine x1={61} y1={187} x2={79} y2={205} stroke="#854d0e" strokeWidth={2} opacity={[0, 1, 0]} />
          <ALine x1={79} y1={187} x2={61} y2={205} stroke="#854d0e" strokeWidth={2} opacity={[0, 1, 0]} />

          {/* magnet: daleko (krok 1) → přijede blíž (krok 2) → stojí blízko (krok 3) */}
          <AGroup x={[250, 170, 170]}><MagnetBody /></AGroup>

          {/* šipka pohybu + popisek (jen krok 2), nad magnetem, mimo grafiku */}
          <ALine x1={246} y1={66} x2={188} y2={66} stroke={ACC} strokeWidth={3} markerEnd="url(#arMove)" opacity={[0, 1, 0]} />
          <AText x={217} y={50} fill={ACC} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>pohyb</AText>

          {/* stavové popisky dole (každý krok jiný, prolnutí) */}
          <AText x={205} y={222} fill={MUTED} fontSize="14" textAnchor="middle" opacity={[1, 0, 0]}>Φ = konst. → ε = 0</AText>
          <AText x={205} y={222} fill={ACC} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>Φ roste → ε ≠ 0</AText>
          <AText x={205} y={222} fill={MUTED} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>Φ = konst. → ε = 0</AText>
        </StepScene>
      </Section>

      <Section title="Faradayův zákon — vzoreček, který musí padnout">
        <p>
          Velikost indukovaného napětí <M>{'\\varepsilon_i'}</M> se rovná tomu, <b>jak rychle</b> se
          mění tok. Přesně to říká <Term id="faraduv-zakon">Faradayův zákon</Term>:
        </p>
        <MB>{'\\varepsilon_i = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}'}</MB>
        <p>
          Čteš to takhle: indukované napětí = mínus časová změna magnetického toku. Velké napětí
          dostaneš, když se tok mění hodně a rychle (velká <M>{'\\mathrm{d}\\Phi'}</M> za malý čas{' '}
          <M>{'\\mathrm{d}t'}</M>). To <b>mínus</b> se snadno zapomene — a má svůj význam, viz chytáky.
        </p>
      </Section>

      <Section title="3 způsoby, jak naindukovat napětí (tohle se ptají skoro vždy)">
        <p>
          Tok je <M>{'\\Phi = B\\,S\\,\\cos\\alpha'}</M>. Aby se měnil, stačí změnit kteroukoli z těch tří
          věcí. Proto jsou <b>tři způsoby</b> — ke každému si pamatuj příklad:
        </p>
        <ol className="biglist">
          <li>
            <b>Změna velikosti pole</b> <M>{'B'}</M>. Příklad: ke smyčce <b>přibližuješ silný magnet</b>{' '}
            (nebo do cívky vedle pustíš měnící se proud).
          </li>
          <li>
            <b>Změna plochy</b> <M>{'S'}</M>. Příklad: <b>vodič kloužící po kolejnicích</b> — smyčka se
            zvětšuje/zmenšuje, jak se vodič posouvá.
          </li>
          <li>
            <b>Změna úhlu</b> <M>{'\\alpha'}</M> mezi polem a plochou. Příklad: <b>smyčka rotuje v poli</b>{' '}
            (kovový náramek otáčející se v magnetickém poli Země). <b>Přesně takhle pracuje generátor!</b>
          </li>
        </ol>
        <Figure caption="Tři páky, kterými se dá tok Φ = B·S·cos α změnit: síla pole B, velikost plochy S, nebo úhel α.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <defs>
              <marker id="ar3rot" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill={MUTED} /></marker>
              <marker id="ar3b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={NPOLE} /></marker>
              <marker id="ar3s" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={TXT} /></marker>
            </defs>
            {/* 1) změna B */}
            <g transform="translate(0,0)">
              <rect x="20" y="50" width="40" height="50" rx="4" fill="none" stroke={ACC} strokeWidth="2.5" />
              <line x1="78" y1="75" x2="62" y2="75" stroke={NPOLE} strokeWidth="4" markerEnd="url(#ar3b)" />
              <text x="45" y="125" fill={TXT} fontSize="13" textAnchor="middle">1) měním B</text>
            </g>
            {/* 2) změna S */}
            <g transform="translate(140,0)">
              <rect x="10" y="50" width="34" height="50" rx="4" fill="none" stroke={ACC} strokeWidth="2.5" />
              <rect x="44" y="50" width="34" height="50" rx="4" fill="none" stroke={ACC} strokeWidth="2.5" strokeDasharray="4 4" />
              <line x1="44" y1="40" x2="78" y2="40" stroke={TXT} strokeWidth="2.5" markerEnd="url(#ar3s)" />
              <text x="45" y="125" fill={TXT} fontSize="13" textAnchor="middle">2) měním S</text>
            </g>
            {/* 3) změna α */}
            <g transform="translate(290,0)">
              <rect x="30" y="50" width="14" height="50" rx="3" fill="none" stroke={ACC} strokeWidth="2.5" transform="rotate(25 37 75)" />
              {/* otáčecí šipka vpravo od rámečku, mimo grafiku */}
              <path d="M62,96 a26,26 0 0 0 8,-44" fill="none" stroke={MUTED} strokeWidth="2" markerEnd="url(#ar3rot)" />
              <text x="50" y="125" fill={TXT} fontSize="13" textAnchor="middle">3) měním α</text>
            </g>
          </svg>
        </Figure>
      </Section>

      <Section title="Využití: generátor (proč doma teče proud)">
        <p>
          <b>Generátor</b> je třetí způsob v praxi: cívka (nebo magnet) se neustále <b>otáčí</b>, takže se
          pořád mění úhel <M>{'\\alpha'}</M> a s ním i tok. Tím se indukuje napětí, které navíc periodicky
          mění znaménko → vzniká <b>střídavé napětí</b>. Roztočit cívku umí voda (vodní elektrárna), pára
          (uhlí, jádro) nebo vítr — generátor jen mechanické otáčení převede na elektřinu. Stejný princip
          obráceně dělá <b>transformátor</b> (měnící se proud v jedné cívce indukuje napětí v druhé).
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            Indukuje se <b>jen při ZMĚNĚ toku</b>. Statické (neměnné) pole a stojící smyčka{' '}
            <b>neindukují nic</b> — i kdyby bylo pole sebesilnější. Když u zkoušky řekneš „dám smyčku do
            pole a poteče proud", je to chyba: musí se něco <b>měnit</b>.
          </li>
          <li>
            <b>Znaménko mínus</b> ve <M>{'\\varepsilon_i = -\\mathrm{d}\\Phi/\\mathrm{d}t'}</M> není jen
            ozdoba — je to <Term id="lenzovo-pravidlo">Lenzovo pravidlo</Term>: indukovaný proud teče tak, aby svým magnetickým
            polem <b>bránil té změně</b>, která ho vyvolala (důsledek setrvačnosti soustavy). Přibližuješ
            magnet → indukované pole ho „odpuzuje".
          </li>
          <li>
            <M>{'\\alpha'}</M> je úhel mezi <b>vektorem pole</b> a <b>vektorem plochy</b> (kolmice k ploše),
            <b> ne</b> mezi polem a samotnou plochou. Proto je tok <b>maximální</b>, když je plocha čelem k
            poli (<M>{'\\alpha=0,\\;\\cos\\alpha=1'}</M>), a <b>nulový</b>, když je podél pole.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat magnetický tok Φ = B·S·cos α a říct, co je α (úhel pole vs. vektor plochy).',
          'Napsat Faradayův zákon ε_i = −dΦ/dt a popsat veličiny.',
          'Vyjmenovat 3 způsoby indukce (změna B / S / α) a ke každému dát příklad.',
          'Vědět, že se indukuje jen při ZMĚNĚ toku — statické pole nic neindukuje.',
          'Vysvětlit, že znaménko mínus = Lenzovo pravidlo (proud se brání změně).',
          'Uvést využití: generátory (otáčení cívky v poli → střídavé napětí).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Napiš magnetický tok a Faradayův zákon. Co znamenají symboly?',
            a: (
              <>
                <M>{'\\Phi = B\\,S\\,\\cos\\alpha'}</M> (B = velikost pole, S = plocha smyčky, α = úhel mezi{' '}
                <M>{'\\vec B'}</M> a vektorem plochy) a <M>{'\\varepsilon_i = -\\dfrac{\\mathrm{d}\\Phi}{\\mathrm{d}t}'}</M> —
                indukované napětí se rovná záporně vzaté časové změně toku.
              </>
            ),
          },
          {
            q: 'Jakými třemi změnami lze indukovat napětí? Ke každé uveď příklad.',
            a: (
              <>
                <b>1) Změna velikosti pole B</b> — k smyčce se přibližuje silný magnet. <b>2) Změna plochy S</b> —
                vodič klouže po kolejnicích a mění obsah smyčky. <b>3) Změna úhlu α</b> — kovový náramek (smyčka)
                rotuje v magnetickém poli Země. Stačí změnit kteroukoli věc ze vzorce <M>{'\\Phi=B\\,S\\,\\cos\\alpha'}</M>.
              </>
            ),
          },
          {
            q: 'Smyčku položím do silného, ale neměnného magnetického pole a nehýbu s ní. Poteče proud?',
            a: <><b>Ne.</b> Indukuje se jen při <b>změně</b> toku. Statické pole a stojící smyčka → <M>{'\\mathrm{d}\\Phi/\\mathrm{d}t = 0'}</M>, tedy <M>{'\\varepsilon_i = 0'}</M>.</>,
          },
          {
            q: 'Co znamená znaménko mínus ve Faradayově zákoně?',
            a: <>Je to <b>Lenzovo pravidlo</b>: indukovaný proud má takový směr, že svým magnetickým polem <b>působí proti změně</b> toku, která ho vyvolala (snaha soustavy udržet původní stav — setrvačnost).</>,
          },
        ]}
      />
    </>
  )
}
