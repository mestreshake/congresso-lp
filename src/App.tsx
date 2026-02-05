import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import CommitteeSection from './components/CommitteeSection'
import VenueSection from './components/VenueSection'
import RegistrationSection from './components/RegistrationSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'

// Background fixo do Teatro Amazonas
import teatroBg from './assets/Teatro_am_01.jpg'

function App() {
  return (
    <div 
      className="min-h-screen text-slate-50 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${teatroBg})` }}
    >
      {/* Overlay verde sobre o background */}
      <div className="min-h-screen bg-gradient-to-b from-[#0d4a2f]/85 via-[#0d4a2f]/90 to-[#0d4a2f]/95">
        <Header />

        {/* Hero */}
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
    </div>
  )
}

export default App
