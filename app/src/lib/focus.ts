// Proklik pojmu → odscrolluje k jeho definici a zvýrazní ji.
// Zvýraznění zůstává, DOKUD student neudělá aktivitu (pohne myší, scrollne kolečkem,
// stiskne klávesu, klikne, dotkne se) — pak plynule zhasne.
// Pozn.: programové scrollIntoView NEspouští 'wheel'/'mousemove', takže si zvýraznění
// samo nezhasne; proto mezi spouštěče aktivity NEdáváme 'scroll'.

const ACTIVITY = ['mousemove', 'wheel', 'keydown', 'pointerdown', 'touchstart'] as const
let teardown: (() => void) | null = null

export function focusConcept(conceptId: string, delay = 80) {
  let tries = 0
  const attempt = () => {
    const el = document.querySelector<HTMLElement>(`[data-concept="${cssAttr(conceptId)}"]`)
    if (!el) {
      if (tries++ < 25) setTimeout(attempt, 80)
      return
    }
    apply(el)
  }
  setTimeout(attempt, delay)
}

function apply(el: HTMLElement) {
  // zrušit předchozí zvýraznění
  if (teardown) teardown()
  document.querySelectorAll('.is-concept-focus').forEach((e) => e.classList.remove('is-concept-focus'))

  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  // restart animace
  el.classList.remove('is-concept-focus')
  void el.offsetWidth
  el.classList.add('is-concept-focus')

  let armed = false
  const armTimer = window.setTimeout(() => (armed = true), 550) // grace, ať se zvýraznění stihne ukázat
  const dismiss = () => {
    if (!armed) return
    el.classList.remove('is-concept-focus')
    clear()
  }
  const clear = () => {
    window.clearTimeout(armTimer)
    ACTIVITY.forEach((ev) => window.removeEventListener(ev, dismiss))
    teardown = null
  }
  ACTIVITY.forEach((ev) => window.addEventListener(ev, dismiss, { passive: true }))
  teardown = () => {
    el.classList.remove('is-concept-focus')
    clear()
  }
}

function cssAttr(s: string): string {
  return s.replace(/["\\]/g, '\\$&')
}
