import { Ruler, Dumbbell, Footprints, Music } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const pillars = [
  {
    icon: Ruler,
    num: '01',
    title: 'Alongamento',
    subtitle: 'A Engenharia da Fáscia',
    description:
      'Muito além de \'esticar músculos\'. Utilizamos a Facilitação Neuromuscular Proprioceptiva (FNP) e a inibição autogênica para hackear os reflexos de proteção do sistema nervoso, remodelar a matriz celular da fáscia e destravar a verdadeira mobilidade estrutural.',
    accent: 'amber',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
  },
  {
    icon: Dumbbell,
    num: '02',
    title: 'Exercícios',
    subtitle: 'A Fricção Necessária',
    description:
      'O domínio dos padrões motores humanos fundamentais (Agachar, Empurrar, Puxar, Carregar). Uma pedagogia do movimento que reconstrói a armadura muscular, protege a coluna vertebral e combate ativamente a sarcopenia através da carga progressiva.',
    accent: 'copper',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-2',
  },
  {
    icon: Footprints,
    num: '03',
    title: 'Corrida',
    subtitle: 'A Vanguarda Cognitiva',
    description:
      'A corrida é a prática focal original. Restauramos a biomecânica da sua passada e a hemodinâmica da respiração rítmica nasal para forçar a neurogênese e reconstruir os mapas espaciais do seu hipocampo.',
    accent: 'electric',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    icon: Music,
    num: '04',
    title: 'Dança',
    subtitle: 'O HD Original da Humanidade',
    description:
      'A tecnologia cognitiva mais antiga do mundo. Baseada na educação somática e na expansão da \'Kinesfera\', a dança exige coordenação extrema, interocepção e memória de trabalho, servindo como o antídoto definitivo contra a atrofia cerebral.',
    accent: 'amber',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
]

const accentMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  amber: {
    border: 'border-amber-500/20 hover:border-amber-500/40',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    glow: 'group-hover:from-amber-500/5',
  },
  copper: {
    border: 'border-copper-500/20 hover:border-copper-500/40',
    text: 'text-copper-400',
    bg: 'bg-copper-500/10',
    glow: 'group-hover:from-copper-500/5',
  },
  electric: {
    border: 'border-electric-500/20 hover:border-electric-500/40',
    text: 'text-electric-400',
    bg: 'bg-electric-500/10',
    glow: 'group-hover:from-electric-500/5',
  },
}

export default function SoutusPillars() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="pilares" className="py-24 md:py-32 bg-obsidian-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-carbon-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-500/10 rounded-lg mb-6 font-geo border border-amber-500/15">
            Os 4 Pilares
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-obsidian-50 leading-tight max-w-4xl mx-auto italic">
            O Ecossistema Soutus:{' '}
            <span className="text-amber-400 not-italic font-geo font-bold">Os 4 Pilares da Bio-Integração</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className={`reveal-stagger ${isVisible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-3 gap-5`}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const colors = accentMap[pillar.accent]
            return (
              <div
                key={i}
                className={`group relative bg-carbon-900/50 rounded-2xl border ${colors.border} p-7 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 overflow-hidden ${pillar.colSpan} ${pillar.rowSpan}`}
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${colors.glow} transition-all duration-700 rounded-2xl pointer-events-none`} />

                <div className="relative flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span className="font-geo text-xs font-bold tracking-[0.3em] text-carbon-500 uppercase">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-geo text-xl md:text-2xl font-bold text-obsidian-50 mb-1 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-geo font-medium mb-4 ${colors.text}`}>
                    {pillar.subtitle}
                  </p>
                  <p className="text-carbon-300 leading-relaxed text-[15px] flex-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
