import { Component, type ReactNode } from 'react'

// Pojistka: když render konkrétní lekce spadne (např. po pozdější úpravě grafiky),
// nezhroutí se celá aplikace — ukáže se jen hláška místo dané lekce.
export class LessonErrorBoundary extends Component<{ children: ReactNode }, { error?: Error }> {
  state: { error?: Error } = {}
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="lesson-error">
          <p>😕 Tuhle lekci se zrovna nepodařilo zobrazit (chyba ve výkladu). Zkus jinou — tahle se opraví.</p>
          <small>{String(this.state.error.message)}</small>
        </div>
      )
    }
    return this.props.children
  }
}
