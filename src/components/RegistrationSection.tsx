import { useTranslation } from 'react-i18next'

const RegistrationSection = () => {
  const { t } = useTranslation()

  return (
    <section id="registration" className="mt-20 md:mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#ffd89b]/30 bg-gradient-to-br from-[#2d3b30]/30 via-[#1a3d35]/20 to-[#753b2e]/20 p-6 shadow-xl shadow-[#2d3b30]/30 md:p-10">
        {/* Badge "Em breve" */}
        <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-[#ffd89b] to-[#ffc870] px-16 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a1f1a] shadow-lg">
          {t('registration.comingSoonBadge')}
        </div>

        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('registration.label')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-[#ffd89b] via-[#ffc870] to-[#ff8c5a] bg-clip-text text-transparent">
              {t('registration.titleHighlight')}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-100 md:text-lg">
            {t('registration.subtitle')}
          </p>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            <p>{t('registration.p1')}</p>
            <p>{t('registration.p2')}</p>
          </div>

          {/* Informações de contato */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {t('registration.emailLabel')}
              </p>
              <p className="mt-1 text-sm font-medium text-[#ffd89b]">
                ist2026.brazil@gmail.com
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-[#2d3b30]/50" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {t('registration.updatesLabel')}
              </p>
              <ul className="mt-1 text-xs text-slate-300 space-y-1">
                <li>• {t('registration.update1')}</li>
                <li>• {t('registration.update2')}</li>
                <li>• {t('registration.update3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection
