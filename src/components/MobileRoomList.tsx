'use client'

import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/components/locations/layton/Rooms'

interface Props {
  filter: string
}

export default function MobileRoomList({ filter }: Props) {
  return (
    <div className="sm:hidden mt-6 px-4 space-y-3">
      {rooms
        .filter((room) =>
          !filter || room.services.toLowerCase().includes(filter.toLowerCase())
        )
        .map((room) => {
          const isAvailable = room.name.toLowerCase() === 'available'

          return (
            <Link
              href={`/locations/layton/rooms/${room.id}`}
              key={room.id}
              className={`w-full flex items-center gap-3 rounded-md px-4 py-3 ${room.color}`}
            >
              {!isAvailable && (
                <Image
                  src={`/locations/layton/rooms/${room.id}/logo${room.id}.png`}
                  alt={`Icon for ${room.id}`}
                  width={36}
                  height={36}
                  className="rounded-full shadow"
                />
              )}
              <div className="flex flex-col text-left text-xs leading-tight">
                <span className="font-bold text-black">
                  #{room.id} {room.name}
                </span>
                <span className="text-gray-700 text-[11px]">{room.services}</span>
                <span className="text-gray-700 text-[11px]">{room.phone}</span>
              </div>
            </Link>
          )
        })}
    </div>
  )
}
