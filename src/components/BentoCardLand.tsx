'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

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
      className={`${playfair.variable} ${gilroy.variable} absolute bottom-[7.5rem] left-5 md:left-10 lg:left-[7.5rem] z-10 w-[75%] lg:w-auto max-w-xs lg:max-w-md transition-all duration-300 group`}
      style={{ fontFamily: 'var(--font-gilroy)' }}
    >
      <div
        className="w-full p-4 rounded-xl
        bg-white/80 text-black shadow-2xl
        lg:bg-black/20 lg:text-white lg:group-hover:bg-white lg:group-hover:text-black lg:group-hover:scale-110
        transition-all duration-300"
      >
        {/* Heading for all screens */}
        <h1
          className="text-3xl pl-2 lg:pl-4 lg:group-hover:text-black transition-all duration-300"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Welcome to
        </h1>

        {/* VARA Title: mobile + tablet */}
        <h1
          className="text-7xl italic text-center lg:hidden text-transparent bg-[url('/your-image.png')] bg-cover bg-left bg-clip-text transition-all duration-300"
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

        {/* VARA Title: desktop only */}
        <h1
          className="hidden lg:block text-7xl italic text-right pr-12 text-white group-hover:text-[#d6c9b2] transition-all duration-300"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          VARA
        </h1>

        <p
          className="text-base lg:text-lg leading-relaxed text-gray-700 scale-[1.02] lg:text-white lg:group-hover:text-gray-700"
          style={{ fontFamily: 'var(--font-gilroy)' }}
        >
          Luxury salon suites designed for{' '}
          <strong
            className="font-bold text-transparent bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 bg-clip-text 
            lg:text-white lg:bg-none lg:group-hover:text-transparent lg:group-hover:bg-gradient-to-r 
            lg:group-hover:from-emerald-400 lg:group-hover:via-pink-500 lg:group-hover:to-purple-500 
            lg:group-hover:bg-clip-text transition-all duration-300"
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
              lg:bg-transparent lg:border-white lg:group-hover:bg-emerald-900 
              lg:group-hover:border-emerald-800 lg:group-hover:text-white
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
