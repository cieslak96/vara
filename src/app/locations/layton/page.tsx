
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
    
      <main >
        <Title title="Layton" />

<div className="w-full flex flex-col lg:flex-row px-4 lg:px-0">
  {/* Left Column (Visuals) */}
  <div className="w-full lg:w-1/4 relative flex flex-col ">
    <div className="relative w-full lg:aspect-[3/4] lg:aspect-auto lg:flex-1">
      <LocationsVisuals />
    </div>
  </div>

  {/* Right Column (Floor Plan) */}
  <div className="w-full lg:w-3/4 bg-white flex flex-col">
    <div className="flex-grow space-y-10  py-10 ">
      <FloorPlan />
    </div>
  </div>
</div>





      </main>
      
      <Footer />
    </>
  )
}