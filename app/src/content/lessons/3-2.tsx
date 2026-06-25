import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.2'

/* Pojmy, které tahle lekce poprvé vykládá (pro pozdější wiki-proklik). */
export const provides = {
  'tlumene-kmity': { lesson: '3.2', label: 'tlumené kmity', short: 'Amplituda klesá kvůli ztrátám energie: u = A₀·e^(−γt)·cos(ωt+φ).' },
  'vynucene-kmity': { lesson: '3.2', label: 'vynucené kmity', short: 'Ztráty doháníme vnější periodickou silou; soustava pak kmitá její frekvencí.' },
  'rezonance': { lesson: '3.2', label: 'rezonance', short: 'Vnější frekvence = vlastní frekvence → maximální amplituda.' },
  'vazane-oscilatory': { lesson: '3.2', label: 'vázané oscilátory', short: 'Oscilátory spojené vazbou si vyměňují energii; síla závisí na rozdílu výchylek.' },
}

const AX = '#5b647e'        // osy
const ACC = '#a78bfa'       // akcent tématu (fialová)
const ENV = '#f59e0b'       // obálka / amplituda
const FORCE = '#fb7185'     // síla
const TXT = '#e8ecf8'       // text / světlé tahy
const SPRING = '#9aa6c4'    // pružina
const CEIL = '#3a4566'      // strop / podpora

/* Šipky pro SVG. */
function Defs() {
  return (
    <defs>
      <marker id="ar32" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={ACC} />
      </marker>
      <marker id="ar32f" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={FORCE} />
      </marker>
    </defs>
  )
}

