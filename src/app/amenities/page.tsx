'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Title from '@/components/Title'
import localFont from 'next/font/local'

const images = ['/amenity1.png', '/amenity2.png', '/amenity3.png']

const blackstone = localFont({
  src: '../../fonts/Blackstone.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-blackstone',
})

export default function AmenitiesPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-18">
        <Title title="Our Amenities" />


        {/* Section – Amenities */}
        <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
          {/* Full-width background image carousel */}
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Amenity ${i + 1}`}
              fill
              priority={i === 0}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            />
          ))}

          {/* Overlay card for large screens */}
          <div className="hidden lg:block absolute top-5/8 left-1/10 transform -translate-y-1/2 bg-white/90 text-[#1e1e1e] px-6 py-6 shadow-lg max-w-sm w-[90%] space-y-4 z-20">

            <p className="text-sm">
              We do all we can to help you have an amazing experience in your suite. At VARA, we emphasize customizing your space to fit your creative goals. We offer many different room sizes (from 90 to 400 sqft) to best fit your needs.
            </p>
            <p className="text-sm">Among our amenities you can find:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Digital keypad with a private entry code for your room</li>
              <li>A private sink (pedestal or integrated shampoo sink)</li>
              <li>24hr access</li>
              <li>Free laundry for tenants</li>
              <li>High-speed Wi-Fi throughout the building</li>
              <li>A private break room</li>
              <li>Tons of parking for you and your clients</li>
            </ul>
          </div>
        </section>

        {/* Static card for small/medium devices */}
        <section className="block lg:hidden px-6 py-10 bg-[#f9f9f6] text-[#1e1e1e] space-y-4">

          <p className="text-sm">
            We do all we can to help you have an amazing experience in your suite. At VARA, we emphasize customizing your space to fit your creative goals. We offer many different room sizes (from 90 to 400 sqft) to best fit your needs.
          </p>
          <p className="text-sm">Among our amenities you can find:</p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Digital keypad with a private entry code for your room</li>
            <li>A private sink (pedestal or integrated shampoo sink)</li>
            <li>24hr access</li>
            <li>Free laundry for tenants</li>
            <li>High-speed Wi-Fi throughout the building</li>
            <li>A private break room</li>
            <li>Tons of parking for you and your clients</li>
          </ul>
        </section>


        {/* Section 2 – Monthly Giveaways */}
       <section className="px-6 py-16 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    
    {/* LEFT COLUMN */}
    <div className="lg:w-1/3 text-center space-y-4">
      <h2 className="text-3xl font-bold">Monthly Giveaways</h2>
      <p>
        As always, we will be doing giveaways for VARA tenants the first Wednesday of every month. We will randomly be selecting several tenants each week from across all our locations.
      </p>
      <p>
        The goal of the giveaways is to support a healthy work/life balance in the small way we can. We are grateful for your business and look forward to more fun times to come.
      </p>
    </div>

    {/* MIDDLE CARD - CENTERED */}
    <div className="lg:w-1/3 lg:pl-20 flex ">
      <div className={`${blackstone.variable} bg-[#f9f9f6] w-60 h-48 flex flex-col items-center justify-center text-center p-6 shadow-md space-y-2`}>
        <p className="text-sm">
          No likes, subscription, or re-posting necessary.
        </p>
        <p
          className="text-2xl text-[#1e1e1e] font-bold"
          style={{ fontFamily: 'var(--font-blackstone)' }}
        >
          Just be a Vara tenant!
        </p>
      </div>
    </div>

    {/* RIGHT IMAGE */}
<div className="lg:w-1/2 flex justify-end">
  <Image
    src="/giveaway.png"
    alt="Monthly Giveaways"
    width={400}  // was 300
    height={500} // was 400
    className="object-cover"
  />
</div>
    
  </div>
</section>

      </main>
      <Footer />
    </>
  )
}
