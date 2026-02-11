import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="mt-20 space-y-8 sm:mt-28 sm:space-y-10 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-6 backdrop-blur-lg shadow-lg md:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
          {t('about.label')}
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
          <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
            {t('about.titleHighlight')}
          </span>{' '}
          {t('about.titleEnd')}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-100 md:text-[15px]">
          {t('about.p1')}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-100 md:text-[15px]">
          {t('about.p2Start')}{' '}
          <span className="font-semibold text-[#ffd89b]">
            {t('about.p2Theme')}
          </span>
          {t('about.p2End')}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-100 md:text-[15px]">
          {t('about.p3')}
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
