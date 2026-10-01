import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Layout } from './Layout.tsx'
import { Home } from './pages/Home.tsx'
import { JobLinkRedirect } from './pages/JobLinkRedirect.tsx'
import { Privacidade } from './pages/Privacidade.tsx'
import { Suporte } from './pages/Suporte.tsx'
import { Termos } from './pages/Termos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacidade" element={<Privacidade />} />
          <Route path="termos" element={<Termos />} />
          <Route path="suporte" element={<Suporte />} />
        </Route>
        <Route path="vaga/:id" element={<JobLinkRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
