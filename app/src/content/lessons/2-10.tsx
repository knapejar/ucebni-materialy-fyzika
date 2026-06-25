import { Section, M, MB, Term, Concept, Figure, StepScene, ARect, AText, ALine, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.10'

/* Pojmy, které tato lekce poprvé vykládá (pro pozdější proklikávání). */
export const provides = {
  'faradayova-klec': { lesson: '2.10', label: 'Faradayova klec', short: 'Uvnitř vodiče je elektrický stín (E = 0) — pole se odstíní.' },
  'elektricky-stin': { lesson: '2.10', label: 'elektrický stín', short: 'Prostor uvnitř vodiče, kde je nulové pole.' },
  'polarizace-dielektrika': { lesson: '2.10', label: 'polarizace dielektrika', short: 'Posun vázaných nábojů ve vnějším poli; vznik indukovaných dipólů.' },
  'vazane-naboje': { lesson: '2.10', label: 'vázané náboje', short: 'Náboje pevně držené v atomech/molekulách dielektrika; nemohou volně téct.' },
  'polarni-molekula': { lesson: '2.10', label: 'polární molekula', short: 'Molekula s vlastním dipólovým momentem (např. voda).' },
}

const ACC = '#38bdf8'   // akcent tématu
const TXT = '#e8ecf8'
const MINUS = '#60a5fa' // záporné náboje
const PLUS = '#fb7185'  // kladné náboje
const FIELD = '#38bdf8' // vnější pole E
const INNER = '#34d399' // vnitřní pole E*
const MUTED = '#9aa6c4'

/* šipka pro SVG (marker v dané barvě, unikátní id) */
function Arrow({ id: mid, color }: { id: string; color: string }) {
  return (
    <marker id={mid} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
    </marker>
  )
}

export default function Lesson_2_10() {
  return (
    <>
      <p className="lead">
        Tahle otázka je oblíbená, protože se dá odpovědět „lidsky" a přitom přesně. Stačí umět dvě
        věci: co udělá <Concept id="vodic">vodič</Concept> ve vnějším poli (a proč ho zevnitř „odstíní") a co se děje
        v <Concept id="dielektrikum">dielektriku</Concept> (polarizace). Když si zapamatuješ pár chytáků, máš bod jistý.
      </p>

      <Section title="O co jde: jak látka reaguje na vnější pole">
        <p>
          Vložíme kus látky do vnějšího elektrostatického pole <M>{'\\vec E'}</M>. Co se stane,
          rozhoduje jediná otázka: <b>jsou v látce volné <Concept id="naboj">náboje</Concept>, které se můžou hýbat?</b>
        </p>
        <ul>
          <li>
            <b>Vodič</b> = látka s <Term>volnými náboji</Term> (kovy, roztoky elektrolytů, plazma).
            Volné elektrony se můžou přesouvat.
          </li>
          <li>
            <b>Dielektrikum (izolant)</b> = látka <Term>bez</Term> volných nábojů. Všechny náboje
            jsou <Term id="vazane-naboje">vázané</Term> pevně v atomech a molekulách — můžou se jen maličko pošoupnout.
          </li>
        </ul>
      </Section>

      <Section title="Vodič ve vnějším poli (krok po kroku)">
        <p>
          Tohle je <b>proces</b>, ne stav — proto si ho proklikej. Sleduj, jak se náboje přerozdělí,
          až se pole uvnitř vyruší. Klikej <b>Další →</b>:
        </p>

        <StepScene
          title="Vznik elektrického stínu ve vodiči"
          viewBox="0 0 460 190"
          captions={[
            <>
              Vodič vložíme do vnějšího pole <M>{'\\vec E'}</M> (modré šipky). Uvnitř jsou volné
              elektrony, zatím rovnoměrně rozmístěné.
            </>,
            <>
              Pole tlačí na volné náboje: záporné putují proti směru <M>{'\\vec E'}</M> (doleva),
              takže <b>na levé stěně přebydou „−"</b> a <b>na pravé „+"</b>. Vzniká nové, vnitřní
              pole <M>{'\\vec E^{*}'}</M> (zelené) mířící <b>proti</b> vnějšímu.
            </>,
            <>
              Náboje se přesouvají <b>jen do chvíle</b>, než vnitřní pole přesně vyruší vnější:{' '}
              <M>{'\\vec E_1 + \\vec E_2 = \\vec 0'}</M>. Pak už nic nepohání — <b>uvnitř je
              nulové pole</b> (elektrický stín). Náboj sedí <b>na povrchu</b>.
            </>,
          ]}
        >
          <defs>
            <marker id="ce-fld" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={FIELD} /></marker>
            <marker id="ce-grn" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill={INNER} /></marker>
          </defs>

          {/* vnější pole E — modré šipky vlevo i vpravo (statické) */}
          <g stroke={FIELD} strokeWidth={3}>
            <line x1={20} y1={40} x2={120} y2={40} markerEnd="url(#ce-fld)" />
            <line x1={20} y1={90} x2={120} y2={90} markerEnd="url(#ce-fld)" />
            <line x1={20} y1={140} x2={120} y2={140} markerEnd="url(#ce-fld)" />
            <line x1={340} y1={40} x2={440} y2={40} markerEnd="url(#ce-fld)" />
            <line x1={340} y1={90} x2={440} y2={90} markerEnd="url(#ce-fld)" />
            <line x1={340} y1={140} x2={440} y2={140} markerEnd="url(#ce-fld)" />
          </g>
          <text x={70} y={178} fill={FIELD} fontSize="15" textAnchor="middle" fontStyle="italic">E</text>
          <text x={230} y={35} fill={MUTED} fontSize="13" textAnchor="middle">vodič</text>

          {/* vodič — v rovnováze (krok 3) zezelená: vnitřek i okraj */}
          <ARect x={160} y={45} width={140} height={100} rx={10}
            fill={['#1b2436', '#1b2436', '#102218']}
            stroke={[MUTED, MUTED, INNER]} strokeWidth={2} />

          {/* tři elektrony, které se posunou na levou stěnu (a zmodrají) */}
          <AText x={[200, 178, 178]} y={[78, 78, 78]} fill={[TXT, MINUS, MINUS]} fontSize="17" textAnchor="middle" fontWeight="700">−</AText>
          <AText x={[200, 178, 178]} y={[101, 103, 103]} fill={[TXT, MINUS, MINUS]} fontSize="17" textAnchor="middle" fontWeight="700">−</AText>
          <AText x={[200, 178, 178]} y={[124, 128, 128]} fill={[TXT, MINUS, MINUS]} fontSize="17" textAnchor="middle" fontWeight="700">−</AText>

          {/* tři elektrony z pravé části: v kroku 1 se „přesypou" doleva a zmizí */}
          <AText x={[260, 205, 205]} y={[78, 78, 78]} fill={TXT} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[1, 0, 0]}>−</AText>
          <AText x={[260, 205, 205]} y={[101, 103, 103]} fill={TXT} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[1, 0, 0]}>−</AText>
          <AText x={[260, 205, 205]} y={[124, 128, 128]} fill={TXT} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[1, 0, 0]}>−</AText>

          {/* odkryté kladné náboje na pravé stěně (objeví se v kroku 1) */}
          <AText x={[265, 283, 283]} y={[78, 78, 78]} fill={PLUS} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[0, 1, 1]}>+</AText>
          <AText x={[265, 283, 283]} y={[101, 103, 103]} fill={PLUS} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[0, 1, 1]}>+</AText>
          <AText x={[265, 283, 283]} y={[124, 128, 128]} fill={PLUS} fontSize="17" textAnchor="middle" fontWeight="700" opacity={[0, 1, 1]}>+</AText>

          {/* vnitřní pole E* (jen krok 2, kdy náboje ještě tečou) */}
          <ALine x1={278} y1={95} x2={185} y2={95} stroke={INNER} strokeWidth={3} markerEnd="url(#ce-grn)" opacity={[0, 1, 0]} />
          <AText x={232} y={84} fill={INNER} fontSize="14" textAnchor="middle" fontStyle="italic" opacity={[0, 1, 0]}>E*</AText>

          {/* rovnováha (krok 3) */}
          <AText x={230} y={92} fill={INNER} fontSize="15" textAnchor="middle" fontWeight="700" opacity={[0, 0, 1]}>E = 0</AText>
          <AText x={230} y={112} fill={MUTED} fontSize="12" textAnchor="middle" opacity={[0, 0, 1]}>elektrický stín</AText>
        </StepScene>

        <p>
          Hotový vodič se proto chová jako <Term id="faradayova-klec">Faradayova klec</Term>: vnější pole se zvenčí
          „rozprostře" po povrchu a <Term id="elektricky-stin">elektrický stín</Term> uvnitř je chráněný. Protože uvnitř
          není pole, <b><Concept id="potencial">potenciál</Concept> je tam všude stejný</b> (konstantní) — stejný jako na povrchu.
        </p>

        <MB>{'\\vec E_{\\text{uvnitř}} = \\vec 0 \\quad\\Rightarrow\\quad \\varphi = \\text{konst.}'}</MB>
      </Section>

      <Section title="Dielektrikum: polarizace vázaných nábojů">
        <p>
          V izolantu se nemá co volně rozpohybovat — náboje jsou <Term>vázané</Term>. Vnější pole je
          tedy jen <b>natáhne nebo pootočí</b>. Tomu se říká <Term id="polarizace-dielektrika">polarizace</Term>. Vznikne tím
          spousta malých <Concept id="dipol">dipólů</Concept>, a ty <b>část</b> vnějšího pole uvnitř látky vykompenzují (nikdy ne
          celé — to umí jen vodič).
        </p>

        <Figure caption="Atomová polarizace: bez pole je obal kolem jádra symetrický (vlevo); ve vnějším poli E se kladné jádro a záporný obal vzájemně pošoupnou a vznikne indukovaný dipól p mířící po směru pole.">
          <svg viewBox="0 0 460 180" className="svg-fig">
            <defs><Arrow id="ap" color={ACC} /><Arrow id="apg" color={INNER} /></defs>
            {/* levý atom: bez pole, symetrický */}
            <circle cx="90" cy="80" r="48" fill="none" stroke={MUTED} strokeWidth="2" />
            <circle cx="90" cy="80" r="13" fill={PLUS} />
            <text x="90" y="85" fill="#0b1020" fontSize="15" textAnchor="middle" fontWeight="700">+</text>
            <text x="90" y="155" fill={MUTED} fontSize="13" textAnchor="middle">E = 0</text>

            {/* pole E uprostřed */}
            <line x1="165" y1="80" x2="245" y2="80" stroke={ACC} strokeWidth="3" markerEnd="url(#ap)" />
            <text x="205" y="68" fill={ACC} fontSize="15" textAnchor="middle" fontStyle="italic">E</text>

            {/* pravý atom: deformovaný, jádro posunuto doprava */}
            <ellipse cx="360" cy="80" rx="62" ry="48" fill="none" stroke={MUTED} strokeWidth="2" />
            <circle cx="388" cy="80" r="13" fill={PLUS} />
            <text x="388" y="85" fill="#0b1020" fontSize="15" textAnchor="middle" fontWeight="700">+</text>
            <line x1="330" y1="80" x2="382" y2="80" stroke={INNER} strokeWidth="3" markerEnd="url(#apg)" />
            <text x="350" y="68" fill={INNER} fontSize="14" textAnchor="middle" fontStyle="italic">p</text>
            <text x="360" y="155" fill={MUTED} fontSize="13" textAnchor="middle">atom se protáhl</text>
          </svg>
        </Figure>

        <p>Polarizace má dvě hlavní podoby — podle toho, co se pošoupne:</p>
        <ul>
          <li>
            <b>Atomová polarizace</b> — vzájemně se posune <b>jádro</b> a <b>elektronový obal</b>
            uvnitř atomu. Indukovaný dipól míří po směru pole.
          </li>
          <li>
            <b>Iontová polarizace</b> — u molekul z iontů se vůči sobě posunou <b>kladné a záporné
            ionty</b>. Indukovaný dipól zase míří po směru pole (nezávisle na tom, jak byla molekula
            natočená).
          </li>
        </ul>
        <p>
          Navíc u <Term id="polarni-molekula">polárních molekul</Term> (mají vlastní dipól, třeba voda) přibývá ještě{' '}
          <b>rotace</b> — pole celé molekuly natáčí, aby ležely po směru pole. Tahle orientace je{' '}
          <b>pomalejší</b> a <b>závisí na teplotě</b> (teplo molekuly rozhazuje).
        </p>
      </Section>

      <Section title="Polární × nepolární molekuly">
        <ul>
          <li>
            <b>Polární</b> molekula <b>má</b> vlastní <Concept id="dipolovy-moment">dipólový moment</Concept> i bez pole (náboj v ní je
            rozložený nesymetricky — typicky voda <M>{'\\mathrm{H_2O}'}</M>).
          </li>
          <li>
            <b>Nepolární</b> molekula vlastní dipól <b>nemá</b> — dipól v ní pole teprve{' '}
            <i>vyrobí</i> (indukuje) tím, že ji deformuje.
          </li>
        </ul>
      </Section>

      <Section title="Vodič × dielektrikum (tohle si zapamatuj)">
        <Figure caption="Zásadní rozdíl: vodič vnější pole uvnitř úplně vyruší (E = 0); dielektrikum ho jen zeslabí (E ≠ 0).">
          <svg viewBox="0 0 460 140" className="svg-fig">
            <defs><Arrow id="cmp" color={FIELD} /></defs>
            {/* vodič */}
            <rect x="40" y="35" width="150" height="70" rx="8" fill="#102218" stroke={INNER} strokeWidth="2" />
            <text x="115" y="25" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">vodič</text>
            <text x="115" y="75" fill={INNER} fontSize="15" textAnchor="middle" fontWeight="700">E = 0</text>
            {/* dielektrikum */}
            <rect x="270" y="35" width="150" height="70" rx="8" fill="#1b2436" stroke={MUTED} strokeWidth="2" />
            <text x="345" y="25" fill={TXT} fontSize="13" textAnchor="middle" fontWeight="700">dielektrikum</text>
            <line x1="290" y1="70" x2="360" y2="70" stroke={FIELD} strokeWidth="3" markerEnd="url(#cmp)" />
            <text x="345" y="95" fill={FIELD} fontSize="13" textAnchor="middle">E ≠ 0 (zeslabené)</text>
          </svg>
        </Figure>
      </Section>

      <Callout kind="chytak" title="Chytáky (přesně tady padají body)">
        <ul>
          <li>
            Pohyb nábojů ve vodiči <b>neustane hned</b> — ustane <b>až je celkové pole uvnitř
            nulové</b>: <M>{'\\vec E_1 + \\vec E_2 = \\vec 0'}</M>. To je pointa celé otázky.
          </li>
          <li>
            Uvnitř vodiče je <b>elektrický stín</b> (Faradayova klec). Proto tě v autě nezasáhne
            blesk.
          </li>
          <li>
            Náboj na vodiči sedí <b>na povrchu</b>, <b>ne uvnitř</b>. Uvnitř je <M>{'E = 0'}</M> a
            potenciál <b>konstantní</b>.
          </li>
          <li>
            Dielektrikum pole <b>jen zeslabí</b> (vykompenzuje <b>část</b>), nevyruší ho úplně — to
            umí jen vodič.
          </li>
          <li>
            Nepleť si <b>polarizaci</b> (deformace náboje, rychlá, nezávisí na teplotě) s{' '}
            <b>rotací/orientací</b> molekul (pomalá, závisí na teplotě).
          </li>
        </ul>
      </Callout>

      <ExamGoals
        lessonId={id}
        goals={[
          'Popsat, co se děje s volnými náboji ve vodiči: pohyb ustane, až E₁ + E₂ = 0.',
          'Vědět, že uvnitř vodiče je E = 0, konstantní potenciál, elektrický stín = Faradayova klec.',
          'Vědět, že náboj je na povrchu vodiče, ne uvnitř.',
          'Vysvětlit polarizaci dielektrika a její typy (atomová, iontová) + rotaci.',
          'Rozlišit polární a nepolární molekulu.',
          'Říct rozdíl vodič × dielektrikum (E = 0 vs. jen zeslabené pole).',
        ]}
      />

      <SelfCheck
        items={[
          {
            q: 'Proč a kdy přestanou volné náboje ve vodiči po vložení do vnějšího pole téct?',
            a: (
              <>
                Náboje se přesouvají a vytvářejí vnitřní pole opačného směru. Pohyb ustane{' '}
                <b>v okamžiku, kdy se vnitřní a vnější pole vyruší</b>:{' '}
                <M>{'\\vec E_1 + \\vec E_2 = \\vec 0'}</M> — uvnitř je pak <M>{'E = 0'}</M> a nic
                náboje nepohání.
              </>
            ),
          },
          {
            q: <>Co je Faradayova klec a kde na vodiči sedí náboj?</>,
            a: (
              <>
                Vodič odstíní vnější pole: uvnitř je <b>elektrický stín</b> (<M>{'E = 0'}</M>,
                konstantní potenciál). Náboj je nahromaděný <b>na povrchu</b> vodiče, ne uvnitř.
              </>
            ),
          },
          {
            q: 'Jak reaguje dielektrikum na vnější pole a jaké jsou typy polarizace?',
            a: (
              <>
                Vázané náboje se nemůžou volně hýbat, jen se posunou/pootočí — to je{' '}
                <b>polarizace</b>. Typy: <b>atomová</b> (posun jádra a obalu) a <b>iontová</b> (posun
                kladných a záporných iontů); u polárních molekul navíc <b>rotace</b> (orientace).
                Pole se uvnitř <b>jen zeslabí</b>, nevyruší.
              </>
            ),
          },
          {
            q: 'Jaký je rozdíl mezi polární a nepolární molekulou?',
            a: (
              <>
                <b>Polární</b> má vlastní dipólový moment i bez pole (např. voda).{' '}
                <b>Nepolární</b> ho nemá — dipól v ní teprve indukuje vnější pole svým deformačním
                účinkem.
              </>
            ),
          },
        ]}
      />
    </>
  )
}
