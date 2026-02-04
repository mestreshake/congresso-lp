const SponsorsSection = () => {
  return (
    <section className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#fdd1a1]">
            Apoio &amp; realização
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Instituições parceiras
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-100 md:text-[15px]">
            O congresso conta com o apoio de instituições científicas e de saúde
            comprometidas com a pesquisa, a inovação e o enfrentamento das doenças
            relacionadas a toxinas.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-5 text-sm text-slate-100 md:grid-cols-3 md:p-6">
        <div className="rounded-2xl bg-[#0b1720]/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#fdd1a1]">
            Sociedade promotora
          </p>
          <p className="mt-2 font-semibold">
            International Society on Toxinology (IST)
          </p>
        </div>
        <div className="rounded-2xl bg-[#0b1720]/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#fdd1a1]">
            Instituições parceiras
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Ministério da Saúde</li>
            <li>• Instituto Butantan</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-[#0b1720]/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#fdd1a1]">
            Novos patrocinadores
          </p>
          <p className="mt-2 text-sm">
            Informações sobre cotas de patrocínio, categorias e benefícios serão
            disponibilizadas em breve para instituições interessadas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection


