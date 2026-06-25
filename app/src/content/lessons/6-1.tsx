import type { ReactNode } from 'react'
import { Section, MB, Callout, ConceptLink, LessonLink } from '../../components/lesson/primitives'

export const id = '6.1'

/* Jeden řádek taháku: název, vzoreček (KaTeX blok), poznámka a proklik na
   lekci, kde je vysvětlený. `concept` cílí přímo na pojem (otevře v nové kartě),
   `lesson` je obyčejný odkaz na lekci. */
function F({
  name,
  math,
  note,
  concept,
  lesson,
}: {
  name: ReactNode
  math: string
  note?: ReactNode
  concept?: string
  lesson?: string
}) {
  return (
    <div className="frow">
      <div className="frow__head">
        <span className="frow__name">{name}</span>
        {concept ? (
          <ConceptLink id={concept}>vysvětlení ↗</ConceptLink>
        ) : lesson ? (
          <LessonLink lesson={lesson}>lekce {lesson} ↗</LessonLink>
        ) : null}
      </div>
      <MB>{math}</MB>
      {note && <div className="frow__note">{note}</div>}
    </div>
  )
}

export default function Lesson_6_1() {
  return (
    <>
      <p className="lead">
        Všechny vzorečky z učebnice na jednom místě — rozdělené po tématech. U každého je{' '}
        <b>proklik (v nové kartě)</b> na lekci, kde je vysvětlený, ať si rychle připomeneš, odkud se
        bere a kde jsou chytáky. Ber to jako <b>tahák před zkouškou</b>, ne jako náhradu výkladu.
      </p>

      <Callout kind="tip" title="Jak to číst">
        Vzoreček bez pochopení je u zkoušky k ničemu. Pokud u nějakého tápeš, klikni na „vysvětlení ↗"
        — otevře se ti lekce v nové kartě a tahle stránka ti zůstane otevřená.
      </Callout>

      {/* ============================ MECHANIKA ============================ */}
      <Section title="1 · Mechanika">
        <div className="fsheet">
          <F
            name="2. Newtonův zákon (pohybová rovnice)"
            math={'\\vec F = m\\vec a = \\frac{\\mathrm d\\vec p}{\\mathrm dt}'}
            note={<>Obecně přes <b>dp/dt</b>, ne jen F = ma.</>}
            concept="pohybova-rovnice"
          />
          <F name="Hybnost" math={'\\vec p = m\\vec v'} concept="hybnost" />
          <F
            name="Impulz síly"
            math={'\\vec I = \\vec F\\,\\Delta t = \\Delta \\vec p'}
            note={<>Impulz = změna hybnosti.</>}
            concept="impulz-sily"
          />
          <F
            name="Práce"
            math={'W = \\vec F \\cdot \\vec s = Fs\\cos\\alpha'}
            note={<>Skalár; závisí na úhlu mezi silou a dráhou.</>}
            concept="prace"
          />
          <F name="Kinetická energie" math={'E_k = \\tfrac12 m v^2'} concept="kineticka-energie" />
          <F
            name="Potenciální energie (tíhová)"
            math={'E_p = mgh'}
            concept="potencialni-energie"
          />
          <F
            name="Skalární součin vektorů"
            math={'\\vec a \\cdot \\vec b = ab\\cos\\alpha = a_x b_x + a_y b_y + a_z b_z'}
            concept="skalarni-soucin"
          />
          <F
            name="Zákon zachování mech. energie"
            math={'\\Delta E_k + \\Delta E_p = 0'}
            note={<>Platí v <b>konzervativním</b> poli.</>}
            concept="zachovani-energie"
          />
          <F
            name="Zákon zachování celkové energie"
            math={'\\Delta E_k + \\Delta E_p + \\Delta U = 0'}
            note={<>U = vnitřní energie (i tření).</>}
            lesson="1.4"
          />
          <F
            name="Těžiště soustavy"
            math={'\\vec R_T = \\frac{\\sum_i m_i \\vec r_i}{\\sum_i m_i}'}
            concept="teziste"
          />
          <F
            name="Rotace: pohybová rovnice"
            math={'\\vec\\Gamma = J\\vec\\alpha = \\frac{\\mathrm d\\vec L}{\\mathrm dt},\\quad \\vec L = J\\vec\\omega'}
            note={<>Γ = moment síly, J = moment setrvačnosti, L = moment hybnosti.</>}
            concept="moment-sily"
          />
          <F
            name="Okamžitá rychlost"
            math={'\\vec v = \\frac{\\mathrm d\\vec r}{\\mathrm dt} = \\lim_{\\Delta t\\to 0}\\frac{\\Delta \\vec r}{\\Delta t}'}
            concept="okamzita-rychlost"
          />
        </div>
      </Section>

      {/* ========================== FYZIKÁLNÍ POLE ========================== */}
      <Section title="2 · Fyzikální pole">
        <div className="fsheet">
          <F
            name="Newtonův gravitační zákon"
            math={'\\vec F = -\\kappa\\frac{mM}{r^2}\\frac{\\vec r}{r},\\quad \\kappa = 6{,}67\\cdot10^{-11}\\,\\mathrm{N\\,m^2\\,kg^{-2}}'}
            concept="gravitacni-zakon"
          />
          <F
            name="Coulombův zákon"
            math={'F = \\frac{1}{4\\pi\\varepsilon}\\frac{Q_1 Q_2}{r^2} = k\\frac{Q_1 Q_2}{r^2}'}
            note={<>k = 1/(4πε₀) ≈ 9·10⁹ N·m²·C⁻².</>}
            concept="coulombuv-zakon"
          />
          <F
            name="Intenzita el. pole"
            math={'\\vec E = \\frac{\\vec F_e}{q},\\quad E = k\\frac{Q}{r^2}'}
            note={<><b>Vektor</b> — síla na jednotkový náboj.</>}
            concept="intenzita-pole"
          />
          <F
            name="Potenciál"
            math={'\\varphi = \\frac{E_p}{q},\\quad \\varphi = k\\frac{Q}{r}'}
            note={<><b>Skalár</b> — energie na jednotkový náboj. Napětí U = φ_A − φ_B.</>}
            concept="potencial"
          />
          <F
            name="Vztah intenzity a potenciálu"
            math={'\\vec E = -\\,\\mathrm{grad}\\,\\varphi'}
            note={<>E míří ve směru <b>nejrychlejšího poklesu</b> φ (to mínus je chyták).</>}
            lesson="2.3"
          />
          <F
            name="Elektrický dipólový moment"
            math={'\\vec p = Q\\vec d'}
            note={<>d⃗ míří od − k +; ve vnějším poli se moment p stáčí do směru E.</>}
            concept="dipolovy-moment"
          />
          <F
            name="Gaussova věta"
            math={'\\Phi_E = \\oint \\vec E \\cdot \\mathrm d\\vec S = \\frac{Q}{\\varepsilon_0}'}
            note={<>Tok intenzity uzavřenou plochou = uzavřený náboj / ε₀.</>}
            concept="gaussova-veta"
          />
          <F
            name="Biot–Savartův zákon"
            math={'\\mathrm d\\vec B = \\frac{\\mu_0}{4\\pi}\\frac{I\\,\\mathrm d\\vec l \\times \\vec r}{r^3}'}
            concept="biot-savart"
          />
          <F
            name="Ampérův zákon"
            math={'\\oint \\vec B \\cdot \\mathrm d\\vec l = \\mu_0 I'}
            concept="amperuv-zakon"
          />
          <F name="Elektrický proud" math={'I = \\frac{\\mathrm dQ}{\\mathrm dt}'} concept="elektricky-proud" />
          <F
            name="Lorentzova síla"
            math={'\\vec F = q(\\vec E + \\vec v \\times \\vec B)'}
            note={<>Magnetická část q·v×B je vždy <b>kolmá</b> na rychlost.</>}
            concept="lorentzova-sila"
          />
          <F
            name="Hmotová spektroskopie (poloměr)"
            math={'r = \\frac{mv}{QB}'}
            concept="hmotova-spektroskopie"
          />
          <F name="Magnetický tok" math={'\\Phi = BS\\cos\\alpha'} concept="magneticky-tok" />
          <F
            name="Faradayův zákon indukce"
            math={'\\varepsilon_i = -\\frac{\\mathrm d\\Phi}{\\mathrm dt}'}
            note={<>Indukované napětí = záporně vzatá změna toku.</>}
            concept="faraduv-zakon"
          />
        </div>
      </Section>

      {/* ========================== KMITY A VLNĚNÍ ========================== */}
      <Section title="3 · Kmity a vlnění">
        <div className="fsheet">
          <F
            name="Síla harmonického oscilátoru"
            math={'\\vec F = -k\\vec u'}
            note={<>Síla úměrná výchylce a míří proti ní.</>}
            concept="harmonicky-oscilator"
          />
          <F
            name="Úhlová frekvence, perioda"
            math={'\\omega = 2\\pi f = \\frac{2\\pi}{T},\\quad f = \\frac1T'}
            lesson="3.1"
          />
          <F
            name="Výchylka harmonického kmitu"
            math={'u = A\\sin(\\omega t + \\varphi_0)'}
            lesson="3.1"
          />
          <F
            name="Vlastní frekvence (pružina, kyvadlo)"
            math={'\\omega = \\sqrt{\\frac{k}{m}},\\qquad \\omega = \\sqrt{\\frac{g}{l}}'}
            lesson="3.1"
          />
          <F name="Energie oscilátoru" math={'E = \\tfrac12 k A^2'} lesson="3.1" />
          <F
            name="Vlnová délka"
            math={'\\lambda = vT = \\frac{v}{f}'}
            concept="vlnova-delka"
          />
          <F
            name="Vlnové číslo"
            math={'|\\vec k| = \\frac{2\\pi}{\\lambda}'}
            lesson="3.4"
          />
          <F
            name="Postupná vlna"
            math={'u(x,t) = A\\sin(\\omega t - kx)'}
            lesson="3.4"
          />
          <F
            name="Fázová a grupová rychlost"
            math={'v_f = \\frac{\\omega}{k} = \\lambda f'}
            note={<><ConceptLink id="grupova-rychlost">Grupová rychlost</ConceptLink> = rychlost přenosu energie (vlnového klubka).</>}
            concept="fazova-rychlost"
          />
          <F
            name="Interference (dráhový rozdíl)"
            math={'\\Delta = k\\lambda \\;(\\text{max}),\\qquad \\Delta = (2k+1)\\tfrac{\\lambda}{2}\\;(\\text{min})'}
            note={<>Stejná fáze = zesílení, opačná fáze = vyrušení.</>}
            concept="interference"
          />
          <F
            name="Dopplerův jev"
            math={"f' = f\\,\\frac{v \\pm v_o}{v \\mp v_z}"}
            note={<>v_o = rychlost pozorovatele, v_z = rychlost zdroje.</>}
            concept="doppleruv-jev"
          />
        </div>
      </Section>

      {/* ========================== KVANTOVÁ FYZIKA ========================== */}
      <Section title="4 · Kvantová fyzika">
        <div className="fsheet">
          <F
            name="Energie a hybnost fotonu"
            math={'E = h\\nu = \\frac{hc}{\\lambda},\\qquad p = \\frac{h}{\\lambda}'}
            note={<>h = 6,626·10⁻³⁴ J·s. Klidová hmotnost fotonu je nulová.</>}
            concept="foton"
          />
          <F
            name="de Broglieho vlnová délka"
            math={'\\lambda = \\frac{h}{p}'}
            note={<>Vlnová délka přiřazená částici s hybností p.</>}
            concept="de-broglie"
          />
          <F
            name="Frekvence přechodu (foton z atomu)"
            math={'\\nu = \\frac{E_1 - E_2}{h}'}
            lesson="4.1"
          />
          <F
            name="Wienův posunovací zákon"
            math={'\\lambda_{max}\\,T = b'}
            note={<>Maximum vyzařování se s teplotou posouvá ke kratším λ.</>}
            concept="planckuv-vyzarovaci-zakon"
          />
          <F
            name="Vnější fotoelektrický jev (Einstein)"
            math={'h\\nu = W_v + \\tfrac12 m v_{max}^2'}
            note={<>W_v = výstupní práce; energie elektronu nezávisí na intenzitě, jen na frekvenci.</>}
            concept="fotoefekt"
          />
          <F
            name="Comptonův jev (posun vlnové délky)"
            math={"\\lambda' - \\lambda = \\frac{h}{m_0 c}(1 - \\cos\\varphi)"}
            concept="comptonuv-jev"
          />
          <F
            name="Heisenbergovy relace neurčitosti"
            math={'\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2},\\qquad \\hbar = \\frac{h}{2\\pi}'}
            note={<>Neredukovatelné minimum — důsledek vlnové povahy částic.</>}
            concept="heisenberg"
          />
          <F
            name="Vlnová funkce"
            math={'|\\psi|^2'}
            note={<>= hustota pravděpodobnosti nalezení částice v daném místě a čase.</>}
            concept="vlnova-funkce"
          />
        </div>
      </Section>

      {/* ===================== JADERNÁ A ATOMOVÁ FYZIKA ===================== */}
      <Section title="5 · Jaderná a atomová fyzika">
        <div className="fsheet">
          <F
            name="Nukleonové číslo"
            math={'A = N + Z'}
            note={<>A = počet nukleonů, Z = protony, N = neutrony.</>}
            concept="nukleony"
          />
          <F
            name="Hmotnostní úbytek"
            math={'\\Delta m = N m_n + Z m_p - M_x'}
            lesson="5.2"
          />
          <F
            name="Vazebná energie jádra"
            math={'E_V = (N m_n + Z m_p - M_x)c^2 \\approx (A m_u - M_x)c^2'}
            concept="vazebna-energie"
          />
          <F name="Ekvivalence hmoty a energie" math={'E = mc^2'} lesson="5.2" />
          <F
            name="Zákon radioaktivního rozpadu"
            math={'N(t) = N_0\\,e^{-\\lambda t}'}
            note={<>λ = rozpadová konstanta (pravděpodobnost rozpadu za čas).</>}
            concept="radioaktivita"
          />
          <F
            name="Aktivita vzorku"
            math={'A = \\lambda N = -\\frac{\\mathrm dN}{\\mathrm dt}\\;[\\mathrm{Bq}]'}
            note={<>Závisí na množství vzorku, ne na tlaku/teplotě.</>}
            concept="aktivita"
          />
          <F
            name="Poločas a doba života"
            math={'T_{1/2} = \\tau\\ln 2 = \\frac{\\ln 2}{\\lambda},\\qquad \\tau = \\frac1\\lambda'}
            concept="polocas-rozpadu"
          />
          <F
            name="Rozpad α"
            math={'{}^{A}_{Z}X \\to {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\mathrm{He}'}
            concept="alfa-rozpad"
          />
          <F
            name="Rozpad β"
            math={'\\beta^-:\\; Z \\to Z+1,\\qquad \\beta^+:\\; Z \\to Z-1'}
            note={<>γ rozpad: jádro se neposouvá, jen vyzáří foton.</>}
            concept="beta-rozpad"
          />
          <F
            name="Dávka záření"
            math={'D = \\frac{E_D}{\\Delta m}\\;[\\mathrm{Gy}]'}
            concept="davka"
          />
          <F
            name="Dávkový ekvivalent"
            math={'H = D\\cdot Q\\;[\\mathrm{Sv}]'}
            note={<>Q = jakostní faktor daného záření.</>}
            lesson="5.6"
          />
          <F
            name="Kerma"
            math={'K = \\frac{E_K}{\\Delta m}\\;[\\mathrm{Gy}]'}
            concept="kerma"
          />
          <F
            name="Expozice"
            math={'X = \\frac{\\Delta Q}{\\Delta m}\\;[\\mathrm{C\\,kg^{-1}}]'}
            note={<>Pro vzduch a fotonové záření.</>}
            lesson="5.6"
          />
        </div>
      </Section>

      <Callout kind="pozor" title="Pár jednotek, ať je nepopleteš">
        <ul>
          <li>Síla <b>N</b>, energie/práce <b>J</b>, výkon <b>W</b>.</li>
          <li>Intenzita E: <b>N·C⁻¹ = V·m⁻¹</b>; potenciál/napětí <b>V = J·C⁻¹</b>.</li>
          <li>Náboj <b>C</b>, proud <b>A</b>, magnetická indukce <b>T</b> (tesla), tok <b>Wb</b>.</li>
          <li>Frekvence <b>Hz = s⁻¹</b>; aktivita <b>Bq = s⁻¹</b>; dávka/kerma <b>Gy</b>, ekvivalent <b>Sv</b>.</li>
        </ul>
      </Callout>
    </>
  )
}
