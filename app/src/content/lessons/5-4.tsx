import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.4'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'tunelovy-jev': {
    lesson: '5.4',
    label: 'tunelový jev',
    short: 'Kvantová možnost projít energetickou bariérou, kterou by částice klasicky nepřekonala.',
  },
  'uvolnena-energie-q': {
    lesson: '5.4',
    label: 'uvolněná energie Q',
    short: 'Q = (m_i − m_f − m)c²; když Q > 0, je emise α energeticky možná.',
  },
  'potencialova-bariera': {
    lesson: '5.4',
    label: 'potenciálová bariéra',
    short: 'Energetický „val" kolem jádra, který α částici brání ven; klasicky nepřekonatelný.',
  },
}

const ACC = '#34d399' // akcent tématu 5 (jaderná a atomová fyzika)
const TXT = '#e8ecf8'
const DIM = '#94a3b8'
const PROTON = '#f87171' // proton = červená (odpuzování)
const NEUTRON = '#9aa6c4' // neutron = šedá
const ALPHA = '#fbbf24' // α částice = žlutá
const BARRIER = '#60a5fa' // bariéra / potenciál = modrá

/* Marker se šipkou pro SVG. */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Malá α částice = 2 protony + 2 neutrony slepené dohromady. */
function AlphaParticle({ x, y, r = 5 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x - r} cy={y - r} r={r} fill={PROTON} />
      <circle cx={x + r} cy={y - r} r={r} fill={NEUTRON} />
      <circle cx={x - r} cy={y + r} r={r} fill={NEUTRON} />
      <circle cx={x + r} cy={y + r} r={r} fill={PROTON} />
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tahle lekce odpovídá na otázku, kterou zkoušející milují: <b>proč vůbec</b> z těžkého jádra
        vyletí α částice, když na to „nemá energii"? Odpověď je <Term id="tunelovy-jev">tunelový jev</Term> — perla
        kvantové fyziky. Stačí pochopit jeden obrázek a umět říct, čím se liší klasický a kvantový
        pohled.
      </p>

      <Section title="Proč právě těžká jádra (a ne lehká)">
        <p>
          V jádře proti sobě bojují dvě síly. <Concept id="jaderne-sily">Jaderné síly</Concept> jsou přitažlivé, ale mají{' '}
          <b>velmi krátký dosah</b> — působí jen mezi sousedními <Concept id="nukleony">nukleony</Concept>. <Term>Coulombovské
          (elektrostatické) síly</Term> jsou odpudivé, působí mezi všemi protony a mají{' '}
          <b>dlouhý dosah</b>.
        </p>
        <p>
          U <b>těžkých jader</b> (hodně protonů, velký objem) se odpudivé Coulombovské síly sčítají
          přes celé jádro, kdežto přitažlivé jaderné síly „dosáhnou" jen na nejbližší okolí. Proto
          u nich <b>jaderné síly už nestačí kompenzovat odpuzování protonů</b> — jádro je nestabilní
          a snaží se zbavit přebytku tím, že odhodí <Term>α částici</Term> (jádro helia{' '}
          <M>{'{}^{4}_{2}\\mathrm{He}'}</M>: 2 protony + 2 neutrony).
        </p>

        <Figure caption="V těžkém jádře krátkodosahové jaderné síly (zelené) drží jen sousedy, ale odpuzování protonů (červené) se sčítá přes celé jádro — proto je nestabilní a odhodí α částici.">
          <svg viewBox="0 0 420 200" className="svg-fig">
            <Defs color={PROTON} name="arp" />
            <Defs color={ACC} name="arg" />
            {/* obrys jádra */}
            <circle cx="150" cy="100" r="72" fill={BARRIER} opacity="0.10" stroke={BARRIER} strokeWidth="1.5" strokeDasharray="5 5" />
            {/* nukleony uvnitř */}
            {[
              [120, 70, PROTON], [150, 60, NEUTRON], [180, 78, PROTON],
              [110, 105, NEUTRON], [150, 100, PROTON], [188, 110, NEUTRON],
              [128, 135, PROTON], [165, 138, NEUTRON],
            ].map(([cx, cy, c], k) => (
              <circle key={k} cx={cx as number} cy={cy as number} r="9" fill={c as string} />
            ))}
            {/* krátkodosahová jaderná síla mezi dvěma sousedy */}
            <line x1="158" y1="92" x2="180" y2="84" stroke={ACC} strokeWidth="3" />
            <line x1="142" y1="108" x2="120" y2="128" stroke={ACC} strokeWidth="3" />
            <text x="150" y="190" fill={ACC} fontSize="12" textAnchor="middle">jaderné síly: krátký dosah (jen sousedi)</text>
            {/* dalekodosahové odpuzování protonů */}
            <line x1="122" y1="68" x2="186" y2="108" stroke={PROTON} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arp)" />
            <line x1="150" y1="98" x2="130" y2="133" stroke={PROTON} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arp)" />
            {/* legenda */}
            <circle cx="300" cy="48" r="8" fill={PROTON} />
            <text x="314" y="52" fill={TXT} fontSize="13">proton (odpuzuje)</text>
            <circle cx="300" cy="76" r="8" fill={NEUTRON} />
            <text x="314" y="80" fill={TXT} fontSize="13">neutron</text>
            <AlphaParticle x={306} y={120} r={6} />
            <text x="324" y="124" fill={TXT} fontSize="13">α částice</text>
            <text x="300" y="158" fill={ALPHA} fontSize="13" textAnchor="middle">= 2 p + 2 n</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Uvolněná energie Q — kdy je rozpad vůbec možný">
        <p>
          Aby k rozpadu mohlo dojít, musí se při něm <b>uvolnit</b> energie. Spočítá se z{' '}
          <Concept id="hmotnostni-ubytek">hmotnostního úbytku</Concept> — porovnáš hmotnost před a po:
        </p>
        <MB>{'Q = (m_i - m_f - m)\\,c^2'}</MB>
        <p>
          kde <M>{'m_i'}</M> je hmotnost <b>původního</b> jádra, <M>{'m_f'}</M> hmotnost{' '}
          <b>vzniklého</b> (dceřiného) jádra a <M>{'m'}</M> hmotnost <b>emitované</b> α částice.
          Rozpad probíhá podle schématu:
        </p>
        <MB>{'{}^{A}_{Z}\\mathrm{X} \\;\\longrightarrow\\; {}^{A-4}_{Z-2}\\mathrm{Y} \\;+\\; {}^{4}_{2}\\alpha'}</MB>
        <p>
          Klíčová podmínka: <M>{'Q > 0'}</M> ⇒ emise α částice je <b>energeticky možná</b> (<Term id="uvolnena-energie-q">uvolněná
          energie</Term> se rozdělí jako <Concept id="kineticka-energie">kinetická energie</Concept> odletující α částice a dceřiného jádra). Když by
          vyšlo <M>{'Q \\le 0'}</M>, rozpad sám od sebe neproběhne.
        </p>
        <Callout kind="tip" title="Jak si Q zapamatovat">
          „Co zmizí na hmotě, objeví se jako energie." Hmotnost po rozpadu je o trošku{' '}
          <b>menší</b> než před ním a ten rozdíl × <M>{'c^2'}</M> je uvolněná energie{' '}
          <M>{'Q'}</M>. Je to stejný princip <M>{'E=mc^2'}</M> jako u <Concept id="vazebna-energie">vazebné energie</Concept>.
        </Callout>
      </Section>

      <Section title="Jádro pudla: klasicky to nejde, kvantově ano">
        <p>
          α částice je uvnitř jádra jako míček v jámě obklopené vysokým „valem" —{' '}
          <Term id="potencialova-bariera">potenciálovou bariérou</Term>. Tu bariéru vytváří právě Coulombovské odpuzování. A teď
          ten zádrhel, kvůli kterému lekce existuje:
        </p>
        <ul>
          <li>
            <b>Klasická fyzika:</b> α částice má menší energii, než je výška bariéry{' '}
            <M>{'E_\\text{bar}'}</M>. Takže <b>nemůže</b> bariéru překonat — jako když nemáš dost
            rychlosti, aby ses vykutálel z důlku. Klasicky by tam zůstala navždy.
          </li>
          <li>
            <b>Kvantová fyzika:</b> existuje <b>malá, ale nenulová pravděpodobnost</b>, že částice{' '}
            <b>projde bariérou skrz</b>, i když na ni „nemá" energii. To je <Term>tunelový jev</Term>.
            Pravděpodobnost je malá, proto α rozpady často trvají roky až miliardy let — ale jednou se
            to povede a částice „protuneluje" ven.
          </li>
        </ul>
        <p>
          Odkud se ta možnost bere? Souvisí s <Concept id="heisenberg-relace">Heisenbergovou relací neurčitosti</Concept>:
          polohu a energii částice nelze určit současně úplně přesně, takže částice „nemá" ostře danou
          energii a může se s jistou pravděpodobností ocitnout i za bariérou. (Celou tuhle lekci o
          neurčitosti znát nemusíš — stačí ta jedna věta.)
        </p>

        <p>Proklikej si, co se s α částicí děje. Klikej <b>Další →</b>:</p>

        <StepFigure
          title="Tunelový jev krok po kroku"
          steps={[
            {
              label: 'uvnitř jámy',
              caption: (
                <>
                  α částice se uvnitř jádra pohybuje sem a tam v <b>potenciálové jámě</b> a naráží do
                  „valu" — <Term>bariéry</Term> <M>{'E_\\text{bar}'}</M>, kterou tvoří Coulombovské
                  odpuzování.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 200" className="svg-fig">
                  {/* osa */}
                  <line x1="40" y1="170" x2="400" y2="170" stroke={DIM} strokeWidth="1.5" />
                  <text x="395" y="188" fill={TXT} fontSize="12" textAnchor="end">x (vzdálenost od středu)</text>
                  {/* profil potenciálu: jáma -> špička -> Coulombův chvost */}
                  <path d="M55,120 L150,120 L150,45 C175,70 200,100 240,125 C280,148 330,158 395,162"
                        fill="none" stroke={BARRIER} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
                  <text x="150" y="38" fill={BARRIER} fontSize="12" textAnchor="middle">E_bar</text>
                  {/* energetická hladina částice */}
                  <line x1="55" y1="140" x2="300" y2="140" stroke={ALPHA} strokeWidth="1.5" strokeDasharray="6 5" />
                  <text x="48" y="144" fill={ALPHA} fontSize="11" textAnchor="end">E</text>
                  {/* částice v jámě */}
                  <AlphaParticle x={100} y={132} r={5} />
                  {/* pohyb sem a tam */}
                  <line x1="70" y1="105" x2="135" y2="105" stroke={ALPHA} strokeWidth="2" />
                  <text x="100" y="98" fill={ALPHA} fontSize="11" textAnchor="middle">tam a zpět</text>
                </svg>
              ),
            },
            {
              label: 'klasicky: stop',
              caption: (
                <>
                  Klasicky: částice má energii <M>{'E'}</M> <b>menší</b> než výška bariéry{' '}
                  <M>{'E_\\text{bar}'}</M>. <b>Odrazí se</b> a nikdy se nedostane ven. Konec příběhu.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 200" className="svg-fig">
                  <Defs color={PROTON} name="arstop" />
                  <line x1="40" y1="170" x2="400" y2="170" stroke={DIM} strokeWidth="1.5" />
                  <path d="M55,120 L150,120 L150,45 C175,70 200,100 240,125 C280,148 330,158 395,162"
                        fill="none" stroke={BARRIER} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
                  <text x="150" y="38" fill={BARRIER} fontSize="12" textAnchor="middle">E_bar</text>
                  <line x1="55" y1="140" x2="300" y2="140" stroke={ALPHA} strokeWidth="1.5" strokeDasharray="6 5" />
                  <text x="48" y="144" fill={ALPHA} fontSize="11" textAnchor="end">E</text>
                  <AlphaParticle x={120} y={132} r={5} />
                  {/* náraz a odraz */}
                  <line x1="130" y1="132" x2="148" y2="132" stroke={ALPHA} strokeWidth="2.5" markerEnd="url(#arstop)" />
                  <line x1="146" y1="118" x2="110" y2="118" stroke={PROTON} strokeWidth="2.5" markerEnd="url(#arstop)" />
                  <text x="200" y="90" fill={PROTON} fontSize="13" textAnchor="middle">klasicky: odraz, ven se nedostane</text>
                </svg>
              ),
            },
            {
              label: 'kvantově: tunel',
              caption: (
                <>
                  Kvantově: <Concept id="vlnova-funkce">vlnová funkce</Concept> α částice <b>nezmizí</b> uvnitř bariéry — jen zeslábne. Za
                  bariérou má nenulovou hodnotu, takže <b>existuje malá pravděpodobnost</b>, že tam
                  částici najdeme. To je <Term>tunelový jev</Term>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 200" className="svg-fig">
                  <line x1="40" y1="170" x2="400" y2="170" stroke={DIM} strokeWidth="1.5" />
                  <path d="M55,120 L150,120 L150,45 C175,70 200,100 240,125 C280,148 330,158 395,162"
                        fill="none" stroke={BARRIER} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
                  <text x="150" y="38" fill={BARRIER} fontSize="12" textAnchor="middle">E_bar</text>
                  {/* vlnová funkce: velké oscilace uvnitř, tlumení v bariéře, malé vně */}
                  <path d="M60,132 q8,-22 16,0 t16,0 t16,0 t16,0
                           C112,118 130,128 150,128
                           C175,130 200,134 240,138
                           C270,140 300,140 320,140
                           q7,-7 14,0 t14,0 t14,0"
                        fill="none" stroke="#ff2d8e" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="95" y="100" fill="#ff2d8e" fontSize="12" textAnchor="middle">ψ uvnitř (velká)</text>
                  <text x="355" y="124" fill="#ff2d8e" fontSize="12" textAnchor="middle">ψ vně (malá, ale ≠ 0)</text>
                  {/* α už venku */}
                  <AlphaParticle x={365} y={150} r={5} />
                </svg>
              ),
            },
            {
              label: 'únik α',
              caption: (
                <>
                  Jakmile je α částice za bariérou, Coulombovské odpuzování ji <b>vystřelí pryč</b>{' '}
                  jako z praku. Jádro se změní: <M>{'Z\\!\\to\\!Z-2'}</M>, <M>{'A\\!\\to\\!A-4'}</M>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 200" className="svg-fig">
                  <Defs color={ALPHA} name="arout" />
                  <line x1="40" y1="170" x2="400" y2="170" stroke={DIM} strokeWidth="1.5" />
                  <path d="M55,120 L150,120 L150,45 C175,70 200,100 240,125 C280,148 330,158 395,162"
                        fill="none" stroke={BARRIER} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
                  {/* dceřiné jádro v jámě */}
                  <circle cx="100" cy="128" r="14" fill={NEUTRON} opacity="0.7" />
                  <text x="100" y="100" fill={TXT} fontSize="11" textAnchor="middle">dceřiné jádro Y</text>
                  {/* α letí pryč */}
                  <AlphaParticle x={300} y={150} r={5} />
                  <line x1="312" y1="150" x2="390" y2="150" stroke={ALPHA} strokeWidth="3" markerEnd="url(#arout)" />
                  <text x="350" y="138" fill={ALPHA} fontSize="12" textAnchor="middle">α letí pryč</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Co znamenají barvy na obrázku: <b>modrá</b> křivka je <b>potenciál</b> (jáma uvnitř, vysoký
          val v okolí), <b>žlutá</b> hladina je <b>energie α částice</b> (níž než val) a{' '}
          <b>růžová</b> je <b>vlnová funkce</b> <M>{'\\psi'}</M>. Že je <M>{'\\psi'}</M> nenulová i za
          valem, znamená <b>nenulovou <Concept id="hustota-pravdepodobnosti">pravděpodobnost výskytu</Concept></b> <M>{'|\\psi|^2'}</M> i vně jádra —
          a to je celé tajemství tunelování.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            α rozpad je hlavně u <b>těžkých jader</b>, protože tam <b>jaderné síly nestačí</b>{' '}
            kompenzovat odpuzování protonů (jaderné síly mají krátký dosah, Coulombovské se sčítají
            přes celé jádro).
          </li>
          <li>
            Tunelový jev = <b>klasicky nemožné</b> (částice na bariéru „nemá" energii),{' '}
            <b>kvantově možné</b> (malá nenulová pravděpodobnost projít). Vždy zmiň <b>oba pohledy</b>.
          </li>
          <li>
            Podmínka rozpadu je <M>{'Q > 0'}</M>, ne <M>{'Q < 0'}</M>. <M>{'Q'}</M> je z{' '}
            <b>úbytku hmotnosti</b>: <M>{'Q=(m_i-m_f-m)c^2'}</M> — pozor na pořadí (původní mínus
            vzniklé mínus emitovaná).
          </li>
          <li>
            α částice = jádro helia <M>{'{}^{4}_{2}\\mathrm{He}'}</M> (2 p + 2 n), proto{' '}
            <M>{'Z\\to Z-2'}</M> a <M>{'A\\to A-4'}</M>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit mechanismus α rozpadu a proč nastává hlavně u těžkých jader (jaderné síly nestačí kompenzovat odpuzování protonů).',
          'Napsat vztah pro uvolněnou energii Q = (m_i − m_f − m)c² a vědět, že rozpad je možný při Q > 0.',
          'Vysvětlit tunelový jev a popsat rozdíl mezi klasickým (nelze) a kvantovým (lze s malou pravděpodobností) pohledem.',
          'Vědět, že α částice je jádro helia (2 p + 2 n), takže Z → Z−2 a A → A−4.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaká částice je emitována při α rozpadu a u jakých jader k němu hlavně dochází?',
            a: (
              <>
                Emituje se <b>jádro helia</b> <M>{'{}^{4}_{2}\\mathrm{He}'}</M> (2 protony + 2 neutrony),
                tzv. <b>α částice</b>. K rozpadu dochází hlavně u <b>těžkých jader</b>, kde už{' '}
                <b>jaderné síly nestačí kompenzovat</b> Coulombovské odpuzování protonů.
              </>
            ),
          },
          {
            q: <>Jak se spočítá uvolněná energie <M>{'Q'}</M> a kdy je α emise možná?</>,
            a: (
              <>
                <M>{'Q=(m_i-m_f-m)c^2'}</M>, kde <M>{'m_i'}</M> je hmotnost původního jádra,{' '}
                <M>{'m_f'}</M> vzniklého (dceřiného) jádra a <M>{'m'}</M> emitované α částice. Emise je
                energeticky možná, když <M>{'Q>0'}</M>.
              </>
            ),
          },
          {
            q: 'Co je tunelový jev a jak se liší klasický a kvantový pohled?',
            a: (
              <>
                <b>Klasicky:</b> α částice má menší energii než výška bariéry, takže ji{' '}
                <b>nemůže překonat</b> — ven by se nikdy nedostala. <b>Kvantově:</b> existuje{' '}
                <b>malá nenulová pravděpodobnost</b>, že částice bariérou <b>projde skrz</b>
                (vlnová funkce je nenulová i za bariérou). To je <b>tunelový jev</b>.
              </>
            ),
          },
          {
            q: <>Jak se změní <Concept id="nukleonove-cislo">nukleonové číslo</Concept> <M>{'A'}</M> a <Concept id="protonove-cislo">protonové číslo</Concept> <M>{'Z'}</M> při α rozpadu?</>,
            a: (
              <>
                Protože α částice odnese 2 protony a 2 neutrony: <M>{'Z\\to Z-2'}</M> a{' '}
                <M>{'A\\to A-4'}</M>. Schéma:{' '}
                <M>{'{}^{A}_{Z}\\mathrm{X}\\to{}^{A-4}_{Z-2}\\mathrm{Y}+{}^{4}_{2}\\alpha'}</M>.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
