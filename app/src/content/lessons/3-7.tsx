import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.7'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'huygensuv-princip': { lesson: '3.7', label: 'Huygensův princip', short: 'Každý bod vlnoplochy je zdrojem elementárního vlnění; nová vlnoplocha je obal těchto vlnek.' },
  'vlnoplocha': { lesson: '3.7', label: 'vlnoplocha', short: 'Souhrn bodů, kde má vlnění v daném okamžiku stejnou fázi.' },
  'elementarni-vlneni': { lesson: '3.7', label: 'elementární vlnění', short: 'Malá kulová vlnka vyslaná z jednoho bodu vlnoplochy (Huygens).' },
  'inklinacni-faktor': { lesson: '3.7', label: 'inklinační faktor', short: 'Fresnelovo doplnění K(θ) = ½(1 + cos θ): vlnka vyzařuje hlavně dopředu, dozadu skoro ne.' },
  'ohyb': { lesson: '3.7', label: 'ohyb (difrakce)', short: 'Zahýbání vlnění za překážku/roh — důsledek Huygensova principu.' },
  'dopplernv-jev': { lesson: '3.7', label: 'Dopplerův jev', short: 'Při vzájemném pohybu zdroje a pozorovatele se mění registrovaná frekvence.' },
}

/* ---- barvy ---- */
const ACC = '#a78bfa'   // akcent tématu (vlnoplochy, fronty)
const TXT = '#e8ecf8'
const MUTED = '#9aa6c4'
const SRC = '#fb7185'   // zdroj
const NEW = '#38bdf8'   // nová vlnoplocha / posun
const HIGH = '#f59e0b'  // vyšší frekvence (přibližování)
const LOW = '#34d399'   // nižší frekvence (vzdalování)

/* šipka pro SVG (marker v dané barvě, unikátní id) */
function Arrow({ id: mid, color }: { id: string; color: string }) {
  return (
    <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
    </marker>
  )
}

