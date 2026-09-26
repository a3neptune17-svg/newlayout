"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioAbout() {
  return (
    <section id="about" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            ABOUT MR. DETAILER
          </span>
          <span className="text-[10px] font-mono text-white/40">
            STUDIO PHILOSOPHY
          </span>
        </div>

        {/* 50/50 SPLIT BLOCK COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Left Panel (6 cols): Selective Acid Lime Card (#E5FCA0) */}
          <div className="lg:col-span-6 bg-[#E5FCA0] text-black p-8 lg:p-14 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest block mb-4">
                STATEMENT
              </span>

              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                &ldquo;HAND-FINISHED PAINT CORRECTION, CERAMIC PROTECTION, AND XPEL PPF ARMOR ENGINEERED FOR LUXURY MOTORCARS.&rdquo;
              </blockquote>
            </div>

            <div className="pt-8 border-t border-black/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider block">MR. DETAILER STUDIO</span>
                <span className="text-[10px] font-mono text-black/70">Ludhiana Sarabha Nagar &amp; Jammu City</span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-black text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider shadow-md"
              >
                <span>VISIT STUDIO</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Panel (6 cols): Full-Height Photo */}
          <div className="lg:col-span-6 relative min-h-[400px] bg-black overflow-hidden group p-8 flex flex-col justify-between">
            <Image
              src="/images/IMG_20260809_180419.jpg.jpeg"
              alt="About Mr. Detailer Studio"
              fill
              className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-black uppercase text-white">RESTORATIVE SURFACING LAB</h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
