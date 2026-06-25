// Registr pojmů pro wiki-proklikávání. Klíč = id pojmu, hodnota = lekce,
// kde je pojem vyložen, + krátký popis (tooltip). Když v lekci použiješ
// <Concept id="...">…</Concept>, odkáže to sem.
//
// Subagenti tvořící lekce sem PŘIDÁVAJÍ nové pojmy, které ve své lekci
// poprvé definují (id = krátký kebab-case bez diakritiky).

export interface ConceptDef {
  lesson: string // id lekce, kde je pojem vyložen
  label: string // lidský název
  short?: string // krátké vysvětlení do tooltipu
}

export const concepts: Record<string, ConceptDef> = {
  // —— Téma 1: Mechanika ——
  'sila': { lesson: '1.1', label: 'síla', short: 'Vektorová veličina [N], příčina změny pohybu.' },
  'newtonovy-zakony': { lesson: '1.1', label: 'Newtonovy zákony', short: 'Tři zákony pohybu (setrvačnosti, síly, akce a reakce).' },
  'pohybova-rovnice': { lesson: '1.1', label: 'pohybová rovnice', short: 'F = m·a = dp/dt.' },
  'hmotny-bod': { lesson: '1.1', label: 'hmotný bod', short: 'Těleso, jehož rozměry zanedbáváme.' },
  'hybnost': { lesson: '1.2', label: 'hybnost', short: 'p = m·v, „množství pohybu".' },
  'impulz-sily': { lesson: '1.2', label: 'impulz síly', short: 'Působení síly za čas, mění hybnost.' },
  'zachovani-hybnosti': { lesson: '1.2', label: 'zákon zachování hybnosti', short: 'V izolované soustavě je celková hybnost stálá.' },
  'prace': { lesson: '1.3', label: 'práce', short: 'W = F·s·cos α (skalární součin síly a dráhy).' },
  'kineticka-energie': { lesson: '1.3', label: 'kinetická energie', short: 'Energie pohybu, ½mv².' },
  'potencialni-energie': { lesson: '1.3', label: 'potenciální energie', short: 'Energie polohy (např. mgh).' },
  'skalarni-soucin': { lesson: '1.3', label: 'skalární součin', short: 'a·b = |a||b|cos α — výsledkem je číslo.' },
  'konzervativni-pole': { lesson: '1.4', label: 'konzervativní pole', short: 'Práce nezávisí na dráze, jen na koncových bodech.' },
  'zachovani-energie': { lesson: '1.4', label: 'zákon zachování energie', short: 'ΔEk + ΔEp = 0 (v konzervativním poli).' },
  'teziste': { lesson: '1.5', label: 'těžiště', short: 'Vážený průměr poloh hmotných bodů soustavy.' },
  'moment-sily': { lesson: '1.5', label: 'moment síly', short: 'Γ = J·α = dL/dt, „otáčivý účinek" síly.' },
  'okamzita-rychlost': { lesson: '1.6', label: 'okamžitá rychlost', short: 'Limita průměrné rychlosti pro Δt → 0.' },
  'kineticka-teorie': { lesson: '1.7', label: 'kinetická teorie hmoty', short: 'Spojuje makroskopický stav s pohybem částic.' },
  'teplota': { lesson: '1.7', label: 'teplota', short: 'Míra intenzity tepelného pohybu částic.' },
  'brownuv-pohyb': { lesson: '1.7', label: 'Brownův pohyb', short: 'Náhodný pohyb zrnek díky nárazům částic.' },

  // —— Téma 2: Fyzikální pole ——
  'gravitacni-pole': { lesson: '2.1', label: 'gravitační pole', short: 'Pole přitažlivé síly mezi hmotnostmi.' },
  'gravitacni-zakon': { lesson: '2.1', label: 'Newtonův gravitační zákon', short: 'F = κ·m₁m₂/r².' },
  'naboj': { lesson: '2.2', label: 'elektrický náboj', short: 'Skalární vlastnost částic, kladný/záporný.' },
  'coulombuv-zakon': { lesson: '2.2', label: 'Coulombův zákon', short: 'F = k·Q₁Q₂/r².' },
  'permitivita': { lesson: '2.2', label: 'permitivita', short: 'Vlastnost prostředí, ε = εr·ε₀.' },
  'vodic': { lesson: '2.2', label: 'vodič', short: 'Látka s volnými náboji.' },
  'dielektrikum': { lesson: '2.2', label: 'dielektrikum', short: 'Izolant — náboje jsou vázané.' },
  'intenzita-pole': { lesson: '2.3', label: 'intenzita pole', short: 'E = F/q — síla na jednotkový náboj (vektor).' },
  'potencial': { lesson: '2.3', label: 'potenciál', short: 'φ = Ep/q — energie na jednotkový náboj (skalár).' },
  'silocary': { lesson: '2.3', label: 'siločáry', short: 'Čáry znázorňující směr intenzity pole.' },
  'ekvipotencialy': { lesson: '2.3', label: 'ekvipotenciální plochy', short: 'Plochy stejného potenciálu; E je k nim kolmá.' },
  'superpozice': { lesson: '2.3', label: 'princip superpozice', short: 'Pole více zdrojů se vektorově sčítají.' },
  'dipol': { lesson: '2.4', label: 'elektrický dipól', short: 'Dvojice opačných nábojů ve vzdálenosti d.' },
  'dipolovy-moment': { lesson: '2.4', label: 'dipólový moment', short: 'p = Q·d.' },
  'gaussova-veta': { lesson: '2.5', label: 'Gaussova věta', short: 'Tok intenzity uzavřenou plochou = Q/ε₀.' },
  'magneticke-pole': { lesson: '2.6', label: 'magnetické pole', short: 'Budí ho pohybující se náboj (proud).' },
  'biot-savart': { lesson: '2.6', label: 'Biot-Savartův zákon', short: 'Indukce pole od proudového elementu.' },
  'amperuv-zakon': { lesson: '2.6', label: 'Ampérův zákon', short: '∮B·ds = μ₀·Ic.' },
  'elektricky-proud': { lesson: '2.6', label: 'elektrický proud', short: 'I = dQ/dt, náboj prošlý za čas.' },
  'lorentzova-sila': { lesson: '2.7', label: 'Lorentzova síla', short: 'F = q·v×B; je kolmá na rychlost.' },
  'hmotova-spektroskopie': { lesson: '2.7', label: 'hmotová spektroskopie', short: 'Třídění iontů podle poloměru r = mv/BQ.' },
  'elmag-indukce': { lesson: '2.8', label: 'elektromagnetická indukce', short: 'Změna magnetického toku indukuje napětí.' },
  'magneticky-tok': { lesson: '2.8', label: 'magnetický tok', short: 'Φ = B·S·cos α.' },
  'faraduv-zakon': { lesson: '2.8', label: 'Faradayův zákon', short: 'εᵢ = −dΦ/dt.' },
  'faradayova-klec': { lesson: '2.10', label: 'Faradayova klec', short: 'Uvnitř vodiče je elektrický stín (E = 0).' },

  // —— Téma 3: Kmity a vlnění ——
  'kmit': { lesson: '3.1', label: 'kmit', short: 'Periodický pohyb kolem rovnovážné polohy.' },
  'harmonicky-oscilator': { lesson: '3.1', label: 'harmonický oscilátor', short: 'Výchylka podle sinu; F = −k·u.' },
  'rezonance': { lesson: '3.2', label: 'rezonance', short: 'Vnější frekvence = vlastní → maximální amplituda.' },
  'vlneni': { lesson: '3.4', label: 'vlnění', short: 'Šíření kmitů pružnými vazbami.' },
  'vlnova-delka': { lesson: '3.4', label: 'vlnová délka', short: 'λ — vzdálenost dvou stejných fází.' },
  'vlnoplocha': { lesson: '3.4', label: 'vlnoplocha', short: 'Plocha bodů se stejnou fází.' },
  'stojate-vlneni': { lesson: '3.5', label: 'stojaté vlnění', short: 'Uzly a kmitny; vzniká interferencí proti sobě.' },
  'interference': { lesson: '3.6', label: 'interference', short: 'Skládání vln — max/min podle dráhového rozdílu.' },
  'fazova-rychlost': { lesson: '3.6', label: 'fázová rychlost', short: 'Rychlost bodu se stejnou fází.' },
  'grupova-rychlost': { lesson: '3.6', label: 'grupová rychlost', short: 'Rychlost přenosu energie (vlnového klubka).' },
  'huygensuv-princip': { lesson: '3.7', label: 'Huygensův princip', short: 'Každý bod vlnoplochy = zdroj elementárního vlnění.' },
  'doppleruv-jev': { lesson: '3.7', label: 'Dopplerův jev', short: 'Pohyb zdroje/pozorovatele mění frekvenci.' },
  'polarizace-svetla': { lesson: '3.9', label: 'polarizace světla', short: 'Kmity E v jedné rovině; jen u příčného vlnění.' },

  // —— Téma 4: Kvantová fyzika ——
  'dualismus': { lesson: '4.1', label: 'dualismus', short: 'Mikroobjekt je jednou vlna, jednou částice — nikdy zároveň.' },
  'foton': { lesson: '4.1', label: 'foton', short: 'Kvantum elmag. pole; E = hν, nulová klidová hmotnost.' },
  'de-broglie': { lesson: '4.1', label: 'de Broglieho vlna', short: 'λ = h/p — vlnová délka částice.' },
  'planckuv-vyzarovaci-zakon': { lesson: '4.2', label: 'Planckův vyzařovací zákon', short: 'Záření po kvantech hν; vyřešil „ultrafialovou katastrofu".' },
  'cerne-teleso': { lesson: '4.2', label: 'absolutně černé těleso', short: 'Pohlcuje veškeré dopadající záření.' },
  'fotoefekt': { lesson: '4.3a', label: 'fotoelektrický jev', short: 'Foton uvolní elektron; hν = Eₑ + výstupní práce.' },
  'vystupni-prace': { lesson: '4.3a', label: 'výstupní práce', short: 'Energie nutná k uvolnění elektronu z látky.' },
  'comptonuv-jev': { lesson: '4.4', label: 'Comptonův jev', short: 'Rozptyl fotonu na elektronu; foton ztratí energii.' },
  'heisenberg': { lesson: '4.5', label: 'Heisenbergovy relace', short: 'Δx·Δp ≥ ℏ/2 — neredukovatelné minimum.' },
  'vlnova-funkce': { lesson: '4.5', label: 'vlnová funkce', short: '|ψ|² = hustota pravděpodobnosti polohy.' },

  // —— Téma 5: Jaderná a atomová fyzika ——
  'nukleony': { lesson: '5.1', label: 'nukleony', short: 'Protony a neutrony v jádře.' },
  'izotopy': { lesson: '5.1', label: 'izotopy', short: 'Stejné Z, různé N — stejné chemické vlastnosti.' },
  'jaderne-sily': { lesson: '5.1', label: 'jaderné síly', short: 'Přitažlivé, krátký dosah, nezávislé na náboji.' },
  'vazebna-energie': { lesson: '5.2', label: 'vazebná energie', short: 'Energie držící jádro; souvisí s hmotnostním úbytkem.' },
  'radioaktivita': { lesson: '5.3a', label: 'radioaktivita', short: 'Samovolný přechod jádra do stabilnějšího stavu.' },
  'aktivita': { lesson: '5.3a', label: 'aktivita', short: 'Počet rozpadů za čas [Bq]; závisí na množství.' },
  'polocas-rozpadu': { lesson: '5.3a', label: 'poločas rozpadu', short: 'T₁/₂ = τ·ln2 — čas, za který se rozpadne polovina.' },
  'alfa-rozpad': { lesson: '5.3b', label: 'rozpad α', short: 'Emise jádra helia; Z−2, A−4.' },
  'beta-rozpad': { lesson: '5.3b', label: 'rozpad β', short: 'β⁻ (Z+1), β⁺ (Z−1), záchyt e⁻, inverzní β.' },
  'gama-rozpad': { lesson: '5.3b', label: 'rozpad γ', short: 'Emise fotonu; jádro se neposouvá.' },
  'tunelovy-jev': { lesson: '5.4', label: 'tunelový jev', short: 'Kvantová možnost projít energetickou bariérou.' },
  'jaderna-synteza': { lesson: '5.5', label: 'jaderná syntéza', short: 'Spojení lehkých jader (fúze).' },
  'stepeni': { lesson: '5.5', label: 'štěpení', short: 'Rozbití těžkého jádra neutronem; řetězová reakce.' },
  'davka': { lesson: '5.6', label: 'dávka záření', short: 'D = E_D/Δm [Gy].' },
  'kerma': { lesson: '5.6', label: 'kerma', short: 'K = E_K/Δm [Gy] pro nepřímo ionizující záření.' },
}
