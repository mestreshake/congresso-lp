import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

// Fotos dos presidentes
import anaMariaPresidentPhoto from '../assets/pessoas/AnaMoura_Photo.jpg'
import jacquelinePhoto from '../assets/pessoas/jacqueline.jpeg'
// import wueltonPhoto from '../assets/pessoas/wuelton.jpg' // Adicione quando tiver

// Importar fotos dos membros do comitê
import anaMariaPhoto from '../assets/pessoas/AnaMoura_Photo.jpg'
import brunoLomontePhoto from '../assets/pessoas/Bruno Lomonte Photo.png'
import cassandraModhalPhoto from '../assets/pessoas/Cassandra Modhal Photo.jpg'
import julianaPhoto from '../assets/pessoas/Juliana Photo.png'
import solangeSerranoPhoto from '../assets/pessoas/Solange M T Serrano_photo for IST2026.jpeg'
import ornellaPhoto from '../assets/pessoas/ornela.png'
import kartikPhoto from '../assets/pessoas/kartik.png'
import corzoPhoto from '../assets/pessoas/corzo.png'
import tarekPhoto from '../assets/pessoas/tarek.png'

const organizingCommittee = [
  {
    name: 'Wuelton M. Monteiro',
    affiliation: 'Universidade do Estado do Amazonas / Fundação de Medicina Tropical Dr. Heitor Vieira Dourado, Amazonas',
    countryKey: 'countries.brazil',
    photo: null,
  },
  {
    name: 'Ana Maria Moura da Silva',
    affiliation: 'Instituto Butantan, São Paulo',
    countryKey: 'countries.brazil',
    photo: anaMariaPhoto,
  },
  {
    name: 'Jacqueline de Almeida Gonçalves Sachett',
    affiliation: 'Universidade do Estado do Amazonas, Manaus, AM',
    countryKey: 'countries.brazil',
    photo: jacquelinePhoto,
  },
  {
    name: 'Matthew Lewin',
    affiliation: 'California Academy of Sciences, Corte Madera',
    countryKey: 'countries.usa',
    photo: null,
  },
  {
    name: 'Tim Lüddecke',
    affiliation: 'Fraunhofer Institute for Molecular Biology and Applied Ecology, Gießen',
    countryKey: 'countries.germany',
    photo: null,
  },
  {
    name: 'Fernanda',
    affiliation: '',
    countryKey: '',
    photo: null,
  },
]

const scientificCommittee = [
  {
    name: 'Alexander Vassilevski',
    affiliation: 'Institute of Bioorganic Chemistry of the Russian Academy of Sciences',
    countryKey: 'countries.russia',
    photo: null,
  },
  {
    name: 'Ana Maria Moura da Silva',
    affiliation: 'Instituto Butantan, São Paulo',
    countryKey: 'countries.brazil',
    photo: anaMariaPhoto,
  },
  {
    name: 'Bruno Lomonte',
    affiliation: 'Instituto Clodomiro Picado / Universidad de Costa Rica, San José',
    countryKey: 'countries.costaRica',
    photo: brunoLomontePhoto,
  },
  {
    name: 'Cassandra Modhal',
    affiliation: 'Liverpool School of Tropical Medicine, Liverpool',
    countryKey: 'countries.uk',
    photo: cassandraModhalPhoto,
  },
  {
    name: 'Choo Hock Tan',
    affiliation: 'National Tsing Hua University, Taiwan',
    countryKey: 'countries.taiwan',
    photo: null,
  },
  {
    name: 'Fan Hui Wen',
    affiliation: 'Instituto Butantan, São Paulo',
    countryKey: 'countries.brazil',
    photo: null,
  },
  {
    name: 'Gerardo Corzo',
    affiliation: 'Universidad Nacional Autónoma de México, Cuernavaca',
    countryKey: 'countries.mexico',
    photo: corzoPhoto,
  },
  {
    name: 'Glenn King',
    affiliation: 'The University of Queensland, Brisbane',
    countryKey: 'countries.australia',
    photo: null,
  },
  {
    name: 'Juliana Zuliani',
    affiliation: 'Universidade Federal de Rondônia, Porto Velho',
    countryKey: 'countries.brazil',
    photo: julianaPhoto,
  },
  {
    name: 'Kartik Sunagar',
    affiliation: 'Indian Institute of Science, Bangalore',
    countryKey: 'countries.india',
    photo: kartikPhoto,
  },
  {
    name: 'Matthew Lewin',
    affiliation: 'California Academy of Sciences, Corte Madera',
    countryKey: 'countries.usa',
    photo: null,
  },
  {
    name: 'Ornella Rossetto',
    affiliation: 'University of Padua, Padua',
    countryKey: 'countries.italy',
    photo: ornellaPhoto,
  },
  {
    name: 'Solange M. T. Serrano',
    affiliation: 'Instituto Butantan, São Paulo',
    countryKey: 'countries.brazil',
    photo: solangeSerranoPhoto,
  },
  {
    name: 'Tarek Mohamed',
    affiliation: 'Chair of Africa & Middle East Section of IST',
    countryKey: 'countries.egypt',
    photo: tarekPhoto,
  },
  {
    name: 'Tim Lüddecke',
    affiliation:
      'Fraunhofer Institute for Molecular Biology and Applied Ecology, Gießen',
    countryKey: 'countries.germany',
    photo: null,
  },
  {
    name: 'Wuelton M. Monteiro',
    affiliation:
      'Universidade do Estado do Amazonas / Fundação de Medicina Tropical Dr. Heitor Vieira Dourado, Amazonas',
    countryKey: 'countries.brazil',
    photo: null,
  },
]

