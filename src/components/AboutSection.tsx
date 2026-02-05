import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

// Fotos dos presidentes
import anaMariaPhoto from '../assets/pessoas/AnaMoura_Photo.jpg'
import jacquelinePhoto from '../assets/pessoas/jacqueline.jpeg'
// import wueltonPhoto from '../assets/pessoas/wuelton.jpg' // Adicione quando tiver

// Componente de foto com proporção fixa e alta qualidade
const PersonPhoto = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#ffd89b]/40 shadow-lg">
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center"
      style={{ imageRendering: 'auto' }}
      loading="eager"
      decoding="async"
    />
  </div>
)

// Placeholder de foto (ícone de pessoa)
const PhotoPlaceholder = () => (
  <div className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#2d3b30]/50 to-[#1a2f20]/50 border-2 border-[#ffd89b]/30 flex-shrink-0 shadow-lg">
    <svg className="h-12 w-12 sm:h-14 sm:w-14 text-[#ffd89b]/50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
)

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="mt-16 space-y-8 sm:mt-20 sm:space-y-10 md:mt-24">
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
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
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
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/50 bg-gradient-to-br from-[#156b45]/30 via-[#ffb347]/15 to-[#2d8a5a]/25 p-4 sm:p-6 backdrop-blur-sm shadow-lg shadow-[#156b45]/20 md:p-8"
      >
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('about.presidentsLabel')}
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Ana Maria Moura da Silva */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/70 to-[#156b45]/70 border border-[#2d8a5a]/50 p-4 sm:p-6 text-center cursor-default"
          >
            <PersonPhoto src={anaMariaPhoto} alt="Ana Maria Moura da Silva" />
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">{t('about.president1')}</p>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-300">
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
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/70 to-[#156b45]/70 border border-[#2d8a5a]/50 p-4 sm:p-6 text-center cursor-default"
          >
            <PersonPhoto src={jacquelinePhoto} alt="Jacqueline de Almeida Gonçalves Sachett" />
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">{t('about.president2')}</p>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-300">
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
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/70 to-[#156b45]/70 border border-[#2d8a5a]/50 p-4 sm:p-6 text-center cursor-default"
          >
            <PhotoPlaceholder />
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">{t('about.president3')}</p>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-300">
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
