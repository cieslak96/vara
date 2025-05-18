'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  roomId: string
}

export default function RoomGallery({ roomId }: Props) {
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const loadImages = async () => {
      const images: string[] = []
      let index = 1
      while (true) {
        const imgPath = `/locations/layton/rooms/${roomId}/${roomId}-${index}.png`
        try {
          const res = await fetch(imgPath, { method: 'HEAD' })
          if (res.ok) {
            images.push(imgPath)
            index++
          } else break
        } catch {
          break
        }
      }
      setGalleryImages(images)
    }

    loadImages()
  }, [roomId])

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
    <>
      <div
  className="relative h-full w-full cursor-pointer overflow-hidden rounded"
  onClick={() => setIsFullscreen(true)}
>
        {galleryImages.length > 0 && (
          <Image
            src={galleryImages[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover rounded"
          />
        )}

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

      {isFullscreen && (
        <div className="fixed inset-0 bg-[#f9f9f6]/90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 z-50 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh] bg-white w-full h-full flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {galleryImages.length > 0 && (
              <Image
                src={galleryImages[currentIndex]}
                alt={`Fullscreen image ${currentIndex + 1}`}
                width={1000}
                height={1000}
                className="max-h-[90vh] w-auto object-contain rounded"
              />
            )}

            <button
              onClick={next}
              className="absolute right-4 text-white bg-gray-300 hover:bg-gray-400 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
