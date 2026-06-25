import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, AGroup, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.11'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'magneticky-moment-latky': { lesson: '2.11', label: 'magnetický moment látky', short: 'Atom se chová jako maličká proudová smyčka — má magnetický moment z pohybu a spinu elektronů.' },
  'magnetizace': { lesson: '2.11', label: 'vektor magnetizace M', short: 'Magnetický moment jednotkového objemu látky; měří, jak je látka zmagnetovaná.' },
  'magneticka-susceptibilita': { lesson: '2.11', label: 'magnetická susceptibilita χ', short: 'Číslo látky: χ < 0 diamagnet (zeslabí pole), χ > 0 paramagnet (zesílí pole).' },
  'diamagnetikum': { lesson: '2.11', label: 'diamagnetikum', short: 'Vlastní moment atomů = 0; pole indukuje moment PROTI sobě → mírně zeslabí.' },
  'paramagnetikum': { lesson: '2.11', label: 'paramagnetikum', short: 'Vlastní moment atomů ≠ 0; pole momenty natočí PO sobě → zesílí.' },
  'larmorova-precese': { lesson: '2.11', label: 'Larmorova precese', short: 'Pomalé otáčení elektronového obalu kolem směru pole; zdroj diamagnetismu.' },
}

const ACC = '#38bdf8'   // akcent tématu (vnější pole B)
const TXT = '#e8ecf8'
const N = '#fb7185'      // pól / moment proti poli (zeslabení)
const S = '#34d399'      // moment po poli (zesílení)
const MUTED = '#9aa6c4'
const ELEC = '#60a5fa'   // elektron

/* šipka pro SVG (marker v dané barvě, unikátní id) */
function Arrow({ id: mid, color }: { id: string; color: string }) {
  return (
    <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
    </marker>
  )
}


