import { useTranslation } from 'react-i18next'

const BrazilFlag = () => (
  <svg viewBox="0 0 3 2" className="w-6 h-4 rounded-sm">
    <rect width="3" height="2" fill="#009b3a" />
    <polygon points="1.5,0.2 2.9,1 1.5,1.8 0.1,1" fill="#fedf00" />
    <circle cx="1.5" cy="1" r="0.35" fill="#002776" />
    <path
      d="M1.15,1 Q1.5,0.85 1.85,1"
      fill="none"
      stroke="#fff"
      strokeWidth="0.05"
    />
  </svg>
)

const UKFlag = () => (
  <svg viewBox="0 0 60 40" className="w-6 h-4 rounded-sm">
    <rect width="60" height="40" fill="#012169" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
    <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="4" />
    <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
)

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  const currentLang = i18n.language

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('pt-BR')}
        className={`p-1 rounded border transition-all ${
          currentLang === 'pt-BR'
            ? 'border-[#ffd89b]/50 shadow-[0_0_8px_rgba(255,216,155,0.4)] scale-110'
            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        title="Português (Brasil)"
        aria-label="Mudar para Português"
      >
        <BrazilFlag />
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`p-1 rounded border transition-all ${
          currentLang === 'en'
            ? 'border-[#ffd89b]/50 shadow-[0_0_8px_rgba(255,216,155,0.4)] scale-110'
            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        title="English (UK)"
        aria-label="Change to English"
      >
        <UKFlag />
      </button>
    </div>
  )
}

export default LanguageSwitcher
