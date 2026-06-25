import { Section, M, MB, Term, Concept, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.3b'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'alfa-rozpad': { lesson: '5.3b', label: 'rozpad α (alfa)', short: 'Jádro vyzáří částici α (jádro helia, 2p+2n): A klesne o 4, Z o 2. Zastaví ho list papíru.' },
  'beta-minus': { lesson: '5.3b', label: 'rozpad β⁻', short: 'Neutron se mění na proton + elektron + antineutrino. Z roste o 1 (β minus PŘIDÁ proton).' },
  'beta-plus': { lesson: '5.3b', label: 'rozpad β⁺', short: 'Proton se mění na neutron + pozitron + neutrino. Z klesá o 1.' },
  'elektronovy-zachyt': { lesson: '5.3b', label: 'elektronový záchyt', short: 'Jádro spolkne elektron z obalu: p + e⁻ → n + neutrino. Z klesá o 1, žádná částice se nevyzáří.' },
  'inverzni-beta': { lesson: '5.3b', label: 'inverzní beta rozpad', short: 'Jádro pohltí antineutrino: p + ν̄ → n + pozitron. Z klesá o 1.' },
  'gama-rozpad': { lesson: '5.3b', label: 'rozpad γ (gama)', short: 'Vybuzené jádro vyzáří foton a uklidní se. A ani Z se nemění — prvek se v tabulce NEPOSOUVÁ. Olovo ho jen oslabí.' },
  'vnitrni-konverze': { lesson: '5.3b', label: 'vnitřní konverze', short: 'Místo fotonu γ jádro předá energii elektronu z obalu (často z K-slupky) a ten vyletí ven.' },
  'dvojna-konverze': { lesson: '5.3b', label: 'dvojná (párová) konverze', short: 'Je-li energie jádra > 2·mₑc², vznikne v jeho poli pár elektron + pozitron. Obal se na tom nepodílí.' },
}

const ACC = '#34d399'   // akcent tématu
const TXT = '#e8ecf8'
const MUTED = '#9aa6c4'
const PROTON = '#fb7185'
const NEUTRON = '#7aa2ff'
const GAMMA = '#fbbf24'
const PLATE = '#7aa2ff'

