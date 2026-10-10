import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import logoImage from '../assets/rds-logo.avif'

const exploreLinks = [
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'People', href: '#people' },
  { label: 'Insights & Events', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  'Instagram',
  'Facebook',
  'LinkedIn',
  'X',
]

function Footer() {
  return (
    <footer className="self-stretch px-6 pt-12 pb-7 sm:px-10 xl:px-20 xl:pt-14 bg-zinc-100 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-14">
          <div className="w-16 shrink-0">
            <img src={logoImage} alt="RDS Law Partners" className="w-full" />
          </div>
          <nav aria-label="Footer navigation" className="inline-flex flex-col items-start gap-3.5">
            <h2 className="text-zinc-800 text-xs font-semibold">EXPLORE</h2>
            {exploreLinks.map(({ label, href }) => (
              <a key={href} href={href} className="text-zinc-600 text-xs no-underline transition-colors hover:text-dark-purple">
                {label}
              </a>
            ))}
          </nav>
          <div className="inline-flex flex-col items-start gap-3.5">
            <h2 className="text-zinc-800 text-xs font-semibold">FIND US ON</h2>
            {socialLinks.map((label) => (
              <span key={label} className="text-zinc-600 text-xs">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full max-w-md inline-flex flex-col justify-start items-start gap-3.5">
          <h2 className="text-zinc-800 text-2xl font-normal font-serif">A considered perspective.</h2>
          <p className="self-stretch text-zinc-600 text-xs font-normal leading-5">Legal insights and event invitations, in your inbox.</p>
          <div className="self-stretch w-full max-w-md h-12 inline-flex justify-start items-stretch overflow-hidden">
            <div className="flex-1 px-4 bg-white border border-zinc-300 flex items-center">
              <span className="text-zinc-500 text-xs font-normal">Your email address</span>
            </div>
            <a
              href="mailto:enquiry@rdslawpartners.com?subject=Newsletter%20subscription"
              aria-label="Request an email newsletter subscription"
              className="px-4 bg-purple rounded-r-[3px] inline-flex justify-center items-center gap-3 no-underline text-white"
            >
              <span className="text-xs font-medium">Subscribe</span>
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
            </a>
          </div>
          <p className="self-stretch text-zinc-500 text-[10px] font-normal leading-4">By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.</p>
        </div>
      </div>
      <div className="self-stretch h-px bg-zinc-300" />
      <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
        <div className="text-zinc-600 text-xs font-normal">© 2026 RDS Law Partners</div>
        <div className="flex justify-start items-start gap-6">
          <a href="#contact" className="text-zinc-600 text-xs no-underline hover:text-dark-purple">Privacy Policy</a>
          <a href="#contact" className="text-zinc-600 text-xs no-underline hover:text-dark-purple">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
