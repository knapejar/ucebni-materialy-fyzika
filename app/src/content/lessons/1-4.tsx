import { Section, M, MB, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '1.4'

/* Nové pojmy, které tato lekce poprvé vykládá (pro pozdější wiki-proklik). */
export const provides = {
  'konzervativni-pole': {
    lesson: '1.4',
    label: 'konzervativní pole',
    short: 'Pole, kde práce nezávisí na dráze, jen na počáteční a koncové poloze (W = −ΔEp).',
  },
  'disipativni-sila': {
    lesson: '1.4',
    label: 'disipativní (nekonzervativní) síla',
    short: 'Tření/odpor — závisí na rychlosti, mění mechanickou energii nevratně na teplo.',
  },
  'zachovani-mech-energie': {
    lesson: '1.4',
    label: 'zákon zachování mechanické energie',
    short: 'ΔEk + ΔEp = 0 — platí jen v konzervativním poli.',
  },
  'zachovani-celkove-energie': {
    lesson: '1.4',
    label: 'zákon zachování celkové energie',
    short: 'Ec = Ek + Ep + U = konst. — platí vždy, i se třením.',
  },
}

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

const ACCENT = '#f59e0b' // akcent tématu (energie / pohyb)
const TXT = '#e8ecf8'
const TRACK = '#3a4566'
const EK = '#34d399' // kinetická energie – zelená
const EP = '#60a5fa' // potenciální energie – modrá
const HEAT = '#fb7185' // teplo / disipace – červená
const SUN = '#f59e0b'

/* Sloupeček energie (mini bar-chart) – výška podle hodnoty 0..1 */
function Bar({ x, h, color, label }: { x: number; h: number; color: string; label: string }) {
  const max = 70
  const hh = Math.max(2, h * max)
  return (
    <g>
      <rect x={x} y={120 - hh} width="26" height={hh} rx="3" fill={color} />
      <text x={x + 13} y={134} fill={TXT} fontSize="12" textAnchor="middle">{label}</text>
    </g>
  )
}

/* Profil dráhy (údolíčko) pro kuličku */
function Valley() {
  return <path d="M10,40 Q120,150 230,40" fill="none" stroke={TRACK} strokeWidth="4" />
}

export default function Lesson_1_4() {
  return (
    <>
      <p className="lead">
        Tahle lekce je zlatý důl na body, protože jde celá o jednu otázku: <b>kdy se energie zachovává a v jakém tvaru</b>.
        Stačí umět rozlišit <Term>konzervativní</Term> a <Term>nekonzervativní</Term> pole a vědět, který „zákon zachování" kde platí.
        Tady se nejvíc chybuje v jediném slově — <i>mechanická</i> versus <i>celková</i> energie.
      </p>

      <Section title="Konzervativní pole — práce nezávisí na dráze">
        <p>
          <Term>Konzervativní (potenciálové) silové pole</Term> je takové, kde se při přeměně
          potenciální energie <M>{'E_p'}</M> na kinetickou <M>{'E_k'}</M> a zpět <b>nic neztrácí</b>.
          Klíčová vlastnost, kterou zkoušející chce slyšet:
        </p>
        <Callout kind="info" title="Hlavní vlastnost konzervativního pole">
          <b>Práce nezávisí na dráze</b>, ale jen na <b>počáteční a koncové poloze</b> tělesa. Po uzavřené dráze
          (zpět do startu) je celková práce <b>nulová</b>.
        </Callout>
        <p>
          Práci konzervativní síly umíme zapsat jako úbytek potenciální energie:
        </p>
        <MB>{'W = -\\Delta E_p'}</MB>
        <p>
          Příklady konzervativních sil: <b>gravitační</b> (<M>{'E_p = mgh'}</M>), <b>elastická / pružnosti</b>{' '}
          (<M>{'E_p = \\tfrac12 k u^2'}</M>) a <b>elektrostatická</b>. Modelové situace: kulička v jamce <i>bez tření</i>,
          kyvadlo <i>ve vakuu</i> — pořád dokola se přelévá <M>{'E_p \\leftrightarrow E_k'}</M> a celek se nemění.
        </p>

        <Figure caption="Konzervativní pole: práce ze startu do cíle je stejná po obou drahách (přímé i oklikou). Záleží jen na koncových bodech.">
          <svg viewBox="0 0 320 150" className="svg-fig">
            <Defs color={ACCENT} />
            <circle cx="40" cy="110" r="9" fill={EK} />
            <text x="40" y="135" fill={TXT} fontSize="12" textAnchor="middle">start</text>
            <circle cx="280" cy="40" r="9" fill={EP} />
            <text x="280" y="30" fill={TXT} fontSize="12" textAnchor="middle">cíl</text>
            {/* přímá cesta */}
            <line x1="50" y1="104" x2="271" y2="46" stroke={ACCENT} strokeWidth="3" markerEnd="url(#ar)" />
            {/* oklika */}
            <path d="M48,104 C 90,20 220,20 272,46" fill="none" stroke={ACCENT} strokeWidth="3" strokeDasharray="6 5" markerEnd="url(#ar)" />
            <text x="150" y="98" fill={TXT} fontSize="12" textAnchor="middle">přímo</text>
            <text x="160" y="34" fill={TXT} fontSize="12" textAnchor="middle">oklikou — stejná práce</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Zákon zachování mechanické energie">
        <p>
          V <b>izolované soustavě</b> a v <b>konzervativním poli</b> platí{' '}
          <Term>zákon zachování mechanické energie</Term>: kinetická energie se mění v potenciální a naopak,
          ale jejich <b>součet zůstává stálý</b>.
        </p>
        <MB>{'\\Delta E_k + \\Delta E_p = 0 \\qquad\\Longleftrightarrow\\qquad E_M = E_k + E_p = \\text{konst.}'}</MB>
        <p>
          Energii nelze vyrobit ani zničit — jen přeměnit. Proklikej si to na kuličce v jamce (nebo na houpačce):
          dole je nejrychlejší (max <M>{'E_k'}</M>), nahoře se na okamžik zastaví (max <M>{'E_p'}</M>).
        </p>

        <StepFigure
          title="Přelévání energie: kulička v jamce bez tření"
          steps={[
            {
              label: 'nahoře vlevo — samá Ep',
              caption: (
                <>
                  Kulička stojí nahoře: má <b>maximální</b> <M>{'E_p'}</M> a <M>{'E_k = 0'}</M> (zatím se nehýbe).
                  Celková mechanická energie <M>{'E_M'}</M> je „plná nádrž".
                </>
              ),
              content: (
                <svg viewBox="0 0 480 150" className="svg-fig">
                  <Valley />
                  <circle cx="14" cy="38" r="11" fill={ACCENT} />
                  <text x="120" y="22" fill={TXT} fontSize="13" textAnchor="middle">stojí na kraji</text>
                  {/* energetické sloupce vpravo */}
                  <line x1="300" y1="120" x2="470" y2="120" stroke={TRACK} strokeWidth="2" />
                  <Bar x={320} h={0.0} color={EK} label="Ek" />
                  <Bar x={370} h={1.0} color={EP} label="Ep" />
                  <Bar x={420} h={1.0} color={ACCENT} label="EM" />
                </svg>
              ),
            },
            {
              label: 'dole — samá Ek',
              caption: (
                <>
                  Dole má kulička <b>nejvyšší rychlost</b> → <M>{'E_k'}</M> je maximální a <M>{'E_p = 0'}</M>.
                  Žádná energie se neztratila: <M>{'E_M'}</M> je pořád stejně „plná".
                </>
              ),
              content: (
                <svg viewBox="0 0 480 150" className="svg-fig">
                  <Valley />
                  <Defs color={EK} name="ark" />
                  <circle cx="120" cy="95" r="11" fill={ACCENT} />
                  <line x1="135" y1="95" x2="180" y2="95" stroke={EK} strokeWidth="4" markerEnd="url(#ark)" />
                  <text x="120" y="135" fill={TXT} fontSize="13" textAnchor="middle">nejrychleji</text>
                  <line x1="300" y1="120" x2="470" y2="120" stroke={TRACK} strokeWidth="2" />
                  <Bar x={320} h={1.0} color={EK} label="Ek" />
                  <Bar x={370} h={0.0} color={EP} label="Ep" />
                  <Bar x={420} h={1.0} color={ACCENT} label="EM" />
                </svg>
              ),
            },
            {
              label: 'nahoře vpravo — zase samá Ep',
              caption: (
                <>
                  Vyjede do <b>stejné výšky</b> na druhé straně (bez tření!) — <M>{'E_k'}</M> se vrátila do <M>{'E_p'}</M>.
                  Sloupec <M>{'E_M'}</M> se ani nehnul: <M>{'\\Delta E_k + \\Delta E_p = 0'}</M>.
                </>
              ),
              content: (
                <svg viewBox="0 0 480 150" className="svg-fig">
                  <Valley />
                  <circle cx="226" cy="38" r="11" fill={ACCENT} />
                  <text x="120" y="22" fill={TXT} fontSize="13" textAnchor="middle">stejná výška jako start</text>
                  <line x1="300" y1="120" x2="470" y2="120" stroke={TRACK} strokeWidth="2" />
                  <Bar x={320} h={0.0} color={EK} label="Ek" />
                  <Bar x={370} h={1.0} color={EP} label="Ep" />
                  <Bar x={420} h={1.0} color={ACCENT} label="EM" />
                </svg>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Nekonzervativní (disipativní) pole — tření">
        <p>
          <Term>Nekonzervativní (disipativní) síly</Term> — typicky <b>tření</b> a <b>odporové síly</b> — se chovají jinak:
          nezávisí jen na poloze, ale i na <b>rychlosti</b>, kterou se těleso pohybuje. Při pohybu rozhází část mechanické energie
          „nahodile" mezi částice látky — to je <Term>disipace</Term>. Tahle energie se <b>už nevrátí</b> zpět na pohyb,
          jde o <b>nevratný proces</b> (mění se hlavně na <b>teplo</b>).
        </p>
        <p>
          Proto v poli se třením <b>neplatí</b> zákon zachování mechanické energie — kulička v reálné jamce postupně
          „dojezdí" níž a níž, kyvadlo v husté kapalině se utlumí. Mechanická energie ubývá, protože <b>práce disipativních sil</b>{' '}
          tu energii odvádí do vnitřní energie <M>{'U'}</M>.
        </p>

        <Figure caption="Se třením kulička pokaždé vyjede níž — ztracená mechanická energie odchází jako teplo (vnitřní energie U).">
          <svg viewBox="0 0 360 160" className="svg-fig">
            <Defs color={HEAT} />
            {/* údolí */}
            <path d="M10,40 Q120,150 230,40" fill="none" stroke={TRACK} strokeWidth="4" />
            {/* postupně nižší vrcholy zprava */}
            <circle cx="230" cy="40" r="8" fill={ACCENT} opacity="0.35" />
            <circle cx="206" cy="70" r="8" fill={ACCENT} opacity="0.6" />
            <circle cx="120" cy="105" r="10" fill={ACCENT} />
            <text x="120" y="146" fill={TXT} fontSize="12" textAnchor="middle">tlumí se</text>
            {/* teplo */}
            <line x1="150" y1="100" x2="300" y2="60" stroke={HEAT} strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#ar)" />
            <text x="310" y="55" fill={HEAT} fontSize="13" textAnchor="middle">teplo (ΔU)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Zákon zachování CELKOVÉ energie">
        <p>
          Když je ve hře tření, energie se přesto nikam neztratí — jen přejde do formy, na kterou jsme v mechanice „neviděli".
          Proto platí obecnější <Term>zákon zachování celkové energie</Term>: v izolované soustavě je stálá <b>celková</b> energie,
          do které započteme i <b>vnitřní energii</b> <M>{'U'}</M> (a další formy — deformační, chemickou…).
        </p>
        <MB>{'E_c = E_k + E_p + U = \\text{konst.} \\qquad\\Longleftrightarrow\\qquad \\Delta E_k + \\Delta E_p + \\Delta U = 0'}</MB>
        <p>
          Jinak řečeno: o co klesne mechanická energie (<M>{'E_k+E_p'}</M>), o to vzroste vnitřní energie <M>{'\\Delta U'}</M>.
          Energii pořád nelze vyrobit ani zničit — jen se „schová" do tepla.
        </p>

        <Figure caption="Bez tření: mechanická energie je stálá. Se třením: její úbytek najdeme jako přírůstek vnitřní energie ΔU — celek (Ec) zůstává stejný.">
          <svg viewBox="0 0 380 160" className="svg-fig">
            {/* levý sloupec: konzervativní */}
            <text x="95" y="20" fill={TXT} fontSize="13" textAnchor="middle">konzervativní</text>
            <line x1="20" y1="130" x2="170" y2="130" stroke={TRACK} strokeWidth="2" />
            <rect x="55" y="60" width="34" height="70" rx="3" fill={EK} />
            <text x="72" y="52" fill={TXT} fontSize="11" textAnchor="middle">EM</text>
            <text x="72" y="145" fill={TXT} fontSize="11" textAnchor="middle">= konst.</text>

            {/* pravý sloupec: disipativní */}
            <text x="285" y="20" fill={TXT} fontSize="13" textAnchor="middle">se třením</text>
            <line x1="210" y1="130" x2="360" y2="130" stroke={TRACK} strokeWidth="2" />
            <rect x="245" y="85" width="34" height="45" rx="3" fill={EK} />
            <rect x="245" y="60" width="34" height="25" rx="3" fill={HEAT} />
            <text x="262" y="52" fill={TXT} fontSize="11" textAnchor="middle">Ec</text>
            <text x="300" y="76" fill={HEAT} fontSize="11" textAnchor="start">ΔU</text>
            <text x="300" y="112" fill={EK} fontSize="11" textAnchor="start">EM ↓</text>
          </svg>
        </Figure>

        <Callout kind="chytak" title="Chytáky (přesně tady se ztrácejí body)">
          <ul>
            <li>
              Zákon zachování <b>mechanické</b> energie (<M>{'\\Delta E_k + \\Delta E_p = 0'}</M>) platí <b>jen v konzervativním poli</b>.
              Jakmile je ve hře <b>tření</b>, tenhle zákon <b>neplatí</b>!
            </li>
            <li>
              Se třením platí zákon zachování <b>celkové</b> energie — část mechanické energie přejde do <b>vnitřní energie</b>{' '}
              <M>{'\\Delta U'}</M> (teplo). Nezapomeň <M>{'\\Delta U'}</M> do bilance přidat.
            </li>
            <li>
              Disipativní síla závisí na <b>rychlosti</b> (ne jen na poloze), proto pro ni <b>nelze</b> definovat potenciální energii.
            </li>
            <li>
              U konzervativní síly je práce po <b>uzavřené dráze nulová</b> — to je rychlý test „je pole konzervativní?".
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Příklad u zkoušky: planeta kolem Slunce">
        <p>
          Oblíbený dotaz: <b>kde obíhá planeta po elipse nejrychleji?</b> Gravitace je konzervativní, takže platí zachování
          mechanické energie <M>{'E_k + E_p = \\text{konst.}'}</M> A <M>{'E_p'}</M> je tím menší (zápornější), čím je planeta
          <b> blíž Slunci</b>. Proto:
        </p>
        <ul>
          <li><b>Nejblíž Slunci</b> (v <Term>perihelu</Term>): nejmenší <M>{'E_p'}</M> → největší <M>{'E_k'}</M> → <b>nejrychleji</b>.</li>
          <li><b>Nejdál od Slunce</b> (v <Term>afelu</Term>): největší <M>{'E_p'}</M> → nejmenší <M>{'E_k'}</M> → <b>nejpomaleji</b>.</li>
        </ul>

        <Figure caption="Planeta na eliptické dráze: v perihelu (nejblíž) je Ep nejmenší, proto je tam Ek a tedy rychlost největší. V afelu je to obráceně.">
          <svg viewBox="0 0 380 200" className="svg-fig">
            <Defs color={EK} />
            {/* elipsa dráhy */}
            <ellipse cx="190" cy="100" rx="160" ry="80" fill="none" stroke={TRACK} strokeWidth="2.5" />
            {/* Slunce v ohnisku (vlevo od středu) */}
            <circle cx="100" cy="100" r="16" fill={SUN} />
            <text x="100" y="105" fill="#0b1020" fontSize="12" textAnchor="middle" fontWeight="700">☉</text>
            {/* perihelium – nejblíž Slunci (vlevo) */}
            <circle cx="30" cy="100" r="9" fill={EP} />
            <line x1="40" y1="84" x2="40" y2="50" stroke={EK} strokeWidth="4" markerEnd="url(#ar)" />
            <text x="40" y="44" fill={EK} fontSize="12" textAnchor="middle">v max</text>
            <text x="40" y="120" fill={TXT} fontSize="12" textAnchor="middle">perihel</text>
            {/* afelium – nejdál (vpravo) */}
            <circle cx="350" cy="100" r="9" fill={EP} />
            <line x1="340" y1="116" x2="340" y2="138" stroke={EK} strokeWidth="3" markerEnd="url(#ar)" />
            <text x="340" y="152" fill={EK} fontSize="12" textAnchor="middle">v min</text>
            <text x="340" y="92" fill={TXT} fontSize="12" textAnchor="middle">afel</text>
          </svg>
        </Figure>
      </Section>

      <ExamGoals
        lessonId={id}
        goals={[
          'Definovat konzervativní pole a říct jeho hlavní vlastnost (práce nezávisí na dráze, jen na koncových bodech).',
          'Napsat ZZ mechanické energie ΔEk + ΔEp = 0 a vědět, že platí JEN v konzervativním poli.',
          'Rozlišit ZZ mechanické a ZZ celkové energie (Ec = Ek + Ep + U).',
          'Vysvětlit disipativní sílu (tření) a kam mizí mechanická energie (do vnitřní energie ΔU, teplo).',
          'Vědět, že planeta obíhá nejrychleji v perihelu (nejblíž Slunci, nejmenší Ep).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Co je hlavní vlastnost konzervativního silového pole?',
            a: (
              <>
                Práce síly <b>nezávisí na dráze</b>, ale jen na <b>počáteční a koncové poloze</b> tělesa
                (<M>{'W = -\\Delta E_p'}</M>); po uzavřené dráze je práce nulová. Příklady: gravitační, elastická, elektrostatická síla.
              </>
            ),
          },
          {
            q: 'Kdy platí zákon zachování mechanické energie a jak ho zapíšeš?',
            a: (
              <>
                Platí <b>jen v konzervativním poli</b> (a v izolované soustavě), tj. bez tření:{' '}
                <M>{'\\Delta E_k + \\Delta E_p = 0'}</M>, neboli <M>{'E_k + E_p = \\text{konst.}'}</M>
              </>
            ),
          },
          {
            q: 'Je tu tření. Který zákon zachování použiješ a kam zmizí mechanická energie?',
            a: (
              <>
                Mechanická energie se <b>nezachovává</b>; platí zákon zachování <b>celkové</b> energie{' '}
                <M>{'E_c = E_k + E_p + U = \\text{konst.}'}</M> Úbytek mechanické energie se objeví jako přírůstek
                vnitřní energie <M>{'\\Delta U'}</M> (teplo) — disipace, nevratný proces.
              </>
            ),
          },
          {
            q: 'Ve které části eliptické dráhy obíhá planeta kolem Slunce nejrychleji a proč?',
            a: (
              <>
                V <b>perihelu</b> (nejblíž Slunci). Gravitace je konzervativní, takže <M>{'E_k + E_p = \\text{konst.}'}</M>;
                nejblíž je <M>{'E_p'}</M> nejmenší, proto je tam <M>{'E_k'}</M> a rychlost největší. V afelu je to opačně.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
