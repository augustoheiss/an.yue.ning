import { Leaf, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-sage-800/40 text-ivory-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center border border-sage-700/40">
                <Leaf className="w-5 h-5 text-terra-400" />
              </div>
              <span className="font-serif text-2xl text-ivory-100 tracking-wider font-semibold">
                An.Yue.Ning
              </span>
            </div>
            <p className="text-sage-300 text-sm max-w-md leading-relaxed mb-4">
              Centro de Saúde Integrativa & Sabedoria da Terra por Rebeca. Unindo o cuidado
              restaurador das mãos (An.Yue.Ning) ao movimento consciente (Método Soutus) para
              preservar a harmonia corporal e a lucidez da mente.
            </p>
            <span className="inline-block text-xs font-semibold text-terra-400 bg-terra-500/10 px-3 py-1 rounded-full border border-terra-500/20">
              Arquitetura Humana & Soberania Biológica
            </span>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-sage-300">
              <li>
                <a href="#hero" className="hover:text-terra-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-terra-400 transition-colors">
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-terra-400 transition-colors">
                  Os 8 Pilares
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-terra-400 transition-colors">
                  Terapias Clínicas
                </a>
              </li>
              <li>
                <a href="#soutus" className="hover:text-terra-400 transition-colors">
                  Movimento Soutus
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-terra-400 transition-colors">
                  A Rebeca
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">Conexão & Legal</h4>
            <div className="space-y-3 mb-6">
              <Link
                to="/termos"
                className="block text-sm text-sage-300 hover:text-terra-400 transition-colors"
              >
                Termos de Uso e Privacidade
              </Link>
              <a
                href="#contato"
                className="block text-sm text-sage-300 hover:text-terra-400 transition-colors"
              >
                Agendamento via WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-forest-900 border border-sage-700/40 flex items-center justify-center hover:bg-forest-800 hover:border-terra-400 transition-all text-sage-300 hover:text-terra-400"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
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
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-forest-900 border border-sage-700/40 hover:bg-forest-800 hover:border-terra-400 transition-all text-xs text-sage-300 hover:text-terra-400"
                aria-label="Podcasts e Estudos"
              >
                <Video className="w-4 h-4 text-terra-400" />
                <span>Estudos Clínicos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-sage-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <p>© 2026 An.Yue.Ning & Soutus. Todos os direitos reservados.</p>
          <p>Cuidado Integrativo · Sabedoria dos Ancestrais e Rigor Biológico</p>
        </div>
      </div>
    </footer>
  )
}
