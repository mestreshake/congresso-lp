import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import istLogo from '../assets/IST LOGO OFICIAL ESCOLHIDA.png'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#program', label: t('nav.program') },
    { href: '#committee', label: t('nav.committee') },
    { href: '#venue', label: t('nav.venue') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#2d8a5a]/30 bg-gradient-to-r from-[#0d4a2f]/80 via-[#156b45]/80 to-[#0d4a2f]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="rounded-lg bg-white/95 p-2 shadow-md">
            <img
              src={istLogo}
              alt="IST - International Society on Toxinology"
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#ffd89b] drop-shadow-[0_0_4px_rgba(253,209,161,0.3)] sm:text-xs sm:tracking-[0.18em]">
              {t('header.congress')}
            </p>
            <p className="text-xs font-semibold text-white/90 sm:text-sm">
              {t('header.tagline')}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#ffd89b] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-[#ffd89b] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#2d8a5a]/30 bg-gradient-to-b from-[#0d4a2f]/70 to-[#156b45]/70 backdrop-blur-lg">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.16em] text-slate-200 hover:text-[#ffd89b] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
