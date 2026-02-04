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
    <div className="min-h-screen bg-[#0b1720] text-slate-50">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <Hero />
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
