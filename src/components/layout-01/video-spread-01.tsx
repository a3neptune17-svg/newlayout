"use client"

import { Play } from "lucide-react"

export function VideoSpread01() {
  return (
    <section className="relative bg-[#FBFBFD] text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black font-mono text-slate-400">06</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">
              CINEMATIC SPREAD
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
            STUDIO REEL
          </span>
        </div>

        {/* Full-Bleed Video Frame */}
        <div className="border-2 border-slate-950 bg-black relative h-[420px] sm:h-[540px] overflow-hidden shadow-2xl group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
          >
            <source src="/videos/video-project-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Center Play Tag */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="size-16 rounded-full bg-brand/90 text-black flex items-center justify-center shadow-2xl border-2 border-black">
              <Play className="size-7 fill-black text-black ml-1" />
            </div>

            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-serif drop-shadow-2xl">
              THE CRAFT BEHIND <br />
              <span className="text-brand">THE FINISH.</span>
            </h3>

            <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto font-medium drop-shadow-md">
              Watch XPEL-certified technicians install 10-mil self-healing film and 9H nano ceramic coatings under climate-controlled studio lighting.
            </p>
          </div>

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 border border-slate-950 flex items-center justify-between text-slate-950 text-[10px] font-black uppercase tracking-widest font-mono">
            <span>FILM 02 · 4K STUDIO DOCUMENTARY</span>
            <span>MR. DETAILER ARCHIVE</span>
          </div>
        </div>

      </div>
    </section>
  )
}
