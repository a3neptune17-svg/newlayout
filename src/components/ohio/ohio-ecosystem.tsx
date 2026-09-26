"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioEcosystem() {
  return (
    <section id="services" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            SERVICES
          </span>
          <span className="text-[10px] font-mono text-white/40">
            INDEX
          </span>
        </div>

        {/* 3-COLUMN ASYMMETRIC CONNECTED PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Column 1 (5 cols): Statement Block */}
          <div className="lg:col-span-5 bg-[#131512] p-8 lg:p-12 flex flex-col justify-between min-h-[360px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                STUDIO DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                WE DEFINE THE VISUAL LANGUAGE OF PROTECTIVE FINISHES.
              </h2>
            </div>

            <div className="pt-6">
              <Link
                href="#protection"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E5FCA0] hover:text-black transition-all border border-white/15"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Column 2 (4 cols): Dark Specialty Panel */}
          <div className="lg:col-span-4 bg-[#181A17] p-8 lg:p-12 flex flex-col justify-between relative group min-h-[360px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest">
                ARMOR &amp; REFINEMENT
              </span>
              <Link
                href="#protection"
                className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all cursor-pointer"
                aria-label="View Armor Services"
              >
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>

            <div className="space-y-6 my-auto py-4">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">01</span>
                <h3 className="text-xl font-black uppercase text-white">PAINT PROTECTION FILM</h3>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">02</span>
                <h3 className="text-xl font-black uppercase text-white">AUTO MODS</h3>
              </div>
            </div>
          </div>

          {/* Column 3 (3 cols): Selective Lime Accent Panel (#E5FCA0) */}
          <div className="lg:col-span-3 bg-[#E5FCA0] text-black p-8 lg:p-12 flex flex-col justify-between relative group min-h-[360px]">
            <div className="flex items-center justify-between border-b border-black/15 pb-4">
              <span className="text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest">
                COATINGS &amp; STYLING
              </span>
              <Link
                href="#protection"
                className="size-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="View Coating Services"
              >
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>

            <div className="space-y-6 my-auto py-4">
              <div className="border-b border-black/15 pb-4">
                <span className="text-[10px] font-mono font-bold text-black/60 block mb-1">03</span>
                <h3 className="text-xl font-black uppercase text-black">COATINGS</h3>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-black/60 block mb-1">04</span>
                <h3 className="text-xl font-black uppercase text-black">WRAPS &amp; SUNFILMS</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
