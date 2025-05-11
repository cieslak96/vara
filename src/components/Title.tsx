'use client'

import { useEffect, useRef, useState } from 'react'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [borderWidth, setBorderWidth] = useState(0)

  useEffect(() => {
    if (titleRef.current) {
      const titleWidth = titleRef.current.offsetWidth
      setBorderWidth(titleWidth + 80) 
    }
  }, [title])

  return (
    <div
      className={`${cinzel.variable} text-center bg-neutral-50 pt-20 pb-20`}
      style={{ fontFamily: 'var(--font-cinzel)' }}
    >
      <div
        className="h-[2px] bg-green-900 mx-auto mb-4"
        style={{ width: `${borderWidth}px` }}
      />
      <h1 ref={titleRef} className="text-4xl  text-[#1e1e1e] inline-block">
        {title}
      </h1>
      <div
        className="h-[2px] bg-green-900 mx-auto mt-4"
        style={{ width: `${borderWidth}px` }}
      />
    </div>
  )
}
