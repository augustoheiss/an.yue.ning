import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PainSection from '@/components/PainSection'
import PillarsSection from '@/components/PillarsSection'
import ServicesSection from '@/components/ServicesSection'
import SoutusSection from '@/components/SoutusSection'
import OutcomeSection from '@/components/OutcomeSection'
import FounderSection from '@/components/FounderSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50 theme-light selection:bg-forest-100 selection:text-forest-900">
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <PillarsSection />
        <ServicesSection />
        <SoutusSection />
        <OutcomeSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
