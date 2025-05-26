'use client'

import { useRef } from 'react'
import localFont from 'next/font/local'

// Import Blackstone font
const blackstone = localFont({
  src: '../fonts/Blackstone.ttf',
  variable: '--font-blackstone',
  display: 'swap',
})

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <div
      className={`${blackstone.variable} text-center bg-neutral-50 pt-12 pb-20 sm:pt-20 px-4`}
      style={{ fontFamily: 'var(--font-blackstone)' }}
    >
      <h1
        ref={titleRef}
        className="text-7xl  lg:text-8xl text-black inline-block"
      >
        {title}
      </h1>
    </div>
  )
}
