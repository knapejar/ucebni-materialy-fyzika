import { Section, M, MB, Concept, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.5'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější wiki-proklik). */
export const provides = {
  'stojate-vlneni': { lesson: '3.5', label: 'stojaté vlnění', short: 'Vlnění, které „stojí na místě": body kmitají se stejnou fází, ale různou amplitudou. Vzniká interferencí dvou vln opačného směru.' },
  'uzel': { lesson: '3.5', label: 'uzel', short: 'Místo stojatého vlnění, které neustále nekmitá (nulová výchylka).' },
  'kmitna': { lesson: '3.5', label: 'kmitna', short: 'Místo stojatého vlnění s neustále maximální amplitudou.' },
}

const ACCENT = '#a78bfa' // akcent tématu (vlnění)
const TXT = '#e8ecf8'
const MUTED = '#7c89ad'
const WAVE_R = '#fb7185' // vlna jdoucí doprava
const WAVE_L = '#38bdf8' // vlna jdoucí doleva
const NODE = '#f59e0b' // uzel
const ANTI = '#34d399' // kmitna

/* Šipky pro SVG (markery v různých barvách). */
function Defs() {
  return (
    <defs>
      <marker id="arA" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACCENT} />
      </marker>
      <marker id="arR" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={WAVE_R} />
      </marker>
      <marker id="arL" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={WAVE_L} />
      </marker>
      <marker id="arN" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={NODE} />
      </marker>
      <marker id="arK" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ANTI} />
      </marker>
    </defs>
  )
}

