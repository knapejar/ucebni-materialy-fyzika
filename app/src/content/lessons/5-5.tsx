import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.5'

/* Pojmy, které tahle lekce poprvé zavádí (pro pozdější wiki-proklik). */
export const provides = {
  'jaderna-synteza': { lesson: '5.5', label: 'jaderná syntéza (fúze)', short: 'Spojení lehkých jader do těžšího; potřebuje vysokou teplotu a tlak.' },
  'stepeni': { lesson: '5.5', label: 'štěpení jádra', short: 'Rozbití těžkého jádra neutronem na dvě lehčí + neutrony.' },
  'retezova-reakce': { lesson: '5.5', label: 'řetězová reakce', short: 'Uvolněné neutrony spustí další štěpení — proces se lavinovitě rozrůstá.' },
  'moderator': { lesson: '5.5', label: 'moderátor', short: 'Zpomaluje neutrony (často voda), aby snáze vyvolaly další štěpení.' },
  'regulacni-tyce': { lesson: '5.5', label: 'regulační tyče', short: 'Pohlcují neutrony a drží reakci na hodnotě „přesně jedna".' },
}

const TXT = '#e8ecf8'
const ACC = '#34d399' // akcent tématu (zelená)
const NEUT = '#60a5fa' // neutron — modrá
const HEAVY = '#fb7185' // těžké jádro — červená
const LIGHT = '#fbbf24' // lehké jádro / produkty — žlutá
const DIM = '#6b7796'

/* Šipky pro SVG (markery v různých barvách). */
function Defs() {
  return (
    <defs>
      <marker id="ar-n" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={NEUT} />
      </marker>
      <marker id="ar-a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACC} />
      </marker>
      <marker id="ar-t" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={TXT} />
      </marker>
    </defs>
  )
}