export default function Lesson_3_7() {
  return (
    <>
      <p className="lead">
        Dvě klasické zkouškové otázky, které jdou ruku v ruce. <Term id="huygensuv-princip">Huygensův princip</Term> ti
        dá názorné vysvětlení, proč se <Concept id="vlneni">vlnění</Concept> ohýbá za roh (slyšíš za zeď). A <Term id="dopplernv-jev">Dopplerův
        jev</Term> je ta sanitka, co změní tón, když projede kolem — stačí umět <b>jednu větu a
        jedno pravidlo</b> a máš bod.
      </p>

      <Section title="Huygensův princip: jak postavit novou vlnoplochu">
        <p>
          Nejdřív pojem: <Term>vlnoplocha</Term> je souhrn všech bodů prostoru, kde má vlnění{' '}
          <b>v daném okamžiku stejnou fázi</b> (např. všechny „vrcholy" vlny tvoří jednu plochu).
          U bodového zdroje jsou to kulové slupky, daleko od zdroje vypadají jako rovné desky
          (rovinná vlna).
        </p>
        <p>
          Huygensův nápad (formulace, kterou chce zkoušející): <b>každý bod vlnoplochy, kam vlnění
          dospělo, se sám stává zdrojem</b> malého <Term id="elementarni-vlneni">elementárního vlnění</Term> — drobné
          kulové vlnky. <b>Novou vlnoplochu o chvíli později dostaneš jako obal (obálku) všech těchto
          elementárních vlnek.</b>
        </p>

        <StepScene
          title="Konstrukce nové vlnoplochy podle Huygense"
          viewBox="0 0 420 260"
          captions={[
            <>
              Máme zdroj (červeně) a kolem něj <Term>původní vlnoplochu</Term> (fialově) — všude
              na ní má vlnění stejnou fázi.
            </>,
            <>
              Vybereme pár bodů na vlnoploše. <b>Každý z nich je nový elementární zdroj</b> a
              vyšle vlastní malou kulovou vlnku (modře).
            </>,
            <>
              Vnější <b>obálka</b> všech těch vlnek (modrá oblouková čára) je <b>nová
              vlnoplocha</b>. Vlnění tak postoupilo dál. Tohle je celý princip.
            </>,
          ]}
        >
          {/* původní vlnoplocha (ve 3. kroku trochu zeslábne) */}
          <ACircle cx={120} cy={130} r={70} fill="none" stroke={ACC} strokeWidth={[2.5, 2.5, 2]} opacity={[1, 1, 0.55]} />
          {/* zdroj */}
          <ACircle cx={120} cy={130} r={5} fill={SRC} />
          {/* elementární zdroje na pravé části vlnoplochy + jejich vlnky:
              body jsou pořád, vlnky se rozrostou z r=0 (krok 1) na r=30 (kroky 2,3) */}
          {([
            [190, 130], [183, 95], [183, 165], [165, 65], [165, 195],
          ] as [number, number][]).map(([cx, cy], k) => (
            <g key={k}>
              <ACircle cx={cx} cy={cy} r={3} fill={NEW} opacity={[0, 1, 0.7]} />
              <ACircle cx={cx} cy={cy} r={[0, 30, 30]} fill="none" stroke={NEW} strokeWidth={[1.3, 1.3, 1]} opacity={[0, 0.85, 0.5]} />
            </g>
          ))}
          {/* nová vlnoplocha = obálka (poloměr 100) — naroste až v posledním kroku */}
          <ACircle cx={120} cy={130} r={[70, 70, 100]} fill="none" stroke={NEW} strokeWidth={3} opacity={[0, 0, 1]} />
          {/* popisky */}
          <AText x={120} y={108} fill={SRC} fontSize="13" textAnchor="middle" opacity={[1, 0, 0]}>zdroj</AText>
          <AText x={120} y={225} fill={ACC} fontSize="13" textAnchor="middle" opacity={[1, 0, 0]}>původní vlnoplocha</AText>
          <AText x={255} y={245} fill={NEW} fontSize="13" textAnchor="middle" opacity={[0, 1, 0]}>elementární vlnky</AText>
          <AText x={120} y={252} fill={NEW} fontSize="13" textAnchor="middle" opacity={[0, 0, 1]}>nová vlnoplocha (obálka)</AText>
        </StepScene>
      </Section>

      <Section title="Fresnelovo doplnění: inklinační faktor">
        <p>
          Huygensovi něco scházelo: kdyby každý bod vyzařoval kulově na <b>všechny</b> strany,
          vznikla by i vlna mířící <b>dozadu</b> (proti směru šíření), kterou v reálu nevidíme.
          Fresnel to dořešil: elementární vlnky se <Concept id="interference">interferencí</Concept> sečtou tak, že se zesílí
          jen na vnější obálce — jinde se vyruší. Zavedl <Term id="inklinacni-faktor">inklinační faktor</Term>:
        </p>
        <MB>{'K(\\theta) = \\tfrac{1}{2}\\,(1 + \\cos\\theta)'}</MB>
        <p>
          kde <M>{'\\theta'}</M> je odchylka od původního směru šíření. Dopředu (<M>{'\\theta = 0'}</M>)
          je <M>{'K = 1'}</M> — plná síla; dozadu (<M>{'\\theta = 180^\\circ'}</M>) je{' '}
          <M>{'K = 0'}</M> — nic. Proto vlna jede dopředu a ne dozadu.
        </p>

        <Figure caption="Inklinační faktor: elementární vlnka vyzařuje naplno dopředu (θ = 0, K = 1) a do strany slaběji; dozadu (θ = 180°) prakticky nic (K = 0).">
          <svg viewBox="0 0 420 180" className="svg-fig">
            <defs><Arrow id="kf" color={ACC} /><Arrow id="kw" color={MUTED} /></defs>
            <circle cx="150" cy="95" r="5" fill={NEW} />
            {/* dopředu - silná */}
            <line x1="155" y1="95" x2="330" y2="95" stroke={ACC} strokeWidth="4" markerEnd="url(#kf)" />
            <text x="250" y="84" fill={ACC} fontSize="13" textAnchor="middle">θ = 0, K = 1</text>
            {/* do strany - slabší */}
            <line x1="152" y1="90" x2="250" y2="35" stroke={ACC} strokeWidth="2.5" markerEnd="url(#kf)" opacity="0.8" />
            <line x1="152" y1="100" x2="250" y2="155" stroke={ACC} strokeWidth="2.5" markerEnd="url(#kf)" opacity="0.8" />
            {/* dozadu - skoro nic */}
            <line x1="145" y1="95" x2="60" y2="95" stroke={MUTED} strokeWidth="1.3" markerEnd="url(#kw)" strokeDasharray="4 4" />
            <text x="65" y="85" fill={MUTED} fontSize="12">θ = 180°, K ≈ 0</text>
          </svg>
        </Figure>
      </Section>

      <Section title="K čemu to je: ohyb (zvuk za roh)">
        <p>
          Důležitý důsledek Huygensova principu je <Term id="ohyb">ohyb</Term> (difrakce): když vlna projde
          úzkou škvírou nebo mine roh, body na okraji se chovají jako nové zdroje a vyšlou vlnky{' '}
          <b>i do oblasti za překážkou</b>. Proto <b>slyšíš člověka i za rohem</b>, i když ho
          nevidíš. Stejně tak se ohýbají vlny na vodě kolem mola.
        </p>

        <Figure caption="Ohyb: vlnoplocha projde štěrbinou a za ní se roztáhne do stran (vlnky z okrajů míří i za stěnu), proto se zvuk dostane za roh.">
          <svg viewBox="0 0 420 200" className="svg-fig">
            {/* rovinné vlnoplochy zleva (před stěnou) */}
            <g stroke={ACC} strokeWidth="2.5" fill="none">
              <line x1="30" y1="22" x2="30" y2="178" />
              <line x1="60" y1="22" x2="60" y2="178" />
              <line x1="90" y1="22" x2="90" y2="178" />
            </g>
            <text x="60" y="195" fill={ACC} fontSize="12" textAnchor="middle">rovinná vlna</text>
            {/* stěna se štěrbinou (štěrbina y = 95…115, střed 105) */}
            <rect x="150" y="20" width="10" height="75" fill={MUTED} />
            <rect x="150" y="115" width="10" height="65" fill={MUTED} />
            <text x="178" y="14" fill={MUTED} fontSize="12">štěrbina</text>
            {/* za štěrbinou: půlkruhové vlnoplochy (jen napravo od stěny, ze středu štěrbiny) */}
            <g stroke={NEW} strokeWidth="2" fill="none">
              <path d="M160,75 A30,30 0 0 1 160,135" />
              <path d="M160,50 A55,55 0 0 1 160,160" />
              <path d="M160,27 A78,78 0 0 1 160,183" />
            </g>
            <text x="312" y="100" fill={NEW} fontSize="12.5" textAnchor="middle">vlna se ohýbá</text>
            <text x="312" y="120" fill={NEW} fontSize="12.5" textAnchor="middle">za stěnu</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Dopplerův jev: pohyb mění frekvenci">
        <p>
          Jádro celé otázky v jedné větě: <b>pohybují-li se vůči sobě zdroj a pozorovatel,
          zaregistruje pozorovatel jinou frekvenci, než je frekvence zdroje.</b> Frekvence{' '}
          <M>{'f_0'}</M> se nemění u zdroje — mění se to, <b>jak hustě k tobě vlnoplochy dorazí</b>.
        </p>

        <StepScene
          title="Sanitka: proč se mění tón"
          viewBox="0 0 420 232"
          captions={[
            <>
              Stojící zdroj vysílá vlnoplochy <b>pravidelně do všech stran</b> — vzdálenost mezi
              nimi (<Concept id="vlnova-delka">vlnová délka</Concept> <M>{'\\lambda'}</M>) je všude stejná. Vlevo i vpravo slyšíš{' '}
              <b>stejný tón</b> <M>{'f_0'}</M>.
            </>,
            <>
              Zdroj jede <b>doprava</b>. Každou novou vlnoplochu vyšle už z trochu jiného místa,
              takže se <b>vlnoplochy vepředu nahustí</b> (kratší <M>{'\\lambda'}</M>) a{' '}
              <b>vzadu naředí</b> (delší <M>{'\\lambda'}</M>).
            </>,
            <>
              <b>Před</b> sanitkou (blíží se k tobě) jsou vlnoplochy hustší →{' '}
              <b>vyšší frekvence</b>, vyšší tón.{' '}
              <b>Za</b> sanitkou (vzdaluje se) jsou řidší → <b>nižší frekvence</b>, nižší tón.
              Proto ten „íííííjóóóóu" při projetí kolem.
            </>,
          ]}
        >
          <defs><Arrow id="dv" color={SRC} /></defs>
          {/* 4 vlnoplochy: v klidu soustředné (cx 210, fialové), v pohybu se středy posunou
              doleva → vpravo se nahustí (kratší λ), vlevo naředí (delší λ); barvy: HIGH vepředu, LOW vzadu */}
          <ACircle cx={[210, 160, 160]} cy={105} r={105} fill="none" strokeWidth={2} stroke={[ACC, LOW, LOW]} />
          <ACircle cx={[210, 175, 175]} cy={105} r={78} fill="none" strokeWidth={2} stroke={[ACC, LOW, LOW]} />
          <ACircle cx={[210, 190, 190]} cy={105} r={51} fill="none" strokeWidth={2} stroke={[ACC, ACC, ACC]} />
          <ACircle cx={[210, 205, 205]} cy={105} r={24} fill="none" strokeWidth={2} stroke={[ACC, HIGH, HIGH]} />
          {/* zdroj (sanitka) – v pohybu se posune trochu doprava */}
          <ACircle cx={[210, 218, 218]} cy={105} r={6} fill={SRC} />
          {/* vektor rychlosti zdroje – jen když se hýbe */}
          <ALine x1={226} y1={105} x2={270} y2={105} stroke={SRC} strokeWidth={3} markerEnd="url(#dv)" opacity={[0, 1, 1]} />

          {/* popisek klidu – pod vlnoplochami, mimo nejvyšší kružnici */}
          <AText x={210} y={226} fill={MUTED} fontSize="13" textAnchor="middle" opacity={[1, 0, 0]}>zdroj v klidu — λ všude stejná</AText>
          {/* popisky pohybu – jen krok 2 (nad vlnoplochami, mimo zelený oblouk) */}
          <AText x={324} y={36} fill={HIGH} fontSize="12" textAnchor="middle" opacity={[0, 1, 0]}>vepředu nahuštěno</AText>
          <AText x={86} y={20} fill={LOW} fontSize="12" textAnchor="middle" opacity={[0, 1, 0]}>vzadu naředěno</AText>
          {/* pozorovatelé + tóny – jen krok 3 */}
          <AText x={372} y={99} fontSize="20" textAnchor="middle" opacity={[0, 0, 1]}>🧍</AText>
          <AText x={372} y={129} fill={HIGH} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>vyšší tón</AText>
          <AText x={40} y={99} fontSize="20" textAnchor="middle" opacity={[0, 0, 1]}>🧍</AText>
          <AText x={40} y={129} fill={LOW} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>nižší tón</AText>
        </StepScene>

        <p>
          Vzorečky pro zjednodušené případy (<M>{'w'}</M> = rychlost vlnění v prostředí,{' '}
          <M>{'v'}</M> = rychlost zdroje, <M>{'u'}</M> = rychlost pozorovatele):
        </p>
        <ul>
          <li>
            <b>Zdroj jede k pozorovateli:</b>{' '}
            <M>{'f = \\dfrac{w}{\\,w - v\\,}\\,f_0'}</M> — jmenovatel se zmenší, takže{' '}
            <M>{'f > f_0'}</M> (vyšší).
          </li>
          <li>
            <b>Pozorovatel jede ke zdroji:</b>{' '}
            <M>{'f = \\dfrac{\\,w + u\\,}{w}\\,f_0'}</M> — čitatel se zvětší, takže{' '}
            <M>{'f > f_0'}</M> (vyšší).
          </li>
        </ul>
        <p>
          Pravidlo bez počítání: <b>přibližování → vyšší frekvence</b>, <b>vzdalování → nižší</b>.
          A nezáleží, jestli se hýbe zdroj, nebo pozorovatel — stačí <b>vzájemný</b> pohyb.
        </p>
      </Section>

      <Section title="Využití ultrazvuku (a Dopplera obecně)">
        <p>
          <Term id="doppleruv-jev">Dopplerův jev</Term> a odraz vln se prakticky využívají k <b>měření rychlostí</b> — vyšlu vlnu,
          změřím posun frekvence odraženého signálu a z něj spočítám rychlost:
        </p>
        <ul>
          <li><b>Medicína (ultrazvuk):</b> měření <b>rychlosti krve v cévách</b>, zobrazení vnitřních orgánů, plodu.</li>
          <li><b>Radar / policie:</b> měření <b>rychlosti aut</b>, letadel.</li>
          <li><b>Astronomie:</b> rychlost hvězd a galaxií (rudý/modrý posuv ve spektru).</li>
          <li><b>Sonar:</b> rychlost a poloha objektů pod vodou.</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            <b>Přibližování → VYŠŠÍ frekvence</b> (kratší <M>{'\\lambda'}</M>), vzdalování → nižší.
            Vzpomeň na sanitku: když jede k tobě, je tón vyšší; jakmile přejede, klesne. (Pozor — v
            jednom z přepisů je u přibližování překlep „frekvence klesá"; správně <b>roste</b>.)
          </li>
          <li>
            Frekvence se mění při vzájemném pohybu zdroje <b>nebo</b> pozorovatele — <b>nezáleží</b>,
            který z nich se hýbe (klasicky se výsledky maličko liší, ale jev nastane v obou
            případech).
          </li>
          <li>
            Huygens: nová vlnoplocha je <b>obálka</b> elementárních vlnek, ne nějaký jejich součet
            do strany. Fresnelův <b>inklinační faktor</b> <M>{'K(\\theta)=\\tfrac12(1+\\cos\\theta)'}</M>{' '}
            zařídí, že jdou <b>dopředu</b>, ne dozadu.
          </li>
          <li>
            Ohyb (zvuk za roh) je <b>důsledek</b> Huygensova principu — umět ho uvést jako příklad.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vyslovit Huygensův princip: každý bod vlnoplochy je zdrojem elementárního vlnění, nová vlnoplocha = obal vlnek.',
          'Vědět, co doplnil Fresnel — inklinační faktor K(θ) = ½(1 + cos θ) (vlnka jde dopředu, ne dozadu).',
          'Uvést ohyb jako důsledek (zvuk je slyšet i za roh).',
          'Vysvětlit Dopplerův jev a říct, kdy frekvence roste a kdy klesá (sanitka).',
          'Vědět, že stačí vzájemný pohyb zdroje NEBO pozorovatele.',
          'Jmenovat využití ultrazvuku/Dopplera: medicína (rychlost krve), radar, astronomie.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Vyslov Huygensův princip a řekni, co k němu doplnil Fresnel.',
            a: (
              <>
                Každý bod vlnoplochy, kam vlnění dospělo, je <b>zdrojem elementárního vlnění</b>
                (malé kulové vlnky); novou vlnoplochu dostaneš jako <b>obálku (obal)</b> těchto vlnek.
                Fresnel doplnil <b>inklinační faktor</b>{' '}
                <M>{'K(\\theta)=\\tfrac12(1+\\cos\\theta)'}</M>, který zařídí, že se vlnky zesílí jen{' '}
                <b>dopředu</b> (dozadu se vyruší).
              </>
            ),
          },
          {
            q: 'Sanitka jede k tobě a pak tě mine. Co se děje s tónem (frekvencí) a proč?',
            a: (
              <>
                Když se <b>blíží</b>, vlnoplochy se vepředu nahustí (kratší <M>{'\\lambda'}</M>) →{' '}
                <b>vyšší frekvence</b>, vyšší tón. Když se <b>vzdaluje</b>, naředí se →{' '}
                <b>nižší frekvence</b>, nižší tón. Frekvence zdroje se přitom nemění, mění se jen to,
                jak hustě k tobě vlnoplochy dorazí.
              </>
            ),
          },
          {
            q: 'Musí se hýbat zrovna zdroj, aby Dopplerův jev nastal?',
            a: (
              <>
                Ne. Stačí <b>vzájemný pohyb</b> — jev nastane, ať se hýbe <b>zdroj, nebo
                pozorovatel</b> (nebo oba). Důležité je, že se vůči sobě přibližují/vzdalují.
              </>
            ),
          },
          {
            q: 'Uveď dva příklady praktického využití ultrazvuku / Dopplerova jevu.',
            a: (
              <>
                Např. <b>medicína</b> — měření rychlosti krve v cévách a ultrazvukové zobrazení
                orgánů/plodu; <b>radar</b> — měření rychlosti aut; <b>astronomie</b> — rychlost hvězd
                z posuvu spektrálních čar.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
