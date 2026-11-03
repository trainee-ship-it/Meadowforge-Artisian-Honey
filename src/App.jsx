import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { OurStory } from './pages/OurStory'
import { Shop } from './pages/Shop'
import { Traceability } from './pages/Traceability'
import { Journal } from './pages/Journal'
import { Contact } from './pages/Contact'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/traceability" element={<Traceability />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
