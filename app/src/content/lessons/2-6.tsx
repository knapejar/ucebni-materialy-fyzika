import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, APath, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.6'

/* Pojmy, které tahle lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'biot-savart': { lesson: '2.6', label: 'Biot-Savartův zákon', short: 'Spočítá indukci dB od malého kousku vodiče; sečtením (integrací) dostaneš pole libovolného vodiče.' },
  'amperuv-zakon': { lesson: '2.6', label: 'Ampérův zákon', short: '∮B·ds = μ₀·Iᶜ — cirkulace B po uzavřené křivce = μ₀ krát proud uvnitř. Rychlá cesta k poli u souměrných případů.' },
  'permeabilita-vakua': { lesson: '2.6', label: 'permeabilita vakua μ₀', short: 'Konstanta magnetického pole, μ₀ = 4π·10⁻⁷ T·m/A.' },
  'elektricky-proud': { lesson: '2.6', label: 'elektrický proud', short: 'Náboj za čas, I = dQ/dt. Jednotka ampér [A].' },
  'pole-primeho-vodice': { lesson: '2.6', label: 'pole přímého vodiče', short: 'Kolem nekonečného vodiče B = μ₀I/2πr, čáry jsou soustředné kružnice.' },
}

const TXT = '#e8ecf8'
const ACC = '#38bdf8'      // akcent tématu (modrá)
const WIRE = '#9aa6c4'
const CHARGE = '#f59e0b'
const DIM = '#3a4566'

/* šipky pro SVG */
function Defs() {
  return (
    <defs>
      <marker id="m26a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACC} />
      </marker>
      <marker id="m26t" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={TXT} />
      </marker>
      <marker id="m26c" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={CHARGE} />
      </marker>
      {/* malá šipka pevné velikosti (nezvětšuje se se strokeWidth) — tečné značky na malých kružnicích */}
      <marker id="m26sa" markerWidth="10" markerHeight="10" refX="6" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACC} />
      </marker>
    </defs>
  )
}

