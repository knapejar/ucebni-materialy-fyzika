import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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
        je <b>částice</b>. <Term>Comptonův jev</Term> je důkaz dualismu (foton se chová jako kulečníková
        koule) a <Term>laser</Term> je jeho praktické vyústění. Stačí umět princip a pár pojmů zpaměti.
      </p>

      <Section title="Comptonův jev — foton jako kulečníková koule">
        <p>
          <Term>Comptonův jev</Term> je <Term>nepružný rozptyl fotonu</Term> (rentgenového nebo gama
          záření) na slabě vázaném, prakticky volném elektronu. Klasická vlnová fyzika to neuměla
          vysvětlit. Kvantová fyzika ano: bere to jako <b>srážku dvou částic</b> — fotonu a elektronu —
          a platí při ní <b>zákon zachování energie i hybnosti</b>, úplně jako u dvou kuliček.
        </p>
        <p>
          Při srážce foton <b>předá elektronu část své energie</b>. Elektron se uvolní a odletí
          stranou, foton změní směr (rozptýlí se o úhel <M>{'\\varphi'}</M>) a pokračuje dál — ale s{' '}
          <b>menší energií</b>. Menší energie fotonu znamená <b>delší vlnovou délku</b> (<M>{'E=hc/\\lambda'}</M>,
          takže menší <M>{'E'}</M> ⇒ větší <M>{'\\lambda'}</M>). Tomuhle nárůstu se říká{' '}
          <Term>Comptonův posun</Term>:
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
            {/* sekundární foton dolů-vpravo, delší vlnka = větší λ */}
            <PhotonWave x1={196} y={132} n={5} lambda={24} amp={7} />
            <line x1="296" y1="174" x2="312" y2="183" stroke={PHOTON} strokeWidth="2.5" markerEnd="url(#arp)" />
            <text x="300" y="205" fill={PHOTON} fontSize="13">rozptýlený foton (λ′ &gt; λ)</text>
            {/* úhel φ */}
            <path d="M214,120 A34,34 0 0 0 206,150" fill="none" stroke={ACC} strokeWidth="1.6" />
            <text x="224" y="150" fill={ACC} fontSize="14" fontStyle="italic">φ</text>
          </svg>
        </Figure>

        <Callout kind="info" title="Proč je to důkaz dualismu?">
          Kdyby bylo světlo jen vlna, předalo by elektronu energii „rozmazaně" a vlnová délka by se
          nezměnila. To, že se foton chová jako <b>částice s hybností</b> a po srážce odletí s menší
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
            <b>Fotoefekt:</b> foton <b>zanikne</b> a předá elektronu <b>celou</b> svou energii.
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
          <Term>LASER</Term> = <i>Light Amplification by Stimulated Emission of Radiation</i> (zesilování
          světla stimulovanou emisí záření). Je to zdroj světla, které je{' '}
          <b>koherentní, monochromatické a rovnoběžné</b> — tedy úzký, „čistý" svazek, jaký běžná
          žárovka nesvede. Stojí na třech částech: <Term>aktivní prostředí</Term> (kde se světlo
          zesiluje), <Term>zdroj energie</Term> (pumpa, např. výbojka) a <Term>rezonátor</Term> (dvě
          zrcadla — jedno plně odrazivé, druhé polopropustné).
        </p>
        <p>Proklikej si, jak vznikne laserový paprsek. Klikej <b>Další →</b>:</p>

        <StepFigure
          title="Jak funguje laser krok po kroku"
          steps={[
            {
              label: 'čerpání',
              caption: (
                <>
                  <b>Zdroj energie</b> pumpuje energii do aktivního prostředí a{' '}
                  <b>excituje</b> elektrony — vybudí je ze základní hladiny do vyšší.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={ACC} name="ap1" />
                  {/* dvě hladiny */}
                  <line x1="60" y1="135" x2="360" y2="135" stroke={DIM} strokeWidth="2" />
                  <line x1="60" y1="55" x2="360" y2="55" stroke={DIM} strokeWidth="2" />
                  <text x="40" y="139" fill={TXT} fontSize="12" textAnchor="end">E₁</text>
                  <text x="40" y="59" fill={TXT} fontSize="12" textAnchor="end">E₂</text>
                  {/* elektron skáče nahoru */}
                  <line x1="180" y1="130" x2="180" y2="60" stroke={ACC} strokeWidth="3" markerEnd="url(#ap1)" />
                  <circle cx="180" cy="135" r="7" fill={ELECTRON} />
                  <text x="210" y="100" fill={ACC} fontSize="13">excitace</text>
                  <text x="210" y="160" fill={TXT} fontSize="12" textAnchor="middle">dodaná energie (pumpa)</text>
                </svg>
              ),
            },
            {
              label: 'inverze populace',
              caption: (
                <>
                  Pumpujeme tak silně, že <b>většina</b> elektronů je nahoře (víc nahoře než dole). Tomu
                  se říká <Term>inverze populace</Term> — bez ní by laser nefungoval.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <line x1="60" y1="135" x2="360" y2="135" stroke={DIM} strokeWidth="2" />
                  <line x1="60" y1="55" x2="360" y2="55" stroke={DIM} strokeWidth="2" />
                  <text x="40" y="139" fill={TXT} fontSize="12" textAnchor="end">E₁</text>
                  <text x="40" y="59" fill={TXT} fontSize="12" textAnchor="end">E₂</text>
                  {/* hodně elektronů nahoře */}
                  {[110, 150, 190, 230, 270, 310].map((cx) => (
                    <circle key={cx} cx={cx} cy="48" r="6" fill={ELECTRON} />
                  ))}
                  {/* málo dole */}
                  <circle cx="190" cy="142" r="6" fill={ELECTRON} />
                  <text x="210" y="100" fill={ACC} fontSize="13" textAnchor="middle">víc elektronů nahoře = inverze populace</text>
                </svg>
              ),
            },
            {
              label: 'stimulovaná emise',
              caption: (
                <>
                  Letící foton „strhne" excitovaný elektron dolů a ten vyzáří <b>druhý, totožný</b> foton
                  — stejná frekvence i fáze. To je <Term>stimulovaná emise</Term>: z 1 fotonu jsou 2,
                  pak 4, 8…
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={PHOTON} name="ap2" />
                  <line x1="60" y1="135" x2="360" y2="135" stroke={DIM} strokeWidth="2" />
                  <line x1="60" y1="55" x2="360" y2="55" stroke={DIM} strokeWidth="2" />
                  {/* elektron padá dolů */}
                  <line x1="200" y1="62" x2="200" y2="128" stroke={ACC} strokeWidth="3" markerEnd="url(#ap2)" />
                  <circle cx="200" cy="55" r="7" fill={ELECTRON} />
                  {/* dopadající foton */}
                  <PhotonWave x1={70} y={95} n={3} lambda={18} />
                  <text x="95" y="80" fill={PHOTON} fontSize="12">1 foton</text>
                  {/* dva totožné fotony ven */}
                  <PhotonWave x1={250} y={88} n={4} lambda={18} />
                  <PhotonWave x1={250} y={104} n={4} lambda={18} />
                  <text x="330" y="80" fill={PHOTON} fontSize="12" textAnchor="middle">2 totožné</text>
                </svg>
              ),
            },
            {
              label: 'rezonátor',
              caption: (
                <>
                  Fotony se odrážejí mezi zrcadly <b>rezonátoru</b>, znovu a znovu prolétají prostředím a
                  lavinovitě se množí (<b>exponenciální zesílení</b>). Hotový svazek uniká{' '}
                  <b>polopropustným zrcadlem</b> ven.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 180" className="svg-fig">
                  <Defs color={ACC} name="ap3" />
                  {/* trubice aktivního prostředí */}
                  <rect x="80" y="70" width="250" height="40" rx="4" fill={ACC} opacity="0.28" stroke={ACC} strokeWidth="1.5" />
                  {/* levé zrcadlo (plné) */}
                  <rect x="72" y="55" width="9" height="70" rx="3" fill={MIRROR} />
                  <text x="76" y="145" fill={TXT} fontSize="11" textAnchor="middle">plné</text>
                  {/* pravé zrcadlo (polopropustné) */}
                  <rect x="329" y="55" width="9" height="70" rx="3" fill={MIRROR} opacity="0.6" />
                  <text x="334" y="145" fill={TXT} fontSize="11" textAnchor="middle">polopropustné</text>
                  {/* vnitřní paprsek tam a zpět */}
                  <PhotonWave x1={88} y={90} n={12} lambda={18} color={PHOTON} amp={5} />
                  {/* výstupní svazek */}
                  <line x1="338" y1="90" x2="408" y2="90" stroke={PHOTON} strokeWidth="5" markerEnd="url(#ap3)" />
                  <text x="375" y="80" fill={PHOTON} fontSize="12" textAnchor="middle">paprsek ven</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Vlastnosti a využití laseru (tohle se ptají vždycky)">
        <p>Tři vlastnosti laserového záření, které musíš umět vyjmenovat:</p>
        <ul>
          <li><b>Koherence</b> — vlny mají sladěnou fázi (umí spolu interferovat).</li>
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
