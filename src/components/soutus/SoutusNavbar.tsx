import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SoutusNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#epidemia', label: 'O Problema' },
    { href: '#soberania', label: 'A Solução' },
    { href: '#pilares', label: 'Os Pilares' },
    { href: '#manifesto', label: 'Manifesto' },
    { href: '#avaliacao', label: 'Avaliar' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-carbon-700/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Zap className="w-6 h-6 text-amber-400" />
            <span className="font-geo text-xl font-bold tracking-wider text-obsidian-50">
              SOUTUS
            </span>
            <span className="hidden sm:inline text-xs text-carbon-400 font-medium tracking-widest ml-1">
              BIO-INTEGRAÇÃO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-carbon-300 hover:text-amber-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/"
              className="text-sm font-medium tracking-wide text-carbon-500 hover:text-copper-400 transition-colors duration-300"
            >
              An.Yue.Ning
            </Link>
            <a
              href="#avaliacao"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-obsidian-950 text-sm font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              Bio-Integração
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-obsidian-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-obsidian-950/98 backdrop-blur-xl border-b border-carbon-700/40 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-carbon-200 font-medium py-2 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-carbon-400 font-medium py-2 hover:text-copper-400 transition-colors"
          >
            ← An.Yue.Ning
          </Link>
          <a
            href="#avaliacao"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-amber-500 text-obsidian-950 font-bold rounded-lg"
          >
            <Zap className="w-4 h-4" />
            Iniciar Bio-Integração
          </a>
        </div>
      </div>
    </nav>
  )
}
