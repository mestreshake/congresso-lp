const ProgramSection = () => {
  return (
    <section id="program" className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#fdd1a1]">
            Programação preliminar
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Uma agenda equilibrada entre ciência, clínica e Amazônia
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100 md:text-[15px]">
            O congresso combinará sessões científicas de alto nível, atividades de
            formação, oportunidades para jovens pesquisadores e momentos de vivência
            sociocultural na Amazônia.
          </p>
        </div>
        <div className="rounded-2xl border border-[#fdd1a1]/30 bg-[#753b2e]/20 px-4 py-3 text-xs text-[#fdd1a1] md:max-w-xs">
          Detalhes finais de horários, palestrantes e inscrições serão divulgados em
          breve no cronograma oficial e no livro de programação.
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
            Sessões científicas
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li>• Cerimônia de abertura com palestra e homenagem da IST.</li>
            <li>• 4 palestras magnas com pesquisadores de grande destaque.</li>
            <li>
              • 16 sessões temáticas com palestrantes convidados, jovens cientistas e
              apresentações orais selecionadas.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
            Participação e formação
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li>
              • 2 sessões de pôsteres em horários nobres, com avaliação e premiação.
            </li>
            <li>• 5 minicursos como atividades extracurriculares.</li>
            <li>
              • Espaços para interação entre grupos de pesquisa, redes colaborativas e
              jovens investigadores.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
            Experiência na Amazônia
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li>• Atividades socioculturais e jantar oficial do congresso.</li>
            <li>• Imersão no cenário e na biodiversidade cultural da Amazônia.</li>
            <li>
              • Oportunidades para conhecer iniciativas locais em saúde, pesquisa e
              conservação.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProgramSection


