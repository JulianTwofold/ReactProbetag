import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestTag from './TestTag.tsx'

// <App />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <TestTag/>
  </StrictMode>,
)
