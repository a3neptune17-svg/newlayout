"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react"

export function MasterAbout() {
  return (
    <section id="about" className="relative bg-[#F9F9FB] py-16 lg:py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Sparkles className="size-3 text-black" />
              <span>STUDIO HERITAGE</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              ABOUT US
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-6 py-3 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-sm"
          >
            <span>VISIT OUR STUDIO</span>
            <ArrowUpRight className="size-4 text-brand group-hover:text-black" />
          </Link>
        </div>

        {/* Image-Led Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Studio Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden rounded-3xl border border-slate-300 shadow-xl bg-black group">
              <Image
                src="/images/IMG_20260809_181154.jpg.jpeg"
                alt="Mr. Detailer Studio"
                fill
                className="object-cover filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                  <ShieldCheck className="size-3 text-black" />
                  <span>PAINT CARE STUDIO</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                  LUDHIANA &amp; JAMMU
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Scannable Story */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0B0D0A] leading-tight">
              PRECISION AUTOMOTIVE CARE &amp; SURFACE RESTORATION
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Mr. Detailer is an automotive detailing studio engineered for vehicle owners who demand uncompromised clarity, self-healing paint protection, and nano-glass ceramic finishes.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Every vehicle entering our climate-controlled bays is processed under high-CRI inspection lighting using precision compounds, XPEL self-healing films, and certified ceramic coatings.
            </p>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-sm"
              >
                <span>CONNECT WITH OUR TEAM</span>
                <ArrowUpRight className="size-4 text-brand group-hover:text-black" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
