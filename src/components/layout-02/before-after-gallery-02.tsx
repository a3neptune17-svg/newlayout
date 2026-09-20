"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Sliders } from "lucide-react"

export function BeforeAfterGallery02() {
  const [sliderPos, setSliderPos] = useState(50)

  return (
    <section id="work" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
              <Sparkles className="size-3.5 text-black" />
              <span>STEP 3 · VERIFY PROOF</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              BEFORE & AFTER <span className="underline decoration-brand decoration-4 underline-offset-4">PROOF</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Drag the slider to compare factory paint oxidation & swirl marks against Mr. Detailer machine correction and ceramic reflection.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-md"
          >
            <span>BOOK INSPECTION</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="relative h-[380px] sm:h-[500px] w-full overflow-hidden rounded-3xl border-2 border-black shadow-2xl select-none">
          {/* BEFORE Image (Base Layer) */}
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_20260809_181154.jpg.jpeg"
              alt="Swirled Paint Before Correction"
              fill
              className="object-cover filter contrast-125 brightness-90"
              sizes="100vw"
            />
            <span className="absolute bottom-6 left-6 rounded-full bg-black/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white border border-white/20">
              BEFORE · SWIRLED PAINT
            </span>
          </div>

          {/* AFTER Image (Clipped Overlay Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <Image
              src="/images/IMG_20260809_180823.jpg.jpeg"
              alt="Mirror Gloss After Correction"
              fill
              className="object-cover filter brightness-110 saturate-110"
              sizes="100vw"
            />
            <span className="absolute bottom-6 left-6 rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-lg border border-black/10">
              AFTER · MIRROR CERAMIC GLOSS
            </span>
          </div>

          {/* Vertical Slider Handle Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-1 bg-brand shadow-2xl cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-black border-2 border-brand flex items-center justify-center text-brand shadow-2xl">
              <Sliders className="size-5" />
            </div>
          </div>

          {/* Hidden Input Range Slider for Touch & Keyboard Interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
            aria-label="Drag before and after correction comparison slider"
          />
        </div>

      </div>
    </section>
  )
}
