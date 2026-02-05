import { useTranslation } from 'react-i18next'

// Para usar sua própria imagem, substitua a URL abaixo por:
// import heroBg from '../assets/hero-background.jpg'
// E use: style={{ backgroundImage: `url(${heroBg})` }}
const HERO_BG_URL = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1920&auto=format&fit=crop'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_BG_URL})` }}
    >
      {/* Overlay escuro com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f1a]/90 via-[#0a1f1a]/80 to-[#0a1f1a]" />
      
      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ffd89b]/30 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#ffd89b] shadow-lg backdrop-blur-sm">
              {t('hero.badge')}
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-[#ffd89b] via-[#ffc870] to-[#ff8c5a] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,216,155,0.4)]">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
              {t('hero.subtitle')}
            </p>
            <div className="mt-6 grid gap-4 text-xs text-slate-100 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">{t('hero.dateLabel')}</p>
                <p className="mt-1 text-sm font-semibold text-white">{t('hero.dateValue')}</p>
                <p className="mt-1 text-[11px] text-slate-300">{t('hero.dateSub')}</p>
              </div>
              <div className="rounded-2xl border border-[#ffd89b]/20 bg-black/30 p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">{t('hero.venueLabel')}</p>
                <p className="mt-1 text-sm font-semibold text-white">{t('hero.venueValue')}</p>
                <p className="mt-1 text-[11px] text-slate-300">{t('hero.venueSub')}</p>
              </div>
              <div className="rounded-2xl border border-[#753b2e]/30 bg-black/30 p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">
                  {t('hero.orgLabel')}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{t('hero.orgValue')}</p>
                <p className="mt-1 text-[11px] text-slate-200">
                  {t('hero.orgSub')}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#registration"
                className="rounded-full bg-gradient-to-r from-[#2d3b30] to-[#753b2e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#2d3b30]/50 hover:shadow-[#753b2e]/70 hover:from-[#3d4b40] hover:to-[#854b3e] transition-all"
              >
                {t('hero.cta')}
              </a>
              <a
                href="#about"
                className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 hover:text-[#ffd89b] transition-colors"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_top,_#2d3b3044,_transparent_60%),radial-gradient(circle_at_bottom,_#ffd89b44,_transparent_60%)]" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md">
              <div className="flex h-full flex-col justify-between p-6 md:p-7">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.4)]">
                    {t('hero.cardLocation')}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {t('hero.cardTitle')}
                  </p>
                  <p className="mt-3 text-xs text-slate-200">
                    {t('hero.cardText')}
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-[11px]">
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.5)]">4</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.lectures')}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#ffd89b]/20 bg-black/30 px-3 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.5)]">16</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.sessions')}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#753b2e]/30 bg-black/30 px-3 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-[#ff8c5a] drop-shadow-[0_0_4px_rgba(255,140,90,0.5)]">5</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.workshops')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