// Componente de foto com proporção fixa e alta qualidade
const MemberPhoto = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#ffd89b]/30 shadow-md">
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center"
      style={{ imageRendering: 'auto' }}
      loading="lazy"
      decoding="async"
    />
  </div>
)

// Placeholder de foto (ícone de pessoa)
const PhotoPlaceholder = () => (
  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2d3b30]/50 to-[#1a2f20]/50 border-2 border-[#ffd89b]/20 flex-shrink-0 shadow-md">
    <svg className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffd89b]/40" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
)

// Componente de foto para presidentes com proporção fixa e alta qualidade
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

// Placeholder de foto para presidente (ícone de pessoa)
const PresidentPlaceholder = () => (
  <div className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#2d3b30]/50 to-[#1a2f20]/50 border-2 border-[#ffd89b]/30 flex-shrink-0 shadow-lg">
    <svg className="h-12 w-12 sm:h-14 sm:w-14 text-[#ffd89b]/50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
)

const CommitteeSection = () => {
  const { t } = useTranslation()

  return (
    <section id="committee" className="mt-16 sm:mt-20 md:mt-24 space-y-6 sm:space-y-8">
      {/* Congress Chair / Presidência do evento */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-6 backdrop-blur-lg shadow-lg md:p-8"
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
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-4 sm:p-6 text-center cursor-default backdrop-blur-md"
          >
            <PersonPhoto src={anaMariaPresidentPhoto} alt="Ana Maria Moura da Silva" />
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
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-4 sm:p-6 text-center cursor-default backdrop-blur-md"
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
            className="flex h-full min-h-[180px] sm:min-h-[220px] flex-col items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-4 sm:p-6 text-center cursor-default backdrop-blur-md"
          >
            <PresidentPlaceholder />
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">{t('about.president3')}</p>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-300">
                {t('about.president3Aff')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Organizing Committee / Comitê organizador */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-6 backdrop-blur-lg shadow-lg md:p-8"
      >
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('organizingCommittee.label')}
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organizingCommittee.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-start gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-3 sm:p-4 backdrop-blur-md hover:border-[#ffb347]/50 transition-colors cursor-default min-h-[100px]"
            >
              {member.photo ? (
                <MemberPhoto src={member.photo} alt={member.name} />
              ) : (
                <PhotoPlaceholder />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{member.name}</p>
                {member.affiliation && (
                  <p className="mt-0.5 text-[11px] sm:text-xs text-slate-200 line-clamp-3">{member.affiliation}</p>
                )}
                {member.countryKey && (
                  <p className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#ffd89b] drop-shadow-[0_0_2px_rgba(255,216,155,0.3)]">
                    {t(member.countryKey)}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scientific Committee - unified card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-6 backdrop-blur-lg shadow-lg md:p-8"
      >
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('committee.label')}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('committee.titleHighlight')}
            </span>{' '}
            {t('committee.titleEnd')}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-100 md:text-[15px]">
            {t('committee.intro')}
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scientificCommittee.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-start gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/40 to-[#156b45]/40 border border-[#2d8a5a]/40 p-3 sm:p-4 backdrop-blur-md hover:border-[#ffb347]/50 transition-colors cursor-default min-h-[100px]"
            >
              {member.photo ? (
                <MemberPhoto src={member.photo} alt={member.name} />
              ) : (
                <PhotoPlaceholder />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{member.name}</p>
                <p className="mt-0.5 text-[11px] sm:text-xs text-slate-200 line-clamp-3">{member.affiliation}</p>
                <p className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#ffd89b] drop-shadow-[0_0_2px_rgba(255,216,155,0.3)]">
                  {t(member.countryKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CommitteeSection
