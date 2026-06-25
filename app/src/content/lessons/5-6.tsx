import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '5.6'

/* Nové pojmy, které tahle lekce poprvé vykládá (pro pozdější wiki-proklik). */
export const provides = {
  'davka': { lesson: '5.6', label: 'dávka', short: 'D = E_D/Δm [Gy] — pohlcená energie záření na jednotku hmotnosti.' },
  'kerma': { lesson: '5.6', label: 'kerma', short: 'K = E_K/Δm [Gy] — energie předaná nabitým částicím nepřímo ionizujícím zářením.' },
  'davkovy-ekvivalent': { lesson: '5.6', label: 'dávkový ekvivalent', short: 'Dávka × jakostní faktor [Sv] — zohledňuje vliv na lidské zdraví.' },
  'expozice': { lesson: '5.6', label: 'expozice', short: 'X = ΔQ/Δm [C/kg] — náboj iontů vzniklých ve vzduchu na jednotku hmotnosti.' },
  'primo-ionizujici': { lesson: '5.6', label: 'přímo ionizující záření', short: 'Nabité částice (e, p, α), které samy ionizují prostředí.' },
  'neprimo-ionizujici': { lesson: '5.6', label: 'nepřímo ionizující záření', short: 'Nenabité částice (fotony, neutrony), které ionizují přes sekundární nabité částice.' },
  'cerenkovovo-zareni': { lesson: '5.6', label: 'Čerenkovovo záření', short: 'Světlo vzniklé, když nabitá částice letí prostředím rychleji než světlo v něm (analogie aerodynamického třesku).' },
}

const ACCENT = '#34d399' // akcent tématu (jaderná fyzika)
const TXT = '#e8ecf8'
const MUTED = '#7c89ad'
const PHOTON = '#f59e0b' // foton / nenabitá částice
const CHARGED = '#fb7185' // nabitá částice
const CONE = '#38bdf8' // kužel záření

