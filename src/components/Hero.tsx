const Hero = () => {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#2d3b30]/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#fdd1a1]">
          Manaus • Amazônia • 13–17 setembro 2026
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          23rd World Congress of the{' '}
          <span className="bg-gradient-to-r from-[#0098da] via-[#fdd1a1] to-[#753b2e] bg-clip-text text-transparent">
            International Society on Toxinology
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
          “Toxinologia, saúde e Amazônia: Compartilhando experiências entre a prática
          clínica, a pesquisa fundamental e a inovação”.
        </p>
        <div className="mt-6 grid gap-4 text-xs text-slate-100 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">Data</p>
            <p className="mt-1 text-sm font-semibold">13–17 setembro 2026</p>
            <p className="mt-1 text-[11px] text-slate-300">5 dias de programação</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">Local</p>
            <p className="mt-1 text-sm font-semibold">Hotel Tropical</p>
            <p className="mt-1 text-[11px] text-slate-300">Manaus • Amazonas • Brasil</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#0098da]/20 via-[#fdd1a1]/10 to-[#753b2e]/20 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">
              Organização
            </p>
            <p className="mt-1 text-sm font-semibold">Pan-American Section • IST</p>
            <p className="mt-1 text-[11px] text-slate-200">
              Primeira edição na Amazônia brasileira
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#registration"
            className="rounded-full bg-[#0098da] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-lg shadow-[#0098da]/40 hover:bg-[#00a8f5]"
          >
            Quero participar
          </a>
          <a
            href="#about"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 hover:text-[#fdd1a1]"
          >
            Conheça o congresso
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_top,_#0098da33,_transparent_60%),radial-gradient(circle_at_bottom,_#753b2e44,_transparent_60%)]" />
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#2d3b30] via-[#0b1720] to-black shadow-2xl shadow-black/50">
          <div className="flex h-full flex-col justify-between p-6 md:p-7">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#fdd1a1]">
                Manaus • Amazonas
              </p>
              <p className="mt-2 text-lg font-semibold">
                Imersão em toxinologia na maior floresta tropical do planeta.
              </p>
              <p className="mt-3 text-xs text-slate-200">
                Conectando pesquisadores, clínicos e inovadores para discutir toxinas,
                envenenamentos e soluções terapêuticas em um cenário único.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-[11px]">
              <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                <p className="text-xs font-semibold text-[#fdd1a1]">4</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  Palestras magnas
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                <p className="text-xs font-semibold text-[#fdd1a1]">16</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  Sessões temáticas
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                <p className="text-xs font-semibold text-[#fdd1a1]">5</p>
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


