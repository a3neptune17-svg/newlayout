"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioGallery() {
  return (
    <section id="our-work" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            OUR WORK
          </span>
          <span className="text-[10px] font-mono text-white/40">
            EDITORIAL PROJECT ARCHIVE
          </span>
        </div>

        {/* CONTROLLED EDITORIAL COMPOSITION (50/50 Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Left Panel (5 cols): Statement Block */}
          <div className="lg:col-span-5 bg-[#131512] p-8 lg:p-12 flex flex-col justify-between min-h-[380px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                PROJECT REEL
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                OUR MOST RECENT PROJECTS.
              </h2>
            </div>

            <div className="pt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E5FCA0] hover:text-black transition-all border border-white/15"
              >
                <span>EXPLORE ALL PROJECTS</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Panel (7 cols): Featured Project Car Image */}
          <div className="lg:col-span-7 relative min-h-[400px] bg-black overflow-hidden group p-8 flex flex-col justify-between">
            <Image
              src="/images/IMG_20260809_180739.jpg.jpeg"
              alt="Porsche 911 GT3 RS"
              fill
              className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-black bg-[#E5FCA0] px-3 py-1 rounded-full">
                LUDHIANA STUDIO
              </span>
              <div className="size-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black transition-all">
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                PORSCHE 911 GT3 RS
              </h3>
              <p className="text-xs text-white/70 font-mono mt-0.5">
                Full Body XPEL PPF &amp; 10H Graphene Coating
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
