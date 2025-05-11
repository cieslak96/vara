'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-white/70 text-black">
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        <Link href="/" className="hover:scale-105">
          <Image
            src="/logo-black.png" // Make sure logo is in public/logo.png
            alt="Vara Salon Suites"
            width={130}
            height={50}
            priority
          />
        </Link>
      <nav className="space-x-6 text-sm">
  <Link
    href="/amenities"
    className="px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
  >
    Amenities
  </Link>
  <Link
    href="/about"
    className=" px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
  >
    About
  </Link>
  <Link
    href="/contact"
    className=" px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
  >
    Contact
  </Link>
</nav>


      </div>
    </header>
  )
}
