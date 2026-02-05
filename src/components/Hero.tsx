const Hero = () => {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2d3b30]/40 bg-gradient-to-r from-[#2d3b30]/30 via-[#ffd89b]/20 to-[#753b2e]/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#ffd89b] shadow-lg shadow-[#2d3b30]/20">
          Manaus • Amazônia • 13–17 setembro 2026
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          23rd World Congress of the{' '}
          <span className="bg-gradient-to-r from-[#ffd89b] via-[#ffc870] to-[#ff8c5a] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,216,155,0.4)]">
            International Society on Toxinology
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
          "Toxinologia, saúde e Amazônia: Compartilhando experiências entre a prática
          clínica, a pesquisa fundamental e a inovação".
        </p>
        <div className="mt-6 grid gap-4 text-xs text-slate-100 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 to-[#2d3b30]/8 p-4 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">Data</p>
            <p className="mt-1 text-sm font-semibold text-white">13–17 setembro 2026</p>
            <p className="mt-1 text-[11px] text-slate-300">5 dias de programação</p>
          </div>
          <div className="rounded-2xl border border-[#ffd89b]/20 bg-gradient-to-br from-[#ffd89b]/10 to-[#ffd89b]/5 p-4 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">Local</p>
            <p className="mt-1 text-sm font-semibold text-white">Hotel Tropical</p>
            <p className="mt-1 text-[11px] text-slate-300">Manaus • Amazonas • Brasil</p>
          </div>
          <div className="rounded-2xl border border-[#753b2e]/30 bg-gradient-to-br from-[#2d3b30]/20 via-[#ffd89b]/15 to-[#753b2e]/20 p-4 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">
              Organização
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Pan-American Section • IST</p>
            <p className="mt-1 text-[11px] text-slate-200">
              Primeira edição na Amazônia brasileira
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#registration"
            className="rounded-full bg-gradient-to-r from-[#2d3b30] to-[#753b2e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#2d3b30]/50 hover:shadow-[#753b2e]/70 hover:from-[#3d4b40] hover:to-[#854b3e] transition-all"
          >
            Quero participar
          </a>
          <a
            href="#about"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 hover:text-[#ffd89b] transition-colors"
          >
            Conheça o congresso
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_top,_#2d3b3044,_transparent_60%),radial-gradient(circle_at_bottom,_#ffd89b44,_transparent_60%)]" />
        <div className="overflow-hidden rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#1a3d35] via-[#0d2418] to-[#1a2f20] shadow-2xl shadow-[#2d3b30]/20">
          <div className="flex h-full flex-col justify-between p-6 md:p-7">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.4)]">
                Manaus • Amazonas
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Imersão em toxinologia na maior floresta tropical do planeta.
              </p>
              <p className="mt-3 text-xs text-slate-200">
                Conectando pesquisadores, clínicos e inovadores para discutir toxinas,
                envenenamentos e soluções terapêuticas em um cenário único.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-[11px]">
              <div className="rounded-2xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 to-[#2d3b30]/8 px-3 py-3 backdrop-blur-sm">
                <p className="text-xs font-semibold text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.5)]">4</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  Palestras magnas
                </p>
              </div>
              <div className="rounded-2xl border border-[#ffd89b]/20 bg-gradient-to-br from-[#ffd89b]/15 to-[#ffd89b]/5 px-3 py-3 backdrop-blur-sm">
                <p className="text-xs font-semibold text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.5)]">16</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  Sessões temáticas
                </p>
              </div>
              <div className="rounded-2xl border border-[#753b2e]/30 bg-gradient-to-br from-[#753b2e]/15 to-[#753b2e]/8 px-3 py-3 backdrop-blur-sm">
                <p className="text-xs font-semibold text-[#ff8c5a] drop-shadow-[0_0_4px_rgba(255,140,90,0.5)]">5</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  Minicursos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


