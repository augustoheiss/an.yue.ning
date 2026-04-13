import { Activity, Brain, Move, Zap, ArrowDown } from 'lucide-react'

export default function SoutusHero() {
  const bullets = [
    { icon: Brain, text: 'Neurogênese através do Esforço Direcionado (BDNF).' },
    { icon: Activity, text: 'Mecanotransdução e Hidratação Fascial (Tixotropia).' },
    { icon: Move, text: 'Reconstrução do Mapa Espacial e Foco Cognitivo.' },
    { icon: Zap, text: 'Sobrecarga Progressiva e Soberania Corporal.' },
  ]

  return (
    <section id="hero-soutus" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-obsidian-950" />

      {/* Kinetic grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-[100px] animate-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-copper-500/6 blur-[80px] animate-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-500/4 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32 md:py-40">
        {/* Tag */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mb-8">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-300/90 tracking-widest font-geo font-medium uppercase">
            Bio-Integração · An.Yue.Ning
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-geo text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-obsidian-50 leading-[1.05] font-bold mb-8 animate-fade-in-up tracking-tight"
          style={{ animationDelay: '0.2s' }}
        >
          Soutus: A Engenharia do Movimento{' '}
          <span className="text-amber-400">Contra a Atrofia Moderna</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-carbon-300 leading-relaxed mb-12 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          O conforto tecnológico está encolhendo o seu cérebro e enrijecendo o seu corpo. Soutus é
          o método de Bio-integração que utiliza o rigor do Alongamento, Exercício, Corrida e Dança
          para resgatar sua neuroplasticidade e a sua arquitetura física original.
        </p>

        {/* Bullets */}
        <div
          className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3 text-left mb-14 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          {bullets.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-carbon-800/50 backdrop-blur-sm border border-carbon-700/30 hover:border-amber-500/20 transition-colors duration-300"
              >
                <Icon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-carbon-200 leading-relaxed">{b.text}</span>
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#avaliacao"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-obsidian-950 text-lg font-bold font-geo rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1"
          >
            <Zap className="w-5 h-5" />
            Iniciar Minha Bio-Integração
          </a>
          <a
            href="#epidemia"
            className="inline-flex items-center gap-2 px-6 py-4 text-carbon-300 hover:text-amber-400 transition-colors duration-300 font-medium"
          >
            Entenda a Morte do Cérebro
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </section>
  )
}
