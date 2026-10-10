import { useRef, useState } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import hishamudinImage from '../assets/people/Dato\' Seri Hishamudin Yunus.avif'
import dominicImage from '../assets/people/Dato’ Dominic Puthucheary.avif'
import nabanImage from '../assets/people/Datuk Naban.avif'
import amiraImage from '../assets/people/Amira Azhar.avif'
import amiratuImage from '../assets/people/Amiratu Al Amirat Saleh Garbaa.avif'
import dharshiniImage from '../assets/people/Dharshini Sharma.avif'
import khooImage from '../assets/people/Khoo Jia Hui.avif'
import sharulnizamImage from '../assets/people/Muhamad Sharulnizam.avif'

const tabs = [
  { id: 'consultants-partners', label: 'Consultants & partners' },
  { id: 'senior-associates', label: 'Senior associates' },
  { id: 'associates', label: 'Associates' },
]

const consultantsAndPartners = [
  { name: "Dato' Seri Hishamudin Yunus", title: 'Consultant', image: hishamudinImage },
  { name: 'Dato’ Dominic Puthucheary', title: 'Consultant', image: dominicImage },
  { name: 'Datuk Naban', title: 'Senior Partner', image: nabanImage },
  { name: 'Amira Azhar', title: 'Partner', image: amiraImage },
]

const seniorAssociates = [
  { name: 'Amiratu Al Amirat Saleh Garbaa', image: amiratuImage },
  { name: 'Dharshini Sharma', image: dharshiniImage },
  { name: 'Khoo Jia Hui', image: khooImage },
  { name: 'Muhamad Sharulnizam', image: sharulnizamImage },
]

const associates = Array.from({ length: 8 }, (_, index) => `Associate ${index + 1}`)

function Team() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)
  const tabRefs = useRef([])
  const activeTabIndex = tabs.findIndex(({ id }) => id === selectedTab)

  const handleTabKeyDown = (event) => {
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (activeTabIndex + 1) % tabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (activeTabIndex - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = tabs.length - 1
    else return

    event.preventDefault()
    setSelectedTab(tabs[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  const currentTab = tabs[activeTabIndex]

  return (
    <section id="people" className="self-stretch min-w-0 px-6 py-12 sm:px-10 xl:px-20 xl:py-16 flex flex-col justify-start items-start gap-9">
      <div className="self-stretch flex flex-col justify-between items-start gap-4">
        <div className="w-full xl:w-[760px] inline-flex flex-col justify-start items-start gap-4">
          <div className="inline-flex justify-start items-center gap-3">
            <div className="w-7 h-0.5 bg-purple" />
            <div className="text-purple text-xs font-semibold uppercase">Our people</div>
          </div>
          <h2 className="self-stretch text-purple text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">Expert minds. Personal commitment.</h2>
          <p className="self-stretch text-zinc-600 text-base font-normal leading-6">Experienced perspectives, working together around your priorities.</p>
        </div>
      </div>

      <div className="w-full">
        <div
          role="tablist"
          aria-label="People by role"
          onKeyDown={handleTabKeyDown}
          className="flex max-w-full gap-2 overflow-x-auto border-b border-zinc-200"
        >
          {tabs.map(({ id, label }, index) => (
            <button
              key={id}
              ref={(element) => { tabRefs.current[index] = element }}
              id={`${id}-tab`}
              type="button"
              role="tab"
              aria-selected={selectedTab === id}
              aria-controls={`${id}-panel`}
              tabIndex={selectedTab === id ? 0 : -1}
              onClick={() => setSelectedTab(id)}
              className={`shrink-0 border-b-2 px-4 py-3 text-sm transition-colors ${
                selectedTab === id
                  ? 'border-dark-purple font-semibold text-dark-purple'
                  : 'border-transparent text-zinc-600 hover:text-dark-purple'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          id={`${currentTab.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${currentTab.id}-tab`}
          tabIndex={0}
          className="pt-6"
        >
          {selectedTab === 'associates' ? (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {associates.map((name) => (
                <li key={name} className="border-b border-zinc-200 py-3 font-serif text-lg text-gray-500">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {(selectedTab === 'consultants-partners' ? consultantsAndPartners : seniorAssociates).map(({ name, title, image }) => (
                <article key={name} className="flex min-w-0 flex-col items-start gap-4">
                  <img className="h-auto w-full object-contain" src={image} alt={name} />
                  <div className="flex flex-col items-start gap-1.5">
                    <h3 className="text-xl font-normal font-serif text-gray-500">{name}</h3>
                    {title && <p className="text-xs font-normal text-zinc-600">{title}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <a
          href="https://www.rdslawpartners.com/people"
          className="mt-7 inline-flex items-center gap-3 text-purple no-underline"
        >
          <span className="text-xs font-semibold">View all people</span>
          <ArrowUpRightIcon aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  )
}

export default Team
