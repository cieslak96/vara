'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import { rooms } from '@/components/locations/layton/Rooms'
import RoomVideo from '@/components/RoomVideo'
import RoomGallery from '@/components/RoomGallery'

export default function RoomDetailPage() {
  const params = useParams()
  const roomId = params?.id as string
  const room = rooms.find((r) => r.id === roomId)

  if (!room) {
    return <div className="p-10 text-red-500">Room not found</div>
  }

  return (
    <>
      <Header />
      <div className="pt-18">
        <Title title={`Suite ${room.id}`} />
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(120vh-6rem)]">

        {/* Video Section */}
        <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-full">
          <RoomVideo roomId={room.id} />
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white/80 p-6 shadow-lg space-y-4 text-[#1e1e1e] w-[90%] sm:w-[320px] max-w-[90%]">
            <p className="text-lg">
              <span className="text-2xl font-semibold mr-2">${room.price}/week</span>
              <span>{room.squareFeet} sq ft</span>
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/application">
                <button className="bg-[#97af8b] text-white py-2 w-full rounded hover:bg-[#7c9a72] transition">
                  Apply Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-[#c4d3b6] text-black py-2 w-full rounded hover:bg-[#b3c5a3] transition">
                  Schedule a Tour
                </button>
              </Link>
              <Link href="/faq">
                <button className="bg-[#f4f4f1] text-black py-2 w-full rounded hover:bg-[#e0e2d9] transition">
                  FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Facade + Gallery Section */}
        <div className="w-full lg:w-1/3 bg-stone-200 px-6 lg:px-20 py-10 flex flex-col gap-6">
          {/* Facade */}
          <div className="relative rounded overflow-hidden w-full h-60 sm:h-72 lg:flex-[3] lg:h-auto">
            <img
              src={`/locations/layton/rooms/${room.id}/${room.id}.png`}
              alt={`Fachada da suite ${room.id}`}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Gallery */}
          <div className="w-full h-48 sm:h-56 lg:flex-[2] lg:h-auto overflow-hidden">
            <RoomGallery roomId={room.id} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
