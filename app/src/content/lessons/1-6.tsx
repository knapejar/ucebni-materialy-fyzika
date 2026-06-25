import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.6'

/* Pojmy, které tato lekce poprvé vykládá — pozdější „linker" je nalinkuje jako <Concept>. */
export const provides = {
  'naklonena-rovina': {
    lesson: '1.6',
    label: 'nakloněná rovina',
    short: 'Těleso jede dolů pohybovou složkou tíhy; zrychlení a = g·sin α (kvádr), nezávisí na hmotnosti.',
  },
  'mezni-rychlost': {
    lesson: '1.6',
    label: 'mezní rychlost',
    short: 'Maximální rychlost při pádu s odporem vzduchu — odpor vyrovná tíhu, zrychlení = 0.',
  },
  'okamzita-rychlost': {
    lesson: '1.6',
    label: 'okamžitá rychlost',
    short: 'Limita průměrné rychlosti pro Δt → 0 (rychlost „teď", to co ukazuje tachometr).',
  },
}

/* Barvy pro SVG (světlé tahy na tmavém pozadí appky). */
const TXT = '#e8ecf8'
const ACC = '#f59e0b' // akcent tématu (pohyb / pohybová síla)
const PLANE = '#9aa6c4'
const GRAV = '#fb7185' // tíhová síla
const NORM = '#38bdf8' // síla roviny / normálová
const MUTED = '#7a86a8'

/* Šipka pro SVG (marker). markerUnits="userSpaceOnUse" → hrot má pevnou
   velikost nezávisle na tloušťce čáry (jinak se u silných tahů nafoukne).
   Kvůli více barvám dáme každé barvě vlastní id. */
function Arrow({ id, color }: { id: string; color: string }) {
  return (
    <marker id={id} markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="8" refY="5.5" orient="auto">
      <path d="M0,0 L11,5.5 L0,11 z" fill={color} />
    </marker>
  )
}

