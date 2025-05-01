'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const images = ['/team1.jpeg', '/team2.jpeg', '/team3.jpeg']
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
      <main className="pt-32">
        {/* Title */}
        <div className="text-center mb-12 text-[#1e1e1e]">
          <div className="w-100 h-[2px] bg-green-900 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-[#1e1e1e]">About Us</h1>
          <div className="w-100 h-[2px] bg-green-900 mx-auto mt-4" />
        </div>

        {/* Section 1 – Our Values */}
        <section className="bg-[#f9f9f6] text-[#1e1e1e] px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p>
                We aim to offer a premium experience to professionals and their customers.
                We believe in kindness and are passionate about supporting creators in fulfilling their dreams.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/values.jpeg"
                alt="Our Values"
                width={600}
                height={200}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 – Our History */}
        <section className="bg-white text-[#1e1e1e] px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Our History</h2>
              <p>
                Vara Salon Suites started with a mission to redefine how beauty professionals build their careers.
                Over the years, we've grown into a trusted name that champions independence and innovation.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/history.jpeg"
                alt="Our History"
                width={600}
                height={200}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 3 – Our People */}
        <section className="bg-[#f1f1f1] text-[#1e1e1e] px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Our People</h2>
              <p>
                Our team is made of incredible marketing experts, reliable managers, detail-focused cleaning staff,
                and skilled maintenance personnel. Everyone plays a vital role in making Vara a place where beauty professionals thrive.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                {images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Team ${i + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
