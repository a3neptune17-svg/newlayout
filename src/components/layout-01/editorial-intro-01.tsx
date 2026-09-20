"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function EditorialIntro01() {
  return (
    <section className="relative bg-white text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Number & Category Header */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black font-mono text-slate-400">01</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">
              EDITORIAL OPENING SPREAD
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
            ARTICLE · THE DETAIL
          </span>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 inline-block border border-black/10">
              THE PHILOSOPHY
            </span>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-slate-950 leading-none font-serif">
              YOUR CAR. <br />
              <span className="underline decoration-brand decoration-6 underline-offset-8">OUR CRAFT.</span>
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-xl">
              Mr. Detailer operates on a simple premise: a car deserves the exact same care as any piece you would call a craft. Every wash, correction, and surface coating is executed by hand.
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-slate-200">
              <div>
                <span className="text-2xl font-black text-slate-950">100%</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">HAND FINISHED</p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="text-2xl font-black text-slate-950">XPEL &amp; 9H</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">CERTIFIED STUDIO</p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Automotive Photography Spread */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border-2 border-slate-950 bg-slate-100 group shadow-xl">
              <div className="relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src="/images/IMG_20260809_180906.jpg.jpeg"
                  alt="High-end detailing reflection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Picture Caption Tag */}
              <div className="p-4 bg-white border-t-2 border-slate-950 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 font-mono">
                  FIG. 1.1 — REFLECTION AUDIT AFTER 2-STAGE CORRECTION
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-950">
                  STUDIO ARCHIVE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
