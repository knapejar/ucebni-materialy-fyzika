import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.1'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'gravitacni-pole': { lesson: '2.1', label: 'gravitační pole', short: 'Pole přitažlivé síly, kterou na sebe působí hmotnosti.' },
  'gravitacni-zakon': { lesson: '2.1', label: 'Newtonův gravitační zákon', short: 'F = κ·m₁m₂/r² — síla mezi dvěma hmotnostmi.' },
  'gravitacni-energie': { lesson: '2.1', label: 'gravitační potenciální energie', short: 'Ep = mgh — energie polohy v tíhovém poli.' },
  'keplerovy-zakony': { lesson: '2.1', label: 'Keplerovy zákony', short: 'Tři zákony pohybu planet; plynou z Newtonova gravitačního zákona.' },
}

/* Šipka pro SVG (marker). Barvu si volíme podle významu. */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACCENT = '#38bdf8' // akcent tématu (pole)
const TXT = '#e8ecf8'
const EARTH = '#3b82f6'
const MOON = '#cbd5e1'
const FORCE = '#fb7185'
const ENERGY = '#fbbf24'
const WATER = '#38bdf8'

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tohle je první „pole“, které potkáš — a naštěstí to nejnázornější, protože gravitaci
        cítíš každý den. U zkoušky stačí umět <Term>jeden vzoreček</Term>, vědět na čem síla
        závisí, a nezakopnout o dva klasické chytáky (gravitace je <b>vždy přitažlivá</b> a{' '}
        <b>vzájemná</b>). Když to dáš, máš jistou jedničku z první otázky tématu.
      </p>

      <Section title="Newtonův gravitační zákon — ten jeden vzoreček">
        <p>
          <Term>Gravitační síla</Term> je základní přitažlivá síla, kterou na sebe působí
          <b> všechna tělesa, která mají hmotnost</b>. Jak je velká, říká{' '}
          <Term>Newtonův gravitační zákon</Term>:
        </p>

        <MB>{'F = \\kappa\\,\\dfrac{m_1\\,m_2}{r^2}'}</MB>

        <ul>
          <li><M>{'F'}</M> — velikost gravitační síly (v newtonech <M>{'[\\mathrm N]'}</M>),</li>
          <li><M>{'m_1, m_2'}</M> — hmotnosti obou těles <M>{'[\\mathrm{kg}]'}</M>,</li>
          <li><M>{'r'}</M> — vzdálenost těles (přesněji jejich těžišť) <M>{'[\\mathrm m]'}</M>,</li>
          <li><M>{'\\kappa'}</M> — <b>gravitační konstanta</b> (číslo z tabulek, někdy se značí <M>{'G'}</M> nebo <M>{'\\chi'}</M>), <M>{'\\kappa \\approx 6{,}67\\cdot 10^{-11}\\ \\mathrm{N\\,m^2\\,kg^{-2}}'}</M>.</li>
        </ul>

        <p>
          Z toho vzorce hned přečteš, <b>na čem gravitace závisí</b> — a přesně tohle se ptají:
        </p>
        <ul>
          <li>na <b>hmotnostech</b> obou těles — síla roste přímo úměrně s každou z nich (těžší těleso = větší přitažlivost),</li>
          <li>na <b>vzdálenosti</b> — a to <Term>s druhou mocninou</Term>: dvakrát dál ⇒ síla <b>čtyřikrát</b> menší (proto na mě Země působí mnohem víc než vzdálený Saturn).</li>
        </ul>

        <Figure caption="Dvě tělesa se přitahují po spojnici. Obě síly jsou stejně velké a opačného směru — gravitace je vzájemná.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <Defs id="ar-f" color={FORCE} />
            {/* těleso 1 */}
            <circle cx="90" cy="75" r="30" fill={EARTH} />
            <text x="90" y="80" fill={TXT} fontSize="16" textAnchor="middle" fontWeight="700">m₁</text>
            {/* těleso 2 */}
            <circle cx="330" cy="75" r="18" fill={MOON} />
            <text x="330" y="80" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="700">m₂</text>
            {/* spojnice (vzdálenost r) */}
            <line x1="120" y1="75" x2="312" y2="75" stroke="#42506f" strokeWidth="1.5" strokeDasharray="5 5" />
            <text x="216" y="65" fill={TXT} fontSize="13" textAnchor="middle">r</text>
            {/* síla na m1 doprava */}
            <line x1="125" y1="105" x2="200" y2="105" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-f)" />
            <text x="160" y="125" fill={FORCE} fontSize="13" textAnchor="middle">F</text>
            {/* síla na m2 doleva */}
            <line x1="305" y1="105" x2="230" y2="105" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-f)" />
            <text x="270" y="125" fill={FORCE} fontSize="13" textAnchor="middle">F</text>
          </svg>
        </Figure>

        <p>
          Síla míří vždy <b>po spojnici</b> obou těles (je <Term>centrální</Term>) a působí{' '}
          <Term>vzájemně</Term>: na obě tělesa stejně velkou silou opačného směru (je to akce a
          reakce). Když je těles víc, výsledné síly se prostě <b>vektorově sečtou</b> (princip
          superpozice).
        </p>
      </Section>

      <Section title="Proč všechno padá „dolů“ — do středu Země">
        <p>
          Země není hmotný bod, je to obrovská koule. Přesto se chová jako kdyby celá její
          hmotnost byla soustředěná v jednom bodě <b>v jejím středu</b>. Proto gravitace kdekoli na
          povrchu míří <b>do středu Země</b> — a my tomu říkáme „dolů“. Že to tak vyjde, se ukáže
          sečtením příspěvků od všech kousíčků Země (proto ten obrázek s prstýnky → kruhy → koulí v
          učebnici).
        </p>
        <p>
          U povrchu Země nemusíme počítat s celým vzorcem — vzdálenost <M>{'r'}</M> (poloměr Země)
          se skoro nemění, takže celý zlomek <M>{'\\kappa M_Z/r^2'}</M> je prakticky konstanta. Tu
          označíme <M>{'g'}</M> (<b>tíhové zrychlení</b>, <M>{'g \\approx 9{,}81\\ \\mathrm{m\\,s^{-2}}'}</M>) a
          gravitační síla se zjednoduší na známé:
        </p>
        <MB>{'F = m\\,g'}</MB>
      </Section>

      <Section title="Gravitační potenciální energie Ep = mgh">
        <p>
          Když těleso zvedneš do výšky, „uložíš“ do něj energii — spadne-li, zase se uvolní.
          To je <Term>gravitační potenciální energie</Term>. U povrchu Země se počítá jednoduše:
        </p>

        <MB>{'E_p = m\\,g\\,h'}</MB>

        <ul>
          <li><M>{'m'}</M> — hmotnost tělesa <M>{'[\\mathrm{kg}]'}</M>,</li>
          <li><M>{'g'}</M> — tíhové (gravitační) zrychlení <M>{'[\\mathrm{m\\,s^{-2}}]'}</M>,</li>
          <li><M>{'h'}</M> — výška, do které je těleso zvednuté <M>{'[\\mathrm m]'}</M>.</li>
        </ul>

        <p>
          Energii má v joulech <M>{'[\\mathrm J]'}</M> a <b>čím těžší a čím výš</b> těleso je, tím
          větší. Krásně to ucítíš na rozdílu, jestli ti na hlavu spadne <b>klavír z druhého patra</b>,
          nebo <b>tenisák z deseti centimetrů</b> — stejná myšlenka, úplně jiná energie.
        </p>

        <Figure caption="Vyšší a těžší těleso má větší Ep. Cestou dolů se mění na pohybovou (kinetickou) energii.">
          <svg viewBox="0 0 360 170" className="svg-fig">
            <Defs id="ar-e" color={ENERGY} />
            {/* země */}
            <line x1="20" y1="150" x2="340" y2="150" stroke="#3a4566" strokeWidth="3" />
            {/* sloupec výšky h */}
            <line x1="250" y1="40" x2="250" y2="150" stroke="#42506f" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="262" y="98" fill={TXT} fontSize="13">h</text>
            {/* nahoře těleso */}
            <rect x="225" y="22" width="40" height="30" rx="5" fill={ENERGY} />
            <text x="245" y="42" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">m</text>
            <text x="180" y="36" fill={ENERGY} fontSize="14" textAnchor="end">Ep = mgh</text>
            {/* šipka pádu */}
            <line x1="160" y1="60" x2="160" y2="130" stroke={ENERGY} strokeWidth="3" markerEnd="url(#ar-e)" />
            <text x="120" y="100" fill={TXT} fontSize="12" textAnchor="end">pád: Ep → Ek</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Příliv a odliv — gravitace Měsíce v akci">
        <p>
          Klasická „bonusová“ otázka: proč moře dvakrát denně stoupne a klesne? Protože{' '}
          <b>Měsíc (a slabší Slunce) přitahuje vodu na Zemi</b> — a tady je ten vtip: <b>přitahuje
          ji různě silně podle vzdálenosti</b>. Voda <b>blíž</b> k Měsíci je tažená víc, voda na
          odvrácené straně míň než pevné jádro Země. Tím vzniknou <b>dvě</b> vyboulení vody (příliv)
          a mezi nimi „důlky“ (odliv). Proklikej si to:
        </p>

        <StepFigure
          title="Jak Měsíc vytvoří příliv a odliv"
          steps={[
            {
              label: 'gravitace klesá se vzdáleností',
              caption: <>Měsíc přitahuje vše na Zemi, ale podle <M>{'1/r^2'}</M> <b>nestejně silně</b>: bližší stranu nejvíc, vzdálenější nejméně.</>,
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <Defs id="ar-t1" color={FORCE} />
                  <circle cx="150" cy="100" r="48" fill={EARTH} />
                  <text x="150" y="105" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">Země</text>
                  <circle cx="400" cy="100" r="20" fill={MOON} />
                  <text x="400" y="138" fill={TXT} fontSize="13" textAnchor="middle">Měsíc</text>
                  {/* tři síly různé délky */}
                  <line x1="102" y1="100" x2="155" y2="100" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-t1)" />
                  <line x1="150" y1="100" x2="195" y2="100" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-t1)" />
                  <line x1="198" y1="100" x2="235" y2="100" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar-t1)" />
                  <text x="120" y="75" fill={FORCE} fontSize="12" textAnchor="middle">největší</text>
                  <text x="285" y="105" fill={FORCE} fontSize="12" textAnchor="middle">nejmenší</text>
                </svg>
              ),
            },
            {
              label: 'voda se vyboulí na dvou stranách',
              caption: <>Rozdíl tahů vodu „natáhne“: <b>blízká</b> strana se přitáhne k Měsíci, <b>vzdálená</b> strana „zaostane“. Vzniknou dvě boule = dva přílivy.</>,
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  {/* vodní obal (elipsa) */}
                  <ellipse cx="150" cy="100" rx="78" ry="52" fill={WATER} fillOpacity="0.28" />
                  <circle cx="150" cy="100" r="48" fill={EARTH} />
                  <text x="150" y="105" fill={TXT} fontSize="14" textAnchor="middle" fontWeight="700">Země</text>
                  <circle cx="400" cy="100" r="20" fill={MOON} />
                  <text x="400" y="138" fill={TXT} fontSize="13" textAnchor="middle">Měsíc</text>
                  <text x="232" y="100" fill={ACCENT} fontSize="12" textAnchor="middle">příliv</text>
                  <text x="58" y="100" fill={ACCENT} fontSize="12" textAnchor="middle">příliv</text>
                  <text x="150" y="36" fill={TXT} fontSize="11" textAnchor="middle">odliv</text>
                  <text x="150" y="172" fill={TXT} fontSize="11" textAnchor="middle">odliv</text>
                </svg>
              ),
            },
            {
              label: 'Země se otáčí pod boulemi',
              caption: <>Země se za den jednou otočí, ale boule „míří“ stále na Měsíc. Každé místo proto projde <b>dvěma přílivy a dvěma odlivy denně</b>.</>,
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <Defs id="ar-t3" color={ENERGY} />
                  <ellipse cx="150" cy="100" rx="78" ry="52" fill={WATER} fillOpacity="0.28" />
                  <circle cx="150" cy="100" r="48" fill={EARTH} />
                  {/* značka místa na povrchu */}
                  <circle cx="150" cy="52" r="6" fill={ENERGY} />
                  {/* rotační šipka */}
                  <path d="M150,40 A60,60 0 0 1 210,100" fill="none" stroke={ENERGY} strokeWidth="3" markerEnd="url(#ar-t3)" />
                  <circle cx="400" cy="100" r="20" fill={MOON} />
                  <text x="400" y="138" fill={TXT} fontSize="13" textAnchor="middle">Měsíc</text>
                  <text x="150" y="190" fill={TXT} fontSize="11" textAnchor="middle">otáčení Země → 2× příliv, 2× odliv za den</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Když se Měsíc a Slunce „srovnají do řady“ (úplněk/nov), jejich účinky se sčítají a příliv
          je největší (tzv. skočný); když svírají pravý úhel, vzájemně se oslabí.
        </p>
      </Section>

      <Section title="Jak se gravitační zákon ověřuje — Keplerovy zákony">
        <p>
          Druhá oblíbená otázka: <b>jak víme, že ten vzoreček platí?</b> Odpověď, kterou chce
          zkoušející slyšet: <b>z Newtonova gravitačního zákona se dají odvodit všechny tři{' '}
          <Term>Keplerovy zákony</Term></b> o pohybu planet — a ty <b>přesně sedí na pozorování</b>
          {' '}drah planet. Souhlas výpočtu s tím, co vidíme na obloze, je to ověření.
        </p>
        <ol className="biglist">
          <li><b>1. Keplerův zákon:</b> planety obíhají Slunce po <b>elipsách</b>, v jejichž ohnisku je Slunce.</li>
          <li><b>2. Keplerův zákon:</b> spojnice planeta–Slunce opíše za stejný čas stejnou plochu (blíž Slunci planeta letí rychleji).</li>
          <li><b>3. Keplerův zákon:</b> dál obíhající planety mají delší rok — přesně podle <M>{'T^2 \\sim a^3'}</M> (čtverec oběžné doby k třetí mocnině vzdálenosti).</li>
        </ol>
        <p>
          Stačí umět říct podstatu: <b>Newton ⇒ Keplerovy zákony ⇒ shoda s pozorováním planet</b>.
          Experimentálně je zákon ověřený od běžných rozměrů až po vesmírné vzdálenosti (právě
          přes pohyb nebeských těles).
        </p>
      </Section>

      <Section title="Coriolisova síla — proč to není „opravdová“ síla">
        <p>
          Země se otáčí, a kdo se veze na otáčející se podlaze, vidí pohyby zvláštně zakřivené.
          Tomuhle zdánlivému vychýlení říkáme <Term>Coriolisova síla</Term>. Není to nová
          přitažlivá síla — je to <b>setrvačný efekt z toho, že stojíme na rotující Zemi</b>.
          Projeví se u dlouhých pohybů: stáčí směr větrů a mořských proudů (na severní polokouli
          doprava, na jižní doleva) a kreslí spirály cyklón.
        </p>
        <Callout kind="info" title="Stačí tušení">
          U zkoušky obvykle postačí jedna věta: Coriolisova síla je <b>zdánlivá (setrvačná) síla</b>
          {' '}způsobená <b>rotací Země</b>, která stáčí dlouhé pohyby (vítr, proudy) do strany.
        </Callout>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady padají body)">
        <ul>
          <li>Gravitace je <b>vždy přitažlivá</b> — nikdy neodpuzuje (na rozdíl od elektrické síly).</li>
          <li>Gravitace je <b>vzájemná</b>: já působím na Zemi <b>stejně velkou silou</b> jako Země na mě. Liší se jen <b>zrychlení</b> — Země je tak těžká, že její pohyb je nepatrný (<M>{'a = F/m'}</M>).</li>
          <li>Ve vzorci je <M>{'r^2'}</M>, ne <M>{'r'}</M> — dvakrát větší vzdálenost znamená <b>čtyřikrát</b> menší sílu.</li>
          <li>Ověření = z Newtonova zákona <b>plynou Keplerovy zákony</b> (neplést s tím, že by je „dokázal měřením“ Kepler — ten je jen popsal z pozorování).</li>
          <li><M>{'E_p = mgh'}</M> je jen <b>aproximace u povrchu Země</b> (kde je <M>{'g'}</M> skoro konstantní); ve velké výšce platí přesnější <M>{'E_p = -\\kappa\\,mM/r'}</M>.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat Newtonův gravitační zákon F = κ·m₁m₂/r² a popsat všechny veličiny.',
          'Vysvětlit, že gravitace závisí na hmotnostech a (s druhou mocninou) na vzdálenosti.',
          'Vědět, že gravitace je vždy přitažlivá, vzájemná a míří do středu Země.',
          'Napsat Ep = mgh a popsat veličiny.',
          'Vysvětlit příliv a odliv přitažlivostí Měsíce a Slunce.',
          'Říct, jak se zákon ověřuje: z Newtona plynou Keplerovy zákony shodné s pozorováním.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Napiš Newtonův gravitační zákon a řekni, na čem gravitační síla závisí.',
            a: <><M>{'F = \\kappa\\,m_1 m_2 / r^2'}</M>. Závisí na <b>hmotnostech</b> obou těles (přímo úměrně) a na <b>vzdálenosti</b> <M>{'r'}</M> — a to s <b>druhou mocninou</b> (dvakrát dál ⇒ čtyřikrát menší síla).</>,
          },
          {
            q: 'Působím na Zemi gravitačně stejně silně jako ona na mě? Proč to tak nevypadá?',
            a: <><b>Ano, stejně silně</b> — gravitace je vzájemná (akce a reakce). Liší se <b>zrychlení</b>: ze stejné síly dostane Země kvůli své obří hmotnosti zrychlení <M>{'a=F/m'}</M> zcela nepatrné, kdežto já spadnu.</>,
          },
          {
            q: 'Čím vzniká příliv a odliv?',
            a: <>Přitažlivostí <b>Měsíce</b> (a slabšího <b>Slunce</b>). Protože gravitace klesá se vzdáleností, působí na bližší a vzdálenější vodu <b>různě silně</b> — voda se vyboulí na dvou stranách a Země se pod boulemi otáčí (2× příliv a 2× odliv denně).</>,
          },
          {
            q: 'Jak se Newtonův gravitační zákon ověřuje?',
            a: <>Z něj se dají <b>odvodit všechny tři Keplerovy zákony</b> o pohybu planet a ty <b>souhlasí s pozorováním</b> drah nebeských těles. Shoda výpočtu a pozorování je to ověření.</>,
          },
        ]}
      />
    </>
  )
}
