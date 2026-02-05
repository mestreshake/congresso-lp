import { useTranslation } from 'react-i18next'

const VenueSection = () => {
  const { t } = useTranslation()

  return (
    <section id="venue" className="mt-20 md:mt-24">
      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('venue.label')}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('venue.titleHighlight')}
            </span>{' '}
            {t('venue.titleEnd')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('venue.p1')}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('venue.p2')}
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 -z-10 bg-[radial-gradient(circle_at_top,_#2d3b3044,_transparent_60%),radial-gradient(circle_at_bottom,_#ffd89b66,_transparent_60%)]" />
          <div className="overflow-hidden rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#1a3d35] via-[#0d2418] to-[#1a2f20] p-5 text-xs text-slate-200 shadow-xl shadow-[#2d3b30]/20">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.4)]">
              {t('venue.cardLocation')}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {t('venue.cardTitle')}
            </p>
            <p className="mt-3 text-slate-200">
              {t('venue.cardText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueSection
