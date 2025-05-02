'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Title from '@/components/Title'

const images = [
  '/amenity1.png',
  '/amenity2.png',
  '/amenity3.png'
]

export default function AmenitiesPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <>
      <Header />
       <main className="pt-32" >
          <Title title="Our Amenities" />

        {/* Section 1 – Amenities */}
        <section className="px-6 py-16 bg-[#f9f9f6] text-[#1e1e1e]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <p>We do all we can to help you have an amazing experience in your suite. At VARA, we emphasize customizing your space to fit your creative goals. We offer many different room sizes (from 90 to 400 sqft) to best fit your needs.</p>
              <ul className="list-disc pl-6">
                <li>Digital keypad with a private entry code for your room</li>
                <li>A private sink (pedestal or integrated shampoo sink)</li>
                <li>24hr access</li>
                <li>Free laundry for tenants</li>
                <li>High-speed Wi-Fi throughout the building</li>
                <li>A private break room</li>
                <li>Tons of parking for you and your clients</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                {images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Amenity ${i + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Monthly Giveaways */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Monthly Giveaways</h2>
              <p>As always, we will be doing giveaways for VARA tenants the first Wednesday of every month. NO likes, subscription, or re-posting necessary. Just be a VARA tenant! We will randomly be selecting several tenants each week from across all our locations.</p>
              <p>The goal of the giveaways is to support a healthy work/life balance in the small way we can. We are grateful for your business and look forward to more fun times to come.</p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/giveaway.png"
                alt="Monthly Giveaways"
                width={600}
                height={200}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