export default function Lesson_1_6() {
  return (
    <>
      <p className="lead">
        Tahle lekce spojuje tři oblíbené zkouškové otázky: <Term id="naklonena-rovina">nakloněnou rovinu</Term>,{' '}
        <Term>odpor vzduchu</Term> a rozdíl <Term>průměrné a okamžité rychlosti</Term>. Nic
        těžkého — stačí pár vzorečků a hlavně si pohlídat dva chytáky, na kterých se ztrácejí body.
      </p>

      <Section title="Nakloněná rovina: proč těleso jede dolů">
        <p>
          Polož kvádr na šikmou plochu (úhel <M>{'\\alpha'}</M> s vodorovnou rovinou). Působí na něj{' '}
          <b style={{ color: GRAV }}>tíhová síla</b> <M>{'\\vec F_G = m\\vec g'}</M> svisle dolů a{' '}
          <b style={{ color: NORM }}>síla roviny</b> <M>{'\\vec F_R'}</M> kolmo k ploše (podložka
          „tlačí zpět"). Když sečteš tyhle dvě síly, nevyjde nula — zbude{' '}
          <b style={{ color: ACC }}>pohybová síla</b> <M>{'\\vec F_p'}</M>, která míří{' '}
          <b>rovnoběžně se svahem dolů</b>. A ta těleso rozjede.
        </p>
        <MB>{'\\vec F_p = \\vec F_G + \\vec F_R'}</MB>

        <Figure caption="Rozklad sil na kvádru: tíha FG (svisle dolů, růžová), síla roviny FR (kolmo k ploše, modrá) a jejich výslednice — pohybová síla Fp (po svahu dolů, oranžová).">
          <svg viewBox="0 0 380 240" className="svg-fig">
            <defs>
              <Arrow id="aAcc" color={ACC} />
              <Arrow id="aGrav" color={GRAV} />
              <Arrow id="aNorm" color={NORM} />
            </defs>
            {/* vodorovná zem */}
            <line x1="30" y1="200" x2="360" y2="200" stroke={MUTED} strokeWidth="2" />
            {/* nakloněná rovina (trojúhelník) */}
            <path d="M40,200 L340,200 L340,60 Z" fill="none" stroke={PLANE} strokeWidth="2.5" />
            {/* úhel alfa u paty */}
            <path d="M95,200 A55,55 0 0,0 78,182" fill="none" stroke={TXT} strokeWidth="1.4" />
            <text x="103" y="193" fill={TXT} fontSize="15" fontStyle="italic">α</text>
            {/* kvádr na svahu (natočený) */}
            <g transform="translate(208,128) rotate(-25)">
              <rect x="-22" y="-14" width="44" height="28" rx="3" fill={PLANE} opacity="0.55" />
            </g>
            {/* působiště */}
            <circle cx="208" cy="128" r="3.5" fill={TXT} />
            {/* F_G svisle dolů */}
            <line x1="208" y1="128" x2="208" y2="206" stroke={GRAV} strokeWidth="3.5" markerEnd="url(#aGrav)" />
            <text x="214" y="180" fill={GRAV} fontSize="15" fontWeight="700">F_G</text>
            {/* F_R kolmo k rovině (vlevo nahoru) */}
            <line x1="208" y1="128" x2="170" y2="48" stroke={NORM} strokeWidth="3.5" markerEnd="url(#aNorm)" />
            <text x="140" y="48" fill={NORM} fontSize="15" fontWeight="700">F_R</text>
            {/* F_p po svahu dolů (vlevo dolů) */}
            <line x1="208" y1="128" x2="132" y2="171" stroke={ACC} strokeWidth="4" markerEnd="url(#aAcc)" />
            <text x="92" y="178" fill={ACC} fontSize="15" fontWeight="700">F_p</text>
          </svg>
        </Figure>

        <p>
          Z 2. <Concept id="newtonovy-zakony">Newtonova zákona</Concept> (<M>{'F_p = m a'}</M>) a z geometrie rozkladu vyjde u kvádru pěkně
          jednoduchý vzorec pro zrychlení:
        </p>
        <MB>{'a = g\\,\\sin\\alpha'}</MB>
        <p>
          Všimni si, že <b>hmotnost se vykrátila</b>. Zrychlení kvádru na nakloněné rovině{' '}
          <b>nezávisí na hmotnosti</b>, jen na úhlu <M>{'\\alpha'}</M>. Čím strmější svah, tím větší{' '}
          <M>{'\\sin\\alpha'}</M> a tím rychleji jede.
        </p>

        <Callout kind="info" title="Kvádr × válec — kde je rozdíl">
          <ul>
            <li>
              <b>Kvádr</b> se jen <Term>posouvá</Term> (translace). Pokud zanedbáme tření:{' '}
              <M>{'a = g\\sin\\alpha'}</M>.
            </li>
            <li>
              <b>Válec</b> se kromě posouvání ještě <Term>otáčí</Term> (rotace, vzniká třením o
              podložku). Část energie jde do roztočení, takže válec zrychluje pomaleji:{' '}
              <M>{'a = \\tfrac{2}{3}\\,g\\sin\\alpha'}</M>.
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Odpor vzduchu: padají všechna tělesa stejně?">
        <p>
          <b>Bez odporu vzduchu</b> je to jednoduché. <Concept id="pohybova-rovnice">Pohybová rovnice</Concept> pádu je{' '}
          <M>{'\\vec F_G = m\\vec g = m\\dfrac{\\mathrm d\\vec v}{\\mathrm dt}'}</M>, takže po vykrácení
          hmotnosti zbude <M>{'\\vec g = \\dfrac{\\mathrm d\\vec v}{\\mathrm dt}'}</M>. Hmotnost zmizela,
          a proto <b>všechna tělesa padají stejně</b> — se stejným zrychlením, ze stejné výšky
          dopadnou stejnou rychlostí a za stejnou dobu (klasické pírko a kladivo ve vakuu na Měsíci).
        </p>
        <p>
          <b>S odporem vzduchu</b> je to jinak. Vzduch tlačí proti pohybu silou{' '}
          <M>{'\\vec F_o'}</M>, která <b>roste s rychlostí</b> (a s plochou, kterou těleso „nabírá"
          vzduch). Pohybová rovnice teď má dva členy:
        </p>
        <MB>{'\\vec F_c = \\vec F_G + \\vec F_o = m\\vec g - kS\\vec v = m\\vec a'}</MB>

        <p>
          Na začátku je rychlost malá, odpor skoro žádný, takže těleso normálně zrychluje. Jak
          zrychluje, odpor roste — až se v jednu chvíli odpor <b>vyrovná tíze</b>. Výslednice je pak
          nula, zrychlení je nula a těleso dál padá <b>konstantní rychlostí</b>. Té říkáme{' '}
          <Term id="mezni-rychlost">mezní (maximální) rychlost</Term>:
        </p>
        <MB>{'v_{\\max} = \\dfrac{mg}{kS}'}</MB>

        <StepScene
          title="Jak vzniká mezní rychlost"
          viewBox="0 0 360 240"
          captions={[
            <>
              Na začátku je rychlost malá → odpor <M>{'F_o'}</M> skoro nulový. Vyhrává tíha,
              těleso zrychluje (skoro jako volný pád).
            </>,
            <>
              Čím rychleji padá, tím větší je odpor <M>{'F_o = kSv'}</M>. Výslednice (a tedy i
              zrychlení) se zmenšuje — těleso zrychluje pořád pomaleji.
            </>,
            <>
              Odpor se vyrovná tíze: <M>{'F_o = F_G'}</M>. Výslednice = 0 → zrychlení = 0.
              Těleso dál padá <b>konstantní</b> mezní rychlostí <M>{'v_{\\max} = mg/(kS)'}</M>.
            </>,
          ]}
        >
          <defs>
            <Arrow id="bGrav" color={GRAV} />
            <Arrow id="bNorm" color={NORM} />
          </defs>

          {/* kulička padá dolů (cy roste) a v posledním kroku zezlátne (mezní rychlost) */}
          <ACircle cx={120} cy={[58, 92, 128]} r={15} fill={[PLANE, PLANE, ACC]} opacity={[0.6, 0.6, 0.9]} />

          {/* F_G (tíha) — svisle dolů, konstantní délka, jede s kuličkou */}
          <ALine x1={120} y1={[73, 107, 143]} x2={120} y2={[150, 184, 220]} stroke={GRAV} strokeWidth={4} markerEnd="url(#bGrav)" />
          <AText x={138} y={[120, 154, 190]} fill={GRAV} fontSize="15" fontWeight="700">F_G</AText>

          {/* F_o (odpor) — svisle nahoru, roste od skoro nuly po délku tíhy */}
          <ALine x1={120} y1={[43, 77, 113]} x2={120} y2={[30, 24, 35]} stroke={NORM} strokeWidth={[3, 4, 4]} markerEnd="url(#bNorm)" />
          <AText x={138} y={[40, 48, 70]} fill={NORM} fontSize="14" fontWeight="700" opacity={[0, 1, 1]}>F_o</AText>
          <AText x={138} y={40} fill={NORM} fontSize="14" fontWeight="700" opacity={[1, 0, 0]}>F_o ≈ 0</AText>

          {/* stavový popisek dole */}
          <AText x={120} y={236} fill={ACC} fontSize="15" textAnchor="middle" fontWeight="700" opacity={[1, 1, 0]}>zrychluje ↓</AText>
          <AText x={120} y={236} fill={TXT} fontSize="15" textAnchor="middle" fontWeight="700" opacity={[0, 0, 1]}>v = konst. (a = 0)</AText>
        </StepScene>

        <p>
          Praktický důsledek: <b>těžší těleso „přepere" odpor snáz</b>. Pustíš-li z okna cihlu a
          plastovou krabičku, <b>cihla dopadne dřív</b> — je těžší, odpor vzduchu na ni má menší
          vliv, kdežto lehkou krabičku vzduch brzdí víc. (Parašutista klesá s otevřeným padákem
          konstantní rychlostí právě proto, že je v mezní rychlosti — odpor padáku se rovná jeho
          tíze <M>{'Mg'}</M>.)
        </p>
      </Section>

      <Section title="Průměrná × okamžitá rychlost">
        <p>
          <Term>Průměrná rychlost</Term> je celková změna polohy <M>{'\\Delta\\vec r'}</M> dělená
          celkovým časem <M>{'\\Delta t'}</M>. Říká jen, „jak rychle jsi to zvládl celé dohromady" —
          záleží, kdy začneš měřit a jak dlouho měříš.
        </p>
        <MB>{'\\vec v_{\\text{prům}} = \\dfrac{\\Delta\\vec r}{\\Delta t}'}</MB>
        <p>
          Příklad: jela jsem domů 10 km a trvalo to půl hodiny → průměrná rychlost{' '}
          <M>{'20\\ \\mathrm{km/h}'}</M>. To ale neznamená, že jsem celou dobu jela přesně dvacítkou.
        </p>

        <p>
          <Term id="okamzita-rychlost">Okamžitá rychlost</Term> je rychlost <b>právě teď</b>, v jednom konkrétním okamžiku —
          to, co ti ukazuje tachometr. Dostaneš ji tak, že měřený interval{' '}
          <M>{'\\Delta t'}</M> necháš <b>zmenšovat až k nule</b>. Je to tedy{' '}
          <b>limita průměrné rychlosti</b> pro <M>{'\\Delta t \\to 0'}</M> (matematicky derivace
          polohy podle času):
        </p>
        <MB>{'\\vec v = \\lim_{\\Delta t\\to 0}\\dfrac{\\Delta\\vec r}{\\Delta t} = \\dfrac{\\mathrm d\\vec r}{\\mathrm dt}'}</MB>
        <p>
          Příklad: na dálnici tachometr ukáže <M>{'120\\ \\mathrm{km/h}'}</M> — to je okamžitá
          rychlost. Když se těleso pohybuje <b>stálou</b> rychlostí, průměrná a okamžitá rychlost
          jsou stejné.
        </p>

        <Figure caption="Okamžitá rychlost jako limita: čím kratší úsek Δt kolem bodu vezmeš, tím přesněji vystihneš rychlost přesně v tom bodě. V limitě Δt → 0 z průměru vznikne okamžitá hodnota.">
          <svg viewBox="0 0 380 210" className="svg-fig">
            <defs>
              <Arrow id="cAcc" color={MUTED} />
            </defs>
            {/* osy */}
            <line x1="40" y1="178" x2="362" y2="178" stroke={MUTED} strokeWidth="1.5" markerEnd="url(#cAcc)" />
            <line x1="40" y1="178" x2="40" y2="18" stroke={MUTED} strokeWidth="1.5" />
            <text x="356" y="198" fill={TXT} fontSize="13">t</text>
            <text x="22" y="28" fill={TXT} fontSize="13">r</text>
            {/* křivka dráhy r(t) */}
            <path d="M40,172 Q150,158 230,100 T350,34" fill="none" stroke={PLANE} strokeWidth="2.5" />
            {/* dlouhá sečna (průměrná rychlost přes velký interval) */}
            <line x1="80" y1="168" x2="318" y2="50" stroke={MUTED} strokeWidth="1.6" strokeDasharray="5,4" />
            <text x="56" y="44" fill={MUTED} fontSize="12">velké Δt → průměrná (sečna)</text>
            {/* tečna v bodě (okamžitá rychlost) */}
            <line x1="172" y1="160" x2="292" y2="60" stroke={ACC} strokeWidth="3" />
            <circle cx="230" cy="100" r="4.5" fill={ACC} />
            <text x="238" y="132" fill={ACC} fontSize="12" fontWeight="700">Δt → 0 → okamžitá</text>
            <text x="238" y="148" fill={ACC} fontSize="12" fontWeight="700">(tečna v bodě)</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady padají body)">
        <ul>
          <li>
            <b>Okamžitá rychlost = limitní hodnota průměrné rychlosti</b>, když se časový interval{' '}
            <M>{'\\Delta t'}</M> blíží nule. Přesně tahle věta se chce slyšet — neříkej jen „rychlost
            v daném okamžiku", ale dodej, že je to <b>limita průměrné</b> pro <M>{'\\Delta t\\to 0'}</M>.
          </li>
          <li>
            <b>Bez odporu</b> padají různě těžké předměty <b>stejně</b> (hmotnost se vykrátí).{' '}
            <b>S odporem</b> už ne — těžší dopadne dřív, protože odpor vzduchu má na něj menší vliv.
          </li>
          <li>
            Na nakloněné rovině zrychlení kvádru <M>{'a = g\\sin\\alpha'}</M>{' '}
            <b>nezávisí na hmotnosti</b>, jen na úhlu. U válce je menší (<M>{'\\tfrac{2}{3}g\\sin\\alpha'}</M>),
            protože se ještě roztáčí.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Popsat pohyb tělesa po nakloněné rovině: rozklad sil a zrychlení a = g·sin α (kvádr).',
          'Vysvětlit vliv odporu vzduchu na pád a co je mezní (maximální) rychlost.',
          'Vědět, že bez odporu padají všechna tělesa stejně, s odporem ne (těžší dřív).',
          'Rozlišit průměrnou a okamžitou rychlost; okamžitá = limita průměrné pro Δt → 0.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je to okamžitá rychlost a jak souvisí s průměrnou?',
            a: (
              <>
                Okamžitá rychlost je rychlost v daném okamžiku (to, co ukazuje tachometr). Je to{' '}
                <b>limitní hodnota průměrné rychlosti</b> <M>{'\\Delta\\vec r/\\Delta t'}</M>, když se
                časový interval <M>{'\\Delta t'}</M> blíží nule: <M>{'\\vec v=\\lim_{\\Delta t\\to0}\\Delta\\vec r/\\Delta t'}</M>.
              </>
            ),
          },
          {
            q: 'Padá těžké a lehké těleso stejně? Vysvětli proč.',
            a: (
              <>
                <b>Bez odporu vzduchu ano</b> — z <M>{'m\\vec g = m\\,\\mathrm d\\vec v/\\mathrm dt'}</M>{' '}
                se hmotnost vykrátí, takže zrychlení i doba pádu jsou stejné. <b>S odporem ne</b>:
                odpor brzdí lehčí těleso víc, takže např. cihla dopadne dřív než plastová krabička.
              </>
            ),
          },
          {
            q: 'Co je mezní (maximální) rychlost při pádu s odporem vzduchu?',
            a: (
              <>
                Rychlost, při které <b>odpor vzduchu vyrovná tíhu</b> (<M>{'F_o = F_G'}</M>), takže
                výslednice i zrychlení jsou nulové a těleso dál padá konstantní rychlostí:{' '}
                <M>{'v_{\\max}=mg/(kS)'}</M>. Příklad: parašutista s otevřeným padákem.
              </>
            ),
          },
          {
            q: 'Jaké je zrychlení kvádru na nakloněné rovině (bez tření) a na čem závisí?',
            a: (
              <>
                <M>{'a = g\\sin\\alpha'}</M> — <b>nezávisí na hmotnosti</b>, jen na úhlu sklonu{' '}
                <M>{'\\alpha'}</M>. (U válce je menší, <M>{'a=\\tfrac{2}{3}g\\sin\\alpha'}</M>, protože
                se kromě posouvání ještě otáčí.)
              </>
            ),
          },
        ]}
      />
    </>
  )
}
