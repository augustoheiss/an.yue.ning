import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#filosofia', label: 'Filosofia' },
    { href: '#transformacao', label: 'Transformação' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Quem Somos' },
    { href: '#contato', label: 'Contato' },
  ]

  const handleClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-lg border-b border-sage-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-2xl tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-forest-700' : 'text-ivory-50'
            }`}
          >
            An.Yue.Ning
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terra-500 ${
                  isScrolled ? 'text-slate-700' : 'text-ivory-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/soutus"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terra-500 ${
                isScrolled ? 'text-slate-700' : 'text-ivory-100'
              }`}
            >
              Pilar Soutus
            </Link>
            <a
              href="#contato"
              className="inline-flex items-center px-5 py-2.5 bg-forest-600 text-ivory-50 text-sm font-medium rounded-full hover:bg-forest-700 transition-all duration-300 hover:shadow-lg hover:shadow-forest-600/25 hover:-translate-y-0.5"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-forest-700' : 'text-ivory-50'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-ivory-50/98 backdrop-blur-lg border-b border-sage-200 shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="block text-slate-700 font-medium py-2 hover:text-terra-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/soutus"
            onClick={handleClick}
            className="block text-slate-700 font-medium py-2 hover:text-terra-500 transition-colors"
          >
            Pilar Soutus
          </Link>
          <a
            href="#contato"
            onClick={handleClick}
            className="block w-full text-center px-5 py-3 bg-forest-600 text-ivory-50 font-medium rounded-full hover:bg-forest-700 transition-all"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </nav>
  )
}
