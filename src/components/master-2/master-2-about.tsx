"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react"

export function Master2About() {
  return (
    <section id="about" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black border border-black/10">
              <Sparkles className="size-3.5 text-black" />
              <span>THE PHILOSOPHY</span>
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              ABOUT <span className="underline decoration-brand decoration-4 underline-offset-4">MR. DETAILER</span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-md"
          >
            <span>VISIT OUR STUDIO</span>
            <ArrowUpRight className="size-4 text-brand group-hover:text-black" />
          </Link>
        </div>

        {/* Image-Led Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Short Scannable Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0B0D0A] leading-tight font-serif">
              DETAILING TREATED LIKE <br />
              <span className="underline decoration-brand decoration-4 underline-offset-4">BESPOKE CRAFTSMANSHIP</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Mr. Detailer operates on a simple premise: a car deserves the exact same care as any bespoke craft. Every hand wash, machine paint correction, and surface coating is executed in climate-controlled studio bays.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Using high-CRI inspection lights, precision compounds, XPEL self-healing films, and certified ceramic coatings, we deliver uncompromised clarity and long-term protection.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-md"
              >
                <span>CONNECT WITH OUR TEAM</span>
                <ArrowUpRight className="size-4 text-brand" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Studio Detailing Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[360px] sm:h-[460px] w-full overflow-hidden rounded-3xl border-2 border-slate-950 shadow-2xl bg-black group">
              <Image
                src="/images/IMG_20260809_181154.jpg.jpeg"
                alt="Detailing Treated Like Bespoke Craftsmanship"
                fill
                className="object-cover filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                  <ShieldCheck className="size-3 text-black" />
                  <span>STUDIO ARCHIVE</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 font-mono">
                  LUDHIANA &amp; JAMMU
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
