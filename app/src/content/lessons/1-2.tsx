import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.2'

/* Pojmy, které tahle lekce poprvé vykládá — pro pozdější proklikávání. */
export const provides = {
  'hybnost': { lesson: '1.2', label: 'hybnost', short: 'p = m·v, „množství pohybu" tělesa (vektor).' },
  'impulz-sily': { lesson: '1.2', label: 'impulz síly', short: 'I = F·Δt — časový účinek síly, rovná se změně hybnosti.' },
  'zachovani-hybnosti': { lesson: '1.2', label: 'zákon zachování hybnosti', short: 'V izolované soustavě je celková hybnost stálá.' },
}

/* Šipka pro SVG (definice markeru). */
function Defs({ id: mid, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

const ACCENT = '#f59e0b'
const TXT = '#e8ecf8'
const GROUND = '#3a4566'
const FORCE = '#fb7185'
const BLUE = '#60a5fa'
const STEEL = '#9aa6c4'

/* Vozíček (těleso na kolečkách) pro ilustrace srážky / odrazu. */
function Cart({ x, w, color, label }: { x: number; w: number; color: string; label: string }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="0" y="96" width={w} height="30" rx="5" fill={color} />
      <text x={w / 2} y="116" fill="#0b1020" fontSize="14" textAnchor="middle" fontWeight="700">{label}</text>
      <circle cx={w * 0.25} cy="130" r="7" fill="#42506f" />
      <circle cx={w * 0.75} cy="130" r="7" fill="#42506f" />
    </g>
  )
}

export default function Lesson() {
  return (
    <>
      <p className="lead">
        Tahle otázka je u zkoušky vděčná: stačí znát dva vzorečky (<M>{'p=mv'}</M> a impulz síly),
        umět říct, <Term>kdy</Term> se hybnost zachovává, a dát příklad. Pojď si to zafixovat tak,
        aby z toho byla jistá jednička.
      </p>

      <Section title="Hybnost — „množství pohybu“">
        <p>
          <Term>Hybnost</Term> <M>{'\\vec p'}</M> je míra posuvného pohybu tělesa. Spočítáš ji jako
          hmotnost krát rychlost:
        </p>
        <MB>{'\\vec p = m\\,\\vec v \\qquad [\\,\\vec p\\,]=\\mathrm{kg\\,m\\,s^{-1}}'}</MB>
        <p>
          Je to <Term>vektor</Term> — má stejný směr jako rychlost. Těžký kamion v poklusu má velkou
          hybnost; pingpongový míček, i když letí rychle, malou. Hybnost říká, „jak těžké je to
          zastavit".
        </p>
        <p>
          Odkud se vzala? Z 2. Newtonova zákona. Ten se totiž obecně píše právě přes hybnost:
        </p>
        <MB>{'\\vec F = \\frac{\\mathrm d\\vec p}{\\mathrm dt}'}</MB>
        <p>
          Síla je tedy <b>časová změna hybnosti</b>. Pro stálou hmotnost z toho vyjde známé{' '}
          <M>{'\\vec F = m\\,\\vec a'}</M>.
        </p>
      </Section>

      <Section title="Impulz síly — síla působící po nějaký čas">
        <p>
          Když na těleso chvíli tlačíš silou, předáš mu „dávku" hybnosti. Tahle dávka se jmenuje{' '}
          <Term>impulz síly</Term> <M>{'\\vec I'}</M> a je to síla krát doba působení:
        </p>
        <MB>{'\\vec I = \\vec F\\,\\Delta t = \\int_{t_1}^{t_2}\\vec F\\,\\mathrm dt \\qquad [\\,\\vec I\\,]=\\mathrm{N\\,s}'}</MB>
        <p>
          (Integrál je tam jen pro případ, že síla není stálá — jinak stačí <M>{'\\vec F\\,\\Delta t'}</M>.)
          A teď to nejdůležitější spojení, které musíš umět:
        </p>
        <MB>{'\\vec I = \\Delta \\vec p = \\vec p_2 - \\vec p_1'}</MB>
        <p>
          <b>Impulz síly se rovná změně hybnosti.</b> To je jen 2. Newtonův zákon „přenásobený časem"
          (<M>{'\\vec F = \\mathrm d\\vec p/\\mathrm dt \\;\\Rightarrow\\; \\vec F\\,\\mathrm dt = \\mathrm d\\vec p'}</M>).
          Praktická názornost: ve fotbale stejný „kop" (stejný impulz) rozhýbe lehký míč hodně, těžký
          medicinbal málo. A airbag funguje právě na tomhle — prodlouží dobu <M>{'\\Delta t'}</M>,
          takže na stejnou změnu hybnosti stačí menší síla.
        </p>

        <Figure caption="Stejný impulz I = F·Δt = změna hybnosti Δp. Buď velká síla krátce, nebo malá síla dlouho — výsledek (změna hybnosti) je stejný.">
          <svg viewBox="0 0 360 130" className="svg-fig">
            <Defs id="ai1" color={ACCENT} />
            <Defs id="af1" color={FORCE} />
            <Cart x={40} w={70} color={STEEL} label="m" />
            <line x1="112" y1="111" x2="200" y2="111" stroke={FORCE} strokeWidth="6" markerEnd="url(#af1)" />
            <text x="156" y="98" fill={FORCE} fontSize="14" textAnchor="middle">F</text>
            <line x1="220" y1="111" x2="320" y2="111" stroke={ACCENT} strokeWidth="4" markerEnd="url(#ai1)" />
            <text x="270" y="98" fill={ACCENT} fontSize="14" textAnchor="middle">Δp = F·Δt</text>
            <text x="180" y="35" fill={TXT} fontSize="13" textAnchor="middle">síla po dobu Δt předá tělesu hybnost</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Zákon zachování hybnosti — a kdy platí">
        <p>
          Tohle je jádro otázky. <Term>Zákon zachování hybnosti</Term> říká:
        </p>
        <Callout kind="info" title="Zákon zachování hybnosti">
          V <b>izolované soustavě</b> (na kterou nepůsobí žádné vnější síly) se celková hybnost
          <b> nemění</b> — je pořád stejná, ať se uvnitř děje cokoli.
        </Callout>
        <p>
          „Izolovaná soustava" = bereme dohromady všechna tělesa, která na sebe působí, a zvenčí do
          toho nikdo nestrká (výslednice vnějších sil je nulová). Pak platí:
        </p>
        <MB>{'\\vec p_{\\text{celk}} = \\sum_i m_i\\vec v_i = \\text{konst.}'}</MB>
        <p>
          Pozor — uvnitř soustavy můžou tělesa do sebe bušit, přitahovat se, vybuchnout… to ničemu
          nevadí. Celkový součet hybností zůstává stejný. <b>Proč?</b> To je ta druhá věc, kterou si
          zkoušející rád ověří — viz další odstavec.
        </p>
      </Section>

      <Section title="Proč jsou vnitřní síly v součtu nulové (návaznost na 3. NZ)">
        <p>
          Síly v soustavě rozdělíme na <Term>vnější</Term> (zvenčí) a <Term>vnitřní</Term> (mezi
          tělesy navzájem). U izolované soustavy vnější síly nejsou. A vnitřní síly?
        </p>
        <p>
          Podle <b>3. Newtonova zákona</b> (akce a reakce) každá vnitřní síla přichází v páru: když
          těleso A tlačí na B silou <M>{'\\vec F_{AB}'}</M>, tlačí B na A stejně velkou opačnou silou{' '}
          <M>{'\\vec F_{BA}=-\\vec F_{AB}'}</M>. Sečteš-li celý pár, dostaneš nulu. Posčítáš všechny
          páry a vyjde:
        </p>
        <MB>{'\\sum \\vec F_{\\text{vnitřní}} = 0 \\quad\\Rightarrow\\quad \\sum \\vec I_{\\text{vnitřní}} = 0'}</MB>
        <p>
          A protože impulz vnitřních sil je nulový, <b>nemůže změnit celkovou hybnost</b>. Proto se
          v izolované soustavě hybnost zachovává. Hezky to shrnuje řetízek:
        </p>
        <ul>
          <li>součet vnitřních sil <M>{'= 0'}</M> (3. NZ, páry akce–reakce),</li>
          <li>součet jejich impulzů <M>{'= 0'}</M> (impulz = síla krát čas),</li>
          <li>změna celkové hybnosti izolované soustavy <M>{'= 0'}</M>.</li>
        </ul>

        <p>Proklikej si to na výstřelu / odrazu dvou vozíčků (model „výbuchu" uvnitř soustavy):</p>

        <StepFigure
          title="Zachování hybnosti v izolované soustavě"
          steps={[
            {
              label: 'klid',
              caption: <>Dva vozíčky se stlačenou pružinou mezi nimi stojí. Celková hybnost soustavy je nulová: <M>{'\\vec p_{\\text{celk}}=0'}</M>.</>,
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <line x1="0" y1="137" x2="420" y2="137" stroke={GROUND} strokeWidth="3" />
                  <Cart x={150} w={50} color={BLUE} label="A" />
                  <path d="M205 111 l8 -7 l-8 -7 l8 -7 l-8 -7 l8 -7" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <Cart x={220} w={50} color={ACCENT} label="B" />
                  <text x="210" y="40" fill={TXT} fontSize="15" textAnchor="middle">klid: p = 0</text>
                </svg>
              ),
            },
            {
              label: 'vnitřní síly',
              caption: <>Pružina se uvolní. Na A i B působí <b>vnitřní</b> síly — podle 3. NZ stejně velké a opačné. Žádná síla nepřichází zvenčí.</>,
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <Defs id="af2" color={FORCE} />
                  <line x1="0" y1="137" x2="420" y2="137" stroke={GROUND} strokeWidth="3" />
                  <Cart x={130} w={50} color={BLUE} label="A" />
                  <Cart x={240} w={50} color={ACCENT} label="B" />
                  <line x1="175" y1="70" x2="105" y2="70" stroke={FORCE} strokeWidth="4" markerEnd="url(#af2)" />
                  <text x="140" y="60" fill={FORCE} fontSize="13" textAnchor="middle">F na A</text>
                  <line x1="245" y1="70" x2="315" y2="70" stroke={FORCE} strokeWidth="4" markerEnd="url(#af2)" />
                  <text x="290" y="60" fill={FORCE} fontSize="13" textAnchor="middle">F na B</text>
                  <text x="210" y="160" fill={TXT} fontSize="12" textAnchor="middle">|F| stejné, opačný směr → součet sil = 0</text>
                </svg>
              ),
            },
            {
              label: 'rozjedou se',
              caption: <>Vozíčky se rozjedou na opačné strany. Jejich hybnosti jsou opačné a stále se sčítají na nulu: <M>{'\\vec p_A + \\vec p_B = 0'}</M>.</>,
              content: (
                <svg viewBox="0 0 420 170" className="svg-fig">
                  <Defs id="ap1" color={BLUE} />
                  <Defs id="ap2" color={ACCENT} />
                  <line x1="0" y1="137" x2="420" y2="137" stroke={GROUND} strokeWidth="3" />
                  <Cart x={70} w={50} color={BLUE} label="A" />
                  <Cart x={300} w={50} color={ACCENT} label="B" />
                  <line x1="100" y1="65" x2="40" y2="65" stroke={BLUE} strokeWidth="5" markerEnd="url(#ap1)" />
                  <text x="70" y="54" fill={BLUE} fontSize="13" textAnchor="middle">p (A)</text>
                  <line x1="320" y1="65" x2="380" y2="65" stroke={ACCENT} strokeWidth="5" markerEnd="url(#ap2)" />
                  <text x="350" y="54" fill={ACCENT} fontSize="13" textAnchor="middle">p (B)</text>
                  <text x="210" y="160" fill={TXT} fontSize="13" textAnchor="middle">součet hybností = 0 (jako na začátku)</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Příklady (přesně tohle chce zkoušející slyšet)">
        <ul>
          <li>
            <b>Výstřel z děla:</b> před výstřelem je hybnost nulová. Po výstřelu letí koule dopředu a
            dělo couvne dozadu — hybnost koule a děla jsou opačné, jejich součet je pořád nula.
          </li>
          <li>
            <b>Puštěný nafouknutý balónek:</b> před vypuštěním je hybnost balónku i vzduchu nulová. Po
            vypuštění uniká vzduch jedním směrem a balónek letí opačným — celková hybnost zůstává
            nulová (to je princip rakety).
          </li>
          <li>
            <b><Term>Brownův pohyb</Term>:</b> drobné zrnko ve vodě je ze všech stran bombardováno
            molekulami. Nárazy jsou náhodné a nevyrovnané, takže zrnko cuká sem a tam. Při každém
            nárazu se hybnost mezi molekulou a zrnkem <b>vyměňuje</b>, ale celková hybnost soustavy
            (zrnko + molekuly) se zachovává — je to pěkný důkaz, že hybnost se při srážkách přenáší.
          </li>
        </ul>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            Zákon zachování hybnosti platí <b>jen pro izolovanou soustavu</b> (žádné vnější síly).
            Vnitřní síly klidně působit můžou — ty součet hybnosti nezmění. Když do soustavy strká
            někdo zvenčí, zákon <b>neplatí</b>.
          </li>
          <li>
            Hybnost i impulz jsou <b>vektory</b> — u příkladu vždy řekni i směr (proto se opačné
            hybnosti sčítají na nulu, ne na dvojnásobek).
          </li>
          <li>
            Nepleť si <b>impulz síly</b> <M>{'\\vec I = \\vec F\\Delta t'}</M> (mění hybnost) s hybností
            samotnou <M>{'\\vec p = m\\vec v'}</M>. Spojuje je vztah <M>{'\\vec I = \\Delta\\vec p'}</M>.
          </li>
          <li>
            Vnitřní síly se ruší <b>jen v součtu přes celou soustavu</b>. Na jedno konkrétní těleso
            (kouli, balónek) ta síla pořád působí a rozhýbe ho — proto se uvnitř něco děje.
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat hybnost p = m·v a impulz síly I = F·Δt a napsat vztah I = Δp.',
          'Vyslovit zákon zachování hybnosti a říct, KDY platí (izolovaná soustava).',
          'Vysvětlit přes 3. NZ, proč jsou vnitřní síly i jejich impulzy v součtu nulové.',
          'Uvést konkrétní příklad (dělo, balónek, Brownův pohyb).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je hybnost a co impulz síly? Jak spolu souvisí?',
            a: <>Hybnost <M>{'\\vec p=m\\vec v'}</M> je „množství pohybu" (vektor). Impulz síly <M>{'\\vec I=\\vec F\\,\\Delta t'}</M> je časový účinek síly. Souvisí vztahem <M>{'\\vec I=\\Delta\\vec p'}</M> — impulz síly se rovná změně hybnosti.</>,
          },
          {
            q: 'Vyslov zákon zachování hybnosti a řekni, za jaké podmínky platí.',
            a: <>V <b>izolované soustavě</b> (výslednice vnějších sil = 0) je celková hybnost stálá: <M>{'\\sum m_i\\vec v_i=\\text{konst.}'}</M> Jinak (když působí vnější síly) neplatí.</>,
          },
          {
            q: 'Proč vnitřní síly nezmění celkovou hybnost soustavy?',
            a: <>Podle 3. NZ tvoří páry akce–reakce (stejně velké, opačné), takže <M>{'\\sum\\vec F_{\\text{vnitřní}}=0'}</M>, a tedy i <M>{'\\sum\\vec I_{\\text{vnitřní}}=0'}</M>. Nulový impulz nemůže změnit hybnost.</>,
          },
          {
            q: 'Jak vysvětlíš pohyb puštěného balónku přes zachování hybnosti?',
            a: <>Před vypuštěním je celková hybnost nulová. Vzduch uniká jedním směrem (získá hybnost), balónek letí opačným směrem se stejně velkou opačnou hybností — součet je stále nula. Stejný princip pohání rakety.</>,
          },
        ]}
      />
    </>
  )
}
