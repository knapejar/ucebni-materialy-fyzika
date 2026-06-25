import type { ComponentType } from 'react'
import { concepts, type ConceptDef } from '../concepts'

// Auto-registr lekcí. Každý soubor lekce (např. `1-1.tsx`) exportuje:
//   export const id = '1.1'
//   export default function LessonBody() { ... }
//   export const provides = { 'pojem-id': { lesson: '1.1', label, short } }   // volitelné
// Tento registr je sám posbírá — subagent stačí přidat soubor, nic víc.

const modules = import.meta.glob('./*.tsx', { eager: true }) as Record<
  string,
  { id?: string; default?: ComponentType; provides?: Record<string, ConceptDef> }
>

export const lessonBodies: Record<string, ComponentType> = {}
// Katalog pojmů, které jednotlivé lekce zavádějí — využije ho pozdější "linker"
// průchod k propojení pojmů napříč lekcemi (wiki proklik).
export const providedConcepts: Record<string, ConceptDef> = {}

for (const path in modules) {
  const m = modules[path]
  if (m.id && m.default) lessonBodies[m.id] = m.default
  if (m.provides) Object.assign(providedConcepts, m.provides)
}

// Sloučení do živého registru pojmů: seed (concepts.ts) má přednost, lekce doplní
// zbytek. Díky tomu <Concept id="..."> najde cíl i pro pojmy zavedené v lekcích.
for (const k in providedConcepts) {
  if (!(k in concepts)) concepts[k] = providedConcepts[k]
}

export function hasBody(id: string): boolean {
  return !!lessonBodies[id]
}
