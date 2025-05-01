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
      className="bg-gray-100 px-4 py-3 text-center rounded-md hover:bg-gray-200 transition cursor-pointer text-lg font-semibold leading-tight"
    >
      {label}
    </Link>
  )
}
