import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.2'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'naboj': { lesson: '2.2', label: 'elektrický náboj', short: 'Skalární vlastnost částic, kladná i záporná.' },
  'coulombuv-zakon': { lesson: '2.2', label: 'Coulombův zákon', short: 'F = k·Q₁Q₂/r² — síla mezi dvěma náboji.' },
  'permitivita': { lesson: '2.2', label: 'permitivita', short: 'Vlastnost prostředí, ε = εr·ε₀.' },
  'vodic': { lesson: '2.2', label: 'vodič', short: 'Látka s volnými pohyblivými náboji.' },
  'dielektrikum': { lesson: '2.2', label: 'dielektrikum', short: 'Izolant — náboje jsou pevně vázané.' },
}

const ACCENT = '#38bdf8' // akcent tématu (elektřina/magnetismus)
const POS = '#fb7185' // kladný náboj (růžová)
const NEG = '#60a5fa' // záporný náboj (modrá)
const TXT = '#e8ecf8' // světlý text/tahy
const FORCE = '#fbbf24' // síla (žlutá)
const DIM = '#3a4566' // pomocné čáry

/* Šipka pro SVG. */
function Arrow({ id: mid, color }: { id: string; color: string }) {
  return (
    <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
    </marker>
  )
}

/* Kolečko náboje se znaménkem. */
function Charge({ x, y, sign, r = 14 }: { x: number; y: number; sign: '+' | '−'; r?: number }) {
  const fill = sign === '+' ? POS : NEG
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <text x={x} y={y + 6} fill="#0b1020" fontSize="18" textAnchor="middle" fontWeight="700">{sign}</text>
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tahle lekce je „elektrický dvojník" gravitace: místo hmotností máš náboje a místo
        gravitačního zákona Coulombův. Stačí umět napsat <b>jeden vzoreček</b>, charakterizovat
        náboj a odříkat <b>tři zákony</b> — a máš jisté body. Hlídej si jeden detail: náboj je{' '}
        <b>skalár</b>, kdežto síla mezi náboji je vektor.
      </p>

      <Section title="Elektrický náboj — co to vlastně je">
        <p>
          <Term>Elektrický náboj</Term> je <b>vlastnost některých částic</b> (proton má kladný,
          elektron záporný). Je to <Term>skalární</Term> veličina — tedy <b>jen číslo se znaménkem</b>,
          žádný směr. Měří se v coulombech <M>{'[\\,\\mathrm C\\,]'}</M>.
        </p>
        <ul>
          <li><b>Dva druhy:</b> kladný <span style={{ color: POS }}>(+)</span> a záporný <span style={{ color: NEG }}>(−)</span>. Souhlasné se odpuzují, opačné přitahují.</li>
          <li><b>Neutrální atom</b> má stejně kladného (jádro) jako záporného (obal) náboje — navenek se vyruší.</li>
          <li>Vzniká třeba <Term>třením</Term>: hřeben o svetr → pak přitáhne vlasy.</li>
        </ul>
        <Callout kind="pozor" title="Nejčastější chyták na začátek">
          Náboj je <b>skalár</b> (číslo ±), ale <b>síla</b> mezi náboji je <b>vektor</b> (má směr).
          U zkoušky to nepleť — je to oblíbená záludná otázka.
        </Callout>
      </Section>

      <Section title="Coulombův zákon — vzoreček, který musíš umět z hlavy">
        <p>
          <Term>Coulombův zákon</Term> popisuje <b>velikost síly mezi dvěma náboji</b>. Vypadá skoro
          úplně stejně jako gravitační zákon — jen místo hmotností jsou náboje:
        </p>
        <MB>{'F = k\\,\\frac{Q_1\\,Q_2}{r^2}, \\qquad k = \\frac{1}{4\\pi\\varepsilon}'}</MB>
        <ul>
          <li><M>{'Q_1, Q_2'}</M> — velikosti obou nábojů <M>{'[\\mathrm C]'}</M>,</li>
          <li><M>{'r'}</M> — vzdálenost mezi nimi <M>{'[\\mathrm m]'}</M>,</li>
          <li><M>{'k'}</M> — konstanta úměrnosti, <M>{'k = 1/(4\\pi\\varepsilon)'}</M>.</li>
        </ul>
        <p>
          Síla klesá s <b>druhou mocninou vzdálenosti</b> (jako gravitace): když dvojnásobně oddálíš,
          síla klesne <b>na čtvrtinu</b>. Působí po spojnici nábojů — odpudivá u souhlasných,
          přitažlivá u opačných.
        </p>

        <Figure caption="Coulombův zákon: souhlasné náboje se odpuzují, opačné přitahují. Síla působí po spojnici a klesá s r².">
          <svg viewBox="0 0 420 200" className="svg-fig">
            <defs><Arrow id="cf" color={FORCE} /></defs>
            {/* horní řádek: odpuzování */}
            <text x="210" y="24" fill={TXT} fontSize="14" textAnchor="middle">souhlasné → odpuzování</text>
            <Charge x={120} y={56} sign="+" />
            <Charge x={300} y={56} sign="+" />
            <line x1="106" y1="56" x2="60" y2="56" stroke={FORCE} strokeWidth="4" markerEnd="url(#cf)" />
            <line x1="314" y1="56" x2="360" y2="56" stroke={FORCE} strokeWidth="4" markerEnd="url(#cf)" />
            {/* dolní řádek: přitahování */}
            <text x="210" y="124" fill={TXT} fontSize="14" textAnchor="middle">opačné → přitahování</text>
            <Charge x={120} y={156} sign="+" />
            <Charge x={300} y={156} sign="−" />
            <line x1="138" y1="156" x2="184" y2="156" stroke={FORCE} strokeWidth="4" markerEnd="url(#cf)" />
            <line x1="282" y1="156" x2="236" y2="156" stroke={FORCE} strokeWidth="4" markerEnd="url(#cf)" />
            <text x="210" y="190" fill={TXT} fontSize="13" textAnchor="middle">r</text>
            <line x1="120" y1="178" x2="300" y2="178" stroke={DIM} strokeWidth="1.5" />
          </svg>
        </Figure>
      </Section>

      <Section title="Permitivita — co je to ε ve vzorečku">
        <p>
          Konstanta <M>{'k'}</M> v sobě skrývá <Term>permitivitu</Term> <M>{'\\varepsilon'}</M> —
          vlastnost <b>prostředí</b>, ve kterém náboje jsou. Rozkládá se na dvě části:
        </p>
        <MB>{'\\varepsilon = \\varepsilon_r \\cdot \\varepsilon_0'}</MB>
        <ul>
          <li>
            <M>{'\\varepsilon_0'}</M> — <Term>permitivita vakua</Term>, konstanta:{' '}
            <M>{'\\varepsilon_0 \\approx 8{,}854\\cdot 10^{-12}\\ \\mathrm{C^2\\,m^{-2}\\,N^{-1}}'}</M>.
          </li>
          <li>
            <M>{'\\varepsilon_r'}</M> — <Term>relativní permitivita</Term> (bezrozměrná): kolikrát je
            permitivita v daném prostředí <b>větší než ve vakuu</b>. Pro vakuum <M>{'\\varepsilon_r = 1'}</M>.
          </li>
        </ul>
        <Callout kind="tip" title="Jak si to zapamatovat">
          Větší <M>{'\\varepsilon'}</M> (např. ve vodě) je ve jmenovateli <M>{'k'}</M> → <b>síla mezi
          náboji je menší</b>. Prostředí elektrické působení „tlumí".
        </Callout>
      </Section>

      <Section title="Tři zákony o náboji (tohle chce zkoušející slyšet)">
        <p>Vlastnosti náboje shrnují <b>tři zákony</b>. Ke každému si pamatuj jednu větu a příklad:</p>
        <ol className="biglist">
          <li>
            <b>Zákon zachování náboje.</b> V izolované soustavě se <b>celkový náboj nemění</b>
            (analogie se zachováním energie). Náboj nevzniká ani nezaniká — jen se přemisťuje.
          </li>
          <li>
            <b>Zákon invariantnosti náboje.</b> Náboj se <b>nemění pohybem</b> tělesa ani částic.
            Důkaz z praxe: atom helia i molekula vodíku mají stejné částice (2 p, 2 n, 2 e<sup>−</sup>),
            částice se v nich hýbou různě, a přesto jsou <b>oba útvary neutrální</b>.
          </li>
          <li>
            <b>Zákon kvantování náboje.</b> Náboj nejde dělit donekonečna — vždy je{' '}
            <b>celočíselným násobkem elementárního náboje</b>{' '}
            <M>{'e \\approx 1{,}602\\cdot 10^{-19}\\ \\mathrm C'}</M>, který je dál nedělitelný.
          </li>
        </ol>
      </Section>

      <Section title="Vznik náboje třením — krok po kroku">
        <p>
          Klasický pokus: třením přejdou elektrony z jednoho tělesa na druhé. Pozor na chyták —
          <b> nevzniká „nový" náboj</b>, jen se přesune. Klikej <b>Další →</b>:
        </p>
        <StepFigure
          title="Tření hřebenu o svetr"
          steps={[
            {
              label: 'před třením',
              caption: <>Obě tělesa jsou <b>neutrální</b>: stejně kladného i záporného náboje. Celkový náboj soustavy je nula.</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <rect x="40" y="60" width="130" height="70" rx="10" fill="none" stroke={TXT} strokeWidth="2" />
                  <text x="105" y="50" fill={TXT} fontSize="13" textAnchor="middle">svetr</text>
                  <rect x="250" y="60" width="130" height="70" rx="10" fill="none" stroke={TXT} strokeWidth="2" />
                  <text x="315" y="50" fill={TXT} fontSize="13" textAnchor="middle">hřeben</text>
                  <text x="70" y="92" fill={POS} fontSize="15">+</text><text x="90" y="92" fill={NEG} fontSize="15">−</text><text x="120" y="92" fill={POS} fontSize="15">+</text><text x="140" y="92" fill={NEG} fontSize="15">−</text>
                  <text x="70" y="118" fill={NEG} fontSize="15">−</text><text x="90" y="118" fill={POS} fontSize="15">+</text><text x="120" y="118" fill={NEG} fontSize="15">−</text><text x="140" y="118" fill={POS} fontSize="15">+</text>
                  <text x="280" y="92" fill={NEG} fontSize="15">−</text><text x="300" y="92" fill={POS} fontSize="15">+</text><text x="330" y="92" fill={NEG} fontSize="15">−</text><text x="350" y="92" fill={POS} fontSize="15">+</text>
                  <text x="280" y="118" fill={POS} fontSize="15">+</text><text x="300" y="118" fill={NEG} fontSize="15">−</text><text x="330" y="118" fill={POS} fontSize="15">+</text><text x="350" y="118" fill={NEG} fontSize="15">−</text>
                  <text x="210" y="160" fill={TXT} fontSize="13" textAnchor="middle">oba neutrální</text>
                </svg>
              ),
            },
            {
              label: 'třením',
              caption: <>Třením přeskočí část <b>elektronů</b> (záporných nábojů) ze svetru na hřeben. Žádný náboj se nevyrobí — jen <b>cestuje</b>.</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <defs><Arrow id="el" color={NEG} /></defs>
                  <rect x="40" y="60" width="130" height="70" rx="10" fill="none" stroke={TXT} strokeWidth="2" />
                  <rect x="250" y="60" width="130" height="70" rx="10" fill="none" stroke={TXT} strokeWidth="2" />
                  <line x1="180" y1="95" x2="245" y2="95" stroke={NEG} strokeWidth="4" markerEnd="url(#el)" />
                  <text x="212" y="84" fill={NEG} fontSize="13" textAnchor="middle">e⁻</text>
                  <text x="105" y="100" fill={TXT} fontSize="13" textAnchor="middle">svetr</text>
                  <text x="315" y="100" fill={TXT} fontSize="13" textAnchor="middle">hřeben</text>
                </svg>
              ),
            },
            {
              label: 'po třením',
              caption: <>Svetr ztratil elektrony → je <b>kladný</b>, hřeben je získal → je <b>záporný</b>. Vzniklý <b>+</b> a <b>−</b> náboj je <b>stejně velký</b> (zákon zachování náboje).</>,
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <rect x="40" y="60" width="130" height="70" rx="10" fill="none" stroke={POS} strokeWidth="2.5" />
                  <text x="105" y="50" fill={POS} fontSize="14" textAnchor="middle">svetr: +Q</text>
                  <text x="75" y="105" fill={POS} fontSize="20">+</text><text x="100" y="105" fill={POS} fontSize="20">+</text><text x="125" y="105" fill={POS} fontSize="20">+</text>
                  <rect x="250" y="60" width="130" height="70" rx="10" fill="none" stroke={NEG} strokeWidth="2.5" />
                  <text x="315" y="50" fill={NEG} fontSize="14" textAnchor="middle">hřeben: −Q</text>
                  <text x="285" y="105" fill={NEG} fontSize="20">−</text><text x="310" y="105" fill={NEG} fontSize="20">−</text><text x="335" y="105" fill={NEG} fontSize="20">−</text>
                  <text x="210" y="160" fill={TXT} fontSize="13" textAnchor="middle">+Q a −Q stejně velké</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Vodič × dielektrikum — jeden rozdíl, který stačí">
        <p>
          Látky dělíme podle toho, jestli v nich jsou <b>volné pohyblivé náboje</b>:
        </p>
        <p><b><Term>Vodič</Term></b> (kovy, roztoky):</p>
        <ul>
          <li>obsahuje <b>volné pohyblivé náboje</b> (v kovech volné elektrony),</li>
          <li>ve vnějším poli se náboje <b>přemístí</b> a vytvoří vlastní pole opačného směru,</li>
          <li>výsledné pole uvnitř klesne <b>na nulu</b>, potenciál uvnitř je konstantní (Faradayova klec).</li>
        </ul>
        <p><b><Term>Dielektrikum</Term></b> (izolant — sklo, plast, suchý vzduch):</p>
        <ul>
          <li>nemá volné náboje — všechny jsou <b>pevně vázané</b> v atomech/molekulách,</li>
          <li>ve vnějším poli se náboje jen mírně <b>posunou (polarizace)</b>, neodtečou,</li>
          <li>pole uvnitř se <b>jen zeslabí</b>, na nulu neklesne.</li>
        </ul>

        <Figure caption="Vodič ve vnějším poli E: volné náboje se přesunou na okraje a uvnitř vytvoří opačné pole E₁. Pohyb ustane, až je celkové pole uvnitř nulové.">
          <svg viewBox="0 0 420 200" className="svg-fig">
            <defs><Arrow id="ee" color={ACCENT} /><Arrow id="ei" color={FORCE} /></defs>
            {/* vnější pole E doprava */}
            <line x1="20" y1="40" x2="400" y2="40" stroke={ACCENT} strokeWidth="3" markerEnd="url(#ee)" />
            <text x="375" y="30" fill={ACCENT} fontSize="15">E</text>
            {/* vodič */}
            <rect x="130" y="70" width="160" height="100" rx="8" fill="none" stroke={TXT} strokeWidth="2.5" />
            {/* záporné vlevo, kladné vpravo */}
            <text x="148" y="100" fill={NEG} fontSize="20">−</text><text x="148" y="135" fill={NEG} fontSize="20">−</text><text x="148" y="165" fill={NEG} fontSize="20">−</text>
            <text x="268" y="100" fill={POS} fontSize="20">+</text><text x="268" y="135" fill={POS} fontSize="20">+</text><text x="268" y="165" fill={POS} fontSize="20">+</text>
            {/* vnitřní pole E1 doleva */}
            <line x1="255" y1="120" x2="170" y2="120" stroke={FORCE} strokeWidth="3.5" markerEnd="url(#ei)" />
            <text x="205" y="112" fill={FORCE} fontSize="14">E₁</text>
            <text x="210" y="192" fill={TXT} fontSize="13" textAnchor="middle">uvnitř: E + E₁ = 0</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady padají body)">
        <ul>
          <li><b>Náboj je skalár</b> (jen číslo ±), kdežto <b>síla</b> mezi náboji je vektor. Nepleť to.</li>
          <li>Při tření vznikne <b>vždy stejně velký + a − náboj</b> — náboj se nevyrábí, jen přesouvá (zákon zachování).</li>
          <li>Elektrostaticky se mohou přitáhnout i <b>neutrální tělesa</b> (např. nabitá tyč a kousek papíru) — díky <b>polarizaci</b>: pole rozdělí náboje uvnitř a bližší konec je opačný, takže přitahuje silněji.</li>
          <li>Permitivita <M>{'\\varepsilon'}</M> je <b>vlastnost prostředí</b>; <M>{'\\varepsilon_r'}</M> říká „kolikrát víc než vakuum", pro vakuum je <M>{'\\varepsilon_r=1'}</M>.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat Coulombův zákon F = k·Q₁Q₂/r² a popsat všechny veličiny (včetně k = 1/(4πε)).',
          'Charakterizovat náboj: skalár, kladný i záporný, vlastnost částic, jednotka coulomb.',
          'Vyjmenovat a vysvětlit 3 zákony o náboji (zachování, invariantnost, kvantování).',
          'Rozlišit vodič a dielektrikum podle volných × vázaných nábojů.',
          'Vysvětlit vznik náboje třením (přesun elektronů, stejně velký + a −).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Napiš Coulombův zákon a řekni, co je to k.',
            a: <><M>{'F = k\\,\\frac{Q_1 Q_2}{r^2}'}</M>, kde <M>{'Q_1, Q_2'}</M> jsou náboje, <M>{'r'}</M> jejich vzdálenost a <M>{'k = 1/(4\\pi\\varepsilon)'}</M> je konstanta úměrnosti (<M>{'\\varepsilon'}</M> je permitivita prostředí).</>,
          },
          {
            q: 'Je elektrický náboj skalár, nebo vektor? A síla mezi náboji?',
            a: <>Náboj je <b>skalár</b> (číslo se znaménkem ±, bez směru). Síla mezi náboji je <b>vektor</b> (má směr — po spojnici nábojů).</>,
          },
          {
            q: 'Vyjmenuj tři zákony o náboji a u každého řekni jednu větu.',
            a: <><b>Zachování</b> — v izolované soustavě se celkový náboj nemění. <b>Invariantnost</b> — náboj se nemění pohybem (atomy jsou neutrální, i když se v nich částice hýbou). <b>Kvantování</b> — náboj je celočíselný násobek elementárního náboje <M>{'e'}</M>.</>,
          },
          {
            q: 'Proč může nabitá tyč přitáhnout i neutrální kousek papíru?',
            a: <>Kvůli <b>polarizaci</b>: pole tyče rozdělí náboje v papíru — bližší strana získá opačný náboj než tyč. Ten je blíž, takže přitahování převáží nad odpuzováním vzdálenější strany a papír se přitáhne, i když je jako celek neutrální.</>,
          },
        ]}
      />
    </>
  )
}
