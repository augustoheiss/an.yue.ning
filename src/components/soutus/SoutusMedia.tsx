import { Play } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SoutusMedia() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 md:py-32 bg-obsidian-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-carbon-600/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          {/* Title */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-electric-400 bg-electric-500/10 rounded-lg mb-6 font-geo border border-electric-500/15">
              Conteúdo
            </span>
            <h2 className="font-geo text-3xl sm:text-4xl font-bold text-obsidian-50 mb-4 tracking-tight">
              Expanda Seu Conhecimento
            </h2>
            <p className="text-carbon-300 text-base md:text-lg max-w-2xl mx-auto">
              Aprofunde-se na ciência do movimento através de nossos podcasts e estudos biomecânicos.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video rounded-2xl bg-carbon-900/60 border border-carbon-700/30 overflow-hidden group cursor-pointer hover:border-amber-500/20 transition-all duration-500">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-500">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-amber-400 ml-1" />
              </div>
              <p className="font-geo text-sm text-carbon-400 tracking-widest uppercase font-medium">
                Soutus YouTube / Podcast Embed Placeholder
              </p>
            </div>

            {/* Subtle ambient glow */}
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-amber-500/3 blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
