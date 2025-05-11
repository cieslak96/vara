'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

// Import fonts scoped to this component
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
})

export default function BentoCardLand({ bgPos }: { bgPos: string }) {
  return (
    <div
      className={`${playfair.variable} ${gilroy.variable} absolute bottom-[7.5rem] left-5 sm:left-[7.5rem] z-10 w-[88%] sm:w-auto max-w-xs sm:max-w-md transition-all duration-300 group`}
      style={{ fontFamily: 'var(--font-gilroy)' }}
    >
      <div
        className="w-full p-4 rounded-xl 
        bg-white/80 text-black shadow-2xl 
        sm:bg-black/20 sm:text-white sm:group-hover:bg-white sm:group-hover:text-black sm:group-hover:scale-110
        transition-all duration-300"
      >
        <h1
          className="text-3xl pl-2 sm:pl-4 sm:group-hover:text-black transition-all duration-300"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Welcome to
        </h1>

        {/* Small Devices */}
        <h1
          className="text-7xl italic text-right pr-20 sm:hidden text-transparent bg-[url('/your-image.png')] bg-cover bg-left bg-clip-text transition-all duration-300"
          style={{
            fontFamily: 'var(--font-playfair)',
            backgroundAttachment: 'fixed',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: 'background-position 30s linear',
            backgroundPosition: bgPos,
          }}
        >
          VARA
        </h1>

        {/* Medium+ Devices */}
        <h1
          className="hidden sm:block text-7xl italic text-right pr-12 text-white sm:group-hover:text-[#d6c9b2] transition-all duration-300"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          VARA
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed text-gray-700 scale-[1.02] sm:text-white sm:group-hover:text-gray-700"
          style={{ fontFamily: 'var(--font-gilroy)' }}
        >
          Luxury salon suites designed for{' '}
          <strong
            className="font-bold text-transparent bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 bg-clip-text sm:text-white sm:bg-none sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-emerald-400 sm:group-hover:via-pink-500 sm:group-hover:to-purple-500 sm:group-hover:bg-clip-text transition-all duration-300"
          >
            creators
          </strong>
          .
          <br />
          Premium spaces, prime locations.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="px-6 py-2 border font-extrabold rounded-full 
              transition-all duration-500 ease-in-out
              bg-emerald-900 text-white border-emerald-800
              group-hover:bg-emerald-900 group-hover:border-emerald-800 group-hover:text-white
              sm:bg-transparent sm:border-white sm:group-hover:bg-emerald-900 sm:group-hover:border-emerald-800 sm:group-hover:text-white
              hover:scale-110 hover:bg-emerald-800 hover:border-emerald-700 hover:shadow-[0_0_8px_rgba(5,150,105,0.9)]"
            style={{ fontFamily: 'var(--font-gilroy)' }}
          >
            Find Us
          </Link>
        </div>
      </div>
    </div>
  )
}
