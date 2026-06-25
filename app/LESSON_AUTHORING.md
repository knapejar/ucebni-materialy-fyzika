# Jak psát lekce (návod pro generátor lekcí)

Tento dokument je závazná šablona pro tvorbu jedné lekce. Když ho dodržíš, lekce
se sama zaregistruje do aplikace a bude fungovat proklikávání, krokování i matematika.

## 0) Pro koho píšeš (TÓN — nejdůležitější)

Studentka **Luci** fyziku nemá ráda, **není to její obor**, ale chce předmět
**zvládnout na jedničku**. Proto:

- Vysvětluj **lidsky a prakticky**, jako bys to vysvětloval někomu chytrému, kdo
  ale fyziku dělat nechce — žádné zbytečné odbočky, žádná „krása fyziky“.
- Jdi po tom, **co se reálně zkouší** a **jak to napsat** u zkoušky.
- **Po malých dávkách.** Jedna lekce = jeden zátah 15–30 min.
- Zdůrazňuj **chytáky** (kde se ztrácejí body) — jsou cennější než další vzoreček.
- Každé tvrzení podpoř **konkrétním příkladem** nebo názorným obrázkem.

## 1) Kde lekci vytvořit

Soubor: `app/src/content/lessons/<id-s-pomlckou>.tsx`
Příklady: lekce `2.3` → `2-3.tsx`, lekce `4.3a` → `4-3a.tsx`.

Povinný tvar souboru:

```tsx
import { Section, M, MB, Concept, Term, Figure, StepFigure, Callout, ExamGoals, SelfCheck } from '../../components/lesson/primitives'

export const id = '2.3'           // PŘESNÉ id lekce z osnovy

export default function Lesson() {
  return (
    <>
      {/* obsah lekce */}
    </>
  )
}
```

> Nepiš nadpis celé lekce ani číslo/badge — hlavičku (titulek, „navazuje na“,
> tlačítko Hotovo) přidává appka sama. Ty píšeš jen **obsah**.

## 2) Z čeho čerpat obsah

- **Osnova lekce**: soubor `navrh_deleni.md` (root repa) — sekce „Lekce <id>“.
  Najdeš tam přesně: Obsah, **Co umět na 1** (→ `ExamGoals`), **Chytáky**
  (→ `Callout kind="chytak"`), Zdroje, Prerekvizity.
- **Plný výklad a ilustrace**: přepisy v `processed/` (HTML). Soubory, ze kterých
  lekce čerpá, jsou v osnově u pole „Zdroj“. Hlavní výklad je `Fyzika.html`,
  obrázkové poznámky jsou tematické (`Otázky pole.html`, `Otázky vlnění…`, …),
  `Q-…` jsou zkouškové otázky (→ `SelfCheck`).
- Stejná data jsou strojově i v `app/src/data/course.json` (cíle, chytáky…).

## 3) Komponenty, které máš k dispozici

| Komponenta | K čemu | Příklad |
|---|---|---|
| `<Section title="…">` | nadpis sekce + obsah | `<Section title="Coulombův zákon">…</Section>` |
| `<M>{'…'}</M>` | matematika inline (LaTeX) | `<M>{'E = F/q'}</M>` |
| `<MB>{'…'}</MB>` | matematika blokově (vystředěná) | `<MB>{'\\vec F = k\\frac{Q_1 Q_2}{r^2}'}</MB>` |
| `<Concept id="…">text</Concept>` | **wiki-proklik** na lekci, kde je pojem vyložen | `<Concept id="intenzita-pole">intenzitu</Concept>` |
| `<Term>text</Term>` | zvýraznění pojmu definovaného **tady** | `<Term>dipól</Term>` |
| `<Figure caption="…">` | statická ilustrace (inline SVG) | viz níže |
| `<StepFigure steps={[…]}/>` | **krokovatelná** ilustrace procesu (Další/Zpět) | viz níže |
| `<Callout kind="chytak\|tip\|cil\|pozor\|info">` | barevný box | chytáky, tipy |
| `<ExamGoals lessonId={id} goals={[…]}/>` | checklist „co umět na 1“ | na konci lekce |
| `<SelfCheck items={[{q,a}]}/>` | otázky s odkrytím odpovědi | na konci lekce |

