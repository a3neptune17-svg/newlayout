"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioFranchise() {
  return (
    <section id="franchise" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            FRANCHISE
          </span>
          <span className="text-[10px] font-mono text-white/40">
            STUDIO EXPANSION
          </span>
        </div>

        {/* TWO 50/50 VIDEO PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
          
          {/* Video Panel 1 */}
          <div className="relative min-h-[360px] bg-black p-8 flex flex-col justify-between group overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.55]"
            >
              <source src="/videos/video-project-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">01 // BLUEPRINT ARCHITECTURE</span>
              <h3 className="text-2xl font-black uppercase text-white">TURNKEY STUDIO DESIGN</h3>
            </div>
          </div>

          {/* Video Panel 2 */}
          <div className="relative min-h-[360px] bg-black p-8 flex flex-col justify-between group overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.55]"
            >
              <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">02 // TECHNICIAN MODULES</span>
              <h3 className="text-2xl font-black uppercase text-white">CERTIFIED TECHNICIAN TRAINING</h3>
            </div>
          </div>

        </div>

        {/* Quiet Statement & CTA Bar */}
        <div className="p-8 lg:p-10 bg-[#131512] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black uppercase text-white">EXPAND MR. DETAILER INTO YOUR CITY</h3>
            <p className="text-xs text-white/60 font-normal">Turnkey studio architecture, technician modules, and direct vendor access.</p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md shrink-0 self-start sm:self-auto"
          >
            <span>FRANCHISE WITH US</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  )
}
