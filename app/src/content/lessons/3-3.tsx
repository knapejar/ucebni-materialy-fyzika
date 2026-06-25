import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.3'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'superpozice-kmitu': { lesson: '3.3', label: 'princip superpozice kmitů', short: 'Výsledný kmit = vektorový součet dílčích kmitů.' },
  'kolme-kmity': { lesson: '3.3', label: 'skládání kolmých kmitů', short: 'Dva kolmé kmity dají úsečku, elipsu nebo kružnici podle amplitud a fáze.' },
  'razy': { lesson: '3.3', label: 'rázy', short: 'Součet dvou kmitů blízké frekvence: stálá perioda, kolísavá amplituda.' },
}

const ACC = '#a78bfa' // akcent tématu
const TXT = '#e8ecf8'
const AXIS = '#586079'
const C1 = '#67e8f9' // první kmit (azurová)
const C2 = '#fca5a5' // druhý kmit (růžová)
const ENV = '#fbbf24' // obálka rázů (žlutá)

/* ------------------------------------------------------------------ *
 *  Generátor hladké sinusové křivky jako SVG path (lomená čára s
 *  jemným krokem → opticky hladké). Stejný počet bodů u všech variant,
 *  aby šlo `d` mezi kroky plynule prointerpolovat (morfing).
 * ------------------------------------------------------------------ */
const WX0 = 20
const WX1 = 410
const WMID = 90
const WAMP = 42
const WN = 96 // počet úseček

function wave(freq: number, phase: number, ampOf: (t: number) => number): string {
  let d = ''
  for (let i = 0; i <= WN; i++) {
    const t = i / WN
    const x = WX0 + (WX1 - WX0) * t
    const y = WMID - ampOf(t) * Math.sin(2 * Math.PI * freq * t + phase)
    d += (i === 0 ? 'M' : ' L') + x.toFixed(1) + ',' + y.toFixed(1)
  }
  return d
}
function envelope(sign: number): string {
  let d = ''
  for (let i = 0; i <= WN; i++) {
    const t = i / WN
    const x = WX0 + (WX1 - WX0) * t
    const e = Math.abs(Math.cos(2 * Math.PI * ((F2 - F1) / 2) * t))
    const y = WMID - sign * WAMP * e
    d += (i === 0 ? 'M' : ' L') + x.toFixed(1) + ',' + y.toFixed(1)
  }
  return d
}

const F1 = 7
const F2 = 7.6
const FULL = () => WAMP

// Krok 1: oba kmity startují „spolu" (skoro ve fázi).
const W1_A = wave(F1, 0, FULL)
const W2_A = wave(F2, 0, FULL)
// Krok 2: necháme je rozejít — druhý kmit posuneme do protifáze (přidaná fáze π).
const W1_B = wave(F1, 0, FULL)
const W2_B = wave(F2, Math.PI, FULL)
// Krok 3: jejich součet = rychlá nosná vlna v pomalé obálce (rázy).
function sumWave(): string {
  let d = ''
  for (let i = 0; i <= WN; i++) {
    const t = i / WN
    const x = WX0 + (WX1 - WX0) * t
    const y = WMID - WAMP * (Math.sin(2 * Math.PI * F1 * t) + Math.sin(2 * Math.PI * F2 * t)) / 2
    d += (i === 0 ? 'M' : ' L') + x.toFixed(1) + ',' + y.toFixed(1)
  }
  return d
}
const SUM = sumWave()
const ENV_UP = envelope(1)
const ENV_DN = envelope(-1)

/* Šipka pro statický SVG (Figure). */
function Defs({ color = ACC, name = 'ar' }: { color?: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson_3_3() {
  return (
    <>
      <p className="lead">
        Skládání kmitů zní hrozivě, ale je za tím jen jedna myšlenka: <Term>kmity se prostě sčítají</Term>.
        U zkoušky chtějí tři věci — princip superpozice, co vyjde ze <Term id="kolme-kmity">dvou <i>kolmých</i> kmitů</Term> (kružnice /
        elipsa / úsečka) a jak vznikají <Term>rázy</Term>. To je celé. A přesně na tom je pár chytáků, kde
        se ztrácejí body.
      </p>

      <Section title="Princip superpozice — výsledek je vektorový součet">
        <p>
          Když na jeden bod působí víc kmitů najednou, neperou se o něj. Každý dílčí kmit probíhá{' '}
          <b>nezávisle</b> na ostatních a výsledná výchylka je v každém okamžiku jen jejich{' '}
          <Term>vektorový součet</Term>. To je <Term id="superpozice-kmitu">princip superpozice kmitů</Term>:
        </p>
        <MB>{'\\vec u(t) = \\vec u_1(t) + \\vec u_2(t) + \\dots'}</MB>
        <p>
          Pozor — výsledný pohyb <b>nemusí být periodický</b> a nemusí to být zase „obyčejný" kmit. Záleží
          na tom, <i>jakým směrem</i> jednotlivé kmity míří a <i>jak rychle</i> kmitají. Podle toho vyjde
          úsečka, kružnice, elipsa, nebo rázy. Projdeme oba typické případy.
        </p>
      </Section>

      <Section title="Dva kolmé kmity: tvar závisí na amplitudě a fázi">
        <p>
          Mějme bod, který kmitá zároveň <b>vodorovně</b> (osa <M>{'x'}</M>) a <b>svisle</b> (osa{' '}
          <M>{'y'}</M>). Oba kmity mají stejnou úhlovou frekvenci <M>{'\\omega'}</M>, liší se ale
          <Concept id="amplituda">amplitudou</Concept> a hlavně <Term>fázovým posunem</Term>. Klikej <b>Další →</b> a sleduj, jak se mění
          dráha, kterou bod opisuje:
        </p>

        <StepScene
          title="Skládání dvou kolmých kmitů"
          viewBox="0 0 320 240"
          captions={[
            <>
              Oba kmity jsou <b>ve fázi</b> (fázový posun <M>{'0'}</M>): <M>{'x=A\\cos\\omega t'}</M>,{' '}
              <M>{'y=A\\cos\\omega t'}</M>. Bod běhá tam a zpět po <b>úsečce</b> (přímce). Když ve fázi
              nejsou amplitudy stejné, je úsečka jen šikměji nakloněná, pořád je to ale úsečka.
            </>,
            <>
              Fázový posun je <M>{'\\tfrac{\\pi}{2}'}</M> a amplitudy <b>stejné</b> (<M>{'A'}</M>):{' '}
              <M>{'x=A\\cos\\omega t'}</M>, <M>{'y=A\\sin\\omega t'}</M>. Bod obíhá po{' '}
              <b>kružnici</b> o poloměru <M>{'A'}</M>. (Je to mimochodem přesně to, z čeho se „rozbalí"{' '}
              <Concept id="harmonicke-kmitani">harmonický kmit</Concept> — průmět rovnoměrného pohybu po kružnici.)
            </>,
            <>
              Fázový posun je pořád <M>{'\\tfrac{\\pi}{2}'}</M>, ale amplitudy se <b>liší</b>:{' '}
              <M>{'x=A\\cos\\omega t'}</M>, <M>{'y=B\\sin\\omega t'}</M> a <M>{'A\\neq B'}</M>. Z kružnice
              se stane <b>elipsa</b> — natažená podle toho, který kmit má větší amplitudu.
            </>,
          ]}
        >
          <Defs color={AXIS} name="axK" />
          {/* osy */}
          <ALine x1={30} y1={120} x2={300} y2={120} stroke={AXIS} strokeWidth={1.6} markerEnd="url(#axK)" />
          <ALine x1={160} y1={216} x2={160} y2={24} stroke={AXIS} strokeWidth={1.6} markerEnd="url(#axK)" />
          <AText x={292} y={138} fill={TXT} fontSize="13" fontStyle="italic">x</AText>
          <AText x={170} y={32} fill={TXT} fontSize="13" fontStyle="italic">y</AText>

          {/* tvar dráhy: úsečka → kružnice → elipsa (jeden morfující se path) */}
          <APath
            d={[
              // úsečka: šikmá přímka pod 45°
              'M88,192 L232,48',
              // kružnice r=72 (4 oblouky, aby šlo morfovat z/do elipsy)
              'M232,120 A72,72 0 0 1 160,192 A72,72 0 0 1 88,120 A72,72 0 0 1 160,48 A72,72 0 0 1 232,120',
              // elipsa rx=100, ry=55
              'M260,120 A100,55 0 0 1 160,175 A100,55 0 0 1 60,120 A100,55 0 0 1 160,65 A100,55 0 0 1 260,120',
            ]}
            fill="none"
            stroke={ACC}
            strokeWidth={4}
          />

          {/* obíhající bod — sedí na dráze v pravém horním kvadrantu (45°) */}
          <ACircle cx={[210, 211, 231]} cy={[70, 69, 81]} r={7} fill={ACC} />

          {/* popisek tvaru */}
          <AText x={160} y={234} fill={ACC} fontSize="14" textAnchor="middle" opacity={[1, 0, 0]}>úsečka</AText>
          <AText x={160} y={234} fill={ACC} fontSize="14" textAnchor="middle" opacity={[0, 1, 0]}>kružnice</AText>
          <AText x={160} y={234} fill={ACC} fontSize="14" textAnchor="middle" opacity={[0, 0, 1]}>elipsa</AText>
        </StepScene>

        <p>Shrnuto do tabulky (přesně tohle si zapamatuj):</p>
        <ul>
          <li>
            <b>úsečka</b> — kmity jsou <Term>ve fázi</Term> (posun <M>{'0'}</M>), na amplitudách
            nezáleží;
          </li>
          <li>
            <b>kružnice</b> — posun <M>{'\\tfrac{\\pi}{2}'}</M> <i>a zároveň</i>{' '}
            <Term>stejná amplituda</Term>;
          </li>
          <li>
            <b>elipsa</b> — posun <M>{'\\tfrac{\\pi}{2}'}</M>, ale <Term>různá amplituda</Term>.
          </li>
        </ul>
        <p>
          Tyhle obrazce (pro obecnou fázi a poměr frekvencí) se jmenují <Term>Lissajousovy křivky</Term> —
          stačí znát jméno a tři výše uvedené případy.
        </p>
      </Section>

      <Section title="Dva kmity stejného směru s blízkou periodou → rázy">
        <p>
          Teď druhý případ: oba kmity míří <b>stejným směrem</b>, mají skoro stejnou frekvenci (např.{' '}
          dvě kytarové struny mírně rozladěné). Sečteme dva kosiny s blízkými{' '}
          <M>{'\\omega_1 \\approx \\omega_2'}</M> a vyjde:
        </p>
        <MB>{'u = 2A\\,\\cos\\!\\Big(\\tfrac{\\omega_1-\\omega_2}{2}\\,t\\Big)\\cdot\\cos\\!\\Big(\\tfrac{\\omega_1+\\omega_2}{2}\\,t\\Big)'}</MB>
        <p>
          Čti to takhle: druhý kosinus je <b>rychlá</b> nosná vlna (frekvence skoro jako původní kmity).
          První kosinus se mění <b>pomalu</b> a funguje jako <Term>obálka</Term> — kolísá amplitudu nahoru
          a dolů. Výsledek je tón, který se rytmicky zesiluje a zeslabuje. Tomu se říká <Term id="razy">rázy</Term>.
        </p>

        <StepScene
          title="Jak vznikají rázy"
          viewBox="0 0 420 180"
          captions={[
            <>
              Dva kmity stejného směru s <b>nepatrně odlišnou</b> frekvencí. Vlevo jdou „spolu"
              (sčítají se), pak se začnou rozcházet.
            </>,
            <>
              Druhý kmit (růžový) se vůči prvnímu posune do <b>protifáze</b> — kde je jeden „nahoře",
              je druhý „dole". Tam se téměř <b>vyruší</b>. Toto střídání se opakuje pořád dokola.
            </>,
            <>
              Jejich součet je rychlá vlna sevřená do pomalé <b style={{ color: ENV }}>obálky</b>.
              Hlasitost pravidelně roste a klesá. <b><Concept id="perioda">Perioda</Concept> kmitání je stálá</b>,
              mění se jen <b>amplituda</b> — to jsou rázy.
            </>,
          ]}
        >
          <Defs color={AXIS} name="axR" />
          {/* časová osa */}
          <ALine x1={14} y1={90} x2={410} y2={90} stroke={AXIS} strokeWidth={1.4} markerEnd="url(#axR)" />
          <AText x={404} y={108} fill={TXT} fontSize="13" fontStyle="italic">t</AText>

          {/* dva dílčí kmity (krok 1–2): morfují se z „spolu" do „protifáze" */}
          <APath d={[W1_A, W1_B, W1_B]} fill="none" stroke={C1} strokeWidth={2.2} opacity={[1, 1, 0]} />
          <APath d={[W2_A, W2_B, W2_B]} fill="none" stroke={C2} strokeWidth={2.2} opacity={[1, 1, 0]} />

          {/* popisky dílčích kmitů (krok 1) */}
          <AText x={70} y={26} fill={C1} fontSize="13" opacity={[1, 0, 0]}>kmit 1</AText>
          <AText x={150} y={26} fill={C2} fontSize="13" opacity={[1, 0, 0]}>kmit 2 (jiná f)</AText>

          {/* popisek protifáze (krok 2) */}
          <AText x={250} y={30} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 1, 0]}>protifáze → vyruší se</AText>

          {/* výsledek = rázy (krok 3): obálka + nosná vlna */}
          <APath d={ENV_UP} fill="none" stroke={ENV} strokeWidth={2} strokeDasharray="5,4" opacity={[0, 0, 1]} />
          <APath d={ENV_DN} fill="none" stroke={ENV} strokeWidth={2} strokeDasharray="5,4" opacity={[0, 0, 1]} />
          <APath d={SUM} fill="none" stroke={ACC} strokeWidth={2.2} opacity={[0, 0, 1]} />
          <AText x={215} y={32} fill={ENV} fontSize="13" textAnchor="middle" opacity={[0, 0, 1]}>obálka kolísá amplitudu</AText>
        </StepScene>

        <Figure caption="Rázy: rychlá nosná vlna (fialová) modulovaná pomalou obálkou (žlutá). Tóny periodicky zesilují a zeslabují.">
          <svg viewBox="0 0 440 170" className="svg-fig">
            <Defs color={AXIS} name="axF" />
            <Defs color={ENV} name="axFe" />
            <line x1="20" y1="80" x2="430" y2="80" stroke={AXIS} strokeWidth="1.4" markerEnd="url(#axF)" />
            <text x="424" y="98" fill={TXT} fontSize="13" fontStyle="italic">t</text>
            <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d={STATIC_ENV_UP} />
            <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d={STATIC_ENV_DN} />
            <path fill="none" stroke={ACC} strokeWidth="2" d={STATIC_CARRIER} />
            {/* perioda rázů = vzdálenost mezi dvěma uzly obálky (t=0,25 → 0,75 ⇒ x=120 → 320) */}
            <line x1="120" y1="150" x2="320" y2="150" stroke={ENV} strokeWidth="1.3" markerEnd="url(#axFe)" />
            <line x1="120" y1="144" x2="120" y2="156" stroke={ENV} strokeWidth="1.3" />
            <text x="218" y="166" fill={ENV} fontSize="12.5" textAnchor="middle">perioda rázů</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Konkrétní příklady (zkoušející je chce slyšet)">
        <ul>
          <li><b>Rázy:</b> dvě mírně rozladěné struny kytary — slyšíš pravidelné „vlnění" hlasitosti (vrr-vrr). Podle rychlosti rázů se struny ladí.</li>
          <li><b>Rázy:</b> dva tóny ladiček blízkých frekvencí; čím blíž k sobě, tím pomalejší rázy.</li>
          <li><b>Kolmé kmity:</b> obraz na osciloskopu — na vstupy <M>{'x'}</M> a <M>{'y'}</M> dáš dvě napětí; podle fáze vykreslí úsečku, kružnici nebo elipsu (Lissajousovy obrazce).</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            U <b>kolmých</b> kmitů nezáleží jen na fázi! <b>Kružnice</b> = posun{' '}
            <M>{'\\tfrac{\\pi}{2}'}</M> <i>i</i> stejná amplituda. <b>Různá</b> amplituda při stejném{' '}
            posunu <M>{'\\tfrac{\\pi}{2}'}</M> dá <b>elipsu</b>, ne kružnici.
          </li>
          <li>
            Kmity <b>ve fázi</b> (posun <M>{'0'}</M>) dají vždycky <b>úsečku</b> — i kdyby měly různou
            amplitudu (jen je jinak nakloněná).
          </li>
          <li>
            U <b>rázů</b> je <b>perioda (frekvence) stálá</b> a mění se <b>amplituda</b>. Klasická chyba je
            tvrdit opak — že kolísá perioda.
          </li>
          <li>
            Rázy potřebují kmity <b>stejného směru</b> a <b>blízké</b> frekvence. Kolmé kmity nebo hodně
            rozdílné frekvence rázy nedají.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vyslovit princip superpozice: výsledný kmit = vektorový součet dílčích kmitů.',
          'Určit tvar dráhy ze dvou kolmých kmitů podle fáze a amplitudy: úsečka / kružnice / elipsa.',
          'Vysvětlit vznik rázů (stejný směr, blízká frekvence) a co u nich kolísá (amplituda, ne perioda).',
          'Uvést konkrétní příklad rázů (rozladěné struny) i kolmých kmitů (Lissajousův obrazec).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jak zní princip superpozice u skládání kmitů?',
            a: <>Dílčí kmity jsou navzájem nezávislé a výsledná výchylka je v každém okamžiku jejich <b>vektorovým součtem</b>: <M>{'\\vec u = \\vec u_1 + \\vec u_2 + \\dots'}</M> Výsledný pohyb přitom nemusí být periodický.</>,
          },
          {
            q: <>Skládáš dva kolmé kmity se stejnou frekvencí. Kdy vyjde kružnice, kdy elipsa a kdy úsečka?</>,
            a: <><b>Kružnice:</b> fázový posun <M>{'\\pi/2'}</M> a <b>stejné</b> amplitudy. <b>Elipsa:</b> posun <M>{'\\pi/2'}</M>, ale <b>různé</b> amplitudy. <b>Úsečka:</b> kmity jsou <b>ve fázi</b> (posun <M>{'0'}</M>), na amplitudách nezáleží.</>,
          },
          {
            q: 'Co jsou rázy a co se u nich mění — perioda, nebo amplituda?',
            a: <>Rázy vznikají součtem dvou kmitů <b>stejného směru</b> s <b>nepatrně odlišnou</b> frekvencí. Vznikne rychlá vlna v pomalé obálce: <b>perioda kmitání je stálá</b>, periodicky kolísá jen <b>amplituda</b>. Příklad: dvě rozladěné struny kytary.</>,
          },
          {
            q: <>Uveď konkrétní příklad skládání dvou kolmých kmitů.</>,
            a: <>Osciloskop: na vstupy <M>{'x'}</M> a <M>{'y'}</M> přivedeš dvě harmonická napětí. Podle jejich fáze a amplitud se na stínítku vykreslí úsečka, kružnice nebo elipsa — tzv. <b>Lissajousovy obrazce</b>.</>,
          },
        ]}
      />
    </>
  )
}

