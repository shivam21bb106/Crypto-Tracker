import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "react-alice-carousel/lib/alice-carousel.css";

import CryptoContext from './CryptoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </StrictMode>,
)
