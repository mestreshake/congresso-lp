import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

// Importe as fotos aqui quando tiver:
// import anaMariaPhoto from '../assets/presidents/ana-maria.jpg'
// import jacquelinePhoto from '../assets/presidents/jacqueline.jpg'
// import wueltonPhoto from '../assets/presidents/wuelton.jpg'

// Placeholder de foto (ícone de pessoa)
const PhotoPlaceholder = () => (
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2d3b30]/50 to-[#1a2f20]/50 border-2 border-[#ffd89b]/30">
    <svg className="h-10 w-10 text-[#ffd89b]/50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
)

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="mt-20 space-y-10 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-6 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 md:p-8"
      >
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('about.presidentsLabel')}
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Ana Maria Moura da Silva */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex h-full min-h-[140px] flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0d2418]/80 to-[#1a2f20]/80 border border-[#2d3b30]/30 p-5 text-center cursor-default"
          >
            {/* Substitua PhotoPlaceholder por <img src={anaMariaPhoto} ... /> quando tiver a foto */}
            <PhotoPlaceholder />
            <div>
              <p className="font-semibold text-white">{t('about.president1')}</p>
              <p className="mt-1 text-xs text-slate-300">
                {t('about.president1Aff')}
              </p>
            </div>
          </motion.div>

          {/* Jacqueline de Almeida Gonçalves Sachett */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex h-full min-h-[140px] flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0d2418]/80 to-[#1a2f20]/80 border border-[#2d3b30]/30 p-5 text-center cursor-default"
          >
            {/* Substitua PhotoPlaceholder por <img src={jacquelinePhoto} ... /> quando tiver a foto */}
            <PhotoPlaceholder />
            <div>
              <p className="font-semibold text-white">{t('about.president2')}</p>
              <p className="mt-1 text-xs text-slate-300">
                {t('about.president2Aff')}
              </p>
            </div>
          </motion.div>

          {/* Wuelton M. Monteiro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex h-full min-h-[140px] flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-[#0d2418]/80 to-[#1a2f20]/80 border border-[#2d3b30]/30 p-5 text-center cursor-default"
          >
            {/* Substitua PhotoPlaceholder por <img src={wueltonPhoto} ... /> quando tiver a foto */}
            <PhotoPlaceholder />
            <div>
              <p className="font-semibold text-white">{t('about.president3')}</p>
              <p className="mt-1 text-xs text-slate-300">
                {t('about.president3Aff')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
