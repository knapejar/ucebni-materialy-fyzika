import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, ARect, AText, AGroup, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.3'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'prace': { lesson: '1.3', label: 'práce', short: 'W = F·s·cos α — dráhový účinek síly; závisí na úhlu mezi silou a dráhou.' },
  'kineticka-energie': { lesson: '1.3', label: 'kinetická energie', short: 'Energie pohybu: translační ½mv², rotační ½Jω².' },
  'potencialni-energie': { lesson: '1.3', label: 'potenciální energie', short: 'Energie polohy v silovém poli: gravitační mgh, pružnosti ½ku².' },
  'skalarni-soucin': { lesson: '1.3', label: 'skalární součin', short: 'a·b = |a||b|cos α — z dvou vektorů udělá číslo; bere jen souhlasnou složku.' },
}

/* Šipka pro SVG (definice markeru). markerUnits="userSpaceOnUse" → hrot
   nezvětšuje se s tloušťkou tahu, takže zůstává úhledný i u silných čar. */
function Defs({ color, id: mid = 'ar' }: { color: string; id?: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="11" markerHeight="11" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M0,0 L11,5 L0,10 z" fill={color} />
      </marker>
    </defs>
  )
}

const GROUND = '#3a4566'
const BODY = '#9aa6c4'
const ACCENT = '#f59e0b'  // akcent tématu (práce / energie)
const FORCE = '#fb7185'
const TXT = '#e8ecf8'
const MUTE = '#8b96b8'

