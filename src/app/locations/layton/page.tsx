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
      <main className="min-h-screen flex pt-18">
        {/* Left Column - 1/4 width */}
        <div className="w-1/4 bg-gray-100 p-6 flex flex-col">
          {/* Top section (3/4 height) */}
          <div className="flex-grow-[3]">

           <LocationsVisuals />
          </div>

          {/* Bottom section (1/4 height) */}
          <div className="flex-grow">
            <h2 className="text-lg font-bold mb-2">Bottom Left Section</h2>
            <p>This section takes 25% of the left column height.</p>
          </div>
        </div>

        {/* Right Column - 3/4 width */}
        <div className="w-3/4 bg-white  flex flex-col">
          {/* Top section: Title only */}
          <div className="flex-grow">
            <Title title="Layton" />
          </div>

          {/* Bottom section: 3x height of Title */}
          <div className="flex-grow-[3] space-y-4 ">
    
            <FloorPlan />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
