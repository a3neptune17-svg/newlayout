"use client"

import { Play } from "lucide-react"

export function InterVideo01() {
  return (
    <section className="relative bg-[#0B0D0A] py-16 text-white border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black h-80 sm:h-96 flex items-center justify-center shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover filter brightness-75 contrast-110"
          >
            <source src="/videos/video-project-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-black/40 to-[#0B0D0A]/60" />

          <div className="relative z-10 text-center max-w-2xl px-6 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest text-brand mx-auto">
              <Play className="size-3.5 fill-brand text-brand" />
              <span>STUDIO CRAFTSMANSHIP IN ACTION</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              PRECISION RESTORATION <br />
              <span className="text-brand">&amp; FINISHING REEL</span>
            </h3>

            <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto">
              Watch our XPEL-certified technicians apply self-healing film and 9H nano ceramic coatings under climate-controlled studio lighting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
