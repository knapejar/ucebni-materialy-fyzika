import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, ARect, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.1'

/* Pojmy, které tahle lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'kmit': { lesson: '3.1', label: 'kmit', short: 'Periodický pohyb tam a zpět kolem rovnovážné polohy.' },
  'perioda': { lesson: '3.1', label: 'perioda', short: 'Doba T jednoho kmitu; ν = 1/T je frekvence.' },
  'amplituda': { lesson: '3.1', label: 'amplituda', short: 'Maximální výchylka A od rovnovážné polohy.' },
  'harmonicke-kmitani': { lesson: '3.1', label: 'harmonické kmitání', short: 'Výchylka se mění podle sinu/kosinu.' },
  'harmonicky-oscilator': { lesson: '3.1', label: 'harmonický oscilátor', short: 'Soustava, kterou žene kvazielastická síla F = −k·u.' },
  'kvazielasticka-sila': { lesson: '3.1', label: 'kvazielastická síla', short: 'F = −k·u — úměrná výchylce, míří zpět k rovnováze.' },
}

const TXT = '#e8ecf8'
const ACC = '#a78bfa'   // akcent tématu
const FORCE = '#fb7185' // síla
const SPRING = '#9aa6c4'
const BALL = '#f59e0b'
const GRID = '#3a4566'
const EK = '#fb7185'    // kinetická energie
const EP = '#60a5fa'    // potenciální energie

/* Šipka pro SVG. */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Pružina mezi x1 a x2 ve výšce y (klikatá čára). */
function Spring({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  const n = 8
  const dx = (x2 - x1) / n
  let d = `M${x1},${y}`
  for (let k = 0; k < n; k++) {
    const xa = x1 + dx * (k + 0.5)
    const ya = y + (k % 2 === 0 ? -9 : 9)
    d += ` L${xa},${ya}`
  }
  d += ` L${x2},${y}`
  return <path d={d} fill="none" stroke={SPRING} strokeWidth="2.5" />
}

export default function Lesson_3_1() {
  return (
    <>
      <p className="lead">
        Kmity jsou „pohyb tam a zpátky“ — kulička na pružině, kyvadlo, struna. U zkoušky se ptají na{' '}
        <Term>definice</Term> (kmit, perioda, amplituda), na <Concept id="sila">sílu</Concept>, která za tím stojí
        (<M>{'F=-k\\,u'}</M>), a na to, jak se během kmitu <Term>přelévá energie</Term>. Žádné drama —
        tři pojmy, jeden vzoreček a jeden obrázek, a máš body.
      </p>

      <Section title="Tři pojmy, které musíš umět odříkat">
        <p>
          <Term>Kmitání (oscilace)</Term> je pohyb, při kterém se nějaká veličina (třeba výchylka)
          mění <b>kolem rovnovážné polohy</b> a po čase se děj zopakuje. <Concept id="hmotny-bod">Hmotný bod</Concept> vykoná <b>jeden{' '}
          <Term id="kmit">kmit</Term></b>, když projde celou dráhu (z rovnováhy ven, na druhou stranu a zpět) a
          vrátí se do výchozí polohy ve stejném směru pohybu.
        </p>
        <ul className="biglist">
          <li>
            <b><Term id="perioda">Perioda</Term> <M>{'T'}</M></b> = doba jednoho kmitu (v sekundách). Kolikrát za
            sekundu to kmitne, udává <b>frekvence</b> <M>{'\\nu = 1/T'}</M> (v hertzích, <M>{'\\mathrm{Hz}'}</M>).
          </li>
          <li>
            <b><Term id="amplituda">Amplituda</Term> <M>{'A'}</M></b> = <b>maximální výchylka</b> od rovnovážné
            polohy (jak daleko to „vykývne“).
          </li>
          <li>
            <b><Term id="harmonicke-kmitani">Harmonické kmitání</Term></b> = takové, kde se výchylka mění <b>podle sinu (resp.
            kosinu)</b>. To je ten „čistý“, nejjednodušší případ — a přesně ten se počítá.
          </li>
        </ul>
        <Callout kind="tip" title="Slovíčko navíc">
          Polovině kmitu (přechod z jedné krajní polohy do druhé) se říká <b>kyv</b>. Hodí se to umět,
          někdy se na to chytá.
        </Callout>
      </Section>

      <Section title="Odkud se bere sinus? Průmět pohybu po kružnici">
        <p>
          Proč zrovna sinus? Představ si bod, který jezdí <b>rovnoměrně dokola po kružnici</b> o
          poloměru <M>{'A'}</M>. Když sleduješ jen jeho <b>stín na svislé ose</b> (jeho průmět),
          uvidíš přesně harmonické kmitání. Poloměr kružnice je amplituda, jedno oběhnutí je jedna
          perioda. Proklikej si to:
        </p>

        <CircleProjectionScene />
      </Section>

      <Section title="Co kmity žene: kvazielastická síla F = −k·u">
        <p>
          Aby těleso kmitalo, musí na něj působit síla, která ho <b>pořád tlačí zpátky do rovnováhy</b>.
          V rovnováze je nulová, a čím dál ho vychýlíš, tím je větší. Nejjednodušší takovou sílu —{' '}
          <Term id="kvazielasticka-sila">kvazielastickou sílu</Term> — popisuje vzoreček:
        </p>
        <MB>{'\\vec F = -k\\,\\vec u'}</MB>
        <p>
          kde <M>{'\\vec u'}</M> je výchylka z rovnováhy a <M>{'k'}</M> je <b>tuhost</b> (kladná
          konstanta). Soustava, kterou žene právě tahle síla, je <Term id="harmonicky-oscilator">(lineární) harmonický
          oscilátor</Term>.
        </p>

        <Callout kind="pozor" title="Proč tam je MÍNUS (to je celý vtip)">
          Mínus znamená, že síla má <b>opačný směr než výchylka</b> — vždycky míří zpátky k rovnováze.
          Vychýlíš doprava → síla tlačí doleva, a naopak. Proto se těleso nikdy nezastaví v krajní
          poloze, ale vrací se a kmitá dál.
        </Callout>

        <Figure caption="Kvazielastická síla F = −k·u vždy míří proti výchylce u, zpět k rovnováze (čárkovaná osa).">
          <svg viewBox="0 0 460 150" className="svg-fig">
            <Defs id="arF1" color={FORCE} />
            <Defs id="arU1" color={ACC} />
            {/* zeď a podlaha */}
            <line x1="20" y1="20" x2="20" y2="130" stroke={SPRING} strokeWidth="4" />
            <line x1="20" y1="120" x2="440" y2="120" stroke={GRID} strokeWidth="2" />
            {/* rovnovážná poloha */}
            <line x1="190" y1="35" x2="190" y2="120" stroke={TXT} strokeWidth="1.5" strokeDasharray="5,5" />
            <text x="190" y="32" fill={TXT} fontSize="12" textAnchor="middle">rovnováha</text>
            {/* pružina k vychýlenému tělesu */}
            <Spring x1={20} x2={300} y={80} />
            {/* těleso vychýlené doprava */}
            <rect x="300" y="60" width="42" height="42" rx="6" fill={BALL} />
            <text x="321" y="87" fill="#0b1020" fontSize="15" textAnchor="middle" fontWeight="700">m</text>
            {/* výchylka u */}
            <line x1="190" y1="135" x2="321" y2="135" stroke={ACC} strokeWidth="2.5" markerEnd="url(#arU1)" />
            <text x="255" y="150" fill={ACC} fontSize="14" textAnchor="middle">výchylka u</text>
            {/* síla F doleva */}
            <line x1="300" y1="50" x2="220" y2="50" stroke={FORCE} strokeWidth="4" markerEnd="url(#arF1)" />
            <text x="262" y="44" fill={FORCE} fontSize="14" textAnchor="middle">F = −k·u</text>
          </svg>
        </Figure>

        <p>
          Když tu sílu dosadíš do <M>{'\\vec F = m\\vec a'}</M>, dostaneš <b><Concept id="pohybova-rovnice">pohybovou rovnici</Concept></b>{' '}
          oscilátoru:
        </p>
        <MB>{'m\\,\\frac{\\mathrm d^2 u}{\\mathrm d t^2} = -k\\,u'}</MB>
        <p>
          Její řešení je právě ten sinus/kosinus z obrázku s kružnicí. Stačí, když u zkoušky napíšeš
          tvar řešení a budeš umět popsat, co je co:
        </p>
        <MB>{'u(t) = A\\,\\cos(\\omega_0 t + \\varphi_0)'}</MB>
        <ul>
          <li><M>{'A'}</M> — <b>amplituda</b> (maximální výchylka),</li>
          <li><M>{'\\omega_0 = \\sqrt{k/m}'}</M> — <b>vlastní úhlová frekvence</b> (jak rychle to kmitá; tvrdší pružina <M>{'\\Rightarrow'}</M> rychleji, těžší závaží <M>{'\\Rightarrow'}</M> pomaleji),</li>
          <li><M>{'\\varphi_0'}</M> — <b>počáteční fáze</b> (v jaké poloze to bylo v čase <M>{'t=0'}</M>).</li>
        </ul>
      </Section>

      <Section title="Příklady, které u zkoušky padají">
        <ul className="biglist">
          <li>
            <b>Kulička na pružině.</b> Učebnicový oscilátor. Pružina o tuhosti <M>{'k'}</M> je tou
            kvazielastickou silou doslova — táhne kuličku zpět do rovnováhy.
          </li>
          <li>
            <b>Plovoucí kvádr (špalek na vodě).</b> Zatlačíš ho hlouběji → vztlak ho tlačí nahoru;
            vyzvedneš → klesne. Vratná síla je <b>úměrná tomu, o kolik ho vychýlíš</b> z rovnovážné
            hladiny — proto kvádr po stlačení <b>harmonicky kmitá</b> nahoru-dolů.
          </li>
          <li>
            <b>Kyvadlo</b> (pro malé výchylky) nebo <b>obvod cívka + kondenzátor</b> bez odporu — taky
            harmonické oscilátory, jen vratnou silou je tíha, resp. napětí.
          </li>
        </ul>
        <Callout kind="info" title="Obecná pravda na efekt">
          Skoro každá soustava blízko stabilní rovnováhy (v <b>minimu <Concept id="potencialni-energie">potenciální energie</Concept></b>) kmitá
          při malých výchylkách harmonicky. Proto je harmonický oscilátor tak důležitý — je všude.
        </Callout>
      </Section>

      <Section title="Zákon zachování energie: Ep ⇄ Ek">
        <p>
          U ideálního oscilátoru (bez tření) platí <b><Concept id="zachovani-mech-energie">zákon zachování mechanické energie</Concept></b>: celková
          energie <M>{'E = E_p + E_k'}</M> je <b>pořád stejná</b>, jen se neustále <b>přelévá</b> mezi
          potenciální a <Concept id="kineticka-energie">kinetickou</Concept>. Pružina si „schová“ energii do{' '}
          <M>{'E_p = \\tfrac{1}{2}k u^2'}</M>, pohyb je <M>{'E_k = \\tfrac{1}{2}m v^2'}</M>. Proklikej
          si jeden kmit:
        </p>

        <EnergyScene />
        <p>
          Zkráceně: <b>v krajní poloze</b> je všechno v <M>{'E_p'}</M> (stojí, nejvíc napnuté),{' '}
          <b>v rovnováze</b> je všechno v <M>{'E_k'}</M> (nejrychlejší, nenapnuté). Mezi tím se to
          plynule přelévá.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            U vzorce <M>{'F=-k\\,u'}</M> nezapomeň říct <b>proč mínus</b>: síla je <b>přímo úměrná
            výchylce a má opačný směr</b> (míří zpět k rovnováze). Bez té věty to není kompletní.
          </li>
          <li>
            <b>Dokonale pružný míček poskakující na zemi NEkoná lineární harmonické kmity.</b> Sice se
            to opakuje, ale síla, která na míček působí (tíha <M>{'F=mg'}</M>), je <b>konstantní</b> —{' '}
            <b>není úměrná výchylce</b> a nemíří „zpět do rovnováhy“. Chybí kvazielastická síla{' '}
            <M>{'F=-k u'}</M>, takže to harmonický oscilátor není. (Je to otázka „zdůvodněte“, ne
            výpočet — argumentuj silou.)
          </li>
          <li>
            Nepleť si <b>periodu</b> (čas, <M>{'T'}</M>) a <b>amplitudu</b> (vzdálenost, <M>{'A'}</M>).
            A frekvence je <M>{'\\nu=1/T'}</M>, ne naopak v žádném přesmyčce.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat kmit, periodu T (a frekvenci ν = 1/T) a amplitudu A.',
          'Říct, co je harmonické kmitání (výchylka podle sinu) a odkud se bere (průmět pohybu po kružnici).',
          'Napsat sílu LHO F = −k·u a vysvětlit, proč je tam mínus (úměrná výchylce, opačný směr).',
          'Uvést příklad oscilátoru (kulička na pružině, plovoucí kvádr) a popsat vratnou sílu.',
          'Popsat přeměnu Ep ⇄ Ek během kmitu (v krajní poloze max Ep, v rovnováze max Ek; součet konstantní).',
          'Zdůvodnit, proč poskakující pružný míček NENÍ harmonický oscilátor (síla je konstantní, ne úměrná výchylce).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je kvazielastická síla a proč je u F = −k·u znaménko mínus?',
            a: <>Síla úměrná výchylce, která vždy <b>míří zpět k rovnováze</b> (a je konzervativní). Mínus vyjadřuje, že má <b>opačný směr než výchylka</b> <M>{'\\vec u'}</M> — proto těleso pořád vrací do rovnováhy a kmitá.</>,
          },
          {
            q: <>Dokonale pružný míček poskakuje na podlaze. Koná lineární harmonické kmity? Zdůvodněte.</>,
            a: <><b>Ne.</b> Síla na míček je tíhová <M>{'F=mg'}</M> — <b>konstantní</b>, není úměrná výchylce a nemíří „zpět do rovnováhy“. Chybí kvazielastická síla <M>{'F=-k u'}</M>, takže to není lineární harmonický oscilátor (i když je pohyb periodický).</>,
          },
          {
            q: 'Jak se během kmitu mění energie? Kde je maximální Ek a kde Ep?',
            a: <>Celková <M>{'E=E_p+E_k'}</M> je konstantní, jen se přelévá. V <b>krajní poloze</b> (výchylka <M>{'A'}</M>, <M>{'v=0'}</M>) je <b><M>{'E_p'}</M> maximální</b> a <M>{'E_k=0'}</M>. V <b>rovnovážné poloze</b> (výchylka 0, největší rychlost) je <b><M>{'E_k'}</M> maximální</b> a <M>{'E_p=0'}</M>.</>,
          },
          {
            q: <>Co znamenají symboly v zápisu <M>{'u(t)=A\\cos(\\omega_0 t+\\varphi_0)'}</M>?</>,
            a: <><M>{'A'}</M> je amplituda (max. výchylka), <M>{'\\omega_0=\\sqrt{k/m}'}</M> vlastní úhlová frekvence (tuhost <M>{'k'}</M>, hmotnost <M>{'m'}</M>) a <M>{'\\varphi_0'}</M> počáteční fáze (poloha v čase <M>{'t=0'}</M>).</>,
          },
        ]}
      />
    </>
  )
}

