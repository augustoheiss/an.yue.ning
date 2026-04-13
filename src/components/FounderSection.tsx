import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Award, BookOpen, Leaf } from 'lucide-react'

export default function FounderSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="sobre" className="py-24 md:py-32 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
        >
          {/* Portrait placeholder */}
          <div className="flex-shrink-0 w-full lg:w-[420px]">
            <div className="relative">
              {/* Main portrait area */}
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-forest-700 via-forest-800 to-sage-900 overflow-hidden relative">
                {/* Abstract portrait silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 md:w-52 md:h-52">
                    <div className="absolute inset-0 rounded-full bg-ivory-100/10 animate-pulse-slow" />
                    <div className="absolute inset-4 rounded-full bg-ivory-100/10" />
                    <div className="absolute inset-8 rounded-full bg-ivory-100/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="w-16 h-16 text-terra-400/60" />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-forest-900 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-2xl text-ivory-50 mb-1">Rebeca</p>
                  <p className="text-sage-300 text-sm">Fundadora · An.Yue.Ning</p>
                </div>
              </div>

              {/* Floating credential badges */}
              <div className="absolute -bottom-4 -right-4 md:right-0 bg-white rounded-2xl shadow-xl shadow-sage-200/50 p-4 border border-sage-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-terra-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-terra-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">Terapeuta Somática</p>
                    <p className="text-xs text-slate-500">Clínica & Ancestral</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-3 md:left-0 bg-white rounded-2xl shadow-xl shadow-sage-200/50 p-4 border border-sage-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">Integrativa</p>
                    <p className="text-xs text-slate-500">Oriente & Ocidente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-forest-600 bg-forest-100 rounded-full mb-6">
              Quem Somos
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight mb-8">
              Uma Guardiã da{' '}
              <span className="text-forest-600">Arquitetura Humana</span>
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Meu nome comercial é <strong className="text-forest-700">An.Yue.Ning</strong>. Em
                uma era de atrofia cognitiva, atuo como uma guardiã da arquitetura humana.
              </p>
              <p>
                Recusando a superficialidade da medicina moderna que apenas apaga sintomas,
                dedico minha vida a ler a interface exata entre o seu corpo físico e a sua mente
                subconsciente.
              </p>
              <p>
                Integrando a genialidade biomecânica e epistemológica do Oriente com a precisão
                neurológica do Ocidente, meu objetivo não é o alívio passageiro, mas a sua{' '}
                <strong className="text-terra-600">soberania integral</strong>.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px flex-1 bg-sage-200" />
              <Leaf className="w-5 h-5 text-sage-400" />
              <div className="h-px flex-1 bg-sage-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
