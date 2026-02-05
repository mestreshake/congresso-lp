import { useTranslation } from 'react-i18next'
import istLogo from '../assets/SOCIEDADEINTERNACIONALTOXI.png'
import ministerioSaudeLogo from '../assets/ministerio-da-saude-ministerio-da-saude-logo-png_seeklogo-93054.png'
import butantanLogo from '../assets/Logo_Instituto_Butantan_vertical.svg'

const SponsorsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.label')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('sponsors.titleHighlight')}
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('sponsors.intro')}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-5 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 md:p-6">
        {/* Sociedade Promotora */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#2d3b30]/30 p-5 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.promoterLabel')}
          </p>
          <div className="mt-4 flex items-center gap-6">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-white/95 p-2">
              <img
                src={istLogo}
                alt="IST - International Society on Toxinology"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-white">
                {t('sponsors.promoterName')}
              </p>
              <p className="mt-1 text-xs text-slate-300">
                {t('sponsors.promoterDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Instituições Parceiras */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#ffd89b]/20 p-5 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.partnersLabel')}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {/* Ministério da Saúde */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white/95 p-2">
                <img
                  src={ministerioSaudeLogo}
                  alt="Ministério da Saúde"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-white">
                {t('sponsors.partner1')}
              </p>
            </div>
            {/* Instituto Butantan */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white/95 p-2">
                <img
                  src={butantanLogo}
                  alt="Instituto Butantan"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-white">
                {t('sponsors.partner2')}
              </p>
            </div>
          </div>
        </div>

        {/* Novos Patrocinadores */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#753b2e]/30 p-5 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.newSponsorsLabel')}
          </p>
          <p className="mt-3 text-sm text-slate-200">
            {t('sponsors.newSponsorsText')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
