import { useTranslation } from 'react-i18next'

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="mt-20 space-y-10 md:mt-24">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
          {t('about.label')}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
            {t('about.titleHighlight')}
          </span>{' '}
          {t('about.titleEnd')}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          {t('about.p1')}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          {t('about.p2Start')}{' '}
          <span className="font-semibold text-[#ffd89b]">
            {t('about.p2Theme')}
          </span>
          {t('about.p2End')}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
          {t('about.p3')}
        </p>
      </div>

      <div className="grid gap-6 rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-6 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 md:grid-cols-3 md:p-8">
        <div className="md:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('about.presidentsLabel')}
          </p>
          <p className="mt-2 text-sm text-slate-200">
            {t('about.presidentsText')}
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-200 md:col-span-2">
          <div>
            <p className="font-semibold text-white">{t('about.president1')}</p>
            <p className="text-xs text-slate-300">
              {t('about.president1Aff')}
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">{t('about.president2')}</p>
            <p className="text-xs text-slate-300">
              {t('about.president2Aff')}
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">{t('about.president3')}</p>
            <p className="text-xs text-slate-300">
              {t('about.president3Aff')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
