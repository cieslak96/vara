// components/HeroVideo.tsx
'use client'

export default function HeroVideo() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Vara</h1>
        <p className="text-lg md:text-2xl">The biggest premium salon suites rents in Utah</p>
      </div>
    </section>
  )
}
