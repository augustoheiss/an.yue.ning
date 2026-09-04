import { useState } from 'react'
import {
  Sparkles,
  Hand,
  Disc,
  Brain,
  Atom,
  Ruler,
  Dumbbell,
  Footprints,
  Music,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Pillar {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'estrutural' | 'metabolico' | 'psiquico'
  categoryLabel: string
  ancestralWisdom: string
  scienceEvidence: string
  clinicalApplication: string
  icon: typeof Hand
  accentColor: string
  tagColor: string
}

const pillars: Pillar[] = [
  {
    id: 'toque',
    number: '01',
    title: 'A Arquitetura do Toque',
    subtitle: 'Massagem Clínica & Sistema Glinfático',
    category: 'estrutural',
    categoryLabel: 'Eixo Estrutural',
    ancestralWisdom:
      'Desde os primórdios dos antigos povos e curadores da terra, o toque com óleos botânicos e ervas puras sempre foi o primeiro instrumento diagnóstico e restaurador da vitalidade humana.',
    scienceEvidence:
      'A estimulação dos mecanorreceptores táteis (Merkel, Meissner e Ruffini) ativa o nervo vago e desobstrui as vias linfáticas cervicais, facilitando o sistema glinfático na depuração noturna de resíduos cerebrais.',
    clinicalApplication:
      'Massoterapia clínica profunda, drenagem especializada e alívio imediato da sobrecarga cefálica e muscular.',
    icon: Hand,
    accentColor: 'from-forest-600 to-forest-800',
    tagColor: 'bg-forest-100 text-forest-800 border-forest-200',
  },
  {
    id: 'espinhal',
    number: '02',
    title: 'O Alinhamento Neuro-Espinhal',
    subtitle: 'A Coluna & o Córtex Pré-Frontal',
    category: 'estrutural',
    categoryLabel: 'Eixo Estrutural',
    ancestralWisdom:
      'Os mestres da tradição clássica ensinavam que a coluna vertebral é o esteio do homem, guardando a raiz de todas as funções do corpo e a clareza da postura diante do mundo.',
    scienceEvidence:
      'A correção de subluxações articulares espinhais restaura os sinais proprioceptivos corretos para o cérebro, modulando em até 20% os potenciais evocados no córtex pré-frontal e eliminando a névoa mental.',
    clinicalApplication:
      'Ajuste biomecânico articular, restauração do fluxo neural e alívio da compressão cervical e lombar.',
    icon: Disc,
    accentColor: 'from-clay-500 to-clay-700',
    tagColor: 'bg-clay-100 text-clay-800 border-clay-200',
  },
  {
    id: 'somatica',
    number: '03',
    title: 'Reprocessamento Somático',
    subtitle: 'A Memória do Corpo & a Teoria Polivagal',
    category: 'psiquico',
    categoryLabel: 'Eixo Psíquico',
    ancestralWisdom:
      'Nossos antepassados sabiam que sustos e pesares não desaparecem no silêncio; eles se alojam na musculatura e na respiração até serem reconhecidos e descarregados com sabedoria.',
    scienceEvidence:
      'O estresse e as sobrecargas emocionais ficam gravados em circuitos subcorticais primitivos. A Terapia Somática ativa o Vago Ventral, promovendo a sensação fisiológica de calma, presença e segurança interna.',
    clinicalApplication:
      'Terapia de Reprocessamento Generativo (TRG), dissolução da couraça muscular e alívio de bloqueios emocionais antigos.',
    icon: Brain,
    accentColor: 'from-terra-500 to-terra-700',
    tagColor: 'bg-terra-100 text-terra-800 border-terra-200',
  },
  {
    id: 'mtc',
    number: '04',
    title: 'As Cinco Fases da Terra (Wu Xing)',
    subtitle: 'Equilíbrio Visceral & Dietoterapia',
    category: 'metabolico',
    categoryLabel: 'Eixo Metabólico',
    ancestralWisdom:
      'A sabedoria milenar do cultivo da terra compreende que o corpo reflete as estações: Madeira, Fogo, Terra, Metal e Água. O mestre Sun Simiao já ensinava que curar começa na mesa e no ritmo da terra.',
    scienceEvidence:
      'O eixo intestino-microbiota-cérebro valida a visão ancestral: nutrir o sistema digestivo preserva a barreira hematoencefálica, elimina a endotoxemia inflamatória e devolve a nitidez mental.',
    clinicalApplication:
      'Diagnóstico integrativo dos meridianos vitais, harmonização visceral e orientação alimentar funcional pura.',
    icon: Atom,
    accentColor: 'from-sage-600 to-forest-700',
    tagColor: 'bg-sage-100 text-sage-800 border-sage-200',
  },
  {
    id: 'fascia',
    number: '05',
    title: 'A Sabedoria Fascial & Alongamento',
    subtitle: 'Biotensegridade Contra o Confinamento Postural',
    category: 'estrutural',
    categoryLabel: 'Eixo Estrutural',
    ancestralWisdom:
      'As práticas corporais antigas (como o Daoyin e a contemplação do movimento) mantinham os tendões maleáveis como juncos que vergam ao vento sem se romper.',
    scienceEvidence:
      'A fáscia é o maior órgão sensorial do corpo. O alongamento consciente ativa miofibroblastos, hidrata a matriz de colágeno e interrompe a respiração curta da cifose digital, reoxigenando o cérebro.',
    clinicalApplication:
      'Liberação miofascial assistida, descompressão torácica e devolução da amplitude anatômica original.',
    icon: Ruler,
    accentColor: 'from-forest-700 to-sage-800',
    tagColor: 'bg-forest-100 text-forest-800 border-forest-200',
  },
  {
    id: 'forca',
    number: '06',
    title: 'Aptidão Natural & Trabalho da Terra',
    subtitle: 'O Músculo como Glândula Endócrina da Inteligência',
    category: 'metabolico',
    categoryLabel: 'Eixo Metabólico',
    ancestralWisdom:
      'O corpo foi feito para o labor generoso da terra: erguer, carregar, agachar e superar o peso do dia com dignidade, mantendo os ossos firmes e a mente desperta.',
    scienceEvidence:
      'A contração dos grandes grupos musculares estimula a liberação de irisina, uma miocina que induz a produção de BDNF no hipocampo, promovendo a neurogênese e protegendo contra a atrofia.',
    clinicalApplication:
      'Resgate dos padrões motores fundamentais humanos (Método Soutus) para fortalecer a musculatura estabilizadora.',
    icon: Dumbbell,
    accentColor: 'from-amber-600 to-amber-800',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
  },
  {
    id: 'corrida',
    number: '07',
    title: 'A Marcha Rítmica & Navegação',
    subtitle: 'Foco Espacial & o Sistema Endocanabinoide',
    category: 'psiquico',
    categoryLabel: 'Eixo Psíquico',
    ancestralWisdom:
      'Caminhar e correr ao ar livre sob o sol e o vento sempre foi o meio natural pelo qual o homem mapeava o horizonte, mantendo a mente serena e atenta aos sinais da natureza.',
    scienceEvidence:
      'A locomoção rítmica ativa as células de grade do córtex entorrinal e eleva a anandamida plasmática, lipídio neurotransmissor que induz analgesia natural, estado de fluxo e clareza contemplativa.',
    clinicalApplication:
      'Reeducação da passada, respiração nasal rítmica e reconexão com a locomoção natural sem atrito excessivo.',
    icon: Footprints,
    accentColor: 'from-terra-600 to-clay-700',
    tagColor: 'bg-terra-100 text-terra-800 border-terra-200',
  },
  {
    id: 'danca',
    number: '08',
    title: 'A Dança & a Lucidez Cognitiva',
    subtitle: 'A Mais Nobre Coordenação Mente-Corpo',
    category: 'psiquico',
    categoryLabel: 'Eixo Psíquico',
    ancestralWisdom:
      'Em todas as culturas do passado, a dança comunitária e o ritmo celebravam a terra e as colheitas, integrando memória, harmonia social e vigor físico em um só ato sagrado.',
    scienceEvidence:
      'Estudos longitudinais de referência (NEJM) comprovam que a dança contínua reduz em 76% o risco de declínio cognitivo e demência, por exigir integração simultânea entre audição, visão, cerebelo e empatia.',
    clinicalApplication:
      'Educação somática rítmica, expansão da kinesfera pessoal e desbloqueio da expressão física e da memória.',
    icon: Music,
    accentColor: 'from-forest-800 to-terra-800',
    tagColor: 'bg-forest-100 text-forest-800 border-forest-200',
  },
]

export default function PillarsSection() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'estrutural' | 'metabolico' | 'psiquico'>('todos')
  const [activePillar, setActivePillar] = useState<string>(pillars[0].id)

  const filteredPillars =
    selectedFilter === 'todos'
      ? pillars
      : pillars.filter((p) => p.category === selectedFilter)

  return (
    <section id="pilares" className="py-24 md:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terra-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16 md:mb-20`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 bg-forest-100 rounded-full mb-6 border border-forest-200/60">
            <Sparkles className="w-3.5 h-3.5 text-terra-600" />
            <span>Fundamentos & Sabedoria da Terra</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight max-w-4xl mx-auto mb-6">
            Os 8 Pilares da{' '}
            <span className="text-forest-700">Arquitetura Humana</span>
          </h2>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
            O corpo humano foi concebido com uma inteligência biológica perfeita. Quando resgatamos
            a harmonia do trabalho da terra, o movimento consciente e a sobriedade ancestral com a
            precisão da neurociência, a vitalidade plena ressurge naturalmente.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10">
            {[
              { id: 'todos', label: 'Todos os 8 Pilares' },
              { id: 'estrutural', label: 'Eixo Estrutural & Fascial' },
              { id: 'metabolico', label: 'Eixo Metabólico & Vital' },
              { id: 'psiquico', label: 'Eixo Psíquico & Neurodinâmico' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                  selectedFilter === tab.id
                    ? 'bg-forest-700 text-ivory-50 border-forest-700 shadow-md shadow-forest-900/15'
                    : 'bg-white text-slate-600 border-sage-200 hover:border-forest-300 hover:text-forest-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon
            const isSelected = activePillar === pillar.id

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cursor-pointer group relative bg-white rounded-2xl border transition-all duration-300 p-7 flex flex-col justify-between ${
                  isSelected
                    ? 'border-forest-600 shadow-xl shadow-forest-900/10 ring-2 ring-forest-500/20 -translate-y-1'
                    : 'border-sage-200/70 hover:border-forest-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSelected
                          ? 'bg-forest-700 text-ivory-50'
                          : 'bg-sage-100 text-forest-700 group-hover:bg-forest-100'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-sm font-semibold tracking-wider text-slate-400">
                      {pillar.number}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border mb-3 ${pillar.tagColor}`}
                  >
                    {pillar.categoryLabel}
                  </span>

                  <h3 className="font-serif text-xl text-slate-900 font-semibold mb-2 group-hover:text-forest-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-terra-600 font-medium mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {pillar.ancestralWisdom}
                  </p>
                </div>

                {/* Footer cue */}
                <div className="pt-5 mt-5 border-t border-sage-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-forest-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {isSelected ? 'Em Destaque' : 'Ver Detalhes'}
                  </span>
                  <CheckCircle2
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? 'text-forest-600' : 'text-slate-300'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Pillar Deep Dive Showcase */}
        {(() => {
          const current = pillars.find((p) => p.id === activePillar) || pillars[0]
          const CurrentIcon = current.icon

          return (
            <div className="bg-white rounded-3xl border border-sage-200/80 p-8 md:p-12 shadow-xl shadow-sage-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-forest-50 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-sage-100 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-forest-700 text-ivory-50 flex items-center justify-center flex-shrink-0 shadow-lg shadow-forest-900/20">
                    <CurrentIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-600">
                      Pilar {current.number} · {current.categoryLabel}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-semibold mt-1">
                      {current.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      {current.subtitle}
                    </p>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-700 text-ivory-50 text-sm font-medium hover:bg-forest-800 transition-all shadow-md shadow-forest-900/20 hover:-translate-y-0.5"
                >
                  Experimentar Este Cuidado
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Pillars Deep Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div className="p-6 rounded-2xl bg-sage-50/70 border border-sage-200/60">
                  <h4 className="font-serif text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-terra-500" />
                    A Sabedoria dos Ancestrais
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {current.ancestralWisdom}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-forest-50/50 border border-forest-200/60">
                  <h4 className="font-serif text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-forest-600" />
                    O Rigor Biológico Moderno
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {current.scienceEvidence}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-50 border border-sage-200/60">
                  <h4 className="font-serif text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Aplicação Clínica no Atendimento
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {current.clinicalApplication}
                  </p>
                </div>
              </div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}
