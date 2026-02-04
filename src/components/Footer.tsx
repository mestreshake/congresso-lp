const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-black/50 py-6 text-xs text-slate-300"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
            23rd World Congress of the International Society on Toxinology
          </p>
          <p className="mt-1 text-[11px]">
            Manaus, Amazonas • Brasil • 13–17 de setembro de 2026
          </p>
        </div>
        <div className="text-[11px]">
          <p>
            Contato:&nbsp;
            <a
              href="mailto:ist2026.brazil@gmail.com"
              className="font-medium text-[#fdd1a1] hover:text-white"
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


