'use client'

import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/components/locations/layton/Rooms'

interface Props {
  filter: string
}

export default function RoomMap({ filter }: Props) {
  return (
    <div className="relative">
      <Image
        src="/locations/layton/layton-fp.png"
        alt="Floor Plan"
        width={1000}
        height={600}
        className="w-full h-auto"
      />

      {rooms.map((room) => {
        const matchesFilter =
          !filter || room.services.toLowerCase().includes(filter.toLowerCase())
        const isAvailable = room.name.toLowerCase() === 'available'

        return (
          <Link
            key={room.id}
            href={`/locations/layton/rooms/${room.id}`}
className={`absolute flex flex-col items-center justify-center text-xs hover:scale-125 hover:z-30 ${
  isAvailable ? 'bg-black text-white border border-white' : 'bg-white text-black'
}`}
            style={{
              top: room.top,
              left: room.left,
              width: room.width,
              height: room.height,
            }}
            title={`Room ${room.id}`}
          >
            {!matchesFilter && <div className="absolute inset-0 bg-white z-10" />}

            <div className="absolute top-1 left-1 text-[10px] sm:text-[12px] px-1 py-0 sm:py-0.5 font-bold z-20">
              {room.id}
            </div>

      

            <div className="hidden sm:flex flex-col items-center z-0">
              {isAvailable ? (
                <div className="px-[8px] py-[8px] md:py-[3px] md:px-[3px] border border-gray-400 bg-white rounded-full shadow-md text-[11px] md:text-[8px] font-semibold text-black">
                  Details
                </div>
              ) : (
         <div className="hidden sm:block md:hidden lg:block">
  <Image
    src={`/locations/layton/rooms/${room.id}/logo${room.id}.png`}
    alt={`Icon for ${room.id}`}
    width={35}
    height={35}
    className="rounded-full shadow-md ring-1 ring-gray-300"
  />
</div>
              )}
              <span className="mt-1 font-semibold text-center md:text-[11px] leading-tight">
                {room.name}
              </span>
           <span
  className={`text-[11px] md:text-[9px] text-center ${
    isAvailable ? 'text-white ' : 'text-gray-700'
  }`}
>
  {room.services}
</span>
              <span className="text-gray-700 text-[11px] md:hidden  text-center ">{room.phone}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