export default function Lesson_1_3() {
  return (
    <>
      <p className="lead">
        Energie je „měna", kterou ve fyzice platíš za pohyb a za zvednutí věcí nahoru — a{' '}
        práce je převod z jednoho účtu na druhý. Zní to abstraktně, ale u zkoušky chtějí
        tři vzorečky, jeden úhel a pár příkladů. Když budeš vědět, <b>co je a co není práce</b>, máš
        nejčastější chyták z krku.
      </p>

      <Section title="Práce: W = F·s·cos α (a proč tam je ten kosinus)">
        <p>
          <Term id="prace">Práce</Term> je dráhový účinek <Concept id="sila">síly</Concept> — co síla „nadělá", když posune těleso po nějaké
          dráze. V nejjednodušším případě (stálá síla, přímá dráha) platí:
        </p>
        <MB>{'W = \\vec F \\cdot \\vec s = F\\,s\\,\\cos\\alpha'}</MB>
        <p>
          kde <M>{'F'}</M> je velikost síly, <M>{'s'}</M> ujetá dráha a <M>{'\\alpha'}</M> je{' '}
          <b>úhel mezi směrem síly a směrem pohybu</b>. Jednotka je <M>{'\\mathrm{joule}'}</M>,{' '}
          <M>{'[\\,\\mathrm J\\,] = \\mathrm{N\\,m}'}</M>. Práce je <Term>skalár</Term> (číslo, ne
          vektor) — i když ji počítáš ze dvou vektorů.
        </p>
        <p>
          Ten zápis <M>{'\\vec F \\cdot \\vec s'}</M> je <Term id="skalarni-soucin">skalární součin</Term> dvou vektorů.
          Jeho definice je přesně <M>{'\\vec a\\cdot\\vec b = |\\vec a|\\,|\\vec b|\\,\\cos\\alpha'}</M> —
          ze dvou vektorů udělá jedno číslo a <b>bere jen tu složku, která jde stejným směrem</b>.
          Proto ten kosinus: práci koná jen ta část síly, která táhne <i>po směru</i> pohybu.
        </p>

        <Figure caption="Práci koná jen složka síly ve směru pohybu (F·cos α). Kolmá složka nepracuje.">
          <svg viewBox="0 0 360 160" className="svg-fig">
            <Defs color={FORCE} />
            <Defs color={ACCENT} id="arAcc" />
            <Defs color={MUTE} id="arMute" />
            {/* dráha */}
            <line x1="40" y1="120" x2="330" y2="120" stroke={GROUND} strokeWidth="3" />
            <line x1="120" y1="120" x2="300" y2="120" stroke={MUTE} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arMute)" />
            <text x="260" y="138" fill={MUTE} fontSize="13" textAnchor="middle">dráha s</text>
            {/* těleso */}
            <rect x="44" y="100" width="40" height="20" rx="4" fill={BODY} />
            {/* síla pod úhlem (z rohu tělesa) */}
            <line x1="84" y1="110" x2="210" y2="48" stroke={FORCE} strokeWidth="3.5" markerEnd="url(#ar)" />
            <text x="222" y="48" fill={FORCE} fontSize="16" fontWeight="700">F</text>
            {/* složka ve směru pohybu */}
            <line x1="84" y1="110" x2="208" y2="110" stroke={ACCENT} strokeWidth="3.5" markerEnd="url(#arAcc)" />
            <text x="170" y="102" fill={ACCENT} fontSize="14" textAnchor="middle" fontWeight="600">F·cos α</text>
            {/* kolmá (svislá) spojnice — naznačení rozkladu */}
            <line x1="200" y1="110" x2="200" y2="62" stroke={MUTE} strokeWidth="1.5" strokeDasharray="4 4" />
            {/* úhel α mezi silou a dráhou (popisek uvnitř oblouku u vrcholu) */}
            <path d="M 130 110 A 46 46 0 0 0 116 84" fill="none" stroke={TXT} strokeWidth="1.5" />
            <text x="122" y="103" fill={TXT} fontSize="14">α</text>
          </svg>
        </Figure>

        <p>Z toho kosinu plynou tři situace, které musíš umět rozlišit:</p>
        <ul>
          <li><M>{'\\alpha = 0^\\circ'}</M> (síla táhne po směru): <M>{'\\cos 0^\\circ = 1'}</M>, práce je <b>maximální</b> a kladná, <M>{'W = F\\,s'}</M>.</li>
          <li><M>{'\\alpha = 90^\\circ'}</M> (síla kolmo na pohyb): <M>{'\\cos 90^\\circ = 0'}</M>, práce je <b>nulová</b> — síla nepracuje.</li>
          <li><M>{'\\alpha = 180^\\circ'}</M> (síla proti pohybu, např. tření): <M>{'\\cos 180^\\circ = -1'}</M>, práce je <b>záporná</b>.</li>
        </ul>
      </Section>

      <Section title="Co JE a co NENÍ práce (oblíbený chyták)">
        <p>
          Tady padá nejvíc bodů. Ve fyzice <b>není</b> práce to, co je práce „v životě". Když držíš
          tašku na místě, jsi unavený, ale <b>fyzikální práce je nulová</b> — protože se nehne dráha
          (<M>{'s = 0'}</M>). Klikej krok po kroku:
        </p>

        <StepScene
          title="Zvednu knihu × držím knihu"
          viewBox="0 0 360 200"
          captions={[
            <>Zvedám knihu z podlahy na polici. Síla míří nahoru, dráha taky → <b>koná se práce</b> <M>{'W = mgh > 0'}</M>. Tahle práce se uloží do potenciální energie knihy.</>,
            <>Knihu jen držím v natažené ruce na místě. Síla míří nahoru, ale <b>dráha je nulová</b> (<M>{'s = 0'}</M>) → <M>{'W = F\\cdot 0 = 0'}</M>. Sval se unaví, fyzikální práce je <b>nula</b>.</>,
            <>Nesu tašku vodorovně. Síla ruky míří nahoru, pohyb je vodorovný → <M>{'\\alpha = 90^\\circ'}</M>, <M>{'\\cos 90^\\circ = 0'}</M> → <b>práce opět nulová</b>. (Tíhová síla taky nekoná, protože výška se nemění.)</>,
          ]}
        >
          <Defs color={ACCENT} id="arAcc" />
          <Defs color={FORCE} id="arF" />
          <Defs color={MUTE} id="arMute" />

          {/* zem (statická) */}
          <ALine x1={0} y1={170} x2={360} y2={170} stroke={GROUND} strokeWidth={3} />

          {/* police — jen v 1. kroku */}
          <ARect x={232} y={62} width={96} height={8} rx={2} fill={MUTE} opacity={[1, 0, 0]} />

          {/* dráha zvednutí h — jen v 1. kroku */}
          <ALine x1={92} y1={160} x2={92} y2={82} stroke={ACCENT} strokeWidth={3.5} markerEnd="url(#arAcc)" opacity={[1, 0, 0]} />
          <AText x={[74, 74, 74]} y={126} fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700" opacity={[1, 0, 0]}>h</AText>
          {/* startovní pozice knihy na podlaze (jen krok 1, slabě) */}
          <ARect x={74} y={150} width={36} height={16} rx={2} fill={MUTE} opacity={[0.55, 0, 0]} />

          {/* KNIHA — sdílený prvek, který se mezi kroky přesouvá:
              krok 0: nahoře u police (zvednutá)
              krok 1: drží se uprostřed ve vzduchu
              krok 2: drží se vlevo, pohyb vodorovně */}
          <ARect
            x={[74, 150, 70]}
            y={[64, 86, 92]}
            width={[36, 40, 36]}
            height={[16, 18, 24]}
            rx={3}
            fill={ACCENT}
          />

          {/* síla F nahoru — v krocích 2 a 3 (vychází z horní hrany knihy) */}
          <ALine
            x1={[170, 170, 88]}
            y1={[86, 86, 92]}
            x2={[170, 170, 88]}
            y2={[44, 44, 50]}
            stroke={FORCE}
            strokeWidth={3.5}
            markerEnd="url(#arF)"
            opacity={[0, 1, 1]}
          />
          <AText x={[192, 192, 110]} y={[60, 60, 66]} fill={FORCE} fontSize="15" fontWeight="700" opacity={[0, 1, 1]}>F</AText>

          {/* pohyb vodorovně — jen krok 3 */}
          <ALine x1={120} y1={104} x2={300} y2={104} stroke={MUTE} strokeWidth={3} strokeDasharray="5 5" markerEnd="url(#arMute)" opacity={[0, 0, 1]} />
          <AText x={210} y={94} fill={MUTE} fontSize="13" textAnchor="middle" opacity={[0, 0, 1]}>pohyb (vodorovně)</AText>
          {/* značka pravého úhlu (90°) — krok 3 */}
          <ARect x={88} y={92} width={10} height={10} fill="none" stroke={TXT} strokeWidth={1.2} opacity={[0, 0, 1]} />

          {/* horní vzorec — mění se podle kroku */}
          <AText x={180} y={30} fill={TXT} fontSize="16" textAnchor="middle" fontWeight="700" opacity={[1, 0, 0]}>W = mgh &gt; 0</AText>
          <AText x={180} y={150} fill={ACCENT} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[0, 1, 0]}>s = 0  →  W = 0</AText>
          <AText x={210} y={150} fill={ACCENT} fontSize="16" textAnchor="middle" fontWeight="700" opacity={[0, 0, 1]}>α = 90°  →  W = 0</AText>
        </StepScene>
      </Section>

      <Section title="Kinetická energie: energie pohybu">
        <p>
          <Term id="kineticka-energie">Kinetická energie</Term> <M>{'E_k'}</M> je energie, kterou má těleso <b>proto, že se
          pohybuje</b>. Definuje se jako práce nutná k tomu, abys těleso z klidu rozjel na danou
          rychlost. Má dvě podoby — podle toho, jestli se těleso <i>posouvá</i>, nebo <i>otáčí</i>:
        </p>
        <MB>{'E_k = \\tfrac{1}{2}m v^2 \\qquad\\text{(translační — posuvný pohyb)}'}</MB>
        <MB>{'E_k^{R} = \\tfrac{1}{2}J\\omega^2 \\qquad\\text{(rotační — otáčení)}'}</MB>
        <p>
          U rotace je <M>{'J'}</M> <Concept id="moment-setrvacnosti">moment setrvačnosti</Concept> (jak je hmota rozmístěná kolem
          osy — obdoba hmotnosti pro otáčení) a <M>{'\\omega'}</M> je úhlová rychlost. Všimni si, že
          jsou to úplně stejné vzorce, jen <M>{'m\\to J'}</M> a <M>{'v\\to\\omega'}</M>.
        </p>
        <Callout kind="tip" title="Kde se ptají na obojí">
          <p>
            Klasický zkouškový příklad: <b>válec (nebo koule) sjíždí z <Concept id="naklonena-rovina">nakloněné roviny</Concept></b>. Protože
            se zároveň <b>posouvá i kotálí (otáčí)</b>, musíš počítat s oběma:{' '}
            <M>{'E_k = \\tfrac12 m v^2 + \\tfrac12 J\\omega^2'}</M>. Kdyby to byl kvádr, který se jen
            sune, stačí translační část.
          </p>
        </Callout>
        <Figure caption="Válec na nakloněné rovině: jak sjíždí, mění potenciální energii (mgh) na kinetickou — translační i rotační.">
          <svg viewBox="0 0 340 180" className="svg-fig">
            <Defs color={ACCENT} id="arAcc" />
            <Defs color={FORCE} />
            {/* nakloněná rovina, pravý úhel vpravo dole; jemná výplň */}
            <polygon points="30,40 300,150 30,150" fill={ACCENT} fillOpacity="0.10" stroke={ACCENT} strokeWidth="3" strokeLinejoin="round" />
            {/* značka pravého úhlu vpravo dole */}
            <rect x="286" y="138" width="10" height="10" fill="none" stroke={ACCENT} strokeWidth="1.4" />

            {/* válec nahoře (sedí na svahu) */}
            <circle cx="74" cy="42" r="15" fill={BODY} stroke={TXT} strokeWidth="1.5" />
            {/* spoke = naznačení natočení (diagonála, ne minus) */}
            <line x1="74" y1="42" x2="84" y2="53" stroke={GROUND} strokeWidth="2" />
            {/* šipka pohybu dolů po svahu (offset nad hypotenuzou, nekryje hranu) */}
            <line x1="100" y1="50" x2="158" y2="74" stroke={ACCENT} strokeWidth="3" markerEnd="url(#arAcc)" />

            {/* válec dole (sedí na svahu u paty) */}
            <circle cx="250" cy="113" r="15" fill={BODY} stroke={TXT} strokeWidth="1.5" />
            {/* zatáčivá šipka (rotace) u dolního válce — vně válce, nad ním */}
            <path d="M 234 106 A 19 19 0 1 1 250 132" fill="none" stroke={FORCE} strokeWidth="2.5" markerEnd="url(#ar)" />

            {/* popisky */}
            <text x="150" y="34" fill={TXT} fontSize="14" textAnchor="middle">Eₚ = mgh</text>
            <text x="246" y="160" fill={TXT} fontSize="13" textAnchor="middle">→ mění se na Eₖ</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Potenciální energie: energie polohy">
        <p>
          <Term id="potencialni-energie">Potenciální energie</Term> <M>{'E_p'}</M> je energie, kterou má těleso <b>kvůli své
          poloze v silovém poli</b> — je „nahromaděná" a může se uvolnit. Dva vzorce, které musíš znát:
        </p>
        <MB>{'E_p = m g h \\qquad\\text{(gravitační — výška } h \\text{ nad zemí)}'}</MB>
        <MB>{'E_p = \\tfrac{1}{2}k u^2 \\qquad\\text{(pružnosti — stlačení/protažení } u \\text{ pružiny)}'}</MB>
        <p>
          U gravitační: čím těžší a výš, tím víc energie (proto je rozdíl, jestli ti na hlavu spadne
          tenisák z 10 cm, nebo klavír z druhého patra). U pružiny je <M>{'k'}</M> tuhost a{' '}
          <M>{'u'}</M> výchylka z klidové polohy.
        </p>
        <p>
          Energie se mezi sebou <b>přelévají</b>: na vršku horské dráhy má vozík hlavně <M>{'E_p'}</M>,
          dole hlavně <M>{'E_k'}</M>. Houpačka: nahoře maximum <M>{'E_p'}</M>, dole maximum{' '}
          <M>{'E_k'}</M>. Luk: napnutá tětiva má <M>{'E_p'}</M> pružnosti, po vystřelení se změní na{' '}
          <M>{'E_k'}</M> šípu. Energii nelze vyrobit ani zničit, jen přeměnit.
        </p>
      </Section>

      <Section title="Relativita energie: člověk ve vlaku">
        <p>
          Kinetická energie <b>není absolutní</b> — záleží, vzhledem k čemu pohyb měříš (k jaké{' '}
          <Term>vztažné soustavě</Term>). Stejné těleso může mít zároveň nulovou i nenulovou energii.
        </p>
        <Figure caption="Sedím ve vlaku: vzhledem k vlaku se nehýbu (Eₖ = 0), vzhledem k výpravčímu na nádraží letím (Eₖ > 0).">
          <svg viewBox="0 0 360 150" className="svg-fig">
            <Defs color={ACCENT} id="arAcc" />
            {/* koleje */}
            <line x1="0" y1="120" x2="360" y2="120" stroke={GROUND} strokeWidth="3" />
            {/* vlak */}
            <rect x="60" y="60" width="150" height="50" rx="8" fill={BODY} />
            <circle cx="95" cy="115" r="8" fill="#42506f" />
            <circle cx="175" cy="115" r="8" fill="#42506f" />
            {/* člověk v sedačce */}
            <circle cx="120" cy="80" r="8" fill={ACCENT} />
            {/* šipka pohybu vlaku */}
            <line x1="225" y1="48" x2="300" y2="48" stroke={ACCENT} strokeWidth="3.5" markerEnd="url(#arAcc)" />
            <text x="262" y="40" fill={ACCENT} fontSize="14" textAnchor="middle" fontWeight="700">v</text>
            {/* výpravčí */}
            <circle cx="320" cy="105" r="8" fill={FORCE} />
            <text x="320" y="139" fill={MUTE} fontSize="12" textAnchor="middle">výpravčí</text>
            {/* popisky */}
            <text x="135" y="50" fill={TXT} fontSize="12" textAnchor="middle">vůči vlaku: Eₖ = 0</text>
          </svg>
        </Figure>
        <p>
          Sedím ve vlaku: <b>vzhledem k vlaku</b> jsem v klidu, takže moje <M>{'E_k = 0'}</M>. Ale{' '}
          <b>vzhledem k výpravčímu</b> na nádraží se řítím rychlostí vlaku, takže{' '}
          <M>{'E_k = \\tfrac12 m v^2 > 0'}</M>. Stejné těleso, dvě různé hodnoty — protože energie
          závisí na zvolené vztažné soustavě.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Držím břemeno na místě → práce je nulová.</b> Žádný posun (<M>{'s=0'}</M>), žádná
            práce, i když tě ruka bolí. Totéž stání na zastávce nebo držení činky nad hlavou.
          </li>
          <li>
            <b>Práce závisí na úhlu</b> <M>{'\\alpha'}</M> mezi silou a dráhou přes <M>{'\\cos\\alpha'}</M>.
            Kolmá síla (<M>{'90^\\circ'}</M>) nekoná práci; síla proti pohybu koná práci <b>zápornou</b>.
          </li>
          <li>
            Nepleť si <M>{'E_k'}</M> a <M>{'E_p'}</M>: <b>kinetická</b> = pohyb (<M>{'\\tfrac12 mv^2'}</M>),{' '}
            <b>potenciální</b> = poloha (<M>{'mgh'}</M> nebo <M>{'\\tfrac12 ku^2'}</M>).
          </li>
          <li>
            U <b>válce/koule</b> na nakloněné rovině nezapomeň na <b>rotační</b> energii{' '}
            <M>{'\\tfrac12 J\\omega^2'}</M> — sám kvádr (jen se sune) ji nemá.
          </li>
          <li>
            Práce i energie jsou <b>skaláry</b> (čísla), měří se v <b>joulech</b> <M>{'[\\mathrm J]'}</M>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat vzorec práce W = F·s·cos α a vysvětlit, proč tam je úhel α (skalární součin).',
          'Rozlišit kinetickou a potenciální energii a napsat všechny vzorce (½mv², ½Jω², mgh, ½ku²).',
          'Rozhodnout, kdy se koná a kdy NEkoná práce (zvednutí knihy × držení tašky).',
          'Vysvětlit relativitu energie na příkladu člověka ve vlaku.',
          'Vědět, že práce i energie jsou skaláry v joulech [J].',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Držím těžkou tašku na jednom místě a ruka mě bolí. Konám fyzikální práci?',
            a: <>Ne. Práce je <M>{'W = F\\,s\\,\\cos\\alpha'}</M> a dráha je nulová (<M>{'s=0'}</M>), takže <b>W = 0</b>. Sval se sice unaví, ale fyzikální práce je nulová.</>,
          },
          {
            q: <>Jak zní vzorec pro práci a na čem závisí kromě síly a dráhy?</>,
            a: <><M>{'W = \\vec F\\cdot\\vec s = F\\,s\\,\\cos\\alpha'}</M>. Závisí i na <b>úhlu</b> <M>{'\\alpha'}</M> mezi směrem síly a směrem pohybu — koná se jen složka síly po směru dráhy (proto <M>{'\\cos\\alpha'}</M>).</>,
          },
          {
            q: 'Vyjmenuj druhy kinetické a potenciální energie i s jejich vzorci.',
            a: <>Kinetická: translační <M>{'\\tfrac12 mv^2'}</M> a rotační <M>{'\\tfrac12 J\\omega^2'}</M>. Potenciální: gravitační <M>{'mgh'}</M> a pružnosti <M>{'\\tfrac12 ku^2'}</M>.</>,
          },
          {
            q: 'Proč má člověk sedící ve vlaku nulovou i nenulovou kinetickou energii zároveň?',
            a: <>Protože energie závisí na <b>vztažné soustavě</b>. Vzhledem k vlaku je v klidu → <M>{'E_k=0'}</M>; vzhledem k výpravčímu na nádraží se pohybuje rychlostí vlaku → <M>{'E_k=\\tfrac12 mv^2>0'}</M>.</>,
          },
        ]}
      />
    </>
  )
}