/* Šipka pro SVG (marker). */
function Defs({ color, id: mid }: { color: string; id: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

export default function Lesson_5_6() {
  return (
    <>
      <p className="lead">
        Tahle lekce je o tom, jak změřit, „kolik záření" něco schytalo a co to udělá. U zkoušky se
        nejvíc ztrácí body na <Term>jednotkách</Term> a na rozdílu mezi čtyřmi veličinami. Naučíš se
        je rozlišit — pak to máš za pár bodů jisté.
      </p>

      <Section title="Na čem vůbec záleží účinek záření">
        <p>
          Než vzorečky: účinek záření na látku (třeba na tkáň) <b>není</b> dán jen tím, „jak silně
          to svítí". Závisí na třech věcech:
        </p>
        <ul>
          <li><b>počtu</b> a <b>typu</b> částic, které interagují (dopadajících i těch v látce),</li>
          <li><b>energii</b> částic (kolik energie se předá),</li>
          <li><b>materiálu</b>, do kterého to dopadá.</li>
        </ul>
        <p>
          A jeden chyták hned na začátek: ze všech interakcí, které by částice mohla mít, je{' '}
          <b>jediná zanedbatelná = gravitační</b>. Gravitace mezi jednotlivými částicemi je tak slabá,
          že se s ní vůbec nepočítá.
        </p>
      </Section>

      <Section title="Čtyři veličiny — hlavní jádro lekce">
        <p>
          Tohle je to nejdůležitější. Všechny čtyři veličiny jsou „něco děleno hmotností", ale měří
          něco jiného a mají jiné jednotky. Drž se tabulky níž.
        </p>

        <p>
          <Term>Dávka</Term> <M>{'D'}</M> = pohlcená energie záření na jednotku hmotnosti. To je „kolik
          energie ten kus látky pohltil":
        </p>
        <MB>{'D = \\frac{E_D}{\\Delta m}\\qquad [\\mathrm{Gy}] \\;=\\; \\mathrm{J\\,kg^{-1}}'}</MB>
        <p>
          Jednotka je <b>gray (Gy)</b>. Dávka je definovaná pro <b>libovolné záření</b> i{' '}
          <b>libovolný materiál</b> — proto je to ta nejuniverzálnější.
        </p>

        <p>
          <Term>Kerma</Term> <M>{'K'}</M> (z angl. <i>kinetic energy released per unit mass</i>) = energie,
          kterou <b>nepřímo ionizující</b> záření předá při první srážce nabitým částicím (elektronům,
          protonům), opět na jednotku hmotnosti:
        </p>
        <MB>{'K = \\frac{E_K}{\\Delta m}\\qquad [\\mathrm{Gy}]'}</MB>
        <p>
          Stejná jednotka jako dávka (<b>Gy</b>!), ale kerma je <b>jen pro nepřímo ionizující záření</b>
          {' '}(fotony, neutrony). Za rovnováhy sekundárních částic platí <M>{'K = D'}</M>.
        </p>

        <p>
          <Term>Dávkový ekvivalent</Term> <M>{'H'}</M> = dávka přepočtená na to, jak je nebezpečná pro{' '}
          <b>člověka</b>. Vynásobí se <b>jakostním faktorem</b> (a prostorovou distribucí) — alfa
          záření je při stejné dávce nebezpečnější než třeba gama:
        </p>
        <MB>{'H = D \\cdot Q \\cdot \\dots\\qquad [\\mathrm{Sv}]'}</MB>
        <p>
          Jednotka je <b>sievert (Sv)</b>. Tohle je veličina z radiační ochrany — „jak moc to škodí
          zdraví".
        </p>

        <p>
          <Term>Expozice</Term> <M>{'X'}</M> = náboj iontů jedné polarity, které <b>fotony vytvoří ve
          vzduchu</b>, na jednotku hmotnosti:
        </p>
        <MB>{'X = \\frac{\\Delta Q}{\\Delta m}\\qquad [\\mathrm{C\\,kg^{-1}}]\\;(\\text{starší jednotka rentgen R})'}</MB>
        <p>
          Pozor: expozice se měří v <b>coulombech na kilogram</b>, ne v grayech! A je definovaná{' '}
          <b>jen pro fotony ve vzduchu</b> (měří ionizaci, ne pohlcenou energii).
        </p>

        <Figure caption="Čtyři veličiny na jeden pohled. Stejná barva = stejná jednotka. Dávka i kerma sdílejí gray (Gy).">
          <svg viewBox="0 0 460 210" className="svg-fig">
            <rect x="14" y="14" width="210" height="84" rx="10" fill="none" stroke={ACCENT} strokeWidth="2" />
            <text x="119" y="38" fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700">Dávka D = E_D / Δm</text>
            <text x="119" y="60" fill={TXT} fontSize="13" textAnchor="middle">pohlcená energie</text>
            <text x="119" y="84" fill={ACCENT} fontSize="16" textAnchor="middle" fontWeight="700">[ Gy ]</text>

            <rect x="236" y="14" width="210" height="84" rx="10" fill="none" stroke={ACCENT} strokeWidth="2" />
            <text x="341" y="38" fill={ACCENT} fontSize="15" textAnchor="middle" fontWeight="700">Kerma K = E_K / Δm</text>
            <text x="341" y="60" fill={TXT} fontSize="13" textAnchor="middle">jen nepřímo ioniz.</text>
            <text x="341" y="84" fill={ACCENT} fontSize="16" textAnchor="middle" fontWeight="700">[ Gy ]</text>

            <rect x="14" y="112" width="210" height="84" rx="10" fill="none" stroke={CHARGED} strokeWidth="2" />
            <text x="119" y="136" fill={CHARGED} fontSize="15" textAnchor="middle" fontWeight="700">Dávkový ekvivalent H</text>
            <text x="119" y="158" fill={TXT} fontSize="13" textAnchor="middle">vliv na zdraví</text>
            <text x="119" y="182" fill={CHARGED} fontSize="16" textAnchor="middle" fontWeight="700">[ Sv ]</text>

            <rect x="236" y="112" width="210" height="84" rx="10" fill="none" stroke={PHOTON} strokeWidth="2" />
            <text x="341" y="136" fill={PHOTON} fontSize="15" textAnchor="middle" fontWeight="700">Expozice X = ΔQ / Δm</text>
            <text x="341" y="158" fill={TXT} fontSize="13" textAnchor="middle">ionizace ve vzduchu</text>
            <text x="341" y="182" fill={PHOTON} fontSize="16" textAnchor="middle" fontWeight="700">[ C/kg ]</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Přímo × nepřímo ionizující záření">
        <p>
          Ionizace = oddělení náboje (vyražení elektronu z atomu). Podle toho, jak částice ionizuje,
          rozlišíme dva druhy záření — a tohle souvisí přímo s kermou.
        </p>
        <ul>
          <li>
            <Term>Přímo ionizující záření</Term> = <b>nabité</b> částice (elektrony, pozitrony,
            protony, částice α). Mají náboj, takže <b>samy</b> ionizují prostředí — postupně ztrácejí
            energii, jak letí.
          </li>
          <li>
            <Term>Nepřímo ionizující záření</Term> = <b>nenabité</b> částice (fotony γ/RTG, neutrony).
            Samy neionizují, ale při srážce <b>uvolní sekundární nabité částice</b>, a teprve ty
            ionizují. <b>Kerma je právě pro tenhle druh záření.</b>
          </li>
        </ul>

        <p>Klikni si, jak to probíhá u nepřímo ionizujícího záření (foton):</p>

        <StepFigure
          title="Jak nepřímo ionizující záření ionizuje látku"
          steps={[
            {
              label: 'foton letí',
              caption: <>Přilétá <b>nenabitá</b> částice (foton). Sama o sobě atomy neionizuje — proto „nepřímo".</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs color={PHOTON} id="ar-p1" />
                  <circle cx="330" cy="85" r="20" fill="none" stroke={MUTED} strokeWidth="2" />
                  <circle cx="330" cy="85" r="5" fill={MUTED} />
                  <text x="330" y="130" fill={MUTED} fontSize="13" textAnchor="middle">atom v látce</text>
                  <line x1="40" y1="85" x2="290" y2="85" stroke={PHOTON} strokeWidth="3" strokeDasharray="2 6" markerEnd="url(#ar-p1)" />
                  <text x="150" y="70" fill={PHOTON} fontSize="14" textAnchor="middle">foton γ (nenabitý)</text>
                </svg>
              ),
            },
            {
              label: 'srážka',
              caption: <>Foton se srazí s atomem a <b>vyrazí z něj elektron</b> — předá mu kinetickou energii. To je ta energie, kterou počítá <b>kerma</b>.</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs color={CHARGED} id="ar-p2" />
                  <circle cx="240" cy="85" r="20" fill="none" stroke={MUTED} strokeWidth="2" />
                  <circle cx="240" cy="85" r="5" fill={MUTED} />
                  <line x1="40" y1="85" x2="212" y2="85" stroke={PHOTON} strokeWidth="3" strokeDasharray="2 6" />
                  <text x="120" y="70" fill={PHOTON} fontSize="13" textAnchor="middle">foton</text>
                  <line x1="258" y1="78" x2="380" y2="45" stroke={CHARGED} strokeWidth="3" markerEnd="url(#ar-p2)" />
                  <circle cx="258" cy="78" r="6" fill={CHARGED} />
                  <text x="350" y="35" fill={CHARGED} fontSize="14" textAnchor="middle">vyražený e⁻</text>
                  <text x="240" y="135" fill={MUTED} fontSize="12" textAnchor="middle">předaná E → kerma</text>
                </svg>
              ),
            },
            {
              label: 'sekundární ionizace',
              caption: <>Vyražený <b>nabitý</b> elektron je teď <b>přímo ionizující</b> — letí dál a po cestě vyráží další elektrony. Pohlcená energie v látce = <b>dávka</b>.</>,
              content: (
                <svg viewBox="0 0 440 170" className="svg-fig">
                  <Defs color={CHARGED} id="ar-p3" />
                  <line x1="40" y1="100" x2="380" y2="60" stroke={CHARGED} strokeWidth="3" markerEnd="url(#ar-p3)" />
                  <circle cx="40" cy="100" r="6" fill={CHARGED} />
                  <text x="120" y="90" fill={CHARGED} fontSize="13" textAnchor="middle">e⁻ (přímo ionizující)</text>
                  <g stroke={ACCENT} strokeWidth="2">
                    <line x1="150" y1="92" x2="160" y2="125" />
                    <line x1="240" y1="84" x2="252" y2="118" />
                    <line x1="320" y1="75" x2="332" y2="110" />
                  </g>
                  <text x="240" y="150" fill={ACCENT} fontSize="13" textAnchor="middle">další ionizace → pohlcená energie = dávka D</text>
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Typy účinků: dočasné × trvalé">
        <p>Co záření v látce nakonec napáchá, dělíme na dvě skupiny:</p>
        <ul>
          <li>
            <b>Dočasné účinky</b> — všechno se zase „srovná": ionty <b>rekombinují</b> (spojí se zpět),
            excitované atomy <b>deexcitují</b> (vrátí se do základního stavu). Žádná trvalá změna.
          </li>
          <li>
            <b>Trvalé účinky</b> — něco zůstane změněné: <b>tepelné</b> (zahřátí), <b>excitace</b> v
            metastabilních hladinách (u pevných látek), <b>chemické</b> (rozbití vazeb), <b>jaderné</b>
            {' '}a <b>biologické</b> (poškození tkáně — bez jednoduchého vztahu).
          </li>
        </ul>
      </Section>

      <Section title="Bonus: Čerenkovovo záření">
        <p>
          Oblíbená bonusová otázka. <Term>Čerenkovovo záření</Term> je to namodralé světlo, které
          svítí v bazénech jaderných reaktorů. Vzniká, když <b>nabitá částice letí prostředím rychleji,
          než je rychlost světla v tom prostředí</b> <M>{'(v > c_p)'}</M>.
        </p>
        <Callout kind="tip" title="Nejlepší analogie (řekni ji u zkoušky)">
          Je to úplně stejné jako <b>aerodynamický třesk</b> nadzvukového letadla. Letadlo letí
          rychleji než zvuk, takže zvukové vlny nestihnou „utéct" dopředu a nahromadí se za ním do
          kužele. U Čerenkova jsou to elektromagnetické (světelné) vlny za nabitou částicí.
        </Callout>
        <p>
          Pozor na chyták: <b>neporušuje to teorii relativity</b>. Rychlost světla ve <i>vakuu</i>{' '}
          <M>{'c'}</M> nikdo nepřekročí — ale v <i>prostředí</i> (voda, sklo) se světlo šíří pomaleji
          <M>{'(c_p < c)'}</M>, a tuhle pomalejší rychlost částice překonat může. Využívá se k{' '}
          <b>detekci vysokoenergetických částic</b> (neutrina, urychlovače).
        </p>

        <Figure caption="Nabitá částice letí rychleji než světlo v prostředí → vlny se nestihnou dostat dopředu a vytvoří charakteristický kužel záření za částicí.">
          <svg viewBox="0 0 440 180" className="svg-fig">
            <Defs color={CHARGED} id="ar-c" />
            {/* kužel */}
            <path d="M300,90 L120,30 L120,150 Z" fill={CONE} fillOpacity="0.12" stroke={CONE} strokeWidth="1.5" />
            {/* vlnoplochy za částicí */}
            <g stroke={CONE} strokeWidth="1.5" fill="none" opacity="0.8">
              <circle cx="150" cy="90" r="55" />
              <circle cx="210" cy="90" r="40" />
              <circle cx="260" cy="90" r="24" />
            </g>
            {/* trajektorie a částice */}
            <line x1="60" y1="90" x2="360" y2="90" stroke={MUTED} strokeWidth="1" strokeDasharray="4 4" />
            <line x1="290" y1="90" x2="360" y2="90" stroke={CHARGED} strokeWidth="3" markerEnd="url(#ar-c)" />
            <circle cx="300" cy="90" r="7" fill={CHARGED} />
            <text x="345" y="78" fill={CHARGED} fontSize="14" textAnchor="middle">v &gt; c_p</text>
            <text x="180" y="170" fill={CONE} fontSize="13" textAnchor="middle">kužel Čerenkovova záření</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (tady se ztrácejí body)">
        <ul>
          <li>
            <b>Nepleť jednotky:</b> dávka i kerma jsou v <b>Gy</b> (gray), dávkový ekvivalent v{' '}
            <b>Sv</b> (sievert), expozice v <b>C/kg</b> (coulomb na kilogram).
          </li>
          <li><b>Kerma je jen pro nepřímo ionizující záření</b> (fotony, neutrony) — ne pro nabité částice.</li>
          <li>Jediná interakce, kterou <b>není nutné uvažovat</b>, je <b>gravitační</b>.</li>
          <li>
            Čerenkov = částice letí prostředím <b>rychleji než světlo v daném prostředí</b>{' '}
            <M>{'(v>c_p)'}</M>, ne rychleji než světlo ve vakuu. Teorii relativity to neporušuje.
          </li>
          <li>Expozice se týká <b>fotonů ve vzduchu</b> a měří <b>náboj</b> (ionizaci), ne pohlcenou energii.</li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat dávku D = E_D/Δm a uvést jednotku [Gy].',
          'Rozlišit dávku, kermu (Gy), dávkový ekvivalent (Sv) a expozici (C/kg).',
          'Vědět, že kerma je pro nepřímo ionizující záření.',
          'Rozlišit přímo (nabité) a nepřímo (nenabité) ionizující záření.',
          'Říct, na čem závisí účinek záření (počet, typ, energie částic, materiál).',
          'Bonus: vysvětlit Čerenkovovo záření (v > c_p, analogie nadzvukového třesku).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Jak je definovaná dávka a v jaké jednotce se udává?',
            a: <>Dávka <M>{'D = E_D/\\Delta m'}</M> = pohlcená energie záření na jednotku hmotnosti. Jednotka <b>gray</b> <M>{'[\\mathrm{Gy}] = \\mathrm{J\\,kg^{-1}}'}</M>. Je definovaná pro libovolné záření i materiál.</>,
          },
          {
            q: 'Čím se liší kerma od dávky a co mají společného?',
            a: <>Mají <b>stejnou jednotku</b> (Gy) i tvar (energie/hmotnost). Ale <b>kerma</b> <M>{'K=E_K/\\Delta m'}</M> je jen pro <b>nepřímo ionizující záření</b> a počítá energii předanou nabitým částicím při první srážce. Za rovnováhy sekundárních částic <M>{'K=D'}</M>.</>,
          },
          {
            q: 'Jaký je rozdíl mezi přímo a nepřímo ionizujícím zářením?',
            a: <><b>Přímo</b> ionizující = <b>nabité</b> částice (e, p, α), které samy ionizují. <b>Nepřímo</b> ionizující = <b>nenabité</b> částice (fotony, neutrony), které ionizují až přes uvolněné sekundární nabité částice.</>,
          },
          {
            q: 'Co je Čerenkovovo záření a kdy vzniká?',
            a: <>Světlo (EM záření), které vznikne, když nabitá částice letí prostředím <b>rychleji než světlo v tom prostředí</b> <M>{'(v>c_p)'}</M>. Vlny se nahromadí do kužele za částicí — analogie nadzvukového třesku. Teorii relativity to neporušuje (rychlost ve vakuu <M>{'c'}</M> se nepřekročí).</>,
          },
        ]}
      />
    </>
  )
}
