// RoomMap.tsx
'use client'

import Image from 'next/image'
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
          <button
            key={room.id}
            className={`absolute flex flex-col items-center justify-center text-xs text-black hover:scale-125 hover:z-30 ${room.color}`}

            style={{
              top: room.top,
              left: room.left,
              width: room.width,
              height: room.height,
            }}
            onClick={() =>
              alert(
                `Suite ${room.id}\n${room.name}\n${room.services}\n${room.phone}\n${room.email}`
              )
            }
            title={`Room ${room.id}`}
          >
            {!matchesFilter && <div className="absolute inset-0 bg-white/90 z-10" />}

            <div className="absolute top-0 left-0 text-[8px] sm:text-[12px] px-1 py-0 sm:py-0.5 font-bold z-20">
              {room.id}
            </div>

            {isAvailable && (
              <div className="sm:hidden mt-1 text-[8px] font-semibold text-center z-10">
                {room.name}
              </div>
            )}

            <div className="hidden sm:flex flex-col items-center z-0">
              {isAvailable ? (
                <div className="px-3 py-[6px] border border-gray-400 bg-white rounded-full shadow-md text-[11px] font-semibold">
                  Details
                </div>
              ) : (
                <Image
                  src={`/locations/layton/rooms/room${room.id}.png`}
                  alt={`Icon for ${room.id}`}
                  width={35}
                  height={35}
                  className="rounded-full shadow-md ring-1 ring-gray-300"
                />
              )}
              <span className="mt-1 font-semibold text-center leading-tight">
                {room.name}
              </span>
              <span className="text-gray-700 text-[11px] text-center">
                {room.services}
              </span>
              <span className="text-gray-700 text-[11px] text-center">{room.phone} </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}
