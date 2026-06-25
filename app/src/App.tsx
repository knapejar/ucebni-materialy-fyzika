import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Atlas from './components/mindmap/Atlas'
import ThemeView from './components/mindmap/ThemeView'
import LessonView from './components/lesson/LessonView'

export default function App() {
  const location = useLocation()
  return (
    <div className="app-root">
      <div className="starfield" aria-hidden />
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Atlas />} />
          <Route path="/tema/:t" element={<ThemeView />} />
          <Route path="/lekce/:id" element={<LessonView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
