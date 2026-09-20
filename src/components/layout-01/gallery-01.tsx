"use client"

import Image from "next/image"

export function Gallery01() {
  return (
    <section id="our-work" className="relative bg-white text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black font-mono text-slate-400">07</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">
              EDITORIAL PHOTO SPREAD
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
            PORTFOLIO ARCHIVE
          </span>
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Huge Hero Image (col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between border-2 border-slate-950 bg-slate-100 p-4 shadow-xl">
            <div className="relative h-[400px] sm:h-[500px] w-full border border-slate-950 overflow-hidden group">
              <Image
                src="/images/IMG_20260809_181154.jpg.jpeg"
                alt="Full body paint correction & ceramic coating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <span className="absolute top-4 left-4 bg-brand text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-black">
                PLATE NO. 01 — FULL BODY CORRECTION
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-slate-900">
              <div>
                <span className="font-mono text-slate-400 text-[10px] block uppercase">PROJECT:</span>
                <span>SIGNATURE PAINT CORRECTION &amp; 9H CERAMIC GLASS SHIELD</span>
              </div>
              <span className="font-mono text-[10px] uppercase text-slate-500">
                INSPECTION DEPTH: 120 MICRONS · SWIRL-FREE 99.4%
              </span>
            </div>
          </div>

          {/* Two Smaller Detail Images Stack (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Detail Shot 1 */}
            <div className="border-2 border-slate-950 bg-slate-100 p-4 shadow-xl flex-1 flex flex-col justify-between">
              <div className="relative h-56 w-full border border-slate-950 overflow-hidden group">
                <Image
                  src="/images/IMG_20260809_180906.jpg.jpeg"
                  alt="XPEL PPF edge alignment detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1">
                  PLATE NO. 02 — PPF EDGE WRAP
                </span>
              </div>
              <span className="block pt-3 text-[10px] font-black uppercase tracking-widest text-slate-600 font-mono">
                DETAIL 02 — COMPUTER PATTERN EDGE WRAPPING
              </span>
            </div>

            {/* Detail Shot 2 */}
            <div className="border-2 border-slate-950 bg-slate-100 p-4 shadow-xl flex-1 flex flex-col justify-between">
              <div className="relative h-56 w-full border border-slate-950 overflow-hidden group">
                <Image
                  src="/images/IMG_20260809_181254.jpg.jpeg"
                  alt="Interior leather spa detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1">
                  PLATE NO. 03 — CABIN LEATHER SPA
                </span>
              </div>
              <span className="block pt-3 text-[10px] font-black uppercase tracking-widest text-slate-600 font-mono">
                DETAIL 03 — MATTE UV LEATHER NOURISHING
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