/* Malý neutron (modrá kulička s „n"). */
function Neutron({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={NEUT} />
      <text x={x} y={y + 4} fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="700">n</text>
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tohle je „energetická" lekce jaderné fyziky — a u zkoušky vděčná, protože stačí pořádně
        rozlišit <Term>dvě věci</Term>: <b>syntézu</b> (spojení lehkých jader) a <b>štěpení</b>{' '}
        (rozbití těžkého jádra). Když k tomu umíš říct podmínky fúze, roli moderátoru a regulačních
        tyčí a proč je fúze bezpečnější, máš celou otázku.
      </p>

      <Section title="Jaderná reakce a co u ní vždycky platí">
        <p>
          <Term>Jaderná reakce</Term> je děj, při kterém na sebe narazí jádro a nějaká částice
          (nejčastěji neutron) a jádro se přitom přestaví. Ať proběhne cokoli, musí platit{' '}
          <Term>zákony zachování</Term> — to je první věc, kterou zkoušející slyší rád:
        </p>
        <ul>
          <li>zachování <b>počtu nukleonů</b> (součet horních čísel <M>{'A'}</M> vlevo = vpravo),</li>
          <li>zachování <b>elektrického náboje</b> (součet dolních čísel <M>{'Z'}</M> vlevo = vpravo),</li>
          <li>zachování <b>energie</b> (relativistické) a <b>hybnosti</b> i momentu hybnosti.</li>
        </ul>
        <p>
          Podle toho, jak srážka proběhne, rozlišujeme dva typy. U <Term>přímé reakce</Term> částice
          „šťouchne" do jednoho nebo pár nukleonů a hned se něco odtrhne — sem patří{' '}
          <Term>strhávání</Term> (jádro zachytí nalétávající nukleon) a opačné{' '}
          <Term>vytrhávání</Term> (nálet naopak nukleon z jádra vytrhne). U reakce{' '}
          <Term>přes složené jádro</Term> se částice v jádře „zamotá", energie se rozdělí mezi
          všechny nukleony a vznikne krátce žijící <i>excitované složené jádro</i>, které se teprve
          potom rozpadne. Pomáhá si to představit jako kapku, která se rozkmitá a pak rozpadne.
        </p>
        <Callout kind="tip" title="Jak to poznat u zkoušky">
          Přímá reakce „pamatuje" směr nálezu (produkty letí přednostně dopředu); reakce přes
          složené jádro na původní směr „zapomene" (produkty letí do všech stran rovnoměrně).
        </Callout>
      </Section>

      <Section title="Syntéza (fúze): spojujeme LEHKÁ jádra">
        <p>
          <Term>Jaderná syntéza</Term> = spojení dvou <b>lehkých</b> jader do jednoho těžšího.
          Typicky se spojí jádra vodíku (deuterium + tritium) na helium. Vznikající jádro má menší
          klidovou energii než výchozí jádra dohromady — ten rozdíl se uvolní jako energie. Tohle je
          <b> zdroj energie hvězd</b>: ve Slunci splývají čtyři jádra vodíku na jedno helium a
          přebytek odchází jako záření a teplo.
        </p>
        <p>
          Háček je v tom, že obě jádra jsou <b>kladná</b>, takže se elektricky odpuzují. Aby se
          dostala dost blízko, aby převážily přitažlivé <Term>jaderné síly</Term>, musí na sebe
          narazit obrovskou rychlostí. To se navodí <b>extrémní teplotou a tlakem</b> — proto{' '}
          <Term>termojaderná fúze</Term>. Podmínku „dost horké, dost husté, dost dlouho" shrnuje{' '}
          <Term>Lawsonovo kritérium</Term> (součin hustoty a doby udržení <M>{'N\\,t'}</M> musí
          překročit určitou mez).
        </p>

        <Figure caption="Syntéza: dvě lehká jádra (deuterium + tritium) splynou na helium a uvolní se neutron + energie.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <Defs />
            {/* deuterium */}
            <circle cx="60" cy="75" r="20" fill={LIGHT} />
            <text x="60" y="79" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">D</text>
            <line x1="84" y1="75" x2="150" y2="75" stroke={TXT} strokeWidth="3" markerEnd="url(#ar-t)" />
            {/* tritium */}
            <circle cx="210" cy="75" r="22" fill={LIGHT} />
            <text x="210" y="79" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">T</text>
            <line x1="186" y1="75" x2="172" y2="75" stroke={TXT} strokeWidth="3" markerEnd="url(#ar-t)" />
            {/* arrow to product */}
            <line x1="236" y1="75" x2="300" y2="75" stroke={ACC} strokeWidth="4" markerEnd="url(#ar-a)" />
            {/* helium */}
            <circle cx="345" cy="75" r="24" fill={ACC} />
            <text x="345" y="72" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">He</text>
            <text x="345" y="88" fill="#0b1020" fontSize="10" textAnchor="middle" fontWeight="700">+ E</text>
            {/* released neutron */}
            <Neutron x={345} y={130} r={8} />
            <line x1="345" y1="101" x2="345" y2="118" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
            <text x="150" y="30" fill={TXT} fontSize="13" textAnchor="middle">vysoká teplota a tlak →</text>
          </svg>
        </Figure>

        <p>
          Jak fúzi udržet na Zemi? Plazma (rozžhavený ionizovaný plyn) nesmí sahat na stěny, protože
          by je roztavilo a samo vychladlo. Proto dva přístupy:
        </p>
        <ul>
          <li>
            <Term>Magnetické nádoby</Term> (např. tokamak) — horké plazma drží pohromadě silné{' '}
            <b>magnetické pole</b>, takže se vznáší a nedotýká stěn.
          </li>
          <li>
            <Term>Inerciální fúze</Term> — drobný terčík paliva je z mnoha stran současně ozářen
            výkonnými <b>lasery</b> (nebo iontovými svazky), prudce se stlačí a zapálí dřív, než
            stihne uletět.
          </li>
        </ul>
      </Section>

      <Section title="Štěpení: rozbíjíme TĚŽKÉ jádro neutronem">
        <p>
          <Term>Štěpení</Term> je opačný děj: <b>těžké</b> jádro (klasicky{' '}
          <M>{'^{235}\\mathrm{U}'}</M>) pohltí <b>neutron</b>, tím se rozkmitá a rozpadne se na dvě
          lehčí jádra (odštěpky) a navíc vyletí <b>2–3 nové neutrony</b> a uvolní se energie. Většina
          energie (kolem 80 %) je v pohybu odštěpků, který se brzděním mění na teplo — tím se v
          reaktoru ohřívá chladivo a vyrábí pára.
        </p>
        <p>
          Proč zrovna neutronem? Neutron je <b>bez náboje</b>, takže ho kladné jádro neodpuzuje a
          klidně do něj pronikne (na rozdíl od fúze, kde se kladná jádra musí násilím přiblížit).
        </p>

        <StepFigure
          title="Řetězová reakce krok po kroku"
          steps={[
            {
              label: 'záchyt neutronu',
              caption: (
                <>
                  Pomalý neutron narazí do těžkého jádra <M>{'^{235}\\mathrm{U}'}</M> a je pohlcen.
                  Jádro tím získá přebytek energie a rozkmitá se.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <Defs />
                  <circle cx="250" cy="85" r="30" fill={HEAVY} />
                  <text x="250" y="82" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">U-235</text>
                  <Neutron x={70} y={85} />
                  <line x1="84" y1="85" x2="212" y2="85" stroke={NEUT} strokeWidth="3" markerEnd="url(#ar-n)" />
                  <text x="150" y="55" fill={TXT} fontSize="13" textAnchor="middle">neutron letí na jádro</text>
                </svg>
              ),
            },
            {
              label: 'rozpad na 2 jádra',
              caption: (
                <>
                  Jádro se rozdělí na <b>dva lehčí odštěpky</b> a vyletí <b>2–3 nové neutrony</b>.
                  Uvolní se energie (hlavně jako pohyb odštěpků → teplo).
                </>
              ),
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <Defs />
                  {/* fragments */}
                  <circle cx="150" cy="85" r="20" fill={LIGHT} />
                  <circle cx="300" cy="85" r="22" fill={LIGHT} />
                  <line x1="195" y1="80" x2="135" y2="70" stroke={TXT} strokeWidth="3" markerEnd="url(#ar-t)" />
                  <line x1="255" y1="80" x2="318" y2="70" stroke={TXT} strokeWidth="3" markerEnd="url(#ar-t)" />
                  {/* new neutrons */}
                  <Neutron x={225} y={35} r={8} />
                  <Neutron x={210} y={140} r={8} />
                  <Neutron x={350} y={120} r={8} />
                  <text x="225" y="100" fill={ACC} fontSize="13" textAnchor="middle" fontWeight="700">+ energie</text>
                </svg>
              ),
            },
            {
              label: 'lavina',
              caption: (
                <>
                  Každý nový neutron může rozbít <b>další</b> jádro — a vznikne víc neutronů než na
                  začátku. Proces se lavinovitě rozrůstá: to je <Term>řetězová reakce</Term>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <Defs />
                  {/* gen 1 */}
                  <circle cx="60" cy="85" r="16" fill={HEAVY} />
                  {/* gen 2 */}
                  <circle cx="200" cy="45" r="16" fill={HEAVY} />
                  <circle cx="200" cy="125" r="16" fill={HEAVY} />
                  {/* gen 3 */}
                  <circle cx="350" cy="25" r="13" fill={HEAVY} />
                  <circle cx="350" cy="65" r="13" fill={HEAVY} />
                  <circle cx="350" cy="105" r="13" fill={HEAVY} />
                  <circle cx="350" cy="145" r="13" fill={HEAVY} />
                  {/* links */}
                  <line x1="76" y1="80" x2="184" y2="50" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <line x1="76" y1="90" x2="184" y2="120" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <line x1="214" y1="40" x2="337" y2="27" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <line x1="214" y1="50" x2="337" y2="63" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <line x1="214" y1="120" x2="337" y2="103" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <line x1="214" y1="130" x2="337" y2="143" stroke={NEUT} strokeWidth="2.5" markerEnd="url(#ar-n)" />
                  <text x="210" y="165" fill={TXT} fontSize="12" textAnchor="middle">každá generace = víc štěpení</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Aby řetězová reakce vůbec běžela, musí se to dvakrát „doladit":
        </p>
        <ul>
          <li>
            <Term>Moderátor</Term> (typicky <b>voda</b>) <b>zpomaluje</b> rychlé neutrony srážkami.
            Pomalý neutron totiž vyvolá štěpení mnohem snadněji než rychlý. Voda navíc slouží jako
            chladivo.
          </li>
          <li>
            <Term>Regulační tyče</Term> (z materiálu, který <b>pohlcuje</b> neutrony) se zasouvají
            mezi palivo a odebírají přebytečné neutrony. Tím se reakce drží přesně na hraně —{' '}
            <b>multiplikační koeficient = 1</b> (každé štěpení vyvolá v průměru právě jedno další).
            Zasunu tyče hlouběji → reakce slábne; vytáhnu → sílí.
          </li>
        </ul>
        <p>
          Kdyby koeficient přerostl 1 a nikdo nezasahoval, reakce by se nekontrolovaně rozjela — to
          je princip jaderné exploze. Reaktor je proti tomu pojištěný právě regulačními tyčemi.
        </p>

        <Callout kind="info" title="Přírodní reaktor Oklo">
          Zajímavost, kterou zkoušející rád slyší: v africkém Oklu (Gabon) běžela řetězová štěpná
          reakce <b>sama od sebe</b> už před asi 2 miliardami let — bohatá ložiska uranu a voda jako
          moderátor stačily. Regulační tyče tehdy nahradila samoregulace: když reakce zesílila, voda
          se vyvařila, neutrony se přestaly zpomalovat a reakce zase zeslábla.
        </Callout>
      </Section>

      <Section title="Proč je fúze bezpečnější než štěpení">
        <p>
          Tahle otázka padá skoro vždycky — nauč se ji jako hotový odstavec. Fúze je bezpečnější ze
          tří důvodů:
        </p>
        <ol className="biglist">
          <li>
            <b>Produkty jsou stabilní.</b> Vzniká hlavně helium — žádný dlouhožijící radioaktivní
            odpad jako u štěpení.
          </li>
          <li>
            <b>Reakce se sama zastaví.</b> Fúze potřebuje neustále udržovat extrémní teplotu a tlak.
            Jakákoli porucha (výpadek, narušení udržení plazmatu) podmínky poruší a reakce{' '}
            <b>okamžitě ustane</b> — nehrozí „ujetí" jako u řetězové reakce.
          </li>
          <li>
            <b>Málo paliva najednou.</b> V reaktoru je vždy jen nepatrné množství paliva, takže není
            co „explodovat".
          </li>
        </ol>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Nepleť si je: <b>syntéza = spojení LEHKÝCH</b> jader (potřebuje vysokou teplotu a tlak na
            překonání odpuzování); <b>štěpení = rozbití TĚŽKÉHO</b> jádra neutronem. „Syntéza =
            spojuje, štěpení = štípe."
          </li>
          <li>
            Štěpení spouští <b>neutron</b> právě proto, že je <b>bez náboje</b> — jádro ho neodpuzuje.
            Tohle bývá doplňková otázka.
          </li>
          <li>
            <b>Moderátor neutrony zpomaluje</b> (aby snáz štěpily), <b>regulační tyče je pohlcují</b>{' '}
            (aby reakce neutekla). Nezaměň tyhle dvě role — to je klasická chyta.
          </li>
          <li>
            Proč je fúze bezpečnější: <b>produkty jsou stabilní</b> a <b>reakce se při poruše sama
            zastaví</b> (nemá co ji udržet horké).
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Rozlišit syntézu (spojení lehkých jader) a štěpení (rozbití těžkého jádra neutronem).',
          'Říct podmínky syntézy (vysoká teplota, tlak, doba udržení) a oba způsoby: magnetické nádoby a inerciální fúze.',
          'Popsat řetězovou reakci a roli moderátoru (zpomaluje) a regulačních tyčí (pohlcují, drží koeficient = 1).',
          'Vysvětlit, proč je fúze bezpečnější než štěpení.',
          'Vyjmenovat zákony zachování v jaderné reakci (nukleony, náboj, energie, hybnost).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaký je rozdíl mezi syntézou a štěpením? U kterého jsou lehká a u kterého těžká jádra?',
            a: (
              <>
                <b>Syntéza (fúze)</b> = spojení <b>lehkých</b> jader do těžšího (např. vodík → helium).{' '}
                <b>Štěpení</b> = rozbití <b>těžkého</b> jádra (např. <M>{'^{235}\\mathrm{U}'}</M>)
                neutronem na dvě lehčí. Obojí uvolňuje energii.
              </>
            ),
          },
          {
            q: 'Za jakých podmínek dochází k syntéze jader a proč?',
            a: (
              <>
                Potřeba <b>dostatečná teplota</b>, <b>hustota (vysoký tlak)</b> a <b>dostatečná doba</b>{' '}
                udržení (Lawsonovo kritérium). Důvod: kladná jádra se odpuzují, takže se musí pohybovat
                obrovskou rychlostí, aby se přiblížila a převážily přitažlivé jaderné síly.
              </>
            ),
          },
          {
            q: 'Jakými metodami se vytvoří podmínky pro fúzi?',
            a: (
              <>
                <b>1) Magnetické nádoby</b> (tokamak) — plazma drží silné magnetické pole, aby se
                nedotklo stěn. <b>2) Inerciální fúze</b> — drobný terč je z mnoha stran současně
                ozářen výkonnými lasery (nebo iontovými svazky) a prudce stlačen.
              </>
            ),
          },
          {
            q: 'Proč je syntéza (fúze) jako zdroj energie bezpečnější než štěpení?',
            a: (
              <>
                Produkty fúze jsou <b>stabilní</b> (helium, ne radioaktivní odpad), v reaktoru je vždy
                jen <b>malé množství paliva</b> a <b>jakákoli porucha vede k zastavení reakce</b>{' '}
                (přestanou platit extrémní podmínky) — nehrozí nekontrolované „ujetí".
              </>
            ),
          },
        ]}
      />
    </>
  )
}