/* Závaží na pružině zavěšené ze stropu (x = pozice závěsu, dy = výchylka dolů). */
function SpringBob({ x, dy, color = ACC }: { x: number; dy: number; color?: string }) {
  const top = 22
  const len = 70 + dy
  const coils = 6
  let d = `M${x},${top}`
  for (let k = 0; k < coils; k++) {
    const y0 = top + (len * k) / coils
    const y1 = top + (len * (k + 0.5)) / coils
    const y2 = top + (len * (k + 1)) / coils
    d += ` L${x - 9},${y0 + (y1 - y0) / 2} L${x + 9},${y1 + (y2 - y1) / 2} L${x},${y2}`
  }
  const cy = top + len + 12
  return (
    <g>
      <line x1={x - 22} y1={top} x2={x + 22} y2={top} stroke={CEIL} strokeWidth="5" />
      <path d={d} fill="none" stroke={SPRING} strokeWidth="2" />
      <circle cx={x} cy={cy} r="13" fill={color} />
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        V realitě žádné kmitání nevydrží věčně — tření a odpor ho ubrzdí. Tahle lekce ti dá tři věci,
        které zkoušející chce slyšet: jak vypadají <Term>tlumené</Term> a <Term>vynucené</Term> kmity,
        co je <Term>rezonance</Term> (a kde se využívá) a jeden chyták o síle u{' '}
        <Term>vázaných oscilátorů</Term>. Nic z toho není těžké, když víš, na co si dát pozor.
      </p>

      <Section title="Tlumené kmity — kmitání, které samo dojede">
        <p>
          Ideální oscilátor z minulé lekce by kmital pořád stejně. V realitě se ale část energie
          pořád ztrácí — třením, odporem vzduchu, odporem prostředí. Proto{' '}
          <Term>amplituda</Term> (rozkmit) postupně klesá, až kmitání ustane. Klasická představa:
          dítě na houpačce, které nikdo nehoupe — za chvíli se zastaví.
        </p>
        <p>
          To popisuje rovnice <Term>tlumených kmitů</Term> — je to obyčejný kosinus, ale s amplitudou,
          která exponenciálně padá k nule:
        </p>
        <MB>{'u(t) = A_0\\,e^{-\\gamma t}\\,\\cos(\\omega t + \\varphi)'}</MB>
        <ul>
          <li><M>{'A_0'}</M> — počáteční amplituda (jak velký byl první rozkmit),</li>
          <li><M>{'e^{-\\gamma t}'}</M> — „obálka", která rozkmit dusí; <M>{'\\gamma'}</M> je{' '}
            <Term>součinitel útlumu</Term> (čím větší, tím rychleji dozní),</li>
          <li><M>{'\\cos(\\omega t + \\varphi)'}</M> — samotné kmitání s úhlovou frekvencí{' '}
            <M>{'\\omega'}</M> a počáteční fází <M>{'\\varphi'}</M>.</li>
        </ul>

        <Figure caption="Tlumené kmity: kosinus, jehož amplitudu shora i zdola obepíná klesající křivka A₀·e^(−γt) (oranžová obálka).">
          <svg viewBox="0 0 460 200" className="svg-fig">
            <Defs />
            {/* osy */}
            <line x1="30" y1="100" x2="445" y2="100" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
            <line x1="40" y1="20" x2="40" y2="185" stroke={AX} strokeWidth="1.5" />
            <text x="450" y="96" fill={TXT} fontSize="13" fontStyle="italic">t</text>
            <text x="26" y="26" fill={TXT} fontSize="13" fontStyle="italic">u</text>
            {/* obalka +A0 e^-gt a -A0 e^-gt */}
            <path d="M40,32 C140,55 250,78 440,92" fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" />
            <path d="M40,168 C140,145 250,122 440,108" fill="none" stroke={ENV} strokeWidth="2" strokeDasharray="5,4" />
            {/* tlumena sinusovka */}
            <path
              d="M40,100 C52,100 56,34 70,34 C84,34 90,164 104,164 C116,164 122,44 136,44
                 C150,44 156,154 170,154 C182,154 188,54 202,54 C214,54 220,145 234,145
                 C246,145 252,62 266,62 C278,62 284,138 298,138 C310,138 316,70 330,70
                 C342,70 348,131 362,131 C374,131 380,77 394,77 C406,77 412,124 426,124 C434,124 438,90 444,93"
              fill="none" stroke={ACC} strokeWidth="2.5" />
            <text x="300" y="48" fill={ENV} fontSize="13">A₀·e^(−γt)</text>
          </svg>
        </Figure>
        <Callout kind="info">
          Pozor na slovíčka: energie se „neztrácí" ve smyslu porušení zákona zachování — mění se v{' '}
          teplo (práce proti odporu prostředí). Mechanické energie kmitání ale opravdu ubývá.
        </Callout>
      </Section>

      <Section title="Vynucené kmity — když ztráty doháníme silou">
        <p>
          Když chceme, aby kmitání nedoznělo, musíme ztracenou energii pořád dodávat. Děláme to{' '}
          <Term>periodickou vnější silou</Term> — přesně jako dospělý, který houpačku pravidelně
          postrkuje. Takovému kmitání říkáme <Term>vynucené kmity</Term>.
        </p>
        <p>
          Na začátku se děje něco zajímavého: vlastní (tlumené) kmitání oscilátoru se{' '}
          <b>skládá</b> s kmitáním od vnější síly — vzniká přechodový děj, kdy rozkmit narůstá z nuly.
          Jakmile vlastní kmit dozní, soustava se ustálí a kmitá <b>frekvencí vnější síly</b>, ne svou.
        </p>

        <StepFigure
          title="Jak vzniknou vynucené kmity"
          steps={[
            {
              label: 'tlumený vlastní kmit',
              caption: <>Samotný oscilátor by jen doznil — amplituda klesá k nule (jako v předchozí sekci).</>,
              content: (
                <svg viewBox="0 0 460 180" className="svg-fig">
                  <Defs />
                  <line x1="30" y1="90" x2="445" y2="90" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
                  <line x1="40" y1="20" x2="40" y2="165" stroke={AX} strokeWidth="1.5" />
                  <text x="450" y="86" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  <path
                    d="M40,90 C52,90 56,32 70,32 C84,32 90,148 104,148 C116,148 122,46 136,46
                       C150,46 156,134 170,134 C182,134 188,56 202,56 C214,56 220,124 234,124
                       C246,124 252,66 266,66 C278,66 284,114 298,114 C310,114 316,72 330,72
                       C342,72 348,108 362,108 C374,108 380,78 394,78 C406,78 412,102 426,102 C434,102 438,88 444,90"
                    fill="none" stroke={ACC} strokeWidth="2.5" />
                  <text x="250" y="34" fill={ACC} fontSize="13">vlastní kmit dozní</text>
                </svg>
              ),
            },
            {
              label: 'přidáme vnější sílu',
              caption: <>Periodická síla <M>{'F = F_0\\cos(\\omega t)'}</M> pořád dodává energii. Rozkmit nejdřív narůstá z nuly (přechodový děj).</>,
              content: (
                <svg viewBox="0 0 460 180" className="svg-fig">
                  <Defs />
                  <line x1="30" y1="90" x2="445" y2="90" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
                  <line x1="40" y1="20" x2="40" y2="165" stroke={AX} strokeWidth="1.5" />
                  <text x="450" y="86" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  {/* narustajici obalka */}
                  <path d="M40,90 C120,80 200,52 300,48 L440,48" fill="none" stroke={ENV} strokeWidth="1.8" strokeDasharray="5,4" />
                  <path d="M40,90 C120,100 200,128 300,132 L440,132" fill="none" stroke={ENV} strokeWidth="1.8" strokeDasharray="5,4" />
                  <path
                    d="M40,90 C50,90 54,82 64,82 C74,82 80,100 90,100 C100,100 106,76 116,76
                       C126,76 132,108 142,108 C152,108 158,68 168,68 C178,68 184,116 194,116
                       C204,116 210,60 220,60 C230,60 236,122 246,122 C256,122 262,54 272,54
                       C282,54 288,126 298,126 C308,126 314,50 324,50 C334,50 340,130 350,130
                       C360,130 366,50 376,50 C386,50 392,130 402,130 C412,130 418,50 428,50 C434,50 440,90 444,90"
                    fill="none" stroke={ACC} strokeWidth="2.5" />
                  <text x="180" y="40" fill={ENV} fontSize="13">amplituda narůstá</text>
                </svg>
              ),
            },
            {
              label: 'ustálené kmitání',
              caption: <>Po odeznění přechodu kmitá soustava <b>stálou amplitudou a frekvencí vnější síly</b>. To je „provozní stav" vynucených kmitů.</>,
              content: (
                <svg viewBox="0 0 460 180" className="svg-fig">
                  <Defs />
                  <line x1="30" y1="90" x2="445" y2="90" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
                  <line x1="40" y1="20" x2="40" y2="165" stroke={AX} strokeWidth="1.5" />
                  <text x="450" y="86" fill={TXT} fontSize="13" fontStyle="italic">t</text>
                  <line x1="40" y1="50" x2="440" y2="50" stroke={ENV} strokeWidth="1.6" strokeDasharray="5,4" />
                  <line x1="40" y1="130" x2="440" y2="130" stroke={ENV} strokeWidth="1.6" strokeDasharray="5,4" />
                  <path
                    d="M40,90 C50,90 56,50 66,50 C76,50 82,130 92,130 C102,130 108,50 118,50
                       C128,50 134,130 144,130 C154,130 160,50 170,50 C180,50 186,130 196,130
                       C206,130 212,50 222,50 C232,50 238,130 248,130 C258,130 264,50 274,50
                       C284,50 290,130 300,130 C310,130 316,50 326,50 C336,50 342,130 352,130
                       C362,130 368,50 378,50 C388,50 394,130 404,130 C414,130 420,50 430,50 C436,50 440,90 444,90"
                    fill="none" stroke={ACC} strokeWidth="2.5" />
                  <text x="170" y="42" fill={ENV} fontSize="13">stálá amplituda</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Rezonance — trefit se do vlastní frekvence">
        <p>
          Teď to nejdůležitější. Ustálená amplituda vynucených kmitů závisí na tom, jakou frekvenci
          má vnější síla. A je <b>největší</b> v jediném případě:
        </p>
        <Callout kind="tip" title="Definice na jednu větu">
          <b>Rezonance</b> nastane, když se frekvence vnější síly rovná <b>vlastní frekvenci</b>{' '}
          oscilátoru: <M>{'\\omega_{\\text{vnější}} = \\omega_0'}</M>. Tehdy je amplituda maximální.
        </Callout>
        <p>
          Představ si houpačku: postrkuješ ji ve správný okamžik každého kývnutí (ve „svém" rytmu) —
          rozhoupeš ji obrovsky s minimální námahou. Trefíš-li se vedle rytmu, skoro se nic nestane.
        </p>

        <Figure caption="Rezonanční křivka: amplituda vynucených kmitů v závislosti na frekvenci vnější síly. Vrchol je přesně u vlastní frekvence ω₀.">
          <svg viewBox="0 0 440 200" className="svg-fig">
            <Defs />
            <line x1="40" y1="170" x2="425" y2="170" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
            <line x1="40" y1="20" x2="40" y2="175" stroke={AX} strokeWidth="1.5" markerEnd="url(#ar32)" />
            <text x="428" y="174" fill={TXT} fontSize="13" fontStyle="italic">ω</text>
            <text x="22" y="26" fill={TXT} fontSize="13">A</text>
            {/* rezonancni krivka s vrcholem u w0 = x 230 */}
            <path d="M48,162 C140,156 195,150 220,40 C232,30 248,30 260,40 C285,150 340,158 420,164"
              fill="none" stroke={ACC} strokeWidth="3" />
            {/* svisla cara u w0 */}
            <line x1="240" y1="40" x2="240" y2="170" stroke={FORCE} strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="240" y="188" fill={FORCE} fontSize="13" textAnchor="middle">ω₀ (vlastní)</text>
            <text x="270" y="40" fill={ACC} fontSize="13">max. amplituda</text>
          </svg>
        </Figure>

        <p><b>Kde se rezonance využívá (tohle zkoušející rád slyší):</b></p>
        <ul>
          <li><b>Magnetická rezonance (MRI)</b> — zobrazování v medicíně využívá rezonanci jader.</li>
          <li><b>Kytara a hudební nástroje</b> — duté tělo (rezonanční skříň) zesílí tón, je hlasitější.</li>
          <li><b>Urychlovače částic</b> — částice se „dorážejí" v rytmu pole, čímž zrychlují.</li>
          <li><b>Ultrazvuk</b> — čištění brýlí, diagnostika; <b>ochrana staveb</b> — naopak se rezonanci vyhýbáme, aby se konstrukce nerozkmitala.</li>
        </ul>
      </Section>

      <Section title="Izolovaný × vázaný oscilátor — kde sídlí chyták">
        <p>
          <Term>Izolovaný oscilátor</Term> je sám pro sebe — třeba jedno závaží na pružině. Vratná síla,
          která ho táhne zpět do rovnováhy, závisí jen na <b>jeho vlastní výchylce</b>:
        </p>
        <MB>{'F = -k\\,u'}</MB>
        <p>
          <Term>Vázané oscilátory</Term> jsou dva (nebo víc) oscilátorů spojené pružnou vazbou — třeba
          dvě kyvadla propojená pružinou. Vazba jim umožní si <b>vyměňovat energii</b>. A tady je ten
          rozdíl, který se ptá: prostřední pružina je natažená/stlačená podle toho, <b>jak daleko jsou
          od sebe</b> — tedy podle <b>rozdílu výchylek</b> obou sousedů, ne podle výchylky jednoho.
        </p>
        <MB>{'F_{\\text{vazba}} \\sim (u_2 - u_1)'}</MB>

        <Figure caption="Dva oscilátory spojené pružinou. Síla z vazby závisí na rozdílu výchylek u₂ − u₁ — když se vychýlí stejně (vlevo), vazba je v klidu; když proti sobě (vpravo), vazba je nejvíc napjatá.">
          <svg viewBox="0 0 460 210" className="svg-fig">
            <Defs />
            {/* leva dvojice - stejna faze */}
            <SpringBob x={70} dy={28} />
            <SpringBob x={150} dy={28} />
            <line x1="70" y1="120" x2="70" y2="150" stroke={ACC} strokeWidth="3" markerEnd="url(#ar32)" />
            <line x1="150" y1="120" x2="150" y2="150" stroke={ACC} strokeWidth="3" markerEnd="url(#ar32)" />
            <text x="110" y="185" fill={TXT} fontSize="13" textAnchor="middle">stejná fáze</text>
            <text x="110" y="201" fill={ENV} fontSize="12" textAnchor="middle">u₂ − u₁ = 0 → vazba v klidu</text>

            {/* prava dvojice - opacna faze */}
            <SpringBob x={320} dy={34} />
            <SpringBob x={400} dy={6} />
            <line x1="320" y1="126" x2="320" y2="156" stroke={FORCE} strokeWidth="3" markerEnd="url(#ar32f)" />
            <line x1="400" y1="98" x2="400" y2="72" stroke={FORCE} strokeWidth="3" markerEnd="url(#ar32f)" />
            <text x="360" y="185" fill={TXT} fontSize="13" textAnchor="middle">opačná fáze</text>
            <text x="360" y="201" fill={FORCE} fontSize="12" textAnchor="middle">u₂ − u₁ velké → vazba napjatá</text>
          </svg>
        </Figure>

        <p>Dva typické režimy vázaných oscilátorů, které se ptají:</p>
        <ul>
          <li><b>Stejná fáze</b> — oba se vychýlí stejným směrem, vazba mezi nimi se „nepozná" a kmitají jako jeden celek.</li>
          <li><b>Opačná fáze</b> — jdou proti sobě, vazba je maximálně napjatá; přidá vratnou sílu, takže perioda se zkrátí (kmitají rychleji).</li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se nejvíc ztrácejí body)">
        <ul>
          <li>
            <b>Izolovaný × vázaný:</b> u <b>izolovaného</b> oscilátoru závisí síla na výchylce{' '}
            <b>toho daného</b> oscilátoru (<M>{'F = -k\\,u'}</M>); u <b>vázaných</b> na{' '}
            <b>rozdílu výchylek sousedů</b> (<M>{'F \\sim u_2 - u_1'}</M>). Tohle si splést je klasika.
          </li>
          <li>
            <b>Rezonance = vnější frekvence = vlastní frekvence.</b> Ne „nějaká velká frekvence" —
            přesně shoda <M>{'\\omega_{\\text{vnější}} = \\omega_0'}</M>.
          </li>
          <li>
            <b>Tlumené × vynucené</b> nezaměň: tlumené samo doznívá (ztráty), vynucené naopak
            ztráty dohání vnější silou a po ustálení kmitá frekvencí <b>té síly</b>, ne svou.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Rozlišit tlumené a vynucené kmity (a říct proč amplituda klesá / čím se dohání).',
          'Napsat rovnici tlumených kmitů u(t) = A₀·e^(−γt)·cos(ωt+φ) a popsat členy.',
          'Definovat rezonanci (ω_vnější = ω₀) a uvést příklad využití (MRI, kytara, urychlovače).',
          'Vysvětlit rozdíl síly u izolovaného (na výchylce) × vázaného (na rozdílu výchylek) oscilátoru.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jaký je rozdíl mezi tlumenými a vynucenými kmity?',
            a: <>U <b>tlumených</b> se energie ztrácí (odporem prostředí), takže amplituda klesá podle{' '}
              <M>{'A_0 e^{-\\gamma t}'}</M> a kmitání samo dozní. U <b>vynucených</b> ztráty průběžně
              doháníme <b>vnější periodickou silou</b>; po ustálení soustava kmitá frekvencí té síly.</>,
          },
          {
            q: 'Kdy nastává rezonance a k čemu se využívá?',
            a: <>Když se <b>frekvence vnější síly rovná vlastní frekvenci</b> oscilátoru{' '}
              (<M>{'\\omega_{\\text{vnější}} = \\omega_0'}</M>) — tehdy je amplituda maximální. Využití:
              magnetická rezonance (MRI), rezonanční skříň kytary (hlasitější tón), urychlovače částic,
              ultrazvuk. U staveb se jí naopak vyhýbáme.</>,
          },
          {
            q: 'Na čem závisí síla u izolovaného a na čem u vázaného oscilátoru?',
            a: <>U <b>izolovaného</b> na výchylce <b>daného</b> oscilátoru: <M>{'F = -k\\,u'}</M>.
              U <b>vázaného</b> na <b>rozdílu výchylek sousedů</b>: <M>{'F \\sim (u_2 - u_1)'}</M> —
              vazební pružina reaguje na to, jak daleko jsou oscilátory od sebe.</>,
          },
          {
            q: 'Jak se chovají dva vázané oscilátory ve stejné a v opačné fázi?',
            a: <>Ve <b>stejné fázi</b> kmitají jako jeden celek — vazba mezi nimi je v klidu (rozdíl
              výchylek je nulový). V <b>opačné fázi</b> jdou proti sobě, vazba je maximálně napjatá,
              přidá vratnou sílu a <b>perioda se zkrátí</b> (kmitají rychleji).</>,
          },
        ]}
      />
    </>
  )
}
