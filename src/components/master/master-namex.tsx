"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles, ArrowUpRight } from "lucide-react"

export function MasterNamex() {
  return (
    <section id="about-namex" className="relative bg-[#0B0D0A] py-16 lg:py-20 text-white border-b border-white/10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Dominant Primary Heading Hierarchy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-3 shadow-sm">
            <Sparkles className="size-3 text-black" />
            <span>SURFACE SCIENCE LAB</span>
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            NAMEX <span className="text-white/85">STUDIO</span>
          </h2>

          <h3 className="mt-3 text-lg sm:text-xl font-bold uppercase tracking-wide text-white/70">
            AUTOMOTIVE CRAFTSMANSHIP &amp; SURFACE SCIENCE
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-normal leading-relaxed">
            Tailored automotive surface engineering combining multi-stage paint leveling, 9H nano-ceramic glass bonding, and optical self-healing film installations.
          </p>
        </div>

        {/* Centerpiece NameX Video Player */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black h-[320px] sm:h-[440px] lg:h-[500px] shadow-2xl group max-w-5xl mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
          >
            <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* NameX Logo Overlay */}
          <div className="absolute top-6 left-6 rounded-2xl bg-black/80 backdrop-blur-md p-4 border border-white/15">
            <Image
              src="/images/Namex white background only.png"
              alt="NameX Studio Logo"
              width={180}
              height={90}
              className="h-10 w-auto object-contain filter invert"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
              <Sparkles className="size-3 text-black" />
              <span>NAMEX REEL</span>
            </span>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-black text-black hover:bg-brand transition-all uppercase tracking-widest"
            >
              <span>STUDIO INQUIRY</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
