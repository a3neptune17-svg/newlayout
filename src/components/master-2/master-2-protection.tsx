"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, ShieldCheck, Droplets, Gauge, Layers, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const PROTECTION_SERVICES = [
  {
    id: "graphene",
    num: "01",
    title: "GRAPHENE COATING",
    subtitle: "10H GRAPHENE OXIDE",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    badge: "GRAPHENE SHIELD",
    tag: "10H OXIDE",
    specs: ["10H GRAPHENE OXIDE", "HEAT DISSIPATION", "EXTREME HYDROPHOBIC", "3-YR WARRANTY"],
  },
  {
    id: "ppf",
    num: "02",
    title: "PAINT PROTECTION FILM",
    subtitle: "SELF-HEALING FILM",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    badge: "FLAGSHIP ARMOR",
    tag: "SELF-HEALING",
    specs: ["10-MIL URETHANE FILM", "SELF-HEALING CLEARCOAT", "STONE CHIP DEFENSE", "VIN DIGITAL WARRANTY"],
  },
  {
    id: "ceramic",
    num: "03",
    title: "CERAMIC COATING",
    subtitle: "NANO GLASS MATRIX",
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    icon: Layers,
    badge: "PERMANENT SHINE",
    tag: "9H NANO SHIELD",
    specs: ["9H HARDNESS MATRIX", "UV ETCH DEFENSE", "HIGH-GLOSS REFLECTION", "5-YR STUDIO WARRANTY"],
  },
  {
    id: "correction",
    num: "04",
    title: "PAINT CORRECTION",
    subtitle: "SWIRL-FREE FINISH",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Gauge,
    badge: "RESTORATION",
    tag: "ZERO DEFECTS",
    specs: ["MULTI-PASS POLISH", "95%+ SWIRL ERASURE", "RAKING LIGHT AUDIT", "FACTORY CLEAR GLOSS"],
  },
  {
    id: "interior",
    num: "05",
    title: "INTERIOR DETAILING",
    subtitle: "LUXURY CABIN CARE",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Droplets,
    badge: "CABIN SPA",
    tag: "CABIN CARE",
    specs: ["HOT STEAM SANITIZE", "LEATHER CONDITIONING", "ALCANTARA REVIVAL", "OZONE AIR PURIFIER"],
  },
]

export function Master2Protection() {
  const [activeCard, setActiveCard] = useState("graphene")

  const activeIndex = PROTECTION_SERVICES.findIndex((s) => s.id === activeCard)

  const nextCard = () => {
    const nextIdx = (activeIndex + 1) % PROTECTION_SERVICES.length
    setActiveCard(PROTECTION_SERVICES[nextIdx].id)
  }

  const prevCard = () => {
    const prevIdx = (activeIndex - 1 + PROTECTION_SERVICES.length) % PROTECTION_SERVICES.length
    setActiveCard(PROTECTION_SERVICES[prevIdx].id)
  }

  return (
    <section id="protection" className="relative w-full bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Controller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              EXPANDABLE PRESENTATION
            </span>
            <h2 className="mt-3 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase leading-none">
              PROTECTION
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevCard}
                aria-label="Previous Service"
                title="Slide to Previous Service"
                className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-950 hover:bg-slate-950 hover:text-white transition border border-slate-300 shadow-md cursor-pointer"
              >
                <ChevronLeft className="size-5 stroke-[3]" />
              </button>
              <button
                type="button"
                onClick={nextCard}
                aria-label="Next Service"
                title="Slide to Next Service"
                className="flex size-11 items-center justify-center rounded-full bg-brand text-black hover:scale-105 transition shadow-md border border-black/10 cursor-pointer"
              >
                <ChevronRight className="size-5 stroke-[3]" />
              </button>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all shrink-0 uppercase tracking-widest shadow-xl border border-slate-950"
            >
              QUOTE <ArrowUpRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        {/* 5-COLUMN EXPANDABLE HORIZONTAL PRESENTATION */}
        <div className="relative flex flex-col lg:flex-row gap-4 h-[560px] lg:h-[480px]">
          {PROTECTION_SERVICES.map((item) => {
            const Icon = item.icon
            const isExpanded = activeCard === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-700 cursor-pointer flex flex-col justify-between p-6 sm:p-7 ${
                  isExpanded
                    ? "lg:flex-[3.5] bg-slate-950 text-white border-slate-950 shadow-2xl shadow-slate-950/30"
                    : "lg:flex-1 bg-slate-100/90 text-slate-900 border-slate-200 hover:border-slate-400"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isExpanded ? "opacity-40 scale-105" : "opacity-15 hover:opacity-25"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 z-0 transition-colors duration-700 ${
                  isExpanded ? "bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" : "bg-gradient-to-t from-slate-100 via-slate-100/40 to-transparent"
                }`} />

                {/* Top Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex size-10 items-center justify-center rounded-2xl border backdrop-blur-md transition-colors ${
                      isExpanded ? "bg-white/10 border-white/20 text-brand" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}>
                      <Icon className="size-5" />
                    </span>
                    <span className={`text-xs font-mono font-bold ${isExpanded ? "text-brand" : "text-slate-400"}`}>
                      {item.num}
                    </span>
                  </div>
                  <span className={`rounded-full px-3.5 py-1 text-[10px] font-black tracking-wider ${
                    isExpanded ? "bg-brand text-black" : "bg-slate-950 text-white"
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    isExpanded ? "text-brand" : "text-slate-500"
                  }`}>
                    {item.subtitle}
                  </span>
                  <h3 className={`text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight mt-1 ${
                    isExpanded ? "text-white" : "text-slate-950"
                  }`}>
                    {item.title}
                  </h3>

                  {isExpanded && (
                    <div className="mt-5 space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        {item.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-white bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                            <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/50">WARRANTY</span>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand hover:underline"
                        >
                          <span>BOOK</span>
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
