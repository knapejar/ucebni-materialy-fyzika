import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.6'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'interference': { lesson: '3.6', label: 'interference vlnění', short: 'Skládání vln: výsledná výchylka = součet okamžitých výchylek (princip superpozice).' },
  'drahovy-rozdil': { lesson: '3.6', label: 'dráhový rozdíl', short: 'Rozdíl drah dvou vln do daného místa. Sudý počet půlvln → maximum, lichý → minimum.' },
  'interferencni-maximum': { lesson: '3.6', label: 'interferenční maximum', short: 'Vlny se zesilují (jsou ve fázi). Dráhový rozdíl = sudý počet půlvln, tj. celý počet vlnových délek.' },
  'interferencni-minimum': { lesson: '3.6', label: 'interferenční minimum', short: 'Vlny se vyruší (jsou v protifázi). Dráhový rozdíl = lichý počet půlvln.' },
  'vlnove-klubko': { lesson: '3.6', label: 'vlnové klubko', short: 'Superpozice vln blízkých (spojitě rozložených) frekvencí; přenáší energii grupovou rychlostí.' },
  'fazova-rychlost': { lesson: '3.6', label: 'fázová rychlost', short: 'w = ω/k — rychlost postupu místa se stejnou fází (jednoho hřebene nosné vlny).' },
  'grupova-rychlost': { lesson: '3.6', label: 'grupová rychlost', short: 'v_g = dω/dk — rychlost postupu obálky (místa se stejnou amplitudou); přenáší energii.' },
}

/* Šipky pro SVG (definice markerů). */
const ACC = '#a78bfa'   // akcent tématu
const TXT = '#e8ecf8'   // světlý text/tahy
const W1 = '#67e8f9'    // vlna 1
const W2 = '#fbbf24'    // vlna 2
const SUM = '#f472b6'   // výsledná vlna
const GROUP = '#34d399' // grupová (obálka)
const AXIS = '#5a6488'

