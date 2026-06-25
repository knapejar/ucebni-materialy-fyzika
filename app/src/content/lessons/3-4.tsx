import { Section, M, MB, Term, Concept, Figure, StepScene, APath, ACircle, ALine, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '3.4'

/* Pojmy, které tahle lekce poprvé zavádí (pro pozdější proklikávání). */
export const provides = {
  'vlneni': { lesson: '3.4', label: 'vlnění', short: 'Šíření kmitů pružnými vazbami; přenáší energii, ne látku.' },
  'vlnova-delka': { lesson: '3.4', label: 'vlnová délka', short: 'λ — vzdálenost dvou nejbližších bodů se stejnou fází; λ = w·T.' },
  'vlnoplocha': { lesson: '3.4', label: 'vlnoplocha', short: 'Plocha (souhrn bodů), kde má vlnění v daném okamžiku stejnou fázi.' },
}

const TXT = '#e8ecf8'
const ACC = '#a78bfa'      // akcent tématu (fialová)
const GRID = '#3a4566'
const HOT = '#fb7185'      // zvýraznění (λ, směr)
const DIM = '#9aa6c4'

/* Šipka pro SVG. */
function Defs({ color = ACC, id: mid = 'ar' }: { color?: string; id?: string }) {
  return (
    <defs>
      <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
      </marker>
    </defs>
  )
}

/* Sinusovka jako řetězec d pro <path>. y0 = osa, amp = amplituda,
   x0..x1 = rozsah, phase posune vlnu doprava (animace „postupu"). */
function sineD(x0: number, x1: number, y0: number, amp: number, wavelen: number, phase: number) {
  const pts: string[] = []
  for (let x = x0; x <= x1; x += 4) {
    const y = y0 - amp * Math.sin((2 * Math.PI * (x - x0)) / wavelen - phase)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return 'M' + pts.join(' L')
}

export default function Lesson_3_4() {
  return (
    <>
      <p className="lead">
        Vlnění je vlastně „kmitání, které se rozběhlo do okolí". U zkoušky se po tobě chce: umět{' '}
        <b>nadefinovat veličiny</b> (<M>{'\\lambda, f, T, \\omega, k'}</M>) a jejich vztahy, a hlavně{' '}
        <b>rozlišit příčné a podélné vlnění</b> s příkladem. To poslední je oblíbený chyták — pojďme
        si ho zabetonovat.
      </p>

      <Section title="Co je vlnění (a proč „pružné vazby“)">
        <p>
          <Term id="vlneni">Vlnění</Term> je <b>šíření <Concept id="kmit">kmitů</Concept></b> prostředím. Jeden bod se rozkmitá a protože je
          se sousedy svázaný <Term>pružnými vazbami</Term> (jako pružinky mezi částicemi), strhne
          postupně k pohybu i okolí. Tak se rozruch šíří dál a dál.
        </p>
        <p>
          Klíčová věta do zkoušky: <b>vlnění přenáší energii, ale ne látku</b>. Korek na vodě jen
          poskakuje nahoru–dolů, neplave s vlnou pryč — voda (látka) zůstává, putuje jen energie.
        </p>
        <Callout kind="tip" title="Jak si to představit">
          Napnutá struna: cukneš jedním koncem kolmo nahoru, a po struně se rozběhne „hrb". Každý
          kousek struny jen kmitá na místě, ale tvar (vlna) postupuje dál.
        </Callout>
      </Section>

      <Section title="Vlnění postupuje — proklikej si to">
        <p>
          Sleduj jeden vyznačený bod (<span style={{ color: HOT }}>•</span>). <b>On sám nikam
          necestuje</b> — jen kmitá nahoru a dolů. Cestuje jen tvar vlny. Klikej <b>Další →</b>:
        </p>

        <StepScene
          title="Postup vlny po struně (příčné vlnění)"
          viewBox="0 0 640 200"
          captions={[
            <><b>t = 0.</b> Začínáme: vlna na struně. Sleduj vyznačený bod <span style={{ color: HOT }}>•</span> na pevném <i>x</i> — teď je dole.</>,
            <><b>t = T/4.</b> Vlna popolezla doprava. Náš bod <span style={{ color: HOT }}>•</span> se zvedl — ale zůstal na svém <i>x</i>, posunul se jen svisle.</>,
            <><b>t = T/2.</b> Vlna postoupila dál; bod se vyhoupl až nahoru. Vzdálenost mezi dvěma sousedními „hrby" je <span style={{ color: HOT }}>vlnová délka λ</span>.</>,
            <><b>t = T.</b> Za jednu <Concept id="perioda">periodu</Concept> <M>{'T'}</M> vlna ujede přesně jednu <span style={{ color: HOT }}>λ</span> a bod se vrátí, kde začal. Odtud <M>{'\\lambda = w\\,T'}</M> (<M>{'w'}</M> = rychlost šíření).</>,
          ]}
        >
          <Defs color={HOT} id="arW" />
          {/* osa x = rovnovážná poloha (statická) */}
          <ALine x1={40} y1={90} x2={596} y2={90} stroke={GRID} strokeWidth={1.5} strokeDasharray="5,5" />
          {/* šipka směru šíření vpravo (statická) */}
          <ALine x1={566} y1={90} x2={600} y2={90} stroke={DIM} strokeWidth={2} markerEnd="url(#arW)" />
          <AText x={600} y={80} fill={DIM} fontSize="12" textAnchor="end">směr šíření</AText>
          {/* vlna — jedna křivka, jejíž tvar se mezi kroky plynule posouvá doprava */}
          <APath
            d={[
              sineD(40, 600, 90, 38, 150, 0),
              sineD(40, 600, 90, 38, 150, Math.PI / 2),
              sineD(40, 600, 90, 38, 150, Math.PI),
              sineD(40, 600, 90, 38, 150, 2 * Math.PI),
            ]}
            fill="none"
            stroke={ACC}
            strokeWidth={2.8}
          />
          {/* svislá spojnice sledovaného bodu k ose */}
          <ALine x1={150} y1={90} x2={150} y2={[127.8, 86, 52.2, 127.8]} stroke={HOT} strokeWidth={1.5} strokeDasharray="3,3" />
          {/* sledovaný bod — pevné x = 150, mění se jen y */}
          <ACircle cx={150} cy={[127.8, 86, 52.2, 127.8]} r={7} fill={HOT} />
          {/* vyznačení λ mezi dvěma sousedními hrby (jen kroky 3 a 4) */}
          <ALine x1={[153, 153, 153, 228]} y1={170} x2={[303, 303, 303, 378]} y2={170}
                 stroke={HOT} strokeWidth={2} markerStart="url(#arW)" markerEnd="url(#arW)"
                 opacity={[0, 0, 1, 1]} />
          <AText x={[228, 228, 228, 303]} y={188} fill={HOT} fontSize="15" fontStyle="italic" textAnchor="middle" opacity={[0, 0, 1, 1]}>λ</AText>
        </StepScene>
      </Section>

      <Section title="Veličiny vlnění a jejich vztahy (přesně co psát u zkoušky)">
        <p>Vlnění má dvojí „opakování": v <b>čase</b> (jak rychle bod kmitá) a v <b>prostoru</b> (jak hustě jsou vlny za sebou).</p>

        <p><b>Časové veličiny</b> (popisují kmitání jednoho bodu):</p>
        <ul>
          <li><Term>Perioda <M>{'T'}</M></Term> [s] — doba jednoho kmitu (než se děj zopakuje).</li>
          <li><Term>Frekvence <M>{'f'}</M></Term> [Hz] — kolik kmitů za sekundu. Je převrácená k periodě:
            <MB>{'f = \\frac{1}{T}'}</MB>
          </li>
          <li><Term>Úhlová frekvence <M>{'\\omega'}</M></Term> [rad/s] — „rychlost otáčení fáze":
            <MB>{'\\omega = \\frac{2\\pi}{T} = 2\\pi f'}</MB>
          </li>
        </ul>

        <p><b>Prostorové veličiny</b> (popisují rozložení vln podél směru šíření):</p>
        <ul>
          <li><Term id="vlnova-delka">Vlnová délka <M>{'\\lambda'}</M></Term> [m] — vzdálenost dvou nejbližších bodů, které kmitají <b>se stejnou fází</b> (např. od hrbu k hrbu). Taky: dráha, kterou vlna urazí za jednu periodu.</li>
          <li><Term>Vlnočet <M>{'\\sigma'}</M></Term> [m<sup>−1</sup>] — kolik vlnových délek se vejde na metr:
            <MB>{'\\sigma = \\frac{1}{\\lambda}'}</MB>
          </li>
          <li><Term>Vlnové číslo <M>{'k'}</M></Term> [rad/m] — prostorová obdoba <M>{'\\omega'}</M>:
            <MB>{'k = \\frac{2\\pi}{\\lambda} = 2\\pi\\sigma'}</MB>
          </li>
        </ul>

        <p>Časové a prostorové veličiny spojuje <b>rychlost šíření</b> <M>{'w'}</M> (značí se i <M>{'v'}</M> nebo <M>{'c'}</M>):</p>
        <MB>{'\\lambda = w\\,T = \\frac{w}{f} \\qquad\\Longrightarrow\\qquad w = \\lambda\\, f'}</MB>
        <p>
          Všimni si symetrie: <M>{'\\omega'}</M> a <M>{'f'}</M> jdou s <M>{'T'}</M> (čas), kdežto{' '}
          <M>{'k'}</M> a <M>{'\\sigma'}</M> jdou s <M>{'\\lambda'}</M> (prostor). Levý a pravý sloupec
          obrázku níž jsou přesně tyhle dva pohledy na tutéž vlnu.
        </p>

        <Figure caption="Dva pohledy na vlnu. Vlevo „film jednoho bodu v čase“ (perioda T). Vpravo „fotka celé struny v jednom okamžiku“ (vlnová délka λ).">
          <svg viewBox="0 0 640 230" className="svg-fig">
            <Defs color={ACC} id="arA" />
            <Defs color={HOT} id="arAh" />
            {/* LEVÝ graf: u(t) pro x = konst. */}
            <line x1="40" y1="20" x2="40" y2="160" stroke={TXT} strokeWidth="1.5" />
            <line x1="30" y1="90" x2="295" y2="90" stroke={TXT} strokeWidth="1.5" markerEnd="url(#arA)" />
            <text x="22" y="28" fill={TXT} fontSize="13" fontStyle="italic">u</text>
            <text x="288" y="108" fill={TXT} fontSize="13" fontStyle="italic">t</text>
            <path d={sineD(50, 270, 90, 42, 110, 0)} fill="none" stroke={ACC} strokeWidth="2.6" />
            <line x1="105" y1="118" x2="215" y2="118" stroke={HOT} strokeWidth="2" markerStart="url(#arAh)" markerEnd="url(#arAh)" />
            <text x="160" y="138" fill={HOT} fontSize="14" fontStyle="italic" textAnchor="middle">T</text>
            <text x="160" y="195" fill={DIM} fontSize="12" textAnchor="middle">x = konst. (jeden bod)</text>

            {/* PRAVÝ graf: u(x) pro t = konst. */}
            <line x1="350" y1="20" x2="350" y2="160" stroke={TXT} strokeWidth="1.5" />
            <line x1="340" y1="90" x2="615" y2="90" stroke={TXT} strokeWidth="1.5" markerEnd="url(#arA)" />
            <text x="332" y="28" fill={TXT} fontSize="13" fontStyle="italic">u</text>
            <text x="608" y="108" fill={TXT} fontSize="13" fontStyle="italic">x</text>
            <path d={sineD(360, 600, 90, 42, 90, 0)} fill="none" stroke={ACC} strokeWidth="2.6" />
            <line x1="382" y1="118" x2="472" y2="118" stroke={HOT} strokeWidth="2" markerStart="url(#arAh)" markerEnd="url(#arAh)" />
            <text x="427" y="138" fill={HOT} fontSize="14" fontStyle="italic" textAnchor="middle">λ</text>
            <text x="478" y="195" fill={DIM} fontSize="12" textAnchor="middle">t = konst. (celá struna)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Příčné × podélné vlnění (NEJčastější otázka)">
        <p>Rozdíl je v jediné věci: <b>jakým směrem kmitají body vůči směru šíření</b>.</p>

        <Figure caption="Příčné: výchylka ⊥ směr šíření (struna). Podélné: výchylka ∥ směr šíření — střídá se zhuštění a zředění (zvuk).">
          <svg viewBox="0 0 640 300" className="svg-fig">
            <Defs color={HOT} id="arB" />
            {/* PŘÍČNÉ */}
            <text x="20" y="24" fill={ACC} fontSize="14" fontWeight="700">PŘÍČNÉ vlnění</text>
            <path d={sineD(30, 470, 75, 26, 110, 0)} fill="none" stroke={ACC} strokeWidth="2.6" />
            {/* směr šíření vodorovně */}
            <line x1="30" y1="120" x2="490" y2="120" stroke={DIM} strokeWidth="2" markerEnd="url(#arB)" />
            <text x="500" y="125" fill={DIM} fontSize="12">šíření</text>
            {/* výchylka svisle (kolmo) */}
            <line x1="140" y1="75" x2="140" y2="45" stroke={HOT} strokeWidth="3" markerEnd="url(#arB)" />
            <text x="152" y="44" fill={HOT} fontSize="12">výchylka ⊥</text>
            <text x="500" y="80" fill={TXT} fontSize="12">struna, světlo</text>

            {/* PODÉLNÉ — zhuštění/zředění pomocí svislých čárek různé hustoty */}
            <text x="20" y="180" fill={ACC} fontSize="14" fontWeight="700">PODÉLNÉ vlnění</text>
            <g stroke={ACC} strokeWidth="2.2">
              {/* hustota čar moduluje zhuštění (cosinus) */}
              {Array.from({ length: 60 }).map((_, i) => {
                const base = 30 + i * 7.5
                const x = base + 9 * Math.cos((2 * Math.PI * base) / 150)
                return <line key={i} x1={x} y1="195" x2={x} y2="240" />
              })}
            </g>
            {/* výchylka rovnoběžně (∥) — pod pásem čárek, ať se nepřekrývá */}
            <line x1="120" y1="263" x2="170" y2="263" stroke={HOT} strokeWidth="3" markerEnd="url(#arB)" />
            <text x="178" y="267" fill={HOT} fontSize="12">výchylka ∥</text>
            {/* směr šíření */}
            <line x1="30" y1="285" x2="490" y2="285" stroke={DIM} strokeWidth="2" markerEnd="url(#arB)" />
            <text x="500" y="289" fill={DIM} fontSize="12">šíření</text>
            <text x="500" y="222" fill={TXT} fontSize="12">zvuk</text>
          </svg>
        </Figure>

        <ul className="biglist">
          <li>
            <b>Příčné vlnění</b> — body kmitají <b>kolmo</b> (<M>{'\\perp'}</M>) na směr šíření.
            Příklady: <b>struna</b>, vlny na vodní hladině, elektromagnetické vlnění (světlo).
          </li>
          <li>
            <b>Podélné vlnění</b> — body kmitají <b>rovnoběžně</b> (<M>{'\\parallel'}</M>) se směrem
            šíření; střídá se zhuštění a zředění prostředí. Příklad: <b>zvuk</b> (akustická vlna),
            seismické vlny.
          </li>
        </ul>

        <Callout kind="chytak" title="Chytáky — tady padají body">
          <ul>
            <li>
              <b>Příčné</b> vlnění (výchylka <M>{'\\perp'}</M> směr) potřebuje pevnou vazbu na smyk →
              vzniká <b>jen v pevných látkách</b> (a u světla, to je elmag. pole).
            </li>
            <li>
              <b>Podélné</b> vlnění (výchylka <M>{'\\parallel'}</M> směr) jde i tam, kde tvar
              „nedrží" — <b>i v kapalinách a plynech</b>.
            </li>
            <li>
              <b>Zvuk = podélné vlnění.</b> Klasická chyta. Ve vzduchu (plyn) by příčné ani nešlo.
            </li>
            <li>
              Nepleť si <M>{'\\sigma'}</M> (vlnočet, <M>{'1/\\lambda'}</M>) a <M>{'k'}</M> (vlnové
              číslo, <M>{'2\\pi/\\lambda'}</M>) — liší se o <M>{'2\\pi'}</M>, stejně jako <M>{'f'}</M>{' '}
              a <M>{'\\omega'}</M>.
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Vlnoplocha">
        <p>
          Když se vlna šíří prostorem (ne jen po struně), je užitečné spojit body, které kmitají{' '}
          <b>stejně (ve stejné fázi)</b>. Taková plocha se jmenuje <Term id="vlnoplocha">vlnoplocha</Term>.
        </p>
        <ul>
          <li>Bodový zdroj v prostoru → vlnoplochy jsou <b>kulové</b> (slupky cibule).</li>
          <li>Hodně daleko od zdroje → kousek vlnoplochy je skoro <b>rovinný</b> (rovinná vlna).</li>
        </ul>
        <p>
          Směr šíření je vždy <b>kolmý na vlnoplochu</b> (jako paprsek vychází kolmo z čela vlny).
          Sousední vlnoplochy stejného typu jsou od sebe přesně o <M>{'\\lambda'}</M>.
        </p>

        <Figure caption="Vlnoplochy kolem bodového zdroje: kružnice (v prostoru kulové plochy) spojující body se stejnou fází. Vzdálenost dvou sousedních = λ, paprsek je na ně kolmý.">
          <svg viewBox="0 0 480 230" className="svg-fig">
            <Defs color={HOT} id="arC" />
            {/* zdroj */}
            <circle cx="90" cy="115" r="7" fill={HOT} />
            <text x="78" y="145" fill={TXT} fontSize="12">zdroj</text>
            {/* vlnoplochy = soustředné oblouky */}
            {[40, 80, 120, 160, 200].map((r, i) => (
              <circle key={i} cx="90" cy="115" r={r} fill="none" stroke={ACC} strokeWidth="2.4" opacity={1 - i * 0.13} />
            ))}
            {/* paprsek kolmý na vlnoplochy */}
            <line x1="90" y1="115" x2="312" y2="115" stroke={DIM} strokeWidth="2" markerEnd="url(#arC)" />
            <text x="276" y="103" fill={DIM} fontSize="12">paprsek</text>
            {/* vyznačení λ mezi dvěma sousedními vlnoplochami (pod paprskem, ať se nepřekrývá) */}
            <line x1="170" y1="160" x2="170" y2="182" stroke={HOT} strokeWidth="1.2" strokeDasharray="3,3" />
            <line x1="210" y1="160" x2="210" y2="182" stroke={HOT} strokeWidth="1.2" strokeDasharray="3,3" />
            <line x1="170" y1="176" x2="210" y2="176" stroke={HOT} strokeWidth="1.5" markerStart="url(#arC)" markerEnd="url(#arC)" />
            <text x="190" y="200" fill={HOT} fontSize="14" fontStyle="italic" textAnchor="middle">λ</text>
            <text x="360" y="100" fill={TXT} fontSize="12">každá kružnice =</text>
            <text x="360" y="118" fill={TXT} fontSize="12">stejná fáze</text>
          </svg>
        </Figure>
      </Section>

      <ExamGoals
        lessonId={id}
        goals={[
          'Vysvětlit, co je vlnění (šíření kmitů pružnými vazbami; přenáší energii, ne látku).',
          'Nadefinovat λ, f, T, ω, k, σ a napsat vztahy f = 1/T, ω = 2πf, k = 2π/λ, λ = w·T.',
          'Rozlišit příčné a podélné vlnění podle směru výchylky a dát ke každému příklad.',
          'Vědět, že příčné je jen v pevných látkách, podélné i v kapalinách/plynech, a že zvuk je podélné.',
          'Popsat, co je vlnoplocha (plocha bodů se stejnou fází).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Čím se liší příčné a podélné vlnění a kde každé může vzniknout?',
            a: (
              <>
                <b>Příčné:</b> výchylka <M>{'\\perp'}</M> na směr šíření — jen v <b>pevných látkách</b>{' '}
                (struna, světlo). <b>Podélné:</b> výchylka <M>{'\\parallel'}</M> se směrem šíření
                (zhuštění/zředění) — i v <b>kapalinách a plynech</b>.
              </>
            ),
          },
          {
            q: <>Je zvuk příčné, nebo podélné vlnění? Proč?</>,
            a: (
              <>
                <b>Podélné.</b> Šíří se i ve vzduchu (plynu), kde příčné vlnění není možné — částice
                kmitají ve směru šíření a vytvářejí zhuštění a zředění.
              </>
            ),
          },
          {
            q: <>Napiš vztahy mezi <M>{'T,\\ f,\\ \\omega'}</M> a mezi <M>{'\\lambda,\\ k,\\ w'}</M>.</>,
            a: (
              <>
                <M>{'f = 1/T'}</M>, <M>{'\\omega = 2\\pi/T = 2\\pi f'}</M>; <M>{'k = 2\\pi/\\lambda'}</M>,{' '}
                a vlnová délka <M>{'\\lambda = w\\,T = w/f'}</M> (tedy <M>{'w = \\lambda f'}</M>).
              </>
            ),
          },
          {
            q: <>Co je vlnoplocha a jak na ni navazuje směr šíření?</>,
            a: (
              <>
                Vlnoplocha je souhrn bodů, kde má vlnění v daném okamžiku <b>stejnou fázi</b> (u
                bodového zdroje kulová, daleko skoro rovinná). Směr šíření je na vlnoplochu vždy{' '}
                <b>kolmý</b>; sousední vlnoplochy jsou od sebe o <M>{'\\lambda'}</M>.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
