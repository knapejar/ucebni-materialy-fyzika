import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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
        Dvě klasické zkouškové otázky, které jdou ruku v ruce. <Term>Huygensův princip</Term> ti
        dá názorné vysvětlení, proč se vlnění ohýbá za roh (slyšíš za zeď). A <Term>Dopplerův
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
          dospělo, se sám stává zdrojem</b> malého <Term>elementárního vlnění</Term> — drobné
          kulové vlnky. <b>Novou vlnoplochu o chvíli později dostaneš jako obal (obálku) všech těchto
          elementárních vlnek.</b>
        </p>

        <StepFigure
          title="Konstrukce nové vlnoplochy podle Huygense"
          steps={[
            {
              label: 'původní vlnoplocha',
              caption: (
                <>
                  Máme zdroj (červeně) a kolem něj <Term>původní vlnoplochu</Term> (fialově) — všude
                  na ní má vlnění stejnou fázi.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 260" className="svg-fig">
                  <circle cx="120" cy="130" r="70" fill="none" stroke={ACC} strokeWidth="2.5" />
                  <circle cx="120" cy="130" r="5" fill={SRC} />
                  <text x="120" y="120" fill={SRC} fontSize="13" textAnchor="middle">zdroj</text>
                  <text x="120" y="225" fill={ACC} fontSize="13" textAnchor="middle">původní vlnoplocha</text>
                </svg>
              ),
            },
            {
              label: 'každý bod = zdroj',
              caption: (
                <>
                  Vybereme pár bodů na vlnoploše. <b>Každý z nich je nový elementární zdroj</b> a
                  vyšle vlastní malou kulovou vlnku (modře).
                </>
              ),
              content: (
                <svg viewBox="0 0 420 260" className="svg-fig">
                  <circle cx="120" cy="130" r="70" fill="none" stroke={ACC} strokeWidth="2.5" />
                  <circle cx="120" cy="130" r="5" fill={SRC} />
                  {/* body na pravé části vlnoplochy + jejich elementární vlnky */}
                  {[
                    [190, 130], [183, 95], [183, 165], [165, 65], [165, 195],
                  ].map(([cx, cy], k) => (
                    <g key={k}>
                      <circle cx={cx} cy={cy} r="3" fill={NEW} />
                      <circle cx={cx} cy={cy} r="30" fill="none" stroke={NEW} strokeWidth="1.3" opacity="0.85" />
                    </g>
                  ))}
                  <text x="250" y="240" fill={NEW} fontSize="13" textAnchor="middle">elementární vlnky</text>
                </svg>
              ),
            },
            {
              label: 'obal = nová vlnoplocha',
              caption: (
                <>
                  Vnější <b>obálka</b> všech těch vlnek (modrá oblouková čára) je <b>nová
                  vlnoplocha</b>. Vlnění tak postoupilo dál. Tohle je celý princip.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 260" className="svg-fig">
                  <circle cx="120" cy="130" r="70" fill="none" stroke={ACC} strokeWidth="2" opacity="0.6" />
                  <circle cx="120" cy="130" r="5" fill={SRC} />
                  {[
                    [190, 130], [183, 95], [183, 165], [165, 65], [165, 195],
                  ].map(([cx, cy], k) => (
                    <g key={k}>
                      <circle cx={cx} cy={cy} r="3" fill={NEW} opacity="0.7" />
                      <circle cx={cx} cy={cy} r="30" fill="none" stroke={NEW} strokeWidth="1" opacity="0.5" />
                    </g>
                  ))}
                  {/* nová vlnoplocha = obálka (poloměr 100) */}
                  <circle cx="120" cy="130" r="100" fill="none" stroke={NEW} strokeWidth="3" strokeDasharray="0" />
                  <text x="120" y="245" fill={NEW} fontSize="13" textAnchor="middle">nová vlnoplocha (obálka)</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Fresnelovo doplnění: inklinační faktor">
        <p>
          Huygensovi něco scházelo: kdyby každý bod vyzařoval kulově na <b>všechny</b> strany,
          vznikla by i vlna mířící <b>dozadu</b> (proti směru šíření), kterou v reálu nevidíme.
          Fresnel to dořešil: elementární vlnky se <b>interferencí</b> sečtou tak, že se zesílí
          jen na vnější obálce — jinde se vyruší. Zavedl <Term>inklinační faktor</Term>:
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
            <line x1="155" y1="95" x2="340" y2="95" stroke={ACC} strokeWidth="4" markerEnd="url(#kf)" />
            <text x="300" y="85" fill={ACC} fontSize="13">θ = 0, K = 1</text>
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
          Důležitý důsledek Huygensova principu je <Term>ohyb</Term> (difrakce): když vlna projde
          úzkou škvírou nebo mine roh, body na okraji se chovají jako nové zdroje a vyšlou vlnky{' '}
          <b>i do oblasti za překážkou</b>. Proto <b>slyšíš člověka i za rohem</b>, i když ho
          nevidíš. Stejně tak se ohýbají vlny na vodě kolem mola.
        </p>

        <Figure caption="Ohyb: vlnoplocha projde štěrbinou a za ní se roztáhne do stran (vlnky z okrajů míří i za stěnu), proto se zvuk dostane za roh.">
          <svg viewBox="0 0 420 200" className="svg-fig">
            {/* rovinné vlnoplochy zleva */}
            <g stroke={ACC} strokeWidth="2.5" fill="none">
              <line x1="30" y1="20" x2="30" y2="180" />
              <line x1="60" y1="20" x2="60" y2="180" />
              <line x1="90" y1="20" x2="90" y2="180" />
            </g>
            <text x="55" y="195" fill={ACC} fontSize="12" textAnchor="middle">rovinná vlna</text>
            {/* stěna se štěrbinou */}
            <rect x="150" y="20" width="10" height="75" fill={MUTED} />
            <rect x="150" y="115" width="10" height="65" fill={MUTED} />
            <text x="200" y="15" fill={MUTED} fontSize="12">štěrbina</text>
            {/* za štěrbinou: půlkruhové vlnoplochy */}
            <g stroke={NEW} strokeWidth="2" fill="none">
              <path d="M155,105 m-0,0 a40,40 0 0 1 80,0 a40,40 0 0 1 -80,0" opacity="0" />
              <circle cx="155" cy="105" r="35" />
              <circle cx="155" cy="105" r="60" />
              <circle cx="155" cy="105" r="85" />
            </g>
            <text x="300" y="105" fill={NEW} fontSize="13">vlna se ohýbá za stěnu</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Dopplerův jev: pohyb mění frekvenci">
        <p>
          Jádro celé otázky v jedné větě: <b>pohybují-li se vůči sobě zdroj a pozorovatel,
          zaregistruje pozorovatel jinou frekvenci, než je frekvence zdroje.</b> Frekvence{' '}
          <M>{'f_0'}</M> se nemění u zdroje — mění se to, <b>jak hustě k tobě vlnoplochy dorazí</b>.
        </p>

        <StepFigure
          title="Sanitka: proč se mění tón"
          steps={[
            {
              label: 'zdroj stojí',
              caption: (
                <>
                  Stojící zdroj vysílá vlnoplochy <b>pravidelně do všech stran</b> — vzdálenost mezi
                  nimi (vlnová délka <M>{'\\lambda'}</M>) je všude stejná. Vlevo i vpravo slyšíš{' '}
                  <b>stejný tón</b> <M>{'f_0'}</M>.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <g fill="none" stroke={ACC} strokeWidth="2">
                    {[25, 55, 85, 115].map((r) => <circle key={r} cx="210" cy="110" r={r} />)}
                  </g>
                  <circle cx="210" cy="110" r="6" fill={SRC} />
                  <text x="210" y="205" fill={MUTED} fontSize="13" textAnchor="middle">zdroj v klidu — λ všude stejná</text>
                </svg>
              ),
            },
            {
              label: 'zdroj se hýbe',
              caption: (
                <>
                  Zdroj jede <b>doprava</b>. Každou novou vlnoplochu vyšle už z trochu jiného místa,
                  takže se <b>vlnoplochy vepředu nahustí</b> (kratší <M>{'\\lambda'}</M>) a{' '}
                  <b>vzadu naředí</b> (delší <M>{'\\lambda'}</M>).
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <defs><Arrow id="dv" color={SRC} /></defs>
                  {/* nahuštěné vlnoplochy vpředu (vpravo), naředěné vzadu (vlevo) - posunuté středy */}
                  <g fill="none" strokeWidth="2">
                    <circle cx="160" cy="110" r="115" stroke={LOW} />
                    <circle cx="175" cy="110" r="85" stroke={LOW} />
                    <circle cx="190" cy="110" r="55" stroke={ACC} />
                    <circle cx="205" cy="110" r="25" stroke={HIGH} />
                  </g>
                  <circle cx="218" cy="110" r="6" fill={SRC} />
                  <line x1="226" y1="110" x2="270" y2="110" stroke={SRC} strokeWidth="3" markerEnd="url(#dv)" />
                  <text x="300" y="60" fill={HIGH} fontSize="12" textAnchor="middle">vepředu nahuštěno</text>
                  <text x="90" y="60" fill={LOW} fontSize="12" textAnchor="middle">vzadu naředěno</text>
                </svg>
              ),
            },
            {
              label: 'co slyšíš',
              caption: (
                <>
                  <b>Před</b> sanitkou (blíží se k tobě) jsou vlnoplochy hustší →{' '}
                  <b>vyšší frekvence</b>, vyšší tón.{' '}
                  <b>Za</b> sanitkou (vzdaluje se) jsou řidší → <b>nižší frekvence</b>, nižší tón.
                  Proto ten „íííííjóóóóu" při projetí kolem.
                </>
              ),
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <defs><Arrow id="dv2" color={SRC} /></defs>
                  <g fill="none" strokeWidth="2">
                    <circle cx="160" cy="110" r="115" stroke={LOW} />
                    <circle cx="175" cy="110" r="85" stroke={LOW} />
                    <circle cx="190" cy="110" r="55" stroke={ACC} />
                    <circle cx="205" cy="110" r="25" stroke={HIGH} />
                  </g>
                  <circle cx="218" cy="110" r="6" fill={SRC} />
                  <line x1="226" y1="110" x2="265" y2="110" stroke={SRC} strokeWidth="3" markerEnd="url(#dv2)" />
                  {/* pozorovatel vepředu */}
                  <text x="360" y="105" fontSize="20" textAnchor="middle">🧍</text>
                  <text x="360" y="135" fill={HIGH} fontSize="12" textAnchor="middle">vyšší tón</text>
                  {/* pozorovatel vzadu */}
                  <text x="55" y="105" fontSize="20" textAnchor="middle">🧍</text>
                  <text x="55" y="135" fill={LOW} fontSize="12" textAnchor="middle">nižší tón</text>
                </svg>
              ),
            },
          ]}
        />

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
          Dopplerův jev a odraz vln se prakticky využívají k <b>měření rychlostí</b> — vyšlu vlnu,
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
