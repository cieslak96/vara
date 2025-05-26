'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import { rooms } from '@/components/locations/layton/Rooms'
import RoomVideo from '@/components/RoomVideo'
import RoomGallery from '@/components/RoomGallery'
import Image from 'next/image'

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
      <div >
        <Title title={`Suite ${room.id}`} />
      </div>

      <div className="flex flex-col lg:flex-row w-full">

        {/* VIDEO SECTION */}
        <div className="w-full lg:w-2/3 flex items-stretch">
     <div className="relative w-full aspect-[5/4] lg:aspect-[4/1]">
            <RoomVideo roomId={room.id} />
            <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-6 bg-white/80 p-6 shadow-lg space-y-4 text-black w-[90%] sm:w-[320px] max-w-[90%]">
              <p className="text-lg">
                <span className="text-2xl font-semibold mr-2">${room.price}/week</span>
                <span>{room.squareFeet} sq ft</span>
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/application">
                  <button className="bg-black text-white py-2 w-full rounded hover:scale-110 transition">
                    Apply Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-neutral-50 text-black py-2 w-full rounded hover:scale-110 transition">
                    Schedule a Tour
                  </button>
                </Link>
                <Link href="/faq">
                  <button className="border border-black text-black py-2 w-full rounded hover:scale-110 transition">
                    FAQ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAÇADE + GALLERY */}
        <div className="w-full lg:w-1/3 bg-stone-100 px-6 lg:px-10 py-10 flex flex-col gap-6">

          {/* Facade */}
       <div className="relative w-full aspect-[5/4] rounded overflow-hidden">
  <Image
    src={`/locations/layton/rooms/${room.id}/${room.id}.png`}
    alt={`Suite facade ${room.id}`}
    fill
    className="object-cover rounded"
    sizes="(max-width: 1024px) 100vw, 33vw"
    priority
  />
</div>
          {/* Gallery */}
          <div className="relative w-full aspect-[5/4] min-h-[200px] overflow-hidden rounded">
            <RoomGallery roomId={room.id} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
} 