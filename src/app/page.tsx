'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import LocationList from '@/components/LocationList'
import HeroVideo from '@/components/HeroVideo'
import Footer from '@/components/Footer'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const locationData = [
  { name:'sandy', city: 'Sandy', zip: '84070', lat: 40.6049759, lng: -111.8715306 },
  { name:'orem', city: 'Orem (Dwell)', zip: '84057', lat: 40.296759, lng: -111.7031896 },
  { name:'wv', city: 'West Valley', zip: '84120', lat: 40.6962725, lng: -111.9838413 },
  { name:'sf', city: 'Spanish Fork', zip: '84660', lat: 40.1176614, lng: -111.638252 },
  { name:'ogden', city: 'Ogden', zip: '84404', lat: 41.2378795, lng: -111.947232 },
  { name:'tooele', city: 'Tooele', zip: '84074', lat: 40.5315153, lng: -112.3005169 },
  { name:'murray', city: 'Murray', zip: '84117', lat: 40.6664535, lng: -111.8688888 },
  { name:'layton', city: 'Layton', zip: '84041', lat: 41.0913601, lng: -111.9755507 },
  { name:'pg', city: 'Pleasant Grove', zip: '84062', lat: 40.368379, lng: -111.7692468 },
  { name:'lehi', city: 'Lehi', zip: '84043', lat: 40.3989316, lng: -111.8497829 },
  { name:'slc', city: 'Salt Lake', zip: '84102', lat: 40.7614577, lng: -111.8789574 },
  { name:'bountiful', city: 'Bountiful', zip: '84010', lat: 40.8864176, lng: -111.889143 },
  { name:'stg', city: 'Saint George / Washington', zip: '84780', lat: 37.1262176, lng: -113.5243339 },
]

// Geo distance function (Haversine formula)
function geoDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (value: number) => (value * Math.PI) / 180
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [filteredLocations, setFilteredLocations] = useState(locationData)

  useEffect(() => {
    if (!search) {
      setFilteredLocations(locationData)
      return
    }

    const lower = search.toLowerCase().trim()



    const zipMatch = search.match(/^\d{5}$/)
    if (zipMatch) {
      const zip = search
      const closest = locationData.reduce((prev, curr) => {
        const prevDist = Math.abs(parseInt(prev.zip) - parseInt(zip))
        const currDist = Math.abs(parseInt(curr.zip) - parseInt(zip))
        return currDist < prevDist ? curr : prev
      }, locationData[0])
      setFilteredLocations([closest])
      return
    }

    const cityMatches = locationData.filter(({ city }) =>
      city.toLowerCase().includes(lower)
    )
    if (cityMatches.length > 0) {
      setFilteredLocations(cityMatches)
      return
    }

    // Geocode unlisted Utah cities
    const fetchGeo = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(search + ', Utah')}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        )
        const data = await res.json()

        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location
          const closest = locationData.reduce((prev, curr) =>
            geoDistance(lat, lng, curr.lat, curr.lng) <
            geoDistance(lat, lng, prev.lat, prev.lng)
              ? curr
              : prev
          )
          setFilteredLocations([closest])
        } else {
          setFilteredLocations(locationData) // fallback to all
        }
      } catch (error) {
        console.error('Geocoding failed:', error)
        setFilteredLocations(locationData)
      }
    }

    fetchGeo()
  }, [search])

  return (
    <>
      <Header />
      <main className="bg-white text-black">
        <HeroVideo />

        <section className="py-12">
          <div
            className={`${cinzel.variable} text-center pt-20 pb-20`}
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <div className="w-100 h-[2px] bg-green-900 mx-auto mb-4" />
            <h1 className="text-4xl font-semi-bold text-[#1e1e1e]">
              Our Locations
            </h1>
            <div className="w-100 h-[2px] bg-green-900 mx-auto mt-4" />
          </div>

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
