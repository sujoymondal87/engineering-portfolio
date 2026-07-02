import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/systems', label: 'Systems' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/posts', label: 'Engineering Notes' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false)
  const isActive = (path) => location.pathname === path
  const className = (path) => `${isActive(path) ? 'text-amber-500' : 'text-white'} hover:text-amber-500`

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="bg-gray-950 text-white border-b border-gray-800">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center font-bold text-2xl">
          <Link to="/" className="text-amber-500">Sujoy Mondal</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={className(link.to)}>{link.label}</Link>
          ))}
          <a href="https://www.linkedin.com/in/sujoymondal-tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
            <FiLinkedin size={18} />
          </a>
          <a href="https://github.com/sujoymondal87" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
            <FiGithub size={18} />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`py-2 text-base ${className(link.to)}`}>{link.label}</Link>
          ))}
          <div className="flex gap-4 pt-3">
            <a href="https://www.linkedin.com/in/sujoymondal-tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
              <FiLinkedin size={18} />
            </a>
            <a href="https://github.com/sujoymondal87" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
