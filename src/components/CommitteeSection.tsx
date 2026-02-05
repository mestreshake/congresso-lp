const scientificCommittee = [
  {
    name: 'Alexander Vassilevski',
    affiliation: 'Institute of Bioorganic Chemistry of the Russian Academy of Sciences',
    country: 'Russia',
  },
  {
    name: 'Ana Maria Moura da Silva',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
  },
  {
    name: 'Bruno Lomonte',
    affiliation: 'Instituto Clodomiro Picado / Universidad de Costa Rica, San José',
    country: 'Costa Rica',
  },
  {
    name: 'Cassandra Modhal',
    affiliation: 'Liverpool School of Tropical Medicine, Liverpool',
    country: 'UK',
  },
  {
    name: 'Choo Hock Tan',
    affiliation: 'National Tsing Hua University, Taiwan',
    country: 'Taiwan',
  },
  {
    name: 'Fan Hui Wen',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
  },
  {
    name: 'Gerardo Corzo',
    affiliation: 'Universidad Nacional Autónoma de México, Cuernavaca',
    country: 'Mexico',
  },
  {
    name: 'Glenn King',
    affiliation: 'The University of Queensland, Brisbane',
    country: 'Australia',
  },
  {
    name: 'Juliana Zuliani',
    affiliation: 'Universidade Federal de Rondônia, Porto Velho',
    country: 'Brazil',
  },
  {
    name: 'Kartik Sunagar',
    affiliation: 'Indian Institute of Science, Bangalore',
    country: 'India',
  },
  {
    name: 'Matthew Lewin',
    affiliation: 'California Academy of Sciences, Corte Madera',
    country: 'USA',
  },
  {
    name: 'Ornella Rossetto',
    affiliation: 'University of Padua, Padua',
    country: 'Italy',
  },
  {
    name: 'Solange M. T. Serrano',
    affiliation: 'Instituto Butantan, São Paulo',
    country: 'Brazil',
  },
  {
    name: 'Tim Lüddecke',
    affiliation:
      'Fraunhofer Institute for Molecular Biology and Applied Ecology, Gießen',
    country: 'Germany',
  },
  {
    name: 'Wuelton M. Monteiro',
    affiliation:
      'Universidade do Estado do Amazonas / Fundação de Medicina Tropical Dr. Heitor Vieira Dourado, Amazonas',
    country: 'Brazil',
  },
]

const CommitteeSection = () => {
  return (
    <section id="committee" className="mt-20 md:mt-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
            Comitê científico
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">Referências internacionais</span> em toxinologia
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 md:text-[15px]">
            O comitê científico reúne especialistas de diferentes continentes, atuando
            em instituições de excelência e em múltiplas frentes da toxinologia, desde
            pesquisa básica até aplicações clínicas e biotecnológicas.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 rounded-3xl border border-[#2d3b30]/30 bg-gradient-to-br from-[#2d3b30]/15 via-[#ffd89b]/8 to-[#753b2e]/15 p-5 backdrop-blur-sm shadow-lg shadow-[#2d3b30]/20 md:grid-cols-2 md:p-6 lg:grid-cols-3">
        {scientificCommittee.map((member) => (
          <div key={member.name} className="rounded-2xl bg-gradient-to-br from-[#0d2418]/90 to-[#1a2f20]/90 border border-[#2d3b30]/20 p-4 backdrop-blur-sm hover:border-[#2d3b30]/40 transition-colors">
            <p className="text-sm font-semibold text-white">{member.name}</p>
            <p className="mt-1 text-xs text-slate-200">{member.affiliation}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#ffd89b] drop-shadow-[0_0_2px_rgba(255,216,155,0.3)]">
              {member.country}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommitteeSection


