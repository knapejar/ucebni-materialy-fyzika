import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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

/* Šipka pro SVG. */
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

        <StepFigure
          title="Skládání dvou kolmých kmitů"
          steps={[
            {
              label: 've fázi → úsečka',
              caption: (
                <>
                  Oba kmity jsou <b>ve fázi</b> (fázový posun <M>{'0'}</M>): <M>{'x=A\\cos\\omega t'}</M>,{' '}
                  <M>{'y=A\\cos\\omega t'}</M>. Bod běhá tam a zpět po <b>úsečce</b> (přímce). Když ve fázi
                  nejsou amplitudy stejné, je úsečka jen šikměji nakloněná, pořád je to ale úsečka.
                </>
              ),
              content: (
                <svg viewBox="0 0 320 220" className="svg-fig">
                  <Defs color={AXIS} name="axL" />
                  <line x1="40" y1="110" x2="290" y2="110" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axL)" />
                  <line x1="160" y1="200" x2="160" y2="20" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axL)" />
                  <text x="282" y="128" fill={TXT} fontSize="13" fontStyle="italic">x</text>
                  <text x="170" y="28" fill={TXT} fontSize="13" fontStyle="italic">y</text>
                  <line x1="70" y1="200" x2="250" y2="20" stroke={ACC} strokeWidth="4" />
                  <circle cx="220" cy="50" r="6" fill={ACC} />
                  <text x="160" y="218" fill={ACC} fontSize="14" textAnchor="middle">úsečka</text>
                </svg>
              ),
            },
            {
              label: 'posun π/2, stejné A → kružnice',
              caption: (
                <>
                  Fázový posun je <M>{'\\tfrac{\\pi}{2}'}</M> a amplitudy <b>stejné</b> (<M>{'A'}</M>):{' '}
                  <M>{'x=A\\cos\\omega t'}</M>, <M>{'y=A\\sin\\omega t'}</M>. Bod obíhá po{' '}
                  <b>kružnici</b> o poloměru <M>{'A'}</M>. (Je to mimochodem přesně to, z čeho se „rozbalí"
                  <Concept id="harmonicke-kmitani">harmonický kmit</Concept> — průmět rovnoměrného pohybu po kružnici.)
                </>
              ),
              content: (
                <svg viewBox="0 0 320 220" className="svg-fig">
                  <Defs color={AXIS} name="axC" />
                  <line x1="40" y1="110" x2="290" y2="110" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axC)" />
                  <line x1="160" y1="200" x2="160" y2="20" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axC)" />
                  <text x="282" y="128" fill={TXT} fontSize="13" fontStyle="italic">x</text>
                  <text x="170" y="28" fill={TXT} fontSize="13" fontStyle="italic">y</text>
                  <circle cx="160" cy="110" r="72" fill="none" stroke={ACC} strokeWidth="4" />
                  <circle cx="211" cy="59" r="6" fill={ACC} />
                  <path d="M211,59 a72,72 0 0 1 -30,-66" fill="none" stroke={ACC} strokeWidth="2" markerEnd="url(#axC)" opacity="0.6" />
                  <text x="160" y="218" fill={ACC} fontSize="14" textAnchor="middle">kružnice</text>
                </svg>
              ),
            },
            {
              label: 'posun π/2, různé A → elipsa',
              caption: (
                <>
                  Fázový posun je pořád <M>{'\\tfrac{\\pi}{2}'}</M>, ale amplitudy se <b>liší</b>:{' '}
                  <M>{'x=A\\cos\\omega t'}</M>, <M>{'y=B\\sin\\omega t'}</M> a <M>{'A\\neq B'}</M>. Z kružnice
                  se stane <b>elipsa</b> — natažená podle toho, který kmit má větší amplitudu.
                </>
              ),
              content: (
                <svg viewBox="0 0 320 220" className="svg-fig">
                  <Defs color={AXIS} name="axE" />
                  <line x1="40" y1="110" x2="290" y2="110" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axE)" />
                  <line x1="160" y1="200" x2="160" y2="20" stroke={AXIS} strokeWidth="1.6" markerEnd="url(#axE)" />
                  <text x="282" y="128" fill={TXT} fontSize="13" fontStyle="italic">x</text>
                  <text x="170" y="28" fill={TXT} fontSize="13" fontStyle="italic">y</text>
                  <ellipse cx="160" cy="110" rx="100" ry="55" fill="none" stroke={ACC} strokeWidth="4" />
                  <circle cx="231" cy="71" r="6" fill={ACC} />
                  <text x="160" y="218" fill={ACC} fontSize="14" textAnchor="middle">elipsa</text>
                </svg>
              ),
            },
          ]}
        />

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

        <StepFigure
          title="Jak vznikají rázy"
          steps={[
            {
              label: 'dva blízké kmity',
              caption: (
                <>
                  Dva kmity stejného směru s <b>nepatrně odlišnou</b> frekvencí. Zpočátku jdou „spolu"
                  (sčítají se), pak se rozejdou.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={AXIS} name="axR1" />
                  <line x1="20" y1="90" x2="408" y2="90" stroke={AXIS} strokeWidth="1.4" markerEnd="url(#axR1)" />
                  <text x="400" y="108" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  <path fill="none" stroke={C1} strokeWidth="2.2" d="M20,90 Q35,40 50,90 Q65,140 80,90 Q95,40 110,90 Q125,140 140,90 Q155,40 170,90 Q185,140 200,90 Q215,40 230,90 Q245,140 260,90 Q275,40 290,90 Q305,140 320,90 Q335,40 350,90 Q365,140 380,90 Q395,40 410,90" />
                  <path fill="none" stroke={C2} strokeWidth="2.2" d="M20,90 Q36,42 52,90 Q68,138 84,90 Q100,42 116,90 Q132,138 148,90 Q164,42 180,90 Q196,138 212,90 Q228,42 244,90 Q260,138 276,90 Q292,42 308,90 Q324,138 340,90 Q356,42 372,90 Q388,138 404,90" />
                  <text x="40" y="26" fill={C1} fontSize="13">kmit 1</text>
                  <text x="120" y="26" fill={C2} fontSize="13">kmit 2 (jiná f)</text>
                </svg>
              ),
            },
            {
              label: 'fáze se rozcházejí',
              caption: (
                <>
                  Po chvíli je jeden kmit „nahoře" a druhý „dole" — sejdou se v <b>protifázi</b> a téměř se{' '}
                  <b>vyruší</b>. Pak se zase srovnají a sečtou. Tohle střídání se opakuje pořád dokola.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={AXIS} name="axR2" />
                  <line x1="20" y1="90" x2="408" y2="90" stroke={AXIS} strokeWidth="1.4" markerEnd="url(#axR2)" />
                  <text x="400" y="108" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  {/* shoda vlevo, protifaze uprostred */}
                  <path fill="none" stroke={C1} strokeWidth="2.2" d="M20,90 Q35,40 50,90 Q65,140 80,90 Q95,40 110,90 Q125,140 140,90 Q155,40 170,90 Q185,140 200,90 Q215,40 230,90 Q245,140 260,90" />
                  <path fill="none" stroke={C2} strokeWidth="2.2" d="M20,90 Q35,140 50,90 Q65,40 80,90 Q95,140 110,90 Q125,40 140,90 Q155,140 170,90 Q185,40 200,90 Q215,140 230,90 Q245,40 260,90" />
                  <text x="60" y="160" fill={TXT} fontSize="12" textAnchor="middle">vyruší se</text>
                  <line x1="120" y1="40" x2="120" y2="140" stroke={ENV} strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
                  <text x="150" y="30" fill={TXT} fontSize="12">protifáze</text>
                </svg>
              ),
            },
            {
              label: 'výsledek = rázy',
              caption: (
                <>
                  Součet je rychlá vlna sevřená do pomalé <b style={{ color: ENV }}>obálky</b>. Hlasitost
                  pravidelně roste a klesá. <b><Concept id="perioda">Perioda</Concept> kmitání je stálá</b>, mění se jen <b>amplituda</b> —
                  to jsou rázy.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={AXIS} name="axR3" />
                  <line x1="20" y1="90" x2="408" y2="90" stroke={AXIS} strokeWidth="1.4" markerEnd="url(#axR3)" />
                  <text x="400" y="108" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  {/* obalka */}
                  <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d="M20,90 C70,18 130,18 180,90 C230,162 290,162 340,90 C370,48 395,48 408,66" />
                  <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d="M20,90 C70,162 130,162 180,90 C230,18 290,18 340,90 C370,132 395,132 408,114" />
                  {/* nosna vlna modulovana */}
                  <path fill="none" stroke={ACC} strokeWidth="2.2" d="M20,90 L32,74 L44,106 L56,66 L68,114 L80,62 L92,118 L104,66 L116,114 L128,74 L140,106 L152,86 L164,94 L176,90 L188,86 L200,94 L212,74 L224,106 L236,64 L248,116 L260,62 L272,118 L284,66 L296,114 L308,76 L320,104 L332,86 L344,90 L356,84 L368,96 L380,80 L392,100 L404,86" />
                  <line x1="56" y1="150" x2="296" y2="150" stroke={ENV} strokeWidth="1.2" markerEnd="url(#axR3)" />
                  <text x="176" y="168" fill={ENV} fontSize="13" textAnchor="middle">perioda rázů</text>
                </svg>
              ),
            },
          ]}
        />

        <Figure caption="Rázy: rychlá nosná vlna (fialová) modulovaná pomalou obálkou (žlutá). Tóny periodicky zesilují a zeslabují.">
          <svg viewBox="0 0 440 150" className="svg-fig">
            <Defs color={AXIS} name="axF" />
            <line x1="20" y1="75" x2="428" y2="75" stroke={AXIS} strokeWidth="1.4" markerEnd="url(#axF)" />
            <text x="420" y="93" fill={TXT} fontSize="13" fontStyle="italic">t</text>
            <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d="M20,75 C75,8 150,8 205,75 C260,142 335,142 390,75 C405,55 418,55 428,62" />
            <path fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" d="M20,75 C75,142 150,142 205,75 C260,8 335,8 390,75 C405,95 418,95 428,88" />
            <path fill="none" stroke={ACC} strokeWidth="2" d="M20,75 L30,60 L40,90 L50,52 L60,98 L70,48 L80,102 L90,52 L100,98 L110,62 L120,88 L130,72 L140,78 L150,75 L160,72 L170,78 L180,60 L190,90 L200,50 L210,100 L220,48 L230,102 L240,52 L250,98 L260,62 L270,88 L280,72 L290,78 L300,75 L310,72 L320,78 L330,58 L340,92 L350,52 L360,98 L370,56 L380,94 L390,70 L400,80 L410,74 L420,76" />
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
