function Hero() {
  return (
    <section id="home" className="self-stretch px-6 py-10 sm:px-10 lg:pl-20 lg:pr-12 lg:py-12 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-10 lg:gap-16 overflow-hidden">
      <div className="w-full lg:flex-1 inline-flex flex-col justify-start items-start gap-7">
        <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
          <div className="w-7 h-0.5 bg-purple" />
          <div className="justify-start text-purple text-xs font-semibold uppercase">Independent thinking. Commercial focus.</div>
        </div>
        <div className="self-stretch justify-start text-purple text-4xl sm:text-5xl lg:text-6xl font-normal font-serif leading-tight lg:leading-[73.16px]">Strategic Commercial Counsel</div>
        <div className="self-stretch justify-start text-zinc-600 text-lg font-normal leading-8">Clear advice for complex decisions. We help businesses navigate transactions, resolve disputes and structure growth across conventional and Islamic markets.</div>
        <div className="size- pt-2 inline-flex justify-start items-center gap-6 overflow-hidden">
          <a href="#practice-areas" aria-label="Explore practice areas" className="text-white">
            <div className="h-12 px-5 bg-dark-purple rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-500 flex justify-start items-center gap-5 overflow-hidden">
              <div className="justify-start text-white text-sm font-medium">View Practice Areas</div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-[616px] h-[300px] sm:h-[420px] lg:h-[560px] relative shrink-0 inline-flex flex-col justify-start items-start overflow-hidden">
        <img className="self-stretch flex-1 object-cover" src="src/assets/klcc-view.png" alt="A commercial perspective" />
        <div className="w-64 sm:w-80 p-4 sm:p-5 left-4 sm:left-6 bottom-4 sm:bottom-6 absolute bg-white flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-purple text-[10px] font-normal">A COMMERCIAL PERSPECTIVE</div>
          <div className="self-stretch justify-start text-zinc-800 text-lg font-normal font-serif leading-7">Built on trust.<br />Focused on you.</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
