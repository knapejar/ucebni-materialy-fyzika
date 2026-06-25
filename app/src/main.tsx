import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import './styles/global.css'
import { ZoomProvider } from './lib/nav'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ZoomProvider>
        <App />
      </ZoomProvider>
    </HashRouter>
  </React.StrictMode>,
)
