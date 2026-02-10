import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import CommitteeSection from './components/CommitteeSection'
import VenueSection from './components/VenueSection'
import RegistrationSection from './components/RegistrationSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'

// Backgrounds
import teatroBg from './assets/Teatro_am_01.jpg'
import florestaBg from './assets/bg-floresta.jpg'

function App() {
  return (
    <div className="min-h-screen text-slate-50 bg-[#0d4a2f]">
      {/* Header fixo no topo, sempre visível */}
      <Header />
      {/* Espaçador para compensar o header fixo */}
      <div className="h-16 sm:h-18 md:h-20" />

      {/* Hero com background do Teatro Amazonas (fixo) */}
      <div
        className="bg-cover bg-center bg-fixed -mb-px"
        style={{ backgroundImage: `url(${teatroBg})` }}
      >
        <div className="bg-gradient-to-b from-[#0d4a2f]/40 via-[#0d4a2f]/50 to-[#0d4a2f]/60">
          <Hero />
        </div>
      </div>

      {/* Demais seções com background da floresta (fixo) */}
      <div
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${florestaBg})` }}
      >
        <div className="bg-gradient-to-b from-[#0d4a2f]/50 via-[#0d4a2f]/60 to-[#0d4a2f]/65">
          <main className="mx-auto max-w-6xl px-4 pt-4 pb-16 sm:pt-4 md:px-6 md:pt-4">
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
    </div>
  )
}

export default App
