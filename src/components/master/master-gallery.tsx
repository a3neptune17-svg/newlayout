"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Camera, Play } from "lucide-react"

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "FULL BODY SELF-HEALING PPF ARMOR",
    tag: "PAINT PROTECTION FILM",
    type: "image",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    width: "w-[320px] sm:w-[440px] lg:w-[480px]",
    height: "h-[300px] sm:h-[360px]",
  },
  {
    id: 2,
    title: "STUDIO COMPLETED WORK SHOWCASE",
    tag: "VIDEO SHOWCASE",
    type: "video",
    video: "/videos/video-project-2.mp4",
    width: "w-[300px] sm:w-[400px] lg:w-[420px]",
    height: "h-[300px] sm:h-[360px]",
  },
  {
    id: 3,
    title: "9H NANO CERAMIC MATRIX SHIELD",
    tag: "CERAMIC COATING",
    type: "image",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    width: "w-[280px] sm:w-[360px] lg:w-[380px]",
    height: "h-[300px] sm:h-[360px]",
  },
  {
    id: 4,
    title: "CUSTOM COLOR CHANGE VINYL WRAP",
    tag: "AUTO MODS",
    type: "image",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    width: "w-[280px] sm:w-[360px] lg:w-[380px]",
    height: "h-[300px] sm:h-[360px]",
  },
  {
    id: 5,
    title: "MULTI-STAGE MACHINE PAINT CORRECTION",
    tag: "SWIRL-FREE RESTORATION",
    type: "image",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    width: "w-[280px] sm:w-[360px] lg:w-[380px]",
    height: "h-[300px] sm:h-[360px]",
  },
]

export function MasterGallery() {
  return (
    <section id="gallery" className="relative bg-[#0B0D0A] py-16 lg:py-20 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* One-Word Recognition Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Camera className="size-3 text-black" />
              <span>STUDIO PORTFOLIO</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              GALLERY
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/90 hover:text-brand transition-colors pb-1 border-b border-white/30 hover:border-brand shrink-0"
          >
            <span>VIEW GALLERY</span>
            <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* Premium Horizontal Visual Rail */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`snap-start shrink-0 ${item.width} ${item.height} group relative overflow-hidden rounded-3xl border border-white/15 bg-black transition-all duration-500 hover:border-brand/60`}
            >
              {item.type === "video" ? (
                <div className="relative h-full w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                    <Play className="size-3 text-black fill-black" />
                    <span>STUDIO REEL</span>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  <Image
                    src={item.image!}
                    alt={item.title}
                    fill
                    className="object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 300px, 480px"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                <h3 className="text-base sm:text-lg font-black uppercase text-white leading-tight max-w-xs group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md shrink-0 ml-2 group-hover:bg-brand group-hover:text-black">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
