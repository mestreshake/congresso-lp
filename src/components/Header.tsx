const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b1720]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0098da] text-xs font-semibold leading-tight shadow-lg shadow-[#0098da]/40">
            23rd
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.18em] text-[#fdd1a1]">
              World Congress of IST
            </p>
            <p className="text-sm font-semibold">Toxinology • Health • Amazon</p>
          </div>
        </div>
        <div className="hidden gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 md:flex">
          <a href="#about" className="hover:text-[#fdd1a1]">
            Sobre
          </a>
          <a href="#program" className="hover:text-[#fdd1a1]">
            Programação
          </a>
          <a href="#committee" className="hover:text-[#fdd1a1]">
            Comitê
          </a>
          <a href="#venue" className="hover:text-[#fdd1a1]">
            Local
          </a>
          <a href="#contact" className="hover:text-[#fdd1a1]">
            Contato
          </a>
        </div>
        <a
          href="#registration"
          className="rounded-full bg-[#0098da] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-[#0098da]/40 hover:bg-[#00a8f5] md:text-[11px]"
        >
          Pré-inscrição
        </a>
      </nav>
    </header>
  )
}

export default Header


