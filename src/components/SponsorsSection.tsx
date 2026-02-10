import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'
import istLogo from '../assets/SOCIEDADEINTERNACIONALTOXI.png'
import ministerioSaudeLogo from '../assets/ministerio-da-saude-ministerio-da-saude-logo-png_seeklogo-93054.png'
import butantanLogo from '../assets/Logo_Instituto_Butantan_vertical.svg'

const SponsorsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-16 sm:mt-20 md:mt-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]"
      >
        {t('sponsors.label')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 grid gap-4 rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-5 backdrop-blur-lg shadow-lg md:p-6"
      >
        {/* Sociedade Promotora */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-4 sm:p-5 backdrop-blur-md"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.promoterLabel')}
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 p-1.5 sm:p-2"
            >
              <img
                src={istLogo}
                alt="IST - International Society on Toxinology"
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
            <div>
              <p className="font-semibold text-white">
                {t('sponsors.promoterName')}
              </p>
              <p className="mt-1 text-xs text-slate-300">
                {t('sponsors.promoterDescription')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Instituições Parceiras */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#ffb347]/30 p-4 sm:p-5 backdrop-blur-md"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('sponsors.partnersLabel')}
          </p>
          <div className="mt-3 sm:mt-4 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* Ministério da Saúde */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 p-1.5 sm:p-2"
              >
                <img
                  src={ministerioSaudeLogo}
                  alt="Ministério da Saúde"
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-white">
                {t('sponsors.partner1')}
              </p>
            </motion.div>
            {/* Instituto Butantan */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 p-1.5 sm:p-2"
              >
                <img
                  src={butantanLogo}
                  alt="Instituto Butantan"
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-white">
                {t('sponsors.partner2')}
              </p>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default SponsorsSection
