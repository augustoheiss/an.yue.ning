import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#filosofia', label: 'Diagnóstico' },
    { href: '#pilares', label: 'Os 8 Pilares' },
    { href: '#servicos', label: 'Terapias Clínicas' },
    { href: '#soutus', label: 'Movimento Soutus' },
    { href: '#sobre', label: 'A Rebeca' },
  ]

  const handleClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-lg border-b border-sage-200/60 py-3.5'
          : 'bg-gradient-to-b from-forest-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <span
              className={`font-serif text-2xl md:text-3xl tracking-wider font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-forest-800' : 'text-ivory-50'
              }`}
            >
              An.Yue.Ning
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.25em] font-semibold px-2 py-0.5 rounded-full bg-terra-500/20 text-terra-400 border border-terra-400/30">
              Harmonia Humana
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-terra-400 ${
                  isScrolled ? 'text-slate-700 hover:text-forest-700' : 'text-ivory-100'
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-700 text-ivory-50 text-sm font-semibold rounded-full hover:bg-forest-800 transition-all duration-300 shadow-md shadow-forest-900/20 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-terra-400" />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-forest-800 bg-sage-100' : 'text-ivory-50 bg-white/10'
            }`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-ivory-50/98 backdrop-blur-xl border-b border-sage-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="block text-slate-800 font-medium py-1.5 hover:text-forest-700 transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-sage-200">
            <a
              href="#contato"
              onClick={handleClick}
              className="flex items-center justify-center gap-2 w-full text-center px-5 py-3 bg-forest-700 text-ivory-50 font-semibold rounded-full hover:bg-forest-800 transition-all text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-terra-400" />
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
