"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const PROTECTION_SERVICES = [
  {
    id: "ceramic",
    num: "01",
    step: "STEP 01",
    title: "CERAMIC COATING",
    shortTitle: "CERAMIC",
    subtitle: "Permanent glass matrix sealing clearcoat against UV oxidation, chemical etching, and environmental fallout.",
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    side: "left",
  },
  {
    id: "ppf",
    num: "02",
    step: "STEP 02",
    title: "PAINT PROTECTION FILM",
    shortTitle: "PPF ARMOR",
    subtitle: "Optically clear, 10-mil self-healing polyurethane film engineered to absorb high-impact stone chips.",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    side: "right",
  },
  {
    id: "correction",
    num: "03",
    step: "STEP 03",
    title: "PAINT CORRECTION",
    shortTitle: "CORRECTION",
    subtitle: "Microscopic pad-and-compound leveling eradicating up to 95% of swirl marks and buffer trails.",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    side: "left",
  },
  {
    id: "interior",
    num: "04",
    step: "STEP 04",
    title: "INTERIOR DETAILING",
    shortTitle: "INTERIOR",
    subtitle: "Hot steam extraction, organic leather feeding, Alcantara revival, and germicidal ozone purge.",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    side: "right",
  },
]

export function Master2Protection() {
  return (
    <section id="protection" className="relative w-full bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-brand block mb-1">
              SURFACE PROTECTION &amp; RESTORATION
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              PROTECTION
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-lg shrink-0 self-start sm:self-auto"
          >
            <span>INQUIRE PROTECTION</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* STAGGERED TIMELINE / CONNECTOR SPINE LAYOUT (Matching Uploaded How It Works Reference Screenshots) */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Connector Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/20 md:-translate-x-1/2 z-0" />

          {/* Staggered Protection Service Cards */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {PROTECTION_SERVICES.map((item) => {
              const isLeft = item.side === "left"

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Central Node Dot (Connecting to Spine) */}
                  <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 size-5 rounded-full border-2 border-[#0B0D0A] bg-brand shadow-[0_0_15px_rgba(229,252,160,0.6)] flex items-center justify-center">
                    <span className="size-1.5 rounded-full bg-black" />
                  </div>

                  {/* Card Container (Positioned Left or Right on Desktop) */}
                  <div className={`w-full pl-12 md:pl-0 ${
                    isLeft
                      ? "md:w-[46%] md:mr-auto"
                      : "md:w-[46%] md:ml-auto"
                  }`}>
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black p-8 sm:p-10 shadow-2xl group hover:border-brand/70 transition-all duration-500">
                      
                      {/* Full-Bleed Background Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                      {/* Large Faint Step Number Watermark */}
                      <span className="absolute top-3 right-6 font-mono font-black text-6xl sm:text-7xl text-white/10 group-hover:text-brand/20 transition-colors select-none pointer-events-none">
                        {item.num}
                      </span>

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
                        <div>
                          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand bg-black/70 px-3 py-1 rounded-full border border-brand/30 inline-block mb-3">
                            {item.step}
                          </span>

                          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs text-white/75 leading-relaxed font-normal max-w-sm">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-6 border-t border-white/15 flex items-center justify-between mt-4">
                          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                            VERIFIED PROTECTION
                          </span>
                          <Link
                            href="#contact"
                            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
                          >
                            <span>INQUIRE</span>
                            <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
