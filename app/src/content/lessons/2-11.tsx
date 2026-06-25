import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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

/* tři vodorovné šipky vnějšího pole B mířící doprava */
function FieldArrows({ x1, x2, marker }: { x1: number; x2: number; marker: string }) {
  return (
    <g stroke={ACC} strokeWidth="3">
      <line x1={x1} y1="45" x2={x2} y2="45" markerEnd={`url(#${marker})`} />
      <line x1={x1} y1="95" x2={x2} y2="95" markerEnd={`url(#${marker})`} />
      <line x1={x1} y1="145" x2={x2} y2="145" markerEnd={`url(#${marker})`} />
    </g>
  )
}

/* malá šipka magnetického momentu (kolečko = smyčka + šipka momentu) */
function Moment({ x, y, color, dir = 'up', len = 26 }: { x: number; y: number; color: string; dir?: 'up' | 'down'; len?: number }) {
  const dy = dir === 'up' ? -len : len
  return (
    <g>
      <circle cx={x} cy={y} r="7" fill="none" stroke={color} strokeWidth="2.5" />
      <line x1={x} y1={y} x2={x} y2={y + dy} stroke={color} strokeWidth="2.5" markerEnd={`url(#${dir === 'up' ? 'mu' : 'md'}-${color === N ? 'n' : 's'})`} />
    </g>
  )
}

