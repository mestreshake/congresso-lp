import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'

const programIcons = [
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
]

const ProgramSection = () => {
  const { t } = useTranslation()

  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
  const scheduleColumns = ['sun', 'mon', 'tue', 'wed', 'thu'] as const
  const scheduleRows = [
    {
      time: 'slot1',
      cells: ['', 'plenary1', 'plenary2', 'plenary3', 'plenary4'],
      tones: ['', 'green', 'green', 'green', 'green'],
    },
    {
      time: 'slot2',
      cells: ['', 'coffeeBreak', 'coffeeBreak', 'coffeeBreak', 'coffeeBreak'],
      tones: ['', 'gray', 'gray', 'gray', 'gray'],
    },
    {
      time: 'slot3',
      cells: ['miniCourses', 'concurrent12', 'concurrent34', 'concurrent56', 'concurrent78'],
      tones: ['white', 'white', 'white', 'white', 'white'],
    },
    {
      time: 'slot4',
      cells: ['', 'sponsors', 'sponsors', 'sponsors', 'sponsors'],
      tones: ['', 'blue', 'blue', 'blue', 'blue'],
    },
    {
      time: 'slot5',
      cells: ['', 'lunch', 'lunch', 'lunch', 'lunch'],
      tones: ['', 'white', 'white', 'white', 'white'],
    },
    {
      time: 'slot6',
      cells: ['registration', 'concurrent910', 'socioCultural', 'poster2', 'concurrent1112'],
      tones: ['white', 'white', 'purple', 'yellow', 'white'],
    },
    {
      time: 'slot7',
      cells: ['registration', 'coffeeSnacks', 'socioCultural', 'coffeeBreak', 'coffeeBreak'],
      tones: ['white', 'white', 'purple', 'white', 'white'],
    },
    {
      time: 'slot8',
      cells: ['welcomeCeremony', 'poster1', 'socioCultural', 'concurrent1314', 'concurrent1516'],
      tones: ['green', 'yellow', 'purple', 'white', 'white'],
    },
    {
      time: 'slot9',
      cells: ['welcomeReception', 'istAgm', 'socioCultural', 'banquet', 'closingCeremony'],
      tones: ['purple', 'green', 'purple', 'purple', 'green'],
    },
  ] as const

  const toneClasses: Record<string, string> = {
    green: 'bg-[#8abd6d] text-[#102116]',
    gray: 'bg-[#c8d1d7] text-[#1f2a30]',
    blue: 'bg-[#88cbe6] text-[#11212a]',
    yellow: 'bg-[#f8cb2c] text-[#352a00]',
    purple: 'bg-[#c791c8] text-[#231528]',
    white: 'bg-white/95 text-[#17212b]',
    '': 'bg-transparent text-slate-300',
  }

  return (
    <section id="program" className="mt-16 sm:mt-20 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl sm:rounded-3xl border border-[#2d8a5a]/40 bg-[#0d4a2f]/70 p-4 sm:p-6 backdrop-blur-lg shadow-lg md:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(255,216,155,0.3)]">
          {t('program.label')}
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
          <span className="bg-gradient-to-r from-[#ffd89b] to-[#ffc870] bg-clip-text text-transparent">
            {t('program.titleHighlight')}
          </span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-100 md:text-[15px]">
          {t('program.intro')}
        </p>

        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-100 md:text-[15px]">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex gap-3 cursor-default"
            >
              <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#ffd89b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {programIcons[index]}
              </svg>
              <span>{t(`program.${item}`)}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-[#2d8a5a]/45 bg-[#0b3d27]/55 p-3 sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffd89b]">
            {t('program.scheduleTitle')}
          </p>
          <p className="mt-2 text-xs text-slate-300">{t('program.scheduleHint')}</p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-[980px] w-full border-separate border-spacing-1 text-center text-xs">
              <thead>
                <tr>
                  <th className="w-[130px]" />
                  {scheduleColumns.map((column) => (
                    <th
                      key={column}
                      className="rounded-md bg-[#d97732] px-2 py-2 text-[#1f140a]"
                    >
                      <p className="text-[11px] font-semibold">
                        {t(`program.schedule.days.${column}.date`)}
                      </p>
                      <p className="mt-1 text-[11px]">
                        {t(`program.schedule.days.${column}.day`)}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.time}>
                    <td className="pr-2 text-left font-medium text-slate-200">
                      {t(`program.schedule.times.${row.time}`)}
                    </td>
                    {row.cells.map((cell, index) => (
                      <td
                        key={`${row.time}-${index}`}
                        className={`rounded-md px-2 py-3 align-middle ${toneClasses[row.tones[index]]}`}
                      >
                        {cell ? t(`program.schedule.events.${cell}`) : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProgramSection
