'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import LocationsVisuals from '@/components/LocationVisuals'
import FloorPlan from '@/components/FloorPlan'

export default function TwoColumnPage() {
  return (
    <>
      <Header />
      <div className="flex-grow pt-18">
        <Title title="Layton" />
      </div>

      {/* Responsive layout */}
      <main className="min-h-screen flex flex-col md:flex-row">
        
        {/* Left Column - goes below on small, left on md+ */}
        <div className="w-full md:w-1/4 bg-gray-100 p-6 flex flex-col">
          <LocationsVisuals />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-3/4 bg-white flex flex-col">
          <div className="flex-grow space-y-4 p-10">
            <FloorPlan />
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
