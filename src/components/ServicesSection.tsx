import {
  Hand,
  Droplets,
  Flame,
  Disc,
  BrainCircuit,
  Atom,
  Dumbbell,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    icon: Hand,
    title: 'Massoterapia',
    subtitle: 'Massagem Clínica',
    description: 'Ventosaterapia, Óleos essenciais, Vibração.',
    color: 'from-forest-600 to-forest-800',
    accent: 'bg-forest-100 text-forest-700',
  },
  {
    icon: Droplets,
    title: 'Drenagem Linfática',
    subtitle: 'Fluidez & Recuperação',
    description: 'Pós-operatório, Redução de inchaço, Auxiliares.',
    color: 'from-sage-500 to-sage-700',
    accent: 'bg-sage-100 text-sage-700',
  },
  {
    icon: Flame,
    title: 'Ayurveda',
    subtitle: 'Medicina Milenar',
    description: 'Massagem Abhyanga, Medicina e Filosofia Ayurveda.',
    color: 'from-terra-500 to-terra-700',
    accent: 'bg-terra-100 text-terra-700',
  },
  {
    icon: Disc,
    title: 'Quiropraxia',
    subtitle: 'Alinhamento Neural',
    description: 'Ajuste de articulações e a profunda conexão entre Articulações e Subconsciente.',
    color: 'from-clay-500 to-clay-700',
    accent: 'bg-clay-100 text-clay-700',
  },
  {
    icon: BrainCircuit,
    title: 'TRG',
    subtitle: 'Terapia de Reprocessamento Generativo',
    description: 'O que é e o que o seu padrão diz sobre a sua saúde física e mental.',
    color: 'from-forest-700 to-sage-800',
    accent: 'bg-forest-100 text-forest-700',
  },
  {
    icon: Atom,
    title: 'Medicina Chinesa',
    subtitle: 'Os Cinco Movimentos',
    description: 'O que é, a dinâmica dos Cinco Movimentos / Wu Xing, Dietoterapia.',
    color: 'from-sage-600 to-forest-700',
    accent: 'bg-sage-100 text-sage-700',
  },
  {
    icon: Dumbbell,
    title: 'Soutus',
    subtitle: 'Bio-integração',
    description: 'Alongamento, Exercícios, Corrida e Dança.',
    color: 'from-terra-600 to-clay-700',
    accent: 'bg-terra-100 text-terra-700',
  },
]

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="servicos" className="py-24 md:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-sage-600 bg-sage-100 rounded-full mb-6">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto">
            A Arquitetura do Toque:{' '}
            <span className="text-forest-600">O Ecossistema An.Yue.Ning</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl border border-sage-200/60 overflow-hidden hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-sage-200/50 hover:-translate-y-2 ${
                  i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.accent} transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium tracking-wider text-sage-400 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-terra-600 font-medium mb-3">{service.subtitle}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
