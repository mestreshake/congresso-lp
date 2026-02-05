import istLogo from '../assets/IST LOGO OFICIAL ESCOLHIDA BEGE.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#2d3b30]/40 bg-gradient-to-r from-[#0a1f1a]/95 via-[#0d2418]/95 to-[#0f1f15]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <img
            src={istLogo}
            alt="IST - International Society on Toxinology"
            className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(253,209,161,0.4)] md:h-12"
          />
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(253,209,161,0.3)]">
              World Congress of IST
            </p>
            <p className="text-sm font-semibold bg-gradient-to-r from-[#2d3b30] to-[#ffd89b] bg-clip-text text-transparent">Toxinology • Health • Amazon</p>
          </div>
        </div>
        <div className="hidden gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 md:flex">
          <a href="#about" className="hover:text-[#ffd89b] transition-colors">
            Sobre
          </a>
          <a href="#program" className="hover:text-[#ffd89b] transition-colors">
            Programação
          </a>
          <a href="#committee" className="hover:text-[#ffd89b] transition-colors">
            Comitê
          </a>
          <a href="#venue" className="hover:text-[#ffd89b] transition-colors">
            Local
          </a>
          <a href="#contact" className="hover:text-[#ffd89b] transition-colors">
            Contato
          </a>
        </div>
        <a
          href="#registration"
          className="rounded-full bg-gradient-to-r from-[#2d3b30] to-[#753b2e] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#2d3b30]/50 hover:shadow-[#753b2e]/70 hover:from-[#3d4b40] hover:to-[#854b3e] transition-all md:text-[11px]"
        >
          Pré-inscrição
        </a>
      </nav>
    </header>
  )
}

export default Header