export default function Lesson_2_11() {
  return (
    <>
      <p className="lead">
        Pozor, tohle je <b>samostatná zkoušková otázka</b> — neslévej ji s elektrostatikou (lekce 2.10)!
        Stačí umět jednu myšlenku: <Term>každý atom je maličká proudová smyčka</Term>, a vnější magnetické
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
          smyčka má <Term>magnetický moment</Term>{' '}
          <M>{'\\vec m = I\\,\\vec S'}</M>, takže celý atom má <Term>magnetický moment látky</Term> —
          součet všech těchhle dílčích momentů. <b>A jak ho pole ovlivní, rozhoduje jediná otázka:</b>
        </p>
        <Callout kind="tip" title="Klíčová otázka celé otázky">
          Má atom <b>vlastní</b> (nenulový) magnetický moment už <b>bez pole</b>, nebo ne?
          <br />Když <b>NE</b> → <Term>diamagnetikum</Term>. Když <b>ANO</b> → <Term>paramagnetikum</Term>.
        </Callout>
      </Section>

      <Section title="Atom jako proudová smyčka (názorně)">
        <Figure caption="Elektron obíhající jádro je vlastně malý kruhový proud — a každá proudová smyčka má magnetický moment m = I·S kolmý na rovinu smyčky.">
          <svg viewBox="0 0 420 180" className="svg-fig">
            <defs>
              <Arrow id="orb" color={ELEC} />
              <Arrow id="mom" color={ACC} />
            </defs>
            {/* dráha elektronu */}
            <ellipse cx="160" cy="110" rx="95" ry="40" fill="none" stroke={MUTED} strokeWidth="2" />
            {/* jádro */}
            <circle cx="160" cy="110" r="12" fill={N} />
            <text x="160" y="115" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">+</text>
            {/* elektron + směr oběhu */}
            <circle cx="255" cy="110" r="8" fill={ELEC} />
            <text x="255" y="92" fill={ELEC} fontSize="12" textAnchor="middle">e⁻</text>
            <path d="M 235 78 A 95 40 0 0 1 85 95" fill="none" stroke={ELEC} strokeWidth="2.5" markerEnd="url(#orb)" />
            <text x="160" y="52" fill={ELEC} fontSize="13" textAnchor="middle">oběh = proud I</text>
            {/* magneticky moment kolmo na rovinu */}
            <line x1="160" y1="110" x2="160" y2="30" stroke={ACC} strokeWidth="3" markerEnd="url(#mom)" />
            <text x="178" y="40" fill={ACC} fontSize="15" textAnchor="middle" fontStyle="italic">m</text>
            <text x="350" y="115" fill={TXT} fontSize="14" textAnchor="middle">m = I·S</text>
          </svg>
        </Figure>
        <p>
          Hotová smyčka se v <b>magnetickém poli</b> chová přesně jako
          ta z lekce o magnetickém momentu: pole na ni působí <b>moment síly</b>{' '}
          a snaží se ji <b>natočit tak, aby moment <M>{'\\vec m'}</M> mířil po směru pole <M>{'\\vec B'}</M></b>.
          Tahle jediná věta řídí celé chování látky.
        </p>
      </Section>

      <Section title="Diamagnetikum vs. paramagnetikum (krok po kroku)">
        <p>
          Tohle je <b>proces</b> — proklikej si oba případy a všimni si, jak se liší <b>směr</b>
          výsledného momentu vůči poli. Klikej <b>Další →</b>:
        </p>

        <StepFigure
          title="Jak látka reaguje na vnější pole B"
          steps={[
            {
              label: 'diamagnet bez pole',
              caption: (
                <>
                  <b>Diamagnetikum</b>: atomy mají <b>nulový</b> vlastní moment (zaplněné slupky —
                  vzácné plyny, ionty s jejich strukturou). Bez pole se nic neděje, žádné šipky.
                </>
              ),
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <text x="230" y="30" fill={MUTED} fontSize="14" textAnchor="middle">B = 0 · diamagnetikum (vlastní moment = 0)</text>
                  <g fill="none" stroke={MUTED} strokeWidth="2">
                    <circle cx="120" cy="110" r="11" /><circle cx="200" cy="110" r="11" />
                    <circle cx="280" cy="110" r="11" /><circle cx="360" cy="110" r="11" />
                    <circle cx="160" cy="150" r="11" /><circle cx="240" cy="150" r="11" />
                    <circle cx="320" cy="150" r="11" />
                  </g>
                  <text x="230" y="190" fill={MUTED} fontSize="13" textAnchor="middle">žádné vlastní momenty</text>
                </svg>
              ),
            },
            {
              label: 'diamagnet v poli',
              caption: (
                <>
                  Zapneme <M>{'\\vec B'}</M>. Pole <b>rozkmitá oběh elektronů</b> tak, že se v atomu{' '}
                  <Term>indukuje</Term> nový moment mířící <b>PROTI poli</b> (zelené proti modrému).
                  Stejný princip jako <b>elektromagnetická indukce</b> a{' '}
                  <b>Lenzův zákon</b>: látka se brání změně. Výsledek:{' '}
                  <b>mírné zeslabení pole</b>.
                </>
              ),
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <defs>
                    <Arrow id="b1" color={ACC} />
                    <Arrow id="mu-n" color={N} /><Arrow id="md-n" color={N} />
                    <Arrow id="mu-s" color={S} /><Arrow id="md-s" color={S} />
                  </defs>
                  <FieldArrows x1={20} x2={95} marker="b1" />
                  <text x="55" y="180" fill={ACC} fontSize="14" textAnchor="middle" fontStyle="italic">B</text>
                  {/* indukovane momenty proti poli (dolu = "proti", barva N) */}
                  <Moment x={170} y={95} color={N} dir="down" />
                  <Moment x={240} y={95} color={N} dir="down" />
                  <Moment x={310} y={95} color={N} dir="down" />
                  <Moment x={205} y={155} color={N} dir="down" />
                  <Moment x={275} y={155} color={N} dir="down" />
                  <text x="395" y="100" fill={N} fontSize="13" textAnchor="middle">m proti B</text>
                  <text x="395" y="120" fill={N} fontSize="12" textAnchor="middle">→ zeslabí</text>
                </svg>
              ),
            },
            {
              label: 'paramagnet bez pole',
              caption: (
                <>
                  <b>Paramagnetikum</b>: atomy <b>mají</b> vlastní nenulový moment, ale bez pole jsou
                  <b> rozházené náhodně</b> (tepelný pohyb), takže navenek se vyruší a látka je
                  nemagnetická.
                </>
              ),
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <defs>
                    <Arrow id="mu-s2" color={S} />
                  </defs>
                  <text x="230" y="30" fill={MUTED} fontSize="14" textAnchor="middle">B = 0 · paramagnetikum (momenty náhodně)</text>
                  <g stroke={S} strokeWidth="2.5" fill="none">
                    <line x1="120" y1="110" x2="138" y2="92" markerEnd="url(#mu-s2)" />
                    <line x1="200" y1="100" x2="190" y2="122" markerEnd="url(#mu-s2)" />
                    <line x1="280" y1="120" x2="298" y2="105" markerEnd="url(#mu-s2)" />
                    <line x1="360" y1="95" x2="345" y2="115" markerEnd="url(#mu-s2)" />
                    <line x1="170" y1="150" x2="188" y2="158" markerEnd="url(#mu-s2)" />
                    <line x1="250" y1="158" x2="240" y2="138" markerEnd="url(#mu-s2)" />
                    <line x1="330" y1="150" x2="316" y2="140" markerEnd="url(#mu-s2)" />
                  </g>
                  <text x="230" y="190" fill={MUTED} fontSize="13" textAnchor="middle">navenek se vyruší</text>
                </svg>
              ),
            },
            {
              label: 'paramagnet v poli',
              caption: (
                <>
                  Zapneme <M>{'\\vec B'}</M>. Pole vlastní momenty <b>natočí PO sobě</b> (zelené po modrém) —
                  jako se proudová smyčka stočí do směru pole. Tepelný pohyb tomu pořád trochu brání, takže
                  srovnání není dokonalé. Výsledek: <b>zesílení pole</b>.
                </>
              ),
              content: (
                <svg viewBox="0 0 460 200" className="svg-fig">
                  <defs>
                    <Arrow id="b2" color={ACC} />
                    <Arrow id="mr" color={S} />
                  </defs>
                  <FieldArrows x1={20} x2={95} marker="b2" />
                  <text x="55" y="180" fill={ACC} fontSize="14" textAnchor="middle" fontStyle="italic">B</text>
                  {/* momenty po poli (doprava) */}
                  <g stroke={S} strokeWidth="3" fill="none">
                    <line x1="150" y1="80" x2="195" y2="80" markerEnd="url(#mr)" />
                    <line x1="230" y1="80" x2="275" y2="80" markerEnd="url(#mr)" />
                    <line x1="310" y1="80" x2="355" y2="80" markerEnd="url(#mr)" />
                    <line x1="150" y1="130" x2="193" y2="124" markerEnd="url(#mr)" />
                    <line x1="230" y1="125" x2="275" y2="130" markerEnd="url(#mr)" />
                    <line x1="310" y1="130" x2="353" y2="124" markerEnd="url(#mr)" />
                  </g>
                  <text x="400" y="80" fill={S} fontSize="13" textAnchor="middle">m po B</text>
                  <text x="400" y="100" fill={S} fontSize="12" textAnchor="middle">→ zesílí</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Larmorova precese — odkud se bere diamagnetismus">
        <p>
          U diamagnetik je trik v tom, že zapnuté pole <b>nepatrně rozhází rovnováhu obíhajících
          elektronů</b>: celý elektronový obal se začne <b>pomalu otáčet kolem osy dané směrem pole</b>.
          Tomuhle dodatečnému otáčení se říká <Term>Larmorova precese</Term> a právě ona je tím
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
          Míru zmagnetování látky popisuje <Term>vektor magnetizace</Term>{' '}
          <M>{'\\vec M'}</M> = magnetický moment jednotkového objemu. Ten je (u běžných látek) úměrný
          vnějšímu poli a konstanta úměrnosti je <Term>magnetická susceptibilita</Term>{' '}
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
            <b>nábojů</b> (dipóly); magnetismus = natočení <b>proudových smyček</b> (momenty). Nesmíchej je.
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
                <b>dipóly</b> (polarizace, vodič × dielektrikum). V <b>magnetickém</b> poli se natáčejí{' '}
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
