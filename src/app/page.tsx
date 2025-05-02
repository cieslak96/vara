// src/app/page.tsx
'use client'
import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import LocationList from '@/components/LocationList'
import HeroVideo from '@/components/HeroVideo'
import Footer from '@/components/Footer'
import Title from '@/components/Title'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const locationData = [
  { city: 'Sandy', zip: '84070', lat: 40.6049759, lng: -111.8715306 },
  { city: 'Orem (Dwell)', zip: '84057', lat: 40.296759, lng: -111.7031896 },
  { city: 'West Valley', zip: '84120', lat: 40.6962725, lng: -111.9838413 },
  { city: 'Spanish Fork', zip: '84660', lat: 40.1176614, lng: -111.638252 },
  { city: 'Ogden', zip: '84404', lat: 41.2378795, lng: -111.947232 },
  { city: 'Tooele', zip: '84074', lat: 40.5315153, lng: -112.3005169 },
  { city: 'Murray', zip: '84117', lat: 40.6664535, lng: -111.8688888 },
  { city: 'Layton', zip: '84041', lat: 41.0913601, lng: -111.9755507 },
  { city: 'Pleasant Grove', zip: '84062', lat: 40.368379, lng: -111.7692468 },
  { city: 'Lehi', zip: '84043', lat: 40.3989316, lng: -111.8497829 },
  { city: 'Salt Lake', zip: '84102', lat: 40.7614577, lng: -111.8789574 },
  { city: 'Bountiful', zip: '84010', lat: 40.8864176, lng: -111.889143 },
  { city: 'St. George / Washington', zip: '84780', lat: 37.1262176, lng: -113.5243339 },
]

function zipDistance(zip1: string, zip2: string): number {
  return Math.abs(parseInt(zip1) - parseInt(zip2))
}

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredLocations = useMemo(() => {
    if (!search) return locationData

    const lower = search.toLowerCase()

    const matchByCity = locationData.filter(({ city }) =>
      city.toLowerCase().includes(lower)
    )

    const zipSearch = search.match(/^\d{5}$/)

    if (zipSearch) {
      const closest = locationData.reduce((prev, curr) => {
        return zipDistance(curr.zip, search) < zipDistance(prev.zip, search)
          ? curr
          : prev
      })
      return [closest]
    }

    return matchByCity
  }, [search])

  return (
    <>
      <Header />
      <main className="bg-white text-black">
        <HeroVideo />

        <section className="px-6 py-12">
        <Title title="Our Locations" />

          <SearchBar value={search} onChange={setSearch} />

          <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
            <div className="w-full lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-md">
              <Map locations={filteredLocations} />
            </div>

            <LocationList locations={filteredLocations} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
