import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.2'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'kapkovy-model': { lesson: '5.2', label: 'kapkový model jádra', short: 'Jádro jako kapka kapaliny — dobrý na štěpení a syntézu.' },
  'slupkovy-model': { lesson: '5.2', label: 'slupkový model jádra', short: 'Nukleony na diskrétních hladinách — dobrý na excitaci.' },
  'vazebna-energie': { lesson: '5.2', label: 'vazebná energie', short: 'Energie, která se uvolní při vzniku jádra z nukleonů.' },
  'hmotnostni-ubytek': { lesson: '5.2', label: 'hmotnostní úbytek', short: 'Δm = hmotnost nukleonů zvlášť − hmotnost jádra; míra stability.' },
}

const ACCENT = '#34d399' // akcent tématu (jaderná fyzika)
const TXT = '#e8ecf8'
const MUTED = '#9aa6c4'
const PROTON = '#fb7185'
const NEUTRON = '#60a5fa'
const ENERGY = '#fbbf24'

/* Šipka pro SVG. */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson_5_2() {
  return (
    <>
      <p className="lead">
        Jádro si nedovedeme „spočítat" jednou rovnicí, tak si ho popisujeme dvěma <Term>modely</Term> —
        a u zkoušky se ptají hlavně na to, <b>který model je na co</b>. Druhá polovina lekce je o tom,
        proč jádro vůbec drží pohromadě: o <Term>vazebné energii</Term> a <Term>hmotnostním úbytku</Term>.
        To je krátké, ale chce to umět napsat vzorečkem.
      </p>

      <Section title="Proč dva modely (a ne jeden vzoreček)">
        <p>
          Pro jádro neexistuje jedna univerzální kvantová teorie — síly mezi <Concept id="nukleony">nukleony</Concept> jsou složité a
          jejich přesný tvar neznáme. Proto se používají <b>modely</b>: každý je dobrý na něco jiného.
          Pro zkoušku stačí umět dva a vědět, <b>na co se hodí</b>.
        </p>
        <ul>
          <li><Term id="kapkovy-model">Kapkový model</Term> — jádro jako kapka kapaliny. Dobrý na <b>štěpení a syntézu</b>.</li>
          <li><Term id="slupkovy-model">Slupkový model</Term> — nukleony na hladinách jako elektrony v obalu. Dobrý na <b>excitaci a energetické hladiny</b>.</li>
        </ul>
      </Section>

      <Section title="Kapkový model (Bohrův, hydrodynamický)">
        <p>
          Představ si jádro jako <Term>kapku nukleonové kapaliny</Term>: nukleony jsou jako kuličky stejné
          velikosti, namačkané do co nejmenšího objemu, přesně jako molekuly v kapce vody. Hustota je
          u všech jader skoro stejná — tak jako kapka vody má pořád stejnou hustotu, ať je velká nebo malá.
        </p>
        <p>
          Tahle představa je skvělá na <b>jaderné reakce</b>: kapka se může rozkmitat (jádro se
          <Term> excituje</Term>), protáhnout se do tvaru „činky" a <b>roztrhnout na dvě menší kapky</b> —
          a to je přesně <Concept id="stepeni">štěpení</Concept>. Opačně se dvě kapky můžou spojit — <Concept id="jaderna-synteza">syntéza</Concept>. Z tohohle modelu vznikla
          i <Term>Weizsäckerova formule</Term>, která popisuje vazebnou energii jádra podle počtu a
          rozložení nukleonů.
        </p>

        <StepFigure
          title="Štěpení v kapkovém modelu"
          steps={[
            {
              label: 'klidná kapka',
              caption: <>Těžké jádro je jako kulatá kapka — drží ho pohromadě přitažlivé <Concept id="jaderne-sily">jaderné síly</Concept> (povrchové napětí kapky).</>,
              content: (
                <svg viewBox="0 0 460 150" className="svg-fig">
                  <circle cx="120" cy="75" r="42" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <circle cx="108" cy="64" r="8" fill={PROTON} />
                  <circle cx="132" cy="70" r="8" fill={NEUTRON} />
                  <circle cx="115" cy="88" r="8" fill={NEUTRON} />
                  <circle cx="135" cy="90" r="8" fill={PROTON} />
                  <circle cx="100" cy="82" r="8" fill={PROTON} />
                  <text x="120" y="138" fill={TXT} fontSize="14" textAnchor="middle">jádro = kapka</text>
                </svg>
              ),
            },
            {
              label: 'excitace + deformace',
              caption: <>Jádro pohltí energii (např. neutron), rozkmitá se a <b>protáhne do tvaru činky</b>. Elektrické odpuzování protonů táhne oba konce od sebe.</>,
              content: (
                <svg viewBox="0 0 460 150" className="svg-fig">
                  <Defs color={ENERGY} name="arE" />
                  <path
                    d="M150,75 C150,48 185,46 205,58 C222,68 248,68 265,58 C285,46 320,48 320,75 C320,102 285,104 265,92 C248,82 222,82 205,92 C185,104 150,102 150,75 Z"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="3"
                  />
                  <circle cx="178" cy="75" r="8" fill={PROTON} />
                  <circle cx="190" cy="64" r="8" fill={NEUTRON} />
                  <circle cx="290" cy="75" r="8" fill={PROTON} />
                  <circle cx="278" cy="86" r="8" fill={NEUTRON} />
                  <line x1="150" y1="30" x2="120" y2="55" stroke={ENERGY} strokeWidth="3" markerEnd="url(#arE)" />
                  <text x="120" y="24" fill={ENERGY} fontSize="13" textAnchor="middle">dodaná E</text>
                  <text x="235" y="138" fill={TXT} fontSize="14" textAnchor="middle">deformace (činka)</text>
                </svg>
              ),
            },
            {
              label: 'rozdělení + energie',
              caption: <>Když se konce vzdálí natolik, že už je krátkodosahové jaderné síly neudrží, kapka praskne na dvě lehčí jádra a <b>uvolní se energie</b> (nová jádra jsou stabilnější).</>,
              content: (
                <svg viewBox="0 0 460 150" className="svg-fig">
                  <Defs color={ENERGY} name="arE2" />
                  <circle cx="140" cy="75" r="28" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <circle cx="132" cy="70" r="7" fill={PROTON} />
                  <circle cx="150" cy="80" r="7" fill={NEUTRON} />
                  <text x="140" y="125" fill={TXT} fontSize="13" textAnchor="middle">jádro b₁</text>
                  <circle cx="320" cy="75" r="28" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <circle cx="312" cy="70" r="7" fill={NEUTRON} />
                  <circle cx="330" cy="80" r="7" fill={PROTON} />
                  <text x="320" y="125" fill={TXT} fontSize="13" textAnchor="middle">jádro b₂</text>
                  <line x1="172" y1="60" x2="135" y2="40" stroke={ENERGY} strokeWidth="3" markerEnd="url(#arE2)" />
                  <line x1="288" y1="60" x2="325" y2="40" stroke={ENERGY} strokeWidth="3" markerEnd="url(#arE2)" />
                  <text x="230" y="48" fill={ENERGY} fontSize="14" textAnchor="middle">uvolněná energie</text>
                </svg>
              ),
            },
          ]}
        />
        <p style={{ marginTop: '0.6em' }}>
          <span style={{ color: PROTON }}>●</span> proton &nbsp;&nbsp;
          <span style={{ color: NEUTRON }}>●</span> neutron
        </p>
      </Section>

      <Section title="Slupkový model">
        <p>
          Druhý pohled bere jádro podobně jako <b>elektronový obal atomu</b>: nukleony obsazují
          <Term> diskrétní energetické hladiny</Term> („slupky"). Vychází ze <Concept id="schrodingerova-rovnice">Schrödingerovy rovnice</Concept>,
          kde jaderné síly nahradíme efektivním <Term>potenciálem (potenciálovou jámou)</Term> — nejjednodušeji
          parabolickou nebo pravoúhlou jámou. Řešení dá <b>nespojité (diskrétní) energetické spektrum</b>:
          povolené jsou jen určité hladiny, mezi nimi ne.
        </p>
        <p>
          Díky tomu model dobře vysvětluje <b>excitaci jádra</b> (nukleon přeskočí na vyšší hladinu, při
          návratu vyzáří energii) a <b>zvlášť stabilní jádra</b> s úplně zaplněnými slupkami — tzv.
          <Term> magická čísla</Term>. Pozor: nukleony interagují hlavně se společným silovým polem všech
          ostatních, ne každý s každým zvlášť.
        </p>

        <Figure caption={<>Slupkový model: nukleony sedí v potenciálové jámě na diskrétních hladinách. Excitace = přeskok na vyšší hladinu; návrat zpět vyzáří <Concept id="foton">foton</Concept>.</>}>
          <svg viewBox="0 0 380 200" className="svg-fig">
            <Defs color={ENERGY} name="arG" />
            {/* potenciálová jáma */}
            <path d="M40,30 L40,160 L300,160 L300,30" fill="none" stroke={MUTED} strokeWidth="2.5" />
            <text x="170" y="182" fill={MUTED} fontSize="13" textAnchor="middle">potenciálová jáma</text>
            {/* hladiny */}
            <line x1="70" y1="140" x2="270" y2="140" stroke={ACCENT} strokeWidth="2.5" />
            <line x1="70" y1="110" x2="270" y2="110" stroke={ACCENT} strokeWidth="2.5" />
            <line x1="70" y1="80" x2="270" y2="80" stroke={ACCENT} strokeWidth="2.5" />
            <line x1="70" y1="55" x2="270" y2="55" stroke={ACCENT} strokeWidth="2" strokeDasharray="5 4" />
            {/* nukleony na spodních hladinách */}
            <circle cx="110" cy="140" r="7" fill={NEUTRON} />
            <circle cx="150" cy="140" r="7" fill={PROTON} />
            <circle cx="110" cy="110" r="7" fill={PROTON} />
            <circle cx="150" cy="110" r="7" fill={NEUTRON} />
            {/* excitovaný nukleon přeskakuje nahoru */}
            <line x1="200" y1="105" x2="200" y2="62" stroke={ENERGY} strokeWidth="3" markerEnd="url(#arG)" />
            <circle cx="200" cy="55" r="7" fill={ENERGY} />
            <text x="240" y="48" fill={ENERGY} fontSize="13">excitace</text>
            <text x="290" y="150" fill={TXT} fontSize="13" textAnchor="end">E (hladiny)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Vazebná energie a hmotnostní úbytek (tady jsou body)">
        <p>
          Teď to nejdůležitější. <Term id="vazebna-energie">Vazebná energie jádra</Term> <M>{'E_V'}</M> je energie, která se
          <b> uvolní, když z volných nukleonů složíme jádro</b> (a stejně velkou energii bys musel dodat,
          abys jádro zase rozebral na jednotlivé nukleony). Čím větší vazebná energie, tím pevněji jádro drží.
        </p>
        <MB>{'E_V = \\left(N m_n + Z m_p - M_X\\right)c^2 \\approx \\left(A\\,m_u - M_X\\right)c^2'}</MB>
        <p>
          Kde <M>{'Z'}</M> je <Concept id="protonove-cislo">počet protonů</Concept>, <M>{'N'}</M> počet neutronů, <M>{'A = Z+N'}</M> <Concept id="nukleonove-cislo">počet nukleonů</Concept>,
          <M>{'\\,M_X'}</M> hmotnost samotného jádra a <M>{'m_u'}</M> atomová hmotnostní jednotka.
        </p>
        <p>
          Klíčová myšlenka: <b>jádro váží méně</b> než kdybys sečetl hmotnosti všech jeho nukleonů zvlášť.
          Ten rozdíl je <Term id="hmotnostni-ubytek">hmotnostní úbytek</Term> <M>{'\\Delta m'}</M>:
        </p>
        <MB>{'\\Delta m = N m_n + Z m_p - M_X \\quad\\Longrightarrow\\quad E_V = \\Delta m\\,c^2'}</MB>
        <p>
          Vazebná energie a hmotnostní úbytek jsou tedy <b>totéž</b>, jen přepočítané přes
          <M>{'\\,E = mc^2'}</M>. „Chybějící" hmota se proměnila na vazebnou energii, kterou jádro
          vyzářilo, když vzniklo.
        </p>

        <StepFigure
          title="Proč jádro váží míň: hmotnostní úbytek"
          steps={[
            {
              label: 'nukleony zvlášť',
              caption: <>Sečteme hmotnosti všech <M>{'Z'}</M> protonů a <M>{'N'}</M> neutronů <b>jako volných částic</b>. To je horní hranice hmotnosti.</>,
              content: (
                <svg viewBox="0 0 440 140" className="svg-fig">
                  <circle cx="70" cy="50" r="11" fill={PROTON} />
                  <circle cx="110" cy="50" r="11" fill={NEUTRON} />
                  <circle cx="150" cy="50" r="11" fill={PROTON} />
                  <circle cx="90" cy="85" r="11" fill={NEUTRON} />
                  <circle cx="130" cy="85" r="11" fill={PROTON} />
                  <text x="110" y="120" fill={TXT} fontSize="14" textAnchor="middle">volné nukleony</text>
                  <text x="300" y="68" fill={MUTED} fontSize="16" textAnchor="middle">hmotnost = N·mₙ + Z·mₚ</text>
                </svg>
              ),
            },
            {
              label: 'složíme jádro',
              caption: <>Když je spojíme do jádra, vyzáří se <b>vazebná energie</b> <M>{'E_V'}</M>. S energií odejde i kousek hmoty.</>,
              content: (
                <svg viewBox="0 0 440 140" className="svg-fig">
                  <Defs color={ENERGY} name="arU" />
                  <circle cx="110" cy="65" r="34" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <circle cx="98" cy="56" r="9" fill={PROTON} />
                  <circle cx="122" cy="60" r="9" fill={NEUTRON} />
                  <circle cx="105" cy="78" r="9" fill={PROTON} />
                  <circle cx="125" cy="80" r="9" fill={NEUTRON} />
                  <circle cx="90" cy="72" r="9" fill={PROTON} />
                  <line x1="148" y1="45" x2="195" y2="25" stroke={ENERGY} strokeWidth="3" markerEnd="url(#arU)" />
                  <text x="255" y="28" fill={ENERGY} fontSize="15" textAnchor="middle">vyzáří E_V</text>
                  <text x="300" y="78" fill={MUTED} fontSize="16" textAnchor="middle">hmotnost jádra = Mₓ</text>
                </svg>
              ),
            },
            {
              label: 'rozdíl = Δm',
              caption: <>Jádro je lehčí: <M>{'\\Delta m = (N m_n + Z m_p) - M_X > 0'}</M>. A platí <M>{'E_V = \\Delta m\\,c^2'}</M>. Větší <M>{'\\Delta m'}</M> na nukleon = stabilnější jádro.</>,
              content: (
                <svg viewBox="0 0 440 140" className="svg-fig">
                  <rect x="60" y="40" width="150" height="34" rx="5" fill={MUTED} opacity="0.5" />
                  <text x="135" y="62" fill={TXT} fontSize="14" textAnchor="middle">nukleony zvlášť</text>
                  <rect x="60" y="88" width="120" height="34" rx="5" fill={ACCENT} opacity="0.55" />
                  <text x="120" y="110" fill={TXT} fontSize="14" textAnchor="middle">jádro Mₓ</text>
                  <line x1="183" y1="105" x2="208" y2="105" stroke={ENERGY} strokeWidth="2" />
                  <line x1="213" y1="57" x2="213" y2="105" stroke={ENERGY} strokeWidth="2" />
                  <text x="320" y="92" fill={ENERGY} fontSize="16" textAnchor="middle">Δm → E_V = Δm·c²</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Stabilita a kdy se uvolní jaderná energie">
        <p>
          Nejlépe se srovnává <b>vazebná energie na jeden nukleon</b> <M>{'E_V/A'}</M> — kolik „lepidla"
          připadá na jednu částici. Čím je větší, tím je jádro <b>stabilnější</b>. Tahle hodnota má
          maximum kolem <M>{'A \\approx 50\\text{–}60'}</M> (železo, nikl) a k oběma stranám klesá.
        </p>
        <p>
          Z toho plyne jednoduché pravidlo, <b>kdy se uvolní jaderná energie</b>: vždycky, když se jádra
          posunou <b>k tomu maximu</b> (ke stabilnějšímu stavu):
        </p>
        <ul>
          <li><b>Syntéza lehkých jader</b> (vlevo od maxima) — spojení malých jader do většího. Tak svítí hvězdy.</li>
          <li><b>Štěpení těžkých jader</b> (vpravo od maxima) — rozbití velkého jádra na dvě střední. Tak funguje reaktor.</li>
        </ul>

        <Figure caption="Vazebná energie na nukleon EV/A. Maximum je kolem A ≈ 50–60 (nejstabilnější jádra). Lehká jádra získají energii syntézou, těžká štěpením — obojí míří k vrcholu.">
          <svg viewBox="0 0 420 220" className="svg-fig">
            <Defs color={ACCENT} name="arC" />
            {/* osy */}
            <line x1="45" y1="180" x2="400" y2="180" stroke={MUTED} strokeWidth="2" markerEnd="url(#arC)" />
            <line x1="45" y1="180" x2="45" y2="20" stroke={MUTED} strokeWidth="2" markerEnd="url(#arC)" />
            <text x="395" y="200" fill={TXT} fontSize="13" textAnchor="end">A (počet nukleonů)</text>
            <text x="50" y="18" fill={TXT} fontSize="13">E_V/A</text>
            {/* křivka: prudký vzestup, vrchol u ~50-60, pozvolný pokles */}
            <path d="M55,170 C75,70 110,55 150,52 C200,49 240,60 300,80 C340,93 370,103 390,112"
                  fill="none" stroke={ACCENT} strokeWidth="3" />
            {/* vrchol */}
            <circle cx="150" cy="52" r="4" fill={ENERGY} />
            <text x="150" y="42" fill={ENERGY} fontSize="13" textAnchor="middle">vrchol (Fe)</text>
            {/* syntéza vlevo */}
            <line x1="95" y1="135" x2="135" y2="75" stroke={NEUTRON} strokeWidth="2.5" markerEnd="url(#arC)" />
            <text x="80" y="150" fill={NEUTRON} fontSize="13" textAnchor="middle">syntéza →</text>
            {/* štěpení vpravo */}
            <line x1="330" y1="95" x2="200" y2="58" stroke={PROTON} strokeWidth="2.5" markerEnd="url(#arC)" />
            <text x="345" y="90" fill={PROTON} fontSize="13" textAnchor="middle">← štěpení</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Který model na co:</b> <Term>kapkový</Term> = štěpení a syntéza (kapka se dělí/spojuje);
            <Term> slupkový</Term> = excitace a energetické hladiny (diskrétní spektrum, magická čísla).
            Tohle si zkoušející rád otočí.
          </li>
          <li>
            Energie se uvolní <b>jak při syntéze lehkých, tak při štěpení těžkých</b> jader — to není
            protimluv. Obojí míří ke <b>stabilnějším</b> jádrům (k vrcholu křivky <M>{'E_V/A'}</M>).
          </li>
          <li>
            <b>Jádro váží míň</b> než jeho nukleony zvlášť — ne víc. „Chybějící" hmota
            <M>{'\\,\\Delta m'}</M> se vyzářila jako vazebná energie (<M>{'E_V = \\Delta m\\,c^2'}</M>).
          </li>
          <li>
            Větší hmotnostní úbytek (na nukleon) = <b>stabilnější</b> jádro. Δm a stabilita jdou ruku v ruce.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Popsat kapkový model a říct, na co je dobrý (štěpení, syntéza, Weizsäckerova formule).',
          'Popsat slupkový model (Schrödingerova rovnice, potenciálová jáma, diskrétní hladiny, excitace).',
          'Napsat vazebnou energii E_V = Δm·c² a vysvětlit hmotnostní úbytek Δm.',
          'Vysvětlit, že větší úbytek (na nukleon) znamená stabilnější jádro.',
          'Vědět, že energie se uvolní syntézou lehkých i štěpením těžkých jader.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'K čemu se hodí kapkový model a k čemu slupkový?',
            a: (
              <>
                <b>Kapkový</b> (jádro jako kapka kapaliny) je názorný na <b>štěpení a syntézu</b> a vznikla
                z něj Weizsäckerova formule pro vazebnou energii. <b>Slupkový</b> (nukleony na diskrétních
                hladinách, ze Schrödingerovy rovnice s potenciálovou jámou) je dobrý na <b>excitaci</b> a
                stabilní jádra (magická čísla).
              </>
            ),
          },
          {
            q: <>Co je vazebná energie <M>{'E_V'}</M> a jak souvisí s hmotnostním úbytkem?</>,
            a: (
              <>
                <M>{'E_V'}</M> je energie, která se uvolní při složení jádra z volných nukleonů (a kterou bys
                musel dodat na jeho rozebrání). Jádro proto váží míň než jeho nukleony zvlášť — o
                <Term> hmotnostní úbytek</Term> <M>{'\\Delta m = N m_n + Z m_p - M_X'}</M>. Platí
                <M>{'\\,E_V = \\Delta m\\,c^2'}</M>.
              </>
            ),
          },
          {
            q: 'Jak hmotnostní úbytek souvisí se stabilitou jádra?',
            a: (
              <>
                Větší hmotnostní úbytek <b>na jeden nukleon</b> (tj. větší <M>{'E_V/A'}</M>) znamená
                <b> stabilnější</b> jádro. Maximum je kolem <M>{'A \\approx 50\\text{–}60'}</M> (železo) —
                tam jsou jádra nejpevněji vázaná.
              </>
            ),
          },
          {
            q: 'Kdy se uvolní jaderná energie — při štěpení, nebo při syntéze?',
            a: (
              <>
                Při <b>obojím</b>: <b>syntézou lehkých</b> jader (pod vrcholem zleva) i <b>štěpením těžkých</b>
                jader (zprava). V obou případech vznikají <b>stabilnější</b> jádra blíž k vrcholu křivky
                <M>{'\\,E_V/A'}</M>, a ten rozdíl ve vazebné energii se uvolní.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
