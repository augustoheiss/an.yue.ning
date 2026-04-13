import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Zap, Target, Shield } from 'lucide-react'

export default function SoutusFounder() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="manifesto" className="py-24 md:py-32 bg-carbon-950 relative overflow-hidden">
      {/* Subtle edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-carbon-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}>
          {/* Portrait area */}
          <div className="flex-shrink-0 w-full lg:w-[420px]">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-obsidian-800 via-carbon-900 to-obsidian-950 overflow-hidden border border-carbon-700/30 relative">
                {/* Abstract kinetic portrait */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 md:w-52 md:h-52">
                    {/* Concentric rings */}
                    <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-pulse-slow" />
                    <div className="absolute inset-4 rounded-full border border-amber-500/15" />
                    <div className="absolute inset-8 rounded-full border border-amber-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="w-16 h-16 text-amber-400/40" />
                    </div>
                  </div>
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-950 to-transparent pt-16 pb-6 px-6">
                  <p className="font-geo text-2xl font-bold text-obsidian-50 mb-1">Rebeca</p>
                  <p className="text-carbon-400 text-sm font-geo tracking-wider">Fundadora · An.Yue.Ning</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-2 md:right-2 bg-obsidian-900 rounded-xl shadow-xl border border-carbon-700/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-obsidian-100 font-geo">Bio-Integração</p>
                    <p className="text-xs text-carbon-400">Método Soutus</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-2 md:left-2 bg-obsidian-900 rounded-xl shadow-xl border border-carbon-700/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-copper-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-obsidian-100 font-geo">Performance</p>
                    <p className="text-xs text-carbon-400">Ancestral & Moderna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-copper-400 bg-copper-500/10 rounded-lg mb-6 font-geo border border-copper-500/15">
              O Manifesto Soutus
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-obsidian-50 leading-tight mb-8 italic">
              Forjando Indivíduos{' '}
              <span className="text-amber-400 not-italic font-geo font-bold">Implacáveis</span>
            </h2>

            <div className="space-y-5 text-carbon-300 leading-relaxed text-base md:text-lg">
              <p>
                Meu nome comercial é <strong className="text-amber-400 font-geo">An.Yue.Ning</strong>. O
                pilar Soutus nasceu de uma urgência clínica: a vida sem atrito está nos adoecendo.
              </p>
              <p>
                Enquanto a Massoterapia, a Quiropraxia e a Medicina Chinesa preparam e alinham o
                seu terreno passivamente, a Bio-integração exige a sua participação ativa.
              </p>
              <p>
                Ao fundir a neurobiologia moderna com o rigor das disciplinas físicas ancestrais —
                do Kalaripayattu indiano ao rastreamento do Kalahari — nossa missão é forjar
                indivíduos fisicamente implacáveis e cognitivamente soberanos.{' '}
                <strong className="text-amber-400 font-geo">É hora de reivindicar a sua biologia.</strong>
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px flex-1 bg-carbon-700/30" />
              <Zap className="w-5 h-5 text-amber-500/40" />
              <div className="h-px flex-1 bg-carbon-700/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
