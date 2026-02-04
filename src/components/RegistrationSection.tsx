const RegistrationSection = () => {
  return (
    <section id="registration" className="mt-20 md:mt-24">
      <div className="grid gap-8 rounded-3xl border border-[#0098da]/40 bg-[#0098da]/10 p-6 md:grid-cols-[1.4fr,1fr] md:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#fdd1a1]">
            Inscrições &amp; submissão de trabalhos
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Em breve: valores, modalidades e cronograma completo
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100 md:text-[15px]">
            As modalidades de inscrição contemplarão profissionais, estudantes, membros
            da IST e demais participantes, com valores diferenciados por categoria e
            faixas de data (early, regular e late). As diretrizes para submissão de
            resumos, templates e modalidades de apresentação (pôster, comunicação oral,
            sessões especiais) serão divulgadas na segunda circular do evento.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-100 md:text-[15px]">
            Caso deseje receber novidades sobre prazos, chamadas de trabalhos e abertura
            das inscrições, registre seu interesse pelo e-mail oficial do congresso.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl bg-[#0b1720]/70 p-5 text-xs text-slate-100">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#fdd1a1]">
            Contato para informações
          </p>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              E-mail oficial
            </p>
            <a
              href="mailto:ist2026.brazil@gmail.com"
              className="mt-1 block text-sm font-medium text-[#fdd1a1] hover:text-white"
            >
              ist2026.brazil@gmail.com
            </a>
          </div>
          <div className="pt-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              Próximas atualizações
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Divulgação dos valores de inscrição e lotes.</li>
              <li>• Datas para submissão de resumos e aceitações.</li>
              <li>• Informações sobre workshops, mesas-redondas e minicursos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection


