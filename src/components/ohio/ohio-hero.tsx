"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const HERO_SERVICES = [
  { id: "01", title: "GRAPHENE COATING", tag: "10H OXIDE ARMOR", desc: "Extreme hydrophobicity & thermal resilience." },
  { id: "02", title: "PAINT PROTECTION FILM", tag: "SELF-HEALING PPF", desc: "XPEL certified optical polyurethane shield." },
  { id: "03", title: "CERAMIC COATING", tag: "9H NANO MATRIX", desc: "Permanent chemical bond & high-gloss reflection." },
  { id: "04", title: "PAINT CORRECTION", tag: "ZERO DEFECTS", desc: "Multi-pass machine polish erasing 95% of swirls." },
  { id: "05", title: "INTERIOR DETAILING", tag: "CABIN SPA", desc: "Steam extraction, organic leather care & ozone purge." },
]

export function OhioHero() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SERVICES.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const currentSrv = HERO_SERVICES[activeIdx]

  return (
    <section className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      
      {/* 60/40 ASYMMETRIC DESKTOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[82vh] lg:min-h-[85vh] items-stretch">
        
        {/* LEFT 7-COL PANEL: Dominant Video Canvas */}
        <div className="lg:col-span-7 relative flex flex-col justify-between p-8 lg:p-12 bg-black overflow-hidden group min-h-[440px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-55 filter brightness-[0.5] contrast-[1.05]"
          >
            <source src="/videos/video-project-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

          {/* Top Identity */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="rounded-xl bg-white p-2.5 inline-block border border-white/20 shadow-md">
              <Image
                src="/logo.png"
                alt="Mr. Detailer Studio"
                width={130}
                height={36}
                className="h-7 w-auto object-contain"
                priority
              />
            </div>
            <span className="text-[10px] font-mono text-white/50 bg-black/60 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
              OHIO STUDIO
            </span>
          </div>

          {/* Main Title & Editorial Headline */}
          <div className="relative z-10 my-auto py-12 space-y-4">
            <span className="text-[10px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.3em] block">
              AUTOMOTIVE CRAFTSMANSHIP &amp; SURFACE SCIENCE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
              ARMORED <br />
              <span className="text-[#E5FCA0]">BRILLIANCE.</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/75 max-w-md leading-relaxed font-normal">
              High-end automotive detailing studio operating in Ludhiana &amp; Jammu. Certified XPEL PPF armor &amp; 10H graphene coatings.
            </p>
          </div>

          {/* Bottom Action Bar */}
          <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-white/15">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white hover:bg-white/20 transition-all border border-white/15"
            >
              <span>SERVICES</span>
            </Link>
          </div>
        </div>

        {/* RIGHT 5-COL PANEL: Quiet Dynamic Service Ticker */}
        <div className="lg:col-span-5 bg-[#131512] border-t lg:border-t-0 lg:border-l border-white/10 p-8 lg:p-12 flex flex-col justify-between">
          
          <div className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.25em] block">
              STUDIO SPECIALTIES
            </span>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block">
                {currentSrv.tag}
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
                {currentSrv.title}
              </h2>
              <p className="text-xs text-white/70 leading-relaxed pt-1">
                {currentSrv.desc}
              </p>
            </div>
          </div>

          {/* Ticker Indicator Ticks */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {HERO_SERVICES.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx ? "w-8 bg-[#E5FCA0]" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Select ${srv.title}`}
                />
              ))}
            </div>

            <span className="text-[10px] font-mono font-bold text-white/40">
              0{activeIdx + 1} / 05
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
