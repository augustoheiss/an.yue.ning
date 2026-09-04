import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Award, BookOpen, Leaf, HeartHandshake } from 'lucide-react'

export default function FounderSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="sobre" className="py-24 md:py-32 bg-sage-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
        >
          {/* Portrait card */}
          <div className="flex-shrink-0 w-full lg:w-[440px]">
            <div className="relative">
              {/* Main portrait container */}
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-forest-800 via-forest-900 to-slate-950 overflow-hidden relative shadow-2xl border border-sage-200/50">
                {/* Organic decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-44 h-44 md:w-56 md:h-56">
                    <div className="absolute inset-0 rounded-full bg-ivory-100/10 animate-pulse-slow" />
                    <div className="absolute inset-4 rounded-full bg-ivory-100/10" />
                    <div className="absolute inset-8 rounded-full bg-ivory-100/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="w-16 h-16 text-terra-400" />
                    </div>
                  </div>
                </div>

                {/* Decorative gradients */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-3xl text-ivory-50 mb-1 font-semibold">Rebeca</p>
                  <p className="text-sage-300 text-sm font-medium">
                    Fundadora · An.Yue.Ning & Método Soutus
                  </p>
                </div>
              </div>

              {/* Floating credential badges */}
              <div className="absolute -bottom-4 -right-4 md:right-0 bg-white rounded-2xl shadow-xl shadow-sage-200/60 p-4 border border-sage-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-terra-100 text-terra-700 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Terapeuta Somática</p>
                    <p className="text-[11px] text-slate-500 font-medium">Clínica & Integrativa</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-3 md:left-0 bg-white rounded-2xl shadow-xl shadow-sage-200/60 p-4 border border-sage-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Sabedoria Tradicional</p>
                    <p className="text-[11px] text-slate-500 font-medium">Trabalho da Terra & Neurobiologia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 bg-forest-100 rounded-full mb-6 border border-forest-200">
              A Guardiã da Arquitetura Humana
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight mb-8 font-semibold">
              Dedicação ao Resgate da{' '}
              <span className="text-forest-700">Integridade do Corpo</span>
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Meu nome é <strong className="text-forest-800">Rebeca</strong>. Criei a{' '}
                <strong className="text-forest-800">An.Yue.Ning</strong> e o{' '}
                <strong className="text-terra-700">Método Soutus</strong> para oferecer uma resposta sólida
                às dores silenciosas da nossa época.
              </p>
              <p>
                Recusando a superficialidade de tratamentos rápidos que apenas calam os sintomas,
                dedico minha prática clínica a ler com atenção as conexões entre o alinhamento da coluna,
                a elasticidade da fáscia e as tensões retidas na memória corporal.
              </p>
              <p>
                Unindo o conhecimento tradicional dos povos que viviam em perfeita harmonia com o solo, os alimentos e as estações ao rigor da neurofisiologia ocidental, meu compromisso não é com o alívio passageiro, mas com a{' '}
                <strong className="text-terra-700">soberania duradoura da sua saúde</strong>.
              </p>
            </div>

            {/* Credential items */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-sage-200">
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-forest-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Atendimento Individual e Humanizado</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-terra-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Bio-Integração Passiva e Ativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
