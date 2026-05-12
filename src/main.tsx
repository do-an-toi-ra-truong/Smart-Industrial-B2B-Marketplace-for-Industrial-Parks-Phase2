import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './assets/styles/bootstrap.min.css'
import './assets/styles/bootstrap-icons.css'
import './assets/styles/aos.css'
import './assets/styles/swiper-bundle.min.css'
import './assets/styles/glightbox.min.css'
import './assets/styles/all.min.css'       // Font Awesome


// ── App styles (must come last to override vendors) ────────
import './assets/styles/main.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
