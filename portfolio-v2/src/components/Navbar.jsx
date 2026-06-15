import { Link, useLocation } from 'react-router-dom'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path
  const className = (path) => `${isActive(path) ? 'text-amber-500' : 'text-white'} hover:text-amber-500`
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-950 top-0 text-white border-b border-gray-800">
      <div className="flex items-center font-bold text-2xl">
        <Link to="/" className="text-amber-500">Sujoy Mondal</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/" className={className('/')}>Home</Link>
        <Link to="/case-studies" className={className('/case-studies')}>Case Studies</Link>
        <Link to="/contact" className={className('/contact')}>Contact</Link>
        <a href="https://www.linkedin.com/in/sujoymondal-tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
          <FiLinkedin size={18} />
        </a>
        <a href="https://github.com/sujoymondal87" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">
          <FiGithub size={18} />
        </a>
      </div>
    </div>
  )
}

export default Navbar