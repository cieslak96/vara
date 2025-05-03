import Link from 'next/link'
import Image from 'next/image'
import PrivacyModal from '@/components/PrivacyModal'
import TermsModal from '@/components/TermsModal'
import ContentModal from '@/components/ContentModal'
import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[#1c2b25] text-white py-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">

        {/* Logo + Contact */}
        <div className="md:col-span-2 flex flex-row items-center justify-center md:justify-start gap-x-4 text-sm text-center md:text-left">
          <Link href="/" className="shrink-0">
            <Image
              src="/no-bg-logo.png"
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
        <div className="md:col-span-3 flex gap-8 justify-end">

          {/* Explore */}
          <div className="space-y-1">
            <h3 className="font-bold">Explore</h3>
            <ul className="space-y-1">
              <Link href="/amenities" className="hover:underline">Amenities</Link>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-1">
            <h3 className="font-bold">Legal</h3>
            <ul className="space-y-1">
              <li><PrivacyModal /></li>
              <li><TermsModal /></li>
              <li><ContentModal /></li>
            </ul>
          </div>

          {/* Join Us */}
          <div className="space-y-1">
            <h3 className="font-bold">Join Us</h3>
            <Link href="/careers" className="hover:underline block">Work With Us</Link>
            <div className="flex space-x-2 ">
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
