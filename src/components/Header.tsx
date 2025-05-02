'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-white text-black">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="/logo.png" // Make sure logo is in public/logo.png
            alt="Vara Salon Suites"
            width={150}
            height={60}
            priority
          />
        </Link>
        <nav className="space-x-6 text-sm">
        <Link href="/amenities" className="hover:underline">Amenities</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
