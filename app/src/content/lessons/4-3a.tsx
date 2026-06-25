import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.3a'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'fotoefekt': { lesson: '4.3a', label: 'fotoelektrický jev', short: 'Foton se pohltí a uvolní elektron; hν = Eₑ + výstupní práce.' },
  'vystupni-prace': { lesson: '4.3a', label: 'výstupní práce', short: 'Nejmenší energie nutná k vytržení elektronu z látky.' },
}

/* Barvy tématu */
const ACCENT = '#f472b6' // akcent kvantové fyziky (foton / světlo)
const METAL = '#9aa6c4'  // kov
const ELEC = '#60a5fa'   // elektron
const TXT = '#e8ecf8'    // světlý text
const MUTED = '#94a3b8'

/* Šipka pro SVG */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Foton jako vlnka (zleva dolů na kov) */
function Photon({ x, y, on = true }: { x: number; y: number; on?: boolean }) {
  return (
    <g transform={`translate(${x},${y})`} opacity={on ? 1 : 0.25}>
      <path
        d="M0,0 q7,-9 14,0 t14,0 t14,0 t14,0 t10,0"
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
        markerEnd="url(#arP)"
      />
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tady poprvé uvidíš <Term>foton v akci</Term>: dopadne na kov a vykopne z něj elektron. Je to
        oblíbená zkoušková otázka — chtějí hlavně, abys řekla, <b>co se děje</b>, uměla{' '}
        <b>rozlišit tři druhy</b> jevu a věděla, že <b>jeden foton uvolní jeden elektron</b>.
        Výpočty necháme na později, teď jde o pochopení.
      </p>

      <Section title="Co je fotoelektrický jev (fotoefekt)">
        <p>
          <Term>Fotoelektrický jev</Term> (krátce <Term>fotoefekt</Term>) je děj, při kterém{' '}
          <b>světlo (elektromagnetické záření) uvolní elektron z látky</b> — nejčastěji z kovu.
          Mechanismus je jednoduchý: foton dopadne na povrch, <Term>pohltí se</Term> (absorbuje) a
          svou energii předá jednomu elektronu. Pokud té energie bylo dost, elektron se utrhne.
        </p>
        <p>
          Klasická („vlnová") fyzika fotoefekt sice připouští, ale její předpovědi nesouhlasí s
          experimenty. Správné vysvětlení dal <b>Einstein</b> tím, že na světlo nahlížel jako na{' '}
          proud <b>fotonů</b> (kvant energie). Za to dostal Nobelovu cenu — ne za teorii relativity.
        </p>

        <Figure caption="Foton dopadne na kov, pohltí se a vykopne ven elektron (fotoelektron).">
          <svg viewBox="0 0 360 170" className="svg-fig">
            <Defs color={ACCENT} name="arP" />
            {/* kov */}
            <rect x="20" y="95" width="320" height="60" rx="4" fill={METAL} opacity="0.85" />
            <text x="180" y="132" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="700">kov</text>
            {/* dopadající foton */}
            <Photon x={40} y={40} />
            <text x="78" y="34" fill={ACCENT} fontSize="13" textAnchor="middle">foton (hν)</text>
            {/* místo dopadu */}
            <circle cx="150" cy="95" r="5" fill={ACCENT} />
            {/* vyletující elektron */}
            <line x1="160" y1="92" x2="250" y2="40" stroke={ELEC} strokeWidth="3" markerEnd="url(#arE)" />
            <defs>
              <marker id="arE" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 z" fill={ELEC} />
              </marker>
            </defs>
            <circle cx="252" cy="38" r="7" fill={ELEC} />
            <text x="252" y="42" fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="700">−</text>
            <text x="290" y="34" fill={ELEC} fontSize="13" textAnchor="middle">elektron</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Tři druhy fotoefektu (tohle si zkoušející hlídá)">
        <p>
          Podle toho, <b>kam se elektron dostane</b>, rozlišujeme tři varianty. Pleteni vnějšího a
          vnitřního jevu je klasický chyták — drž se jednoduché pomůcky{' '}
          <b>„vyletí ven / zůstane uvnitř"</b>:
        </p>
        <ul className="biglist">
          <li>
            <b>Vnější (fotoemise).</b> Elektron <Term>opustí látku</Term> a vyletí ven. Světlo dopadá
            na čistý povrch kovu (nebo polovodiče) a uvolněné <Term>fotoelektrony</Term> z něj
            odcházejí do okolí. <i>To je ten jev z nadpisu.</i>
          </li>
          <li>
            <b>Vnitřní (fotovodivost).</b> Elektron <Term>zůstane v látce</Term>, jen se v ní stane
            volným (přeskočí do vodivostního pásu) → polovodič osvětlením <b>sníží svůj odpor</b>,
            tedy líp vede. Funguje tak <Term>fotorezistor</Term> (např. v sušiči rukou: zastíníš ho
            rukou, odpor stoupne a obvod sepne).
          </li>
          <li>
            <b>Hradlový.</b> Na rozhraní dvou prostředí (polovodič–kov, polovodič–polovodič) vznikne
            osvětlením <b>elektrické napětí</b>. Tohle je princip <Term>fotovoltaiky</Term> — přímé
            získání napětí ze světla.
          </li>
        </ul>

        <Figure caption="Vnější = elektron vyletí ven. Vnitřní = zůstane v látce (jen líp vede). Hradlový = na rozhraní vznikne napětí.">
          <svg viewBox="0 0 380 150" className="svg-fig">
            <defs>
              <marker id="armini" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 z" fill={ELEC} />
              </marker>
            </defs>
            {/* VNĚJŠÍ */}
            <rect x="14" y="70" width="90" height="48" rx="4" fill={METAL} opacity="0.85" />
            <line x1="59" y1="70" x2="59" y2="22" stroke={ELEC} strokeWidth="3" markerEnd="url(#armini)" />
            <circle cx="59" cy="18" r="6" fill={ELEC} />
            <text x="59" y="138" fill={TXT} fontSize="12" textAnchor="middle" fontWeight="700">vnější</text>
            <text x="59" y="62" fill={MUTED} fontSize="10" textAnchor="middle">ven</text>

            {/* VNITŘNÍ */}
            <rect x="145" y="70" width="90" height="48" rx="4" fill={METAL} opacity="0.85" />
            <circle cx="178" cy="94" r="6" fill={ELEC} />
            <line x1="186" y1="94" x2="212" y2="94" stroke={ELEC} strokeWidth="3" markerEnd="url(#armini)" />
            <text x="190" y="138" fill={TXT} fontSize="12" textAnchor="middle" fontWeight="700">vnitřní</text>
            <text x="190" y="62" fill={MUTED} fontSize="10" textAnchor="middle">zůstane uvnitř</text>

            {/* HRADLOVÝ */}
            <rect x="276" y="70" width="44" height="48" rx="4" fill={METAL} opacity="0.85" />
            <rect x="320" y="70" width="44" height="48" rx="4" fill="#5b6b8f" opacity="0.85" />
            <line x1="320" y1="66" x2="320" y2="118" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="4 3" />
            <text x="320" y="58" fill={ACCENT} fontSize="11" textAnchor="middle">+U−</text>
            <text x="320" y="138" fill={TXT} fontSize="12" textAnchor="middle" fontWeight="700">hradlový</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Jak to probíhá krok po kroku">
        <p>
          Klikej <b>Další →</b>. Všimni si hlavně toho, že každý foton si „vybere" právě{' '}
          <b>jeden</b> elektron:
        </p>
        <StepFigure
          title="Vnější fotoefekt: jeden foton uvolní jeden elektron"
          steps={[
            {
              label: 'dopad fotonu',
              caption: <>Na povrch kovu dopadá foton o energii <M>{'E = h\\nu'}</M>. Uvnitř kovu jsou vázané elektrony.</>,
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <Defs color={ACCENT} name="arP" />
                  <rect x="20" y="105" width="320" height="60" rx="4" fill={METAL} opacity="0.85" />
                  <text x="305" y="142" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">kov</text>
                  {/* vázané elektrony */}
                  <circle cx="120" cy="135" r="7" fill={ELEC} />
                  <circle cx="180" cy="135" r="7" fill={ELEC} />
                  <circle cx="240" cy="135" r="7" fill={ELEC} />
                  <Photon x={40} y={45} />
                  <text x="78" y="38" fill={ACCENT} fontSize="13" textAnchor="middle">foton hν</text>
                </svg>
              ),
            },
            {
              label: 'pohlcení (absorpce)',
              caption: <>Foton se <b>celý pohltí</b> jediným elektronem a předá mu svou energii <M>{'h\\nu'}</M>. <Term>Jeden foton ↔ jeden elektron.</Term></>,
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <Defs color={ACCENT} name="arP" />
                  <rect x="20" y="105" width="320" height="60" rx="4" fill={METAL} opacity="0.85" />
                  <text x="305" y="142" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">kov</text>
                  <circle cx="120" cy="135" r="7" fill={ELEC} />
                  <circle cx="240" cy="135" r="7" fill={ELEC} />
                  {/* zasažený elektron svítí akcentem */}
                  <circle cx="180" cy="118" r="10" fill={ELEC} stroke={ACCENT} strokeWidth="3" />
                  <Photon x={120} y={70} on={false} />
                  <text x="180" y="100" fill={ACCENT} fontSize="12" textAnchor="middle">pohlceno</text>
                </svg>
              ),
            },
            {
              label: 'uvolnění',
              caption: (
                <>
                  Část energie se spotřebuje na vytržení elektronu — <Term>výstupní práce</Term>{' '}
                  <M>{'A'}</M>. Zbytek si elektron odnese jako pohybovou energii <M>{'E_e'}</M> a vyletí ven.
                </>
              ),
              content: (
                <svg viewBox="0 0 360 180" className="svg-fig">
                  <defs>
                    <marker id="arE2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                      <path d="M0,0 L9,4.5 L0,9 z" fill={ELEC} />
                    </marker>
                  </defs>
                  <rect x="20" y="105" width="320" height="60" rx="4" fill={METAL} opacity="0.85" />
                  <text x="305" y="142" fill="#0b1020" fontSize="13" textAnchor="middle" fontWeight="700">kov</text>
                  <circle cx="120" cy="135" r="7" fill={ELEC} />
                  <circle cx="240" cy="135" r="7" fill={ELEC} />
                  <line x1="180" y1="105" x2="250" y2="35" stroke={ELEC} strokeWidth="3" markerEnd="url(#arE2)" />
                  <circle cx="252" cy="33" r="8" fill={ELEC} />
                  <text x="252" y="37" fill="#0b1020" fontSize="11" textAnchor="middle" fontWeight="700">−</text>
                  <text x="296" y="30" fill={ELEC} fontSize="12" textAnchor="middle">Eₑ</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Einsteinovo vysvětlení — energetická bilance">
        <p>
          Celé je to jen <b>zákon zachování energie</b> pro jednu srážku fotonu s elektronem. Energie,
          kterou foton přinese, se rozdělí na dvě části:
        </p>
        <MB>{'h\\nu = E_e + A'}</MB>
        <ul>
          <li><M>{'h\\nu'}</M> = energie dopadajícího fotonu (<M>{'h'}</M> je Planckova konstanta, <M>{'\\nu'}</M> frekvence),</li>
          <li><M>{'A'}</M> = <Term>výstupní práce</Term> — nejmenší energie nutná, aby elektron látku opustil (vlastnost daného materiálu a povrchu),</li>
          <li><M>{'E_e'}</M> = energie, kterou si elektron odnese jako pohyb (to, co „zbude").</li>
        </ul>
        <p>
          Z toho hned plyne <Term>prahová (mezní) frekvence</Term> <M>{'\\nu_0'}</M>: foton musí mít
          aspoň takovou energii, aby pokryl výstupní práci, <M>{'h\\nu_0 = A'}</M>. Když je{' '}
          <M>{'h\\nu < A'}</M>, elektron se neuvolní <b>ani kdybys svítila sebevíc</b> — slabému
          fotonu na to prostě energie nestačí.
        </p>
        <Callout kind="tip" title="Co řídí co">
          <ul>
            <li><b>Intenzita světla</b> = kolik fotonů → ovlivní <b>počet</b> vyletělých elektronů (velikost proudu).</li>
            <li><b>Frekvence (barva) světla</b> = energie jednoho fotonu → ovlivní <b>energii</b> (rychlost) elektronů.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="Termoemise — příbuzný jev">
        <p>
          Stejný princip „dodat elektronu dost energie, ať uteče" funguje i bez světla. Při{' '}
          <Term>termoemisi</Term> se elektrony (pak se jim říká <b>termoelektrony</b>) uvolní z{' '}
          <b>silně zahřátého</b> kovu — energii si vezmou z tepelného pohybu částic. Hezky to potvrzuje
          Einsteinův pohled: výstupní práce při termoemisi je zhruba stejná jako u fotoemise{' '}
          <M>{'(A_{\\text{termo}} \\approx A_{\\text{foto}})'}</M>.
        </p>
      </Section>

      <Section title="K čemu to je (využití)">
        <p>Tohle se ptají rádi jako „uveďte aplikaci" — stačí pár příkladů:</p>
        <ul>
          <li><b>Fotovoltaika / fotoelektrické (solární) články</b> — ze slunečního světla rovnou elektrická energie (hradlový jev).</li>
          <li><b>Fotobuňky (fotočlánky)</b> — přerušení dopadu světla přeruší fotoproud → spínač: automatické otevírání dveří, světelné závory, poplašná zařízení.</li>
          <li><b>Fotorezistor</b> — čidlo osvětlení (vnitřní jev): soumrakové spínače, sušiče rukou.</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Jeden foton interaguje s jedním elektronem.</b> Foton se nerozdělí mezi víc elektronů
            ani se elektron neuvolní postupným „sbíráním" mnoha slabých fotonů.
          </li>
          <li>
            <b>Nepleť vnější × vnitřní.</b> Vnější (fotoemise) = elektron <b>vyletí ven z látky</b>.
            Vnitřní (fotovodivost) = elektron <b>zůstane v látce</b>, jen se zvýší její vodivost.
          </li>
          <li>
            Pod prahovou frekvencí (<M>{'h\\nu < A'}</M>) <b>nepomůže silnější svícení</b> — víc
            fotonů, ale každý pořád moc slabý. Rozhoduje energie <i>jednoho</i> fotonu, ne jejich počet.
          </li>
          <li>
            Vyšší intenzita → víc elektronů (větší proud). Vyšší frekvence → energičtější elektrony.
            Nezaměňuj tyhle dvě věci.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit, co je fotoelektrický jev: foton se pohltí a uvolní elektron z látky.',
          'Rozlišit vnější (fotoemise), vnitřní (fotovodivost) a hradlový jev.',
          'Zdůraznit, že jeden foton uvolní (interaguje s) právě jeden elektron.',
          'Napsat Einsteinovu rovnici hν = Eₑ + A a popsat členy (výstupní práce, prahová frekvence).',
          'Uvést využití: fotovoltaika, fotobuňky, fotorezistor.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co se při vnějším fotoelektrickém jevu vlastně stane?',
            a: <>Na látku (kov) dopadne foton, <b>pohltí se</b> jedním elektronem a předá mu svou energii <M>{'h\\nu'}</M>. Pokud energie stačí na výstupní práci, elektron <b>opustí látku</b> (fotoemise) a odletí jako fotoelektron.</>,
          },
          {
            q: 'Jaký je rozdíl mezi vnějším a vnitřním fotoelektrickým jevem?',
            a: <>Vnější (<b>fotoemise</b>) = elektron <b>vyletí ven</b> z látky. Vnitřní (<b>fotovodivost</b>) = elektron <b>zůstane v látce</b>, jen se stane volným, takže látka (polovodič) sníží svůj odpor a líp vede.</>,
          },
          {
            q: 'Kolik elektronů uvolní jeden foton a co z toho plyne?',
            a: <>Právě <b>jeden</b> — jeden foton interaguje s jedním elektronem. Proto je počet uvolněných elektronů úměrný počtu fotonů, tedy <b>intenzitě</b> záření.</>,
          },
          {
            q: 'Proč při slabé (nízkofrekvenční) barvě světla nemusí jev nastat, i když svítíš hodně?',
            a: <>Když je <M>{'h\\nu < A'}</M>, jeden foton nemá dost energie na výstupní práci. Víc fotonů (vyšší intenzita) na tom nic nezmění — rozhoduje energie <b>jednoho</b> fotonu, tedy frekvence. Existuje <b>prahová frekvence</b> <M>{'\\nu_0'}</M>, pod níž k jevu nedojde.</>,
          },
        ]}
      />
    </>
  )
}
