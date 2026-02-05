import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

const RegistrationSection = () => {
  const { t } = useTranslation()

  return (
    <section id="registration" className="mt-16 sm:mt-20 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffb347]/50 bg-gradient-to-br from-[#156b45]/40 via-[#156b45]/30 to-[#2d8a5a]/30 p-4 sm:p-6 shadow-xl shadow-[#156b45]/25 md:p-10"
      >
        {/* Badge "Em breve" animado */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -right-14 top-6 sm:-right-12 sm:top-8 rotate-45 bg-gradient-to-r from-[#ffd89b] to-[#ffc870] px-12 py-1.5 sm:px-16 sm:py-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#0a1f1a] shadow-lg"
        >
          {t('registration.comingSoonBadge')}
        </motion.div>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]"
          >
            {t('registration.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <span className="bg-gradient-to-r from-[#ffd89b] via-[#ffc870] to-[#ff8c5a] bg-clip-text text-transparent">
              {t('registration.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-slate-100 md:text-lg"
          >
            {t('registration.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200 md:text-[15px]"
          >
            <p>{t('registration.p1')}</p>
            <p>{t('registration.p2')}</p>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {t('registration.emailLabel')}
              </p>
              <p className="mt-1 text-sm font-medium text-[#ffd89b]">
                ist2026.brazil@gmail.com
              </p>
            </motion.div>
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default RegistrationSection