export default function Lesson_3_5() {
  return (
    <>
      <p className="lead">
        Tohle je klasická zkoušková dvojice, u které se nejvíc plete jedna jediná věc: <b>co je
        stejné a co se liší</b> u postupného a u stojatého vlnění. Když si zapamatuješ jeden
        protiklad a umíš nakreslit uzly a kmitny, máš tuhle otázku hotovou.
      </p>

      <Section title="Postupné vlnění — vlna, která běží dál">
        <p>
          <Concept id="vlneni">Vlnění</Concept> je šíření kmitů prostředím. U{' '}
          <Term>postupného vlnění</Term> se „hrb" (rozruch) <b>posouvá od místa k místu</b> — jako
          když cvrnkneš do napnutého provazu a vlna se rozběhne dál.
        </p>
        <ul>
          <li>
            <b>Všechny body kmitají se stejnou <Concept id="amplituda">amplitudou</Concept></b> (stejně velké výkyvy), ale{' '}
            <b>s různou fází</b> — každý bod „dostane vlnu" o chviličku později než ten před ním.
          </li>
          <li>
            <b>Přenáší se energie, ne látka.</b> Voda v jezeře zůstane na místě, jen kmitá nahoru
            dolů; dál putuje jen energie (a tvar vlny). To je u zkoušky oblíbená věta.
          </li>
          <li>
            Fáze je <b>funkcí času i polohy</b> (záleží, kdy a kde se díváš).
          </li>
        </ul>
        <p>
          Dva typy podle směru kmitání: <Term>příčné</Term> (body kmitají kolmo na směr šíření — jen
          v pevných látkách) a <Term>podélné</Term> (body kmitají rovnoběžně se směrem šíření —
          i v kapalinách a plynech, např. zvuk).
        </p>

        <Figure caption="Postupné vlnění: tvar vlny se posouvá doprava rychlostí v. Každý bod kmitá nahoru dolů se stejnou amplitudou A, jen s posunutou fází.">
          <svg viewBox="0 0 420 150" className="svg-fig">
            <Defs />
            <line x1="20" y1="80" x2="400" y2="80" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" />
            <path
              d="M20,80 C50,30 80,30 110,80 C140,130 170,130 200,80 C230,30 260,30 290,80 C320,130 350,130 380,80"
              fill="none"
              stroke={ACCENT}
              strokeWidth="3"
            />
            <line x1="300" y1="80" x2="370" y2="80" stroke={WAVE_R} strokeWidth="3" markerEnd="url(#arR)" />
            <text x="345" y="72" fill={WAVE_R} fontSize="13" textAnchor="middle">v</text>
            <line x1="95" y1="55" x2="95" y2="30" stroke={NODE} strokeWidth="2" markerEnd="url(#arN)" />
            <line x1="95" y1="105" x2="95" y2="130" stroke={NODE} strokeWidth="2" markerEnd="url(#arN)" />
            <text x="95" y="22" fill={NODE} fontSize="12" textAnchor="middle">A</text>
            <text x="200" y="148" fill={TXT} fontSize="12" textAnchor="middle">poloha x →</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Stojaté vlnění — vlna, která stojí na místě">
        <p>
          <Term id="stojate-vlneni">Stojaté vlnění</Term> vypadá, jako by vlna nikam neběžela —
          jen na místě „dýchá" nahoru a dolů. Některá místa se vůbec nehnou, jiná kmitají naplno.
        </p>
        <ul>
          <li>
            <b>Všechny body kmitají se stejnou fází</b> (nahoru jdou všechny naráz), ale{' '}
            <b>s různou amplitudou</b> — to je přesný opak postupného vlnění.
          </li>
          <li>
            Fáze je <b>funkcí jen času</b>; amplituda je <b>funkcí jen polohy</b> (kde stojíš,
            takovou máš velikost výkyvu — a ta se nemění).
          </li>
        </ul>
        <p>Dvě jména, která musíš umět ukázat na obrázku:</p>
        <ul>
          <li><Term id="uzel">Uzel</Term> = bod, který <b>neustále nekmitá</b> (výchylka je pořád nula).</li>
          <li><Term id="kmitna">Kmitna</Term> = bod, který kmitá <b>s největší amplitudou</b>.</li>
        </ul>

        <Figure caption="Stojaté vlnění na struně. Uzly (oranžově) se nehýbou; kmitny (zeleně) kmitají naplno. Struna jen kmitá nahoru dolů mezi krajními polohami — vlna se nikam neposouvá.">
          <svg viewBox="0 0 440 170" className="svg-fig">
            <Defs />
            <line x1="20" y1="85" x2="420" y2="85" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" />
            {/* dve krajni polohy struny (obalka) */}
            <path
              d="M40,85 C70,35 110,35 140,85 C170,135 210,135 240,85 C270,35 310,35 340,85 C370,135 410,135 420,85"
              fill="none"
              stroke={ANTI}
              strokeWidth="2.5"
            />
            <path
              d="M40,85 C70,135 110,135 140,85 C170,35 210,35 240,85 C270,135 310,135 340,85 C370,35 410,35 420,85"
              fill="none"
              stroke={ANTI}
              strokeWidth="2.5"
              opacity="0.55"
            />
            {/* uzly: x = 40, 140, 240, 340 */}
            {[40, 140, 240, 340].map((x) => (
              <circle key={x} cx={x} cy="85" r="5" fill={NODE} />
            ))}
            <text x="40" y="78" fill={NODE} fontSize="12" textAnchor="middle">uzel</text>
            <text x="140" y="78" fill={NODE} fontSize="12" textAnchor="middle">uzel</text>
            {/* kmitny: x = 90, 190, 290, 390 */}
            <line x1="90" y1="45" x2="90" y2="58" stroke={ANTI} strokeWidth="2" markerEnd="url(#arK)" />
            <text x="90" y="40" fill={ANTI} fontSize="12" textAnchor="middle">kmitna</text>
            <line x1="290" y1="45" x2="290" y2="58" stroke={ANTI} strokeWidth="2" markerEnd="url(#arK)" />
            <text x="290" y="40" fill={ANTI} fontSize="12" textAnchor="middle">kmitna</text>
            {/* vlnova delka: od uzlu k uzlu pres dva = lambda */}
            <line x1="40" y1="150" x2="240" y2="150" stroke={ACCENT} strokeWidth="1.5" markerStart="url(#arA)" markerEnd="url(#arA)" />
            <text x="140" y="165" fill={ACCENT} fontSize="12" textAnchor="middle">λ (vzdálenost uzel–uzel je λ/2)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Jak stojaté vlnění vzniká (klikej Další →)">
        <p>
          Stojaté vlnění vznikne, když se <b>potkají dvě stejné vlny jdoucí proti sobě</b>. Nejčastěji
          tak, že vlna dorazí na <b>konec</b> (např. uchycený konec struny), <b>odrazí se</b> a běží
          zpátky — a tam se sčítá (<Concept id="superpozice">skládá</Concept>) se sebou samou.
        </p>

        <StepFigure
          title="Vznik stojatého vlnění odrazem na konci"
          steps={[
            {
              label: 'vlna jde doprava',
              caption: <>Po struně běží postupná vlna doprava (červeně) směrem ke zdi (pevný konec).</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs />
                  <line x1="20" y1="90" x2="400" y2="90" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" />
                  <rect x="400" y="40" width="14" height="100" fill={MUTED} />
                  <path d="M20,90 C50,45 80,45 110,90 C140,135 170,135 200,90 C230,45 260,45 290,90 C320,135 350,135 380,90" fill="none" stroke={WAVE_R} strokeWidth="3" />
                  <line x1="150" y1="115" x2="230" y2="115" stroke={WAVE_R} strokeWidth="3" markerEnd="url(#arR)" />
                  <text x="190" y="135" fill={WAVE_R} fontSize="13" textAnchor="middle">postupná vlna →</text>
                </svg>
              ),
            },
            {
              label: 'odraz na konci',
              caption: <>Na konci se vlna <b>odrazí</b> a vrací se doleva (modře). Teď máme dvě vlny jdoucí <b>proti sobě</b>.</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs />
                  <line x1="20" y1="90" x2="400" y2="90" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" />
                  <rect x="400" y="40" width="14" height="100" fill={MUTED} />
                  <path d="M20,90 C50,45 80,45 110,90 C140,135 170,135 200,90 C230,45 260,45 290,90 C320,135 350,135 380,90" fill="none" stroke={WAVE_R} strokeWidth="2.5" opacity="0.85" />
                  <path d="M20,90 C50,135 80,135 110,90 C140,45 170,45 200,90 C230,135 260,135 290,90 C320,45 350,45 380,90" fill="none" stroke={WAVE_L} strokeWidth="2.5" opacity="0.85" />
                  <line x1="280" y1="120" x2="200" y2="120" stroke={WAVE_L} strokeWidth="3" markerEnd="url(#arL)" />
                  <text x="240" y="138" fill={WAVE_L} fontSize="13" textAnchor="middle">← odražená vlna</text>
                </svg>
              ),
            },
            {
              label: 'sečtou se',
              caption: <>Obě vlny se <b>sečtou</b> (superpozice). V některých místech se trvale vyruší → <b>uzly</b>; mezi nimi se trvale zesílí → <b>kmitny</b>.</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs />
                  <line x1="20" y1="90" x2="420" y2="90" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M40,90 C70,40 110,40 140,90 C170,140 210,140 240,90 C270,40 310,40 340,90 C370,140 410,140 420,90" fill="none" stroke={ANTI} strokeWidth="2.8" />
                  <path d="M40,90 C70,140 110,140 140,90 C170,40 210,40 240,90 C270,140 310,140 340,90 C370,40 410,40 420,90" fill="none" stroke={ANTI} strokeWidth="2.8" opacity="0.5" />
                  {[40, 140, 240, 340].map((x) => (
                    <circle key={x} cx={x} cy="90" r="5" fill={NODE} />
                  ))}
                  <text x="40" y="82" fill={NODE} fontSize="11" textAnchor="middle">uzel</text>
                  <line x1="90" y1="50" x2="90" y2="62" stroke={ANTI} strokeWidth="2" markerEnd="url(#arK)" />
                  <text x="90" y="45" fill={ANTI} fontSize="11" textAnchor="middle">kmitna</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Aby vlny daly pěkné stojaté vlnění, musejí mít <b>stejnou amplitudu, frekvenci a <Concept id="fazova-rychlost">fázovou
          rychlost</Concept></b> a jít <b>opačným směrem</b> (proto je odraz tak praktický — odražená vlna je
          ta původní, jen otočená).
        </p>
      </Section>

      <Section title="Kde to potkáš (příklady do odpovědi)">
        <ul>
          <li><b>Struna</b> kytary, houslí — kmitá mezi dvěma pevnými konci (na koncích jsou uzly).</li>
          <li><b>Membrána</b> bubnu — dvourozměrná obdoba struny.</li>
          <li><b>Vzduchový sloupec</b> ve flétně či píšťale (stojaté zvukové vlnění).</li>
        </ul>
        <p>
          Mimochodem, vzdálenost dvou sousedních uzlů je vždy <M>{'\\lambda/2'}</M> (půl vlnové
          délky) — proto se na struně délky <M>{'L'}</M> „vejdou" jen určité tóny.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>Nezaměň, co je stejné a co různé.</b> Postupné: <b>stejná amplituda</b>, různá fáze.
            Stojaté: <b>stejná fáze</b>, různá amplituda. Je to přesně naopak — pomůcka: stojaté
            „stojí", takže body jdou hezky <b>spolu (ve fázi)</b>.
          </li>
          <li>
            Stojaté vlnění vzniká <Concept id="interference">interferencí</Concept> <b>dvou vln opačného směru</b> (typicky odrazem na
            konci) — ne dvou vln stejného směru.
          </li>
          <li>
            <b>Uzel</b> = nekmitá (nula), <b>kmitna</b> = kmitá nejvíc. Lidi je často prohodí, protože
            „kmitna" zní jako „malá" — opak je pravdou.
          </li>
          <li>
            Postupné vlnění přenáší <b>energii, ne látku</b> — tuhle větu zkoušející slyší rád.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Rozlišit postupné a stojaté vlnění (co je stejné a co různé — amplituda vs. fáze).',
          'Vysvětlit, že postupné vlnění přenáší energii, ne látku.',
          'Definovat uzel (nekmitá) a kmitnu (max. amplituda) a ukázat je na obrázku.',
          'Popsat, jak stojaté vlnění vzniká: interferencí dvou vln opačného směru / odrazem na konci.',
          'Uvést příklady stojatého vlnění (struna, membrána, vzduchový sloupec).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Čím se liší postupné a stojaté vlnění z hlediska amplitudy a fáze?',
            a: (
              <>
                <b>Postupné:</b> všechny body mají <b>stejnou amplitudu</b>, ale <b>různou fázi</b>.{' '}
                <b>Stojaté:</b> všechny body mají <b>stejnou fázi</b>, ale <b>různou amplitudu</b>.
                Je to přesně naopak.
              </>
            ),
          },
          {
            q: 'Co je uzel a co kmitna stojatého vlnění?',
            a: (
              <>
                <b>Uzel</b> je místo, které <b>neustále nekmitá</b> (výchylka je pořád nulová).{' '}
                <b>Kmitna</b> je místo s <b>neustále maximální amplitudou</b>. Vzdálenost dvou
                sousedních uzlů je <M>{'\\lambda/2'}</M>.
              </>
            ),
          },
          {
            q: 'Jak stojaté vlnění vznikne?',
            a: (
              <>
                Interferencí (<Concept id="superpozice">skládáním</Concept>) <b>dvou vln opačného
                směru</b> o stejné amplitudě a frekvenci — typicky tak, že vlna dorazí na konec
                prostředí, <b>odrazí se</b> a běží zpět proti vlně původní.
              </>
            ),
          },
          {
            q: 'Přenáší postupné vlnění s sebou i látku (např. vodu)?',
            a: (
              <>
                Ne. Přenáší se jen <b>energie</b> (a tvar vlny). Jednotlivé body kmitají kolem své
                rovnovážné polohy a zůstávají na místě — voda neputuje s vlnou.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
