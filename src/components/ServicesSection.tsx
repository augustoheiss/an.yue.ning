import {
  Hand,
  Droplets,
  Flame,
  Disc,
  BrainCircuit,
  Atom,
  Dumbbell,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const clinicalServices = [
  {
    icon: Hand,
    title: 'Massoterapia Clínica',
    subtitle: 'A Arquitetura do Toque & Descompressão',
    description:
      'Ventosaterapia tradicional, óleos botânicos puros e manobras profundas de tração tecidual. Estimula a circulação profunda e relaxa a tensão retida.',
    color: 'from-forest-600 to-forest-800',
    accent: 'bg-forest-100 text-forest-700',
    pilarRef: 'Pilar 01',
  },
  {
    icon: Droplets,
    title: 'Drenagem Linfática & Glinfática',
    subtitle: 'Fluidez & Depuração Noturna',
    description:
      'Manobras suaves e ritmadas que restauram o trânsito dos fluidos vitais, reduzem edemas e desobstruem o fluxo cefálico para um descanso profundo.',
    color: 'from-sage-500 to-sage-700',
    accent: 'bg-sage-100 text-sage-700',
    pilarRef: 'Pilar 01',
  },
  {
    icon: Flame,
    title: 'Ayurveda & Cuidados Tradicionais',
    subtitle: 'Sabedoria Védica & Óleos Quentes',
    description:
      'Massagem Abhyanga e ativação dos pontos vitais (Marmas). Harmoniza o organismo com as forças da natureza através de botânicos aromáticos específicos.',
    color: 'from-terra-500 to-terra-700',
    accent: 'bg-terra-100 text-terra-700',
    pilarRef: 'Pilar 01 & 04',
  },
  {
    icon: Disc,
    title: 'Quiropraxia & Alinhamento',
    subtitle: 'Restauração do Eixo Neuro-Articular',
    description:
      'Ajuste manual das articulações da coluna vertebral. Restabelece a livre comunicação entre a medula e o cérebro, liberando a mobilidade travada.',
    color: 'from-clay-500 to-clay-700',
    accent: 'bg-clay-100 text-clay-700',
    pilarRef: 'Pilar 02',
  },
  {
    icon: BrainCircuit,
    title: 'Terapia Somática (TRG)',
    subtitle: 'Reprocessamento das Memórias Corporais',
    description:
      'Terapia de Reprocessamento Generativo. Acalma a hiperatividade amigdaliana e ativa o Vago Ventral, dissolvendo couraças e traumas gravados no corpo.',
    color: 'from-forest-700 to-sage-800',
    accent: 'bg-forest-100 text-forest-700',
    pilarRef: 'Pilar 03',
  },
  {
    icon: Atom,
    title: 'Medicina Chinesa & Wu Xing',
    subtitle: 'Os Cinco Movimentos & Dietoterapia da Terra',
    description:
      'Equilíbrio entre os órgãos vitais (Zang-Fu) através da observação das estações e da harmonização alimentar pura para restabelecer o vigor.',
    color: 'from-sage-600 to-forest-700',
    accent: 'bg-sage-100 text-sage-700',
    pilarRef: 'Pilar 04',
  },
]

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="servicos" className="py-24 md:py-32 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 bg-forest-100 rounded-full mb-6 border border-forest-200">
            Cuidados Clínicos Restauradores
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto mb-6">
            O Cuidado das Mãos:{' '}
            <span className="text-forest-700">As Terapias An.Yue.Ning</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
            Atendimentos individuais conduzidos com rigor biomecânico, escuta atenta e dignidade artesanal.
            Cada sessão atua na raiz física e silenciosa das tensões acumuladas.
          </p>
        </div>

        {/* Services Grid (6 Clinical Services) */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12`}>
          {clinicalServices.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl border border-sage-200/70 overflow-hidden hover:border-forest-300 transition-all duration-500 hover:shadow-2xl hover:shadow-sage-200/50 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.accent} transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-forest-700 bg-forest-50 px-2.5 py-1 rounded-md border border-forest-100">
                      {service.pilarRef}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-slate-900 font-semibold mb-1 group-hover:text-forest-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-terra-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="px-8 pb-6 pt-3 border-t border-sage-100/80 flex items-center justify-between text-xs text-forest-700 font-semibold">
                  <span>Sessão Personalizada</span>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Agendar <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Bridge to Soutus */}
        <div className="relative rounded-3xl bg-gradient-to-r from-forest-800 via-forest-900 to-slate-900 text-ivory-50 p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-terra-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>A Dimensão Ativa do Método</span>
            </div>
            <h4 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-2">
              Deseja bio-integrar seu alinhamento com o movimento?
            </h4>
            <p className="text-sm md:text-base text-sage-200 leading-relaxed">
              Conheça o <strong>Método Soutus</strong>: a vertente ativa de Alongamento Fascial, Força Natural, Corrida e Dança.
            </p>
          </div>

          <a
            href="#soutus"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
          >
            Explorar Método Soutus
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
