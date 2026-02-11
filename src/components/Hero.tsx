import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'
import { useEffect, useState } from 'react'
import istLogo from '../assets/IST LOGO OFICIAL ESCOLHIDA BRANCO.png'


// Componente de contador animado
const AnimatedCounter = ({ value, color = '#ffd89b', suffix = '' }: { value: number; color?: string; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span style={{ color }} className="drop-shadow-[0_0_4px_rgba(255,216,155,0.5)]">
      {count}{suffix}
    </span>
  )
}

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Overlay mais transparente para mostrar mais o background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d4a2f]/20 to-[#0d4a2f]/40" />
      
      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-16 md:px-6 md:py-24">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-4 sm:mb-6 flex justify-center lg:justify-start"
            >
              <img
                src={istLogo}
                alt="IST 2026 Logo"
                className="h-44 sm:h-52 md:h-60 lg:h-64 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                decoding="async"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ffd89b]/30 bg-black/20 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-[#ffd89b] shadow-lg backdrop-blur-md sm:px-5 sm:py-2 sm:text-base sm:tracking-[0.22em] md:text-lg"
            >
              {t('hero.badge')}
            </motion.p>
      
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-[#ffd89b] via-[#ffc870] to-[#ffb347] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,216,155,0.5)]">
                {t('hero.titleHighlight')}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 max-w-xl text-base text-white font-medium italic md:text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 grid gap-3 text-xs text-slate-100 grid-cols-2 sm:gap-4"
            >
              {/* Data */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-xl sm:rounded-2xl border border-[#ffb347]/30 bg-white/10 p-2 sm:p-4 backdrop-blur-md cursor-default"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd89b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#ffd89b]">{t('hero.dateLabel')}</p>
                </div>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-semibold text-white">{t('hero.dateValue')}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-200 hidden sm:block">{t('hero.dateSub')}</p>
              </motion.div>
              {/* Local */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-xl sm:rounded-2xl border border-[#ffb347]/30 bg-white/10 p-2 sm:p-4 backdrop-blur-md cursor-default"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd89b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#ffd89b]">{t('hero.venueLabel')}</p>
                </div>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-semibold text-white">{t('hero.venueValue')}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-200 hidden sm:block">{t('hero.venueSub')}</p>
              </motion.div>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 hover:text-[#ffd89b] transition-colors"
              >
                {t('hero.ctaSecondary')} →
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_top,_#2d3b3044,_transparent_60%),radial-gradient(circle_at_bottom,_#ffd89b44,_transparent_60%)]" />
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="overflow-hidden rounded-3xl border border-[#ffb347]/30 bg-white/10 shadow-2xl backdrop-blur-lg"
            >
              <div className="flex h-full flex-col justify-between p-5 lg:p-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.4)]">
                    {t('hero.cardLocation')}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {t('hero.cardTitle')}
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-5 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold">
                      <AnimatedCounter value={4} suffix="+" />
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.lectures')}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl border border-[#ffd89b]/20 bg-black/30 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold">
                      <AnimatedCounter value={16} suffix="+" />
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.sessions')}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl border border-[#753b2e]/30 bg-black/30 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold">
                      <AnimatedCounter value={3} suffix="+" color="#ff8c5a" />
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-200">
                      {t('hero.workshops')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
