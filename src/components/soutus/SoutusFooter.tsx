import { Zap, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SoutusFooter() {
  return (
    <footer className="bg-obsidian-950 border-t border-carbon-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-obsidian-800 border border-carbon-700/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="font-geo text-lg font-bold text-obsidian-50 tracking-wider">SOUTUS</span>
                <span className="text-carbon-500 mx-2">|</span>
                <Link to="/" className="font-serif text-lg text-carbon-400 hover:text-copper-400 transition-colors italic">
                  An.Yue.Ning
                </Link>
              </div>
            </div>
            <p className="text-carbon-500 text-sm max-w-xs leading-relaxed">
              Bio-Integração: Alongamento, Exercício, Corrida e Dança. Engenharia do movimento
              contra a atrofia moderna.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link to="/termos" className="text-sm text-carbon-500 hover:text-amber-400 transition-colors">
              Termos de Uso e Privacidade
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-lg bg-obsidian-800 border border-carbon-700/30 flex items-center justify-center hover:border-amber-500/30 hover:bg-obsidian-700 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-carbon-400 group-hover:text-amber-400 transition-colors"
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
              className="w-11 h-11 rounded-lg bg-obsidian-800 border border-carbon-700/30 flex items-center justify-center hover:border-amber-500/30 hover:bg-obsidian-700 transition-all duration-300 group"
              aria-label="YouTube"
            >
              <Video className="w-5 h-5 text-carbon-400 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-carbon-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-carbon-600">
            © 2026 Soutus | An.Yue.Ning. Todos os direitos reservados.
          </p>
          <p className="text-xs text-carbon-700">
            Bio-Integração · Engenharia do Movimento
          </p>
        </div>
      </div>
    </footer>
  )
}