export default function Lesson_2_6() {
  return (
    <>
      <p className="lead">
        Tady se učíš, <Term>odkud se bere magnetické pole</Term> a jak ho spočítat. U zkoušky stačí
        umět dvě věty (co dělá Biot-Savart, co dělá Ampér), jeden vzoreček pro drát a tři chytáky.
        Nic víc se k jedničce nepotřebuje.
      </p>

      <Section title="Odkud se bere magnetické pole">
        <p>
          Jediná věc, kterou si musíš zapamatovat ze všeho nejvíc: <Term id="magneticke-pole">magnetické pole</Term> budí{' '}
          <Term>pohybující se náboj</Term>. Tedy <Term id="elektricky-proud">elektrický proud</Term>. <Concept id="naboj">Náboj</Concept>, který si
          klidně leží na místě, kolem sebe magnetické pole <b>nedělá</b> (dělá jen elektrické).
          Jakmile se ale rozjede, objeví se kolem něj magnetické pole.
        </p>
        <p>
          Proto kolem drátu, kterým teče proud, vzniká magnetické pole — a kolem drátu bez proudu ne.
          Magnetické pole popisujeme veličinou <Term>magnetická indukce</Term> <M>{'\\vec B'}</M>{' '}
          (vektor, jednotka tesla <M>{'[\\,\\mathrm T\\,]'}</M>).
        </p>

        <Callout kind="info" title="Co je vlastně proud">
          <p>
            <Term>Elektrický proud</Term> je <b>náboj za čas</b> — kolik náboje proteče vodičem za
            jednu sekundu:
          </p>
          <MB>{'I = \\frac{\\mathrm dQ}{\\mathrm dt}'}</MB>
          <p>
            Jednotka je ampér <M>{'[\\,\\mathrm A = \\mathrm C/\\mathrm s\\,]'}</M>. To je celá
            definice — když po tobě budou chtít „definuj elektrický proud", řekneš přesně tohle.
          </p>
        </Callout>
      </Section>

      <Section title="Dva zákony, dva úkoly (tohle je jádro otázky)">
        <p>
          Existují dva zákony na počítání magnetického pole. Liší se tím, <i>kdy</i> se který hodí —
          a přesně tohle rozlišení po tobě chtějí:
        </p>

        <Figure caption={'Biot-Savart počítá pole „cihličku po cihličce", Ampér rovnou pro celou souměrnou situaci.'}>
          <svg viewBox="0 0 460 150" className="svg-fig">
            <Defs />
            {/* Biot-Savart strana */}
            <text x="115" y="24" fill={ACC} fontSize="14" textAnchor="middle" fontWeight="700">Biot-Savart</text>
            <line x1="30" y1="70" x2="200" y2="70" stroke={WIRE} strokeWidth="3" markerEnd="url(#m26t)" />
            <text x="208" y="74" fill={TXT} fontSize="13" fontStyle="italic">I</text>
            {/* zvyrazneny element ds */}
            <rect x="96" y="64" width="14" height="12" fill={ACC} />
            <line x1="103" y1="62" x2="103" y2="34" stroke={ACC} strokeWidth="3" markerEnd="url(#m26a)" />
            <text x="103" y="100" fill={ACC} fontSize="12" textAnchor="middle">{'ds → dB'}</text>
            <text x="115" y="130" fill={TXT} fontSize="11" textAnchor="middle">malý kousek → sečíst (∫)</text>
            {/* delici cara */}
            <line x1="235" y1="20" x2="235" y2="135" stroke={DIM} strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Amper strana */}
            <text x="350" y="24" fill={ACC} fontSize="14" textAnchor="middle" fontWeight="700">Ampér</text>
            <line x1="350" y1="50" x2="350" y2="110" stroke={WIRE} strokeWidth="3" />
            <text x="358" y="46" fill={TXT} fontSize="13" fontStyle="italic">I</text>
            <circle cx="350" cy="80" r="30" fill="none" stroke={ACC} strokeWidth="2.5" strokeDasharray="5 4" />
            <text x="350" y="130" fill={TXT} fontSize="11" textAnchor="middle">obejdi smyčku ∮</text>
          </svg>
        </Figure>

        <ol className="biglist">
          <li>
            <Term id="biot-savart"><b>Biot-Savartův zákon</b></Term> — univerzální „kalkulačka". Spočítá příspěvek{' '}
            <M>{'\\mathrm d\\vec B'}</M> od jednoho <b>nekonečně malého kousku vodiče</b>{' '}
            <M>{'\\mathrm d\\vec s'}</M> a ty pak všechny kousky <b>sečteš (zintegruješ)</b>. Funguje
            na jakýkoli tvar drátu, ale počítá se hůř.
            <MB>{'\\mathrm d\\vec B = \\frac{\\mu_0\\,I}{4\\pi}\\,\\frac{\\mathrm d\\vec s \\times \\vec r}{r^{3}}\\qquad \\vec B = \\int \\mathrm d\\vec B'}</MB>
            Velikost příspěvku: <M>{'\\mathrm dB = \\dfrac{\\mu_0\\,I\\,\\mathrm ds\\,\\sin\\alpha}{4\\pi\\,r^{2}}'}</M>, kde{' '}
            <M>{'\\alpha'}</M> je úhel mezi <M>{'\\mathrm d\\vec s'}</M> a <M>{'\\vec r'}</M>.
          </li>
          <li>
            <Term id="amperuv-zakon"><b>Ampérův zákon</b></Term> — zkratka pro souměrné případy (analogie <Concept id="gaussova-veta">Gaussova zákona</Concept>
            z elektrostatiky). Říká: když obejdeš libovolnou <b>uzavřenou křivku</b>, součet{' '}
            <M>{'\\vec B\\cdot\\mathrm d\\vec s'}</M> podél ní je roven proudu, který tou křivkou
            protéká, krát <M>{'\\mu_0'}</M>:
            <MB>{'\\oint \\vec B\\cdot\\mathrm d\\vec s = \\mu_0\\,I_c'}</MB>
            <M>{'I_c'}</M> je <b>celkový proud uvnitř</b> té smyčky. U souměrných situací (drát, cívka)
            z toho pole vytáhneš během chvilky.
          </li>
        </ol>

        <Callout kind="tip" title="Jak to říct jednou větou">
          <p>
            „<b>Biot-Savart</b> umí spočítat pole pro <i>jakýkoli</i> tvar vodiče (kousek po kousku a
            sečíst), <b>Ampér</b> je rychlá zkratka, ale jen když je úloha pěkně <i>souměrná</i>."
          </p>
        </Callout>

        <p>
          V obou se objevuje konstanta <Term id="permeabilita-vakua">permeabilita vakua</Term>{' '}
          <M>{'\\mu_0 = 4\\pi\\cdot 10^{-7}\\ \\mathrm{T\\,m/A}'}</M>. Je to jen „násobící konstanta"
          magnetického pole, podobně jako u <Concept id="coulombuv-zakon">Coulombova zákona</Concept> vystupuje <Concept id="permitivita">permitivita</Concept>.
        </p>
      </Section>

      <Section title="Nejdůležitější výsledek: pole nekonečného přímého vodiče">
        <p>
          Tohle je <b>jediný vzoreček, který musíš umět zpaměti</b>. Když dosadíš <Term id="pole-primeho-vodice">přímý nekonečný
          drát</Term> do Ampérova zákona (kružnice kolem drátu, na ní je <M>{'B'}</M> všude stejně velké),
          vyjde:
        </p>
        <MB>{'B = \\frac{\\mu_0\\,I}{2\\pi r}'}</MB>
        <p>
          kde <M>{'r'}</M> je vzdálenost od drátu. Pamatuj si tvar: pole <b>roste s proudem</b>{' '}
          <M>{'I'}</M> a <b>klesá se vzdáleností</b> <M>{'r'}</M> (jako <M>{'1/r'}</M>). Indukční čáry
          jsou <Term>soustředné kružnice</Term> kolem drátu.
        </p>

        <StepScene
          title="Jak najít směr a tvar pole kolem drátu"
          viewBox="0 0 360 220"
          captions={[
            <>Svislým drátem teče proud <M>{'I'}</M> nahoru. Zatím nevíme, kudy pole míří.</>,
            <>Palec pravé ruky ukáže ve směru proudu <M>{'I'}</M> — pokrčené prsty pak ukazují, kudy „obtáčí" pole <M>{'\\vec B'}</M>. To je <Term>Ampérovo pravidlo pravé ruky</Term>.</>,
            <>Pohled shora: pole tvoří <Term>soustředné kružnice</Term> kolem drátu. Čím dál (větší <M>{'r'}</M>), tím slabší — podle <M>{'B=\\mu_0 I/2\\pi r'}</M>.</>,
          ]}
        >
          <defs>
            <marker id="m26a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={ACC} /></marker>
            <marker id="m26t" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={WIRE} /></marker>
            <marker id="m26c" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={CHARGE} /></marker>
            {/* malá šipka (pevná velikost) pro tečné značky na kružnicích */}
            <marker id="m26s" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill={ACC} /></marker>
          </defs>

          {/* ——— BOČNÍ POHLED (kroky 0–1): svislý drát s proudem nahoru ——— */}
          <ALine x1={180} y1={196} x2={180} y2={28} stroke={WIRE} strokeWidth={4} markerEnd="url(#m26t)" opacity={[1, 1, 0]} />
          <AText x={196} y={40} fill={TXT} fontSize="16" fontStyle="italic" opacity={[1, 1, 0]}>I</AText>
          <AText x={180} y={214} fill={DIM} fontSize="12" textAnchor="middle" opacity={[1, 0, 0]}>vodič</AText>

          {/* palec (krok 1) — vlevo od drátu, mimo elipsu pole */}
          <ALine x1={92} y1={182} x2={92} y2={112} stroke={CHARGE} strokeWidth={4} markerEnd="url(#m26c)" opacity={[0, 1, 0]} />
          <AText x={92} y={200} fill={CHARGE} fontSize="12" textAnchor="middle" opacity={[0, 1, 0]}>palec = I</AText>
          {/* obtáčející pole — elipsa kolem drátu (krok 1) */}
          <APath d="M180,84 a58,22 0 1 1 -0.1,0" fill="none" stroke={ACC} strokeWidth={2.5} markerEnd="url(#m26a)" opacity={[0, 1, 0]} />
          <AText x={250} y={80} fill={ACC} fontSize="13" opacity={[0, 1, 0]}>prsty = B</AText>

          {/* ——— POHLED SHORA (krok 2): drát jako tečka, soustředné kružnice ——— */}
          {/* tečka = drát kolmo k rovině, proud k tobě */}
          <ACircle cx={180} cy={118} r={6} fill={WIRE} opacity={[0, 0, 1]} />
          <ACircle cx={180} cy={118} r={2.5} fill={TXT} opacity={[0, 0, 1]} />
          <AText x={180} y={102} fill={TXT} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>I (k tobě)</AText>
          {/* soustředné kružnice (slábnou ven) */}
          <ACircle cx={180} cy={118} r={36} fill="none" stroke={ACC} strokeWidth={2.5} opacity={[0, 0, 1]} />
          <ACircle cx={180} cy={118} r={60} fill="none" stroke={ACC} strokeWidth={2.5} opacity={[0, 0, 0.7]} />
          <ACircle cx={180} cy={118} r={84} fill="none" stroke={ACC} strokeWidth={2.5} opacity={[0, 0, 0.45]} />
          {/* tečné šipky (proti směru hod. ručiček) na pravém okraji každé kružnice */}
          <ALine x1={216} y1={124} x2={216} y2={112} stroke={ACC} strokeWidth={2.5} markerEnd="url(#m26s)" opacity={[0, 0, 1]} />
          <ALine x1={240} y1={124} x2={240} y2={112} stroke={ACC} strokeWidth={2.5} markerEnd="url(#m26s)" opacity={[0, 0, 0.7]} />
          <ALine x1={264} y1={124} x2={264} y2={112} stroke={ACC} strokeWidth={2.5} markerEnd="url(#m26s)" opacity={[0, 0, 0.45]} />
          <AText x={180} y={212} fill={DIM} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>B slábne se vzdáleností r</AText>
        </StepScene>
      </Section>

      <Section title="Magnetické čáry jsou uzavřené — magnetický náboj neexistuje">
        <p>
          U elektrického pole čáry <i>někde začínají</i> (na + náboji) a <i>někde končí</i> (na −).
          U magnetického pole to tak <b>není</b>: indukční čáry jsou vždycky{' '}
          <Term>uzavřené smyčky</Term> — nemají začátek ani konec, samy se zacelí.
        </p>
        <p>
          Důsledek, který zkoušející milují: <Term>magnetický náboj (samostatný severní nebo jižní
          pól) neexistuje</Term>. Když rozlomíš magnet, nedostaneš zvlášť „sever" a zvlášť „jih" —
          dostaneš dva menší magnety, každý zase se dvěma póly. Matematicky to říká, že tok indukce
          libovolnou <b>uzavřenou</b> plochou je nulový.
        </p>

        <Figure caption="Elektrické čáry mají konce (vlevo). Magnetické čáry jsou uzavřené smyčky bez začátku a konce (vpravo).">
          <svg viewBox="0 0 460 170" className="svg-fig">
            <Defs />
            {/* vlevo: el. naboj se sipkami ven */}
            <circle cx="95" cy="85" r="16" fill={CHARGE} />
            <text x="95" y="91" fill="#0b1020" fontSize="18" textAnchor="middle" fontWeight="700">+</text>
            <line x1="113" y1="85" x2="165" y2="85" stroke={CHARGE} strokeWidth="2.5" markerEnd="url(#m26c)" />
            <line x1="106" y1="70" x2="150" y2="40" stroke={CHARGE} strokeWidth="2.5" markerEnd="url(#m26c)" />
            <line x1="106" y1="100" x2="150" y2="130" stroke={CHARGE} strokeWidth="2.5" markerEnd="url(#m26c)" />
            <text x="100" y="160" fill={TXT} fontSize="12" textAnchor="middle">elektrické: čáry mají konce</text>
            {/* delici cara */}
            <line x1="232" y1="15" x2="232" y2="150" stroke={DIM} strokeWidth="1.5" strokeDasharray="4 4" />
            {/* vpravo: drat (tecka) + uzavrene smycky */}
            <circle cx="360" cy="80" r="5" fill={WIRE} />
            <circle cx="360" cy="80" r="2" fill={TXT} />
            <circle cx="360" cy="80" r="26" fill="none" stroke={ACC} strokeWidth="2.5" />
            <circle cx="360" cy="80" r="48" fill="none" stroke={ACC} strokeWidth="2.5" opacity="0.6" />
            {/* tečné šipky (proti směru hod. ručiček) na pravém okraji kružnic — pevná velikost hrotu */}
            <line x1="386" y1="90" x2="386" y2="74" stroke={ACC} strokeWidth="2.5" markerEnd="url(#m26sa)" />
            <line x1="408" y1="92" x2="408" y2="74" stroke={ACC} strokeWidth="2.5" markerEnd="url(#m26sa)" opacity="0.6" />
            <text x="360" y="160" fill={TXT} fontSize="12" textAnchor="middle">magnetické: uzavřené smyčky</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Magnetické pole budí <b>pohybující se</b> náboj (proud) — <b>ne</b> náboj v klidu. Náboj v
            klidu má jen elektrické pole. Tohle je nejčastější chyták celé kapitoly.
          </li>
          <li>
            Magnetické indukční čáry jsou <b>uzavřené smyčky</b> (nemají začátek ani konec) — proto{' '}
            <b>magnetický náboj neexistuje</b>. Nepleť s elektrickými čarami, které začínají a končí na
            nábojích.
          </li>
          <li>
            Nezaměň oba zákony: <b>Biot-Savart</b> = univerzální výpočet (kousek po kousku, integrál),{' '}
            <b>Ampér</b> = rychlá zkratka <M>{'\\oint\\vec B\\cdot\\mathrm d\\vec s=\\mu_0 I_c'}</M> jen pro
            souměrné případy.
          </li>
          <li>
            Ve vzorci pro drát je ve jmenovateli <M>{'2\\pi r'}</M> (ne <M>{'4\\pi r^2'}</M>). Pole klesá
            jako <M>{'1/r'}</M>, ne jako <M>{'1/r^2'}</M>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Říct, že zdrojem magnetického pole je pohybující se náboj (proud), ne náboj v klidu.',
          'Vysvětlit, co popisuje Biot-Savartův zákon a co Ampérův zákon (a kdy se který hodí).',
          'Napsat Ampérův zákon ∮B·ds = μ₀·Iᶜ a vzorec pole nekonečného vodiče B = μ₀I/2πr.',
          'Definovat elektrický proud jako náboj za čas: I = dQ/dt [A].',
          'Vědět, že indukční čáry jsou uzavřené smyčky a magnetický náboj neexistuje.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je zdrojem magnetického pole?',
            a: <>Pohybující se náboj, tedy <b>elektrický proud</b>. Náboj v klidu magnetické pole nebudí (má jen elektrické).</>,
          },
          {
            q: <>Jaký je rozdíl mezi Biot-Savartovým a Ampérovým zákonem?</>,
            a: <><b>Biot-Savart</b> spočítá indukci <M>{'\\mathrm d\\vec B'}</M> od malého kousku vodiče a sečtením (integrací) dá pole <i>libovolného</i> tvaru vodiče. <b>Ampér</b> (<M>{'\\oint\\vec B\\cdot\\mathrm d\\vec s=\\mu_0 I_c'}</M>) je rychlá zkratka, ale prakticky jen pro <i>souměrné</i> případy.</>,
          },
          {
            q: 'Jak velké je magnetické pole kolem nekonečného přímého vodiče a jak ho určíš směrem?',
            a: <><M>{'B = \\dfrac{\\mu_0 I}{2\\pi r}'}</M> (klesá jako <M>{'1/r'}</M>). Směr: palec pravé ruky ve směru proudu, pokrčené prsty ukazují směr <M>{'\\vec B'}</M> — Ampérovo pravidlo pravé ruky. Čáry jsou soustředné kružnice.</>,
          },
          {
            q: <>Definuj elektrický proud a řekni, proč neexistuje magnetický náboj.</>,
            a: <>Proud je náboj za čas, <M>{'I=\\mathrm dQ/\\mathrm dt'}</M> (jednotka ampér). Magnetický náboj neexistuje, protože indukční čáry jsou <b>uzavřené smyčky</b> — nemají kde začít ani skončit; rozlomený magnet dá zase dva dvoupólové magnety.</>,
          },
        ]}
      />
    </>
  )
}