/* Hladká nosná vlna + obálka pro statický obrázek (viewBox 0 0 440 170, osa y=80).
   Beats = 2 plné periody rázů: antiuzly v t=0; 0,5; 1 (x=20; 220; 420),
   uzly v t=0,25; 0,75 (x=120; 320). Obálka i nosná vlna sdílejí stejnou
   beat-frekvenci, takže do sebe přesně zapadají. */
const SX0 = 20, SX1 = 420, SMID = 80, SAMP = 58, SN = 240, SBEATS = 2, SFC = 11
function staticPath(kind: 'carrier' | 'up' | 'dn'): string {
  let d = ''
  for (let i = 0; i <= SN; i++) {
    const t = i / SN
    const x = SX0 + (SX1 - SX0) * t
    const env = Math.cos(Math.PI * SBEATS * t)
    const y =
      kind === 'carrier'
        ? SMID - SAMP * env * Math.sin(2 * Math.PI * SFC * t)
        : kind === 'up'
          ? SMID - SAMP * Math.abs(env)
          : SMID + SAMP * Math.abs(env)
    d += (i === 0 ? 'M' : ' L') + x.toFixed(1) + ',' + y.toFixed(1)
  }
  return d
}
const STATIC_CARRIER = staticPath('carrier')
const STATIC_ENV_UP = staticPath('up')
const STATIC_ENV_DN = staticPath('dn')
