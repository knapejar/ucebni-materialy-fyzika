import { Section, M, MB, Concept, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.7'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější prolinkování). */
export const provides = {
  'lorentzova-sila': {
    lesson: '2.7',
    label: 'Lorentzova (magnetická) síla',
    short: 'F = q·v×B = B·Q·v·sin α — síla na pohybující se náboj v magnetickém poli, vždy kolmá na rychlost.',
  },
  'magneticka-nadoba': {
    lesson: '2.7',
    label: 'magnetická nádoba',
    short: 'Soustava magnetických polí, která udrží nabité částice (plazma) v omezeném prostoru.',
  },
  'hmotova-spektroskopie': {
    lesson: '2.7',
    label: 'hmotová spektroskopie',
    short: 'Separace částic podle hmotnosti díky r = mv/BQ — různá hmotnost dává různý poloměr dráhy.',
  },
}

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

const ACC = '#38bdf8'   // akcent tématu (magnetické pole / B)
const VEL = '#f59e0b'   // rychlost v
const FORCE = '#fb7185' // síla F
const TXT = '#e8ecf8'
const DIM = '#9aa6c4'

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tahle lekce odpovídá na otázku „co dělá <Concept id="magneticke-pole">magnetické pole</Concept> s letícím nábojem". Je to
        oblíbená zkoušková otázka, protože se v ní dá hezky chytit jeden trik:{' '}
        <Term>magnetická síla je vždy kolmá na rychlost</Term>, takže mění jen <i>směr</i> pohybu,
        ne jeho <i>velikost</i>. Když tohle pochopíš, máš celou otázku v kapse — včetně toho,
        proč funguje hmotová spektroskopie.
      </p>

      <Section title="Lorentzova (magnetická) síla — vzorec a veličiny">
        <p>
          Na <Concept id="naboj">náboj</Concept>, který se <b>pohybuje</b> v magnetickém poli, působí{' '}
          <Term id="lorentzova-sila">Lorentzova síla</Term> (taky „magnetická síla"). Na náboj v <b>klidu</b> magnetické
          pole nepůsobí — musí letět. Vektorově:
        </p>
        <MB>{'\\vec F = q\\,\\vec v \\times \\vec B'}</MB>
        <p>Pro velikost (to, co se nejčastěji chce napsat) stačí:</p>
        <MB>{'F = B\\,Q\\,v\\,\\sin\\alpha'}</MB>
        <ul>
          <li><M>{'B'}</M> — velikost magnetické indukce (jednotka tesla, <M>{'\\mathrm{T}'}</M>),</li>
          <li><M>{'Q'}</M> — velikost náboje,</li>
          <li><M>{'v'}</M> — velikost rychlosti částice,</li>
          <li><M>{'\\alpha'}</M> — úhel mezi vektorem rychlosti <M>{'\\vec v'}</M> a indukcí <M>{'\\vec B'}</M>.</li>
        </ul>
        <p>
          Díky tomu <M>{'\\sin\\alpha'}</M> síla závisí na tom, <b>pod jakým úhlem</b> náboj do pole
          vletí — a právě z toho plynou tři různé typy pohybu (níže).
        </p>
      </Section>

      <Section title="Proč magnetická síla nemění velikost rychlosti">
        <p>
          Z vektorového součinu <M>{'\\vec v \\times \\vec B'}</M> plyne, že{' '}
          <Term>Lorentzova síla je vždy kolmá na rychlost</Term> (a zároveň kolmá na <M>{'\\vec B'}</M>).
          A síla kolmá na pohyb <b>nekoná <Concept id="prace">práci</Concept></b> — nepřidává ani neubírá <Concept id="kineticka-energie">kinetickou energii</Concept>.
          Proto se velikost rychlosti <b>nemění</b>, mění se jen její <b>směr</b>. Síla částici jen
          „zatáčí", funguje jako provázek, který drží kámen na kruhové dráze.
        </p>
        <Callout kind="tip" title="Jak to říct u zkoušky jednou větou">
          „Magnetická síla je kolmá na rychlost, proto nekoná práci a mění jen směr, ne velikost
          rychlosti." Tahle věta ti vydělá body skoro u každé podotázky.
        </Callout>
      </Section>

      <Section title="Flemingovo pravidlo levé ruky — kam síla míří">
        <p>
          Směr Lorentzovy síly určíš <Term>pravidlem levé ruky</Term> (Flemingovým). Levou ruku
          natáhneš tak, že:
        </p>
        <Figure caption="Levá ruka: indukční čáry B vstupují do dlaně, prsty ukazují směr pohybu (proudu / kladného náboje), odtažený palec ukazuje směr síly F.">
          <svg viewBox="0 0 360 200" className="svg-fig">
            <Defs color={FORCE} name="arF" />
            <Defs color={VEL} name="arV" />
            <Defs color={ACC} name="arB" />
            {/* dlaň */}
            <rect x="120" y="80" width="70" height="74" rx="12" fill="#2a3350" stroke={DIM} strokeWidth="1.5" />
            {/* čtyři prsty směr v (doprava) */}
            <line x1="190" y1="100" x2="280" y2="100" stroke={VEL} strokeWidth="6" markerEnd="url(#arV)" />
            <text x="240" y="92" fill={VEL} fontSize="15" textAnchor="middle">v (pohyb náboje)</text>
            {/* palec síla F (nahoru) */}
            <line x1="150" y1="80" x2="150" y2="22" stroke={FORCE} strokeWidth="6" markerEnd="url(#arF)" />
            <text x="150" y="16" fill={FORCE} fontSize="15" textAnchor="middle">F (síla)</text>
            {/* B do dlaně (ze předu dovnitř) */}
            <line x1="60" y1="160" x2="120" y2="120" stroke={ACC} strokeWidth="6" markerEnd="url(#arB)" />
            <text x="58" y="178" fill={ACC} fontSize="15" textAnchor="middle">B do dlaně</text>
          </svg>
        </Figure>
        <p>
          Pomůcka: <b>B do dlaně, prsty po směru v, palec ukazuje F.</b> Pozor — pro{' '}
          <b>záporný</b> náboj je síla opačná (změní se znaménko, otočí se směr zakřivení).
        </p>
      </Section>

      <Section title="Tři typy pohybu podle úhlu α (tohle se zkouší nejvíc)">
        <p>
          Celá tahle otázka se točí kolem jediné věci: <b>pod jakým úhlem náboj vletí do pole?</b>{' '}
          Proklikej si tři případy.
        </p>

        <StepFigure
          title="Pohyb náboje v homogenním magnetickém poli podle úhlu α"
          steps={[
            {
              label: 'α = 0° → přímka',
              caption: (
                <>
                  <b>Rychlost rovnoběžná s <M>{'\\vec B'}</M>.</b> Pak <M>{'\\sin 0^\\circ = 0'}</M>, takže{' '}
                  <M>{'F = 0'}</M> — magnetické pole na náboj <b>vůbec nepůsobí</b>. Náboj letí dál{' '}
                  <b>rovnoměrně přímočaře</b>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={ACC} name="arB0" />
                  <Defs color={VEL} name="arV0" />
                  {/* indukční čáry B vodorovně */}
                  {[40, 80, 120, 160].map((y) => (
                    <line key={y} x1="20" y1={y} x2="400" y2={y} stroke={ACC} strokeWidth="1.5" strokeDasharray="8 8" opacity="0.5" markerEnd="url(#arB0)" />
                  ))}
                  <text x="380" y="32" fill={ACC} fontSize="14" textAnchor="end">B</text>
                  {/* náboj a rychlost rovnoběžně */}
                  <circle cx="60" cy="120" r="10" fill={VEL} />
                  <text x="60" y="124" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">+</text>
                  <line x1="74" y1="120" x2="360" y2="120" stroke={VEL} strokeWidth="4" markerEnd="url(#arV0)" />
                  <text x="220" y="108" fill={VEL} fontSize="15" textAnchor="middle">v ∥ B → přímka, F = 0</text>
                </svg>
              ),
            },
            {
              label: 'α = 90° → kružnice',
              caption: (
                <>
                  <b>Rychlost kolmá na <M>{'\\vec B'}</M>.</b> Síla je maximální a pořád míří dovnitř —
                  funguje jako <b>dostředivá síla</b>. Náboj opisuje <b>kružnici</b> o poloměru{' '}
                  <M>{'r = \\dfrac{m v}{B Q}'}</M>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={VEL} name="arV90" />
                  <Defs color={FORCE} name="arF90" />
                  {/* B z roviny ven: tečky */}
                  {[[70, 40], [150, 40], [230, 40], [310, 40], [350, 90], [70, 140], [150, 150]].map(([cx, cy], k) => (
                    <g key={k}>
                      <circle cx={cx} cy={cy} r="6" fill="none" stroke={ACC} strokeWidth="1.5" />
                      <circle cx={cx} cy={cy} r="1.6" fill={ACC} />
                    </g>
                  ))}
                  <text x="350" y="40" fill={ACC} fontSize="13" textAnchor="start" dx="10">B ven z roviny</text>
                  {/* kružnice */}
                  <circle cx="210" cy="95" r="55" fill="none" stroke={DIM} strokeWidth="2" strokeDasharray="5 6" />
                  {/* náboj na kružnici */}
                  <circle cx="210" cy="40" r="9" fill={VEL} />
                  {/* rychlost tečně (doprava) */}
                  <line x1="222" y1="40" x2="290" y2="40" stroke={VEL} strokeWidth="4" markerEnd="url(#arV90)" />
                  <text x="270" y="30" fill={VEL} fontSize="14" textAnchor="middle">v</text>
                  {/* síla dostředivě (dolů ke středu) */}
                  <line x1="210" y1="52" x2="210" y2="88" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF90)" />
                  <text x="232" y="74" fill={FORCE} fontSize="14" textAnchor="middle">F</text>
                  <text x="210" y="170" fill={TXT} fontSize="14" textAnchor="middle">r = m·v / (B·Q)</text>
                </svg>
              ),
            },
            {
              label: 'obecný úhel → šroubovice',
              caption: (
                <>
                  <b>Rychlost šikmo k <M>{'\\vec B'}</M>.</b> Rozložíme ji: složka <b>podél</b> <M>{'\\vec B'}</M>{' '}
                  jede rovnoměrně přímo (na ni síla není), složka <b>kolmá</b> dělá kroužení. Dohromady →{' '}
                  <b>šroubovice</b> (spirála). Velikost rychlosti se pořád nemění.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={ACC} name="arBh" />
                  <Defs color={VEL} name="arVh" />
                  {/* osa B vodorovně */}
                  <line x1="20" y1="95" x2="400" y2="95" stroke={ACC} strokeWidth="2" strokeDasharray="8 8" opacity="0.6" markerEnd="url(#arBh)" />
                  <text x="395" y="84" fill={ACC} fontSize="14" textAnchor="end">B</text>
                  {/* šroubovice */}
                  <path
                    d="M40,95 C 60,45 100,45 120,95 C 140,145 180,145 200,95 C 220,45 260,45 280,95 C 300,145 340,145 360,95"
                    fill="none"
                    stroke={DIM}
                    strokeWidth="2.5"
                  />
                  {/* náboj */}
                  <circle cx="40" cy="95" r="9" fill={VEL} />
                  {/* rychlost šikmo */}
                  <line x1="50" y1="88" x2="110" y2="55" stroke={VEL} strokeWidth="4" markerEnd="url(#arVh)" />
                  <text x="105" y="46" fill={VEL} fontSize="14" textAnchor="middle">v (šikmo)</text>
                  <text x="210" y="172" fill={TXT} fontSize="14" textAnchor="middle">složení: přímý posun + kroužení = šroubovice</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Pohyb v elektrickém vs. magnetickém poli — hlavní rozdíl">
        <p>
          Toto je <b>klíčový chyták</b> celé lekce. Obě pole na náboj působí silou, ale úplně jinak:
        </p>
        <table className="ltable">
          <tbody>
            <tr>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <p><b>Elektrostatické pole</b></p>
                <ul>
                  <li>Síla <M>{'F = QE'}</M> je <b>ve směru pole</b> (u kladného náboje).</li>
                  <li><b>Mění velikost rychlosti</b> — náboj zrychluje nebo zpomaluje.</li>
                  <li>Přesouvá se energie: <M>{'E_p \\leftrightarrow E_k'}</M> (pole koná práci).</li>
                  <li>Když je <M>{'\\vec v \\perp \\vec E'}</M>, vznikne „vodorovný vrh" — parabola.</li>
                </ul>
              </td>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <p><b>Magnetické pole</b></p>
                <ul>
                  <li>Síla <M>{'F = BQv\\sin\\alpha'}</M> je <b>kolmá na rychlost</b>.</li>
                  <li><b>Nemění velikost rychlosti</b> — jen směr (zatáčí).</li>
                  <li><b>Nekoná práci</b>, <M>{'E_k'}</M> zůstává stejná.</li>
                  <li>Dráha: přímka / kružnice / šroubovice podle úhlu <M>{'\\alpha'}</M>.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Lehká pomůcka: <b>elektrické pole „přidává plyn"</b> (mění rychlost),{' '}
          <b>magnetické pole „točí volantem"</b> (mění jen směr).
        </p>
      </Section>

      <Section title="Magnetická nádoba">
        <p>
          <Term id="magneticka-nadoba">Magnetická nádoba</Term> je chytré uspořádání silných magnetických polí, které{' '}
          <b>udrží pohybující se nabité částice v omezeném prostoru</b> — typicky horké{' '}
          <b>plazma</b>. Funguje právě díky tomu, že magnetické pole zakřivuje dráhu nabitých
          částic a nepustí je ven.
        </p>
        <ul>
          <li><b>Toroidní</b> (prstencová) — částice se vine po šroubovici kolem prstencových siločar; tak pracuje <b>TOKAMAK</b> pro <Concept id="jaderna-synteza">jadernou fúzi</Concept>.</li>
          <li><b>Zrcadlová</b> — silnější pole na koncích „odráží" částice sem a tam; velikost rychlosti se nemění.</li>
          <li>Přírodní příklad: <b>Van Allenovy pásy</b> — magnetické pole Země chytá nabité částice z kosmu a chrání nás před zářením.</li>
        </ul>
      </Section>

      <Section title="Hmotová spektroskopie — aplikace, na kterou čeká zkoušející">
        <p>
          <Term id="hmotova-spektroskopie">Hmotová spektroskopie</Term> je <b>separace (rozdělení) částic podle hmotnosti</b>.
          Stojí přesně na vzorci pro poloměr kruhové dráhy:
        </p>
        <MB>{'r = \\frac{m v}{B Q}'}</MB>
        <p>
          Když pošleme do stejného magnetického pole částice o <b>stejném náboji a rychlosti</b>, ale{' '}
          <b>různé hmotnosti</b>, opíšou <b>různě velké kružnice</b> — <b>těžší = větší poloměr</b>.
          Tím je od sebe oddělíme a změříme jejich hmotnost.
        </p>

        <Figure caption="Stejná rychlost i náboj, ale různá hmotnost → různý poloměr. Těžší ion (modrá) má větší poloměr, lehčí (oranžová) menší.">
          <svg viewBox="0 0 420 210" className="svg-fig">
            <Defs color={VEL} name="arVs" />
            {/* B z roviny ven */}
            {[[60, 40], [130, 40], [200, 40], [270, 40], [340, 40], [60, 90]].map(([cx, cy], k) => (
              <g key={k}>
                <circle cx={cx} cy={cy} r="5" fill="none" stroke={ACC} strokeWidth="1.4" />
                <circle cx={cx} cy={cy} r="1.4" fill={ACC} />
              </g>
            ))}
            <text x="345" y="40" fill={ACC} fontSize="12" textAnchor="start" dx="10">B</text>
            {/* zdroj / vstřik */}
            <rect x="20" y="150" width="46" height="34" rx="5" fill="#2a3350" stroke={DIM} strokeWidth="1.5" />
            <text x="43" y="200" fill={DIM} fontSize="11" textAnchor="middle">zdroj iontů</text>
            {/* společná počáteční rychlost nahoru */}
            <line x1="70" y1="167" x2="130" y2="167" stroke={VEL} strokeWidth="3" markerEnd="url(#arVs)" />
            <text x="100" y="160" fill={VEL} fontSize="12" textAnchor="middle">v</text>
            {/* dráha lehčí částice (menší poloměr) - oranžová */}
            <path d="M130,167 A 55 55 0 0 0 130 57" fill="none" stroke={VEL} strokeWidth="3" />
            <circle cx="130" cy="57" r="6" fill={VEL} />
            <text x="150" y="100" fill={VEL} fontSize="12" textAnchor="middle">malé m</text>
            {/* dráha těžší částice (větší poloměr) - modrá */}
            <path d="M130,167 A 95 95 0 0 0 130 -23" fill="none" stroke={ACC} strokeWidth="3" />
            <circle cx="130" cy="-23" r="6" fill={ACC} opacity="0" />
            <text x="250" y="80" fill={ACC} fontSize="12" textAnchor="middle">velké m → velký r</text>
          </svg>
        </Figure>

        <p><b>Postup (princip), jak ho popsat u zkoušky:</b></p>
        <ol>
          <li><b>Ionizace</b> — ze zkoumaných částic uděláme ionty (dáme jim náboj).</li>
          <li><b>Urychlení v elektrickém poli</b> — vytvoříme svazek částic o stejné energii/rychlosti.</li>
          <li><b>Vstup do magnetického pole</b> kolmého na pohyb — pole zakřiví dráhu, různé hmotnosti dají různý poloměr.</li>
          <li><b>Detekce</b> — podle místa dopadu zjistíme poloměr, a z něj hmotnost.</li>
        </ol>
        <p>
          <b>Využití:</b> určování hmotnosti částic, <b>izotopické složení</b> směsi a{' '}
          <b>separace <Concept id="izotopy">izotopů</Concept></b>, analýza dechu v medicíně, monitorování životního prostředí.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se nejvíc ztrácejí body)">
        <ul>
          <li>
            Magnetická síla je <b>vždy kolmá na rychlost</b>, proto <b>mění jen směr, ne velikost</b>{' '}
            rychlosti — <b>nekoná práci</b>. Nikdy neříkej, že magnetické pole náboj urychluje.
          </li>
          <li>
            V <b>elektrickém</b> poli je to naopak: tam se <b>velikost rychlosti mění</b>{' '}
            (<M>{'E_p \\leftrightarrow E_k'}</M>).
          </li>
          <li>
            Na náboj v <b>klidu</b> magnetické pole vůbec nepůsobí — musí se pohybovat (v ve vzorci).
          </li>
          <li>
            Při <M>{'\\alpha = 0^\\circ'}</M> je <M>{'\\sin\\alpha = 0'}</M>, takže <M>{'F = 0'}</M> — pohyb je
            přímý, ne kruhový. Nepleť si to.
          </li>
          <li>
            Hmotová spektroskopie funguje díky <M>{'r = mv/BQ'}</M>: <b>různé hmotnosti → různé poloměry</b>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat Lorentzovu sílu F = q·v×B = B·Q·v·sin α a popsat všechny veličiny.',
          'Vysvětlit, proč magnetická síla nemění velikost rychlosti (kolmá → nekoná práci).',
          'Popsat 3 typy pohybu podle úhlu α: přímka (0°), kružnice (90°, r = mv/BQ), šroubovice (obecný).',
          'Říct rozdíl mezi pohybem v elektrickém a magnetickém poli.',
          'Vysvětlit, co je magnetická nádoba (a uvést příklad: TOKAMAK, Van Allenovy pásy).',
          'Popsat princip a využití hmotové spektroskopie (r = mv/BQ, izotopy).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Proč magnetická síla nemění velikost rychlosti náboje?</>,
            a: (
              <>
                Protože je <b>vždy kolmá na rychlost</b>, takže <b>nekoná práci</b> — nemění
                kinetickou energii. Mění se jen <b>směr</b> pohybu, ne jeho velikost.
              </>
            ),
          },
          {
            q: <>Jaké tři typy pohybu může náboj v homogenním magnetickém poli mít a na čem to závisí?</>,
            a: (
              <>
                Záleží na úhlu <M>{'\\alpha'}</M> mezi <M>{'\\vec v'}</M> a <M>{'\\vec B'}</M>:{' '}
                <b>α = 0°</b> → přímka (<M>{'F=0'}</M>); <b>α = 90°</b> → kružnice o poloměru{' '}
                <M>{'r = mv/BQ'}</M>; <b>obecný úhel</b> → šroubovice.
              </>
            ),
          },
          {
            q: <>Jaký je rozdíl mezi pohybem náboje v elektrickém a v magnetickém poli?</>,
            a: (
              <>
                V <b>elektrickém</b> poli síla mění <b>velikost rychlosti</b> (přeměna{' '}
                <M>{'E_p \\leftrightarrow E_k'}</M>, koná práci). V <b>magnetickém</b> poli je síla
                kolmá na rychlost, takže mění <b>jen směr</b>, ne velikost — nekoná práci.
              </>
            ),
          },
          {
            q: <>Na jakém principu funguje hmotová spektroskopie a k čemu se používá?</>,
            a: (
              <>
                Ionty o stejné rychlosti a náboji vletí do kolmého magnetického pole; podle{' '}
                <M>{'r = mv/BQ'}</M> opíšou <b>různě velké kružnice podle hmotnosti</b> (těžší = větší
                poloměr). Tím se oddělí. Používá se k <b>určení hmotnosti částic</b> a k analýze{' '}
                <b>izotopů</b> (složení směsi, separace izotopů).
              </>
            ),
          },
        ]}
      />
    </>
  )
}
