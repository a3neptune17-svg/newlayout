"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Camera } from "lucide-react"

export function Work01() {
  return (
    <section id="our-work" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black">
              <Camera className="size-3.5 text-black" />
              <span>COMPLETED WORK</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              OUR WORK <span className="underline decoration-brand decoration-4 underline-offset-4">&amp; FINISHED REFLECTIONS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Explore recent paint corrections, XPEL self-healing film installs, and 9H nano-ceramic coatings delivered from our studio.
            </p>
          </div>

          <Link
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-md shrink-0"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Photography Showcase Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Work Image (col-span-8) */}
          <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-white p-6 shadow-xl group">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4">
              <Image
                src="/images/IMG_20260809_181154.jpg.jpeg"
                alt="Full body paint correction & ceramic coating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <span className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest text-brand border border-brand/30">
                FULL BODY CORRECTION &amp; 9H COATING
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-slate-900 pt-2 border-t border-slate-200">
              <div>
                <span className="text-slate-500 font-mono text-[10px] block uppercase">PROJECT SPECIFICATION:</span>
                <span className="text-sm font-black uppercase">2-STAGE MACHINE POLISH &amp; 9H CERAMIC MATRIX</span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                SWIRL REMOVAL: 99.4%
              </span>
            </div>
          </div>

          {/* Two Supporting Detail Images (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 shadow-xl flex-1 flex flex-col justify-between group">
              <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-3">
                <Image
                  src="/images/IMG_20260809_180906.jpg.jpeg"
                  alt="XPEL PPF edge wrap detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  XPEL PPF EDGE WRAP
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-tight text-slate-900 block">
                10-MIL POLYURETHANE HIGH-IMPACT SHIELD
              </span>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 shadow-xl flex-1 flex flex-col justify-between group">
              <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-3">
                <Image
                  src="/images/IMG_20260809_181254.jpg.jpeg"
                  alt="Cabin leather spa detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  LEATHER &amp; CABIN SPA
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-tight text-slate-900 block">
                STEAM SANITIZATION &amp; MATTE UV GUARD
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
