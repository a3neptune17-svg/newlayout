"use client"

import Image from "next/image"
import { Award, Quote } from "lucide-react"

export function About01() {
  return (
    <section id="about" className="relative bg-[#F9F9FB] text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              OUR BRAND IDENTITY
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              ABOUT <span className="underline decoration-brand decoration-4 underline-offset-4">MR. DETAILER</span>
            </h2>
          </div>
        </div>

        {/* Image-Led Story Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Philosophy Quote */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight">
              DETAILING TREATED LIKE BESPOKE CRAFTSMANSHIP
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Mr. Detailer started with a simple belief: a car deserves the exact same care as any piece you would call a craft. Every wash, correction, and surface coating is conducted by hand by technicians trained to notice details standard detailing shops ignore.
            </p>

            {/* Philosophy Quote Card */}
            <div className="relative rounded-2xl bg-slate-950 p-6 sm:p-8 text-white shadow-xl overflow-hidden">
              <Quote className="absolute right-4 top-4 size-16 text-white/10 pointer-events-none" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand block mb-2">
                OUR PHILOSOPHY
              </span>
              <p className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white leading-snug">
                &ldquo;A car deserves the exact same care as any piece you would call a craft.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-white/70">
                <Award className="size-4 text-brand" />
                <span>MR. DETAILER STUDIO · LUDHIANA &amp; JAMMU</span>
              </div>
            </div>
          </div>

          {/* Right Supporting Visual */}
          <div className="lg:col-span-5">
            <div className="relative h-80 sm:h-[440px] w-full rounded-3xl overflow-hidden border border-slate-300 shadow-2xl group">
              <Image
                src="/images/IMG_20260809_180252.jpg.jpeg"
                alt="Studio technician working on vehicle"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand block mb-1">
                  STUDIO ARCHIVE
                </span>
                <p className="text-xs font-bold leading-snug">
                  Climate-controlled bay inspection under studio LED illumination arrays.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
