"use client"

import Link from "next/link"
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react"

export function Master2Franchise() {
  return (
    <section id="franchise" className="relative bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Building2 className="size-3.5 text-black" />
              <span>STUDIO EXPANSION</span>
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              FRANCHISE <span className="text-brand">WITH MR. DETAILER</span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-xs font-black text-black hover:bg-white transition-all uppercase tracking-widest shadow-xl shrink-0"
          >
            <span>FRANCHISE WITH US</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* TWO VIDEO PANELS (50% / 50% Desktop, Stacked Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Video Panel 1 */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-70"
            >
              <source src="/videos/video-project-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[10px] font-mono font-bold text-brand uppercase tracking-widest">
              STUDIO ARCHITECTURE
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">TURNKEY STUDIO DESIGN</h3>
              <p className="text-xs text-white/70 mt-1 font-normal">State-of-the-art detailing bay layouts, lighting rigs, and climate controls.</p>
            </div>
          </div>

          {/* Video Panel 2 */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-70"
            >
              <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[10px] font-mono font-bold text-brand uppercase tracking-widest">
              CERTIFIED TRAINING
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">TECHNICIAN CERTIFICATION</h3>
              <p className="text-xs text-white/70 mt-1 font-normal">Standardized XPEL PPF & ceramic application protocols for master craftspeople.</p>
            </div>
          </div>

        </div>

        {/* Minimal Supporting Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-white/80 border-t border-white/10 pt-6">
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand" /> Studio Design Blueprint</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand" /> Master Technician Training</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand" /> Direct Manufacturer Access</span>
        </div>

      </div>
    </section>
  )
}