/* Šipka pro SVG. */
function Defs({ color = ACC }: { color?: string }) {
  return (
    <defs>
      <marker id="ar53b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Malá částice α (2 protony + 2 neutrony). */
function AlphaParticle({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="-6" cy="-6" r="7" fill={PROTON} />
      <circle cx="6" cy="-6" r="7" fill={NEUTRON} />
      <circle cx="-6" cy="6" r="7" fill={NEUTRON} />
      <circle cx="6" cy="6" r="7" fill={PROTON} />
    </g>
  )
}

export default function Lesson_5_3b() {
  return (
    <>
      <p className="lead">
        Tohle je klasická zkoušková otázka, kde se sbírají body nebo ztrácejí na hloupostech.
        Stačí umět u každého rozpadu říct <Term>co se vyzáří</Term>, <Term>jak se změní Z (a A)</Term> a{' '}
        <Term>jak se před tím chránit</Term>. Pozor hlavně na záměnu β⁻ a β⁺ — to je nejčastější chyták.
      </p>

      <Section title="Co je radioaktivní přeměna a podle čeho se dělí">
        <p>
          Nestabilní jádro se samovolně přemění na stabilnější a přitom vyzáří energii (a obvykle nějakou částici).
          Tři základní druhy záření — <Term>α</Term>, <Term>β</Term>, <Term>γ</Term> — se historicky rozlišily
          podle toho, <b>jak se chovají v elektrickém nebo magnetickém poli</b>: α je kladné, β záporné, γ neutrální.
        </p>
        <p>
          Dva symboly, které musíš číst: <M>{'Z'}</M> = <Concept id="protonove-cislo">protonové (nábojové) číslo</Concept> = pořadí prvku v tabulce a{' '}
          <M>{'A'}</M> = <Concept id="nukleonove-cislo">nukleonové (hmotnostní) číslo</Concept> = počet protonů + neutronů. Zápis jádra je{' '}
          <M>{'{}^{A}_{Z}\\mathrm{X}'}</M>.
        </p>
      </Section>

      <Section title="Rozpad α — jádro vystřelí kus helia">
        <p>
          Při <Term id="alfa-rozpad">rozpadu α</Term> jádro vyletí <b>částice α</b>, což je jádro helia{' '}
          <M>{'{}^{4}_{2}\\mathrm{He}'}</M> — dva protony a dva neutrony pohromadě. Děje se to hlavně u{' '}
          <b>těžkých jader</b>, kde odpudivé síly mezi protony převáží.
        </p>
        <MB>{'{}^{A}_{Z}\\mathrm{X} \\;\\longrightarrow\\; {}^{A-4}_{Z-2}\\mathrm{Y} + {}^{4}_{2}\\mathrm{He}'}</MB>
        <p>
          Odnese 2 protony a 2 neutrony, takže <M>{'A'}</M> klesne o 4 a <M>{'Z'}</M> o 2. Částice α je velká
          a pomalá, takže ji <b>zastaví už list papíru</b> (nebo pár cm vzduchu). Nebezpečná je hlavně uvnitř těla.
        </p>

        <Figure caption="Částice α = jádro helia (2 protony + 2 neutrony). Z jádra ubudou 2 protony a 2 neutrony.">
          <svg viewBox="0 0 360 130" className="svg-fig">
            <Defs />
            <circle cx="70" cy="65" r="34" fill="none" stroke={MUTED} strokeWidth="2" strokeDasharray="4 4" />
            <text x="70" y="20" fill={TXT} fontSize="13" textAnchor="middle">těžké jádro X</text>
            <circle cx="58" cy="55" r="8" fill={PROTON} />
            <circle cx="80" cy="52" r="8" fill={NEUTRON} />
            <circle cx="62" cy="78" r="8" fill={NEUTRON} />
            <circle cx="84" cy="76" r="8" fill={PROTON} />
            <line x1="118" y1="65" x2="210" y2="65" stroke={ACC} strokeWidth="4" markerEnd="url(#ar53b)" />
            <text x="164" y="52" fill={ACC} fontSize="14" textAnchor="middle">α</text>
            <AlphaParticle x={258} y={65} />
            <text x="258" y="112" fill={TXT} fontSize="12" textAnchor="middle">jádro He</text>
            <circle cx="316" cy="40" r="6" fill={PROTON} />
            <text x="332" y="44" fill={MUTED} fontSize="11">proton</text>
            <circle cx="316" cy="62" r="6" fill={NEUTRON} />
            <text x="332" y="66" fill={MUTED} fontSize="11">neutron</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Rozpad β — čtyři podtypy (tady číhá chyták)">
        <p>
          <Term id="beta-rozpad">Beta rozpady</Term> mění <b>nábojový stav nukleonu</b> uvnitř jádra (neutron ↔ proton). <b>Hmotnostní číslo{' '}
          <M>{'A'}</M> se nemění</b> (počet nukleonů zůstane stejný), mění se jen <M>{'Z'}</M>. Jsou čtyři typy
          a liší se hlavně tím, kterým směrem posunou prvek v tabulce:
        </p>

        <div className="biglist">
          <p>
            <b><Term id="beta-minus">β⁻ (beta minus)</Term>.</b> V jádře se neutron rozpadne na proton, vyletí <b>elektron</b> a antineutrino.
            Přibyl proton, takže <M>{'Z'}</M> roste o 1.
          </p>
          <MB>{'n \\to p + e^- + \\bar{\\nu}_e \\qquad {}^{A}_{Z}\\mathrm{X} \\;\\xrightarrow{\\;\\beta^-\\;}\\; {}^{\\;A}_{Z+1}\\mathrm{Y}'}</MB>

          <p>
            <b><Term id="beta-plus">β⁺ (beta plus)</Term>.</b> Proton se mění na neutron, vyletí <b>pozitron</b> (kladný „dvojník" elektronu)
            a neutrino. Ubyl proton, takže <M>{'Z'}</M> klesá o 1.
          </p>
          <MB>{'p \\to n + e^+ + \\nu_e \\qquad {}^{A}_{Z}\\mathrm{X} \\;\\xrightarrow{\\;\\beta^+\\;}\\; {}^{\\;A}_{Z-1}\\mathrm{Y}'}</MB>

          <p>
            <b><Term id="elektronovy-zachyt">Elektronový záchyt</Term>.</b> Jádro si „spolkne" elektron z obalu (často z K-slupky) a spojí ho
            s protonem: <M>{'p + e^- \\to n + \\nu_e'}</M>. Výsledek je stejný jako u β⁺ — <M>{'Z'}</M> klesá o 1 —
            ale <b>žádná beta částice ven nevyletí</b>.
          </p>
          <MB>{'{}^{A}_{Z}\\mathrm{X} + e^- \\;\\longrightarrow\\; {}^{\\;A}_{Z-1}\\mathrm{Y}'}</MB>

          <p>
            <b><Term id="inverzni-beta">Inverzní beta rozpad</Term>.</b> Jádro pohltí <b>antineutrino</b> a proton se změní na neutron:{' '}
            <M>{'p + \\bar{\\nu}_e \\to n + e^+'}</M>. Opět <M>{'Z'}</M> klesá o 1.
          </p>
          <MB>{'{}^{A}_{Z}\\mathrm{X} + \\bar{\\nu}_e \\;\\longrightarrow\\; {}^{\\;A}_{Z-1}\\mathrm{Y} + e^+'}</MB>
        </div>

        <p>
          Shrnutí jednou větou: <b>jen β⁻ posouvá prvek doprava</b> (<M>{'Z+1'}</M>), zbylé tři podtypy posouvají
          doleva (<M>{'Z-1'}</M>). Před β zářením tě ochrání tenký plech (např. hliník).
        </p>
      </Section>

      <Section title="Rozpad γ — jádro se jen uklidní (a NEPOSOUVÁ se)">
        <p>
          Po α nebo β je jádro často <b>vybuzené</b> (má přebytek energie). Tu vyhodí jako{' '}
          <Term id="gama-rozpad">foton γ</Term> — kvantum elektromagnetického záření o velmi krátké <Concept id="vlnova-delka">vlnové délce</Concept> a vysoké energii (MeV).
          Žádný nukleon neubyl ani nepřibyl, takže <b><M>{'A'}</M> i <M>{'Z'}</M> zůstanou stejné</b> a prvek se
          v tabulce <b>neposune</b> — jen klesne na nižší energii.
        </p>
        <MB>{'{}^{A}_{Z}\\mathrm{X}^{*} \\;\\xrightarrow{\\;\\gamma\\;}\\; {}^{A}_{Z}\\mathrm{X}'}</MB>
        <p>
          γ se v poli nevychyluje (je neutrální), látku silně ionizuje a <b>nedá se úplně zastavit</b> —
          neexistuje tloušťka, za kterou by intenzita byla nula. Dá se jen <b>oslabit</b>, nejlépe těžkým
          materiálem jako <b>olovo (Pb)</b>.
        </p>

        <Callout kind="info" title="Místo fotonu může přijít konverze">
          <ul>
            <li>
              <b><Term id="vnitrni-konverze">Vnitřní konverze</Term>.</b> Jádro nepošle foton ven, ale předá energii přímo <b>elektronu z obalu</b>{' '}
              (nejčastěji z K-slupky) a ten vyletí jako rychlý elektron.
            </li>
            <li>
              <b><Term id="dvojna-konverze">Dvojná (párová) konverze</Term>.</b> Je-li energie jádra větší než <M>{'2 m_e c^2'}</M>, vznikne v jeho
              elektromagnetickém poli rovnou <b>pár elektron + pozitron</b>. Tady se elektronový obal vůbec nepodílí.
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Vychylování α, β, γ v poli (proklikej si to)">
        <p>
          Klasická obrázková otázka: vzorek vyzařuje všechny tři druhy mezi desky kondenzátoru. Podle
          vychýlení poznáš náboj. Klikej <b>Další →</b>:
        </p>

        <StepFigure
          title="Tři druhy záření v elektrickém poli kondenzátoru"
          steps={[
            {
              label: 'sestava',
              caption: <>Radioaktivní vzorek dole vyzařuje záření vzhůru mezi dvě desky: vlevo <b>+</b>, vpravo <b>−</b>.</>,
              content: (
                <svg viewBox="0 0 320 240" className="svg-fig">
                  <Defs />
                  <rect x="140" y="205" width="40" height="26" rx="4" fill={PROTON} />
                  <text x="160" y="223" fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="700">vzorek</text>
                  <line x1="60" y1="40" x2="60" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="46" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">+</text>
                  <line x1="260" y1="40" x2="260" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="274" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">−</text>
                  <text x="160" y="120" fill={MUTED} fontSize="12" textAnchor="middle">homogenní pole</text>
                </svg>
              ),
            },
            {
              label: 'β⁻ doleva',
              caption: <>Záporné <b>β</b> (elektrony) se přitahuje ke <b>kladné</b> desce → vychýlí se <b>doleva</b>. Lehké, takže hodně.</>,
              content: (
                <svg viewBox="0 0 320 240" className="svg-fig">
                  <Defs color={NEUTRON} />
                  <rect x="140" y="205" width="40" height="26" rx="4" fill={PROTON} />
                  <line x1="60" y1="40" x2="60" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="46" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">+</text>
                  <line x1="260" y1="40" x2="260" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="274" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">−</text>
                  <path d="M160,205 Q150,120 95,70" fill="none" stroke={NEUTRON} strokeWidth="4" markerEnd="url(#ar53b)" />
                  <text x="92" y="58" fill={NEUTRON} fontSize="18" textAnchor="middle" fontStyle="italic">β⁻</text>
                </svg>
              ),
            },
            {
              label: 'α doprava',
              caption: <>Kladné <b>α</b> se přitahuje k <b>záporné</b> desce → vychýlí se <b>doprava</b>. Těžké, takže jen málo.</>,
              content: (
                <svg viewBox="0 0 320 240" className="svg-fig">
                  <Defs color={PROTON} />
                  <rect x="140" y="205" width="40" height="26" rx="4" fill={PROTON} />
                  <line x1="60" y1="40" x2="60" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="46" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">+</text>
                  <line x1="260" y1="40" x2="260" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="274" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">−</text>
                  <path d="M160,205 Q174,120 205,75" fill="none" stroke={PROTON} strokeWidth="4" markerEnd="url(#ar53b)" />
                  <text x="216" y="68" fill={PROTON} fontSize="18" textAnchor="middle" fontStyle="italic">α</text>
                </svg>
              ),
            },
            {
              label: 'γ rovně',
              caption: <>Neutrální <b>γ</b> nic nepřitahuje → letí <b>rovně</b>. Podle vychýlení tak hned poznáš, co je co.</>,
              content: (
                <svg viewBox="0 0 320 240" className="svg-fig">
                  <Defs color={NEUTRON} />
                  <rect x="140" y="205" width="40" height="26" rx="4" fill={PROTON} />
                  <line x1="60" y1="40" x2="60" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="46" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">+</text>
                  <line x1="260" y1="40" x2="260" y2="190" stroke={PLATE} strokeWidth="6" />
                  <text x="274" y="36" fill={PLATE} fontSize="22" textAnchor="middle" fontWeight="700">−</text>
                  <path d="M160,205 Q150,120 95,70" fill="none" stroke={NEUTRON} strokeWidth="3" opacity="0.5" />
                  <text x="92" y="58" fill={NEUTRON} fontSize="14" textAnchor="middle" fontStyle="italic" opacity="0.6">β⁻</text>
                  <path d="M160,205 Q174,120 205,75" fill="none" stroke={PROTON} strokeWidth="3" opacity="0.5" />
                  <text x="216" y="68" fill={PROTON} fontSize="14" textAnchor="middle" fontStyle="italic" opacity="0.6">α</text>
                  <line x1="160" y1="205" x2="160" y2="60" stroke={GAMMA} strokeWidth="4" markerEnd="url(#ar53b)" />
                  <text x="160" y="48" fill={GAMMA} fontSize="18" textAnchor="middle" fontStyle="italic">γ</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Ochrana před zářením — jednou větou">
        <Figure caption="Pravidlo na zapamatování: α = papír, β = plech (hliník), γ = jen oslabit olovem.">
          <svg viewBox="0 0 360 150" className="svg-fig">
            <Defs />
            <text x="20" y="38" fill={PROTON} fontSize="16" fontWeight="700">α</text>
            <line x1="44" y1="33" x2="120" y2="33" stroke={PROTON} strokeWidth="3" markerEnd="url(#ar53b)" />
            <rect x="124" y="18" width="6" height="30" fill={MUTED} />
            <text x="150" y="38" fill={TXT} fontSize="12">papír zastaví</text>

            <text x="20" y="80" fill={NEUTRON} fontSize="16" fontWeight="700">β</text>
            <line x1="44" y1="75" x2="170" y2="75" stroke={NEUTRON} strokeWidth="3" markerEnd="url(#ar53b)" />
            <rect x="174" y="60" width="10" height="30" fill="#9aa6c4" />
            <text x="200" y="80" fill={TXT} fontSize="12">plech zastaví</text>

            <text x="20" y="122" fill={GAMMA} fontSize="16" fontWeight="700">γ</text>
            <line x1="44" y1="117" x2="240" y2="117" stroke={GAMMA} strokeWidth="3" markerEnd="url(#ar53b)" />
            <rect x="244" y="100" width="20" height="34" fill="#5b6b8c" />
            <line x1="268" y1="117" x2="300" y2="117" stroke={GAMMA} strokeWidth="2" strokeDasharray="3 3" />
            <text x="246" y="148" fill={MUTED} fontSize="11">Pb (jen oslabí)</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>β⁻ → Z roste o +1, β⁺ → Z klesá o −1.</b> Pamatuj si: <b>β minus PŘIDÁ proton</b> (neutron se
            mění na proton). Záměna těchhle dvou je nejčastější chyba.
          </li>
          <li>
            <b>γ rozpad neposouvá prvek</b> v tabulce — <M>{'A'}</M> i <M>{'Z'}</M> se nemění, jádro jen ztratí
            přebytečnou energii. Když ti vyjde, že se po γ změnil prvek, máš chybu.
          </li>
          <li>
            <b>Ochrana:</b> α = papír, β = plech, γ = jen oslabit (olovo). γ se nedá zcela zastavit.
          </li>
          <li>
            <b>Elektronový záchyt</b> a <b>β⁺</b> dají stejný posun (<M>{'Z-1'}</M>), ale u záchytu <b>žádná
            beta částice ven nevyletí</b> — jádro elektron naopak spolkne.
          </li>
          <li>
            U <b>vnitřní</b> konverze vyletí elektron z <b>obalu</b>; u <b>dvojné</b> konverze vznikne pár
            elektron + pozitron a <b>obal se nepodílí</b>.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Napsat rovnici rozpadu α a říct, že A klesne o 4 a Z o 2; α zastaví papír.',
          'Rozlišit β⁻ (Z+1), β⁺ (Z−1), elektronový záchyt (Z−1) a inverzní beta (Z−1) — co se vyzáří a jak se mění Z.',
          'Vysvětlit, že γ je foton, A i Z se nemění (prvek se neposouvá) a olovo ho jen oslabí.',
          'Popsat vnitřní a dvojnou konverzi jako alternativu k emisi fotonu γ.',
          'Určit z vychýlení v poli, které záření je α (kladné), β (záporné) a γ (neutrální).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: <>Jak se u rozpadu β⁻ změní protonové číslo <M>{'Z'}</M> a proč?</>,
            a: <><M>{'Z'}</M> <b>roste o 1</b>. V jádře se neutron mění na proton (<M>{'n \\to p + e^- + \\bar{\\nu}_e'}</M>), tedy přibyl proton. Hmotnostní číslo <M>{'A'}</M> se nemění.</>,
          },
          {
            q: <>Proč se prvek při rozpadu γ neposune v periodické tabulce?</>,
            a: <>Protože se nemění počet protonů ani nukleonů — jádro jen vyzáří <Concept id="foton">foton</Concept> a přejde z vybuzeného stavu na nižší energii. <M>{'A'}</M> i <M>{'Z'}</M> zůstávají stejné.</>,
          },
          {
            q: <>Vzorek mezi deskami kondenzátoru: které záření se vychýlí ke kladné desce, které k záporné a které poletí rovně?</>,
            a: <>Ke <b>kladné</b> desce záporné <b>β</b>; k <b>záporné</b> desce kladné <b>α</b>; <b>γ</b> je neutrální, takže letí <b>rovně</b> bez vychýlení.</>,
          },
          {
            q: <>Čím se ochráníš před α, β a γ zářením?</>,
            a: <><b>α</b> zastaví list papíru, <b>β</b> tenký plech (např. hliník), <b>γ</b> se nedá úplně zastavit — jen oslabit, nejlépe olovem (Pb).</>,
          },
        ]}
      />
    </>
  )
}
