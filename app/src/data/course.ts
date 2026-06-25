import raw from './course.json'

export type Badge = 'MUST-HAVE' | 'NAVÍC' | null

export interface Lesson {
  id: string
  title: string
  badge: Badge
  obsah: string
  goals: string[]
  chytaky: string[]
  prereq: string[]
  sources: string[]
  minutes: number | null
  questions: number | null
}

export interface Theme {
  num: number
  title: string
  subtitle: string
  accent: string
  accent2: string
  glow: string
  lessons: Lesson[]
}

export interface Course {
  themes: Theme[]
}

export const course = raw as Course
export const themes = course.themes

/** krátký název tématu (bez závorky s upřesněním) */
export function themeShort(t: Theme): string {
  return t.title.replace(/\s*\(.*\)\s*$/, '').trim()
}

const lessonIndex = new Map<string, { lesson: Lesson; theme: Theme }>()
for (const t of themes) for (const l of t.lessons) lessonIndex.set(l.id, { lesson: l, theme: t })

export function getLesson(id: string): { lesson: Lesson; theme: Theme } | undefined {
  return lessonIndex.get(id)
}

export function getTheme(num: number): Theme | undefined {
  return themes.find((t) => t.num === num)
}

export function themeOfLesson(id: string): Theme | undefined {
  return lessonIndex.get(id)?.theme
}

export function allLessons(): Lesson[] {
  return themes.flatMap((t) => t.lessons)
}

/** lekce, které mají tuto lekci jako prerekvizitu (navazují na ni) */
export function unlockedBy(id: string): Lesson[] {
  return allLessons().filter((l) => l.prereq.includes(id))
}

// Lineární pořadí lekcí (témata po sobě, v každém lekce po sobě) — pro tlačítko „Další lekce".
const orderedLessons: Lesson[] = themes.flatMap((t) => t.lessons)

export function nextLesson(id: string): Lesson | undefined {
  const i = orderedLessons.findIndex((l) => l.id === id)
  return i >= 0 ? orderedLessons[i + 1] : undefined
}

export function prevLesson(id: string): Lesson | undefined {
  const i = orderedLessons.findIndex((l) => l.id === id)
  return i > 0 ? orderedLessons[i - 1] : undefined
}
