'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  '/layton/layton1.png',
  '/layton/layton2.png',
  '/layton/layton3.png',
  '/layton/layton4.png',
  '/layton/layton5.png',
  '/layton/layton6.png',
  '/layton/layton7.png',
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
    <section className="flex flex-col gap-4">
      {/* Top: Facade */}
      <div className="w-full">
        <Image
          src="/layton/laytonfacade.png"
          alt="Layton Facade"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bottom: Gallery + Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gallery */}
        <div
          className="relative aspect-square overflow-hidden group cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <Image
            src={galleryImages[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Arrows inside image */}
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

        {/* Video */}
        <div
          className="aspect-square overflow-hidden cursor-pointer"
          onClick={() => setIsVideoFullscreen(true)}
        >
          <video
            src="/layton/layton-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Fullscreen Modal - Gallery */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-[#f9f9f6] bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
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
            className="absolute top-4 right-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            onClick={() => setIsVideoFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden">
            <video
              src="/layton/layton-video.mp4"
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
