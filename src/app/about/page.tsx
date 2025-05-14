'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Title from '@/components/Title'

const images = ['/team1.jpeg', '/team2.jpeg', '/team3.jpeg'];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-18">
        <Title title="About Us" />

        {/* Section 1 – Our Values */}
      <section className="relative w-full h-[600px]">
  {/* Full-width background image */}
  <Image
    src="/values.jpeg"
    alt="Our Values"
    fill
    className="object-cover w-full h-full"
    priority
  />

  {/* Overlay Card */}
  <div className="absolute top-2/3 left-1/2 lg:left-1/5 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 lg:bg-[#f9f9f6] text-[#1e1e1e] px-6 py-6  shadow-lg max-w-sm w-[90%]">
    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
    <p className="text-sm">
We want to give professionals and their customers a great experience—one that feels warm, smooth, and thoughtful. We care about treating people with kindness and helping others grow.

We believe that every creative person should have the support they need to follow their dreams. That’s why we work hard to create a friendly space where people feel welcome, inspired, and proud of what they do.
    </p>
  </div>
</section>


        {/* Section 2 – Our History */}
        <section className="bg-white text-[#1e1e1e] px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
               
            <div className="lg:w-1/4 space-y-4">
              <h2 className="text-3xl font-bold">Our History</h2>
              <p>
            Vara Salon Suites was founded in 2020 with a simple but powerful mission: to redefine how beauty professionals build their careers.

In just a few short years, we’ve grown quickly into a trusted name—one that celebrates independence, encourages creativity, and supports bold innovation at every step.
              </p>
            </div>
             <div className="lg:w-1/2">
              <Image
                src="/history.jpeg"
                alt="Our History"
                width={200}
                height={600}
                className=" w-full h-auto object-cover"
              />
            </div>
        
          </div>
        </section>

        {/* Section 3 – Our People */}
 <section className="bg-[#f1f1f1] text-[#1e1e1e] px-0 py-0">
  <div className="w-full flex flex-col lg:flex-row h-[600px]">
    
    {/* Text Block */}
    <div className="w-full lg:w-1/4 px-10 py-16 flex flex-col justify-center space-y-4">
      <h2 className="text-3xl font-bold">Our People</h2>
      <p className="text-base leading-relaxed">
        Our team is made of incredible marketing experts, reliable managers, detail-focused cleaning staff,
        and skilled maintenance personnel. Everyone plays a vital role in making Vara a place where beauty professionals thrive.
      </p>
    </div>

    {/* Carousel Container — Full Height + Aligned Right */}
    <div className="relative w-full lg:flex-1 h-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Team member ${i + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          sizes="100vw"
        />
      ))}
    </div>

  </div>
</section>


      </main>
      <Footer />
    </>
  )
}
