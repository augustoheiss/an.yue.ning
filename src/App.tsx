import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PainSection from '@/components/PainSection'
import OutcomeSection from '@/components/OutcomeSection'
import ServicesSection from '@/components/ServicesSection'
import FounderSection from '@/components/FounderSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-50 theme-light">
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <OutcomeSection />
        <ServicesSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
