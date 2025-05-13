'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Backdrop Blur for Page — stays behind header */}
      {isOpen && (
        <div
          className=" inset-0 backdrop-blur-sm z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Header — stays on top of backdrop */}
      <header className="fixed top-0 left-0 w-full z-30 bg-white/70 text-black">
        <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="hover:scale-105">
            <Image
              src="/logo-black.png"
              alt="Vara Salon Suites"
              width={130}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link
              href="/amenities"
              className="px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
            >
              Amenities
            </Link>
            <Link
              href="/about"
              className="px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-2 pt-2 pb-2 border-t border-b border-transparent hover:border-[#635a50] transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Animated Dropdown Menu — above everything */}
      <div
        className={`md:hidden fixed top-18 right-0 w-1/2 z-40 transition-all duration-300 ease-in-out transform
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
          origin-top-right bg-white/70 px-4 py-4 space-y-2 shadow-lg rounded-bl-lg
        `}
        style={{ transformOrigin: 'top right' }}
      >
        <Link
          href="/amenities"
          className="block text-base border-b border-[#e5e5e5] pb-2"
          onClick={() => setIsOpen(false)}
        >
          Amenities
        </Link>
        <Link
          href="/about"
          className="block text-base border-b border-[#e5e5e5] pb-2"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block text-base pb-2"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  )
}
