import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '4.2'

/* Nové pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'cerne-teleso': { lesson: '4.2', label: 'absolutně černé těleso', short: 'Pohlcuje veškeré dopadající záření; realizace = dutina s otvorem.' },
  'planckova-hypoteza': { lesson: '4.2', label: 'Planckova kvantová hypotéza', short: 'Energie se vyzařuje/pohlcuje jen po kvantech E = hν.' },
  'planckuv-vyzarovaci-zakon': { lesson: '4.2', label: 'Planckův vyzařovací zákon', short: 'Záření po kvantech hν; vyřešil „ultrafialovou katastrofu".' },
  'wienuv-zakon': { lesson: '4.2', label: 'Wienův posunovací zákon', short: 'λm·T = konst. — s teplotou se maximum posouvá ke kratším λ.' },
  'stefan-boltzmann': { lesson: '4.2', label: 'Stefan-Boltzmannův zákon', short: 'ε = σT⁴ — celkový vyzářený výkon roste se čtvrtou mocninou teploty.' },
}

const ACCENT = '#f472b6'
const TXT = '#e8ecf8'
const DIM = '#9aa6c4'
const HOT = '#fbbf24'
const COOL = '#60a5fa'
const WALL = '#3a4566'

/* Šipka pro SVG. */
function Defs({ color, name = 'ar' }: { color: string; name?: string }) {
  return (
    <defs>
      <marker id={name} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson_4_2() {
  return (
    <>
      <p className="lead">
        Tahle lekce je <b>MUST-HAVE</b> a u zkoušky se na ni rádo ptá. Zní to složitě, ale jde o jeden
        příběh: rozžhavené těleso svítí, a aby to klasická fyzika vůbec dokázala spočítat, musel Planck
        prohlásit, že se energie vyzařuje <Term>po kvantech</Term>. Tím se zrodila kvantová fyzika. Stačí
        umět říct, co je černé těleso, Planckovu hypotézu a znění dvou zákonů (Planckova a Wienova).
      </p>

      <Section title="Absolutně černé těleso — co to je">
        <p>
          <Term>Absolutně černé těleso</Term> je <b>idealizovaný model</b>: těleso, které <b>dokonale
          pohltí veškeré</b> dopadající elektromagnetické záření — nic neodrazí ani nepropustí. Proto
          „černé": kdyby na něj svítilo světlo, žádné by se nevrátilo zpět.
        </p>
        <p>
          Pozor, neplést s tím, že nic nevyzařuje! Když ho zahřejeme, naopak vyzařuje <Term>tepelné
          záření</Term> — a to <b>nejlépe ze všech těles</b>. Kolik a na jakých vlnových délkách vyzařuje,
          závisí <b>jen na jeho teplotě</b> <M>{'T'}</M> (na ničem jiném — ne na materiálu).
        </p>
        <Callout kind="tip" title="Jak si to představit">
          Lesklé těleso záření odráží, matné/černé ho pohlcuje. Čím víc záření pohltí, tím víc se ohřeje
          a tím víc samo vyzařuje. Rozžhavený plát v kovárně mění barvu s teplotou — to je přesně ono.
        </Callout>
      </Section>

      <Section title="Realizace v praxi: dutina s malým otvorem">
        <p>
          Dokonale černé těleso v přírodě nemáme, ale skvěle ho napodobí <Term>dutina s malým
          otvorem</Term>. Paprsek, který otvorem vletí dovnitř, se uvnitř mnohokrát odrazí od stěn a při
          každém odrazu se kus pohltí — ven se prakticky nevrátí nic. <b>Otvor se proto chová jako
          absolutně černé těleso.</b> Klikej <b>Další →</b>:
        </p>

        <StepFigure
          title="Proč se otvor dutiny chová jako černé těleso"
          steps={[
            {
              label: 'paprsek vletí dovnitř',
              caption: <>Záření vletí malým otvorem do dutiny. Otvor je malinký oproti vnitřku.</>,
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs color={ACCENT} />
                  <rect x="70" y="40" width="280" height="140" rx="10" fill="#161c30" stroke={WALL} strokeWidth="5" />
                  <rect x="66" y="98" width="10" height="24" fill="#0b1020" />
                  <line x1="6" y1="110" x2="62" y2="110" stroke={ACCENT} strokeWidth="4" markerEnd="url(#ar)" />
                  <text x="34" y="96" fill={ACCENT} fontSize="14" textAnchor="middle">záření</text>
                  <text x="210" y="205" fill={DIM} fontSize="13" textAnchor="middle">dutina (uvnitř černá)</text>
                </svg>
              ),
            },
            {
              label: 'odráží se a pohlcuje',
              caption: <>Uvnitř se odráží od stěny ke stěně a <b>při každém odrazu se část pohltí</b> (paprsek slábne).</>,
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs color={ACCENT} />
                  <rect x="70" y="40" width="280" height="140" rx="10" fill="#161c30" stroke={WALL} strokeWidth="5" />
                  <rect x="66" y="98" width="10" height="24" fill="#0b1020" />
                  <polyline points="76,110 200,55 320,150 180,170 290,75" fill="none" stroke={ACCENT} strokeWidth="3" markerEnd="url(#ar)" opacity="0.9" />
                  <circle cx="200" cy="55" r="4" fill={HOT} />
                  <circle cx="320" cy="150" r="4" fill={HOT} />
                  <circle cx="180" cy="170" r="4" fill={HOT} />
                  <text x="210" y="205" fill={DIM} fontSize="13" textAnchor="middle">každý odraz ubere kus energie</text>
                </svg>
              ),
            },
            {
              label: 'pohlceno vše',
              caption: <>Ven otvorem se prakticky nic nevrátí → otvor <b>pohltí veškeré</b> dopadající záření = chová se jako absolutně černé těleso.</>,
              content: (
                <svg viewBox="0 0 420 220" className="svg-fig">
                  <Defs color={DIM} />
                  <rect x="70" y="40" width="280" height="140" rx="10" fill="#161c30" stroke={WALL} strokeWidth="5" />
                  <rect x="66" y="98" width="10" height="24" fill="#0b1020" />
                  <text x="210" y="118" fill={DIM} fontSize="15" textAnchor="middle">pohlceno</text>
                  <line x1="62" y1="110" x2="20" y2="110" stroke={DIM} strokeWidth="3" strokeDasharray="5 5" markerEnd="url(#ar)" />
                  <text x="38" y="96" fill={DIM} fontSize="13" textAnchor="middle">∅ ven</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Planckova kvantová hypotéza (klíčový moment)">
        <p>
          Klasická fyzika předpovídala, že černé těleso bude na krátkých vlnových délkách (v ultrafialové
          oblasti) vyzařovat <b>nekonečně mnoho</b> energie — tomu se říká <Term>ultrafialová katastrofa</Term>.
          To je samozřejmě nesmysl, experiment nic takového neukazuje.
        </p>
        <p>
          Planck to vyřešil odvážným předpokladem — <Term>Planckovou kvantovou hypotézou</Term>:
        </p>
        <Callout kind="info" title="Znění Planckovy hypotézy">
          Emise a absorpce elektromagnetické energie neprobíhá spojitě, ale <b>jen po celistvých násobcích
          energetického kvanta</b>. Velikost jednoho kvanta je
          <MB>{'E = h\\,\\nu = \\frac{h\\,c}{\\lambda}'}</MB>
          kde <M>{'h'}</M> je <b>Planckova konstanta</b> a <M>{'\\nu'}</M> frekvence. Jedno kvantum
          elektromagnetického pole = jeden <b>foton</b>.
        </Callout>
        <p>
          Jinými slovy: energie nemůže téct po libovolně malých kapkách, ale jen po „balíčcích" o velikosti{' '}
          <M>{'h\\nu'}</M>. Tahle myšlenka se ukázala jako počátek celé kvantové fyziky.
        </p>
      </Section>

      <Section title="Planckův vyzařovací zákon (samostatný okruh — uměj ho říct!)">
        <p>
          <Term>Planckův vyzařovací zákon</Term> popisuje <b>spektrální hustotu energie záření v dutině</b> —
          tedy jak je energie záření černého tělesa rozložená mezi jednotlivé frekvence (vlnové délky) při
          dané teplotě. Klíčové je <b>jak</b> ho Planck odvodil:
        </p>
        <Callout kind="info" title="Co u zkoušky říct jednou větou">
          Planck předpokládal, že se <b>energie vyzařuje a pohlcuje po kvantech</b> <M>{'h\\nu'}</M> (ne spojitě).
          Tím dostal vzorec, který <b>souhlasí s experimentem</b> na všech vlnových délkách, a hlavně{' '}
          <b>vyřešil „ultrafialovou katastrofu"</b> klasické fyziky.
        </Callout>
        <p>Z Planckova zákona plynou tři důležité důsledky:</p>
        <ol className="biglist">
          <li>S rostoucí teplotou roste hustota energie pro <b>každou</b> frekvenci (těleso celkově svítí víc).</li>
          <li>Pro každou teplotu má křivka <b>maximum</b> — jeho posun popisuje Wienův zákon (níže).</li>
          <li>Celková vyzářená energie roste se čtvrtou mocninou teploty — Stefan-Boltzmann (níže).</li>
        </ol>
        <p>
          V limitě klasické fyziky (pro <M>{'\\nu \\to 0'}</M>) přechází Planckův zákon na starší{' '}
          <b>Rayleigh-Jeansův zákon</b> — to je důkaz, že kvantová fyzika klasickou „obsahuje" jako mezní případ.
        </p>

        <Figure caption="Spektrum černého tělesa: každá křivka = jedna teplota. S rostoucí T je křivka vyšší a její maximum se posouvá doleva (ke kratším λ). Čárkovaně předpověď klasické fyziky, která utíká do nekonečna = ultrafialová katastrofa.">
          <svg viewBox="0 0 440 260" className="svg-fig">
            <Defs color={TXT} name="axar" />
            {/* osy */}
            <line x1="50" y1="220" x2="420" y2="220" stroke={TXT} strokeWidth="2" markerEnd="url(#axar)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke={TXT} strokeWidth="2" markerEnd="url(#axar)" />
            <text x="425" y="238" fill={TXT} fontSize="13" textAnchor="end">λ (vlnová délka)</text>
            <text x="30" y="30" fill={TXT} fontSize="13" textAnchor="start">intenzita</text>
            {/* klasická předpověď - ultrafialová katastrofa */}
            <path d="M55,30 C70,90 90,170 130,205 C170,222 300,222 420,221" fill="none" stroke={DIM} strokeWidth="2" strokeDasharray="6 5" />
            <text x="78" y="48" fill={DIM} fontSize="12">klasika → ∞</text>
            {/* horká křivka (vyšší T) - maximum vlevo */}
            <path d="M55,218 C95,210 120,60 150,60 C185,60 230,200 420,216" fill="none" stroke={HOT} strokeWidth="3" />
            <circle cx="150" cy="60" r="4" fill={HOT} />
            <text x="160" y="56" fill={HOT} fontSize="13">vyšší T</text>
            {/* studená křivka (nižší T) - maximum vpravo, nižší */}
            <path d="M55,219 C140,216 220,140 260,140 C300,140 350,205 420,217" fill="none" stroke={COOL} strokeWidth="3" />
            <circle cx="260" cy="140" r="4" fill={COOL} />
            <text x="270" y="136" fill={COOL} fontSize="13">nižší T</text>
            {/* posun maxima - šipka */}
            <Defs color={ACCENT} name="shar" />
            <line x1="254" y1="116" x2="160" y2="80" stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#shar)" />
            <text x="205" y="104" fill={ACCENT} fontSize="12" textAnchor="middle">↑T: maximum ke kratším λ</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Wienův posunovací zákon">
        <p>
          <Term>Wienův posunovací zákon</Term> přesně říká, kde leží maximum spektra. Vlnová délka maxima{' '}
          <M>{'\\lambda_m'}</M> krát teplota je <b>konstantní</b>:
        </p>
        <MB>{'\\lambda_m \\cdot T = \\text{konst.} \\qquad \\left(\\lambda_m = \\frac{b}{T}\\right)'}</MB>
        <p>
          Znění slovy (přesně jak to chce zkoušející): <i>„Součin termodynamické teploty a vlnové délky,
          při které má spektrální hustota energie maximum, je konstantní."</i> Důsledek: <b>s rostoucí teplotou
          se maximum posouvá ke kratším vlnovým délkám</b> (rozžhavené železo jde od červené přes žlutou k bílé/modré).
        </p>
        <Callout kind="info" title="Praktické využití">
          Z Wienova zákona se dá <b>experimentálně určit Planckova konstanta</b>, a taky se podle barvy (maxima
          spektra) změří teplota hvězdy nebo žhavého tělesa, aniž bychom se ho dotkli.
        </Callout>
      </Section>

      <Section title="Stefan-Boltzmannův zákon">
        <p>
          Zatímco Wien říká <i>kde</i> je maximum, <Term>Stefan-Boltzmannův zákon</Term> říká <i>kolik</i>
          {' '}celkem těleso vyzáří. Celková energie vyzářená jednotkovou plochou za jednotku času je úměrná{' '}
          <b>čtvrté mocnině</b> teploty:
        </p>
        <MB>{'\\varepsilon = \\sigma\\,T^4'}</MB>
        <p>
          kde <M>{'\\sigma'}</M> je Stefan-Boltzmannova konstanta. Proto i malé zvýšení teploty znamená
          obrovský nárůst vyzářeného výkonu (dvojnásobná teplota = 16× víc energie).
        </p>
      </Section>

      <Section title="Planckova konstanta jako hranice mikro/makrosvěta">
        <p>
          <M>{'h = 6{,}625 \\cdot 10^{-34}\\ \\mathrm{J\\,s}'}</M> je nepatrně malá. <b>Právě její velikost
          vymezuje hranici</b> mezi makrosvětem (kde platí klasická fyzika) a mikrosvětem (kde je nutný kvantový
          popis). Pro velké objekty je kvantum <M>{'h\\nu'}</M> tak nepatrné, že energie vypadá spojitě a kvantové
          efekty nepozorujeme; v mikrosvětě (atomy, fotony) je naopak rozhodující.
        </p>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Planckův vyzařovací zákon je samostatný okruh.</b> Uměj ho říct jasně: záření probíhá{' '}
            <b>po kvantech</b> <M>{'h\\nu'}</M>, a tím se <b>vyřešila „ultrafialová katastrofa"</b> klasické fyziky.
          </li>
          <li>
            <b>Wien:</b> s rostoucí teplotou se maximum posouvá ke <b>KRATŠÍM</b> vlnovým délkám (ne delším!).
            Pomůcka: žhavější = modřejší.
          </li>
          <li>
            Černé těleso <b>neznamená, že nic nevyzařuje</b> — naopak vyzařuje nejlépe. „Černé" = pohlcuje vše.
          </li>
          <li>
            Neplést zákony: <b>Wien</b> = poloha maxima (<M>{'\\lambda_m T = \\text{konst.}'}</M>),{' '}
            <b>Stefan-Boltzmann</b> = celková energie (<M>{'\\sigma T^4'}</M>).
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat absolutně černé těleso (pohlcuje vše) + jeho realizaci dutinou s otvorem.',
          'Vyslovit Planckovu kvantovou hypotézu (energie po kvantech E = hν).',
          'Říct znění Planckova vyzařovacího zákona (záření po kvantech, vyřešil ultrafialovou katastrofu).',
          'Vyslovit Wienův posunovací zákon (λm·T = konst.; maximum se posouvá ke kratším λ).',
          'Vědět, že Planckova konstanta vymezuje hranici mikro/makrosvěta.',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je absolutně černé těleso a jak se realizuje v praxi?',
            a: <>Idealizované těleso, které <b>dokonale pohltí veškeré</b> dopadající záření (nic neodrazí ani nepropustí). Realizuje se <b>dutinou s malým otvorem</b> — záření se uvnitř mnohokrát odrazí a pohltí, takže otvor se chová jako černé těleso.</>,
          },
          {
            q: <>Vyslovte Planckovu kvantovou hypotézu.</>,
            a: <>Emise a absorpce elektromagnetické energie probíhá <b>jen po celistvých násobcích kvanta</b> o energii <M>{'E = h\\nu = hc/\\lambda'}</M> (ne spojitě).</>,
          },
          {
            q: <>Co je hlavní myšlenka Planckova vyzařovacího zákona a jaký problém vyřešil?</>,
            a: <>Že se záření černého tělesa vyzařuje <b>po kvantech</b> <M>{'h\\nu'}</M>. Tím vznikl vzorec souhlasící s experimentem a <b>vyřešila se „ultrafialová katastrofa"</b> klasické fyziky (předpověď nekonečné energie v UV oblasti).</>,
          },
          {
            q: <>Napište znění Wienova posunovacího zákona. Kam se posouvá maximum s rostoucí teplotou?</>,
            a: <>Součin termodynamické teploty a vlnové délky, při které má spektrální hustota energie maximum, je konstantní: <M>{'\\lambda_m T = \\text{konst.}'}</M> S rostoucí teplotou se maximum posouvá ke <b>kratším</b> vlnovým délkám.</>,
          },
        ]}
      />
    </>
  )
}
