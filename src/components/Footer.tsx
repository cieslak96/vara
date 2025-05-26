import Link from 'next/link'
import Image from 'next/image'
import PrivacyModal from '@/components/PrivacyModal'
import TermsModal from '@/components/TermsModal'
import ContentModal from '@/components/ContentModal'
import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">

        {/* Logo + Contact */}
        <div className="md:col-span-2 flex flex-row items-center justify-center md:justify-start gap-x-4 text-sm text-center md:text-left">
          <Link href="/" className="hover:scale-105">
            <Image
              src="/logo-white.png"
              alt="Vara Salon Suites"
              width={100}
              height={20}
              priority
            />
          </Link>
          <div className="space-y-1">
            <p>(435) 915-6306</p>
            <p>contact@varasuites.com</p>
          </div>
        </div>

{/* Grouped navigation */}
<div className="md:col-span-3 flex gap-8 justify-end text-sm">

  {/* Explore */}
  <div className="flex flex-col gap-1 items-start">
    <h3 className="font-semibold text-sm mb-1">Explore</h3>
    <ul className="flex flex-col gap-1">
      <li><Link href="/amenities" className=" text-xs py-1 border-t border-b border-transparent hover:border-white transition-all duration-200">Amenities</Link></li>
      <li><Link href="/about" className=" text-xs py-1 border-t border-b border-transparent hover:border-white transition-all duration-200">About</Link></li>
      <li><Link href="/contact" className="text-xs  py-1 border-t border-b border-transparent hover:border-white transition-all duration-200">Contact</Link></li>
      <li><Link href="/faq" className="text-xs py-1 border-t border-b border-transparent hover:border-white transition-all duration-200">FAQ</Link></li>
    </ul>

  </div>

  {/* Legal */}
  <div className="flex flex-col gap-1 items-start  ">
    <h3 className="font-semibold text-sm mb-1">Legal</h3>
    <ul className="flex flex-col gap-1">
      <li className="border-t border-b border-transparent hover:border-white transition-all duration-200"><PrivacyModal /></li>
      <li className="border-t border-b border-transparent hover:border-white transition-all duration-200"><TermsModal /></li>
      <li className="border-t border-b border-transparent hover:border-white transition-all duration-200"><ContentModal /></li>
    </ul>
  </div>

  {/* Join Us */}
  <div className="flex flex-col gap-1 items-start">
    <h3 className="font-semibold text-sm mb-1">Join Us</h3>
    <Link href="/careers" className="py-0.5 border-t border-b text-xs border-transparent hover:border-white transition-all duration-200">Work With Us</Link>
    <div className="flex space-x-2 mt-1">
      <SocialIcons />
    </div>
  </div>

</div>


      </div>
      <div className="mt-8 text-sm text-white flex justify-end">
        <p>© 2024 by Loris Ventures LLC. </p>
      </div>
    </footer>
  )
}