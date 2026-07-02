import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 mt-6">
            <div className="max-w-[1100px] mx-auto px-6 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-[minmax(240px,320px)_max-content_max-content] md:justify-between items-start gap-8 mb-8">
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-amber-500 font-bold text-2xl mb-2">Sujoy Mondal</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Building production systems end-to-end for over a decade. Offline-first, AR, AI orchestration, real-time sync.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-sm font-semibold mb-1">Navigation</p>
                        <Link className="text-gray-300 text-sm hover:text-amber-500 transition" to="/">Home</Link>
                        <Link className="text-gray-300 text-sm hover:text-amber-500 transition" to="/systems">Systems</Link>
                        <Link className="text-gray-300 text-sm hover:text-amber-500 transition" to="/case-studies">Case Studies</Link>
                        <Link className="text-gray-300 text-sm hover:text-amber-500 transition" to="/posts">Engineering Notes</Link>
                        <Link className="text-gray-300 text-sm hover:text-amber-500 transition" to="/contact">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-sm font-semibold mb-1">Connect</p>
                        <a className="text-gray-300 text-sm hover:text-amber-500 transition flex items-center gap-2" href="https://linkedin.com/in/sujoymondal-tech" target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a>
                        <a className="text-gray-300 text-sm hover:text-amber-500 transition flex items-center gap-2" href="https://github.com/sujoymondal87" target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-500 text-xs text-center">© 2026 Sujoy Kumar Mondal</p>
                </div>
            </div>
        </footer>
    )
}