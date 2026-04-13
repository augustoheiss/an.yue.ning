import { MessageCircle, Zap, Brain, Dumbbell, Footprints } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WHATSAPP_NUMBER = '5511969187866'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Rebeca! Gostaria de dar o primeiro passo na minha Rebelião Somática e agendar uma avaliação.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function SoutusCTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="avaliacao" className="relative py-24 md:py-32 bg-obsidian-950 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-copper-500/4 blur-[100px]" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} flex flex-col lg:flex-row items-start gap-12 lg:gap-20`}>
          {/* Left: Copy */}
          <div className="flex-1 lg:pt-8">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-500/10 rounded-lg mb-6 font-geo border border-amber-500/15">
              Comece Sua Jornada
            </span>

            <h2 className="font-geo text-3xl sm:text-4xl md:text-5xl text-obsidian-50 leading-tight font-bold tracking-tight mb-6">
              Dê o Primeiro Passo na sua{' '}
              <span className="text-amber-400">Rebelião Somática</span>
            </h2>

            <p className="text-carbon-300 text-base md:text-lg leading-relaxed mb-8">
              Cada dia que você ignora os sinais do seu corpo é um dia em que ele se afasta da
              sua arquitetura original. Não permita que o trauma dite a sua saúde.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-8">
              {['Avaliação personalizada', 'Tratamento integrativo', 'Resultados mensuráveis'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-sm text-carbon-400">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp CTA Card */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="bg-carbon-900/50 backdrop-blur-xl rounded-2xl border border-carbon-700/30 p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-amber-400" />
              </div>

              <h3 className="font-geo text-2xl font-bold text-obsidian-50 mb-3">
                Fale Diretamente com a Rebeca
              </h3>
              <p className="text-carbon-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Agende sua avaliação de Bio-integração via WhatsApp. Atendimento humanizado e resposta rápida.
              </p>

              {/* Pillar pills */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <Brain className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs text-carbon-300 font-geo">Neuroplasticidade</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-copper-500/5 border border-copper-500/10">
                  <Dumbbell className="w-3.5 h-3.5 text-copper-400" />
                  <span className="text-xs text-carbon-300 font-geo">Bio-mecânica</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <Footprints className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs text-carbon-300 font-geo">Movimento</span>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-500 text-obsidian-950 text-lg font-bold font-geo rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/15 hover:shadow-amber-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Agendamento de Avaliação
              </a>

              <p className="text-carbon-600 text-xs mt-5">
                Você será redirecionado para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
