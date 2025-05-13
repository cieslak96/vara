'use client'

import React from 'react'
import localFont from 'next/font/local'
import Header from '@/components/Header'

const blackstone = localFont({
  src: '../../fonts/Blackstone.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-blackstone',
})

const brushKing = localFont({
  src: '../../fonts/BrushKing-MVVPp.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-brushking',
})

export default function HomePage() {
  return (
    <div className={`${brushKing.variable} relative h-screen w-screen overflow-hidden bg-white`}>
      <Header />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vara.mov" type="video/mp4" />
      </video>

      {/* White overlay covering left side */}
      <div className="absolute top-0 left-0  w-1/3 h-full z-10">
        
        {/* Text Above SVG */}
     <div
  className={`${blackstone.variable} absolute text-center px-4 
    top-24  md:top-24 lg:top-28 left-1/2 lg:left-1/3 transform -translate-x-1/2
  `}
>
  <p
    className="text-black text-2xl sm:text-3xl md:text-4xl font-light italic leading-snug"
    style={{ fontFamily: 'var(--font-blackstone)' }}
  >
    A place for ...
  </p>
</div>

        {/* SVG with Text Mask */}
<svg
  className="w-full h-full"
  viewBox="0 0 1000 1000"
  preserveAspectRatio="xMidYMid slice"
>
  <defs>
    <mask id="text-mask">
      <rect width="100%" height="100%" fill="white" />

      {/* Desktop - Horizontal layout */}
      <text
        className="hidden lg:block"
        x="75%"
        y="35%"
        fill="black"
        fontSize="100"
        fontWeight="bold"
        style={{ fontFamily: 'var(--font-brushking)' }}
        textAnchor="end"
      >
        CRE
      </text>
      <text
        className="hidden lg:block"
        x="75%"
        y="53%"
        fill="black"
        fontSize="100"
        fontWeight="bold"
        style={{ fontFamily: 'var(--font-brushking)' }}
        textAnchor="end"
      >
        A
      </text>
      <text
        className="hidden lg:block"
        x="75%"
        y="71%"
        fill="black"
        fontSize="100"
        fontWeight="bold"
        style={{ fontFamily: 'var(--font-brushking)' }}
        textAnchor="end"
      >
        TORS
      </text>

      {/* Mobile & Tablet - Vertical stacking */}
      <g className="lg:hidden">
        <text
          x="50%"
          y="40%"
          fill="black"
          fontSize="42"
          fontWeight="bold"
          style={{ fontFamily: 'var(--font-brushking)' }}
          textAnchor="middle"
        >
          CRE
        </text>
        <text
          x="53%"
          y="55%"
          fill="black"
          fontSize="48"
          fontWeight="bold"
          style={{ fontFamily: 'var(--font-brushking)' }}
          textAnchor="middle"
        >
          A
        </text>
        <text
          x="50%"
          y="70%"
          fill="black"
          fontSize="38"
          fontWeight="bold"
          style={{ fontFamily: 'var(--font-brushking)' }}
          textAnchor="middle"
        >
          TORS
        </text>
      </g>
    </mask>
  </defs>

  <rect width="100%" height="100%" fill="white" mask="url(#text-mask)" />
</svg>

      </div>
    </div>
  )
}