export default function Lesson_2_11() {
  return (
    <>
      <p className="lead">
        Pozor, tohle je <b>samostatná zkoušková otázka</b> — neslévej ji s elektrostatikou (lekce 2.10)!
        Stačí umět jednu myšlenku: <Term>každý atom je maličká <Concept id="proudova-smycka">proudová smyčka</Concept></Term>, a vnější magnetické
        pole tyhle smyčky buď <b>natočí po sobě</b> (zesílí pole), nebo v nich <b>vyvolá moment proti sobě</b>{' '}
        (zeslabí). Z toho plyne dělení látek a jeden vzoreček. Hotovo, bod je tvůj.
      </p>

      <Section title="Z čeho magnetismus látky vůbec je">
        <p>
          V látce nejsou žádné „magnetické náboje" — magnetismus dělají <b>pohybující se elektrony</b>.
          Každý elektron v obalu se chová dvojmo jako nepatrná smyčka s proudem:
        </p>
        <ul>
          <li><b>orbitální pohyb</b> — elektron obíhá jádro (jako proud po kroužku),</li>
          <li><b>spin</b> — vlastní rotace elektronu.</li>
        </ul>
        <p>
          Příspěvek protonů v jádře <b>zanedbáváme</b> (jsou ~2000× těžší a pomalejší). Každá taková
          smyčka má <Concept id="magneticky-moment">magnetický moment</Concept>{' '}
          <M>{'\\vec m = I\\,\\vec S'}</M>, takže celý atom má <Term id="magneticky-moment-latky">magnetický moment látky</Term> —
          součet všech těchhle dílčích momentů. <b>A jak ho pole ovlivní, rozhoduje jediná otázka:</b>
        </p>
        <Callout kind="tip" title="Klíčová otázka celé otázky">
          Má atom <b>vlastní</b> (nenulový) magnetický moment už <b>bez pole</b>, nebo ne?
          <br />Když <b>NE</b> → <Term id="diamagnetikum">diamagnetikum</Term>. Když <b>ANO</b> → <Term id="paramagnetikum">paramagnetikum</Term>.
        </Callout>
      </Section>

      <Section title="Atom jako proudová smyčka (názorně)">
        <Figure caption="Elektron obíhající jádro je vlastně malý kruhový proud — a každá proudová smyčka má magnetický moment m = I·S kolmý na rovinu smyčky.">
          <svg viewBox="0 0 440 210" className="svg-fig">
            <defs>
              <Arrow id="orb" color={ELEC} />
              <Arrow id="mom" color={ACC} />
            </defs>
            {/* dráha elektronu */}
            <ellipse cx="175" cy="135" rx="95" ry="40" fill="none" stroke={MUTED} strokeWidth="2" />
            {/* jádro */}
            <circle cx="175" cy="135" r="12" fill={N} />
            <text x="175" y="140" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">+</text>
            {/* elektron + směr oběhu */}
            <circle cx="270" cy="135" r="8" fill={ELEC} />
            <text x="289" y="139" fill={ELEC} fontSize="12" textAnchor="start">e⁻</text>
            <path d="M 250 103 A 95 40 0 0 1 100 120" fill="none" stroke={ELEC} strokeWidth="2.5" markerEnd="url(#orb)" />
            <text x="105" y="195" fill={ELEC} fontSize="13" textAnchor="middle">oběh = proud I</text>
            {/* magneticky moment kolmo na rovinu */}
            <line x1="175" y1="135" x2="175" y2="38" stroke={ACC} strokeWidth="3" markerEnd="url(#mom)" />
            <text x="192" y="48" fill={ACC} fontSize="16" textAnchor="start" fontStyle="italic">m</text>
            <text x="375" y="135" fill={TXT} fontSize="15" textAnchor="middle">m = I·S</text>
          </svg>
        </Figure>
        <p>
          Hotová smyčka se v <b><Concept id="magneticke-pole">magnetickém poli</Concept></b> chová přesně jako
          ta z lekce o magnetickém momentu: pole na ni působí <b><Concept id="moment-sily">moment síly</Concept></b>{' '}
          a snaží se ji <b>natočit tak, aby moment <M>{'\\vec m'}</M> mířil po směru pole <M>{'\\vec B'}</M></b>.
          Tahle jediná věta řídí celé chování látky.
        </p>
      </Section>

      <Section title="Diamagnetikum vs. paramagnetikum (krok po kroku)">
        <p>
          Tohle je <b>proces</b> — proklikej si oba případy a všimni si, jak se liší <b>směr</b>
          výsledného momentu vůči poli. Klikej <b>Další →</b>:
        </p>

        <StepScene
          title="Jak látka reaguje na vnější pole B"
          viewBox="0 0 460 215"
          captions={[
            <>
              <b>Diamagnetikum</b>: atomy mají <b>nulový</b> vlastní moment (zaplněné slupky —
              vzácné plyny, ionty s jejich strukturou). Bez pole se nic neděje, žádné šipky.
            </>,
            <>
              Zapneme <M>{'\\vec B'}</M> (modré šipky zleva). Pole <b>rozkmitá oběh elektronů</b> tak, že se v atomu{' '}
              <Term>indukuje</Term> nový moment mířící <b>PROTI poli</b> (červené proti modrému).
              Stejný princip jako <b><Concept id="elektromagneticka-indukce">elektromagnetická indukce</Concept></b> a{' '}
              <b><Concept id="lenzovo-pravidlo">Lenzův zákon</Concept></b>: látka se brání změně. Výsledek:{' '}
              <b>mírné zeslabení pole</b>.
            </>,
            <>
              <b>Paramagnetikum</b>: atomy <b>mají</b> vlastní nenulový moment, ale bez pole jsou{' '}
              <b>rozházené náhodně</b> (<Concept id="tepelny-pohyb">tepelný pohyb</Concept>), takže navenek se vyruší a látka je
              nemagnetická.
            </>,
            <>
              Zapneme <M>{'\\vec B'}</M>. Pole vlastní momenty <b>natočí PO sobě</b> (zelené po modrém) —
              jako se proudová smyčka stočí do směru pole. Tepelný pohyb tomu pořád trochu brání, takže
              srovnání není dokonalé. Výsledek: <b>zesílení pole</b>.
            </>,
          ]}
        >
          <defs>
            <Arrow id="mfb" color={ACC} />
            <Arrow id="mfn" color={N} />
            <Arrow id="mfs" color={S} />
          </defs>

          {/* ——— horní popisek látky: dia ⇄ para (crossfade) ——— */}
          <AText x={232} y={30} fill={MUTED} fontSize="14" textAnchor="middle" opacity={[1, 1, 0, 0]}>
            diamagnetikum · vlastní moment = 0
          </AText>
          <AText x={232} y={30} fill={MUTED} fontSize="14" textAnchor="middle" opacity={[0, 0, 1, 1]}>
            paramagnetikum · vlastní moment ≠ 0
          </AText>

          {/* ——— vnější pole B: 3 modré šipky zleva (jen „v poli") ——— */}
          <ALine x1={22} y1={78} x2={96} y2={78} stroke={ACC} strokeWidth={3} markerEnd="url(#mfb)" opacity={[0, 1, 0, 1]} />
          <ALine x1={22} y1={122} x2={96} y2={122} stroke={ACC} strokeWidth={3} markerEnd="url(#mfb)" opacity={[0, 1, 0, 1]} />
          <ALine x1={22} y1={166} x2={96} y2={166} stroke={ACC} strokeWidth={3} markerEnd="url(#mfb)" opacity={[0, 1, 0, 1]} />
          <AText x={52} y={196} fill={ACC} fontSize="15" textAnchor="middle" fontStyle="italic" opacity={[0, 1, 0, 1]}>B</AText>
          {/* „B = 0" pro kroky bez pole */}
          <AText x={52} y={126} fill={MUTED} fontSize="14" textAnchor="middle" opacity={[1, 0, 1, 0]}>B = 0</AText>

          {/* ——— smyčky atomů (konstantní identita ve všech krocích) ——— */}
          <ACircle cx={140} cy={98} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={215} cy={98} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={290} cy={98} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={365} cy={98} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={177} cy={152} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={252} cy={152} r={11} fill="none" stroke={MUTED} strokeWidth={2} />
          <ACircle cx={327} cy={152} r={11} fill="none" stroke={MUTED} strokeWidth={2} />

          {/* ——— DIAMAGNET v poli: indukované momenty PROTI poli (dolů, červené) ——— */}
          {/* viditelné jen v kroku 2 (index 1) */}
          <ALine x1={140} y1={84} x2={140} y2={120} stroke={N} strokeWidth={3} markerEnd="url(#mfn)" opacity={[0, 1, 0, 0]} />
          <ALine x1={215} y1={84} x2={215} y2={120} stroke={N} strokeWidth={3} markerEnd="url(#mfn)" opacity={[0, 1, 0, 0]} />
          <ALine x1={290} y1={84} x2={290} y2={120} stroke={N} strokeWidth={3} markerEnd="url(#mfn)" opacity={[0, 1, 0, 0]} />
          <ALine x1={177} y1={138} x2={177} y2={174} stroke={N} strokeWidth={3} markerEnd="url(#mfn)" opacity={[0, 1, 0, 0]} />
          <ALine x1={252} y1={138} x2={252} y2={174} stroke={N} strokeWidth={3} markerEnd="url(#mfn)" opacity={[0, 1, 0, 0]} />

          {/* ——— PARAMAGNET: zelené momenty — z náhodných (krok 3) do srovnaných doprava (krok 4) ——— */}
          {/* každá šipka: [_, _, náhodný směr, doprava]; opacity [0,0,1,1] */}
          <ALine
            x1={[140, 140, 150, 122]} y1={[98, 98, 110, 98]}
            x2={[140, 140, 128, 158]} y2={[98, 98, 84, 98]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[215, 215, 215, 197]} y1={[98, 98, 86, 98]}
            x2={[215, 215, 215, 233]} y2={[98, 98, 116, 98]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[290, 290, 278, 272]} y1={[98, 98, 108, 98]}
            x2={[290, 290, 302, 308]} y2={[98, 98, 88, 98]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[365, 365, 373, 347]} y1={[98, 98, 86, 98]}
            x2={[365, 365, 357, 383]} y2={[98, 98, 114, 98]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[177, 177, 167, 159]} y1={[152, 152, 164, 152]}
            x2={[177, 177, 187, 195]} y2={[152, 152, 140, 152]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[252, 252, 266, 234]} y1={[152, 152, 152, 152]}
            x2={[252, 252, 238, 270]} y2={[152, 152, 152, 152]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />
          <ALine
            x1={[327, 327, 327, 309]} y1={[152, 152, 166, 152]}
            x2={[327, 327, 327, 345]} y2={[152, 152, 138, 152]}
            stroke={S} strokeWidth={3} markerEnd="url(#mfs)" opacity={[0, 0, 1, 1]}
          />

          {/* ——— pravý popisek výsledku ——— */}
          <AText x={405} y={92} fill={N} fontSize="13" textAnchor="start" opacity={[0, 1, 0, 0]}>m proti B</AText>
          <AText x={405} y={112} fill={N} fontSize="13" textAnchor="start" opacity={[0, 1, 0, 0]}>→ zeslabí</AText>
          <AText x={405} y={92} fill={S} fontSize="13" textAnchor="start" opacity={[0, 0, 0, 1]}>m po B</AText>
          <AText x={405} y={112} fill={S} fontSize="13" textAnchor="start" opacity={[0, 0, 0, 1]}>→ zesílí</AText>

          {/* ——— spodní popisek pro kroky bez pole ——— */}
          <AText x={232} y={205} fill={MUTED} fontSize="13" textAnchor="middle" opacity={[1, 0, 0, 0]}>žádné vlastní momenty</AText>
          <AText x={232} y={205} fill={MUTED} fontSize="13" textAnchor="middle" opacity={[0, 0, 1, 0]}>navenek se vyruší</AText>
        </StepScene>
      </Section>

      <Section title="Larmorova precese — odkud se bere diamagnetismus">
        <p>
          U diamagnetik je trik v tom, že zapnuté pole <b>nepatrně rozhází rovnováhu obíhajících
          elektronů</b>: celý elektronový obal se začne <b>pomalu otáčet kolem osy dané směrem pole</b>.
          Tomuhle dodatečnému otáčení se říká <Term id="larmorova-precese">Larmorova precese</Term> a právě ona je tím
          „indukovaným proudem navíc", který vyrobí moment <b>proti</b> vnějšímu poli (proto diamagnet
          pole zeslabuje).
        </p>
        <Callout kind="info" title="Drobnost, co potěší zkoušejícího">
          Diamagnetismus má <b>úplně každá</b> látka (je univerzální), jen je hodně slabý. U
          paramagnetik a feromagnetik ho silnější efekt vlastních momentů jen <b>přebije</b>.
        </Callout>
      </Section>

      <Section title="Jak to popsat číslem: magnetizace a susceptibilita">
        <p>
          Míru zmagnetování látky popisuje <Term id="magnetizace">vektor magnetizace</Term>{' '}
          <M>{'\\vec M'}</M> = magnetický moment jednotkového objemu. Ten je (u běžných látek) úměrný
          vnějšímu poli a konstanta úměrnosti je <Term id="magneticka-susceptibilita">magnetická susceptibilita</Term>{' '}
          <M>{'\\chi'}</M>:
        </p>
        <MB>{'\\vec M = \\chi\\,\\vec H'}</MB>
        <p>A celé dělení látek se schová do <b>znaménka <M>{'\\chi'}</M></b>:</p>
        <ul>
          <li><b>diamagnetikum:</b> <M>{'\\chi < 0'}</M> (pole se mírně <b>zeslabí</b>),</li>
          <li><b>paramagnetikum:</b> <M>{'\\chi > 0'}</M> (pole se <b>zesílí</b>).</li>
        </ul>
        <p>
          (Feromagnetika jako železo jsou extrémní paramagnet s obrovským <M>{'\\chi'}</M> a navíc si
          srovnání momentů „pamatují" — proto je magnet trvalý. To už je nad rámec téhle otázky.)
        </p>
      </Section>

      <Section title="A teď ten chyták: magnetické × elektrické pole">
        <Figure caption="Stejná melodie, jiný nástroj: v elektrickém poli se posouvají NÁBOJE (vznikají dipóly), v magnetickém se natáčejí proudové SMYČKY (momenty). Diamagnet je jediný, kdo reaguje PROTI poli.">
          <svg viewBox="0 0 460 150" className="svg-fig">
            <defs><Arrow id="cmpE" color={ACC} /></defs>
            <rect x="30" y="30" width="180" height="90" rx="8" fill="#1b2436" stroke={MUTED} strokeWidth="2" />
            <text x="120" y="55" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">elektrické pole (2.10)</text>
            <text x="120" y="80" fill={MUTED} fontSize="12" textAnchor="middle">posun nábojů → dipóly</text>
            <text x="120" y="100" fill={MUTED} fontSize="12" textAnchor="middle">vodič / dielektrikum</text>
            <rect x="250" y="30" width="180" height="90" rx="8" fill="#102530" stroke={ACC} strokeWidth="2" />
            <text x="340" y="55" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">magnetické pole (2.11)</text>
            <text x="340" y="80" fill={ACC} fontSize="12" textAnchor="middle">natočení smyček → momenty</text>
            <text x="340" y="100" fill={ACC} fontSize="12" textAnchor="middle">dia / paramagnetikum</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>Tohle NENÍ otázka 2.10!</b> Seznam 2025 je rozlišuje. Elektrostatika = posun{' '}
            <b><Concept id="naboj">nábojů</Concept></b> (<Concept id="dipol">dipóly</Concept>); magnetismus = natočení <b>proudových smyček</b> (momenty). Nesmíchej je.
          </li>
          <li>
            Magnetismus dělají <b>elektrony</b> (orbit + spin), <b>ne jádro</b> — protony zanedbáváme.
          </li>
          <li>
            <b>Diamagnetikum</b> = vlastní moment <b>nula</b>, pole indukuje moment <b>PROTI sobě</b>{' '}
            (Larmorova precese) → <b>zeslabí</b>, <M>{'\\chi < 0'}</M>.
          </li>
          <li>
            <b>Paramagnetikum</b> = vlastní moment <b>nenulový</b>, pole ho natočí <b>PO sobě</b> →{' '}
            <b>zesílí</b>, <M>{'\\chi > 0'}</M>.
          </li>
          <li>
            Diamagnetikum je jediná látka, co reaguje <b>proti</b> poli. A diamagnetismus má{' '}
            <b>každá</b> látka, jen bývá přebitý.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit, že magnetismus látky dělají elektrony (orbitální pohyb + spin) jako maličké proudové smyčky.',
          'Popsat chování diamagnetika: nulový vlastní moment, indukovaný moment PROTI poli (Larmorova precese), zeslabení, χ < 0.',
          'Popsat chování paramagnetika: nenulový vlastní moment, natočení PO poli, zesílení, χ > 0.',
          'Zavést vektor magnetizace M a susceptibilitu χ a rozlišit látky podle jejího znaménka.',
          'Odlišit tuto otázku od chování látky v elektrickém poli (2.10).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Na mikroskopické úrovni — co je zdrojem magnetického momentu atomu a proč zanedbáváme jádro?',
            a: (
              <>
                Pohybující se <b>elektrony</b>: jejich <b>orbitální pohyb</b> (obíhání jádra = malý proud) a
                <b> spin</b> (vlastní rotace). Každý dělá nepatrnou proudovou smyčku s momentem{' '}
                <M>{'\\vec m = I\\vec S'}</M>. Protony v jádře jsou ~2000× těžší a pomalejší, takže jejich
                příspěvek <b>zanedbáme</b>.
              </>
            ),
          },
          {
            q: <>Jak se liší diamagnetikum a paramagnetikum a jaké mají znaménko susceptibility <M>{'\\chi'}</M>?</>,
            a: (
              <>
                <b>Diamagnetikum</b>: vlastní moment atomů je <b>nula</b>; vnější pole v něm{' '}
                <b>indukuje</b> moment <b>proti</b> sobě (přes Larmorovu precesi) → pole se{' '}
                <b>mírně zeslabí</b>, <M>{'\\chi < 0'}</M>. <b>Paramagnetikum</b>: atomy mají vlastní{' '}
                <b>nenulový</b> moment, pole je <b>natočí po sobě</b> → pole se <b>zesílí</b>,{' '}
                <M>{'\\chi > 0'}</M>.
              </>
            ),
          },
          {
            q: 'Co je Larmorova precese a k čemu ji v této otázce potřebuješ?',
            a: (
              <>
                Je to <b>pomalé otáčení celého elektronového obalu kolem osy daného směru pole</b>, které
                vnější pole vyvolá. Tahle precese je tím „indukovaným proudem", co vyrobí magnetický moment{' '}
                <b>proti</b> vnějšímu poli — a je proto <b>příčinou diamagnetismu</b> (zeslabení pole).
              </>
            ),
          },
          {
            q: 'Čím se zásadně liší reakce látky na magnetické pole oproti poli elektrickému?',
            a: (
              <>
                V <b>elektrickém</b> poli se posouvají/natáčejí <b>náboje</b> a vznikají{' '}
                <b>dipóly</b> (polarizace, <Concept id="vodic">vodič</Concept> × <Concept id="dielektrikum">dielektrikum</Concept>). V <b>magnetickém</b> poli se natáčejí{' '}
                <b>proudové smyčky</b> a jde o <b>magnetické momenty</b> (dia × paramagnetikum). Navíc v
                magnetickém poli existuje látka (diamagnetikum), která reaguje <b>proti</b> poli — to v
                elektrostatice obdobu nemá.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
