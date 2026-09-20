"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen } from "lucide-react"

export function Blog01() {
  return (
    <section id="blog" className="relative bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black">
              <BookOpen className="size-3.5 text-black" />
              <span>DETAILING INSIGHTS</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              LEARN THE <span className="underline decoration-brand decoration-4 underline-offset-4">BASICS</span>
            </h2>
          </div>

          <Link
            href="#booking"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black hover:text-brand transition-colors pb-1 border-b border-black/30 hover:border-black shrink-0"
          >
            <span>EXPLORE ALL GUIDES</span>
            <ArrowUpRight className="size-4 text-black" />
          </Link>
        </div>

        {/* 1 Prominent Hero Article (col-span-2) + 2 Supporting Stories (col-span-1) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Prominent Hero Article */}
          <Link
            href="#booking"
            className="group relative lg:col-span-2 flex h-[460px] sm:h-[520px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-black transition-all duration-500 hover:border-black hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/IMG_20260809_180823.jpg.jpeg"
                alt="How to Maintain Ceramic Coatings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-md border border-black/10">
                FEATURED GUIDE
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                9H NANO CARE
              </span>
            </div>

            <div className="relative z-10 p-6 sm:p-8 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-brand block mb-2">
                COMPLETE MAINTENANCE GUIDE
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-lg group-hover:text-brand transition-colors">
                HOW TO MAINTAIN CERAMIC COATINGS FOR MAXIMUM GLOSS
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/80 line-clamp-2">
                Essential pH-neutral washing protocols, topper sealant applications, and studio inspection intervals to preserve your 9H glass shield.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand">
                <span>READ FEATURED GUIDE</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>

          {/* Supporting Stories Stack */}
          <div className="flex flex-col gap-6">
            
            <Link
              href="#booking"
              className="group relative flex flex-1 min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-black transition-all duration-500 hover:border-black hover:shadow-xl p-6"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/IMG_20260809_180906.jpg.jpeg"
                  alt="Can You Use Snow Foam Daily?"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                  WASH TECHNIQUES
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-brand transition-colors">
                  CAN YOU USE SNOW FOAM DAILY FOR PRE-WASHING?
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-brand">
                  <span>READ GUIDE</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>

            <Link
              href="#booking"
              className="group relative flex flex-1 min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-black transition-all duration-500 hover:border-black hover:shadow-xl p-6"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/IMG_20260809_181154.jpg.jpeg"
                  alt="The Art of Machine Polishing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                  PAINT RESTORATION
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-brand transition-colors">
                  THE ART OF MULTI-STAGE MACHINE POLISHING
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-brand">
                  <span>READ GUIDE</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}
