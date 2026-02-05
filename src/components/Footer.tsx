import { useTranslation } from 'react-i18next'
import istLogoWhite from '../assets/IST LOGO OFICIAL ESCOLHIDA BRANCO.png'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer
      id="contact"
      className="border-t border-[#2d3b30]/30 bg-gradient-to-r from-black/80 via-[#0a1f1a]/80 to-black/80 py-6 text-xs text-slate-300 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-4">
          <img
            src={istLogoWhite}
            alt="IST - International Society on Toxinology"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(45,59,48,0.3)]"
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              {t('footer.title')}
            </p>
            <p className="mt-1 text-[11px]">
              {t('footer.location')}
            </p>
          </div>
        </div>
        <div className="text-[11px]">
          <p>
            {t('footer.contact')}&nbsp;
            <a
              href="mailto:ist2026.brazil@gmail.com"
              className="font-medium text-[#ffd89b] hover:text-white transition-colors"
            >
              ist2026.brazil@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
