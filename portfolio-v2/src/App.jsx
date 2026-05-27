import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Work from './pages/Work'
import System from './pages/System'
import Writing from './pages/Writing'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/system" element={<System/>} />
        <Route path="/writing" element={<Writing/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App