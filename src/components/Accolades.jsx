import ABLJLawFirmAwards from '../assets/accolades/ABLJ-Law-Firm-Awards-2025.avif'
import AlbSuper50 from '../assets/accolades/alb-super-50.avif'
import AsiaPacific from '../assets/accolades/asia-pacific-2025.avif'
import HighlyRegardedPractitioner from '../assets/accolades/highly-regarded-practitioner.avif'
import Legal500 from '../assets/accolades/legal-500.avif'
import MalaysiaAList from '../assets/accolades/Malaysia-A-list-2025.avif'
import RecognisedFirm from '../assets/accolades/recognised-firm.avif'
import WorldTax from '../assets/accolades/worldtax-2024.avif'
import WorldTP from '../assets/accolades/worldtp-2024.avif'

const accolades = [
  { image: Legal500, label: 'The Legal 500' },
  { image: WorldTP, label: 'World Transfer Pricing 2024' },
  { image: WorldTax, label: 'World Tax 2024' },
  { image: MalaysiaAList, label: 'Malaysia A-List 2025' },
  { image: HighlyRegardedPractitioner, label: 'Highly Regarded Practitioner' },
  { image: AlbSuper50, label: 'ALB Super 50' },
  { image: AsiaPacific, label: 'Asia Pacific 2025' },
  { image: RecognisedFirm, label: 'Recognised Firm' },
  { image: ABLJLawFirmAwards, label: 'Asian Business Law Journal Law Firm Awards 2025' },
]

function Accolade({ image, label, mobile = false }) {
  return (
    <div className={`${mobile ? 'flex h-20 w-full items-center justify-center px-2' : 'flex h-14 w-fit max-w-full shrink-0 items-center justify-center sm:h-24 xl:h-32'}`}>
      <img src={image} alt={label} className={`${mobile ? 'max-h-16 max-w-full' : 'max-h-full max-w-full'} object-contain`} />
    </div>
  )
}

function Accolades() {
  return (
    <section aria-label="Firm accolades" className="self-stretch px-6 py-12 sm:px-10 xl:px-20 xl:py-16 bg-purple border-t border-b border-neutral-500 flex flex-col items-center gap-8">
      <div className="w-full max-w-[880px] flex flex-col items-center gap-4 text-center">
          <div className="inline-flex justify-center items-center gap-3">
            <div className="w-7 h-0.5 bg-gray-200" />
            <div className="justify-start text-gray-200 text-xs font-semibold uppercase">Our accolades</div>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">A standard of excellence.</h2>
      </div>
      <div aria-label="Accolades" className="mx-auto flex w-full max-w-6xl flex-col gap-y-5 sm:gap-y-7">
        <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 sm:hidden">
          {accolades.map((accolade) => (
            <Accolade key={accolade.label} {...accolade} mobile />
          ))}
        </div>
        <div className="hidden flex-col gap-y-7 sm:flex">
          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 xl:gap-x-6">
            {accolades.slice(0, 5).map((accolade) => (
              <Accolade key={accolade.label} {...accolade} />
            ))}
          </div>
          <div className="mx-auto flex w-4/5 flex-wrap justify-center gap-x-2 md:gap-x-4 xl:gap-x-6">
            {accolades.slice(5).map((accolade) => (
              <Accolade key={accolade.label} {...accolade} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accolades
