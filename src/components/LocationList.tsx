// components/LocationList.tsx
'use client'

import LocationCard from './LocationCard'

type Location = {
  city: string
  zip: string
  lat: number
  lng: number
}

type Props = {
  locations: Location[]
}

export default function LocationList({ locations }: Props) {
  if (!locations.length) {
    return <p className="text-center col-span-full text-gray-500">No matching locations found.</p>
  }

  return (
    <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4 self-start">
      {locations.map((loc, i) => (
    <LocationCard
    key={i}
    city={loc.city}
    label={
      loc.city === 'St. George / Washington' ? (
        <span className="inline-flex items-center justify-center text-center flex-wrap gap-x-1">
          <span>St. George /</span>
          <span>Washington</span>
          <span className="text-green-900">›</span>
        </span>
      ) : (
        <>
          {loc.city} <span className="text-green-900">›</span>
        </>
      )
    }
  />
  
  
  
     
      ))}
    </div>
  )
}
