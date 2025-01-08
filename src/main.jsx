import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
