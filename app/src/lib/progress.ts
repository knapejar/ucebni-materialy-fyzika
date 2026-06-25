import { useCallback, useEffect, useState } from 'react'

// Ukládání pokroku do localStorage — podporuje dobré návyky učení:
// označení "hotovo" a sledování, co už máš za sebou.
const KEY = 'fyzika.progress.v1'

type ProgressMap = Record<string, { done?: boolean; seen?: boolean }>

function read(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}
function write(p: ProgressMap) {
  localStorage.setItem(KEY, JSON.stringify(p))
  window.dispatchEvent(new Event('fyzika-progress'))
}

export function markSeen(id: string) {
  const p = read()
  if (!p[id]?.seen) {
    p[id] = { ...p[id], seen: true }
    write(p)
  }
}
export function toggleDone(id: string) {
  const p = read()
  p[id] = { ...p[id], done: !p[id]?.done }
  write(p)
}

export function useProgress() {
  const [map, setMap] = useState<ProgressMap>(read)
  useEffect(() => {
    const h = () => setMap(read())
    window.addEventListener('fyzika-progress', h)
    window.addEventListener('storage', h)
    return () => {
      window.removeEventListener('fyzika-progress', h)
      window.removeEventListener('storage', h)
    }
  }, [])
  const isDone = useCallback((id: string) => !!map[id]?.done, [map])
  const isSeen = useCallback((id: string) => !!map[id]?.seen, [map])
  return { map, isDone, isSeen, toggleDone, markSeen }
}
