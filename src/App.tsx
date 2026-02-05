import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import CommitteeSection from './components/CommitteeSection'
import VenueSection from './components/VenueSection'
import RegistrationSection from './components/RegistrationSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2418] to-[#0f1f15] text-slate-50">
      <Header />

      {/* Hero com background image */}
      <Hero />

      {/* Demais seções */}
      <main className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <AboutSection />
        <ProgramSection />
        <CommitteeSection />
        <VenueSection />
        <RegistrationSection />
        <SponsorsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
