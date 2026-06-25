import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.3'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější wiki-proklikávání). */
export const provides = {
  'intenzita-pole': { lesson: '2.3', label: 'intenzita pole', short: 'E = F/q — síla na jednotkový náboj (vektor).' },
  'potencial': { lesson: '2.3', label: 'potenciál', short: 'φ = Ep/q — energie na jednotkový náboj (skalár).' },
  'silocary': { lesson: '2.3', label: 'siločáry', short: 'Čáry znázorňující směr intenzity pole.' },
  'ekvipotencialy': { lesson: '2.3', label: 'ekvipotenciální plochy', short: 'Plochy stejného potenciálu; E je k nim kolmá.' },
  'superpozice': { lesson: '2.3', label: 'princip superpozice', short: 'Pole více zdrojů se vektorově sčítají.' },
}

const TXT = '#e8ecf8'
const ACC = '#38bdf8' // akcent tématu (intenzita / siločáry)
const POT = '#a78bfa' // potenciál / ekvipotenciály (fialová)
const POS = '#fb7185' // kladný náboj
const NEG = '#60a5fa' // záporný náboj
const GREEN = '#34d399' // výsledek / rovnováha
const MUTE = '#9aa6c4'

/* Šipky pro SVG (každá barva má vlastní marker). */
function Defs() {
  const arrows: [string, string][] = [
    ['ar-acc', ACC],
    ['ar-pos', POS],
    ['ar-neg', NEG],
    ['ar-green', GREEN],
    ['ar-txt', TXT],
  ]
  return (
    <defs>
      {arrows.map(([idm, c]) => (
        <marker key={idm} id={idm} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 z" fill={c} />
        </marker>
      ))}
    </defs>
  )
}

/* Náboj jako barevný kroužek se znaménkem. */
function Charge({ x, y, sign, r = 13 }: { x: number; y: number; sign: '+' | '−'; r?: number }) {
  const fill = sign === '+' ? POS : NEG
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <text x={x} y={y + 1} fill="#0b1020" fontSize={r + 4} fontWeight="700" textAnchor="middle" dominantBaseline="middle">
        {sign}
      </text>
    </g>
  )
}

