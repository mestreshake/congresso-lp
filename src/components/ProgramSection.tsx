import { useTranslation } from 'react-i18next'

const ProgramSection = () => {
  const { t } = useTranslation()

  return (
    <section id="program" className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('program.label')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('program.titleHighlight')}
            </span>{' '}
            {t('program.titleEnd')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('program.intro')}
          </p>
        </div>
        <div className="rounded-2xl border border-[#ffd89b]/40 bg-gradient-to-br from-[#753b2e]/30 to-[#753b2e]/15 px-4 py-3 text-xs text-[#ffd89b] shadow-lg shadow-[#753b2e]/20 md:max-w-xs">
          {t('program.notice')}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 to-[#2d3b30]/8 p-5 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#ffd89b] font-semibold">
            {t('program.scientificLabel')}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>• {t('program.scientific1')}</li>
            <li>• {t('program.scientific2')}</li>
            <li>• {t('program.scientific3')}</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#ffd89b]/20 bg-gradient-to-br from-[#ffd89b]/15 to-[#ffd89b]/5 p-5 backdrop-blur-sm shadow-lg shadow-[#ffd89b]/10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#ffd89b] font-semibold">
            {t('program.participationLabel')}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>• {t('program.participation1')}</li>
            <li>• {t('program.participation2')}</li>
            <li>• {t('program.participation3')}</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#753b2e]/30 bg-gradient-to-br from-[#753b2e]/20 to-[#753b2e]/10 p-5 backdrop-blur-sm shadow-lg shadow-[#753b2e]/20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#ffd89b] font-semibold">
            {t('program.amazonLabel')}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>• {t('program.amazon1')}</li>
            <li>• {t('program.amazon2')}</li>
            <li>• {t('program.amazon3')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
