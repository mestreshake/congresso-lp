import { useTranslation } from 'react-i18next'

const RegistrationSection = () => {
  const { t } = useTranslation()

  return (
    <section id="registration" className="mt-20 md:mt-24">
      <div className="grid gap-8 rounded-3xl border border-[#2d3b30]/40 bg-gradient-to-br from-[#2d3b30]/20 via-[#2d3b30]/12 to-[#753b2e]/15 p-6 shadow-xl shadow-[#2d3b30]/20 md:grid-cols-[1.4fr,1fr] md:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('registration.label')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('registration.titleHighlight')}
            </span>{' '}
            {t('registration.titleEnd')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('registration.p1')}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('registration.p2')}
          </p>
        </div>
        <div className="space-y-4 rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#2d3b30]/30 p-5 text-xs text-slate-200 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('registration.contactLabel')}
          </p>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              {t('registration.emailLabel')}
            </p>
            <a
              href="mailto:ist2026.brazil@gmail.com"
              className="mt-1 block text-sm font-medium text-[#ffd89b] hover:text-white transition-colors"
            >
              ist2026.brazil@gmail.com
            </a>
          </div>
          <div className="pt-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              {t('registration.updatesLabel')}
            </p>
            <ul className="mt-2 space-y-1 text-slate-200">
              <li>• {t('registration.update1')}</li>
              <li>• {t('registration.update2')}</li>
              <li>• {t('registration.update3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection
