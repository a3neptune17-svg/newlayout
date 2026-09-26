"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Sparkles, Layers, Wrench } from "lucide-react"

export function Master2Ecosystem() {
  return (
    <section id="categories" className="relative bg-black py-20 text-white border-b border-white/10 overflow-hidden">
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
              alt="PAINT PROTECTION FILM"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground font-black">
                <ShieldCheck className="size-5 text-black" />
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

          {/* Card 2: 5-col Coatings */}
          <div className="lg:col-span-5 relative h-96 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_180823.jpg.jpeg"
              alt="COATINGS"
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
                9H & GRAPHENE SHIELD
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase text-white">COATINGS</h3>
              <p className="mt-1 text-xs text-white/70">Hydrophobic bead gloss and UV chemical shield.</p>
            </div>
          </div>

          {/* Card 3: 5-col Auto Mods */}
          <div className="lg:col-span-5 relative h-80 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_181154.jpg.jpeg"
              alt="AUTO MODS"
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
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">AUTO MODS</h3>
              <p className="mt-1 text-xs text-white/70">Custom enhancement, machine polishing, and bespoke aesthetic upgrades.</p>
            </div>
          </div>

          {/* Card 4: 7-col Wraps & Sunfilms */}
          <div className="lg:col-span-7 relative h-80 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between group cursor-pointer">
            <Image
              src="/images/IMG_20260809_181254.jpg.jpeg"
              alt="WRAPS & SUNFILMS"
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
