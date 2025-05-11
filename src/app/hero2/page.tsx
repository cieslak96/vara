// Cleaned up version
'use client'
import HeaderLand from '@/components/Header'
import BentoCardLand from '@/components/BentoCardLand'
import SocialLand from '@/components/SocialLand'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [bgPos, setBgPos] = useState('left')

  useEffect(() => {
    const timer = setTimeout(() => setBgPos('right'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 transition-[background-position] duration-[30000ms] ease-linear"
        style={{
          backgroundImage: "url('/your-image.png')",
          backgroundSize: 'cover',
          backgroundPosition: bgPos,
        }}
      />
      <HeaderLand />
      <BentoCardLand bgPos={bgPos} />
      <SocialLand />
    </section>
  )
}
