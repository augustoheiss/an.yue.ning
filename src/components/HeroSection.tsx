import { Leaf, ArrowDown, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  const bulletPoints = [
    'Reprocessamento de tensões e memórias retidas no corpo (TRG).',
    'Restauração do eixo articular e precisão neurofuncional (Quiropraxia).',
    'Nutrição pura da terra e sabedoria milenar (Medicina Chinesa & Wu Xing).',
    'Bio-integração motora ativa: Alongamento, Força, Corrida e Dança (Soutus).',
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-sage-950" />

      {/* Organic abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sage-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-terra-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-forest-500/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Subtle organic lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800">
          <path
            d="M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-ivory-200"
          />
          <path
            d="M0,500 C300,420 500,530 700,480 C900,430 1100,530 1200,480"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-ivory-200"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32 md:py-40">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage-500/30 bg-sage-900/40 backdrop-blur-sm mb-8">
          <Leaf className="w-4 h-4 text-terra-400" />
          <span className="text-xs md:text-sm text-sage-200 tracking-wider font-semibold uppercase">
            Centro de Saúde Integrativa & Sabedoria da Terra
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-50 leading-[1.1] mb-8 animate-fade-in-up font-semibold"
          style={{ animationDelay: '0.2s' }}
        >
          A Harmonia Original:{' '}
          <span className="text-terra-400">
            Resgate a Soberania e a Inteligência
          </span>{' '}
          do Seu Corpo
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-sage-200/90 leading-relaxed mb-12 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          O corpo humano foi concebido com uma capacidade inata e perfeita de autorregulação.
          Unimos o cuidado restaurador das mãos ao vigor do movimento consciente, integrando a
          sabedoria ancestral dos antigos povos da terra ao rigor da neurobiologia clínica.
        </p>

        {/* Bullet Points */}
        <div
          className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3.5 text-left mb-14 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          {bulletPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-900/50 backdrop-blur-sm border border-sage-700/30 hover:border-terra-400/40 transition-colors"
            >
              <ShieldCheck className="w-5 h-5 text-terra-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-sage-100 leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-terra-500 text-ivory-50 text-base md:text-lg font-semibold rounded-full hover:bg-terra-600 transition-all duration-300 shadow-xl shadow-terra-600/30 hover:shadow-terra-600/50 hover:-translate-y-1 w-full sm:w-auto"
          >
            Agendar Minha Avaliação
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sage-200 hover:text-terra-400 transition-colors duration-300 font-medium w-full sm:w-auto text-sm md:text-base"
          >
            Conhecer os 8 Pilares
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory-50 to-transparent pointer-events-none" />
    </section>
  )
}
