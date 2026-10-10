import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

function InsightsEvents() {
  return (
    <section id="insights" className="self-stretch px-6 py-12 sm:px-10 xl:px-20 xl:py-16 bg-purple flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="w-full xl:w-[880px] inline-flex flex-col justify-start items-start gap-4">
          <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
            <div className="w-7 h-0.5 bg-gray-200" />
            <div className="justify-start text-gray-200 text-xs font-semibold uppercase">Insights &amp; events</div>
          </div>
          <div className="self-stretch justify-start text-white text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">Perspective for the decisions ahead.</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col xl:flex-row justify-start items-start gap-10 xl:gap-16">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="justify-start text-zinc-200 text-xs font-semibold">RECENT PUBLICATIONS</div>
          <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-4 text-white">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-purple-300 text-[10px] font-semibold">ISLAMIC FINANCE</div>
                <div className="self-stretch justify-start text-white text-xl font-normal font-serif leading-7">Sukuk structures: aligning principle with commercial purpose</div>
                <div className="justify-start text-zinc-300 text-xs font-normal">02 Oct 2026  ·  7 min read</div>
              </div>
              <ArrowUpRightIcon aria-hidden="true" className="size-5 text-gray-200" />
            </div>
            <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-4 text-white">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-purple-300 text-[10px] font-semibold">CORPORATE &amp; M&amp;A</div>
                <div className="self-stretch justify-start text-white text-xl font-normal font-serif leading-7">A buyer&apos;s guide to cross-border due diligence</div>
                <div className="justify-start text-zinc-300 text-xs font-normal">24 Sep 2026  ·  5 min read</div>
              </div>
              <ArrowUpRightIcon aria-hidden="true" className="size-5 text-gray-200" />
            </div>
            <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-4 text-white">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-purple-300 text-[10px] font-semibold">DISPUTE RESOLUTION</div>
                <div className="self-stretch justify-start text-white text-xl font-normal font-serif leading-7">Arbitration clauses that stand up to scrutiny</div>
                <div className="justify-start text-zinc-300 text-xs font-normal">10 Sep 2026  ·  6 min read</div>
              </div>
              <ArrowUpRightIcon aria-hidden="true" className="size-5 text-gray-200" />
            </div>
          </div>
          <div className="inline-flex items-center gap-3 text-gray-200">
            <span className="text-xs font-semibold">All publications</span>
            <ArrowUpRightIcon aria-hidden="true" className="size-4" />
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="justify-start text-zinc-200 text-xs font-semibold">UPCOMING EVENTS</div>
          <div className="self-stretch p-6 bg-zinc-800 outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-start items-start gap-6 overflow-hidden">
            <div className="w-14 inline-flex flex-col justify-start items-center gap-[5px] overflow-hidden">
              <div className="justify-start text-purple-300 text-3xl font-normal font-serif">29</div>
              <div className="justify-start text-purple-300 text-[10px] font-normal">OCT</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="justify-start text-purple-300 text-[10px] font-semibold">LIVE EVENT · 2026</div>
              <div className="self-stretch justify-start text-white text-xl font-normal font-serif leading-8">Islamic finance in practice: structuring for growth</div>
              <div className="self-stretch justify-start text-stone-300 text-xs font-normal leading-5">14:00–15:00 GST · Online<br />With Leila Rahman, Partner</div>
              <div className="inline-flex items-center gap-3 text-gray-200">
                <span className="text-xs font-semibold">Reserve your place</span>
                <ArrowUpRightIcon aria-hidden="true" className="size-4" />
              </div>
            </div>
          </div>
          <div className="self-stretch p-6 bg-zinc-800 outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-start items-start gap-6 overflow-hidden">
            <div className="w-14 inline-flex flex-col justify-start items-center gap-[5px] overflow-hidden">
              <div className="justify-start text-purple-300 text-3xl font-normal font-serif">12</div>
              <div className="justify-start text-purple-300 text-[10px] font-normal">NOV</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="justify-start text-purple-300 text-[10px] font-semibold">LIVE EVENT · 2026</div>
              <div className="self-stretch justify-start text-white text-xl font-normal font-serif leading-8">Managing risk in your next acquisition</div>
              <div className="self-stretch justify-start text-stone-300 text-xs font-normal leading-5">14:00–15:00 GST · Online<br />With Leila Rahman, Partner</div>
              <div className="inline-flex items-center gap-3 text-gray-200">
                <span className="text-xs font-semibold">Reserve your place</span>
                <ArrowUpRightIcon aria-hidden="true" className="size-4" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 text-gray-200">
            <span className="text-xs font-semibold">All events</span>
            <ArrowUpRightIcon aria-hidden="true" className="size-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightsEvents
