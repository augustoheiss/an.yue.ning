import { Leaf, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-sage-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center border border-sage-700/30">
                <Leaf className="w-5 h-5 text-terra-400" />
              </div>
              <span className="font-serif text-2xl text-ivory-100 tracking-wider">An.Yue.Ning</span>
            </div>
            <p className="text-sage-400 text-sm max-w-xs leading-relaxed">
              Terapia Somática Clínica & Medicina Ancestral. Integrando o rigor do Ocidente à sabedoria do Oriente.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link to="/termos" className="text-sm text-sage-400 hover:text-terra-400 transition-colors">
              Termos de Uso e Privacidade
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-xl bg-forest-800 border border-sage-700/30 flex items-center justify-center hover:bg-forest-700 hover:border-terra-500/30 transition-all duration-300 group"
              aria-label="Instagram"
            >
              {/* Instagram icon inline SVG */}
              <svg
                className="w-5 h-5 text-sage-400 group-hover:text-terra-400 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-forest-800 border border-sage-700/30 hover:bg-forest-700 hover:border-terra-500/30 transition-all duration-300"
              aria-label="YouTube - Podcasts e Estudos Clínicos"
            >
              <Video className="w-5 h-5 text-sage-400 group-hover:text-terra-400 transition-colors" />
              <span className="text-xs text-sage-400 group-hover:text-sage-300 transition-colors hidden sm:inline">
                Podcasts e Estudos Clínicos
              </span>
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-sage-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-500">
            © 2026 An.Yue.Ning. Todos os direitos reservados.
          </p>
          <p className="text-xs text-sage-600">
            Rebelião Somática — Medicina Integrativa
          </p>
        </div>
      </div>
    </footer>
  )
}