/* Pružina jako řetězec path d (klikatá čára x1→x2 ve výšce y). */
function springPath(x1: number, x2: number, y: number) {
  const n = 8
  const dx = (x2 - x1) / n
  let d = `M${x1},${y}`
  for (let k = 0; k < n; k++) {
    const xa = x1 + dx * (k + 0.5)
    const ya = y + (k % 2 === 0 ? -9 : 9)
    d += ` L${xa.toFixed(1)},${ya.toFixed(1)}`
  }
  d += ` L${x2.toFixed(1)},${y}`
  return d
}

/* ------------------------------------------------------------------ *
 *  ANIMOVANÁ SCÉNA: stín bodu obíhajícího kružnici → sinusovka
 *  Bod jede po kružnici, poloměr se otáčí, oranžový stín jede po sinusovce,
 *  čárkovaná spojnice je drží propojené. Fáze: 0, π/4, π/2, 5π/4.
 * ------------------------------------------------------------------ */
const CP_CX = 110, CP_CY = 110, CP_R = 70, CP_AXIS = 250
const CP_PHASES = [0, Math.PI / 4, Math.PI / 2, (5 * Math.PI) / 4]
const cpPx = CP_PHASES.map((th) => +(CP_CX + CP_R * Math.cos(th)).toFixed(2))
const cpPy = CP_PHASES.map((th) => +(CP_CY - CP_R * Math.sin(th)).toFixed(2))
const cpMarkX = CP_PHASES.map((th) => +(CP_AXIS + (th / (2 * Math.PI)) * 200).toFixed(2))
const cpSinePts = (() => {
  const pts: string[] = []
  for (let i = 0; i <= 60; i++) {
    const th = (i / 60) * 2 * Math.PI
    const x = CP_AXIS + (th / (2 * Math.PI)) * 200
    const y = CP_CY - CP_R * Math.sin(th)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return pts.join(' ')
})()

function CircleProjectionScene() {
  return (
    <StepScene
      title="Harmonické kmitání jako stín bodu obíhajícího kružnici"
      viewBox="0 0 490 230"
      captions={[
        <>Bod je „na boku“ kružnice, jeho stín je v <b>rovnovážné poloze</b> (výchylka 0). Fáze <M>{'\\omega_0 t = 0'}</M>.</>,
        <>Bod stoupá, stín se vychyluje nahoru. Výchylka <M>{'u = A\\sin(\\omega_0 t)'}</M> roste.</>,
        <>Bod je nahoře, stín dosáhl <b>maxima = amplitudy</b> <M>{'A'}</M>. Tady se na chvíli zastaví a vrací se.</>,
        <>Bod oběhl dál, stín letí zpět dolů přes rovnováhu. Za celé oběhnutí (perioda <M>{'T'}</M>) udělá stín jeden celý kmit.</>,
      ]}
    >
      <Defs id="arCP" color={TXT} />
      {/* —— statická kostra —— */}
      <circle cx={CP_CX} cy={CP_CY} r={CP_R} fill="none" stroke={SPRING} strokeWidth="2" />
      <circle cx={CP_CX} cy={CP_CY} r="3" fill={TXT} />
      <text x={CP_CX - 12} y={CP_CY + 20} fill={TXT} fontSize="12">S</text>
      {/* osy sinusovky */}
      <line x1={CP_AXIS} y1="20" x2={CP_AXIS} y2="200" stroke={GRID} strokeWidth="1.5" />
      <line x1={CP_AXIS - 10} y1={CP_CY} x2="478" y2={CP_CY} stroke={GRID} strokeWidth="1.5" markerEnd="url(#arCP)" />
      <text x="470" y={CP_CY + 18} fill={TXT} fontSize="13" fontStyle="italic">t</text>
      <text x={CP_AXIS - 16} y="28" fill={TXT} fontSize="13" fontStyle="italic">u</text>
      <polyline points={cpSinePts} fill="none" stroke={SPRING} strokeWidth="2" />
      {/* amplituda */}
      <line x1="462" y1={CP_CY} x2="462" y2={CP_CY - CP_R} stroke={ACC} strokeWidth="1.5" />
      <text x="468" y={CP_CY - CP_R / 2} fill={ACC} fontSize="13" fontStyle="italic">A</text>

      {/* —— animované prvky —— */}
      {/* čárkovaná spojnice stínu (bod → stín na sinusovce) */}
      <ALine x1={cpPx} y1={cpPy} x2={cpMarkX} y2={cpPy} stroke={BALL} strokeWidth={1.6} strokeDasharray="5,4" />
      {/* poloměr k bodu */}
      <ALine x1={CP_CX} y1={CP_CY} x2={cpPx} y2={cpPy} stroke={ACC} strokeWidth={2} />
      {/* bod na kružnici */}
      <ACircle cx={cpPx} cy={cpPy} r={6} fill={ACC} />
      {/* stín na sinusovce */}
      <ACircle cx={cpMarkX} cy={cpPy} r={5} fill={BALL} />
    </StepScene>
  )
}

/* ------------------------------------------------------------------ *
 *  ANIMOVANÁ SCÉNA: přelévání energie (kulička na pružině)
 *  Kulička jede po ose, pružina se natahuje/smršťuje, sloupce Ep a Ek
 *  plynule mění výšku. Výchylka pos (v jednotkách A): 1, 0.5, 0, −1.
 * ------------------------------------------------------------------ */
const EN_EQX = 230, EN_A = 90, EN_Y = 110
const EN_POS = [1, 0.5, 0, -1]
const enBallX = EN_POS.map((p) => +(EN_EQX + p * EN_A).toFixed(2))
const enSpring = enBallX.map((bx) => springPath(30, bx - 20, EN_Y))
const EN_BARH = 90, EN_BARY = 30
const enEpH = EN_POS.map((p) => +(p * p * EN_BARH).toFixed(2))
const enEkH = enEpH.map((h) => +(EN_BARH - h).toFixed(2))
const enEpY = enEpH.map((h) => +(EN_BARY + EN_BARH - h).toFixed(2))
const enEkY = enEkH.map((h) => +(EN_BARY + EN_BARH - h).toFixed(2))

function EnergyScene() {
  return (
    <StepScene
      title="Přelévání energie během kmitu (kulička na pružině)"
      viewBox="0 0 470 210"
      captions={[
        <>Maximální výchylka <M>{'A'}</M>. Kulička stojí (<M>{'v=0'}</M>) → <b><M>{'E_k=0'}</M></b>, ale pružina je nejvíc napnutá → <b><M>{'E_p'}</M> je maximální</b>.</>,
        <>Kulička zrychluje. <M>{'E_p'}</M> se mění na <M>{'E_k'}</M> — pružina „vrací“ energii do pohybu.</>,
        <>Výchylka 0 → <b><M>{'E_p=0'}</M></b>, zato rychlost je <b>největší</b> → <b><M>{'E_k'}</M> je maximální</b>. Tady kulička sviští nejrychleji.</>,
        <>Kulička přeletěla na druhou stranu, zase se zastaví: <M>{'E_k=0'}</M>, <M>{'E_p'}</M> maximální. A celý součet <M>{'E_p+E_k'}</M> byl celou dobu stejný.</>,
      ]}
    >
      {/* —— statická kostra: zeď, podlaha, rovnováha, krajní polohy —— */}
      <line x1="30" y1="30" x2="30" y2="170" stroke={SPRING} strokeWidth="4" />
      <line x1="30" y1="160" x2="350" y2="160" stroke={GRID} strokeWidth="2" />
      <line x1={EN_EQX} y1="55" x2={EN_EQX} y2="160" stroke={TXT} strokeWidth="1.3" strokeDasharray="5,5" />
      <text x={EN_EQX} y="50" fill={TXT} fontSize="11" textAnchor="middle">rovnováha</text>
      <line x1={EN_EQX - EN_A} y1="80" x2={EN_EQX - EN_A} y2="160" stroke={GRID} strokeWidth="1.2" strokeDasharray="3,4" />
      <line x1={EN_EQX + EN_A} y1="80" x2={EN_EQX + EN_A} y2="160" stroke={GRID} strokeWidth="1.2" strokeDasharray="3,4" />
      <text x={EN_EQX - EN_A} y="175" fill={TXT} fontSize="11" textAnchor="middle">−A</text>
      <text x={EN_EQX + EN_A} y="175" fill={TXT} fontSize="11" textAnchor="middle">+A</text>

      {/* rámečky celkové energie (konstantní) + popisky */}
      <text x="404" y="20" fill={TXT} fontSize="12" textAnchor="middle">energie</text>
      <rect x="372" y={EN_BARY} width={34} height={EN_BARH} fill="none" stroke={TXT} strokeWidth="1.2" strokeDasharray="4,3" />
      <rect x="420" y={EN_BARY} width={34} height={EN_BARH} fill="none" stroke={TXT} strokeWidth="1.2" strokeDasharray="4,3" />
      <text x="389" y={EN_BARY + EN_BARH + 16} fill={EP} fontSize="13" textAnchor="middle" fontStyle="italic">Ep</text>
      <text x="437" y={EN_BARY + EN_BARH + 16} fill={EK} fontSize="13" textAnchor="middle" fontStyle="italic">Ek</text>

      {/* —— animované prvky —— */}
      {/* pružina (řetězec d se mění s polohou kuličky) */}
      <APath d={enSpring} fill="none" stroke={SPRING} strokeWidth={2.5} />
      {/* kulička */}
      <ACircle cx={enBallX} cy={EN_Y} r={18} fill={BALL} />
      {/* sloupec Ep */}
      <ARect x={372} y={enEpY} width={34} height={enEpH} fill={EP} opacity={0.85} />
      {/* sloupec Ek */}
      <ARect x={420} y={enEkY} width={34} height={enEkH} fill={EK} opacity={0.85} />
    </StepScene>
  )
}