function Defs({ color, id: mid }: { color: string; id: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Když se na jednom místě potkají dvě vlny, sečtou se. Někde se zesílí, jinde vyruší — a to
        celé řídí jediná věc: <Term id="drahovy-rozdil">dráhový rozdíl</Term>. U zkoušky se ptají na podmínku maxima a
        minima, na rozdíl <Term>fázové</Term> a <Term>grupové</Term> rychlosti a na vlnové klubko.
        Naučíš se to tady za pár minut a chytáky budeš mít přečtené dopředu.
      </p>

      <Section title="Interference = vlny se sčítají (princip superpozice)">
        <p>
          Dvě vlnění se v prostoru navzájem neruší ani „nepřekážejí" — prostě se v každém bodě a
          každém okamžiku <Term>sečtou jejich okamžité výchylky</Term>. Tomu se říká{' '}
          <Concept id="superpozice">princip superpozice</Concept>. (Pozor: výchylka je vektor, takže u prostorových vln se
          sčítá vektorově — se směrem.)
        </p>
        <p>
          Skládání vln stejné frekvence (a stejné polarizace) nazýváme{' '}
          <Term id="interference">interference</Term>. Výsledek závisí jen na tom, <b>jak jsou vlny vůči sobě fázově
          posunuté</b> — a to v daném místě určuje <Term>dráhový rozdíl</Term> <M>{'\\Delta'}</M>,
          tedy o kolik delší dráhu urazila jedna vlna oproti druhé.
        </p>

        <Figure caption="Vlevo: vlny ve fázi se sečtou na dvojnásobek (maximum). Vpravo: vlny v protifázi se vyruší (minimum).">
          <svg viewBox="0 0 700 230" className="svg-fig">
            {/* LEVÝ panel: zesílení */}
            <line x1="20" y1="60" x2="320" y2="60" stroke={AXIS} strokeWidth="1" />
            {/* dvě vlny ve fázi (polovina amplitudy) */}
            <path d="M20,60 q37.5,-22 75,0 q37.5,22 75,0 q37.5,-22 75,0 q37.5,22 75,0" fill="none" stroke={W1} strokeWidth="2.5" />
            <path d="M20,63 q37.5,-22 75,0 q37.5,22 75,0 q37.5,-22 75,0 q37.5,22 75,0" fill="none" stroke={W2} strokeWidth="2.5" />
            {/* výsledná vlna dvojnásobná */}
            <path d="M20,150 q37.5,-44 75,0 q37.5,44 75,0 q37.5,-44 75,0 q37.5,44 75,0" fill="none" stroke={SUM} strokeWidth="3.5" />
            <text x="170" y="30" fill={TXT} fontSize="14" textAnchor="middle">ve fázi → zesílí</text>
            <text x="328" y="55" fill={W1} fontSize="12">vlna 1</text>
            <text x="328" y="70" fill={W2} fontSize="12">vlna 2</text>
            <text x="170" y="205" fill={SUM} fontSize="14" textAnchor="middle" fontWeight="700">MAXIMUM</text>

            {/* PRAVÝ panel: vyrušení */}
            <line x1="380" y1="80" x2="680" y2="80" stroke={AXIS} strokeWidth="1" />
            <path d="M380,80 q37.5,-26 75,0 q37.5,26 75,0 q37.5,-26 75,0 q37.5,26 75,0" fill="none" stroke={W1} strokeWidth="2.5" />
            <path d="M380,80 q37.5,26 75,0 q37.5,-26 75,0 q37.5,26 75,0 q37.5,-26 75,0" fill="none" stroke={W2} strokeWidth="2.5" />
            {/* výsledek = nula */}
            <line x1="380" y1="150" x2="680" y2="150" stroke={SUM} strokeWidth="3.5" />
            <text x="530" y="30" fill={TXT} fontSize="14" textAnchor="middle">v protifázi → vyruší</text>
            <text x="530" y="205" fill={SUM} fontSize="14" textAnchor="middle" fontWeight="700">MINIMUM (= 0)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Podmínka maxima a minima — tohle umět nazpaměť">
        <p>
          Celá podmínka stojí na jediné otázce: <b>kolik půlvln se vejde do dráhového rozdílu?</b>
        </p>
        <ul className="biglist">
          <li>
            <b>Sudý počet půlvln</b> → vlny dorazí <Term>ve fázi</Term> →{' '}
            <Term id="interferencni-maximum">interferenční maximum</Term> (zesílí se).
          </li>
          <li>
            <b>Lichý počet půlvln</b> → vlny dorazí <Term>v protifázi</Term> →{' '}
            <Term id="interferencni-minimum">interferenční minimum</Term> (vyruší se).
          </li>
        </ul>
        <p>Zapsáno přes <Concept id="vlnova-delka">vlnovou délku</Concept> <M>{'\\lambda'}</M> (kde <M>{'k=0,1,2,\\dots'}</M>):</p>
        <MB>{'\\Delta = 2k\\,\\frac{\\lambda}{2}=k\\lambda \\quad\\Rightarrow\\quad \\textbf{maximum}'}</MB>
        <MB>{'\\Delta = (2k+1)\\,\\frac{\\lambda}{2} \\quad\\Rightarrow\\quad \\textbf{minimum}'}</MB>
        <p>
          Pomůcka: <b>sudý počet půlvln = celý počet vlnových délek</b> (<M>{'k\\lambda'}</M>) — vlny
          „sednou" hřeben na hřeben. Lichý počet půlvln znamená posun o půl vlny, hřeben padne na
          dolík, a je po amplitudě.
        </p>

        <StepFigure
          title="Proč dráhový rozdíl rozhoduje (dva zdroje, jedno místo)"
          steps={[
            {
              label: 'dva zdroje',
              caption: <>Dva zdroje <M>{'S_1'}</M> a <M>{'S_2'}</M> vysílají stejné vlny. Sledujeme jedno místo <b>P</b>. Důležité je, o kolik se liší dráhy <M>{'S_1P'}</M> a <M>{'S_2P'}</M>.</>,
              content: (
                <svg viewBox="0 0 460 220" className="svg-fig">
                  <Defs color={ACC} id="ar1" />
                  <circle cx="50" cy="70" r="9" fill={W1} />
                  <text x="50" y="55" fill={TXT} fontSize="13" textAnchor="middle">S₁</text>
                  <circle cx="50" cy="160" r="9" fill={W2} />
                  <text x="50" y="185" fill={TXT} fontSize="13" textAnchor="middle">S₂</text>
                  <circle cx="410" cy="115" r="7" fill={ACC} />
                  <text x="425" y="119" fill={ACC} fontSize="14" textAnchor="start">P</text>
                  <line x1="58" y1="73" x2="402" y2="112" stroke={W1} strokeWidth="2" />
                  <line x1="58" y1="157" x2="402" y2="118" stroke={W2} strokeWidth="2" />
                </svg>
              ),
            },
            {
              label: 'maximum',
              caption: <>Dráhový rozdíl je <b>celý počet vlnových délek</b> (sudý počet půlvln). Vlny dorazí ve fázi — hřeben na hřeben — a v bodě P je <b>maximum</b>.</>,
              content: (
                <svg viewBox="0 0 460 220" className="svg-fig">
                  <line x1="20" y1="70" x2="320" y2="70" stroke={AXIS} strokeWidth="1" />
                  <path d="M20,70 q30,-22 60,0 q30,22 60,0 q30,-22 60,0 q30,22 60,0 q30,-22 60,0" fill="none" stroke={W1} strokeWidth="2.5" />
                  <path d="M20,73 q30,-22 60,0 q30,22 60,0 q30,-22 60,0 q30,22 60,0 q30,-22 60,0" fill="none" stroke={W2} strokeWidth="2.5" />
                  <text x="170" y="135" fill={TXT} fontSize="13" textAnchor="middle">Δ = k·λ (= sudý počet λ/2)</text>
                  <text x="170" y="165" fill={SUM} fontSize="16" textAnchor="middle" fontWeight="700">→ MAXIMUM</text>
                </svg>
              ),
            },
            {
              label: 'minimum',
              caption: <>Dráhový rozdíl je <b>lichý počet půlvln</b>. Jedna vlna je posunutá o půl vlny — hřeben padne na dolík — a v bodě P se vlny <b>vyruší</b> (minimum).</>,
              content: (
                <svg viewBox="0 0 460 220" className="svg-fig">
                  <line x1="20" y1="70" x2="320" y2="70" stroke={AXIS} strokeWidth="1" />
                  <path d="M20,70 q30,-22 60,0 q30,22 60,0 q30,-22 60,0 q30,22 60,0 q30,-22 60,0" fill="none" stroke={W1} strokeWidth="2.5" />
                  <path d="M20,70 q30,22 60,0 q30,-22 60,0 q30,22 60,0 q30,-22 60,0 q30,22 60,0" fill="none" stroke={W2} strokeWidth="2.5" />
                  <text x="170" y="135" fill={TXT} fontSize="13" textAnchor="middle">Δ = (2k+1)·λ/2</text>
                  <text x="170" y="165" fill={SUM} fontSize="16" textAnchor="middle" fontWeight="700">→ MINIMUM</text>
                </svg>
              ),
            },
          ]}
        />

        <p>
          Příklady z praxe: kytarová struna a housle (skládání odražených vln), antireflexní vrstvy
          na čočkách objektivů, barevné olejové skvrny na vodě, dva oblázky hozené do vody za sebou.
        </p>
      </Section>

      <Section title="Pozor na energii — typový chyták">
        <p>
          Když vznikne minimum, kam se „ztratila" energie? <b>Nikam.</b> Při interferenci se energie
          jen <Term>přerozdělí</Term> v prostoru — v maximech je jí víc, v minimech míň — ale{' '}
          <Term>celková energie se zachovává</Term>. To, co ubyde v minimech, přibyde v maximech.
        </p>
        <Callout kind="pozor" title="Nepleť si vyrušení s mizením energie">
          „Vyrušení" v minimu znamená nulovou výchylku v <i>tom</i> místě, ne zmizení energie ze
          soustavy. Energie se přesunula do maxim.
        </Callout>
      </Section>

      <Section title="Dvě vlny blízkých frekvencí → vlnové klubko">
        <p>
          Teď složíme dvě vlny, které mají skoro stejnou frekvenci (malý rozdíl{' '}
          <M>{'\\Delta\\omega'}</M> a <M>{'\\Delta k'}</M>). Vyjde rychlá „nosná" vlna, jejíž{' '}
          amplituda je pomalu modulovaná do balíčků — to jsou <Concept id="razy">rázy</Concept>, respektive{' '}
          <Term id="vlnove-klubko">vlnové klubko</Term>. Amplituda výsledku závisí na čase i na poloze:
        </p>
        <MB>{'u(x,t)=2A\\cos\\!\\Big(\\tfrac{\\Delta\\omega}{2}\\,t-\\tfrac{\\Delta k}{2}\\,x\\Big)\\cdot\\cos(\\bar\\omega\\,t-\\bar k\\,x)'}</MB>
        <p>
          První kosinus je <b>pomalá obálka</b> (klubko), druhý je <b>rychlá nosná vlna</b> uvnitř.
          A tady přichází klíčové rozlišení dvou rychlostí:
        </p>
        <ul className="biglist">
          <li>
            <Term id="fazova-rychlost">Fázová rychlost</Term> <M>{'w=\\dfrac{\\bar\\omega}{\\bar k}'}</M> = rychlost
            postupu místa se <b>stejnou fází</b> (jednoho hřebene nosné vlny).
          </li>
          <li>
            <Term id="grupova-rychlost">Grupová rychlost</Term> <M>{'v_g=\\dfrac{\\mathrm d\\omega}{\\mathrm dk}'}</M> =
            rychlost postupu místa se <b>stejnou amplitudou</b> (postup obálky / klubka).{' '}
            <b>Tudy se přenáší energie.</b>
          </li>
        </ul>

        <StepFigure
          title="Fázová vs. grupová rychlost (klubko se posouvá v čase)"
          steps={[
            {
              label: 'klubko teď',
              caption: <>Modrá obálka = <b>klubko</b> (kde je amplituda velká). Uvnitř kmitá rychlá nosná vlna. Sledujeme jeden <span style={{ color: GROUP }}>vrchol obálky</span> a jeden <span style={{ color: SUM }}>hřeben nosné vlny</span>.</>,
              content: <Packet shiftEnv={0} shiftPhase={0} />,
            },
            {
              label: 'o chvíli později',
              caption: <>Po čase <M>{'\\Delta t'}</M>: <span style={{ color: SUM }}>hřeben nosné vlny</span> (fáze) ujel dál než <span style={{ color: GROUP }}>vrchol obálky</span> (klubko). Fázová rychlost zde &gt; grupová.</>,
              content: <Packet shiftEnv={40} shiftPhase={75} />,
            },
            {
              label: 'co přenáší energii',
              caption: <>Energii (a u klubka i „informaci o poloze") nese <b>obálka</b> — tedy <span style={{ color: GROUP }}><b>grupová rychlost</b></span>. Fáze sama o sobě energii nepřenáší.</>,
              content: <Packet shiftEnv={80} shiftPhase={150} energy />,
            },
          ]}
        />

        <p>
          Vztah obou rychlostí dává <Term>disperzní vztah</Term>{' '}
          <M>{'\\omega(k)=k\\,w(k)'}</M>. V <b>nedisperzním</b> prostředí je{' '}
          <M>{'w(k)=\\text{konst}'}</M> a obě rychlosti jsou stejné (<M>{'v_g=w'}</M>); v{' '}
          <b>disperzním</b> prostředí se liší (<M>{'v_g\\neq w'}</M>). Učebnicový příklad: mořské
          vlny na hluboké vodě — amplituda (klubko) se šíří jen poloviční rychlostí oproti fázi.
        </p>
      </Section>

      <Section title="Vlnové klubko, lokalizace a most ke kvantové fyzice">
        <p>
          <Term>Vlnové klubko</Term> obecně vznikne superpozicí vln se <b>spojitě rozloženými</b>{' '}
          frekvencemi. Šíří se a přenáší energii <b>grupovou rychlostí</b>. Jak dobře je klubko
          „lokalizované" (jak je úzké) souvisí s tím, jak široký rozsah frekvencí (resp. vlnových
          čísel <M>{'k'}</M>) jsme namíchali:
        </p>
        <ul>
          <li><b>Širší rozsah frekvencí</b> (velké <M>{'\\Delta k'}</M>) → <b>menší, lépe lokalizované</b> klubko.</li>
          <li><b>Užší rozsah frekvencí</b> (malé <M>{'\\Delta k'}</M>) → <b>větší, rozplizlé</b> klubko, horší lokalizace.</li>
        </ul>
        <p>Tato „směna" se dá zapsat jako</p>
        <MB>{'\\Delta x\\cdot\\Delta k \\approx 1'}</MB>
        <p>
          a je to přímý předchůdce <b><Concept id="heisenberg-relace">Heisenbergovy relace neurčitosti</Concept></b>. V kvantové mechanice
          popisuje pohybující se částici právě vlnové klubko: čím přesněji chceš znát její polohu
          (úzké klubko), tím méně přesně je určená její <Concept id="hybnost">hybnost</Concept> (široký rozsah <M>{'k'}</M>) — a
          naopak. Proto se říká, že částici nelze mít zároveň přesně lokalizovanou v poloze i v
          hybnosti.
        </p>
        <Figure caption="Úzký rozsah k (vlevo) → široké, rozmazané klubko. Široký rozsah k (vpravo) → úzké, ostře lokalizované klubko. Δx·Δk ≈ 1.">
          <svg viewBox="0 0 700 200" className="svg-fig">
            {/* LEVÝ: úzké Δk, široké klubko */}
            <line x1="20" y1="100" x2="320" y2="100" stroke={AXIS} strokeWidth="1" />
            <path d="M20,100 q15,-3 30,0 q15,3 30,0 q15,-22 30,0 q15,22 30,0 q15,-45 30,0 q15,45 30,0 q15,-22 30,0 q15,22 30,0 q15,-3 30,0 q15,3 30,0"
              fill="none" stroke={W1} strokeWidth="2" />
            {/* obálka */}
            <path d="M20,100 q150,-70 300,0" fill="none" stroke={GROUP} strokeWidth="2" strokeDasharray="5 4" />
            <line x1="80" y1="160" x2="260" y2="160" stroke={GROUP} strokeWidth="2" markerStart="url(#axL)" markerEnd="url(#axR2)" />
            <Defs color={GROUP} id="axR2" />
            <text x="170" y="180" fill={GROUP} fontSize="13" textAnchor="middle">velké Δx (rozmazané)</text>
            <text x="170" y="30" fill={TXT} fontSize="13" textAnchor="middle">úzký rozsah k</text>

            {/* PRAVÝ: široké Δk, úzké klubko */}
            <line x1="380" y1="100" x2="680" y2="100" stroke={AXIS} strokeWidth="1" />
            <path d="M380,100 h120 q10,-50 20,0 q10,50 20,0 q10,-50 20,0 h120"
              fill="none" stroke={W2} strokeWidth="2" />
            <path d="M500,100 q30,-58 60,0" fill="none" stroke={GROUP} strokeWidth="2" strokeDasharray="5 4" />
            <line x1="500" y1="160" x2="560" y2="160" stroke={GROUP} strokeWidth="2" markerStart="url(#axL)" markerEnd="url(#axR3)" />
            <Defs color={GROUP} id="axR3" />
            <text x="530" y="180" fill={GROUP} fontSize="13" textAnchor="middle">malé Δx (ostré)</text>
            <text x="530" y="30" fill={TXT} fontSize="13" textAnchor="middle">široký rozsah k</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            Při interferenci se energie <b>přerozdělí</b> (víc do maxim, míň do minim), ale{' '}
            <b>celková energie se zachová</b>. Minimum neznamená, že energie zmizela.
          </li>
          <li>
            Vlnové klubko (a tedy energii) přenáší <b>grupová</b> rychlost, ne fázová. Fázová je jen
            rychlost postupu jednoho hřebene nosné vlny.
          </li>
          <li>
            <b>Sudý</b> počet půlvln = maximum, <b>lichý</b> = minimum. Nezaměň to (sudý počet půlvln
            je celý počet vlnových délek → hřeben na hřeben).
          </li>
          <li>
            <b>Užší</b> rozsah frekvencí → <b>větší</b> klubko a <b>horší</b> lokalizace. (Intuitivně
            naopak, ale platí <M>{'\\Delta x\\cdot\\Delta k\\approx 1'}</M>.)
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat podmínku maxima (sudý počet půlvln = k·λ) a minima (lichý počet půlvln) přes dráhový rozdíl.',
          'Vysvětlit, že při interferenci se energie přerozdělí, ale celková se zachová.',
          'Rozlišit fázovou rychlost (stejná fáze, w = ω/k) a grupovou (stejná amplituda, v_g = dω/dk).',
          'Vědět, že vlnové klubko se šíří a přenáší energii grupovou rychlostí.',
          'Popsat vlnové klubko a vztah Δx·Δk ≈ 1 jako most k relaci neurčitosti.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaká je podmínka pro interferenční maximum a minimum (přes dráhový rozdíl)?',
            a: <>Maximum, je-li dráhový rozdíl <b>sudý počet půlvln</b> = celý počet vlnových délek <M>{'\\Delta=k\\lambda'}</M> (vlny ve fázi). Minimum, je-li <b>lichý počet půlvln</b> <M>{'\\Delta=(2k+1)\\tfrac{\\lambda}{2}'}</M> (vlny v protifázi).</>,
          },
          {
            q: 'Co se při interferenci děje s energií? Zmizí v místech minima?',
            a: <>Nezmizí. Energie se jen <b>přerozdělí</b> — v maximech jí je víc, v minimech méně — ale <b>celková energie soustavy se zachovává</b>.</>,
          },
          {
            q: 'Jaký je rozdíl mezi fázovou a grupovou rychlostí a kterou se přenáší energie?',
            a: <>Fázová <M>{'w=\\omega/k'}</M> = rychlost postupu místa se <b>stejnou fází</b> (hřebene nosné vlny). Grupová <M>{'v_g=\\mathrm d\\omega/\\mathrm dk'}</M> = rychlost postupu místa se <b>stejnou amplitudou</b> (obálky). Energii (a vlnové klubko) přenáší <b>grupová</b> rychlost.</>,
          },
          {
            q: 'Jak souvisí šířka klubka s rozsahem frekvencí a co z toho plyne pro kvantovou fyziku?',
            a: <>Platí <M>{'\\Delta x\\cdot\\Delta k\\approx 1'}</M>: <b>užší</b> rozsah frekvencí → <b>větší</b>, hůř lokalizované klubko; širší rozsah → ostřejší klubko. Je to předchůdce <b>Heisenbergovy relace neurčitosti</b> — částici nelze mít přesně určenou v poloze i hybnosti zároveň.</>,
          },
        ]}
      />
    </>
  )
}

