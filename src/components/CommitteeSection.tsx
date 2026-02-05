import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

// Importar fotos dos membros do comitê
import anaMariaPhoto from '../assets/pessoas/AnaMoura_Photo.jpg'
import brunoLomontePhoto from '../assets/pessoas/Bruno Lomonte Photo.png'
import cassandraModhalPhoto from '../assets/pessoas/Cassandra Modhal Photo.jpg'
import julianaPhoto from '../assets/pessoas/Juliana Photo.png'
import solangeSerranoPhoto from '../assets/pessoas/Solange M T Serrano_photo for IST2026.jpeg'
import ornellaPhoto from '../assets/pessoas/ornela.png'
import kartikPhoto from '../assets/pessoas/kartik.png'
import corzoPhoto from '../assets/pessoas/corzo.png'

const scientificCommittee = [
  {
    name: 'Alexander Vassilevski',
    affiliation: 'Institute of Bioorganic Chemistry of the Russian Academy of Sciences',
    country: 'Russia',
    photo: null,
  },
  {
    name: 'Ana Maria Moura da Silva',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
    photo: anaMariaPhoto,
  },
  {
    name: 'Bruno Lomonte',
    affiliation: 'Instituto Clodomiro Picado / Universidad de Costa Rica, San José',
    country: 'Costa Rica',
    photo: brunoLomontePhoto,
  },
  {
    name: 'Cassandra Modhal',
    affiliation: 'Liverpool School of Tropical Medicine, Liverpool',
    country: 'UK',
    photo: cassandraModhalPhoto,
  },
  {
    name: 'Choo Hock Tan',
    affiliation: 'National Tsing Hua University, Taiwan',
    country: 'Taiwan',
    photo: null,
  },
  {
    name: 'Fan Hui Wen',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
    photo: null,
  },
  {
    name: 'Gerardo Corzo',
    affiliation: 'Universidad Nacional Autónoma de México, Cuernavaca',
    country: 'Mexico',
    photo: corzoPhoto,
  },
  {
    name: 'Glenn King',
    affiliation: 'The University of Queensland, Brisbane',
    country: 'Australia',
    photo: null,
  },
  {
    name: 'Juliana Zuliani',
    affiliation: 'Universidade Federal de Rondônia, Porto Velho',
    country: 'Brazil',
    photo: julianaPhoto,
  },
  {
    name: 'Kartik Sunagar',
    affiliation: 'Indian Institute of Science, Bangalore',
    country: 'India',
    photo: kartikPhoto,
  },
  {
    name: 'Matthew Lewin',
    affiliation: 'California Academy of Sciences, Corte Madera',
    country: 'USA',
    photo: null,
  },
  {
    name: 'Ornella Rossetto',
    affiliation: 'University of Padua, Padua',
    country: 'Italy',
    photo: ornellaPhoto,
  },
  {
    name: 'Solange M. T. Serrano',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
    photo: solangeSerranoPhoto,
  },
  {
    name: 'Tim Lüddecke',
    affiliation:
      'Fraunhofer Institute for Molecular Biology and Applied Ecology, Gießen',
    country: 'Germany',
    photo: null,
  },
  {
    name: 'Wuelton M. Monteiro',
    affiliation:
      'Universidade do Estado do Amazonas / Fundação de Medicina Tropical Dr. Heitor Vieira Dourado, Amazonas',
    country: 'Brazil',
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

const CommitteeSection = () => {
  const { t } = useTranslation()

  return (
    <section id="committee" className="mt-16 sm:mt-20 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            {t('committee.label')}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
              {t('committee.titleHighlight')}
            </span>{' '}
            {t('committee.titleEnd')}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 md:text-[15px]">
            {t('committee.intro')}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/50 bg-gradient-to-br from-[#156b45]/30 via-[#ffb347]/15 to-[#2d8a5a]/25 p-4 sm:p-5 backdrop-blur-sm shadow-lg shadow-[#156b45]/20 sm:grid-cols-2 md:p-6 lg:grid-cols-3"
      >
        {scientificCommittee.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="flex items-center gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0d4a2f]/70 to-[#156b45]/70 border border-[#2d8a5a]/50 p-3 sm:p-4 backdrop-blur-sm hover:border-[#ffb347]/50 transition-colors cursor-default"
          >
            {member.photo ? (
              <MemberPhoto src={member.photo} alt={member.name} />
            ) : (
              <PhotoPlaceholder />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">{member.name}</p>
              <p className="mt-0.5 text-[11px] sm:text-xs text-slate-200 line-clamp-2">{member.affiliation}</p>
              <p className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#ffd89b] drop-shadow-[0_0_2px_rgba(255,216,155,0.3)]">
                {member.country}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CommitteeSection
