"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioNamex() {
  return (
    <section id="namex" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            NAMEX STUDIO
          </span>
          <span className="text-[10px] font-mono text-white/40">
            TECHNICAL DIVISION
          </span>
        </div>

        {/* 60/40 SPLIT PANEL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Left Panel (7 cols): Dominant Video Canvas */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[440px] bg-black overflow-hidden group p-8 flex flex-col justify-between">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-105"
            >
              <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono font-bold text-[#E5FCA0] block mb-1">
                LUDHIANA &amp; JAMMU LABS
              </span>
              <h3 className="text-3xl font-black uppercase text-white">
                PRECISION SURFACE REFINEMENT
              </h3>
            </div>
          </div>

          {/* Right Panel (5 cols): Editorial Statement */}
          <div className="lg:col-span-5 bg-[#131512] p-8 lg:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                SPECIALTY LAB
              </span>

              <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-tight">
                AUTOMOTIVE CRAFTSMANSHIP &amp; SURFACE SCIENCE
              </h2>

              <p className="text-xs text-white/70 leading-relaxed font-normal">
                NameX Studio represents our high-precision technical division. We specialize in custom-engineered paint protection film templates, multi-stage pad leveling, and hydrophobic 10H graphene oxide application.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
              >
                <span>CONSULT NAMEX STUDIO</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
