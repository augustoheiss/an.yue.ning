import { Brain, Atom, Swords } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const outcomes = [
  {
    icon: Brain,
    title: 'Neuroplasticidade Explosiva',
    description:
      'O movimento complexo atua como fertilizante para o cérebro. A liberação maciça de BDNF reconstrói redes neurais, melhorando a velocidade de raciocínio, blindando sua mente contra o declínio e aniquilando o estresse crônico.',
    gradient: 'from-amber-600 to-amber-800',
    glow: 'bg-amber-500/10',
  },
  {
    icon: Atom,
    title: 'Rejuvenescimento Celular Profundo',
    description:
      'Através do alongamento ativo e da carga mecânica, induzimos a tixotropia: a fáscia rígida se transforma em um tecido fluido e hidratado. A mecanotransdução reverte o envelhecimento celular de dentro para fora.',
    gradient: 'from-copper-500 to-copper-700',
    glow: 'bg-copper-500/10',
  },
  {
    icon: Swords,
    title: 'Autonomia Biomecânica Absoluta',
    description:
      'Seu corpo voltará a operar como a máquina perfeita que foi desenhado para ser: capaz de correr, agachar, puxar e dançar com a eficiência, o equilíbrio e a resiliência dos maiores guerreiros e rastreadores da antiguidade.',
    gradient: 'from-electric-600 to-electric-800',
    glow: 'bg-electric-500/10',
  },
]

export default function SoutusOutcome() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: paradigmRef, isVisible: paradigmVisible } = useScrollReveal()

  return (
    <section id="soberania" className="py-24 md:py-32 bg-carbon-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251,191,36,0.5) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-500/10 rounded-lg mb-6 font-geo border border-amber-500/15">
            A Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-obsidian-50 leading-tight max-w-4xl mx-auto italic">
            Soberania Cinética:{' '}
            <span className="text-amber-400 not-italic font-geo font-bold">O Retorno ao Molde Ancestral</span>
          </h2>
        </div>

        {/* Z-pattern blocks */}
        <div className="space-y-16 md:space-y-24 mb-16 md:mb-20">
          {outcomes.map((outcome, i) => (
            <OutcomeBlock key={i} outcome={outcome} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>

        {/* Paradigm */}
        <div ref={paradigmRef} className={`reveal ${paradigmVisible ? 'visible' : ''}`}>
          <div className="max-w-3xl mx-auto text-center bg-obsidian-900/60 rounded-2xl border border-carbon-700/20 p-8 md:p-12">
            <p className="font-serif text-xl md:text-2xl text-obsidian-100 leading-relaxed mb-6 italic">
              Para curar a mente, precisamos colocar o corpo sob estresse intencional.
            </p>
            <p className="text-carbon-300 leading-relaxed text-base md:text-lg">
              O Método Soutus não é 'ir à academia'. É uma prática de hiper-foco onde a{' '}
              <strong className="text-amber-400 font-geo">biomecânica impecável</strong> encontra a{' '}
              <strong className="text-amber-400 font-geo">presença cognitiva absoluta</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OutcomeBlock({
  outcome,
  reverse,
  index,
}: {
  outcome: typeof outcomes[0]
  reverse: boolean
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = outcome.icon

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8 md:gap-16`}
    >
      {/* Visual */}
      <div className="flex-1 w-full">
        <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${outcome.gradient} overflow-hidden border border-white/5`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Icon className="w-24 h-24 md:w-32 md:h-32 text-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-16 h-16 md:w-20 md:h-20 text-white/40" />
              </div>
            </div>
          </div>
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/30 to-transparent" />

          {/* Step badge */}
          <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <span className="font-geo text-sm text-white/80 font-bold tracking-widest">0{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-geo text-2xl md:text-3xl text-obsidian-50 font-bold mb-4 tracking-tight">
          {outcome.title}
        </h3>
        <p className="text-carbon-300 leading-relaxed text-base md:text-lg">
          {outcome.description}
        </p>
      </div>
    </div>
  )
}
