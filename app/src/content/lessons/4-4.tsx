import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, ARect, AText, AGroup, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.4'

/* Pojmy, které tato lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'comptonuv-jev': {
    lesson: '4.4',
    label: 'Comptonův jev',
    short: 'Nepružný rozptyl fotonu na elektronu; foton ztratí část energie, vlnová délka se zvětší.',
  },
  'comptonuv-posun': {
    lesson: '4.4',
    label: 'Comptonův posun',
    short: "λ′ − λ = h/(m₀c)·(1 − cos φ) — o kolik vzroste vlnová délka rozptýleného fotonu.",
  },
  'stimulovana-emise': {
    lesson: '4.4',
    label: 'stimulovaná emise',
    short: 'Foton donutí excitovaný elektron vyzářit druhý, totožný foton (stejná frekvence i fáze).',
  },
  'inverze-populace': {
    lesson: '4.4',
    label: 'inverze populace',
    short: 'Stav, kdy je víc elektronů ve vyšší hladině než v nižší — podmínka, aby laser fungoval.',
  },
  'laser': {
    lesson: '4.4',
    label: 'laser',
    short: 'Zdroj koherentního, monochromatického a rovnoběžného světla (stimulovaná emise + rezonátor).',
  },
}

/* Marker se šipkou pro SVG. */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACC = '#f472b6' // akcent tématu 4 (kvantová fyzika)
const TXT = '#e8ecf8'
const PHOTON = '#fbbf24' // foton = žlutá
const ELECTRON = '#60a5fa' // elektron = modrá
const DIM = '#94a3b8'
const MIRROR = '#9aa6c4'

