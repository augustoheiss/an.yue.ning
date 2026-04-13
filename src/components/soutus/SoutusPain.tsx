import { Smartphone, Flame, Unlink, Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const painPoints = [
  {
    icon: Smartphone,
    title: 'Demência Digital e Perda Espacial',
    description:
      'Terceirizar sua navegação para o GPS e seu pensamento para a Inteligência Artificial está atrofiando fisicamente o seu hipocampo. O resultado é névoa mental, perda de memória de trabalho e o colapso do foco.',
  },
  {
    icon: Flame,
    title: 'Inflammaging e Rigidez Fascial',
    description:
      'A ausência do atrito físico no dia a dia \'cola\' suas fáscias e destrói sua massa muscular (osteo-sarcopenia), aprisionando seu corpo em um estado crônico de inflamação, fadiga e dor articular.',
  },
  {
    icon: Unlink,
    title: 'Amnésia Motora e a Ilusão da Máquina',
    description:
      'Sem o estresse físico e cognitivo exigido pelos nossos ancestrais para sobreviver, seu sistema nervoso desliga. Você perdeu a capacidade instintiva de agachar, puxar e se mover pelo espaço com precisão.',
  },
]

export default function SoutusPain() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal()

  return (
    <section id="epidemia" className="py-24 md:py-32 bg-obsidian-950 relative">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-500/10 rounded-lg mb-6 font-geo border border-amber-500/15">
            O Diagnóstico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-obsidian-50 leading-tight max-w-4xl mx-auto italic">
            A Epidemia do Conforto:{' '}
            <span className="text-amber-400 not-italic font-geo font-bold">O Colapso da Sua Biologia</span>
          </h2>
        </div>

        {/* Cards */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid md:grid-cols-3 gap-6 lg:gap-8 mb-16`}>
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="group relative bg-carbon-900/60 rounded-2xl border border-carbon-700/30 p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/3 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-obsidian-800 border border-carbon-600/30 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-geo text-xl font-bold text-obsidian-50 mb-4 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-carbon-300 leading-relaxed text-[15px]">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote */}
        <div ref={quoteRef} className={`reveal ${quoteVisible ? 'visible' : ''}`}>
          <div className="relative max-w-4xl mx-auto bg-carbon-900/40 rounded-2xl border border-carbon-700/20 p-8 md:p-12 overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-copper-500/5 rounded-full blur-3xl" />

            <div className="relative flex gap-4 md:gap-6">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-amber-500/60 flex-shrink-0 mt-1" />
              <div>
                <p className="font-serif text-lg md:text-xl lg:text-2xl text-obsidian-100 leading-relaxed italic mb-4">
                  O maior mito moderno é que a tecnologia nos libertou do esforço. Na verdade, ela
                  nos roubou a 'Fricção Benéfica' necessária para manter nosso cérebro vivo. O
                  exercício não é um hobby estético; é uma exigência biológica para evitar a
                  falência do seu sistema nervoso.
                </p>
                <p className="text-amber-400 font-geo font-bold text-sm tracking-widest uppercase">
                  — Método Soutus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
