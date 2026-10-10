import { useState } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'
import corporateImage from '../assets/practice-areas/corporate-bg.png'

const practices = [
  {
    title: 'Appellate Advocacy',
    expertise: 'Appeals · Judicial review',
    image: corporateImage,
    icon: ScaleIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Banking & Finance',
    expertise: 'Lending · Security · Restructuring',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Capital Markets',
    expertise: 'Equity · Debt · Regulatory',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Civil & Commercial Disputes',
    expertise: 'Litigation · Arbitration',
    image: corporateImage,
    icon: ScaleIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Construction & Arbitration',
    expertise: 'Project claims · Arbitration',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Corporate Fraud',
    expertise: 'Investigations · Asset recovery',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/corporate-fraud',
  },
  {
    title: 'Data Protection',
    expertise: 'Privacy · Data governance',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Employment & Industrial Relations',
    expertise: 'Workplace advisory · Disputes',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/corporate-fraud',
  },
  {
    title: 'Energy, Infrastructure & Projects',
    expertise: 'Project development · Contracts',
    image: corporateImage,
    icon: BuildingLibraryIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Environmental, Social & Governance (ESG)',
    expertise: 'ESG compliance · Governance',
    image: corporateImage,
    icon: BuildingLibraryIcon,
    href: 'https://www.rdslawpartners.com/corporate-fraud',
  },
  {
    title: 'FinTech',
    expertise: 'Digital finance · Regulatory',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Government & Regulatory Matters',
    expertise: 'Regulatory advice · Investigations',
    image: corporateImage,
    icon: ScaleIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Halal Industry',
    expertise: 'Halal certification · Sharia advisory',
    image: corporateImage,
    icon: BuildingLibraryIcon,
    href: 'https://www.rdslawpartners.com/halal-industry',
  },
  {
    title: 'Healthcare & Medical Negligence',
    expertise: 'Healthcare regulation · Claims',
    image: corporateImage,
    icon: ScaleIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Incentives',
    expertise: 'Investment incentives · Applications',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Intellectual Property, Technology, Media & Telecommunications (IP-TMT)',
    expertise: 'IP protection · Technology transactions',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Maritime & International Shipping',
    expertise: 'Shipping disputes · Trade',
    image: corporateImage,
    icon: BuildingLibraryIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Mergers & Acquisitions (M&A)',
    expertise: 'Acquisitions · Joint ventures',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Real Estate Transactions',
    expertise: 'Acquisitions · Development',
    image: corporateImage,
    icon: BuildingOffice2Icon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Tax, SST & Customs',
    expertise: 'Tax planning · Customs advisory',
    image: corporateImage,
    icon: ChartPieIcon,
    href: 'https://www.rdslawpartners.com/mergers-and-acquisitions',
  },
  {
    title: 'Trade Facilitation',
    expertise: 'Trade advisory · Market access',
    image: corporateImage,
    icon: BuildingLibraryIcon,
    href: 'https://www.rdslawpartners.com/civil-and-commercial-disputes',
  },
  {
    title: 'Wills & Probate',
    expertise: 'Estate planning · Probate',
    image: corporateImage,
    icon: ScaleIcon,
    href: 'https://www.rdslawpartners.com/corporate-fraud',
  },
]

const pageSize = 8

function PracticeAreas() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(practices.length / pageSize)
  const pagePractices = practices.slice(page * pageSize, (page + 1) * pageSize)

  return (
    <section id="practice-areas" className="self-stretch min-w-0 px-6 py-12 sm:px-10 lg:px-20 lg:py-16 flex flex-col justify-start items-start gap-8">
      <div className="self-stretch flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
        <div className="w-full lg:w-[610px] inline-flex flex-col justify-start items-start gap-4">
          <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
            <div className="w-7 h-0.5 bg-purple" />
            <div className="text-purple text-xs font-semibold uppercase">Our practice areas</div>
          </div>
          <h2 className="self-stretch text-purple text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">
            Expertise that moves business forward.
          </h2>
        </div>
        <p className="w-full lg:w-96 text-zinc-600 text-base leading-6">
          Joined-up advice for your transactions, challenges and next chapter of growth.
        </p>
      </div>

      <div
        key={page}
        aria-live="polite"
        className="self-stretch min-w-0 grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-5"
      >
        {pagePractices.map(({ title, expertise, image, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            aria-label={`Explore ${title} practice`}
            className="relative block h-80 min-w-0 rounded-sm snap-start overflow-hidden no-underline"
          >
            <img className="absolute inset-0 size-full object-cover" src={image} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(128,76,153,0.2),rgba(36,22,43,0.92))]" />
            <div className="relative z-10 size-full p-6 flex flex-col justify-end items-start gap-4">
              <Icon aria-hidden="true" className="size-8 shrink-0 text-white" />
              <div className="self-stretch flex flex-col items-start gap-2.5">
                <h3 className="text-white text-xl font-normal font-serif leading-7">{title}</h3>
                <p className="text-violet-300 text-sm leading-5">{expertise}</p>
              </div>
              <span className="inline-flex items-center gap-2.5 text-purple-200">
                <span className="text-sm font-semibold">Explore practice</span>
                <ArrowUpRightIcon aria-hidden="true" className="size-5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="self-stretch flex justify-end">
        <div className="inline-flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            aria-label="Previous practice areas"
            className="inline-flex size-10 items-center justify-center rounded-full border border-dark-purple text-dark-purple disabled:opacity-40"
          >
            <ArrowLeftIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={page === pageCount - 1}
            aria-label="Next practice areas"
            className="inline-flex size-10 items-center justify-center rounded-full border border-dark-purple text-dark-purple disabled:opacity-40"
          >
            <ArrowRightIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
