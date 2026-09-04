import { Brain, HeartPulse, Unlink, Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const painPoints = [
  {
    icon: Brain,
    title: 'A Sobrecarga Digital & a Névoa Mental',
    description:
      'O excesso de telas e a terceirização do pensamento anestesiaram a clareza. O cérebro permanece em vigília constante, resultando em névoa mental, perda de foco e esgotamento psíquico.',
  },
  {
    icon: HeartPulse,
    title: 'A Couraça de Tensão & a Fáscia Rígida',
    description:
      'O estresse e as sobrecargas acumuladas no cotidiano não se dissipam sozinhos: eles se transformam em contrações musculares crônicas, respiração curta e dores persistentes que remédios comuns não resolvem.',
  },
  {
    icon: Unlink,
    title: 'O Afastamento da Terra & dos Ciclos Naturais',
    description:
      'Horas ininterruptas na mesma postura curvada e alimentos desconectados da terra quebram a harmonia dos órgãos vitais e estagnam a circulação, gerando inflamação e perda de vitalidade.',
  },
]

export default function PainSection() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal()

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-terra-600 bg-terra-100 rounded-full mb-6 border border-terra-200">
            O Diagnóstico do Nosso Tempo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto mb-6">
            O Ruído da Vida Moderna e o{' '}
            <span className="text-terra-600">Esquecimento do Corpo</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
            Fomos criados para o movimento vigoroso, a respiração ampla e o contato direto com a terra.
            A rotina urbana artificial silenciou esses sinais, aprisionando o organismo em um ciclo de rigidez e cansaço.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid md:grid-cols-3 gap-6 lg:gap-8 mb-16`}>
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl border border-sage-200/70 p-8 md:p-9 hover:border-terra-300 transition-all duration-500 hover:shadow-2xl hover:shadow-sage-200/40 hover:-translate-y-1.5"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sage-50 to-transparent rounded-bl-3xl rounded-tr-3xl pointer-events-none" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md shadow-forest-950/15">
                    <Icon className="w-7 h-7 text-ivory-50" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-slate-900 mb-4 leading-snug font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote Banner */}
        <div ref={quoteRef} className={`reveal ${quoteVisible ? 'visible' : ''}`}>
          <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-forest-900 via-forest-950 to-slate-950 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-terra-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex gap-5 md:gap-8">
              <Quote className="w-10 h-10 md:w-14 md:h-14 text-terra-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-serif text-lg md:text-xl lg:text-2xl text-ivory-100 leading-relaxed mb-5 italic">
                  O corpo humano não adoece por defeito de projeto. A dor e o esgotamento são mensagens
                  claras de que nos afastamos do equilíbrio com a terra, do descanso profundo e do movimento digno.
                  A verdadeira recuperação começa quando voltamos a ouvir essa inteligência original.
                </p>
                <p className="text-terra-400 font-semibold text-sm md:text-base tracking-wider uppercase">
                  — Filosofia de Atendimento An.Yue.Ning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
