'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  roomId: string
}

export default function RoomVideo({ roomId }: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <>
     <div
  className="relative h-full w-full bg-[#001F2F] flex items-center justify-center rounded cursor-pointer overflow-hidden"
  onClick={() => setIsFullscreen(true)}
>
  <video
    src={`/locations/layton/rooms/${roomId}/${roomId}.mp4`}
    muted
    autoPlay
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>


      {isFullscreen && (
        <div className="fixed inset-0 bg-[#f9f9f6]/90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 z-50 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            onClick={() => setIsFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden">
            <video
              src={`/locations/layton/rooms/${roomId}/${roomId}.mp4`}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
