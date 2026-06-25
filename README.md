# Fyzika — interaktivní učebnice

Interaktivní učební materiál fyziky stavěný jako **myšlenková mapa** s plynulým
„Prezi" zoomem: klikneš na téma → přiblíží se a ukáže lekce → klik na lekci tě
zanoří do výkladu. Cílem je dostat studenta **na jedničku** efektivně a po malých
dávkách — ne udělat z něj fyzika.

## Co umí

- 🗺️ **Navigace = myšlenková mapa** (5 témat → 40 lekcí) s plynulým zoomem dovnitř/ven.
- 🧩 **Malé samostatné lekce** — každá na jeden zátah (15–30 min), s cíli „co umět na 1“ a chytáky.
- 🎞️ **Krokovatelné ilustrace** (tlačítka Další/Zpět) pro procesy; matematika přes KaTeX (offline).
- 🔗 **Proklikávací pojmy** ve stylu wiki — pojem se dá otevřít jedním klikem tam, kde je vyložen.
- ✅ **Sledování pokroku** (uloženo v prohlížeči) a self-check „Umím to?“.

## Témata

1. **Mechanika** (7 lekcí)
2. **Fyzikální pole** — gravitace, elektřina, magnetismus (11 lekcí)
3. **Kmity a vlnění** vč. optiky (9 lekcí)
4. **Kvantová fyzika** (6 lekcí)
5. **Jaderná a atomová fyzika** (7 lekcí)

## Spuštění lokálně

```bash
cd app
pnpm install
pnpm dev
```

Build statické verze: `pnpm build` (výstup `app/dist`). Nasazení běží automaticky
přes GitHub Actions na GitHub Pages (viz `.github/workflows/deploy.yml`).

## Struktura

```
app/                      Webová aplikace (Vite + React + TypeScript)
  src/data/course.json    Struktura kurzu (témata, lekce, cíle, chytáky) — generováno z plánu
  src/content/lessons/    Jednotlivé lekce (1 soubor = 1 lekce)
  src/content/concepts.ts Registr pojmů pro proklikávání
  src/components/         Myšlenková mapa + komponenty lekcí
  LESSON_AUTHORING.md     Návod, jak psát lekce
navrh_deleni.md           Plán členění učiva na témata a lekce
```

> Zdrojové materiály (`raw/`, `processed/`) nejsou součástí veřejného repozitáře.
