import { Ruler, Dumbbell, Footprints, Music, Zap, ArrowRight, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const movementPillars = [
  {
    icon: Ruler,
    num: '01',
    title: 'Alongamento Fascial',
    subtitle: 'A Engenharia da Fáscia & Biotensegridade',
    description:
      'Muito além de esticar músculos isolados. Trabalhamos a descompressão das cadeias miofasciais e a estimulação dos mecanorreceptores para devolver a elasticidade original, desfazendo a rigidez imposta pelas horas sentado.',
    accent: 'amber',
    tag: 'FNP & Mobilidade',
    colSpan: 'lg:col-span-2',
  },
  {
    icon: Dumbbell,
    num: '02',
    title: 'Força & Padrões Naturais',
    subtitle: 'A Dignidade do Esforço Físico',
    description:
      'O resgate dos movimentos fundamentais do trabalho humano: agachar, puxar, carregar e empurrar. O músculo esquelético ativado funciona como um órgão protetor do cérebro, liberando fatores tróficos (BDNF) e preservando a autonomia.',
    accent: 'copper',
    tag: 'Músculo Endócrino',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: Footprints,
    num: '03',
    title: 'A Marcha Rítmica & Corrida',
    subtitle: 'Navegação Espacial & Serenidade',
    description:
      'A biomecânica da passada eficiente e a respiração nasal rítmica. Caminhar e correr em contato com o solo ativa as células de grade do hipocampo e estimula o sistema endocanabinoide, produzindo clareza mental e serenidade.',
    accent: 'electric',
    tag: 'Foco & Anandamida',
    colSpan: 'lg:col-span-1',
  },
  {
    icon: Music,
    num: '04',
    title: 'Dança & Coordenação Rítmica',
    subtitle: 'A Preservação da Lucidez Mental',
    description:
      'A mais rica síntese entre audição, visão, cerebelo e sensibilidade. Como comprovado pelo célebre estudo do New England Journal of Medicine, a dança é a atividade número um para cultivar novas conexões neurais e afastar o declínio cognitivo.',
    accent: 'amber',
    tag: '76% Proteção Cognitiva',
    colSpan: 'lg:col-span-2',
  },
]

const accentStyles: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  amber: {
    border: 'border-amber-500/25 hover:border-amber-500/50',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  copper: {
    border: 'border-terra-500/25 hover:border-terra-500/50',
    text: 'text-terra-400',
    bg: 'bg-terra-500/10',
    badge: 'bg-terra-500/15 text-terra-300 border-terra-500/30',
  },
  electric: {
    border: 'border-emerald-500/25 hover:border-emerald-500/50',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
}

export default function SoutusSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="soutus" className="py-24 md:py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background kinetic grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-terra-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-300 tracking-[0.25em] font-semibold uppercase">
              Bio-Integração Ativa · Método Soutus
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-4xl mx-auto mb-6">
            O Movimento Consciente:{' '}
            <span className="text-amber-400">A Engenharia da Soberania Física</span>
          </h2>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed">
            Se a terapia manual e o silêncio devolvem o alinhamento basal (o cuidado restaurador da An.Yue.Ning),
            o <strong>Método Soutus</strong> consolida essa harmonia através da prática motora intencional.
            Alongar, fortalecer, marchar e dançar para que o corpo permaneça ágil, lúcido e resiliente.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {movementPillars.map((item, i) => {
            const Icon = item.icon
            const styles = accentStyles[item.accent]

            return (
              <div
                key={i}
                className={`group relative bg-slate-900/80 rounded-3xl border ${styles.border} p-8 md:p-9 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1.5 flex flex-col justify-between ${item.colSpan}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${styles.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className={`w-7 h-7 ${styles.text}`} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
                      {item.num}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md border mb-4 ${styles.badge}`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className={`text-sm font-medium mb-4 ${styles.text}`}>
                    {item.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Orientação Individualizada
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Conhecer Prática <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Paradigm Banner */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/20 p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 italic">
            "O corpo humano não é um depósito inerte de fadiga, mas um organismo vivo desenhado para a harmonia em ação."
          </h3>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed mb-8">
            Integramos as sessões terapêuticas restauradoras ao treinamento de movimento consciente Soutus,
            criando um ciclo ininterrupto de cura, vitalidade e lucidez mental.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-slate-950 font-bold text-sm md:text-base rounded-full hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4" />
            Agendar Sessão Integrada de Bio-Integração
          </a>
        </div>
      </div>
    </section>
  )
}
