"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Award, ArrowUpRight, Sparkles } from "lucide-react"

export function NamexIntroSection() {
  return (
    <section id="about-namex" className="relative bg-white py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/2 size-96 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Integrated Studio Video Player with NameX Logo */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-black h-80 sm:h-96 shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* NameX Logo Badge Overlay */}
              <div className="absolute top-6 left-6 rounded-2xl bg-black/80 backdrop-blur-md p-4 border border-white/15">
                <Image
                  src="/images/Namex white background only.png"
                  alt="NameX Studio Logo"
                  width={180}
                  height={90}
                  className="h-10 w-auto object-contain filter invert"
                />
              </div>

              {/* Bottom Video Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-md">
                  <Sparkles className="size-3 text-black" />
                  <span>NAMEX STUDIO REEL</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
                  SURFACE SCIENCE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Story Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
              <Sparkles className="size-3.5 text-black" />
              <span>NAMEX STUDIO</span>
            </div>

            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              AUTOMOTIVE CRAFTSMANSHIP <br />
              <span className="underline decoration-brand decoration-4 underline-offset-4">&amp; SURFACE SCIENCE</span>
            </h2>

            <p className="mt-6 text-base text-slate-700 leading-relaxed font-medium">
              NameX Studio delivers tailored automotive care combining advanced paint restoration, nano-ceramic glass coatings, and surface protection film application. Every vehicle undergoes rigorous panel inspection to ensure uncompromised clarity and long-term gloss retention.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-xl"
              >
                <span>VISIT OUR STUDIO</span>
                <ArrowUpRight className="size-4 stroke-[3]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
