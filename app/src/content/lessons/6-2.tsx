import type { ReactNode } from 'react'
import { Section, M, Callout, SelfCheck, ConceptLink, LessonLink } from '../../components/lesson/primitives'

export const id = '6.2'

/* Seznam zkouškových okruhů jedné oblasti — každý je proklik na lekci (v nové kartě). */
function Okruhy({ items }: { items: { t: ReactNode; l: string }[] }) {
  return (
    <ul className="okruhy">
      {items.map((it, i) => (
        <li key={i}>
          <LessonLink lesson={it.l}>{it.t}</LessonLink>
        </li>
      ))}
    </ul>
  )
}

export default function Lesson_6_2() {
  return (
    <>
      <p className="lead">
        Zkouška nanečisto, postavená <b>přesně podle reálných zkouškových archů</b> (otázky ZS-2008 a
        novější seznamy okruhů). Nejdřív <b>zkouškové okruhy</b> — ty se u ústní zkoušky „vyprávějí".
        Pak <b>test nanečisto</b>: krátké otázky, u kterých si nejdřív odpověz nahlas a teprve potom
        odkryj správnou odpověď.
      </p>

      <Callout kind="info" title="Jak zkouška vypadá (a jak se na ni připravit)">
        <ul>
          <li>
            Ke každé z pěti oblastí (mechanika, pole, vlnění, kvantová, jaderná) je sada{' '}
            <b>okruhů</b> — širších témat. U zkoušky je potřeba okruh souvisle <b>vyložit</b>: definice,
            vzoreček, <b>příklad</b> a často <b>obrázek</b>.
          </li>
          <li>
            Kromě toho padají <b>krátké faktické otázky</b> (přesně typ těch v testu níže) — na ně musí
            jít odpověď z hlavy a hned.
          </li>
          <li>
            <b>Strategie na jedničku:</b> ke každému okruhu si připrav „kostru" — 3 věty + 1 vzoreček +
            1 příklad. A pozor na <b>chytáky</b> (jsou zvýrazněné v lekcích) — tam se ztrácí nejvíc bodů.
          </li>
        </ul>
      </Callout>

      {/* ============================ OKRUHY ============================ */}
      <Section title="Část 1 · Zkouškové okruhy (vyprávěj nahlas)">
        <p>
          Vyber si okruh, zavři učebnici a zkus ho souvisle vyložit. Když zadrhneš, klikni — otevře se
          lekce <b>v nové kartě</b>.
        </p>

        <p className="okruhy__area">🟠 Mechanika</p>
        <Okruhy
          items={[
            { t: 'Newtonovy zákony', l: '1.1' },
            { t: 'Hybnost, impulz síly a zákon zachování hybnosti', l: '1.2' },
            { t: 'Kinetická energie, práce a potenciální energie (s příklady)', l: '1.3' },
            { t: 'Konzervativní × nekonzervativní pole; ZZ mechanické i celkové energie', l: '1.4' },
            { t: 'Pohyb soustavy hmotných bodů, odvození těžiště; rotace tělesa', l: '1.5' },
            { t: 'Průměrná a okamžitá rychlost; vliv odporu vzduchu na pád', l: '1.6' },
            { t: 'Kinetická teorie hmoty (axiomy); tepelný pohyb a teplota', l: '1.7' },
          ]}
        />

        <p className="okruhy__area">🔵 Fyzikální pole</p>
        <Okruhy
          items={[
            { t: 'Newtonova gravitační síla a gravitační potenciální energie', l: '2.1' },
            { t: 'Coulombův zákon a základní poznatky o elektrickém náboji', l: '2.2' },
            { t: 'Intenzita a potenciál pole bodového náboje a soustavy nábojů', l: '2.3' },
            { t: 'Elektrický dipól (vlastní pole i chování ve vnějším poli)', l: '2.4' },
            { t: 'Gaussova věta a tok elektrostatického pole plochou', l: '2.5' },
            { t: 'Biot-Savartův a Ampérův zákon', l: '2.6' },
            { t: 'Lorentzova síla; pohyb náboje v elektrickém a magnetickém poli', l: '2.7' },
            { t: 'Elektromagnetická indukce (Faradayův zákon)', l: '2.8' },
            { t: 'Silové působení mag. pole na vodič; magnetický moment smyčky', l: '2.9' },
            { t: 'Vliv elektrostatického pole na hmotné prostředí (mikroskopicky)', l: '2.10' },
            { t: 'Vliv magnetického pole na hmotné prostředí (mikroskopicky)', l: '2.11' },
          ]}
        />

        <p className="okruhy__area">🟣 Kmity a vlnění (vč. optiky)</p>
        <Okruhy
          items={[
            { t: 'Kmity — definice, základní charakteristiky', l: '3.1' },
            { t: 'Lineární harmonický oscilátor; tlumené a vynucené kmity, rezonance', l: '3.2' },
            { t: 'Skládání kmitů (s příklady)', l: '3.3' },
            { t: 'Vlnění — definice, charakteristiky; postupné a stojaté vlnění', l: '3.4' },
            { t: 'Interference vlnění; fázová a grupová rychlost, vlnové klubko', l: '3.6' },
            { t: 'Huygensův-Fresnelův princip; Dopplerův jev', l: '3.7' },
            { t: 'Interference světla (Youngův pokus, tenká vrstva); šíření elmag. vlnění', l: '3.8' },
            { t: 'Polarizace světla a optická aktivita', l: '3.9' },
          ]}
        />

        <p className="okruhy__area">🩷 Kvantová fyzika</p>
        <Okruhy
          items={[
            { t: 'Částicově vlnový dualismus', l: '4.1' },
            { t: 'Foton jako kvantum elmag. pole; de Broglieho vlny', l: '4.1' },
            { t: 'Tepelné záření černého tělesa; Planckův vyzařovací zákon', l: '4.2' },
            { t: 'Vnější fotoelektrický jev', l: '4.3a' },
            { t: 'Comptonův jev; laser', l: '4.4' },
            { t: 'Heisenbergovy relace neurčitosti; vlnová funkce', l: '4.5' },
          ]}
        />

        <p className="okruhy__area">🟢 Jaderná a atomová fyzika</p>
        <Okruhy
          items={[
            { t: 'Složení a charakteristiky atomového jádra; jaderné síly', l: '5.1' },
            { t: 'Modely jádra (kapkový, slupkový) a vazebná energie', l: '5.2' },
            { t: 'Radioaktivita a její veličiny (λ, τ, T₁/₂, N(t), A(t))', l: '5.3a' },
            { t: 'Typy radioaktivních přeměn (α, β, γ)', l: '5.3b' },
            { t: 'Rozpad alfa a tunelový jev', l: '5.4' },
            { t: 'Jaderné reakce: syntéza a štěpení', l: '5.5' },
            { t: 'Interakce záření s látkou: dávka, kerma, expozice', l: '5.6' },
          ]}
        />
      </Section>

      {/* ===================== TEST: MECHANIKA ===================== */}
      <Section title="Část 2 · Test nanečisto — Mechanika">
        <SelfCheck
          items={[
            {
              q: <>Jak se nazývá a co říká <b>1. Newtonův zákon</b>?</>,
              a: (
                <>
                  <b>Princip setrvačnosti.</b> Hmotný bod zůstává v klidu nebo v rovnoměrném přímočarém
                  pohybu právě tehdy, je-li výslednice vnějších sil na něj působících nulová.
                </>
              ),
            },
            {
              q: <>Napiš <b>2. Newtonův zákon</b> pohybovou rovnicí a popiš veličiny.</>,
              a: (
                <>
                  <M>{'\\vec F = m\\dfrac{\\mathrm d^2\\vec r}{\\mathrm dt^2} = \\dfrac{\\mathrm d\\vec p}{\\mathrm dt}'}</M> — F síla, m
                  hmotnost, r polohový vektor, p hybnost, t čas. (Pozor: obecně přes dp/dt, ne jen F = ma.)
                </>
              ),
            },
            {
              q: <>Jak zní <b>3. Newtonův zákon</b> a proč se síly akce a reakce neruší?</>,
              a: (
                <>
                  Princip vzájemného působení: vzájemné síly dvou těles mají stejnou velikost a opačný
                  směr. <b>Neruší se</b>, protože každá působí na <b>jiné těleso</b>.
                </>
              ),
            },
            {
              q: <>Na čem závisí velikost <b>práce</b>?</>,
              a: (
                <>
                  <M>{'W = \\vec F \\cdot \\vec s = Fs\\cos\\alpha'}</M> — na velikosti síly, délce dráhy a na úhlu α
                  mezi nimi. (Při α = 90° je práce nulová.)
                </>
              ),
            },
            {
              q: <>Vyjádři <b>zákon zachování mechanické energie</b> a uveď, kdy platí.</>,
              a: (
                <>
                  <M>{'\\Delta E_k + \\Delta E_p = 0'}</M>. Platí v <ConceptLink id="konzervativni-pole">konzervativním poli</ConceptLink>{' '}
                  — tj. kde lze definovat potenciální energii (žádné tření).
                </>
              ),
            },
            {
              q: <>Uveď vztah pro polohu <b>těžiště</b> N hmotných bodů.</>,
              a: <M>{'\\vec R_T = \\dfrac{\\sum_i m_i \\vec r_i}{\\sum_i m_i}'}</M>,
            },
            {
              q: <>Planety obíhají Slunce po elipse. Ve kterém bodě jsou <b>nejrychlejší</b> a proč?</>,
              a: (
                <>
                  Nejblíže Slunci. Jde o izolovanou soustavu se ZZ mechanické energie — nejrychlejší jsou
                  tam, kde mají <b>nejmenší potenciální energii</b>.
                </>
              ),
            },
            {
              q: <>Co je <b>Brownův pohyb</b> a čím je způsoben?</>,
              a: (
                <>
                  Chaotický pohyb drobných zrnek (např. na hladině). Způsobuje ho <b>kolísání počtu</b>{' '}
                  částic narážejících z různých stran — v souladu se ZZ hybnosti udělují zrnku
                  pozorovatelnou rychlost.
                </>
              ),
            },
          ]}
        />
      </Section>

      {/* ===================== TEST: FYZIKÁLNÍ POLE ===================== */}
      <Section title="Část 2 · Test nanečisto — Fyzikální pole">
        <SelfCheck
          items={[
            {
              q: <>Jak je definována <b>intenzita</b> a jak <b>potenciál</b> elektrostatického pole?</>,
              a: (
                <>
                  <ConceptLink id="intenzita-pole">Intenzita</ConceptLink> = síla působící na náboj +1 C (<b>vektor</b>).{' '}
                  <ConceptLink id="potencial">Potenciál</ConceptLink> = potenciální energie náboje +1 C (<b>skalár</b>).
                </>
              ),
            },
            {
              q: <>Jak souvisí směr <b>intenzity</b> s <b>potenciálem</b>?</>,
              a: <>Intenzita má směr <b>nejrychlejšího poklesu</b> potenciálu (<M>{'\\vec E = -\\,\\mathrm{grad}\\,\\varphi'}</M>).</>,
            },
            {
              q: <>Co je <b>elektrický dipól</b> a jak je definován dipólový moment?</>,
              a: (
                <>
                  Dvojice stejně velkých <b>opačných</b> bodových nábojů ve vzdálenosti d.{' '}
                  <M>{'\\vec p = q\\vec d'}</M> (vektor podél spojnice nábojů, velikost d = jejich vzdálenost).
                  Ve vnějším poli se dipól stáčí tak, aby p mělo směr E.
                </>
              ),
            },
            {
              q: <>Co je zdrojem <b>magnetického pole</b>?</>,
              a: <>Pohybující se elektrický náboj (tj. elektrický proud).</>,
            },
            {
              q: <>Jak velký je <b>tok indukce</b> magnetického pole libovolnou uzavřenou plochou?</>,
              a: <>Nulový (siločáry B jsou uzavřené — neexistují magnetické náboje).</>,
            },
            {
              q: <>Co říká <b>princip superpozice</b> a kde platí?</>,
              a: <>Výsledná síla = vektorový součet jednotlivých sil. Platí např. pro gravitační i elektrostatické pole.</>,
            },
            {
              q: <>Faradayův zákon: jakými <b>změnami</b> lze indukovat napětí? (uveď příklad)</>,
              a: (
                <>
                  Změnou <b>velikosti</b> magnetického pole (přibližování magnetu), změnou <b>plochy</b>{' '}
                  smyčky, nebo změnou <b>úhlu</b> mezi B a plochou (rotující smyčka).
                </>
              ),
            },
            {
              q: <>Čím se liší <ConceptLink id="vodic">vodič</ConceptLink> a <ConceptLink id="dielektrikum">dielektrikum</ConceptLink>?</>,
              a: <>Vodič obsahuje <b>volné</b> pohyblivé náboje; dielektrikum (izolant) žádné volné náboje nemá (jsou vázané).</>,
            },
          ]}
        />

        <Callout kind="chytak" title="Povinný chyták (objevuje se skoro pokaždé)">
          <p>
            <b>Dvě stejné kuličky</b> nabité stejným nábojem <M>{'Q'}</M> visí ve vzdálenosti{' '}
            <M>{'r'}</M>. Jaká je <b>uprostřed</b> mezi nimi intenzita a jaký potenciál?
          </p>
          <p>
            Odpověď: <M>{'\\vec E = 0'}</M> (opačné, stejně velké vektory se vyruší), ale{' '}
            <M>{'\\varphi \\neq 0'}</M> (dvě kladná čísla se sečtou). <b>Intenzita je vektor, potenciál
            skalár.</b> Detailní rozbor je v <ConceptLink id="superpozice">lekci o superpozici</ConceptLink>.
          </p>
        </Callout>
      </Section>

      {/* ===================== TEST: KMITY A VLNĚNÍ ===================== */}
      <Section title="Část 2 · Test nanečisto — Kmity a vlnění">
        <SelfCheck
          items={[
            {
              q: <>Jaká síla <M>{'\\vec F'}</M> vyvolává <b>lineární harmonické kmity</b>?</>,
              a: (
                <>
                  <M>{'\\vec F = -k\\vec u'}</M> — velikost úměrná výchylce od rovnovážné polohy, směr{' '}
                  <b>opačný</b> než výchylka.
                </>
              ),
            },
            {
              q: <>Jak je definovaná <b>vlnová délka</b>?</>,
              a: (
                <>
                  Nejkratší vzdálenost dvou bodů kmitajících se <b>stejnou fází</b> — tedy vzdálenost, na
                  kterou se vlnění rozšíří za jednu periodu. Jednotka metr.
                </>
              ),
            },
            {
              q: <>Vysvětli pojmy <b>uzel</b> a <b>kmitna</b> u stojatého vlnění.</>,
              a: <>Uzel = bod, který nekmitá (nulová amplituda). Kmitna = bod, který kmitá s maximální amplitudou.</>,
            },
            {
              q: <>Co je <b>fázová</b> a co <b>grupová</b> rychlost?</>,
              a: (
                <>
                  Fázová = rychlost postupu místa se stejnou <b>fází</b>. Grupová = rychlost postupu místa
                  se stejnou <b>amplitudou</b>; právě grupovou rychlostí se přenáší <b>energie</b>.
                </>
              ),
            },
            {
              q: <>Kdy se dvě vlnění stejného směru <b>zesílí</b> a kdy <b>vyruší</b>?</>,
              a: <>Zesílí se při stejné fázi (φ₁ = φ₂), vyruší se při opačné fázi (φ₁ = φ₂ + π).</>,
            },
            {
              q: <>Jak <b>vzniká stojaté vlnění</b>?</>,
              a: <>Interferencí dvou vlnění <b>opačného směru</b> o stejné frekvenci a vlnové délce (např. při odrazu na konci prostředí).</>,
            },
            {
              q: <>K čemu dochází při <b>Dopplerově jevu</b>? Uveď příklad.</>,
              a: (
                <>
                  Pohyb zdroje nebo pozorovatele mění <b>pozorovanou frekvenci</b> (přibližování → vyšší,
                  vzdalování → nižší). Příklad: měnící se tón houkačky projíždějící sanitky; v astronomii
                  rudý posuv.
                </>
              ),
            },
          ]}
        />
      </Section>

      {/* ===================== TEST: KVANTOVÁ FYZIKA ===================== */}
      <Section title="Část 2 · Test nanečisto — Kvantová fyzika">
        <SelfCheck
          items={[
            {
              q: <>V čem spočívá <b>korpuskulárně vlnový dualismus</b>?</>,
              a: (
                <>
                  Objekty mikrosvěta se někdy chovají jako <b>vlny</b> a někdy jako <b>částice</b> — ale{' '}
                  <b>nikdy obojí zároveň</b> v témže ději.
                </>
              ),
            },
            {
              q: <>Jaké těleso je <b>absolutně černé</b>?</>,
              a: <>Abstrakce: těleso, které veškeré dopadající záření <b>pohltí</b>, nic neodráží (realizace: dutina s malým otvorem).</>,
            },
            {
              q: <>Jak závisí <b>energie fotonu</b> na frekvenci a na vlnové délce?</>,
              a: <>Na frekvenci přímo úměrně <M>{'E = h\\nu'}</M>, na vlnové délce nepřímo úměrně <M>{'E = hc/\\lambda'}</M>.</>,
            },
            {
              q: <>Jaká je <b>klidová hmotnost fotonu</b> a jak určíme jeho relativistickou hmotnost?</>,
              a: <>Klidová hmotnost je nulová; relativistická <M>{'m = E/c^2 = h\\nu/c^2'}</M>.</>,
            },
            {
              q: <>Při <b>fotoefektu</b>: co se změní, zvýším-li <i>intenzitu</i> a co, zvýším-li <i>frekvenci</i> světla?</>,
              a: (
                <>
                  Vyšší intenzita → <b>více</b> emitovaných elektronů. Vyšší frekvence → elektrony s{' '}
                  <b>větší energií</b> (počet se nemění). Energie elektronů na intenzitě nezávisí.
                </>
              ),
            },
            {
              q: <>Napiš <b>Heisenbergovy relace</b> neurčitosti a vysvětli veličiny.</>,
              a: (
                <>
                  <M>{'\\Delta x\\,\\Delta p \\ge \\hbar/2'}</M>, kde <M>{'\\hbar = h/2\\pi'}</M>; Δx = neurčitost polohy, Δp =
                  neurčitost hybnosti. Jde o <b>neredukovatelné minimum</b> (důsledek vlnové povahy).
                </>
              ),
            },
            {
              q: <>K čemu dochází při <b>Comptonově jevu</b>?</>,
              a: <>Nepružný rozptyl fotonu na slabě vázaném elektronu — foton předá část energie, takže má po rozptylu <b>větší vlnovou délku</b>.</>,
            },
            {
              q: <>Jak souvisí <b>vlnová funkce</b> ψ s polohou částice?</>,
              a: <><M>{'|\\psi|^2'}</M> je hustota pravděpodobnosti — udává pravděpodobnost nalezení částice v daném místě a čase.</>,
            },
          ]}
        />
      </Section>

      {/* ===================== TEST: JADERNÁ FYZIKA ===================== */}
      <Section title="Část 2 · Test nanečisto — Jaderná a atomová fyzika">
        <SelfCheck
          items={[
            {
              q: <>Vysvětli význam <b>N, Z, A</b>.</>,
              a: <>N = neutronové číslo (počet neutronů), Z = protonové číslo (počet protonů), A = nukleonové číslo (A = N + Z).</>,
            },
            {
              q: <>Co jsou <b>izotopy</b> a proč mají stejné chemické vlastnosti?</>,
              a: (
                <>
                  Jádra se stejným počtem protonů (Z), ale různým počtem neutronů (N). Stejné chemické
                  vlastnosti mají proto, že mají <b>stejný elektronový obal</b> (stejné Z → stejně elektronů).
                </>
              ),
            },
            {
              q: <>Vysvětli pojem <b>radioaktivita</b>. Na čem (ne)závisí?</>,
              a: (
                <>
                  Samovolný přechod jádra do stabilnější konfigurace. <b>Nezávisí</b> na chemické vazbě
                  ani na tlaku/teplotě; <b>závisí</b> na kombinaci protonového a neutronového čísla.
                </>
              ),
            },
            {
              q: <>Jak je definovaná <b>aktivita</b> vzorku, jaká je jednotka a závisí na množství?</>,
              a: <>Počet rozpadů za jednotku času, jednotka <M>{'\\mathrm{Bq} = \\mathrm{s^{-1}}'}</M>. Na množství vzorku <b>závisí</b> (na tlaku/teplotě ne).</>,
            },
            {
              q: <>Vysvětli <b>poločas rozpadu</b> <M>{'T_{1/2}'}</M>.</>,
              a: <>Doba, za kterou se rozpadne <b>polovina</b> radioaktivních jader. Platí <M>{'T_{1/2} = \\tau\\ln 2'}</M> (τ = střední doba života).</>,
            },
            {
              q: <>Charakterizuj <b>jaderné síly</b>.</>,
              a: (
                <>
                  Přitažlivé, působí na <b>velmi krátkou</b> vzdálenost (rychle klesají), mají vlastnost{' '}
                  <b>nasycení</b> a jsou <b>nezávislé na náboji</b> (stejně p-p, n-n i n-p).
                </>
              ),
            },
            {
              q: <>Jak je definovaná <b>vazebná energie</b> jádra?</>,
              a: <>Energie, která se uvolní při vzniku jádra z jednotlivých nukleonů: <M>{'E_V = (Nm_n + Zm_p - M_x)c^2'}</M>.</>,
            },
            {
              q: <>Kdy může být <b>uvolněna jaderná energie</b>?</>,
              a: <>Při <b>syntéze</b> lehkých jader (malá Z) nebo při <b>štěpení</b> těžkých jader (velmi velká Z).</>,
            },
            {
              q: <>Jak je definovaná <b>dávka</b> a jaká je jednotka?</>,
              a: <><M>{'D = E_D/\\Delta m'}</M> (energie sdělená objemovému elementu / jeho hmotnost), jednotka <M>{'\\mathrm{Gy}'}</M> (gray).</>,
            },
          ]}
        />
      </Section>

      {/* ===================== NAMÁTKOVÝ ARCH (MIX) ===================== */}
      <Section title="Část 3 · Namátkový arch (mix přes celou fyziku)">
        <p>
          Takhle vypadá pracovní list, kde se otázky míchají napříč tématy — přesně jako na skutečném
          archu. Zkus odpovědět bez nápovědy.
        </p>
        <SelfCheck
          items={[
            {
              q: <>Musí mít dva makroskopické objekty <b>nenulový náboj</b>, aby mezi nimi působily elektrostatické síly?</>,
              a: (
                <>
                  Ne. Nabité těleso <b>zpolarizuje</b> i neutrální těleso (vznikne v něm indukovaný dipól) a
                  pak ho přitahuje. Příklad: nabité pravítko přitáhne kousky papíru.
                </>
              ),
            },
            {
              q: <>Skákající dokonale pružný míček v gravitačním poli — koná <b>harmonické</b> kmity?</>,
              a: (
                <>
                  <b>Ne.</b> Působící tíhová síla je <b>konstantní</b> (mg), není úměrná výchylce (<M>{'\\vec F = -k\\vec u'}</M>),
                  takže nejde o lineární harmonické kmity (jen o periodický pohyb).
                </>
              ),
            },
            {
              q: <>Po jaké křivce se pohybuje <b>těžiště</b> rotující činky hozené šikmo vzhůru?</>,
              a: <>Po <b>parabole</b> — těžiště se chová jako jeden hmotný bod ve vrhu, rotace na jeho dráhu nemá vliv.</>,
            },
            {
              q: <>Jakou frekvenci má <b>foton</b> vyzářený při přechodu elektronu z hladiny <M>{'E_1'}</M> na <M>{'E_2'}</M>?</>,
              a: <M>{'\\nu = (E_1 - E_2)/h'}</M>,
            },
            {
              q: <>Čím se vyznačují <b>polární molekuly</b>?</>,
              a: <>Mají <b>vlastní</b> (permanentní) elektrický dipólový moment.</>,
            },
            {
              q: <>V čem spočívá princip <ConceptLink id="hmotova-spektroskopie">hmotové spektroskopie</ConceptLink>?</>,
              a: <>Ionty se v magnetickém poli třídí podle poloměru kruhové dráhy <M>{'r = mv/(QB)'}</M> — tím se určí jejich hmotnost / izotopické složení.</>,
            },
            {
              q: <>Jaký je rozdíl mezi atomem v <b>základním</b> a <b>excitovaném</b> stavu?</>,
              a: <>Atom v základním stavu má <b>nejnižší</b> energii a je nejstabilnější; excitovaný má vyšší energii.</>,
            },
            {
              q: <>Jak je definovaná <b>expozice</b>?</>,
              a: <>Pro vzduch a fotonové záření <M>{'X = \\Delta Q/\\Delta m'}</M> (náboj iontů jedné polarity / hmotnost), jednotka <M>{'\\mathrm{C\\,kg^{-1}}'}</M>.</>,
            },
          ]}
        />
      </Section>

      <Callout kind="tip" title="Než půjdeš ke zkoušce">
        Projdi si ještě jednou <LessonLink lesson="6.1">přehled vzorečků ↗</LessonLink> a pojmy, u
        kterých sis nebyl/a jistý/á, najdeš rychle v <LessonLink lesson="6.3">rejstříku ↗</LessonLink>.
        Hodně štěstí! 🍀
      </Callout>
    </>
  )
}
