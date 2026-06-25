import { Section, M, MB, Term, Concept, Figure, StepScene, ACircle, ALine, ARect, AText, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

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

/* Profil dráhy (údolíčko) pro kuličku */
function Valley() {
  return <path d="M10,40 Q120,150 230,40" fill="none" stroke={TRACK} strokeWidth="4" />
}

export default function Lesson_1_4() {
  return (
    <>
      <p className="lead">
        Tahle lekce je zlatý důl na body, protože jde celá o jednu otázku: <b>kdy se energie zachovává a v jakém tvaru</b>.
        Stačí umět rozlišit <Term>konzervativní</Term> a <Term>nekonzervativní</Term> pole a vědět, který <Term id="zachovani-energie">„zákon zachování"</Term> kde platí.
        Tady se nejvíc chybuje v jediném slově — <i>mechanická</i> versus <i>celková</i> energie.
      </p>

      <Section title="Konzervativní pole — práce nezávisí na dráze">
        <p>
          <Term id="konzervativni-pole">Konzervativní (potenciálové) silové pole</Term> je takové, kde se při přeměně
          <Concept id="potencialni-energie">potenciální energie</Concept> <M>{'E_p'}</M> na <Concept id="kineticka-energie">kinetickou</Concept> <M>{'E_k'}</M> a zpět <b>nic neztrácí</b>.
          Klíčová vlastnost, kterou zkoušející chce slyšet:
        </p>
        <Callout kind="info" title="Hlavní vlastnost konzervativního pole">
          <b>Práce nezávisí na dráze</b>, ale jen na <b>počáteční a koncové poloze</b> tělesa. Po uzavřené dráze
          (zpět do startu) je celková práce <b>nulová</b>.
        </Callout>
        <p>
          <Concept id="prace">Práci</Concept> konzervativní síly umíme zapsat jako úbytek potenciální energie:
        </p>
        <MB>{'W = -\\Delta E_p'}</MB>
        <p>
          Příklady konzervativních sil: <b>gravitační</b> (<M>{'E_p = mgh'}</M>), <b>elastická / pružnosti</b>{' '}
          (<M>{'E_p = \\tfrac12 k u^2'}</M>) a <b>elektrostatická</b>. Modelové situace: kulička v jamce <i>bez tření</i>,
          kyvadlo <i>ve vakuu</i> — pořád dokola se přelévá <M>{'E_p \\leftrightarrow E_k'}</M> a celek se nemění.
        </p>

        <Figure caption="Konzervativní pole: práce ze startu do cíle je stejná po obou drahách (přímé i oklikou). Záleží jen na koncových bodech.">
          <svg viewBox="0 0 320 170" className="svg-fig">
            <Defs color={ACCENT} name="arWork" />
            {/* obě cesty míří do společného cíle, ale hroty rozneseme do různé výšky,
                aby se nepřekrývaly: přímá končí níž, oklika výš */}
            {/* přímá cesta */}
            <line x1="52" y1="124" x2="244" y2="78" stroke={ACCENT} strokeWidth="3" markerEnd="url(#arWork)" />
            {/* oklika */}
            <path d="M48,118 C 96,30 200,26 248,44" fill="none" stroke={ACCENT} strokeWidth="3" strokeDasharray="6 5" markerEnd="url(#arWork)" />
            <text x="150" y="120" fill={TXT} fontSize="12" textAnchor="middle">přímo</text>
            <text x="138" y="20" fill={TXT} fontSize="12" textAnchor="middle">oklikou — stejná práce</text>
            {/* body start / cíl kreslíme NAD šipky, aby zůstaly čisté */}
            <circle cx="40" cy="128" r="9" fill={EK} />
            <text x="40" y="152" fill={TXT} fontSize="12" textAnchor="middle">start</text>
            <circle cx="282" cy="60" r="9" fill={EP} />
            <text x="282" y="40" fill={TXT} fontSize="12" textAnchor="middle">cíl</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Zákon zachování mechanické energie">
        <p>
          V <b>izolované soustavě</b> a v <b>konzervativním poli</b> platí{' '}
          <Term id="zachovani-mech-energie">zákon zachování mechanické energie</Term>: kinetická energie se mění v potenciální a naopak,
          ale jejich <b>součet zůstává stálý</b>.
        </p>
        <MB>{'\\Delta E_k + \\Delta E_p = 0 \\qquad\\Longleftrightarrow\\qquad E_M = E_k + E_p = \\text{konst.}'}</MB>
        <p>
          Energii nelze vyrobit ani zničit — jen přeměnit. Proklikej si to na kuličce v jamce (nebo na houpačce):
          dole je nejrychlejší (max <M>{'E_k'}</M>), nahoře se na okamžik zastaví (max <M>{'E_p'}</M>).
        </p>

        <StepScene
          title="Přelévání energie: kulička v jamce bez tření"
          viewBox="0 0 480 150"
          captions={[
            <>
              Kulička stojí nahoře: má <b>maximální</b> <M>{'E_p'}</M> a <M>{'E_k = 0'}</M> (zatím se nehýbe).
              Celková mechanická energie <M>{'E_M'}</M> je „plná nádrž".
            </>,
            <>
              Dole má kulička <b>nejvyšší rychlost</b> → <M>{'E_k'}</M> je maximální a <M>{'E_p = 0'}</M>.
              Žádná energie se neztratila: <M>{'E_M'}</M> je pořád stejně „plná".
            </>,
            <>
              Vyjede do <b>stejné výšky</b> na druhé straně (bez tření!) — <M>{'E_k'}</M> se vrátila do <M>{'E_p'}</M>.
              Sloupec <M>{'E_M'}</M> se ani nehnul: <M>{'\\Delta E_k + \\Delta E_p = 0'}</M>.
            </>,
          ]}
        >
          <defs>
            <marker id="ar14k" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill={EK} />
            </marker>
          </defs>
          {/* jamka (statická) */}
          <Valley />
          {/* sloupcový graf vpravo – základna + popisky (statické) */}
          <line x1={300} y1={120} x2={470} y2={120} stroke={TRACK} strokeWidth={2} />
          <text x={333} y={138} fill={TXT} fontSize="12" textAnchor="middle">Ek</text>
          <text x={383} y={138} fill={TXT} fontSize="12" textAnchor="middle">Ep</text>
          <text x={433} y={138} fill={TXT} fontSize="12" textAnchor="middle">EM</text>

          {/* animované sloupce energie (výška se přelévá Ep ↔ Ek, EM stálá) */}
          <ARect x={320} y={[118, 50, 118]} width={26} height={[2, 70, 2]} rx={3} fill={EK} />
          <ARect x={370} y={[50, 118, 50]} width={26} height={[70, 2, 70]} rx={3} fill={EP} />
          <ARect x={420} y={50} width={26} height={70} rx={3} fill={ACCENT} />

          {/* kulička klouže po jamce: vlevo nahoře → dolů → vpravo nahoře */}
          <ACircle cx={[14, 120, 226]} cy={[30, 84, 30]} r={11} fill={ACCENT} />

          {/* šipka rychlosti – jen dole, kde se kulička hýbe nejrychleji */}
          <ALine x1={138} y1={84} x2={184} y2={84} stroke={EK} strokeWidth={4} markerEnd="url(#ar14k)" opacity={[0, 1, 0]} />

          {/* popisky stavů (prolínají se) */}
          <AText x={120} y={22} fill={TXT} fontSize="13" textAnchor="middle" opacity={[1, 0, 0]}>stojí na kraji</AText>
          <AText x={120} y={22} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 1, 0]}>nejrychleji dole</AText>
          <AText x={226} y={22} fill={TXT} fontSize="13" textAnchor="middle" opacity={[0, 0, 1]}>stejná výška jako start</AText>
        </StepScene>
      </Section>

      <Section title="Nekonzervativní (disipativní) pole — tření">
        <p>
          <Term id="disipativni-sila">Nekonzervativní (disipativní) síly</Term> — typicky <b>tření</b> a <b>odporové síly</b> — se chovají jinak:
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
          <svg viewBox="0 0 380 170" className="svg-fig">
            <Defs color={HEAT} name="arHeat" />
            {/* údolí */}
            <path d="M10,44 Q120,154 230,44" fill="none" stroke={TRACK} strokeWidth="4" />
            {/* postupně nižší vrcholy na pravém svahu (echo dřívějších výkyvů) */}
            <circle cx="230" cy="44" r="9" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.4" />
            <circle cx="204" cy="74" r="9" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.7" />
            {/* aktuální poloha kuličky – nejníž */}
            <circle cx="120" cy="108" r="11" fill={ACCENT} />
            <text x="120" y="150" fill={TXT} fontSize="12" textAnchor="middle">tlumí se</text>
            {/* teplo odchází do okolí */}
            <line x1="150" y1="104" x2="300" y2="62" stroke={HEAT} strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arHeat)" />
            <text x="305" y="50" fill={HEAT} fontSize="13" textAnchor="start">teplo (ΔU)</text>
          </svg>
        </Figure>
      </Section>

      <Section title="Zákon zachování CELKOVÉ energie">
        <p>
          Když je ve hře tření, energie se přesto nikam neztratí — jen přejde do formy, na kterou jsme v mechanice „neviděli".
          Proto platí obecnější <Term id="zachovani-celkove-energie">zákon zachování celkové energie</Term>: v izolované soustavě je stálá <b>celková</b> energie,
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
          <svg viewBox="0 0 400 210" className="svg-fig">
            <Defs color={EK} name="arV" />
            {/* elipsa dráhy */}
            <ellipse cx="200" cy="105" rx="165" ry="82" fill="none" stroke={TRACK} strokeWidth="2.5" />
            {/* Slunce v ohnisku (vlevo od středu) – kreslené, ne glyf */}
            <circle cx="105" cy="105" r="15" fill={SUN} />
            <circle cx="105" cy="105" r="22" fill="none" stroke={SUN} strokeWidth="1.5" strokeDasharray="2 4" opacity="0.7" />
            {/* perihelium – nejblíž Slunci (vlevo vrchol elipsy) */}
            <circle cx="35" cy="105" r="9" fill={EP} />
            <text x="35" y="128" fill={TXT} fontSize="12" textAnchor="middle">perihel</text>
            {/* rychlost v perihelu: tečná (svislá), DLOUHÁ = v max */}
            <line x1="55" y1="105" x2="55" y2="44" stroke={EK} strokeWidth="3.5" markerEnd="url(#arV)" />
            <text x="55" y="36" fill={EK} fontSize="12" textAnchor="middle">v max</text>
            {/* afelium – nejdál (vpravo vrchol elipsy) */}
            <circle cx="365" cy="105" r="9" fill={EP} />
            <text x="365" y="92" fill={TXT} fontSize="12" textAnchor="middle">afel</text>
            {/* rychlost v afelu: tečná (svislá), KRÁTKÁ = v min */}
            <line x1="345" y1="105" x2="345" y2="142" stroke={EK} strokeWidth="3.5" markerEnd="url(#arV)" />
            <text x="345" y="160" fill={EK} fontSize="12" textAnchor="middle">v min</text>
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
