import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.3'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'prace': { lesson: '1.3', label: 'práce', short: 'W = F·s·cos α — dráhový účinek síly; závisí na úhlu mezi silou a dráhou.' },
  'kineticka-energie': { lesson: '1.3', label: 'kinetická energie', short: 'Energie pohybu: translační ½mv², rotační ½Jω².' },
  'potencialni-energie': { lesson: '1.3', label: 'potenciální energie', short: 'Energie polohy v silovém poli: gravitační mgh, pružnosti ½ku².' },
  'skalarni-soucin': { lesson: '1.3', label: 'skalární součin', short: 'a·b = |a||b|cos α — z dvou vektorů udělá číslo; bere jen souhlasnou složku.' },
}

/* Šipka pro SVG (definice markeru). */
function Defs({ color, id: mid = 'ar' }: { color: string; id?: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
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
          <svg viewBox="0 0 360 150" className="svg-fig">
            <Defs color={FORCE} />
            <Defs color={ACCENT} id="arAcc" />
            {/* dráha */}
            <line x1="40" y1="110" x2="320" y2="110" stroke={GROUND} strokeWidth="3" />
            <line x1="40" y1="110" x2="300" y2="110" stroke={MUTE} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#ar)" />
            <text x="300" y="128" fill={MUTE} fontSize="13" textAnchor="middle">dráha s</text>
            {/* těleso */}
            <rect x="40" y="90" width="40" height="20" rx="4" fill={BODY} />
            {/* síla pod úhlem */}
            <line x1="60" y1="100" x2="180" y2="40" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar)" />
            <text x="150" y="42" fill={FORCE} fontSize="15">F</text>
            {/* složka ve směru pohybu */}
            <line x1="60" y1="100" x2="180" y2="100" stroke={ACCENT} strokeWidth="4" markerEnd="url(#arAcc)" />
            <text x="120" y="92" fill={ACCENT} fontSize="13" textAnchor="middle">F·cos α</text>
            {/* úhel */}
            <path d="M 92 100 A 32 32 0 0 0 80 78" fill="none" stroke={TXT} strokeWidth="1.5" />
            <text x="100" y="82" fill={TXT} fontSize="13">α</text>
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

        <StepFigure
          title="Zvednu knihu × držím knihu"
          steps={[
            {
              label: 'zvednutí = práce',
              caption: <>Zvedám knihu z podlahy na polici. Síla míří nahoru, dráha taky → <b>koná se práce</b> <M>{'W = mgh > 0'}</M>. Tahle práce se uloží do potenciální energie knihy.</>,
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <Defs color={ACCENT} id="arAcc" />
                  <line x1="0" y1="160" x2="360" y2="160" stroke={GROUND} strokeWidth="3" />
                  {/* police */}
                  <rect x="250" y="60" width="90" height="8" fill={MUTE} />
                  {/* dráha zvednutí */}
                  <line x1="80" y1="150" x2="80" y2="70" stroke={ACCENT} strokeWidth="4" markerEnd="url(#arAcc)" />
                  <text x="58" y="115" fill={ACCENT} fontSize="13" textAnchor="middle">h</text>
                  {/* kniha dole (slabě) a nahoře */}
                  <rect x="62" y="140" width="36" height="16" rx="2" fill={MUTE} opacity="0.5" />
                  <rect x="62" y="55" width="36" height="16" rx="2" fill={ACCENT} />
                  <text x="180" y="40" fill={TXT} fontSize="15" textAnchor="middle">W = mgh &gt; 0</text>
                </svg>
              ),
            },
            {
              label: 'držení = NULOVÁ práce',
              caption: <>Knihu jen držím v nataženě ruce na místě. Síla míří nahoru, ale <b>dráha je nulová</b> (<M>{'s = 0'}</M>) → <M>{'W = F\\cdot 0 = 0'}</M>. Sval se unaví, fyzikální práce je <b>nula</b>.</>,
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <Defs color={FORCE} />
                  <line x1="0" y1="160" x2="360" y2="160" stroke={GROUND} strokeWidth="3" />
                  {/* ruka drží knihu na místě */}
                  <rect x="160" y="70" width="40" height="18" rx="2" fill={ACCENT} />
                  {/* síla nahoru */}
                  <line x1="180" y1="70" x2="180" y2="30" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar)" />
                  <text x="200" y="48" fill={FORCE} fontSize="14">F</text>
                  {/* nulová dráha */}
                  <text x="180" y="120" fill={TXT} fontSize="14" textAnchor="middle">s = 0</text>
                  <text x="180" y="142" fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700">W = 0</text>
                </svg>
              ),
            },
            {
              label: 'nesu po rovině = nulová práce',
              caption: <>Nesu tašku vodorovně. Síla ruky míří nahoru, pohyb je vodorovný → <M>{'\\alpha = 90^\\circ'}</M>, <M>{'\\cos 90^\\circ = 0'}</M> → <b>práce opět nulová</b>. (Tíhová síla taky nekoná, protože výška se nemění.)</>,
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <Defs color={FORCE} />
                  <Defs color={MUTE} id="arMute" />
                  <line x1="0" y1="160" x2="360" y2="160" stroke={GROUND} strokeWidth="3" />
                  {/* taška */}
                  <rect x="60" y="78" width="34" height="26" rx="3" fill={ACCENT} />
                  {/* síla nahoru */}
                  <line x1="77" y1="78" x2="77" y2="40" stroke={FORCE} strokeWidth="4" markerEnd="url(#ar)" />
                  <text x="96" y="56" fill={FORCE} fontSize="14">F</text>
                  {/* pohyb vodorovně */}
                  <line x1="110" y1="91" x2="300" y2="91" stroke={MUTE} strokeWidth="3" strokeDasharray="5 5" markerEnd="url(#arMute)" />
                  <text x="210" y="82" fill={MUTE} fontSize="13" textAnchor="middle">pohyb (vodorovně)</text>
                  {/* úhel 90 */}
                  <rect x="77" y="82" width="9" height="9" fill="none" stroke={TXT} strokeWidth="1.2" />
                  <text x="200" y="135" fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700">α = 90° → W = 0</text>
                </svg>
              ),
            },
          ]}
        />
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
          <svg viewBox="0 0 340 170" className="svg-fig">
            <Defs color={ACCENT} id="arAcc" />
            {/* nakloněná rovina, pravý úhel vlevo dole */}
            <polygon points="30,30 30,140 300,140" fill="none" stroke={ACCENT} strokeWidth="3" strokeLinejoin="round" />
            {/* válec nahoře */}
            <circle cx="48" cy="44" r="15" fill={BODY} stroke={TXT} strokeWidth="1.5" />
            <line x1="48" y1="44" x2="58" y2="44" stroke={GROUND} strokeWidth="2" />
            {/* šipka pohybu dolů po svahu */}
            <line x1="62" y1="52" x2="120" y2="76" stroke={ACCENT} strokeWidth="3" markerEnd="url(#arAcc)" />
            {/* válec dole */}
            <circle cx="270" cy="124" r="15" fill={BODY} stroke={TXT} strokeWidth="1.5" />
            {/* zatáčivá šipka (rotace) u dolního válce */}
            <path d="M 270 105 A 19 19 0 1 1 252 122" fill="none" stroke={FORCE} strokeWidth="2.5" markerEnd="url(#ar)" />
            <Defs color={FORCE} />
            <text x="120" y="40" fill={TXT} fontSize="13">Eₚ = mgh</text>
            <text x="210" y="98" fill={TXT} fontSize="13">↓ mění se na Eₖ</text>
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
            <line x1="220" y1="48" x2="300" y2="48" stroke={ACCENT} strokeWidth="4" markerEnd="url(#arAcc)" />
            <text x="260" y="40" fill={ACCENT} fontSize="13" textAnchor="middle">v</text>
            {/* výpravčí */}
            <circle cx="320" cy="105" r="8" fill={FORCE} />
            <text x="320" y="138" fill={MUTE} fontSize="12" textAnchor="middle">výpravčí</text>
            {/* popisky */}
            <text x="120" y="50" fill={TXT} fontSize="11" textAnchor="middle">vůči vlaku: Eₖ = 0</text>
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
