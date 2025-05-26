// components/LocationCard.tsx
'use client'

import Link from 'next/link'

type Props = {
  city: string
  label: React.ReactNode
}

export default function LocationCard({ city, label }: Props) {
  return (
    <Link
      href={`/locations/${encodeURIComponent(city.toLowerCase().replace(/\s+/g, '-'))}`}
      className="border border-black px-4 py-3 text-left text-black  rounded-md hover:bg-neutral-50 hover:scale-110 transition cursor-pointer text-lg  leading-tight"
    >
      {label}    <span className="text-black">›</span>
    </Link>
  )
}
