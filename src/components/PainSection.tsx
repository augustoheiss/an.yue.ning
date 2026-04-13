import { Brain, HeartPulse, Unlink, Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const painPoints = [
  {
    icon: Brain,
    title: 'A Exaustão do Piloto Automático',
    description:
      'A terceirização da mente e a dependência da vida digital atrofiaram sua vitalidade. Seu cérebro vive em constante alerta, gerando névoa mental (brain fog), ansiedade e fadiga extrema.',
  },
  {
    icon: HeartPulse,
    title: 'O Corpo Guarda o Placar',
    description:
      'O estresse e os traumas não processados não desaparecem; eles se transformam em tensão fascial, fibromialgia, problemas digestivos e dores crônicas que nenhum remédio resolve.',
  },
  {
    icon: Unlink,
    title: 'Pontos Cegos Neurológicos',
    description:
      'Articulações travadas (subluxações) cortam a comunicação do sistema nervoso com o cérebro, enquanto o fluxo linfático e energético estagna, gerando inflamação e perda de mobilidade.',
  },
]

export default function PainSection() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal()

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-terra-600 bg-terra-100 rounded-full mb-6">
            O Diagnóstico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto">
            A Morte do Cérebro e o Colapso do Corpo:{' '}
            <span className="text-terra-600">A Conta da Vida Moderna</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid md:grid-cols-3 gap-6 lg:gap-8 mb-16`}>
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-sage-200/60 p-8 hover:border-terra-300/60 transition-all duration-500 hover:shadow-xl hover:shadow-sage-200/40 hover:-translate-y-1"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sage-50 to-transparent rounded-bl-3xl rounded-tr-2xl" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-600 to-sage-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-ivory-50" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-slate-900 mb-4 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Belief Deconstruction Quote */}
        <div ref={quoteRef} className={`reveal ${quoteVisible ? 'visible' : ''}`}>
          <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-forest-800 via-forest-900 to-sage-900 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-terra-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-sage-500/10 rounded-full blur-3xl" />

            <div className="relative flex gap-4 md:gap-6">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-terra-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-serif text-lg md:text-xl lg:text-2xl text-ivory-100 leading-relaxed mb-4">
                  A medicina convencional trata você como uma máquina fragmentada, tentando
                  silenciar os alarmes do corpo com pílulas. Mas apagar o sintoma sem resolver a
                  atrofia emocional e estrutural é o que o mantém perpetuamente doente.
                </p>
                <p className="text-terra-400 font-medium text-base md:text-lg">
                  A dor não é um erro; é uma falha de comunicação interna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
