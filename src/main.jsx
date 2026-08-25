import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Beliefs from './pages/Beliefs.jsx'
import Visit from './pages/Visit.jsx'
import Ministries from './pages/Ministries.jsx'
import Watch from './pages/Watch.jsx'
import Events from './pages/Events.jsx'
import Giving from './pages/Giving.jsx'
import Prayer from './pages/Prayer.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/events" element={<Events />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
)
