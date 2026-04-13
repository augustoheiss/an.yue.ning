import { Bone, ShieldCheck, Zap } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const outcomes = [
  {
    icon: Bone,
    title: 'Liberdade Estrutural',
    description:
      'O alinhamento biomecânico devolve a comunicação perfeita ao seu cérebro. As articulações e o subconsciente voltam a conversar, eliminando bloqueios e devolvendo uma mobilidade fluida.',
    gradient: 'from-forest-600 to-sage-600',
  },
  {
    icon: ShieldCheck,
    title: 'Soberania Emocional',
    description:
      'Ao limpar os dados emocionais corrompidos através do reprocessamento generativo (TRG), o estado de pânico perde a força. Você passa a viver com resiliência e clareza mental inabalável.',
    gradient: 'from-terra-500 to-clay-600',
  },
  {
    icon: Zap,
    title: 'Vitalidade Sistêmica',
    description:
      'Seja pela regulação dos Cinco Movimentos (MTC) ou pela purificação ayurvédica, seu metabolismo e sistema linfático voltam a operar em potência máxima, em sincronia com as leis da natureza.',
    gradient: 'from-sage-600 to-forest-700',
  },
]

export default function OutcomeSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: paradigmRef, isVisible: paradigmVisible } = useScrollReveal()

  return (
    <section id="transformacao" className="py-24 md:py-32 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-forest-600 bg-forest-100 rounded-full mb-6">
            A Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto">
            O Retorno à Homeostase{' '}
            <span className="text-forest-600">e à Engenharia Perfeita</span>
          </h2>
        </div>

        {/* Z-pattern: alternating layout */}
        <div className="space-y-16 md:space-y-24 mb-16 md:mb-20">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon
            const isEven = i % 2 === 0
            return (
              <OutcomeBlock
                key={i}
                icon={Icon}
                title={outcome.title}
                description={outcome.description}
                gradient={outcome.gradient}
                reverse={!isEven}
                index={i}
              />
            )
          })}
        </div>

        {/* New Paradigm */}
        <div ref={paradigmRef} className={`reveal ${paradigmVisible ? 'visible' : ''}`}>
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl border border-sage-200/60 p-8 md:p-12 shadow-lg shadow-sage-100/50">
            <p className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed mb-6">
              E se a verdadeira cura exigir que você encare a sua própria biologia?
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              A verdadeira terapia não é relaxamento passivo, mas uma{' '}
              <strong className="text-terra-600">Rebelião Somática</strong>. Nós
              utilizamos o toque clínico rigoroso para reativar a capacidade de cura
              que já existe em você.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OutcomeBlock({
  icon: Icon,
  title,
  description,
  gradient,
  reverse,
  index,
}: {
  icon: typeof Bone
  title: string
  description: string
  gradient: string
  reverse: boolean
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8 md:gap-16`}
    >
      {/* Visual */}
      <div className="flex-1 w-full">
        <div
          className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} overflow-hidden`}
        >
          {/* Abstract decorative visuals */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Icon className="w-24 h-24 md:w-32 md:h-32 text-ivory-50/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-16 h-16 md:w-20 md:h-20 text-ivory-50/60" />
              </div>
            </div>
          </div>
          {/* Organic shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-xl" />
          <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-white/5 blur-xl" />

          {/* Step number */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <span className="font-serif text-lg text-ivory-50 font-bold">{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">{description}</p>
      </div>
    </div>
  )
}
