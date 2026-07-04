import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'

const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === '/terms' ? Terms : path === '/privacy' ? Privacy : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
