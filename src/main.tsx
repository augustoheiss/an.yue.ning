import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import SoutusPage from './pages/SoutusPage'
import LegalPage from './pages/LegalPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/soutus" element={<SoutusPage />} />
        <Route path="/termos" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
