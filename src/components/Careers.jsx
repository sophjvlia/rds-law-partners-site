import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

function Careers() {
  return (
    <section id="careers" className="self-stretch px-6 py-10 sm:px-10 xl:px-20 xl:py-14 bg-light-purple flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-12 lg:gap-16">
      <div className="w-full min-w-0 flex-1 xl:max-w-[790px] inline-flex flex-col justify-start items-start gap-4">
        <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
          <div className="w-7 h-0.5 bg-purple" />
          <div className="justify-start text-purple text-xs font-semibold uppercase">Careers at RDS</div>
        </div>
        <div className="self-stretch justify-start text-purple text-3xl sm:text-4xl font-normal font-serif leading-tight">Bring your ambition. Make a difference.</div>
        <div className="self-stretch justify-start text-zinc-600 text-base font-normal leading-6">
          We welcome curious minds and principled advocates. If you share our commitment to exceptional client service, we would like to hear from you. 
        </div>
      </div>
      <div className="shrink-0 inline-flex flex-col justify-start items-start sm:items-end gap-3">
        <a href="mailto:talentmanagement@rdslawpartners.com" aria-label="Email your CV to RDS Law Partners" className="text-white">
          <div className="h-12 px-5 bg-dark-purple rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center gap-5 overflow-hidden whitespace-nowrap">
            <div className="text-white text-sm font-medium whitespace-nowrap">Email us</div>
            <ArrowUpRightIcon aria-hidden="true" className="size-5" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Careers
