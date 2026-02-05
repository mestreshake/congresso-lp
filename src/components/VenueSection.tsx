import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

const VenueSection = () => {
  const { t } = useTranslation()

  return (
    <section id="venue" className="mt-16 sm:mt-20 md:mt-24">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('venue.label')}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('venue.titleHighlight')}
            </span>{' '}
            {t('venue.titleEnd')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('venue.p1')}
          </p>

          {/* Endereço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="mt-6 rounded-2xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 to-[#2d3b30]/8 p-4 backdrop-blur-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#ffd89b]">
              {t('venue.addressLabel')}
            </p>
            <p className="mt-2 text-sm text-white font-medium">
              Hotel Tropical Manaus
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Av. Coronel Teixeira, 1320 A - Ponta Negra
            </p>
            <p className="text-xs text-slate-300">
              Manaus - AM, 69037-000, Brasil
            </p>
            <motion.a
              href="https://maps.google.com/?q=Av.+Coronel+Teixeira,+1320+A+-+Ponta+Negra,+Manaus+-+AM,+69037-000,+Brasil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#ffd89b] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('venue.openMaps')}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-3xl border border-[#2d3b30]/30 shadow-xl shadow-[#2d3b30]/20"
        >
          <iframe
            src="https://maps.google.com/maps?q=Av.+Coronel+Teixeira,+1320+A+-+Ponta+Negra,+Manaus+-+AM,+69037-000,+Brasil&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            className="sm:h-[320px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Tropical Manaus - Localização"
            className="grayscale-[30%] contrast-[1.1]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default VenueSection