/* Žlutá „vlnka" = foton. Delší vlnová délka = méně energie. */
function PhotonWave({ x1, y, n, lambda, color = PHOTON, amp = 6 }: { x1: number; y: number; n: number; lambda: number; color?: string; amp?: number }) {
  let d = `M${x1},${y}`
  for (let k = 0; k < n; k++) {
    const bx = x1 + k * lambda
    d += ` q ${lambda / 4},-${amp} ${lambda / 2},0 t ${lambda / 2},0`
  }
  return <path d={d} fill="none" stroke={color} strokeWidth="2.5" />
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Dvě věci do téhle „navíc" lekce, ale zkoušející je miluje, protože hezky ukazují, že světlo
        je <b>částice</b>. <Term>Comptonův jev</Term> je důkaz <Concept id="dualismus">dualismu</Concept> (<Concept id="foton">foton</Concept> se chová jako kulečníková
        koule) a <Term>laser</Term> je jeho praktické vyústění. Stačí umět princip a pár pojmů zpaměti.
      </p>

      <Section title="Comptonův jev — foton jako kulečníková koule">
        <p>
          <Term id="comptonuv-jev">Comptonův jev</Term> je <Term>nepružný rozptyl fotonu</Term> (rentgenového nebo gama
          záření) na slabě vázaném, prakticky volném elektronu. Klasická vlnová fyzika to neuměla
          vysvětlit. Kvantová fyzika ano: bere to jako <b>srážku dvou částic</b> — fotonu a elektronu —
          a platí při ní <b><Concept id="zachovani-energie">zákon zachování energie</Concept> i <Concept id="zachovani-hybnosti">hybnosti</Concept></b>, úplně jako u dvou kuliček.
        </p>
        <p>
          Při srážce foton <b>předá elektronu část své energie</b>. Elektron se uvolní a odletí
          stranou, foton změní směr (rozptýlí se o úhel <M>{'\\varphi'}</M>) a pokračuje dál — ale s{' '}
          <b>menší energií</b>. Menší energie fotonu znamená <b>delší <Concept id="vlnova-delka">vlnovou délku</Concept></b> (<M>{'E=hc/\\lambda'}</M>,
          takže menší <M>{'E'}</M> ⇒ větší <M>{'\\lambda'}</M>). Tomuhle nárůstu se říká{' '}
          <Term id="comptonuv-posun">Comptonův posun</Term>:
        </p>
        <MB>{'\\lambda\' - \\lambda = \\frac{h}{m_0\\,c}\\,(1-\\cos\\varphi)'}</MB>
        <p>
          kde <M>{'\\lambda'}</M> je vlnová délka před srážkou, <M>{'\\lambda\''}</M> po srážce,{' '}
          <M>{'m_0'}</M> klidová hmotnost elektronu a <M>{'\\varphi'}</M> úhel rozptylu fotonu. Zlomek{' '}
          <M>{'h/(m_0 c)'}</M> je <Term>Comptonova vlnová délka</Term> — pevná konstanta. Všimni si:
          posun závisí <b>jen na úhlu</b>, ne na původní vlnové délce.
        </p>

        <Figure caption="Comptonův rozptyl: foton (žlutě) narazí na klidový elektron, předá mu část energie. Elektron (modře) odletí, foton pokračuje pod úhlem φ s delší vlnovou délkou (= méně energie).">
          <svg viewBox="0 0 460 230" className="svg-fig">
            <Defs color={ELECTRON} name="are" />
            <Defs color={PHOTON} name="arp" />
            {/* terč: klidový elektron */}
            <circle cx="180" cy="120" r="13" fill={ELECTRON} />
            <text x="180" y="124" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">e⁻</text>
            {/* dopadající foton zleva */}
            <PhotonWave x1={20} y={120} n={9} lambda={16} />
            <line x1={158} y1={120} x2={166} y2={120} stroke={PHOTON} strokeWidth="2.5" markerEnd="url(#arp)" />
            <text x="80" y="104" fill={PHOTON} fontSize="13" textAnchor="middle">foton (λ)</text>
            {/* osa původního směru (přerušovaná) */}
            <line x1="194" y1="120" x2="430" y2="120" stroke={DIM} strokeWidth="1.5" strokeDasharray="7 6" />
            {/* odražený elektron nahoru-vpravo */}
            <line x1="190" y1="110" x2="285" y2="60" stroke={ELECTRON} strokeWidth="3" markerEnd="url(#are)" />
            <text x="300" y="56" fill={ELECTRON} fontSize="13">elektron</text>
            {/* sekundární foton dolů-vpravo (delší vlnka = větší λ): celá vlnka
                i s šipkou nakloněna o úhel φ pod původní osu kolem elektronu */}
            <g transform="rotate(22 180 120)">
              <PhotonWave x1={198} y={120} n={5} lambda={24} amp={7} />
              <line x1="310" y1="120" x2="322" y2="120" stroke={PHOTON} strokeWidth="2.5" markerEnd="url(#arp)" />
            </g>
            <text x="330" y="205" fill={PHOTON} fontSize="13" textAnchor="middle">rozptýlený foton (λ′ &gt; λ)</text>
            {/* úhel φ mezi osou a směrem rozptýleného fotonu */}
            <path d="M232,120 A52,52 0 0 0 228,140" fill="none" stroke={ACC} strokeWidth="1.6" />
            <text x="246" y="142" fill={ACC} fontSize="14" fontStyle="italic">φ</text>
          </svg>
        </Figure>

        <Callout kind="info" title="Proč je to důkaz dualismu?">
          Kdyby bylo světlo jen vlna, předalo by elektronu energii „rozmazaně" a vlnová délka by se
          nezměnila. To, že se foton chová jako <b>částice s <Concept id="hybnost">hybností</Concept></b> a po srážce odletí s menší
          energií podle vzorce, je přímý <Term>důkaz korpuskulárně-vlnového dualismu</Term> — světlo
          tady ukazuje svou částicovou tvář.
        </Callout>
      </Section>

      <Section title="Compton vs. fotoefekt — nepleť si je">
        <p>
          Obojí je interakce fotonu s elektronem, ale chovají se jinak — a právě tady se ztrácejí body:
        </p>
        <ul>
          <li>
            <b><Concept id="fotoefekt">Fotoefekt</Concept>:</b> foton <b>zanikne</b> a předá elektronu <b>celou</b> svou energii.
            Funguje hlavně pro nižší energie a pevně vázané elektrony.
          </li>
          <li>
            <b>Comptonův jev:</b> foton <b>nezanikne</b>, předá jen <b>část</b> energie, rozptýlí se a
            letí dál s větší vlnovou délkou. Funguje pro vysoké energie (rentgen, gama) a téměř volné
            elektrony.
          </li>
        </ul>
      </Section>

      <Section title="Laser — princip stimulované emise">
        <p>
          <Term id="laser">LASER</Term> = <i>Light Amplification by Stimulated Emission of Radiation</i> (zesilování
          světla stimulovanou emisí záření). Je to zdroj světla, které je{' '}
          <b><Concept id="koherence">koherentní</Concept>, monochromatické a rovnoběžné</b> — tedy úzký, „čistý" svazek, jaký běžná
          žárovka nesvede. Stojí na třech částech: <Term>aktivní prostředí</Term> (kde se světlo
          zesiluje), <Term>zdroj energie</Term> (pumpa, např. výbojka) a <Term>rezonátor</Term> (dvě
          zrcadla — jedno plně odrazivé, druhé polopropustné).
        </p>
        <p>Proklikej si, jak vznikne laserový paprsek. Klikej <b>Další →</b>:</p>

        <StepScene
          title="Jak funguje laser krok po kroku"
          viewBox="0 0 420 210"
          captions={[
            <>
              <b>Zdroj energie</b> pumpuje energii do aktivního prostředí a{' '}
              <b><Concept id="zakladni-excitovany-stav">excituje</Concept></b> elektron — vybudí ho ze základní hladiny do vyšší.
            </>,
            <>
              Pumpujeme tak silně, že <b>většina</b> elektronů je nahoře (víc nahoře než dole). Tomu
              se říká <Term id="inverze-populace">inverze populace</Term> — bez ní by laser nefungoval.
            </>,
            <>
              Letící foton „strhne" excitovaný elektron dolů a ten vyzáří <b>druhý, totožný</b> foton
              — stejná frekvence i fáze. To je <Term id="stimulovana-emise">stimulovaná emise</Term>: z 1 fotonu jsou 2,
              pak 4, 8…
            </>,
            <>
              Fotony se odrážejí mezi zrcadly <b>rezonátoru</b>, znovu a znovu prolétají prostředím a
              lavinovitě se množí (<b>exponenciální zesílení</b>). Hotový svazek uniká{' '}
              <b>polopropustným zrcadlem</b> ven.
            </>,
          ]}
        >
          <defs>
            <marker id="ap1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={ACC} /></marker>
            <marker id="ap3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={PHOTON} /></marker>
          </defs>

          {/* —— dvě energetické hladiny (kroky 0–2, mizí v kroku 3) —— */}
          <ALine x1={60} y1={150} x2={360} y2={150} stroke={DIM} strokeWidth={2} opacity={[1, 1, 1, 0]} />
          <ALine x1={60} y1={62} x2={360} y2={62} stroke={DIM} strokeWidth={2} opacity={[1, 1, 1, 0]} />
          <AText x={44} y={154} fill={TXT} fontSize="12" textAnchor="end" opacity={[1, 1, 1, 0]}>E₁</AText>
          <AText x={44} y={66} fill={TXT} fontSize="12" textAnchor="end" opacity={[1, 1, 1, 0]}>E₂</AText>

          {/* —— hlavní elektron: krok0 vyletí E1→E2, drží se nahoře v inverzi,
                v kroku 2 (stim. emise) spadne zpět E2→E1 —— */}
          <ACircle cx={150} cy={[150, 55, 150, 150]} r={6} fill={ELECTRON} opacity={[1, 1, 1, 0]} />

          {/* krok 0: šipka excitace + popisek pumpy */}
          <ALine x1={150} y1={150} x2={150} y2={70} stroke={ACC} strokeWidth={3} markerEnd="url(#ap1)" opacity={[1, 0, 0, 0]} />
          <AText x={186} y={112} fill={ACC} fontSize="13" textAnchor="start" opacity={[1, 0, 0, 0]}>excitace</AText>
          <AText x={150} y={184} fill={TXT} fontSize="12" textAnchor="middle" opacity={[1, 0, 0, 0]}>dodaná energie (pumpa)</AText>

          {/* krok 1: další elektrony nahoře (inverze), jeden zůstává dole */}
          <ACircle cx={195} cy={55} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <ACircle cx={235} cy={55} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <ACircle cx={275} cy={55} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <ACircle cx={315} cy={55} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <ACircle cx={110} cy={55} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <ACircle cx={235} cy={157} r={6} fill={ELECTRON} opacity={[0, 1, 0, 0]} />
          <AText x={210} y={112} fill={ACC} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>víc elektronů nahoře = inverze populace</AText>

          {/* krok 2: stimulovaná emise — dopadající foton, 2 totožné ven */}
          <AGroup opacity={[0, 0, 1, 0]}><PhotonWave x1={66} y={106} n={3} lambda={18} /></AGroup>
          <AText x={96} y={90} fill={PHOTON} fontSize="12" textAnchor="middle" opacity={[0, 0, 1, 0]}>1 foton</AText>
          <AGroup opacity={[0, 0, 1, 0]}><PhotonWave x1={250} y={98} n={4} lambda={18} /></AGroup>
          <AGroup opacity={[0, 0, 1, 0]}><PhotonWave x1={250} y={116} n={4} lambda={18} /></AGroup>
          <AText x={300} y={84} fill={PHOTON} fontSize="12" textAnchor="middle" opacity={[0, 0, 1, 0]}>2 totožné</AText>

          {/* —— krok 3: rezonátor (objeví se až teď) —— */}
          {/* trubice aktivního prostředí */}
          <ARect x={[80, 80, 80, 80]} y={90} width={250} height={40} rx={4} fill={ACC} opacity={[0, 0, 0, 0.28]} stroke={ACC} strokeWidth={1.5} />
          {/* levé zrcadlo (plné) */}
          <ARect x={72} y={75} width={9} height={70} rx={3} fill={MIRROR} opacity={[0, 0, 0, 1]} />
          <AText x={76} y={165} fill={TXT} fontSize="11" textAnchor="middle" opacity={[0, 0, 0, 1]}>plné</AText>
          {/* pravé zrcadlo (polopropustné) */}
          <ARect x={329} y={75} width={9} height={70} rx={3} fill={MIRROR} opacity={[0, 0, 0, 0.6]} />
          <AText x={334} y={165} fill={TXT} fontSize="11" textAnchor="middle" opacity={[0, 0, 0, 1]}>polopropustné</AText>
          {/* vnitřní paprsek */}
          <AGroup opacity={[0, 0, 0, 1]}><PhotonWave x1={88} y={110} n={12} lambda={18} color={PHOTON} amp={5} /></AGroup>
          {/* výstupní svazek */}
          <ALine x1={338} y1={110} x2={392} y2={110} stroke={PHOTON} strokeWidth={4} markerEnd="url(#ap3)" opacity={[0, 0, 0, 1]} />
          <AText x={370} y={90} fill={PHOTON} fontSize="11" textAnchor="middle" opacity={[0, 0, 0, 1]}>paprsek ven</AText>
        </StepScene>
      </Section>

      <Section title="Vlastnosti a využití laseru (tohle se ptají vždycky)">
        <p>Tři vlastnosti laserového záření, které musíš umět vyjmenovat:</p>
        <ul>
          <li><b>Koherence</b> — vlny mají sladěnou fázi (umí spolu <Concept id="interference">interferovat</Concept>).</li>
          <li><b>Monochromatičnost</b> — jen jedna barva / vlnová délka.</li>
          <li><b>Rovnoběžnost</b> — svazek se skoro nerozbíhá, drží tenký i daleko.</li>
        </ul>
        <p>A tři typické aplikace:</p>
        <ul>
          <li><b>Medicína</b> — chirurgie, mikrochirurgie, dermatologie (odstranění znamének, tetování).</li>
          <li><b>Průmysl</b> — řezání, svařování a obrábění materiálů, laserové tiskárny.</li>
          <li><b>Měření a výzkum</b> — geodézie (přesné vzdálenosti), spektroskopie, holografie, optická vlákna.</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Compton: foton se <b>rozptýlí a ztratí část energie</b> ⇒ vlnová délka se <b>zvětší</b>{' '}
            (<M>{'\\lambda\' > \\lambda'}</M>). Nikdy ne menší!
          </li>
          <li>
            Comptonův posun <b>závisí jen na úhlu</b> <M>{'\\varphi'}</M>, ne na původní <M>{'\\lambda'}</M>.
            Maximální je při <M>{'\\varphi=180^\\circ'}</M> (zpětný rozptyl).
          </li>
          <li>
            Nepleť s fotoefektem: tam foton <b>zanikne</b> a předá <b>celou</b> energii; u Comptonu jen
            <b> část</b> a letí dál.
          </li>
          <li>
            Vlastnosti laseru zpaměti: <b>koherence, monochromatičnost, rovnoběžnost</b>. Klíčem k
            principu je <b>stimulovaná emise</b> + <b>inverze populace</b>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit Comptonův jev jako srážku fotonu a elektronu a proč dokazuje dualismus.',
          'Napsat vztah pro Comptonův posun λ′ − λ = h/(m₀c)·(1 − cos φ) a popsat veličiny.',
          'Vědět, že foton ztratí část energie a jeho vlnová délka se zvětší (a v čem se liší od fotoefektu).',
          'Popsat princip laseru: čerpání → inverze populace → stimulovaná emise → rezonátor.',
          'Vyjmenovat 3 vlastnosti laserového záření a 3 aplikace.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je Comptonův jev a jak dokazuje korpuskulárně-vlnový dualismus?',
            a: (
              <>
                Nepružný rozptyl fotonu na téměř volném elektronu — popisuje se jako{' '}
                <b>srážka dvou částic</b> se zachováním energie i hybnosti. Foton se chová jako částice
                s hybností, předá elektronu část energie a odletí s delší vlnovou délkou. To, že se
                světlo zachová jako částice, je <b>důkaz dualismu</b>.
              </>
            ),
          },
          {
            q: <>Jak se při Comptonově jevu změní vlnová délka fotonu a podle jakého vztahu?</>,
            a: (
              <>
                <b>Zvětší se</b> (foton ztratil energii):{' '}
                <M>{'\\lambda\' - \\lambda = \\dfrac{h}{m_0 c}(1-\\cos\\varphi)'}</M>. Posun závisí jen
                na úhlu rozptylu <M>{'\\varphi'}</M>, je největší při <M>{'\\varphi = 180^\\circ'}</M>.
              </>
            ),
          },
          {
            q: 'Vysvětli princip laseru pomocí stimulované emise.',
            a: (
              <>
                Zdroj energie „pumpuje" aktivní prostředí a excituje elektrony, až vznikne{' '}
                <b>inverze populace</b> (víc elektronů nahoře). Letící foton donutí excitovaný elektron
                vyzářit <b>druhý totožný foton</b> (stejná frekvence i fáze) = <b>stimulovaná emise</b>.
                V <b>rezonátoru</b> (dvě zrcadla) se fotony lavinovitě množí a svazek uniká
                polopropustným zrcadlem.
              </>
            ),
          },
          {
            q: <>Vyjmenuj 3 vlastnosti laserového záření a 3 oblasti využití.</>,
            a: (
              <>
                Vlastnosti: <b>koherence, monochromatičnost, rovnoběžnost</b> svazku. Využití:{' '}
                <b>medicína</b> (chirurgie, dermatologie), <b>průmysl</b> (řezání, svařování),{' '}
                <b>měření/výzkum</b> (geodézie, spektroskopie, holografie).
              </>
            ),
          },
        ]}
      />
    </>
  )
}
