import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Quote from './Quote'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Quote></Quote>
  </StrictMode>,
)