export default function Lesson_2_3() {
  return (
    <>
      <p className="lead">
        <Concept id="naboj">Náboj</Concept> kolem sebe „cítíš“ dvěma způsoby: jako <Term>sílu</Term> (to je{' '}
        <b>intenzita</b>, vektor) a jako <Term>energii polohy</Term> (to je <b>potenciál</b>, skalár).
        Tahle lekce je u zkoušky vděčná — stačí umět dva vzorečky, nakreslit siločáry a nespadnout
        do jedné jediné pasti (intenzita směřuje dolů, ne nahoru — a uprostřed mezi dvěma náboji se
        vektory ruší, ale skaláry sčítají).
      </p>

      <Section title="Dva pohledy na elektrické pole: intenzita a potenciál">
        <p>
          Kolem každého náboje je <Term>elektrostatické pole</Term> — neviditelná „nálada prostoru“,
          která působí na jiné náboje. Popisujeme ji dvěma veličinami. Obě dostaneš tak, že vezmeš
          něco, co už znáš (sílu, energii), a <b>vydělíš to nábojem</b> — aby to nezáviselo na tom,
          jak velký náboj zrovna zkoušíš.
        </p>

        <p>
          <Term id="intenzita-pole"><b>Intenzita</b></Term> <M>{'\\vec E'}</M> je <Term>síla na jednotkový (kladný) náboj</Term>:
        </p>
        <MB>{'\\vec E = \\frac{\\vec F_e}{q} \\qquad [\\,\\mathrm{N\\,C^{-1}} = \\mathrm{V\\,m^{-1}}\\,]'}</MB>
        <p>
          Je to <Term>vektor</Term> — má velikost <i>i</i> směr. Říká: „kdybys sem dal náboj{' '}
          <M>{'q'}</M>, dostane sílu <M>{'\\vec F_e = q\\,\\vec E'}</M>.“ U kladného náboje míří{' '}
          <M>{'\\vec F_e'}</M> a <M>{'\\vec E'}</M> <b>stejně</b>, u záporného <b>opačně</b>.
        </p>

        <p>
          <Term id="potencial"><b>Potenciál</b></Term> <M>{'\\varphi'}</M> je <Term>potenciální energie na jednotkový náboj</Term>:
        </p>
        <MB>{'\\varphi = \\frac{E_p}{q} \\qquad [\\,\\mathrm{V} = \\mathrm{J\\,C^{-1}}\\,]'}</MB>
        <p>
          Je to <Term>skalár</Term> — jen číslo, žádný směr. Fyzikálně je to <Concept id="prace"><b>práce</b></Concept> potřebná
          k přenesení jednotkového kladného náboje z místa s nulovým potenciálem sem (analogie:
          kolik práce dá vyzvednout těleso do dané výšky). Rozdíl potenciálů dvou míst je{' '}
          <Term>napětí</Term>: <M>{'U_{AB} = \\varphi_A - \\varphi_B'}</M>.
        </p>

        <Callout kind="chytak" title="Vektor vs. skalár — tohle si pamatuj jako otčenáš">
          <ul>
            <li><b>Intenzita <M>{'\\vec E'}</M> je VEKTOR</b> — má směr, sčítá se vektorově (šipky).</li>
            <li><b>Potenciál <M>{'\\varphi'}</M> je SKALÁR</b> — jen číslo, sčítá se obyčejně (s plus/minus).</li>
          </ul>
          Tenhle rozdíl je jádro nejoblíbenějšího chytáku celé kapitoly (viz řešený příklad níže).
        </Callout>
      </Section>

      <Section title="Siločáry: jak nakreslit pole">
        <p>
          Pole kreslíme <Term id="silocary">siločárami</Term> (indukčními čarami). Pravidlo: <b>tečna k siločáře
          v daném bodě ukazuje směr intenzity</b> <M>{'\\vec E'}</M> v tom bodě. Siločáry{' '}
          <b>vycházejí z kladných nábojů a končí v záporných</b> (nebo míří do nekonečna) a nikdy se
          neprotínají.
        </p>

        <Figure caption="Čtyři typické konfigurace. U kladného náboje siločáry míří VEN, u záporného DOVNITŘ. Souhlasné náboje se „rozhrnou“ (odpuzování), opačné se spojí siločárami od + k −.">
          <svg viewBox="0 0 680 200" className="svg-fig">
            <Defs />
            {/* --- 1) samotný + --- */}
            <text x="80" y="22" fill={MUTE} fontSize="12" textAnchor="middle">jeden +</text>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
              const rad = (a * Math.PI) / 180
              const x1 = 80 + 15 * Math.cos(rad)
              const y1 = 105 + 15 * Math.sin(rad)
              const x2 = 80 + 48 * Math.cos(rad)
              const y2 = 105 + 48 * Math.sin(rad)
              return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={POS} strokeWidth="2" markerEnd="url(#ar-pos)" />
            })}
            <Charge x={80} y={105} sign="+" r={11} />

            {/* --- 2) samotný − --- */}
            <text x="230" y="22" fill={MUTE} fontSize="12" textAnchor="middle">jeden −</text>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
              const rad = (a * Math.PI) / 180
              const x1 = 230 + 48 * Math.cos(rad)
              const y1 = 105 + 48 * Math.sin(rad)
              const x2 = 230 + 17 * Math.cos(rad)
              const y2 = 105 + 17 * Math.sin(rad)
              return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={NEG} strokeWidth="2" markerEnd="url(#ar-neg)" />
            })}
            <Charge x={230} y={105} sign="−" r={11} />

            {/* --- 3) ++ odpuzování --- */}
            <text x="430" y="22" fill={MUTE} fontSize="12" textAnchor="middle">++ (odpuzování)</text>
            <g fill="none" stroke={POS} strokeWidth="1.8">
              <path d="M392,105 Q372,75 368,45" markerEnd="url(#ar-pos)" />
              <path d="M392,105 Q360,95 332,80" markerEnd="url(#ar-pos)" />
              <path d="M392,105 Q360,115 332,130" markerEnd="url(#ar-pos)" />
              <path d="M392,105 Q372,135 368,165" markerEnd="url(#ar-pos)" />
              <path d="M468,105 Q488,75 492,45" markerEnd="url(#ar-pos)" />
              <path d="M468,105 Q500,95 528,80" markerEnd="url(#ar-pos)" />
              <path d="M468,105 Q500,115 528,130" markerEnd="url(#ar-pos)" />
              <path d="M468,105 Q488,135 492,165" markerEnd="url(#ar-pos)" />
              <path d="M403,93 Q415,72 414,48" markerEnd="url(#ar-pos)" />
              <path d="M457,93 Q445,72 446,48" markerEnd="url(#ar-pos)" />
              <path d="M403,117 Q415,138 414,162" markerEnd="url(#ar-pos)" />
              <path d="M457,117 Q445,138 446,162" markerEnd="url(#ar-pos)" />
            </g>
            <Charge x={392} y={105} sign="+" r={11} />
            <Charge x={468} y={105} sign="+" r={11} />

            {/* --- 4) +− dipól --- */}
            <text x="610" y="22" fill={MUTE} fontSize="12" textAnchor="middle">+ − (dipól)</text>
            <g fill="none" stroke={ACC} strokeWidth="1.8">
              <path d="M584,105 L626,105" markerEnd="url(#ar-acc)" />
              <path d="M580,96 C595,68 615,68 630,96" markerEnd="url(#ar-acc)" />
              <path d="M578,88 C595,52 615,52 632,88" markerEnd="url(#ar-acc)" />
              <path d="M580,114 C595,142 615,142 630,114" markerEnd="url(#ar-acc)" />
              <path d="M578,122 C595,158 615,158 632,122" markerEnd="url(#ar-acc)" />
            </g>
            <Charge x={572} y={105} sign="+" r={11} />
            <Charge x={638} y={105} sign="−" r={11} />
          </svg>
        </Figure>
      </Section>

      <Section title="Ekvipotenciální plochy: vrstevnice pole">
        <p>
          <Term id="ekvipotencialy">Ekvipotenciální plocha</Term> = množina bodů se <b>stejným potenciálem</b>{' '}
          <M>{'\\varphi'}</M>. Nejlepší přirovnání jsou <b>vrstevnice na mapě</b>: po vrstevnici
          chodíš ve stejné výšce, po ekvipotenciále se „pohybuješ“ při stejné energii — a{' '}
          <b>nekonáš žádnou práci</b>. Kolem bodového náboje jsou to soustředné kulové slupky
          (na obrázku kružnice).
        </p>

        <Callout kind="chytak" title="Klíčový vztah: E ⊥ ekvipotenciála">
          <Term>Intenzita je vždy kolmá k ekvipotenciální ploše</Term> a míří{' '}
          <b>ve směru nejrychlejšího POKLESU potenciálu</b> (z „kopce“ dolů, od vyššího{' '}
          <M>{'\\varphi'}</M> k nižšímu). Stejně jako voda teče kolmo přes vrstevnice z kopce dolů.
        </Callout>

        <Figure caption="Kolem náboje: siločáry (modré, radiální) jsou kolmé k ekvipotenciálám (fialové kružnice). Intenzita E míří od + ven = tam, kde potenciál nejrychleji klesá.">
          <svg viewBox="0 0 360 240" className="svg-fig">
            <Defs />
            {/* ekvipotenciály */}
            {[32, 56, 80].map((r) => (
              <circle key={r} cx="180" cy="126" r={r} fill="none" stroke={POT} strokeWidth="1.6" strokeDasharray="5 5" />
            ))}
            <text x="180" y="18" fill={POT} fontSize="13" textAnchor="middle">ekvipotenciály φ = konst.</text>
            {/* siločáry radiálně ven */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
              const rad = (a * Math.PI) / 180
              const x1 = 180 + 16 * Math.cos(rad)
              const y1 = 126 + 16 * Math.sin(rad)
              const x2 = 180 + 90 * Math.cos(rad)
              const y2 = 126 + 90 * Math.sin(rad)
              return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ACC} strokeWidth="2" markerEnd="url(#ar-acc)" />
            })}
            <Charge x={180} y={126} sign="+" r={12} />
            {/* popisek kolmosti */}
            <text x="356" y="84" fill={ACC} fontSize="13" textAnchor="end">E (siločára)</text>
            <text x="180" y="232" fill={TXT} fontSize="12" textAnchor="middle">E ⊥ ekvipotenciála</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Princip superpozice: pole se sčítají">
        <p>
          Když je nábojů víc, každý vytváří své pole <b>nezávisle</b> na ostatních a výsledek je
          jejich <b>součet</b> — to je <Term id="superpozice">princip superpozice</Term>. Ale pozor, jak co sčítáš:
        </p>
        <ul>
          <li>
            <b>Intenzity vektorově</b> (po šipkách, podle směru):{' '}
            <M>{'\\vec E = \\vec E_1 + \\vec E_2 + \\dots'}</M>
          </li>
          <li>
            <b>Potenciály obyčejně</b> (jen čísla, ale POZOR na znaménko náboje):{' '}
            <M>{'\\varphi = \\varphi_1 + \\varphi_2 + \\dots'}</M>
          </li>
        </ul>
        <p>
          Právě proto se může stát, že vektory v nějakém bodě „vyjdou nazmar“ (sečtou se na nulu),
          ale čísla ne. Přesně tohle si teď proklikneme — je to <b>povinný zkušební příklad</b>.
        </p>
      </Section>

      <Section title="Povinný řešený příklad: dvě stejné kuličky (chyták roku)">
        <p>
          <b>Zadání:</b> Dvě kuličky mají <b>stejný náboj</b> <M>{'Q'}</M> a jsou ve vzdálenosti{' '}
          <M>{'r'}</M>. Co je přesně <b>uprostřed</b> mezi nimi — jaká je tam intenzita a jaký
          potenciál? Klikej <b>Další →</b>.
        </p>

        <StepScene
          title="Uprostřed mezi dvěma stejnými náboji"
          viewBox="0 0 420 200"
          captions={[
            <>Dvě kuličky se stejným nábojem <M>{'+Q'}</M> ve vzdálenosti <M>{'r'}</M>. Sledujeme bod <b>S</b> přesně uprostřed (vzdálenost <M>{'r/2'}</M> od každé).</>,
            <>Levá kulička tlačí kladný testovací náboj <b>doprava</b>, pravá stejně silně <b>doleva</b>. Šipky <M>{'\\vec E_1, \\vec E_2'}</M> jsou stejně dlouhé a opačné.</>,
            <>Vektory se <b>vyruší</b>: <M>{'\\vec E = \\vec E_1 + \\vec E_2 = 0'}</M>. Uprostřed by testovací náboj necítil žádnou výslednou sílu.</>,
            <>Ale potenciály jsou <b>kladná čísla</b> (oba náboje kladné) a <b>sčítají se</b>: <M>{'\\varphi = \\varphi_1 + \\varphi_2 > 0'}</M>. Žádné rušení — skaláry nemají směr!</>,
          ]}
        >
          {/* markery šipek — pevná velikost (userSpaceOnUse), aby nerostly se strokeWidth */}
          <defs>
            <marker id="s23-acc" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="8" refY="5" orient="auto">
              <path d="M0,0 L11,5 L0,10 z" fill={ACC} />
            </marker>
            <marker id="s23-pot" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="8" refY="5" orient="auto">
              <path d="M0,0 L11,5 L0,10 z" fill={POT} />
            </marker>
          </defs>

          {/* osa spojnice — stále přítomná */}
          <ALine x1={93} y1={100} x2={327} y2={100} stroke={MUTE} strokeWidth={1.5} strokeDasharray="4 4" />

          {/* dva kladné náboje — stále přítomné (kroužek + znaménko) */}
          <ACircle cx={80} cy={100} r={13} fill={POS} />
          <AText x={80} y={106} fill="#0b1020" fontSize="17" fontWeight="700" textAnchor="middle">+</AText>
          <ACircle cx={340} cy={100} r={13} fill={POS} />
          <AText x={340} y={106} fill="#0b1020" fontSize="17" fontWeight="700" textAnchor="middle">+</AText>

          {/* popisky náboje +Q — jen v kroku 0 */}
          <AText x={80} y={62} fill={POS} fontSize="15" textAnchor="middle" opacity={[1, 0, 0, 0]}>+Q</AText>
          <AText x={340} y={62} fill={POS} fontSize="15" textAnchor="middle" opacity={[1, 0, 0, 0]}>+Q</AText>

          {/* bod S — objeví se v kroku 0, pak schován */}
          <ACircle cx={210} cy={100} r={5} fill={GREEN} opacity={[1, 0, 0, 0]} />
          <AText x={210} y={84} fill={GREEN} fontSize="15" textAnchor="middle" opacity={[1, 0, 0, 0]}>S</AText>
          <AText x={145} y={123} fill={MUTE} fontSize="13" textAnchor="middle" opacity={[1, 0, 0, 0]}>r/2</AText>
          <AText x={275} y={123} fill={MUTE} fontSize="13" textAnchor="middle" opacity={[1, 0, 0, 0]}>r/2</AText>

          {/* krok 1: intenzity (vektory) — E1 doprava, E2 doleva, posunuté svisle aby se nepřekrývaly */}
          <ALine x1={188} y1={88} x2={252} y2={88} stroke={ACC} strokeWidth={3} markerEnd="url(#s23-acc)" opacity={[0, 1, 0, 0]} />
          <AText x={236} y={78} fill={ACC} fontSize="14" textAnchor="middle" opacity={[0, 1, 0, 0]}>E₁ →</AText>
          <ALine x1={232} y1={112} x2={168} y2={112} stroke={POT} strokeWidth={3} markerEnd="url(#s23-pot)" opacity={[0, 1, 0, 0]} />
          <AText x={184} y={130} fill={POT} fontSize="14" textAnchor="middle" opacity={[0, 1, 0, 0]}>← E₂</AText>
          <AText x={210} y={64} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 1, 0, 0]}>stejně velké, opačné</AText>

          {/* krok 2: E = 0 — kroužek a text se objeví */}
          <ACircle cx={210} cy={100} r={[5, 5, 24, 5]} fill="none" stroke={GREEN} strokeWidth={2.5} opacity={[0, 0, 1, 0]} />
          <AText x={210} y={106} fill={GREEN} fontSize="17" fontWeight="700" textAnchor="middle" opacity={[0, 0, 1, 0]}>E = 0</AText>
          <AText x={210} y={160} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 0, 1, 0]}>intenzity se vyruší (vektor)</AText>

          {/* krok 3: φ ≠ 0 — potenciály se sčítají */}
          <AText x={150} y={78} fill={POT} fontSize="15" textAnchor="middle" opacity={[0, 0, 0, 1]}>φ₁ {'>'} 0</AText>
          <AText x={270} y={78} fill={POT} fontSize="15" textAnchor="middle" opacity={[0, 0, 0, 1]}>φ₂ {'>'} 0</AText>
          <AText x={210} y={150} fill={GREEN} fontSize="17" fontWeight="700" textAnchor="middle" opacity={[0, 0, 0, 1]}>φ = φ₁ + φ₂ ≠ 0</AText>
          <AText x={210} y={172} fill={TXT} fontSize="12" textAnchor="middle" opacity={[0, 0, 0, 1]}>potenciály se sčítají (skalár)</AText>
        </StepScene>

        <Callout kind="chytak" title="TADY padá nejvíc lidí">
          Uprostřed mezi dvěma stejnými náboji je <M>{'\\vec E = 0'}</M>, ale{' '}
          <M>{'\\varphi \\neq 0'}</M>. Důvod: <b>intenzita je vektor</b> (opačné šipky se odečtou),{' '}
          <b>potenciál je skalár</b> (kladná čísla se jen přičtou). Zkoušející tuhle dvojici miluje —
          nikdy neřekni „když je E nula, je nula i φ“. Naopak: dvě opačné kuličky (<M>{'+Q'}</M> a{' '}
          <M>{'-Q'}</M>) by daly uprostřed <M>{'\\varphi = 0'}</M>, ale <M>{'\\vec E \\neq 0'}</M> —
          přesně obráceně.
        </Callout>
      </Section>

      <Section title="Náboj v poli mezi deskami (kam ho to požene)">
        <p>
          Praktická ukázka „nejrychlejšího poklesu“: kladný náboj puštěný v poli mezi deskami se
          rozjede <b>ve směru <M>{'\\vec E'}</M></b> — tedy z místa vyššího potenciálu do nižšího,
          a přitom <b>zrychluje</b> (<Concept id="potencialni-energie">potenciální energie</Concept> se mění na <Concept id="kineticka-energie">kinetickou</Concept>, jako když plaveš po
          proudu).
        </p>
        <Figure caption="Mezi deskami: E (modrá) míří z desky s vyšším φ k nižšímu. Kladný náboj se po proudu zrychluje (v roste).">
          <svg viewBox="0 0 360 170" className="svg-fig">
            <Defs />
            {/* desky */}
            <line x1="40" y1="25" x2="40" y2="145" stroke={POS} strokeWidth="4" />
            <line x1="320" y1="25" x2="320" y2="145" stroke={NEG} strokeWidth="4" />
            <text x="40" y="18" fill={POS} fontSize="13" textAnchor="middle">φ vyšší</text>
            <text x="320" y="18" fill={NEG} fontSize="13" textAnchor="middle">φ nižší</text>
            {/* intenzita E */}
            {[55, 90, 125].map((y) => (
              <line key={y} x1="55" y1={y} x2="300" y2={y} stroke={ACC} strokeWidth="2" strokeDasharray="10 7" markerEnd="url(#ar-acc)" />
            ))}
            <text x="180" y="48" fill={ACC} fontSize="13" textAnchor="middle">E</text>
            {/* náboj a rychlost */}
            <Charge x={110} y={90} sign="+" r={11} />
            <line x1="124" y1="90" x2="175" y2="90" stroke={GREEN} strokeWidth="3" markerEnd="url(#ar-green)" />
            <text x="150" y="80" fill={GREEN} fontSize="12" textAnchor="middle">v roste</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Souhrn chytáků (kde se ztrácejí body)">
        <ul>
          <li>
            Intenzita míří ve směru <b>nejrychlejšího POKLESU</b> potenciálu (dolů z kopce),{' '}
            <b>ne</b> růstu. Formálně <M>{'\\vec E = -\\,\\mathrm{grad}\\,\\varphi'}</M> — to mínus je celá past.
          </li>
          <li><b>E je vektor, φ je skalár.</b> Intenzity sčítej vektorově, potenciály obyčejně (s plus/minus).</li>
          <li>Uprostřed dvou <b>stejných</b> nábojů: <M>{'\\vec E = 0'}</M>, ale <M>{'\\varphi \\neq 0'}</M>.</li>
          <li><Term>Intenzita je vždy kolmá</Term> k ekvipotenciální ploše (siločára ⊥ vrstevnice).</li>
          <li>U kladného náboje míří <M>{'\\vec E'}</M> ven a <M>{'\\vec F_e'}</M> stejně; u záporného opačně.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat a vysvětlit E = F/q (vektor) a φ = Ep/q (skalár), uvést jednotky.',
          'Nakreslit siločáry pro +, −, ++ a +− a vysvětlit, co znamenají.',
          'Vysvětlit ekvipotenciální plochy (vrstevnice) a že E ⊥ ekvipotenciála.',
          'Vyslovit princip superpozice a vědět: intenzity sčítám vektorově, potenciály obyčejně.',
          'Vyřešit: uprostřed dvou stejných nábojů je E = 0, ale φ ≠ 0 (vektor vs. skalár).',
          'Vědět, že E míří ve směru nejrychlejšího poklesu potenciálu.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Jaký je rozdíl mezi intenzitou <M>{'\\vec E'}</M> a potenciálem <M>{'\\varphi'}</M>?</>,
            a: (
              <>
                <M>{'\\vec E = \\vec F_e/q'}</M> je <b>vektor</b> (síla na jednotkový náboj, má směr).{' '}
                <M>{'\\varphi = E_p/q'}</M> je <b>skalár</b> (energie na jednotkový náboj, jen číslo).
                Proto se intenzity sčítají vektorově a potenciály obyčejně.
              </>
            ),
          },
          {
            q: <>Dvě kuličky mají stejný náboj <M>{'Q'}</M> ve vzdálenosti <M>{'r'}</M>. Jaká je uprostřed intenzita a jaký potenciál?</>,
            a: (
              <>
                Intenzita <M>{'\\vec E = 0'}</M> (opačné, stejně velké vektory se vyruší), ale
                potenciál <M>{'\\varphi \\neq 0'}</M> (dvě kladná čísla se sečtou). Klasická past —
                vektor vs. skalár.
              </>
            ),
          },
          {
            q: <>Jaký je vztah mezi siločárami a ekvipotenciálními plochami a kterým směrem míří <M>{'\\vec E'}</M>?</>,
            a: (
              <>
                Jsou na sebe <b>kolmé</b> (siločára ⊥ ekvipotenciála). Intenzita <M>{'\\vec E'}</M>{' '}
                míří ve směru <b>nejrychlejšího poklesu</b> potenciálu — od vyššího <M>{'\\varphi'}</M>{' '}
                k nižšímu (z kopce dolů).
              </>
            ),
          },
          {
            q: <>Co říká princip superpozice pro soustavu nábojů?</>,
            a: (
              <>
                Každý náboj budí své pole nezávisle a výsledek je jejich součet:{' '}
                <M>{'\\vec E = \\sum_i \\vec E_i'}</M> (vektorově) a{' '}
                <M>{'\\varphi = \\sum_i \\varphi_i'}</M> (skalárně, se znaménky).
              </>
            ),
          },
        ]}
      />
    </>
  )
}