### Matematika
Píšeš **LaTeX** uvnitř řetězce (pozor na zdvojená zpětná lomítka v JS): `<M>{'\\alpha'}</M>`,
`<MB>{'\\frac{\\mathrm d\\vec p}{\\mathrm dt}'}</MB>`. Renderuje to KaTeX (bundlovaný, offline).

### Proklikávání pojmů (důležitý požadavek)
Kdykoli **použiješ** pojem, který je vyložený v jiné (dřívější) lekci, obal ho do
`<Concept id="…">`. Když pojem **poprvé definuješ ve své lekci**, přidej ho do
registru `app/src/content/concepts.ts`:

```ts
'intenzita-pole': { lesson: '2.3', label: 'intenzita pole', short: 'E = F/q — síla na jednotkový náboj.' },
```

`id` je krátký kebab-case bez diakritiky. Díky tomu se na pojem dá kdekoli později
prokliknout jako ve Wikipedii. (Nepřipomínej v textu „učili jsme se v lekci X“ —
stačí proklik.)

## 4) Ilustrace — MUSÍ být hezké a názorné

- Vždy **inline `<svg>`** (žádné externí obrázky). Tmavé pozadí appky → používej
  světlé tahy/text (`#e8ecf8`) a barevné akcenty.
- **Převezmi ilustraci z `processed/`** (originál z materiálů) — ale **udělej ji
  hezčí, čistší a srozumitelnější** (jasné popisky, šipky, barvy podle významu).
- **Když jde o proces** (postup, vznik jevu, rozpad, vychylování, interference…),
  udělej z toho `StepFigure` — student to proklikne krok po kroku.
- Pochop, co obrázek znamená (fyzikálně), a teprve pak kresli. **Když je originál
  nedešifrovatelný, nekresli matoucí nesmysl** — radši vynech nebo stručně popiš.

Statická ilustrace:
```tsx
<Figure caption="Intenzita E směřuje od kladného náboje.">
  <svg viewBox="0 0 320 160" className="svg-fig">
    <defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill="#fb7185" /></marker></defs>
    <circle cx="60" cy="80" r="16" fill="#fb7185" />
    <text x="60" y="85" textAnchor="middle" fill="#0a0e1c" fontWeight="700">+</text>
    <line x1="80" y1="80" x2="250" y2="80" stroke="#fb7185" strokeWidth="3" markerEnd="url(#ar)" />
    <text x="170" y="66" fill="#e8ecf8" textAnchor="middle">E</text>
  </svg>
</Figure>
```

Krokovatelná ilustrace:
```tsx
<StepFigure
  title="…"
  steps={[
    { label: 'výchozí stav', caption: <>popisek kroku (může mít <M>{'…'}</M>)</>, content: (<svg …>…</svg>) },
    { label: 'po změně',     caption: <>…</>, content: (<svg …>…</svg>) },
  ]}
/>
```

## 5) Doporučená stavba lekce

1. **Úvodní `<p className="lead">`** — 1–2 věty: proč to potřebuješ a co z toho je u zkoušky.
2. **`<Section>`** bloky výkladu — krátké, s příklady a obrázky.
3. Aspoň **jedna ilustrace** (ideálně `StepFigure`, pokud je tam proces).
4. **`<Callout kind="chytak">`** s chytáky z osnovy.
5. **`<ExamGoals lessonId={id} goals={[…]}/>`** — cíle „co umět na 1“.
6. **`<SelfCheck items={…}/>`** — 2–4 otázky z `Q-…` s odkrytím odpovědi.

## 6) Kontrola před odevzdáním

- `export const id` přesně odpovídá osnově.
- Vše důležité z osnovy je pokryto, nic nechybí; chytáky jsou zvýrazněné.
- Pojmy z dřívějších lekcí jsou proklikávací (`<Concept>`), nové jsou v `concepts.ts`.
- Ilustrace jsou inline SVG, hezké a názorné; procesy jako `StepFigure`.
- `pnpm --dir app build` projde bez chyb.
