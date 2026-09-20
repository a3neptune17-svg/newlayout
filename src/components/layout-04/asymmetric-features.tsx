"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Sparkles, Layers, Wrench } from "lucide-react"

export function BrandStatementAsymmetric() {
  return (
    <section className="relative bg-black py-20 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 60/40 ASYMMETRIC SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* 60% Left Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black bg-brand px-3 py-1 rounded-sm">
                ART-DIRECTED CONCEPT
              </span>
              <span className="text-xs font-mono text-white/40">04 // 05</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              PRECISION <br />
              <span className="text-brand">SURFACE ARTISTRY</span>
            </h2>

            <p className="text-base text-white/70 max-w-xl leading-relaxed">
              Mr. Detailer operates as an advanced automotive studio across Ludhiana and Jammu. We engineer protective surface armor for high-end motorcars through multi-pass paint correction and self-healing film installation.
            </p>
          </div>

          {/* 40% Right Side: Offset Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl translate-y-2 lg:-translate-y-6">
              <span className="text-[10px] font-mono text-brand uppercase tracking-widest block mb-2">
                STUDIO CREDENTIALS
              </span>
              <h3 className="text-2xl font-black uppercase text-white leading-tight">
                4.9 GOOGLE RATED STUDIO
              </h3>
              <p className="mt-2 text-xs text-white/60">
                Operating in Ludhiana Sarabha Nagar &amp; Jammu City. Specialized in PPF, Ceramic &amp; Restorative Detailing.
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">+91 97793 97773</span>
                <Link href="#contact" className="text-xs font-black uppercase tracking-widest text-brand flex items-center gap-1 hover:underline">
                  <span>CONTACT</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export function ServiceMosaicAsymmetric() {
  return (
    <section className="relative bg-black py-20 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand">
            STAGGERED MOSAIC
          </span>
          <h2 className="mt-2 text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            SERVICE <span className="text-brand">ECOSYSTEM</span>
          </h2>
        </div>

        {/* ASYMMETRIC STAGGERED GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Large 7-col PPF */}
          <div className="lg:col-span-7 relative h-96 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_180906.jpg.jpeg"
              alt="PPF"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground font-black">
                <ShieldCheck className="size-5" />
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-brand bg-black/60 px-3 py-1 rounded-full border border-white/10">
                FLAGSHIP ARMOR
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white">PAINT PROTECTION FILM</h3>
              <p className="mt-1 text-xs text-white/70 max-w-md">10-mil self-healing optical defense shield against rock chips and road abrasion.</p>
            </div>
          </div>

          {/* Card 2: 5-col Ceramic */}
          <div className="lg:col-span-5 relative h-96 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_180823.jpg.jpeg"
              alt="Ceramic"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand border border-white/20">
                <Sparkles className="size-5" />
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-white/70 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                9H NANO GLASS
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase text-white">CERAMIC &amp; GRAPHENE</h3>
              <p className="mt-1 text-xs text-white/70">Hydrophobic bead gloss and UV chemical shield.</p>
            </div>
          </div>

          {/* Card 3: 5-col Restoration */}
          <div className="lg:col-span-5 relative h-80 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_181154.jpg.jpeg"
              alt="Correction"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand border border-white/20">
                <Wrench className="size-5" />
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase text-white">PAINT CORRECTION</h3>
              <p className="mt-1 text-xs text-white/70">Multi-stage machine polishing removing 90%+ swirls.</p>
            </div>
          </div>

          {/* Card 4: 7-col Wraps & Styling */}
          <div className="lg:col-span-7 relative h-80 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_181254.jpg.jpeg"
              alt="Wraps"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand border border-white/20">
                <Layers className="size-5" />
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase text-white">WRAPS &amp; SUNFILMS</h3>
              <p className="mt-1 text-xs text-white/70">Custom color change wraps, chrome delete, and heat rejection window sunfilms.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
