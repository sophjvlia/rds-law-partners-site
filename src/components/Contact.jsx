import { useState } from 'react'
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const offices = [
  {
    name: 'Kuala Lumpur',
    address: 'Level 16, Menara 1 Dutamas No. 1, Jalan Dutamas 1, Solaris Dutamas, 50480 Kuala Lumpur',
    phone: '+603 6209 5400',
    fax: '+603 6209 5411',
  },
  {
    name: 'Penang',
    address: 'Suite S-21E & F21st Floor, Menara Northam No. 55, Jalan Sultan Ahmad Shah, 10050 Penang',
    phone: '+604 370 1122',
    fax: '+604 370 5678',
  },
  {
    name: 'Johor',
    address: '8-35, Menara Delima Satu, Jalan Forest City 1, Pulau Satu, Gelang Patah, 81550 Johor Bahru',
    phone: '+607 585 6414',
    fax: '+607 509 7614',
  },
]

function Contact() {
  const [selectedOfficeIndex, setSelectedOfficeIndex] = useState(0)
  const selectedOffice = offices[selectedOfficeIndex]

  return (
    <section id="contact" className="self-stretch min-w-0 p-6 sm:p-10 xl:p-20 flex flex-col justify-start items-start gap-10">
      <div className="w-full xl:w-[820px] flex flex-col justify-start items-start gap-4">
        <div className="size- inline-flex justify-start items-center gap-3 overflow-hidden">
          <div className="w-7 h-0.5 bg-purple" />
          <div className="justify-start text-purple text-xs font-semibold uppercase">Start a conversation</div>
        </div>
        <div className="self-stretch justify-start text-purple text-3xl sm:text-4xl font-normal font-serif leading-tight sm:leading-[48.64px]">Your next step starts here.</div>
        <div className="self-stretch justify-start text-zinc-600 text-base font-normal leading-6">Tell us what matters to your business. We’ll connect you with the right team.</div>
      </div>
      <div className="self-stretch min-w-0 flex flex-col xl:flex-row justify-start items-start gap-10 xl:gap-24">
        <div className="w-full xl:w-[688px] min-w-0 inline-flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-6">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-800 text-xs font-medium">Name *</div>
              <div className="self-stretch h-12 p-4 bg-white rounded-[3px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden">
                <div className="justify-start text-neutral-400 text-xs font-normal">Your full name</div>
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-800 text-xs font-medium">Email *</div>
              <div className="self-stretch h-12 p-4 bg-white rounded-[3px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden">
                <div className="justify-start text-neutral-400 text-xs font-normal">Your business email</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-6">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-800 text-xs font-medium">Practice Area</div>
              <div className="relative self-stretch">
                <select
                  id="practice-area"
                  name="practiceArea"
                  defaultValue=""
                  aria-label="Practice Area"
                  className="h-12 w-full appearance-none rounded-[3px] border border-zinc-200 bg-white px-4 pr-11 text-xs text-zinc-700 outline-none transition focus:border-dark-purple focus:ring-2 focus:ring-dark-purple/15"
                >
                  <option value="" disabled>Select a practice area</option>
                  <option value="corporate">Corporate &amp; Commercial</option>
                  <option value="dispute-resolution">Dispute Resolution</option>
                  <option value="islamic-finance">Islamic Finance</option>
                  <option value="employment">Employment</option>
                </select>
                <ChevronDownIcon aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-800 text-xs font-medium">Phone Number</div>
              <div className="self-stretch h-12 p-4 bg-white rounded-[3px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden">
                <div className="justify-start text-neutral-400 text-xs font-normal">+60 12 345-6789</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="justify-start text-zinc-800 text-xs font-medium">Message *</div>
            <div className="self-stretch h-32 p-4 bg-white rounded-[3px] outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-between items-start overflow-hidden">
              <div className="justify-start text-neutral-400 text-xs font-normal">How can we help your business?</div>
            </div>
          </div>
          <label className="self-stretch inline-flex cursor-pointer justify-start items-start gap-3">
            <input type="checkbox" name="privacyConsent" className="mt-0.5 size-4 shrink-0 accent-dark-purple" />
            <span className="flex-1 text-zinc-600 text-xs font-normal leading-5">I agree to the Privacy Policy and to being contacted about my enquiry.</span>
          </label>
          <div className="self-stretch justify-start text-zinc-600 text-xs font-normal leading-4">Please do not send confidential information. Submitting an enquiry does not establish a lawyer–client relationship.</div>
        </div>
        <div className="w-full max-w-xl min-w-0 flex-1 rounded-sm outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex flex-col justify-start items-start overflow-hidden">
          <div role="tablist" aria-label="RDS Law Partners offices" className="self-stretch min-h-12 border-b border-zinc-200 grid grid-cols-3">
            {offices.map((office, index) => (
              <button
                key={office.name}
                id={`office-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selectedOfficeIndex === index}
                aria-controls="office-panel"
                onClick={() => setSelectedOfficeIndex(index)}
                className={`min-w-0 px-2 sm:px-4 flex justify-center items-center text-center transition-colors ${selectedOfficeIndex === index ? 'bg-white border-b-[3px] border-dark-purple text-dark-purple font-semibold' : 'bg-gray-50 text-zinc-600 hover:bg-zinc-100'}`}
              >
                <span className="text-xs">{office.name}</span>
              </button>
            ))}
          </div>
          <div id="office-panel" role="tabpanel" aria-labelledby={`office-tab-${selectedOfficeIndex}`} className="self-stretch bg-white p-5 flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="justify-start text-gray-500 text-xl font-normal font-serif">{selectedOffice.name} office</div>
            <div className="self-stretch justify-start text-zinc-600 text-sm font-normal leading-6">{selectedOffice.address}</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <a className="text-gray-500 text-sm font-normal" href="mailto:enquiry@rdslawpartners.com">Email: enquiry@rdslawpartners.com</a>
              <a className="text-zinc-600 text-xs font-normal" href={`tel:${selectedOffice.phone.replaceAll(' ', '')}`}>Tel: {selectedOffice.phone}</a>
              <div className="justify-start text-zinc-600 text-xs font-normal">Fax: {selectedOffice.fax}</div>
              <div className="justify-start text-zinc-600 text-xs font-normal">Monday – Friday · 09:00AM – 5:30PM</div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedOffice.address)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${selectedOffice.name} office on Google Maps`}
              className="inline-flex items-center gap-2.5 text-gray-500"
            >
              <span className="text-xs font-semibold">View location</span>
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <a href="mailto:enquiry@rdslawpartners.com" aria-label="Email your enquiry to RDS Law Partners" className="h-12 px-5 bg-dark-purple rounded-[3px] outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center gap-5 overflow-hidden no-underline text-white">
        <span className="text-sm font-medium">Email us</span>
        <ArrowUpRightIcon aria-hidden="true" className="size-5" />
      </a>
    </section>
  )
}

export default Contact