/* Pomocná ilustrace vlnového klubka pro StepFigure: nosná vlna v gaussovské obálce. */
function Packet({ shiftEnv, shiftPhase, energy = false }: { shiftEnv: number; shiftPhase: number; energy?: boolean }) {
  const W = 560
  const mid = 95
  const envCenter = 150 + shiftEnv
  const envWidth = 110
  // body nosné vlny modulované obálkou
  const pts: string[] = []
  for (let x = 20; x <= W - 20; x += 4) {
    const env = Math.exp(-Math.pow((x - envCenter) / envWidth, 2))
    const y = mid - 52 * env * Math.cos((x - 20 - shiftPhase) * 0.18)
    pts.push(`${x},${y.toFixed(1)}`)
  }
  // horní a dolní obálka
  const top: string[] = []
  const bot: string[] = []
  for (let x = 20; x <= W - 20; x += 6) {
    const env = Math.exp(-Math.pow((x - envCenter) / envWidth, 2))
    top.push(`${x},${(mid - 52 * env).toFixed(1)}`)
    bot.push(`${x},${(mid + 52 * env).toFixed(1)}`)
  }
  // hřeben nosné vlny, který sledujeme (nejbližší k fázovému značníku)
  const phaseX = 150 + shiftPhase * 0.55
  return (
    <svg viewBox="0 0 560 200" className="svg-fig">
      <Defs color={GROUP} id="apg" />
      <line x1="20" y1={mid} x2={W - 20} y2={mid} stroke={AXIS} strokeWidth="1" />
      {/* obálka (klubko) */}
      <polyline points={top.join(' ')} fill="none" stroke={GROUP} strokeWidth="2" strokeDasharray="5 4" />
      <polyline points={bot.join(' ')} fill="none" stroke={GROUP} strokeWidth="2" strokeDasharray="5 4" />
      {/* nosná vlna */}
      <polyline points={pts.join(' ')} fill="none" stroke={W1} strokeWidth="2.5" />
      {/* značník vrcholu obálky (grupová) */}
      <line x1={envCenter} y1={mid - 70} x2={envCenter} y2={mid + 70} stroke={GROUP} strokeWidth="2" />
      <text x={envCenter} y={mid + 88} fill={GROUP} fontSize="12" textAnchor="middle">vrchol obálky</text>
      {/* značník hřebene nosné vlny (fázová) */}
      <line x1={phaseX} y1={mid - 60} x2={phaseX} y2={mid + 60} stroke={SUM} strokeWidth="2" strokeDasharray="3 3" />
      <text x={phaseX} y={mid - 70} fill={SUM} fontSize="12" textAnchor="middle">hřeben</text>
      {energy && (
        <text x={envCenter} y={mid - 80} fill={GROUP} fontSize="13" textAnchor="middle" fontWeight="700">energie jde sem →</text>
      )}
    </svg>
  )
}
