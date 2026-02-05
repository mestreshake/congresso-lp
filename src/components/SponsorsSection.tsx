import istLogoBlue from '../assets/IST LOGO OFICIAL ESCOLHIDA AZUL.png'

const SponsorsSection = () => {
  return (
    <section className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Apoio &amp; realização
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">Instituições parceiras</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 md:text-[15px]">
            O congresso conta com o apoio de instituições científicas e de saúde
            comprometidas com a pesquisa, a inovação e o enfrentamento das doenças
            relacionadas a toxinas.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-5 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 text-sm text-slate-200 md:grid-cols-3 md:p-6">
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#2d3b30]/30 p-4 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Sociedade promotora
          </p>
          <img
            src={istLogoBlue}
            alt="IST - International Society on Toxinology"
            className="mt-3 h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(45,59,48,0.3)]"
          />
          <p className="mt-3 font-semibold text-white">
            International Society on Toxinology (IST)
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#ffd89b]/20 p-4 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Instituições parceiras
          </p>
          <ul className="mt-2 space-y-1 text-sm text-white">
            <li>• Ministério da Saúde</li>
            <li>• Instituto Butantan</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#753b2e]/30 p-4 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Novos patrocinadores
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Informações sobre cotas de patrocínio, categorias e benefícios serão
            disponibilizadas em breve para instituições interessadas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection


