import { MessageCircle, Leaf, ShieldCheck, BarChart3 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WHATSAPP_NUMBER = '5511969187866'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Rebeca! Gostaria de dar o primeiro passo na minha Rebelião Somática e agendar uma avaliação.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-gradient-to-br from-forest-900 via-forest-800 to-sage-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-terra-500/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-sage-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} flex flex-col lg:flex-row items-start gap-12 lg:gap-20`}
        >
          {/* Left: Copy */}
          <div className="flex-1 lg:pt-8">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-terra-400 bg-terra-500/15 rounded-full mb-6 border border-terra-500/20">
              Comece Sua Jornada
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 leading-tight mb-6">
              Dê o Primeiro Passo na sua{' '}
              <span className="text-terra-400">Rebelião Somática</span>
            </h2>

            <p className="text-sage-200/90 text-base md:text-lg leading-relaxed mb-8">
              Cada dia que você ignora os sinais do seu corpo é um dia em que ele se afasta da
              sua arquitetura original. Não permita que o trauma dite a sua saúde.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terra-400" />
                <span className="text-sm text-sage-300">Avaliação personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terra-400" />
                <span className="text-sm text-sage-300">Tratamento integrativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terra-400" />
                <span className="text-sm text-sage-300">Resultados mensuráveis</span>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp CTA Card */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="bg-white/[0.06] backdrop-blur-lg rounded-3xl border border-sage-500/20 p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-terra-500/15 border border-terra-500/20 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-terra-400" />
              </div>

              <h3 className="font-serif text-2xl text-ivory-50 mb-3">
                Fale Diretamente com a Rebeca
              </h3>
              <p className="text-sage-300 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Agende sua avaliação somática personalizada via WhatsApp. Atendimento humanizado e resposta rápida.
              </p>

              {/* Feature pills */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] border border-sage-600/20">
                  <Leaf className="w-3.5 h-3.5 text-terra-400" />
                  <span className="text-xs text-sage-300">Terapia Somática</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] border border-sage-600/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-terra-400" />
                  <span className="text-xs text-sage-300">Medicina Ancestral</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] border border-sage-600/20">
                  <BarChart3 className="w-3.5 h-3.5 text-terra-400" />
                  <span className="text-xs text-sage-300">Bio-integração</span>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-terra-500 text-ivory-50 text-lg font-medium rounded-xl hover:bg-terra-600 transition-all duration-300 shadow-xl shadow-terra-600/30 hover:shadow-terra-600/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Agendamento
              </a>

              <p className="text-sage-500 text-xs mt-5">
                Você será redirecionado para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
