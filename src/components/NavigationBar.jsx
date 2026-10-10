import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  const navLinkClass = (href) =>
    `py-2.5 inline-flex flex-col justify-start items-start gap-1.5 no-underline ${
      activeHref === href ? 'text-dark-purple font-bold' : 'text-zinc-600 font-normal'
    }`

  return (
    <nav id="navigation" className="sticky top-0 z-50 self-stretch h-20 px-4 md:px-8 lg:h-24 lg:px-16 bg-white border-b border-dark-purple/10 shadow-[0_4px_18px_rgba(36,22,43,0.16)] flex flex-wrap justify-between items-center">
      <div className="w-20 sm:w-24">
        <img src="src/assets/rds-logo.avif" alt="RDS Law Partners Logo" />
      </div>
      <button
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="xl:hidden inline-flex size-11 items-center justify-center text-purple"
      >
        {menuOpen
          ? <XMarkIcon aria-hidden="true" className="size-7" />
          : <Bars3Icon aria-hidden="true" className="size-7" />}
      </button>
      <div id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full w-full flex-col items-stretch gap-2 bg-white px-4 pb-5 shadow-md md:px-8 lg:px-16 xl:static xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-6 xl:bg-transparent xl:px-0 xl:pb-0 xl:shadow-none`}>
        <a href="#practice-areas" onClick={() => { setActiveHref('#practice-areas'); setMenuOpen(false) }} className={navLinkClass('#practice-areas')}>
          <span className="text-sm">Practice Areas</span>
        </a>
        <a href="#people" onClick={() => { setActiveHref('#people'); setMenuOpen(false) }} className={navLinkClass('#people')}>
          <span className="text-sm">People</span>
        </a>
        <a href="#insights" onClick={() => { setActiveHref('#insights'); setMenuOpen(false) }} className={navLinkClass('#insights')}>
          <span className="text-sm">Insights &amp; Events</span>
        </a>
        <a href="#careers" onClick={() => { setActiveHref('#careers'); setMenuOpen(false) }} className={navLinkClass('#careers')}>
          <span className="text-sm">Careers</span>
        </a>
        <a href="#contact" onClick={() => { setActiveHref('#contact'); setMenuOpen(false) }} className={`w-fit self-start xl:self-auto py-3 px-5 rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-500 flex justify-start items-center gap-5 no-underline ${activeHref === '#contact' ? 'bg-white text-dark-purple font-bold' : 'bg-dark-purple text-white font-medium'}`}>
          <span className="text-sm">Contact</span>
        </a>
      </div>
    </nav>
  )
}

export default NavigationBar
