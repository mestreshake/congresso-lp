const AboutSection = () => {
  return (
    <section id="about" className="mt-20 space-y-10 md:mt-24">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
          Sobre o congresso
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">Toxinologia, saúde e Amazônia</span> em diálogo global
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          A Sociedade Internacional de Toxinologia (IST), fundada em 1962, promove o
          avanço científico em todas as áreas da toxinologia, abrangendo animais,
          plantas e microrganismos venenosos e peçonhentos, toxinas derivadas,
          envenenamentos, desenvolvimento de antivenenos e aplicações terapêuticas e
          biotecnológicas de toxinas. A Sociedade conecta pesquisadores de todo o
          mundo por meio de encontros periódicos que estimulam o intercâmbio de
          ideias, resultados e colaborações.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          Em 2026, o 23rd World Congress of the International Society on Toxinology
          chega a Manaus, Amazonas, pela primeira vez na Amazônia brasileira, em uma
          região de extraordinária diversidade biológica e alta incidência de
          acidentes por animais peçonhentos. Com o tema{' '}
          <span className="font-semibold text-[#ffd89b]">
            "Toxinologia, saúde e Amazônia: Compartilhando experiências entre a
            prática clínica, a pesquisa fundamental e a inovação"
          </span>
          , o congresso propõe um encontro internacional de excelência acadêmica,
          inclusivo, diverso e atento aos aspectos éticos.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          O evento reunirá cientistas interessados em biologia animal, caracterização
          bioquímica e mecanismos de ação de toxinas, fisiopatologia dos
          envenenamentos, desenvolvimento de tratamentos e de novos candidatos a
          fármacos baseados em toxinas, articulando pesquisa básica, inovação e
          prática clínica sob a perspectiva da Saúde Única.
        </p>
      </div>

      <div className="grid gap-6 rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-6 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 md:grid-cols-3 md:p-8">
        <div className="md:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Presidência do evento
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Liderança científica comprometida com excelência, inclusão e diálogo
            interdisciplinar.
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-200 md:col-span-2">
          <div>
            <p className="font-semibold text-white">Ana Maria Moura da Silva</p>
            <p className="text-xs text-slate-300">
              Instituto Butantan, São Paulo, SP – Brasil
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Jacqueline de Almeida Gonçalves Sachett</p>
            <p className="text-xs text-slate-300">
              Universidade do Estado do Amazonas, Manaus, AM – Brasil
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Wuelton M. Monteiro</p>
            <p className="text-xs text-slate-300">
              Universidade do Estado do Amazonas &amp; Fundação de Medicina Tropical
              Dr. Heitor Vieira Dourado, Manaus, AM – Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


