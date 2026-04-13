import SoutusNavbar from '@/components/soutus/SoutusNavbar'
import SoutusHero from '@/components/soutus/SoutusHero'
import SoutusPain from '@/components/soutus/SoutusPain'
import SoutusOutcome from '@/components/soutus/SoutusOutcome'
import SoutusPillars from '@/components/soutus/SoutusPillars'
import SoutusFounder from '@/components/soutus/SoutusFounder'
import SoutusMedia from '@/components/soutus/SoutusMedia'
import SoutusCTA from '@/components/soutus/SoutusCTA'
import SoutusFooter from '@/components/soutus/SoutusFooter'
import { useEffect } from 'react'

export default function SoutusPage() {
  useEffect(() => {
    document.title = 'Soutus — Bio-Integração | An.Yue.Ning'
  }, [])

  return (
    <div className="min-h-screen bg-obsidian-950 text-obsidian-100 theme-dark">
      <SoutusNavbar />
      <main>
        <SoutusHero />
        <SoutusPain />
        <SoutusOutcome />
        <SoutusPillars />
        <SoutusFounder />
        <SoutusMedia />
        <SoutusCTA />
      </main>
      <SoutusFooter />
    </div>
  )
}
