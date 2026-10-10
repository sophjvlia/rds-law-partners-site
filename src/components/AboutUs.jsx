import { UsersIcon, GlobeAsiaAustraliaIcon, BookOpenIcon } from '@heroicons/react/24/outline'

function AboutUsCommitments() {
  return (
    <section id="about" className="self-stretch px-6 py-12 sm:px-10 xl:px-20 xl:py-16 bg-purple flex flex-col xl:flex-row justify-start items-start gap-12 xl:gap-24">
      <div className="w-full xl:flex-1 inline-flex flex-col justify-start items-start gap-6">
        <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
          <div className="w-7 h-0.5 bg-gray-200" />
          <div className="justify-start text-gray-200 text-xs font-semibold uppercase">About RDS Law Partners</div>
        </div>
        <div className="self-stretch justify-start text-white text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">A lasting partnership.<br />A clearer way forward.</div>
        <div className="self-stretch justify-start text-gray-200 text-base font-normal leading-6">Our story begins with a simple conviction: exceptional legal counsel should be as commercially minded as the clients it serves. RDS Law Partners brings independent thinking and a relationship-led approach to commercial law.</div>
        <div className="self-stretch justify-start text-gray-200 text-base font-normal leading-6">We unite corporate, disputes and Islamic finance expertise around a shared purpose — to give clients the confidence to make their next move.</div>
        <img className="self-stretch h-36" src="src/assets/architectural-detail.png" />
      </div>
      <div id="commitments" className="w-full xl:flex-1 inline-flex flex-col justify-start items-start gap-5">
        <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
          <div className="w-7 h-0.5 bg-gray-200" />
          <div className="justify-start text-gray-200 text-xs font-semibold uppercase">What we stand for</div>
        </div>
        <div className="self-stretch justify-start text-white text-2xl sm:text-3xl font-normal font-serif leading-10">Principled counsel.<br />Responsible progress.</div>
        <div className="self-stretch justify-start text-gray-200 text-base font-normal leading-6">The way we work matters as much as the outcomes we pursue. Our commitments guide every relationship.</div>
        <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-start gap-4 overflow-hidden">
            <UsersIcon aria-hidden="true" className="size-6 shrink-0 text-gray-200" />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-white text-base font-semibold">Clients at the centre</div>
              <div className="self-stretch justify-start text-zinc-200 text-sm font-normal leading-6">Partner-led attention, candid advice and clear communication from the first conversation.</div>
            </div>
          </div>
          <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-start gap-4 overflow-hidden">
            <GlobeAsiaAustraliaIcon aria-hidden="true" className="size-6 shrink-0 text-gray-200" />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-white text-base font-semibold">A responsible business</div>
              <div className="self-stretch justify-start text-zinc-200 text-sm font-normal leading-6">Embedding environmental, social and governance considerations in our work and our decisions.</div>
            </div>
          </div>
          <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-start gap-4 overflow-hidden">
            <BookOpenIcon aria-hidden="true" className="size-6 shrink-0 text-gray-200" />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-white text-base font-semibold">Integrity across every structure</div>
              <div className="self-stretch justify-start text-zinc-200 text-sm font-normal leading-6">Islamic finance counsel that connects Sharia principles with practical commercial objectives.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsCommitments
