'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  '/locations/layton/layton1.png',
  '/locations/layton/layton2.png',
  '/locations/layton/layton3.png',
  '/locations/layton/layton4.png',
  '/locations/layton/layton5.png',
  '/locations/layton/layton6.png',
  '/locations/layton/layton7.png',
]

export default function LaytonSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false)

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="flex flex-col h-screen gap-y-4">
      {/* Row 1: Facade */}
      <div className="flex-1 relative w-full">
        <Image
          src="/locations/layton/layton-facade.png"
          alt="Layton Facade"
          fill
          className="object-cover"
        />
      </div>

      {/* Row 2: Gallery */}
      <div
        className="flex-1 relative w-full cursor-pointer overflow-hidden"
        onClick={() => setIsFullscreen(true)}
      >
        <Image
          src={galleryImages[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Row 3: Video */}
      <div
        className="flex-1 relative w-full cursor-pointer overflow-hidden"
        onClick={() => setIsVideoFullscreen(true)}
      >
        <video
          src="/locations/layton/layton-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fullscreen Modal - Gallery */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-[#f9f9f6] bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 z-50 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            onClick={() => setIsFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </button>


          <div className="relative max-w-[90vw] max-h-[90vh] bg-white w-full h-full flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <Image
              src={galleryImages[currentIndex]}
              alt={`Fullscreen image ${currentIndex + 1}`}
              width={1000}
              height={1000}
              className="max-h-[90vh] w-auto object-contain rounded"
            />

            <button
              onClick={next}
              className="absolute right-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Modal - Video */}
      {isVideoFullscreen && (
        <div className="fixed inset-0 bg-[#f9f9f6] bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 z-50 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
         onClick={() => setIsVideoFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </button>


          <div className="relative w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden">
            <video
              src="/locations/layton/layton-video.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
